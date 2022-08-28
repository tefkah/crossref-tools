import { all } from '../all'
import { Parent, Node, X, Element } from '../types'
import { getAnnotation } from '../util/get-annotation'

export const element = (x: X, node: Element, parent?: Parent): any | Array<any> | void => {
  const annotation = getAnnotation(node)
  if (node.attributes?.ref) {
    x.refs = { ...(x.refs ?? {}), [node.attributes.ref]: 'element' }
    return { type: 'ref', name: node.attributes.ref }
  }

  const type = {
    type: 'type',
    name: node.attributes?.name ?? 'type',
    ...(annotation ? { annotation } : {}),
    children: all(x, node),
  }

  return type
}
