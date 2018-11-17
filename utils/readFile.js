const fs = require('fs');
const path = require('path');

const readAvailableVersions = () =>
  new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, '../lubanso/'), (err, data) => {
      if (err) {
        reject(err);
      }

      if (data instanceof Array) {
        resolve(data.filter(d => /^\d.\d.\d$/.test(d)));
      }
    });
  });

const readDownloadUrls = (port) =>
  new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, '../static/output/'), (err, data) => {
      if (err) {
        reject(err);
      }

      if (data instanceof Array) {
        const d = data.filter(d => /\d.\d.\d.(exe)$|\d.\d.\d.(dmg)$/.test(d));
        resolve(d.map(name => ({name, url: `http://localhost:${port}/static/output/${name}`})));
      }
    });
  });

module.exports = {
  readAvailableVersions,
  readDownloadUrls
};