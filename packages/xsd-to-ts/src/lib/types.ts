import { Element } from 'xast'

import { Attributes as OoxastProperties, Parent, Text, Root } from 'xast'

export type XastContent = Root['children'][number]

// import {} from 'ts-morph'
/**
 * ooxast Node
 */
export type Node = Root['children'][number]
type t = Extract<Node, { name: 'td' }>

export type Attributes = OoxastProperties

export interface Options {
  handlers?: { [handle: string]: Handle }
}

export type Handle = (j: X, node: any, parent?: Parent) => any | any[] //JastContent | Array<JastContent> | void

export interface Context {
  nodeById?: {
    [id: string]: Parent
  }
  baseFound: boolean
  frozenBaseUrl: string | null
  wrapText: boolean
  qNesting: number
  refs: Record<string, 'element' | 'attribute' | 'attributeGroup' | 'group' | 'choice'>
  resolvedRefs?: Record<string, Record<string, any>>
  handlers: { [handler: string]: Handle }
}

export type XWithProps = (
  node: Root | XastContent,
  type: string,
  props?: Attributes,
  children?: string | Array<any>,
) => any | any[] // JastContent

export type XWithoutProps = (
  node: Root | XastContent,
  type: string,
  children?: string | Array<any>,
) => any | any[] //JastContent

export type X = XWithProps & XWithoutProps & Context

export type { Parent, Root, Element, Text }

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
