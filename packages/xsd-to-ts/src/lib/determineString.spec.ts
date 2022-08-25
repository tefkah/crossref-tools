import { determineString } from './determineString'

it('should return "url" when path starts with "http"', () => {
  expect(determineString('http://example.com')).toBe('url')
})

it('should return "path" when path includes "\n"', () => {
  expect(determineString('/path/to/file\n')).toBe('path')
})

it('should return "file" when path does not include "\n"', () => {
  expect(determineString('/path/to/file')).toBe('file')
})
