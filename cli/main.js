#! /usr/bin/env node
const path = require("path");
const { exec, loadLocalConfig } = require("./helpers");

(async () => {
  try {
    loadLocalConfig();
    await exec("npx strapi develop", path.resolve(__dirname, ".."));
  } catch (error) {
    console.error(error);
  }
})();