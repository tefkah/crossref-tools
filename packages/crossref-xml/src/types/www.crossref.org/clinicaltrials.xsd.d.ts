import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/clinicaltrials.xsd

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

export interface ClinicalTrialnumber extends Element {
  type: 'element'
  name: 'clinical-trial-number'
  attributes: {
    /** The clinical trial identifier related to the article. */
    registry: string
    /** Used to identify the article publication date in relation to the issuance of the trial results */
    type?: ClinicalTrialnumberType
  }
  /** Element is self-closing */
  children: []
}

/** Accommodates deposit of linked clincal trials metadata. The clinical-trial-number value will
 * be a string that must match a specific pattern appropriate for a given clinical trial registry. The
 * registry is identified in the required attribute 'registry' and must be the DOI of a recognized registry
 * (see http://dx.doi.org/10.18810/registries) */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  children: RequiredMap<ProgramChildren>[]
}

export interface ProgramChildren {
  ClinicalTrialnumber?: ClinicalTrialnumber[]
}

/** The clinical trial identifier related to the article. */
export type Registry = TextNode
/** The clinical trial identifier related to the article. */
export type ClinicalTrialnumberRegistry = string

/** Used to identify the article publication date in relation to the issuance of the trial results */
export type ClinicalTrialnumberType = 'preResults' | 'results' | 'postResults'
