import { Element } from '../types'
import { isElement } from './isElement'
import { toString } from 'xast-util-to-string'

export const getAnnotation = (node: Element): string | undefined => {
  const annotation = node.children?.find(
    (child) => isElement(child) && /^xs?d?:annotation$/i.test(child?.name ?? ''),
  )

  return annotation ? toString(annotation) : undefined
}
