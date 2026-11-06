import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('extracts extension', () => {
  assert.equal(api.fileExtension('image.png'), 'png');
});
test('normalizes case', () => {
  assert.equal(api.fileExtension('README.MD'), 'md');
});
test('supports dots in base name', () => {
  assert.equal(api.fileExtension('archive.tar.gz'), 'gz');
});
test('handles path separators', () => {
  assert.equal(api.fileExtension('dir\\name.txt'), 'txt');
});
test('treats dotfile as no extension', () => {
  assert.equal(api.fileExtension('.env'), '');
});
test('handles trailing dot', () => {
  assert.equal(api.fileExtension('file.'), '');
});
