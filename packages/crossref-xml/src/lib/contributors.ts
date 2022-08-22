// import { Element, Text } from "xast"

export interface Author {
  firstName?: string | null
  lastName?: string | null
  orcid?: string | null
}

import { u } from 'unist-builder'
import { x } from 'xastscript'
import { GivenName, Surname, PersonName, Contributors, ORCID } from '../types'

const dbAuthorToCrossrefAuthor = (author: Author): PersonName['children'] => {
  /**
   * Object.entries returns [key:string, value:any][], always
   * so we need to typecast it
   */
  return (
    (Object.entries(author) as [keyof Author, string][])
      .map(([key, value]) => {
        if (!value) {
          return null
        }

        switch (key) {
          case 'firstName':
            return x('given_name', [u('text', value)]) as GivenName
          case 'lastName':
            return x('surname', [u('text', value)]) as Surname

          case 'orcid':
            return x('ORCID', { authenticated: true }, [
              u('text', `https://orcid.org/${value}`),
            ]) as ORCID
        }
      })
      /**
       * Filter out null values
       */
      .filter((x) => x) as PersonName['children']
  )
}

// TODO: Feature update needed for organizations / affiliations
const contributors = (authors: Author[]): Contributors => {
  return x(
    'contributors',
    authors.map(
      (author, index) =>
        x(
          'person_name',
          {
            sequence: index === 0 ? 'first' : 'additional',
            contributor_role: 'author',
          },
          dbAuthorToCrossrefAuthor(author),
        ) as PersonName,
    ),
  ) as Contributors
}

export default contributors
