export const determineString = (path: string): string => {
  if (path.startsWith('http')) {
    return 'url'
  }

  if (path.includes('\n')) {
    return 'path'
  }

  return 'file'
}
