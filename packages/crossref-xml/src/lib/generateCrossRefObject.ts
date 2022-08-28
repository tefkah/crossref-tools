import { Element, Instruction, Root } from 'xast'

import { head } from './head'
import { body } from './body'
import { Cite } from './citation_list'
import { Author } from './contributors'
import { URI } from './ai_program'
import { Head, Body } from '../types'

export interface CrossRef extends Root {
  children: (Instruction | DOIBatch)[]
}
export interface DOIBatch extends Element {
  name: 'doi_batch'
  attributes: {
    version: string
    xmlns: string
    'xmlns:xsi': string
    'xsi:schemaLocation': string
    'xmlns:jats': string
  }
  children: (Head | Body)[]
}
export const generateCrossRefObject = ({
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
}: {
  schema: string
  type: string
  title: string
  language: string
  authors: Author[]
  abstractText: string
  license_url: URI
  doi: string
  resolve_url: URI
  citations: Cite[]
}): CrossRef => {
  const jsCrossRef: CrossRef = {
    type: 'root',
    children: [
      {
        type: 'instruction',
        name: 'xml',
        value: 'version="1.0" encoding="UTF-8"',
      },
      {
        type: 'element',
        name: 'doi_batch',
        attributes: {
          version: schema,
          xmlns: `http://www.crossref.org/schema/${schema}`,
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xsi:schemaLocation': `http://www.crossref.org/schema/${schema} http://www.crossref.org/schemas/crossref${schema}.xsd`,
          'xmlns:jats': 'http://www.ncbi.nlm.nih.gov/JATS1',
        },
        children: [
          head({
            registrant: 'Liberate Science GmbH',
            email: 'info@libscie.org',
          }),
          body({
            type,
            title,
            language,
            authors,
            abstractText,
            license_url,
            doi,
            resolve_url,
            citations,
          }),
        ],
      },
    ],
  }

  return jsCrossRef
}
