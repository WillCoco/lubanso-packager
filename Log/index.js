const log4js = require('log4js');
const path = require('path');

log4js.configure({
  appenders: {
    stdout: { type: 'stdout' },
    fileInfo: {
      type: 'file',
      filename: path.join(__dirname, 'packager-info.log'),
      pattern: "-yyyy-MM-dd"
    },
    file: {
      type: 'file',
      filename: path.join(__dirname, 'packager-warn.log'),
      pattern: "-yyyy-MM-dd"
    }
  },
  categories: {
    default: { appenders: [ 'file', 'stdout' ], level: 'INFO' },
    // pack: {}
  },
  pm2: true
});


const Log = log4js.getLogger('pack');

Log.info('tetettet');
module.exports = {
  Log
};