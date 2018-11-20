const fs = require('fs');
const path = require('path');
const { basicUrl } = require('../package.json');
console.log(basicUrl, 'basicUrl')

const readAvailableVersions = () =>
  new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, '../lubanso/'), (err, data) => {
      if (err) {
        reject(err);
      }

      if (data instanceof Array) {
        const arr = data.filter(d => /^\d.\d.\d$/.test(d));
        arr.sort((a, b) => {
          const aNumber = a.replace(/[.]/g, '');
          const bNumber = b.replace(/[.]/g, '');

          return bNumber - aNumber
        });
        resolve(arr);
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
        resolve(d.map(name => ({name, url: `${basicUrl}/static/output/${name}`})));
      }
    });
  });

module.exports = {
  readAvailableVersions,
  readDownloadUrls
};