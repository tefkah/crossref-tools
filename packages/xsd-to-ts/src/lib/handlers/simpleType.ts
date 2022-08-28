import { X, Element } from '../types'
import { select } from 'xast-util-select'
import { all } from '../all'

export const simpleType = (x: X, node: Element) => {
  return { complexType: true, children: all(x, node) }
}
