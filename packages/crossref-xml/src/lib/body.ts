import { URI } from './ai_program'
import { book } from './book'
import { Cite } from './citation_list'
import { Author } from './contributors'
import { Body } from '../types'

export interface BodyProps {
  type: any
  title: string
  language: string
  authors: Author[]
  abstractText: string
  license_url: URI
  doi: string
  resolve_url: URI
  citations: Cite[]
}

export const body = ({
  type,
  title,
  language,
  authors,
  abstractText,
  license_url,
  doi,
  resolve_url,
  citations,
}: BodyProps): Body => {
  const js: Body = {
    type: 'element',
    name: 'body',
    children: [
      book({ title, language, authors, abstractText, license_url, doi, resolve_url, citations }),
    ],
  }

  return js as Body
}
