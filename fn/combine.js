/**
 * combine
 *
 * @private
 * @param {Array<Number>} units
 * @param {Array<Number>} organizedValue
 * @returns {Number}
 */
function combine (units, organizedValue) {
  if (units.length + 1 < organizedValue.length) return NaN

  var output = 0
  var times = 1
  var unitIndex = -2

  for (var i = 0; i < organizedValue.length; ++i) {
    times *= units[++unitIndex] || 1
    output += organizedValue[i] * times
  }

  return output
}

module.exports = combine
