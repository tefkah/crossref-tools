import { all } from '../all'
import { X, Element } from '../types'

export const group = (x: X, node: Element) => {
  return { group: true, children: all(x, node) }
}
