import { X, Element, Parent } from '../types'
import { select } from 'xast-util-select'
import { all } from '../all'
import { isElement } from 'xast-util-is-element'
import { createTypeName } from '../util/createTypeName'
import { ts } from 'ts-morph'

/**
 * 
 */
export const complexType = (x: X, node: Element, parent?: Parent) => {
  // const attributes = select('xsd\\:attribute, xs:\\attribute', node)
  // This is a toplevel complexType
  // We treat this as any other element, but since we know it will be extended from we give it `name: string`
  if (node?.attributes?.name) {
    const children = all(x, node)
    return x.sourceFile.addInterface({
      name: createTypeName(node.attributes?.name),
      isExported: true,
      properties: [
        {
          type: 'element',
          name: 'type',
        },
        {
          type: 'string',
          name: 'name',
        },
      ],
    })
  }

  return all(x, node)
}
