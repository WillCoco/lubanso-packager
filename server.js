const express = require('express');
const next = require('next');
const http = require('http');
const { pack, stopPack } = require('./package');
const { readAvailableVersions, readDownloadUrls } = require('./utils/readFile');
const { saveFile, upload } = require('./utils/saveFile');

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
let isPackaging;
let user;

app.prepare()
  .then(() => {
    const server = express();

    const hs = http.Server(server);
    const io = require('socket.io')(hs);

    io.on('connection', function(socket){
      console.log(socket, 'a user connected');

      // 打包
      socket.on('pack', async function(data) {
        console.log('user pack');
        const { version } = data;
        console.log(version, 9191919);
        if (version) {
          const url = await pack(version, (msg) => {
            io.emit('packMsg', {msg: msg.toString()});
          });
          const list = await readDownloadUrls(port);
          console.log(list, url, '打完包');
          if (url) {
            io.emit('pack', {url: `http://localhost:${port}/${url}`, list});
            return;
          }
          io.emit('pack', {succeed: false});
        }
      });

      // 停止打包
      socket.on('stopPack', function(msg){
        stopPack();
        io.emit('stopPack', msg);
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
      return handle(req, res)
    });

    hs.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });