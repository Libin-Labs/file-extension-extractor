export function fileExtension(path: string): string {
  if (typeof path !== 'string') throw new TypeError('Expected path text');
  const name = path.split(/[\\/]/).at(-1) ?? '';
  const index = name.lastIndexOf('.');
  if (index <= 0 || index === name.length - 1) return '';
  return name.slice(index + 1).toLowerCase();
}
