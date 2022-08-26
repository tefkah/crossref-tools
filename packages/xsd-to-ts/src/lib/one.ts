// import { isElement } from 'xast-util-is-element'
import { all } from './all'
import { Handle, X, Parent, Node, Element } from './types'
import { isElement } from './util/isElement'
import { own } from './util/own'
import { wrapText } from './util/wrap-text'

export function one(x: X, node: Node, parent?: Parent): any | Array<any> | void {
  let fn: Handle | undefined

  if (isElement(node)) {
    // if (node.attributes && node.attributes.datoJast === 'ignore') {
    //   return
    // }

    if (own.call(x.handlers, node.name.replace(/xs?d?:/, ''))) {
      fn = x.handlers[node.name.replace(/xs?d?:/, '')]
    }
  } else if (own.call(x.handlers, node.type)) {
    fn = x.handlers[node.type]
  }

  if (typeof fn === 'function') {
    return fn(x, node, parent)
  }

  return unknown(x, node)
}

function unknown(x: X, node: Node) {
  // @ts-expect-error: Looks like a literal.
  if (typeof node.value === 'string') {
    // @ts-expect-error: Looks like a literal.
    return x(node, 'text', wrapText(x, node.value))
  }

  return all(x, node)
}
