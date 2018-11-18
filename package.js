const { exec, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// bash
let subProcess;

const doPack = async (version, msg) => {
  const dir = path.join(__dirname, 'lubanso', version, 'app/pyserver/');

  let core;
  fs.readdirSync(dir).forEach(d => {if (/core/.test(d)) core = d});

  const platform = fs.statSync(path.join(dir, core)).isDirectory() ? 'windows' : 'mac';

  console.log(platform, 'platform');

  // 生成文件位置
  const packPath = getPackagePath(version, platform);

  // 输出文件位置
  const targetPath = getCopyPath(version, platform);

  console.log(getPackageName(version, platform), 'yyyy');

  const downloadUrl = `static/output/${getPackageName(version, platform)}`;

  // 清除老包
  clearOlds(version, platform);

  // 打包命令
  const command = getCommand(version, platform);

  // 打包
  const packed = await pack(command, msg);
  console.log('packed', packed);

  if (!packed) return;

  console.log('packPath', packPath);
  console.log('targetPath', targetPath);
  // 复制
  const copied = await copy(packPath, targetPath);

  if (!copied) return;

  return downloadUrl;
};

const getProjectDir = version => path.join(__dirname, 'lubanso', version);

const getPackageName = (version, platform) =>
  (platform === 'windows' ?
    `Lubanso Setup ${version}.exe` :
    `Lubanso-${version}.dmg`);

const getPackagePath = (version, platform) =>
  path.join(__dirname, 'lubanso', version, 'release', getPackageName(version, platform));

const getCopyPath = (version, platform) =>
  path.join(__dirname, 'static/output', getPackageName(version, platform));

const getCommand = (version, platform) => {
  const projectPath = getProjectDir(version);
  const command = platform === 'windows' ? 'package-win' : 'package';
  return [`cd ${projectPath} \n`, `yarn run ${command} \n`]
};

const pack = (command, msg) =>
  new Promise((resolve, reject) => {
    subProcess = spawn('bash');
    subProcess.title = 'lbspacker';

    // 消息监听，监听子进程的输出。并在主进程中打印出来。
    function onData(data) {
      process.stdout.write(data); //获取当前进程，并在输出中写入某内容。关键是process表示的是当前进程
      msg(data);
    }
    //整个进程的错误监听
    subProcess.on('error', function () {
      console.log("error");
      console.log(arguments);
    });
    //设置消息监听
    subProcess.stdout.on('data', onData);
    subProcess.stderr.on('data', onData);
    subProcess.on('close', (code) => {
      resolve(true);
      console.log(`子进程退出码：${code}`);
    }); // 监听进程退出
    //向子进程发送命令
    subProcess.stdin.write(command[0]);   // 写入数据
    subProcess.stdin.write(command[1]);   // 写入数据
    subProcess.stdin.end();
  });

const copy = (packPath, targetPath) =>
  new Promise((resolve, reject) => {
    const p = spawn('cp', ['-f', packPath, targetPath]);
    p.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    });

    p.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    p.on('error', (data) => {
      console.log(`error: ${data}`)
    });

    p.on('close', (code) => {
      console.log(`子进程退出码：${code}`);
      resolve(true);
    });
    // exec(`cp -f ${packPath} ${targetPath}`, (err) => {
    //   if (err) {
    //     console.log(err);
    //     reject(err);
    //     return;
    //   }
    //   resolve()
    // })
  });

// 清除存在的包
function clearOlds(version, platform) {
  const p = path.join(getPackagePath(version, platform), '../');
  const files = fs.readdirSync(p) || [];
  files.forEach((file) => {
    if (/\d.\d.\d./.test(file)) {
      fs.unlinkSync(path.join(p, file));
    }
  })
}

// 中止打包
function stopPack() {
  // subProcess.kill();
  // process.kill(-subProcess.pid, 'SIGKILL')
  exec(`pkill -9 ${-subProcess.title}`);
  console.log(subProcess.gid, 'pid')
}

module.exports = {
  pack: doPack,
  stopPack
};