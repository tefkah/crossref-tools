import { Node, Element } from '../types'
export const isElement = (node: Node): node is Element => node.type === 'element'
