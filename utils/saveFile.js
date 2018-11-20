const multer = require('multer');
const path = require('path');
const fs = require("fs");
const unzipper = require("unzipper");
const { exec } = require("child_process");

const saveFile = (req) =>
  new Promise((resolve, reject) => {
    const { version } = req.query;
    const dir = path.join(__dirname, '../lubanso', version, 'app/pyserver/');

    const files = fs.readdirSync(dir);

    const pp = fs.createReadStream(path.join(dir, files[0]));

    pp.on('end', (err) => {
      // 删除zip
      fs.unlinkSync(path.join(dir, files[0]));

      // 加权限
      const filesUnziped = fs.readdirSync(dir);
      filesUnziped.forEach((file) => {
        exec(`chmod +x ${path.join(dir, file)}`, (err) => {
          if (err) {
            reject();
            return;
          }
          resolve();
        })
      });
    });

    pp.pipe(unzipper.Extract({ path: dir }));
  });



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { version } = req.query;
    const dir = path.join(__dirname, '../lubanso', version, 'app/pyserver/');
    console.log(dir, 'version111');
    // 清空
    deleteFolder(dir);
    // 重建
    fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage }).any();

function deleteFolder(path) {
  let files = [];
  if( fs.existsSync(path) ) {
    files = fs.readdirSync(path);
    files.forEach(function(file,index){
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = {
  upload,
  saveFile
};
