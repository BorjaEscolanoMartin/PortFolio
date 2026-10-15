// Resolves a translatable `{ es, en }` value for the given language.
// Shared values (strings, numbers, icons, null...) are returned unchanged.
export function localize(value, lang) {
  if (value !== null && typeof value === 'object' && 'es' in value) {
    return value[lang] ?? value.es;
  }
  return value;
}
