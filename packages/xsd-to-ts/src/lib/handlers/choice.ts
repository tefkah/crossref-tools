import { all } from '../all'
import { Parent, Element, X } from '../types'

export const choice = (x: X, node: Element, parent?: Parent) => {
  return {
    type: 'choice',
    name: node.attributes?.name ?? 'type',
    children: all(x, node),
  }
}
