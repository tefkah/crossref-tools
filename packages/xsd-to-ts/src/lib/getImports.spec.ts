import { readFile } from 'fs/promises'
import { Root } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { getImports } from './getImports'
import { getText } from './getText'

describe('getImports', () => {
  // should get the importa from the crossref schema
  it('should get the imports from the crossref schema', async () => {
    const crossrefSchema = await getText('https://data.crossref.org/schemas/crossref5.3.1.xsd')
    const parsedSchema = fromXml(crossrefSchema) as Root

    const imports = getImports(parsedSchema, 'https://data.crossref.org/schemas/')
    expect(imports).toEqual({
      imports: {
        'http://www.crossref.org/AccessIndicators.xsd': {
          namespace: 'http://www.crossref.org/AccessIndicators.xsd',
          alias: 'ai',
          schemaLocation: 'AccessIndicators.xsd',
          actualSchemaLocation: 'https://data.crossref.org/schemas/AccessIndicators.xsd',
        },
        'http://www.crossref.org/clinicaltrials.xsd': {
          namespace: 'http://www.crossref.org/clinicaltrials.xsd',
          alias: 'ct',
          schemaLocation: 'clinicaltrials.xsd',
          actualSchemaLocation: 'https://data.crossref.org/schemas/clinicaltrials.xsd',
        },
        'http://www.crossref.org/fundref.xsd': {
          namespace: 'http://www.crossref.org/fundref.xsd',
          alias: 'fr',
          actualSchemaLocation: 'https://data.crossref.org/schemas/fundref.xsd',
          schemaLocation: 'fundref.xsd',
        },
        'http://www.crossref.org/relations.xsd': {
          namespace: 'http://www.crossref.org/relations.xsd',
          alias: 'rel',
          actualSchemaLocation: 'https://data.crossref.org/schemas/relations.xsd',
          schemaLocation: 'relations.xsd',
        },
        'http://www.ncbi.nlm.nih.gov/JATS1': {
          alias: 'jats',
          namespace: 'http://www.ncbi.nlm.nih.gov/JATS1',
          schemaLocation: 'JATS-journalpublishing1-3d2-mathml3.xsd',
          actualSchemaLocation:
            'https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3.xsd',
        },
        'http://www.w3.org/1998/Math/MathML': {
          alias: 'mml',
          namespace: 'http://www.w3.org/1998/Math/MathML',
          schemaLocation: 'http://www.w3.org/Math/XMLSchema/mathml3/mathml3.xsd',
          actualSchemaLocation: 'http://www.w3.org/Math/XMLSchema/mathml3/mathml3.xsd',
        },
        'http://www.w3.org/2001/XMLSchema': {
          alias: 'xsd',
          namespace: 'http://www.w3.org/2001/XMLSchema',
        },
      },
      includes: [
        {
          schemaLocation: 'common5.3.1.xsd',
          actualSchemaLocation: 'https://data.crossref.org/schemas/common5.3.1.xsd',
        },
      ],
    })
  })
})
