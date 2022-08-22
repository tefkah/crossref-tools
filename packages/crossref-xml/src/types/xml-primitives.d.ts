// Source files:
//

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
export interface _any extends Element {
  content: any
}

export interface _boolean extends Element {
  content: boolean
}

export interface _Date extends Element {
  content: Date
}

export interface _number extends Element {
  content: number
}

export interface _string extends Element {
  content: string
}

export interface document extends Element {}
export var document: document
