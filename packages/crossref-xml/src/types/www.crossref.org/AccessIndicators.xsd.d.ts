import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/AccessIndicators.xsd

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
export interface FreeToRead extends Element {
  type: 'element'
  name: 'free_to_read'
  attributes: {
    endDate?: Date
    startDate?: Date
  }
}

export type licenseRefT = string
type _licenseRefT = Primitive._string

export interface LicenseRef extends licenseRefT {
  type: 'element'
  name: 'license_ref'
  attributes: {
    appliesTo?: LicenseRefAppliesTo
    startDate?: Date
  }
}

type LicenseRefAppliesTo = 'vor' | 'am' | 'tdm' | 'stm-asf'
interface _LicenseRefAppliesTo extends Primitive._string {
  content: LicenseRefAppliesTo
}

/** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RequiredMap<ProgramChildren>
}

export interface ProgramChildren {
  freeToRead?: FreeToRead
  licenseRef?: LicenseRef[]
}

export interface document extends Element {
  freeToRead: FreeToRead
  licenseRef: LicenseRef
  /** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
  program: Program
}
export var document: document
