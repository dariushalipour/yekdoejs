/* global test, expect */

var organize = require('../fn/organize')

test('organize 18075 using unit [60, 60, 24] should equal [15, 1, 5, 0]', function () {
  expect(organize([60, 60, 24], 18075)).toStrictEqual([15, 1, 5, 0])
})

test('organize 3 using units[2, 2, 2] should equal [1, 1, 0, 0]', function () {
  expect(organize([2, 2, 2], 3)).toStrictEqual([1, 1, 0, 0])
})

test('organize 3 using units[8] should equal [3, 0]', function () {
  expect(organize([8], 3)).toStrictEqual([3, 0])
})
