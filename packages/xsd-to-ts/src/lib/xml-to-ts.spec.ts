import { xmlToTS } from './xml-to-ts'
describe('xml-to-ts', () => {
  test('should produce output', async () => {
    const ayy = await xmlToTS('https://data.crossref.org/schemas/crossref5.3.1.xsd')
    console.dir(ayy, { depth: null })
    expect(ayy).toBeDefined()
  })
})
