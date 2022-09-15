import { X, Element, Parent } from '../types'
import { select } from 'xast-util-select'
import { all } from '../all'
import { createTypeName } from '../util/createTypeName'
import { getAnnotation } from '../util/get-annotation'
import { write } from 'fs'
import { restriction, Restrictions } from './restriction'

/**
 * Generates correct simpleType elements
 *
 * If this is used in an attribute or element, it will generate a string
 *
 * In XML, a simpleType looks like e.g. `<a href="something">something</a>`
 * It's a tag with just a string inside.
 *
 * In xast, we represent this as an element with a single textnode as its child.
 * If this simpleType is a top-level element, we generate atype alias and
 * an interface whose sole property is the type property.
 */
export const simpleType = (x: X, node: Element, parent: Parent) => {
  // this is a toplevel simpleType
  if (node.attributes?.name) {
    const annotation = getAnnotation(node)

    const restrictionNode = select('xsd\\:restriction, xs:\\restriction', node)

    const { type: restrictionBase, restrictions } = restrictionNode
      ? restriction(x, restrictionNode, node)
      : ({} as { type: string; restrictions: Restrictions })

    // TODO: be more specific with the restrictions
    const type = x.sourceFile.addTypeAlias({
      name: `${createTypeName(node.attributes.name)}Type`,
      ...(annotation ? { docs: [annotation] } : {}),
      isExported: true,
      type: restrictions?.enumeration?.join(' | ') ?? 'string',
    })

    if (restrictions || annotation) {
      const desc = annotation ? { description: annotation } : {}
      const tags = restrictions
        ? {
            tags: Object.values(restrictions).map(([key, value]) => ({
              tagName: key,
              text: value,
            })),
          }
        : {}
      type.addJsDoc({
        ...desc,
        ...tags,
      })
    }

    const inter = x.sourceFile.addInterface({
      name: createTypeName(node.attributes.name),
      isExported: true,
      docs: [{ description: annotation ?? '' }],
      properties: [
        { name: 'type', type: 'element' },
        { name: 'name', type: node.attributes.name },
        {
          name: 'children',
          type: `[ { type: 'text', value: ${createTypeName(node.attributes.name)} ]`,
        },
      ],
    })

  
  return [type, inter]
  }

  // this is a simpleType inside an element


}
