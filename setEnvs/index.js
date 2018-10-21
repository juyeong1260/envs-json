const isPlainObj = require('../utils/isPlainObject');
const addEnvs = require('../utils/addEnvs');

function setEnvs(envs = {}, options = {}) {
  const {
    force = false,
    log = false
  } = options;
  if (!isPlainObj(envs)) {
    throw new Error('envs is not plain object.');
  }
  const newEnvs = addEnvs(envs, force, log);
  log && console.log(newEnvs);
}

module.exports = setEnvs;