const {resolve} = require('path');
const {existsSync} = require('fs');
const isModuleMissing = require('../utils/isModuleMissing');
const addEnvs = require('../utils/addEnvs');

function loadEnvs(options = {}) {
  const {
    jsonFile = 'env.json',
    force = false,
    log = false
  } = options;
  const ENV_PATH = resolve(`./${jsonFile}`);
  const isEnvExist = existsSync(ENV_PATH);
  if (isEnvExist) {
    try {
      const requireEnvs = require(ENV_PATH);
      const newEnvs = addEnvs(requireEnvs, force, log);
      log && console.log(newEnvs);
    } catch (err) {
      if (isModuleMissing(err)) {
        return {};
      }
      throw err;
    }
  } else {
    console.error(`'${jsonFile}' file is not exist.`);
    process.exit(1);
  }
}

module.exports = loadEnvs;