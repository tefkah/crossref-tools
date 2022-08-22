import { x } from 'xastscript'
import { Titles, Title } from '../types'

export const titles = (title: string): Titles => {
  return x('titles', [x('title', title) as Title]) as Titles
}
