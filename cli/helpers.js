const fs = require("fs-extra");
const childProcess = require("child_process");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const dotenv = require("dotenv");

const argv = () => yargs(hideBin(process.argv)).argv;

const remove = (path) => new Promise((resolve, reject) =>
  fs.remove(path, (error) => !!error ? reject(error) : resolve())
);

const copy = (source, destination) => new Promise((resolve, reject) =>
  fs.copy(source, destination, (error) => !!error ? reject(error) : resolve())
);

const exec = (cmd, workindDir) => new Promise((resolve, reject) => 
  childProcess.exec(cmd, { cwd: workindDir }, (error, stdout, stderr) => {
    if (!!stdout) console.info(stdout);
    if (!!stderr) console.warn(stderr);
    return !!error ? reject(error) : resolve();
  })
);

const loadLocalConfig = () => {
  dotenv.config();
};

module.exports = {
  argv,
  remove,
  copy,
  exec,
  loadLocalConfig,
};
