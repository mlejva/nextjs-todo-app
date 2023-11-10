export function replaceString(original: string, searchValue: string, replaceValue: string): string {
  return original.split(searchValue).join(replaceValue);
}