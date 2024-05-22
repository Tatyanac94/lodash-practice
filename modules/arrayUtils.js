const _ = require('lodash');

function chunkArray(array, chunkSize) {
    return _.chunk(array, chunkSize);
}

function findUniqueElements(array) {
    return _.uniq(array);
}

module.exports = {chunkArray, findUniqueElements};
