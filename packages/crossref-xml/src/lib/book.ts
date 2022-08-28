import { titles } from './titles'
import { publicationDate } from './publication_date'
import { noisbn } from './noisbn'
import { publisher, PublisherProps } from './publisher'
import { abstract } from './abstract'
import { aiProgram, URI } from './ai_program'
import { doiData } from './doi_data'
import { contributors, Author } from './contributors'
import { citationList, Cite } from './citation_list'
import { componentList } from './component_list'
import { Book, BookBookType, BookMetadata, ContentItem, Language } from '../types'
import { PublisherPlacePrimitiveTypeSchema } from '../validators/crossref'

export interface BookProps {
  title: string
  language: string
  authors: Author[]
  abstractText: string
  license_url: URI
  doi: string
  resolve_url: URI
  citations: Cite[]
  publisherPlace: string
  publisherName: string
  bookLanguage?: Language
  bookType?: BookBookType
}

export const book = ({
  title,
  language,
  authors,
  abstractText,
  license_url,
  doi,
  resolve_url,
  citations,
  publisherName,
  publisherPlace,
  bookLanguage = 'en',
  bookType = 'other',
}: BookProps) =>
  ({
    type: 'element',
    name: 'book',
    attributes: {
      book_type: bookType,
    },
    children: [
      {
        // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#book_metadata
        type: 'element',
        name: 'book_metadata',
        attributes: {
          language: bookLanguage,
        },
        children: [
          titles('ResearchEquals'),
          publicationDate(),
          noisbn(),
          publisher({
            name: publisherName,
            place: publisherPlace,
          }),
          aiProgram({
            url: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
          }),
          doiData({ doi: '10.53962/0000', url: 'https://researchequals.com' }),
        ],
      },
      {
        // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#content_item
        type: 'element',
        name: 'content_item',
        attributes: {
          component_type: 'other',
          language,
        },
        children: [
          contributors(authors),
          titles(title),
          abstract(abstractText),
          publicationDate(),
          aiProgram({ url: license_url }),
          doiData({ doi, url: resolve_url }),
          citationList({ citations }),
          componentList(),
        ],
      } as ContentItem,
    ],
  } as Book)
