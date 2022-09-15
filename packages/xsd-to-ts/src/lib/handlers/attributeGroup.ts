import { all } from '../all'
import { Parent, X, Element } from '../types'
import { createTypeName } from '../util/createTypeName'
import { isElement } from 'xast-util-is-element'

export const attributeGroup = (x: X, node: Element, parent?: Parent) => {
  // <xsd:attributeGroup name="publication_type.atts">

  if (node.attributes?.ref) {
    x.refs = { ...(x.refs ?? {}), [node.attributes.ref]: 'attributeGroup' }
    return `attributes: ${createTypeName(node.attributes.ref.replace('atts', ''))}` //{ type: 'ref', name: node.attributes.ref }
  }

  if (
    node?.attributes?.name ||
    (parent && isElement(parent) && /schema/.test(parent?.name) && node?.attributes?.name)
  ) {
    return `export interface ${createTypeName(node.attributes?.name)} {
      ${all(x, node)}
    }`
  }
  return { type: 'attributeGroup', name: node.attributes?.name ?? 'type', children: all(x, node) }
}
