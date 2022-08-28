import { u } from 'unist-builder'
import { x } from 'xastscript'
import { Publisher, PublisherName, PublisherPlace } from '../types'

export interface PublisherProps {
  name: string
  place: string
}
// eslint-disable-next-line @typescript-eslint/no-shadow
export const publisher = (publisher: PublisherProps): Publisher =>
  // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#publisher
  x('publisher', [
    x('publisher_name', [u('text', publisher?.name)]) as PublisherName,
    x('publisher_place', [u('text', publisher?.place)]) as PublisherPlace,
  ]) as Publisher

// return js
