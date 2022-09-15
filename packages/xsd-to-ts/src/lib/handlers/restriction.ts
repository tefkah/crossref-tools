import { isElement } from 'xast-util-is-element'
import { X, Element, Parent } from '../types'
export interface Restrictions {
  minExclusive?: string
  minInclusive?: string
  maxExclusive?: string
  maxInclusive?: string
  totalDigits?: string
  fractionDigits?: string
  length?: string
  minLength?: string
  maxLength?: string
  whiteSpace?: string
  pattern?: string
  enumeration?: string[]
}

export const restriction = (x: X, node: Element, parent: Parent) => {
  if (!node.attributes?.base) {
    return { type: 'string' }
  }

  const base = node.attributes.base
  const restrictions = node.children.reduce((acc, child) => {
    if (!isElement(child)) return acc
    if (typeof child.attributes?.value !== 'string') return acc
    const name = child.name.replace(/^xs?d?: /, '') as keyof Restrictions

    if (name === 'enumeration') {
      acc['enumeration'] = [...(acc['enumeration'] || []), child.attributes.value]
      return acc
    }

    acc[name] = child.attributes.value

    return acc
  }, {} as Restrictions)

  return { type: base, restrictions }
}
