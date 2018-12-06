const fs = require('fs');
const path = require('path');

const readCrashInfo = (logName = 'lubanso-crash.log') =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `../Log/${logName}`), (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data.toString && data.toString());
    });
  });

module.exports = {
  readCrashInfo,
};