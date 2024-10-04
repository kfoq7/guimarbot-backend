export function transformTitleParam(title: string) {
  return title.toLowerCase().replace(/\s/g, '-')
}
