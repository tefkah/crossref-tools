import { X, Element } from '../types'
import { select } from 'xast-util-select'

export const complexType = (x: X, node: Element) => {
  const attributes = select('xsd\\:attribute, xs:\\attribute', node)

  console.log({ attributes })

  return { complexType: true, attributes }
}
