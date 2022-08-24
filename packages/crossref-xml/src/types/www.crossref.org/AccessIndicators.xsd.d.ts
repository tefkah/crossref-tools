import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/AccessIndicators.xsd

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

export type LicenseRefT = TextNode
type _LicenseRefT = Primitive._String

export type LicenseRefAppliesTo = 'vor' | 'am' | 'tdm' | 'stm-asf'

export type EndDate = TextNode

export type Date = string

export interface FreeToRead extends Element {
  type: 'element'
  name: 'free_to_read'
  attributes: {
    /** A date, unknown format **/
    end_date?: string
    /** A date, unknown format **/
    start_date?: string
  }
  /** Element is self-closing */
  children: []
}

export interface LicenseRef extends LicenseRefT {
  type: 'element'
  name: 'license_ref'
  attributes: {
    applies_to?: LicenseRefAppliesTo
    /** A date, unknown format **/
    start_date?: string
  }
}

export type Name = TextNode<'name'>

/** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RequiredMap<ProgramChildren>[]
}

export interface ProgramChildren {
  FreeToRead?: FreeToRead
  LicenseRef?: LicenseRef[]
}

export type StartDate = TextNode
