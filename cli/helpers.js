const fs = require("fs-extra");
const childProcess = require("child_process");
const Logger = require("jet-logger")
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const dotenv = require("dotenv");

export const logger = new Logger();

export const argv = () => yargs(hideBin(process.argv)).argv;

export const remove = (path) => new Promise((resolve, reject) =>
  fs.remove(path, (error) => !!error ? reject(error) : resolve())
);

export const copy = (source, destination) => new Promise((resolve, reject) =>
  fs.copy(source, destination, (error) => !!error ? reject(error) : resolve())
);

export const exec = (cmd, workindDir) => new Promise((resolve, reject) => 
  childProcess.exec(cmd, { cwd: workindDir }, (error, stdout, stderr) => {
    if (!!stdout) logger.info(stdout);
    if (!!stderr) logger.warn(stderr);
    return !!error ? reject(error) : resolve();
  })
);

export const loadLocalConfig = () => {
  dotenv.config();
};
