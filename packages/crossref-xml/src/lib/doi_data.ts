import { DoiData, Doi, Resource } from '../types'
import { x } from 'xastscript'

export const doi_data = ({ doi, url }: { doi: string; url: string }): DoiData => {
  return x('doi_data', [x('doi', doi) as Doi, x('resource', url) as Resource]) as DoiData
}
