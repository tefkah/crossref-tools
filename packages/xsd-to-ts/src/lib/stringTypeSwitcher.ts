type StringFunc = (text: string) => any | (() => any)
type AnyFuncAndArgs = StringFunc | [(text: string, ...args: any[]) => any, any[]]

interface SwitchProps {
  url?: AnyFuncAndArgs
  filepath?: AnyFuncAndArgs
  raw?: AnyFuncAndArgs
}

/**
 * Do something depending on the type of text.
 * If no function is provided it will return `filepath`, `url` or `raw` instead of executing the missing function.
 */
export const stringTypeSwitcher = async (
  path: string,
  { filepath, raw, url }: SwitchProps = {},
) => {
  filepath ??= (text) => 'filepath'
  url ??= (text) => 'url'
  raw ??= (text) => text

  if (path.startsWith('http')) {
    return await (Array.isArray(url) ? url[0](path, ...url[1]) : url(path))
  }

  if (!path.includes('\n')) {
    return await (Array.isArray(filepath) ? filepath[0](path, ...filepath[1]) : filepath(path))
  }

  return await (Array.isArray(raw) ? raw[0](path, ...raw[1]) : raw(path))
}

export const stringTypeSwitcherSync = (path: string, { filepath, raw, url }: SwitchProps = {}) => {
  filepath ??= (text) => 'filepath'
  url ??= (text) => 'url'
  raw ??= (text) => text

  if (path.startsWith('http')) {
    return Array.isArray(url) ? url[0](path, ...url[1]) : url(path)
  }

  if (!path.includes('\\n')) {
    return Array.isArray(filepath) ? filepath[0](path, ...filepath[1]) : filepath(path)
  }

  return Array.isArray(raw) ? raw[0](path, ...raw[1]) : raw(path)
}
