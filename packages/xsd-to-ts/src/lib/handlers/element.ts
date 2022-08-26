import { all } from '../all'
import { Parent, Node, X, Element } from '../types'
import { getAnnotation } from '../util/get-annotation'

export const element = (x: X, node: Element, parent?: Parent): any | Array<any> | void => {
  const annotation = getAnnotation(node)
  const type = {
    type: 'type',
    name: node.attributes?.name ?? 'type',
    ...(annotation ? { annotation } : {}),
    children: all(x, node),
  }

  return x(node, 'type', {}, all(x, type))
}
