function isModuleMissing(error) {
  return error.code === 'MODULE_NOT_FOUND' ||
    error.code === 'ERR_MISSING_MODULE';
}

module.exports = isModuleMissing;