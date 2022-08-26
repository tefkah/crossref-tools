import { Node, Root, Root as XastRoot } from 'xast'
import { visit } from 'unist-util-visit'

const resolveLocation = (schemaLocation?: string, base?: string) => {
  if (!schemaLocation) return {}

  if (schemaLocation.startsWith('http')) {
    return { schemaLocation, actualSchemaLocation: schemaLocation }
  }

  base ??= schemaLocation?.startsWith('http') ? schemaLocation.replace(/\/\w+$/, '/') : '.'
  return { schemaLocation, actualSchemaLocation: new URL(schemaLocation, base).href }
}

export const getImports = (schema: Node, base?: string) => {
  const imports: {
    [namespace: string]: {
      namespace: string
      alias?: string
      schemaLocation?: string
      actualSchemaLocation?: string
    }
  } = {}

  const includes: { schemaLocation: string; actualSchemaLocation?: string }[] = []

  const schemaRegExp = /xs?d?:schema/i
  visit(schema as Root, 'element', (element) => {
    const { attributes } = element
    if (!attributes) {
      return
    }
    if (schemaRegExp.test(element.name)) {
      const nameSpaces = Object.entries(attributes).reduce((acc, [key, value]) => {
        if (!value) return acc
        if (key.startsWith('xmlns:')) {
          acc[value] = {
            namespace: value ?? '',
            alias: key.replace('xmlns:', ''),
          }
        }
        return acc
      }, imports)
      return
    }

    if (/xs?d?:import/i.test(element.name)) {
      const { namespace, schemaLocation } = attributes
      if (!namespace || !schemaLocation) {
        return
      }
      imports[namespace] = {
        ...(imports[namespace] ?? {}),
        namespace,
        ...resolveLocation(schemaLocation, base),
      }
    }

    if (/xs?d?:include/i.test(element.name)) {
      const { schemaLocation } = attributes
      if (!schemaLocation) return

      includes.push({ schemaLocation, ...resolveLocation(schemaLocation, base) })
    }
  })

  return { imports, includes }
}
