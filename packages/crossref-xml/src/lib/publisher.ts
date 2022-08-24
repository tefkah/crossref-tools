// import { Element, Text } from "xast"
// export interface Publisher extends Element {
//   name: "publisher"
//   children: (PublisherName | PublisherPlace)[]
// }

import { x } from 'xastscript'
import { Publisher, PublisherName, PublisherPlace } from '../types'

const publisher = (publisher?: { name: string; place: string }): Publisher =>
  // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#publisher
  x('publisher', [
    x('publisher_name', [x('text', publisher?.name)]) as PublisherName,
    x('publisher_place', [x('text', publisher?.place)]) as PublisherPlace,
  ]) as Publisher

// return js

export default publisher
