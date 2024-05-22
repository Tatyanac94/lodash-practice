const _ = require('lodash');

function deepCloneObject(object) {
  return _.cloneDeep(object);
}

function mergeObjects(...objects) {
  return _.merge({}, ...objects);
}

module.exports = {deepCloneObject, mergeObjects};
