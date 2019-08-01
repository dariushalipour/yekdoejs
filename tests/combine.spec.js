/* global test, expect */

var combine = require('../fn/combine')

test('value[n+2] should not be combined by unit[n]', function () {
  expect(combine([60], [30, 5, 1])).toBe(NaN)
})

test('unit[0] should unwrap value', function () {
  expect(combine([], [15])).toBe(15)
})

test('combine [15, 1, 5] using unit [60,60] should equal 18075', function () {
  expect(combine([60, 60], [15, 1, 5])).toBe(18075)
})
