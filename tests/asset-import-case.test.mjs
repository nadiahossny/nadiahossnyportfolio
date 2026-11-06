import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceRoot = fileURLToPath(new URL('../src/', import.meta.url));

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(fullPath) : /\.[jt]sx?$/.test(entry.name) ? [fullPath] : [];
  }))).flat();
}

test('static asset imports use exact on-disk path casing', async () => {
  const files = await sourceFiles(sourceRoot);
  const imports = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
      if (match[1].startsWith('.') && match[1].includes('/assets/')) imports.push({ file, specifier: match[1] });
    }
  }

  for (const { file, specifier } of imports) {
    let current = path.dirname(file);
    for (const segment of specifier.split(/[\\/]/)) {
      if (!segment || segment === '.') continue;
      if (segment === '..') {
        current = path.dirname(current);
        continue;
      }
      const entries = await readdir(current);
      assert.ok(entries.includes(segment), `${path.relative(sourceRoot, file)} imports ${specifier}: path segment "${segment}" does not exactly match an on-disk name`);
      current = path.join(current, segment);
    }
  }

  assert.ok(imports.length > 0, 'expected to audit the portfolio asset imports');
});
