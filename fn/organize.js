/**
 * organize
 *
 * @private
 * @param {Array<Number>} units
 * @param {Number} combinedValue
 * @returns {Array<Number>}
 */
function organize (units, combinedValue) {
  var groups = []
  var groupIndex = 0
  var remainder = combinedValue

  do {
    var unit = units[groupIndex]
    var groupValue = unit ? remainder % unit : remainder
    groups.push(groupValue)
    remainder = (remainder - groupValue) / (unit || 1)
    groupIndex += 1
  } while (remainder > 0)

  var remainingGroups = units.length + 1 - groups.length
  for (var i = 0; i < remainingGroups; i++) {
    groups.push(0)
  }

  return groups
}

module.exports = organize
