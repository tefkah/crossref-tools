import { u } from 'unist-builder'
import { Element, Text } from 'xast'
import { x } from 'xastscript'
import { Day, Month, PublicationDate, Year } from '../types'

export const publicationDate = (date?: Date): PublicationDate => {
  const datetime = date ?? Date.now()
  const dateObject = new Date(datetime)
  // Months are zero-indexed, so adding one for accurate deposit
  // 11 = december by default
  const month = dateObject.getUTCMonth() + 1
  return x(
    'publication_date',
    {
      media_type: 'online',
    },
    [
      // https://data.crossref.org/reports/help/schema_doc/4.4.2/schema_4_4_2.html#publication_date
      x('month', [
        u(
          'text',

          month.toString().padStart(2, '0'),
        ),
      ]) as Month,
      x('day', [u('text', dateObject.getUTCDate().toString().padStart(2, '0'))]) as Day,
      x('year', [u('text', dateObject.getUTCFullYear().toString())]) as Year,
    ],
  ) as PublicationDate
}
