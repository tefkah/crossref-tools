import * as Primitive from '../../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xlink.xsd

import { Element, Text } from 'xast'
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
interface _Actuate extends Primitive._string {
  content: Actuate
}

export type Show = 'new' | 'replace' | 'embed' | 'other' | 'none'
interface _Show extends Primitive._string {
  content: Show
}

export type Type = 'simple' | 'extended' | 'locator' | 'arc' | 'resource' | 'title' | 'none'
interface _Type extends Primitive._string {
  content: Type
}

export interface document extends Element {}
export var document: document
