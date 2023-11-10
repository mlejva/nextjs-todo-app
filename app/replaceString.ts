function replaceString(original: string, find: string, replacement: string): string {
  return original.replace(new RegExp(find, 'g'), replacement);
}

export default replaceString;
