'use strict';

/**
 * @function
 * @name Utils.math.cycleRestrict
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
exports.cycleRestrict = function (value, min, max) {
  if(value == Number.POSITIVE_INFINITY) {
    return max;
  }
  else if(value == Number.NEGATIVE_INFINITY) {
    return min;
  }

  return value - Math.floor((value - min) / (max - min)) * (max - min);
};

/**
 * @function
 * @name Utils.math.restrict
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
exports.restrict = function (value, min, max) {
  return Math.max(Math.min(value, max), min);
};
