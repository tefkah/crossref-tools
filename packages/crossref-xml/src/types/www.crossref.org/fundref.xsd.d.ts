import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/fundref.xsd

import { Element, Text } from 'xast'

export interface TextNode<T extends string = string> extends Element {
  name: T
  attributes: {}
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
/** FundRef attributes included in assertion are:
 *
 * fundgroup: used to group funding info for items with multiple funding sources. Required for items with multiple award_number assertions, optional for items with a single award_number
 *
 * funder_identifier: funding agency identifier, must be nested within the funder_name assertion
 *
 * funder_name: name of the funding agency (required)
 *
 * award_number: grant number or other fund identifier */
export interface Assertion extends Element {
  type: 'element'
  name: 'assertion'
  attributes: {
    name: AssertionName
    provider: AssertionProvider
  }
  children: RequiredMap<AssertionChildren>[]
}

export interface AssertionChildren {
  /** FundRef attributes included in assertion are:
   *
   * fundgroup: used to group funding info for items with multiple funding sources. Required for items with multiple award_number assertions, optional for items with a single award_number
   *
   * funder_identifier: funding agency identifier, must be nested within the funder_name assertion
   *
   * funder_name: name of the funding agency (required)
   *
   * award_number: grant number or other fund identifier */
  assertion?: Assertion[]
}

type AssertionName = 'fundgroup' | 'funder_identifier' | 'funder_name' | 'award_number'
interface _AssertionName extends Primitive._string {
  content: AssertionName
}

type AssertionProvider = 'publisher' | 'crossref'
interface _AssertionProvider extends Primitive._string {
  content: AssertionProvider
}

/** FundRef documentation and examples: http://help.crossref.org/#fundref
 *
 * As part of CrossMark metadata, a deposit may contain what is called FundRef info. This details the funding behind a published article. The schema is a sequence of nested <assertion> tags.
 *
 * If a DOI is not participating in CrossMark, FundRef data may be deposited as part of the <journal_article> metadata.
 *
 * Note: Some rules will be enforced by the deposit logic (e.g. not the schema).
 *
 * FundRef data includes one or more award numbers (award_number), each of which may have one or more funders (funder_name). Each funder may have one or more optional identifiers (funder_identifier).
 *
 * A FundRef deposit begins with a <fr:program> tag within the <crossmark> structure (where fr is the namespace for the FundRef program).
 *
 * The <program> element is an implicit funder_group and will typically contain:
 *
 * A) one or more funder_name assertions and an award_number assertion.
 *
 * or
 *
 * B) one or more funder_group assertions where each funder_group should contain one or more funder_name assertions and at least one award_number assertion.
 *
 * Multiple 'award_number's may be included in a single program or fundgroup. Deposits without an award_number will be accepted, but award_number should be provided whenever possible. Items with several award numbers associated with a single funding organization should be grouped together by enclosing the "funder_name", "funder_identifier", and award_number(s) within a "fundgroup" assertion. */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RequiredMap<ProgramChildren>[]
}

export interface ProgramChildren {
  /** FundRef attributes included in assertion are:
   *
   * fundgroup: used to group funding info for items with multiple funding sources. Required for items with multiple award_number assertions, optional for items with a single award_number
   *
   * funder_identifier: funding agency identifier, must be nested within the funder_name assertion
   *
   * funder_name: name of the funding agency (required)
   *
   * award_number: grant number or other fund identifier */
  assertion?: Assertion[]
}

export interface document extends Element {
  /** FundRef attributes included in assertion are:
   *
   * fundgroup: used to group funding info for items with multiple funding sources. Required for items with multiple award_number assertions, optional for items with a single award_number
   *
   * funder_identifier: funding agency identifier, must be nested within the funder_name assertion
   *
   * funder_name: name of the funding agency (required)
   *
   * award_number: grant number or other fund identifier */
  assertion: Assertion
  /** FundRef documentation and examples: http://help.crossref.org/#fundref
   *
   * As part of CrossMark metadata, a deposit may contain what is called FundRef info. This details the funding behind a published article. The schema is a sequence of nested <assertion> tags.
   *
   * If a DOI is not participating in CrossMark, FundRef data may be deposited as part of the <journal_article> metadata.
   *
   * Note: Some rules will be enforced by the deposit logic (e.g. not the schema).
   *
   * FundRef data includes one or more award numbers (award_number), each of which may have one or more funders (funder_name). Each funder may have one or more optional identifiers (funder_identifier).
   *
   * A FundRef deposit begins with a <fr:program> tag within the <crossmark> structure (where fr is the namespace for the FundRef program).
   *
   * The <program> element is an implicit funder_group and will typically contain:
   *
   * A) one or more funder_name assertions and an award_number assertion.
   *
   * or
   *
   * B) one or more funder_group assertions where each funder_group should contain one or more funder_name assertions and at least one award_number assertion.
   *
   * Multiple 'award_number's may be included in a single program or fundgroup. Deposits without an award_number will be accepted, but award_number should be provided whenever possible. Items with several award numbers associated with a single funding organization should be grouped together by enclosing the "funder_name", "funder_identifier", and award_number(s) within a "fundgroup" assertion. */
  program: Program
}
export var document: document
