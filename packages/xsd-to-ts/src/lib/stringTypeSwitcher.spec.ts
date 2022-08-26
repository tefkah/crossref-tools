import { stringTypeSwitcher } from './stringTypeSwitcher'

it("should work if i pass functions which don' take an argument", async () => {
  expect(await stringTypeSwitcher('http://example.com', { url: () => 'hey' })).toBe('hey')
})
it('should return "url" when path starts with "http"', async () => {
  expect(await stringTypeSwitcher('http://example.com')).toBe('url')
})

it('should return the string when path includes newlines', async () => {
  const string = `this
  i S
  clearly

  text`

  expect(await stringTypeSwitcher(string)).toBe(string)
})

it('should return "filepath" when path does not include "\n"', async () => {
  expect(await stringTypeSwitcher('/path/to/file')).toBe('filepath')
})
