const express = require('express');
const next = require('next');
const http = require('http');
const { pack, stopPack } = require('./package');
const { readAvailableVersions, readDownloadUrls } = require('./utils/readFile');
const { saveFile, upload } = require('./utils/saveFile');
const { basicUrl } = require('./package.json');

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    const hs = http.Server(server);
    const io = require('socket.io')(hs);

    io.on('connection', function(socket){
      // 打包
      socket.on('pack', async function(data) {
        // 占用地址
        const user = getClientIp(socket);
        io.emit('packingUser', {user});

        console.log('user pack');
        const { version } = data;
        console.log(version, 9191919);
        if (version) {
          let url;
          try {
            url = await pack(version, (msg) => {
              io.emit('packMsg', {msg: msg.toString()});
            });
          } catch (err) {
            console.log('pack err', err)
          }

          const list = await readDownloadUrls(port);
          console.log(list, url, '打完包');
          if (url) {
            io.emit('pack', {url: `${basicUrl}/${url}`, list});
            io.emit('packingUser', {user: null});
            return;
          }
          io.emit('pack', {succeed: false});
          io.emit('packingUser', {user: null});
          return;
        }
        io.emit('pack', {succeed: false});
        io.emit('packingUser', {user: null});
      });

      // 停止打包
      socket.on('stopPack', function(){
        try {
          stopPack();
        } catch (err) {
          console.log('stopPack err', err)
        }
        io.emit('stopPack', {succeed: true});
      });
    });

    // 获取可打包项
    server.get('/getAvailable', async (req, res) => {
      const list = await readAvailableVersions();
      console.log(list, this, '可打包项');
      res.send(list);
    });

    // 获取可下载项
    server.get('/getUrls', async (req, res) => {
      const list = await readDownloadUrls(port);
      console.log(list, '可下载项');
      res.send(list);
    });

    // 上传核心库
    server.post('/uploadCore', (req, res) => {
      upload(req, res, async (err) => {
        if (err) {
          console.log(err, '上传err')
        }
        await saveFile(req, res);
        res.send({succeed: true});
      });
    });

    server.get('*', (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
      res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      return handle(req, res)
    });

    hs.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });


let getClientIp = function (s) {
  const { address } = s.handshake;
  const { remoteAddress } = s.conn;
  return (address || remoteAddress).replace('::ffff:', '');
};


