function isPlainObject(obj) {
  return typeof obj === 'object' &&
    obj.constructor === Object;
}

module.exports = isPlainObject;