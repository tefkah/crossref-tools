import { X, Element, Parent } from '../types'
import { select } from 'xast-util-select'
import { all } from '../all'

export const complexType = (x: X, node: Element, parent?: Parent) => {
  // const attributes = select('xsd\\:attribute, xs:\\attribute', node)

  return { complexType: true, children: all(x, node) }
}
