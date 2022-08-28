import fs from 'fs'
import { Cite } from './citation_list'
import { Author } from './contributors'
import { generateCrossRefObject } from './generateCrossRefObject'

describe('generateCrossRefObject', () => {
  it('should generate a CrossRef object', () => {
    const schema = '3.0.4'
    const type = 'journal-article'
    const title = 'A title'
    const language = 'en'
    const authors: Author[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        orcid: '0000-0000-0000-0000',
      },
    ]
    const abstractText = 'An abstract'
    const license_url = 'https://creativecommons.org/licenses/by/4.0/'
    const doi = '10.1234/foo.bar'
    const resolve_url = 'https://doi.org/10.1234/foo.bar'
    const citations: Cite[] = [
      {
        prefix: '10.1234',
        suffix: 'bar',
        authors: [
          {
            name: 'Jane Doe',
          },
        ],
        title: 'A title',
        publishedAt: new Date().toUTCString(),
        publishedWhere: 'A place',
      },
    ]
    const crossRef = generateCrossRefObject({
      schema,
      type,
      title,
      language,
      authors,
      abstractText,
      license_url,
      doi,
      resolve_url,
      citations,
    })
    expect(crossRef).toMatchSnapshot()
  })
})
