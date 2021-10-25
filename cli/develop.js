#! /usr/bin/env node

const { exec, loadLocalConfig } = require("./helpers");

loadLocalConfig();
exec("yarn strapi develop");