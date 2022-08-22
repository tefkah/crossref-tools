import { join } from 'path'
import { generateCrossRefXml } from './generateCrossRefXml'

import { validateXMLWithXSD } from 'validate-with-xmllint'

describe('generateCrossRefXml', () => {
  const xml = generateCrossRefXml({
    schema: '5.3.1',
    type: 'book',
    language: 'en',
    title: 'ResearchEquals',
    authors: [{ firstName: 'John', lastName: 'Doe', orcid: '0000-0003-1050-6809' }],
    abstractText: 'This is falksdjfdlsa;k jfdsl k;afjsdl; ja',
    license_url: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
    doi: '10.53962/0001',
    resolve_url: 'https://researchequals.com',
    citations: [],
  })

  it('should generate valid xml', async () => {
    // this is always relative to the main directory
    const xsdFolder = new URL('../../schemas', import.meta.url).pathname
    const xsdPath = new URL(`${xsdFolder}/crossref5.3.1.xsd`, import.meta.url).pathname

    let valid = false
    try {
      const x = await validateXMLWithXSD(
        xml,
        new URL('../../schemas/crossref5.3.1.xsd', import.meta.url).pathname,
      )
      valid = true
    } catch (e) {
      console.error(e)
    }
    expect(valid).toBeTruthy()
  })
})
