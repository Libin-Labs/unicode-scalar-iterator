import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('splits ASCII characters', () => {
  assert.deepEqual(api.unicodeScalars('abc'), ['a', 'b', 'c']);
});
test('keeps surrogate pair together', () => {
  assert.deepEqual(api.unicodeScalars('😀'), ['😀']);
});
test('splits mixed text', () => {
  assert.deepEqual(api.unicodeScalars('A😀'), ['A', '😀']);
});
test('returns empty for empty string', () => {
  assert.deepEqual(api.unicodeScalars(''), []);
});
test('leaves combining marks separate', () => {
  assert.deepEqual(api.unicodeScalars('é'), ['e', '́']);
});
test('rejects non-string input', () => {
  assert.throws(() => api.unicodeScalars([]), TypeError);
});
