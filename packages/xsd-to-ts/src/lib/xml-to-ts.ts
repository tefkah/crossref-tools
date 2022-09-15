import { Attributes, Root, Node } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { getImports } from './getImports'
import { getText } from './getText'
import { one } from './one'
import { Context, Handle, Options, X } from './types'
import { handlers } from './handlers'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import { ts } from 'ts-morph'

type XastContent = Root['children'][number]

export const xmlToTS = async (xml: string, options: Options = {}) => {
  const text = await getText(xml)
  const initialXast = fromXml(text)

  const base = xml.startsWith('http') ? xml.replace(/\/\w+/, '/') : './'

  const imports = getImports(initialXast, base)

  const x: X = Object.assign(
    (
      node: Root | Root['children'][number],
      type: string,
      props?: Attributes | string | any[],
      children?: string | any[],
    ) => {
      let attributes: Attributes | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        attributes = {}
      } else {
        attributes = props
      }

      const result: Node = Object.assign(
        {},
        ['root', 'text'].includes(type) ? { type } : { type: 'element', name: type },
        { attributes },
      )

      if (typeof children === 'string') {
        // @ts-expect-error: Looks like a literal.
        result.value = children
      } else if (children) {
        // @ts-expect-error: Looks like a parent.
        result.children = children
      }

      if (node.position) {
        result.position = node.position
      }

      return result as any
    }, //as JWithProps & JWithoutProps,
    {
      //  nodeById: byId,
      baseFound: false,
      inTable: false,
      wrapText: true,
      /** @type {string|null} */
      frozenBaseUrl: null,
      qNesting: 0,
      handlers: options.handlers ? { ...handlers, ...options.handlers } : handlers,
      refs: {},
      sourceFile: ts.createSourceFile(
        'xast.d.ts',
        '',
        { languageVersion: ts.ScriptTarget.Latest },
        true,
      ),
    } as Context,
  )

  // @ts-expect-error: does return a transformer, that does accept any node.
  rehypeMinifyWhitespace({ newlines: false })(initialXast)

  const result = one(x, initialXast, undefined)

  return result
}
