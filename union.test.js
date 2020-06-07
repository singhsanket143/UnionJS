const union = require('union.js');

test('unions [1], [2] to equal [1,2]', () => {
  expect(union([1], [2])).toEqual([1,2]);
});

test('unions [1], [] to equal [1]', () => {
  expect(union([1], [])).toEqual([1]);
});

test('unions [], [] to equal []', () => {
  expect(union([], [])).toEqual([]);
});

test('unions [1, 2, 4], [2, 3, 4] to equal [1,2,4,3]', () => {
  expect(union([1,2,4], [2,3,4])).toEqual([1,2,4,3]);
});


test("unions [1], [1, '1'] to equal [1, '1']", () => {
  expect(union([1], [1, '1'])).toEqual([1, '1']);
});

test('unions [{ a: { b: 10 } }], [{ a: { b: 20 } }] to equal [{a: { b: 10 }}, {a: { b: 20 }}]', () => {
  expect(union([{a: { b: 10 }}], [{a: { b: 20 }}])).toEqual([{a: { b: 10 }}, {a: { b: 20 }}]);
});

test("unions [{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2], [{b: 10, c: {z: {t: 5, _t: 5}, f: [ 4]}}, '2'] to equal [{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2, '2']", () => {
  expect(union([{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2], [{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, '2'])).toEqual([{b: 10, c: {z: {t: 5, _t: 5}, f: [4]}}, 2, '2']);
});
