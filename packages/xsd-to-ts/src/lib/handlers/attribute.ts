import { all } from '../all'
import { Parent, X, Element } from '../types'
import { capitalize } from '../util/capitalize'
import { createTypeName } from '../util/createTypeName'
import { getAnnotation } from '../util/get-annotation'

const getAttributeType = (type?: string) => {
  if (!type) return 'string'

  const split = type.split(':')
  const alias = split.length > 1 ? split[0] : ''
  const name = split.length > 1 ? split[1] : split[0]

  if (!alias) return createTypeName(name)

  if (/xsd?/.test(alias)) {
    switch (name) {
      case 'integer':
        return '`${number}`'
      case 'anyURI':
        return 'URI'
      case 'nonNegativeInteger':
        return 'NonNegativeInteger'
      case 'positiveInteger':
        return 'PositiveInteger'
      default:
        'string'
    }
  }

  return `${capitalize(alias)}${createTypeName(name)}`
}

export const attribute = (x: X, node: Element, parent?: Parent) => {
  const required = node.attributes?.use === 'required'

  const type = node.attributes?.type ? getAttributeType(node.attributes.type) : 'string'
  const defaultValue = node.attributes?.default ? `\n@default: ${node.attributes.default}\n` : ''
  const annotation = getAnnotation(node)

  const comment = annotation ? `/**\n${annotation}${defaultValue}\n*/\n` : ''
  return `${comment}${node.attributes?.name}${required ? '' : '?'}: ${type}`
}
