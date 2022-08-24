import * as Primitive from '../../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xlink.xsd

import { Element, Text } from 'xast'

export interface TextNode<T extends string = string> extends Element {
  type: 'element'
  name: T
  children: [Text]
}
export type ValuesType<T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>> =
  T extends ReadonlyArray<any>
    ? T[number]
    : T extends ArrayLike<any>
    ? T[number]
    : T extends object
    ? T[keyof T]
    : never
export type NoUndefined<T> = Exclude<T, undefined>
export type ArrayValueMaybe<T> = T extends any[] ? ValuesType<NoUndefined<T>> : NoUndefined<T>
export type AllTypes<T> = ArrayValueMaybe<ValuesType<T>>

export type RequiredMap<T> = AllTypes<T>

export type Actuate = 'onLoad' | 'onRequest' | 'other' | 'none'

export type Arcrole = TextNode<'arcrole'>

export type From = TextNode<'from'>

export type Href = TextNode<'href'>

export type Label = TextNode<'label'>

export type Role = TextNode<'role'>

export type Show = 'new' | 'replace' | 'embed' | 'other' | 'none'

export type Title = TextNode<'title'>

export type To = TextNode<'to'>

export type Type = 'simple' | 'extended' | 'locator' | 'arc' | 'resource' | 'title' | 'none'
