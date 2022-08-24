import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/clinicaltrials.xsd

export interface XastAttributes {
  [name: string]: string | null | undefined
}

interface XastText {
  type: 'text'
  value: string
}

interface XastComment {
  type: 'comment'
  value: string
}

interface XastCData {
  type: 'cdata'
  value: string
}

interface XastInstruction {
  type: 'instruction'
  name: string
  value: string
}

interface FakerXastElement {
  type: 'element'
  name: string
  attributes?: XastAttributes | undefined
  children: (
    | { type: string; name?: string; attributes?: Record<string, any>; children: any[] }
    | XastText
    | XastComment
    | XastInstruction
    | XastCData
  )[]
}

interface FakeXastElement {
  type: 'element'
  name: string
  attributes?: XastAttributes | undefined
  children: (FakerXastElement | XastText | XastComment | XastInstruction | XastCData)[]
}

export interface XastElement {
  type: 'element'
  name: string
  attributes?: XastAttributes | undefined
  children: (FakeXastElement | XastText | XastComment | XastInstruction | XastCData)[]
}

interface XastTextElement extends XastElement {
  children: [XastText]
}

export interface ClinicalTrialnumber extends XastElement {
  type: 'element'
  name: 'clinical-trial-number'
  attributes: {
    /** The clinical trial identifier related to the article.
     **/
    registry: string
    /** Used to identify the article publication date in relation to the issuance of the trial results
     **/
    type?: ClinicalTrialnumberType
  }
  /** XastElement is self-closing */
  children: []
}

/** Accommodates deposit of linked clincal trials metadata. The clinical-trial-number value will
 * be a string that must match a specific pattern appropriate for a given clinical trial registry. The
 * registry is identified in the required attribute 'registry' and must be the DOI of a recognized registry
 * (see http://dx.doi.org/10.18810/registries)
 **/
export interface Program extends XastElement {
  type: 'element'
  name: 'program'
  children: ClinicalTrialnumber[]
}

/** The clinical trial identifier related to the article.
   * @pattern 10.18810\/[a-z-]+
  * @minLength 12
  * @maxLength 200

**/
export interface Registry extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern 10.18810\/[a-z-]+
       * @minLength 12
       * @maxLength 200
       **/
      value: string
    },
  ]
}
/** The clinical trial identifier related to the article.
   * @pattern 10.18810\/[a-z-]+
  * @minLength 12
  * @maxLength 200

**/
export type ClinicalTrialnumberRegistry = string

/** Used to identify the article publication date in relation to the issuance of the trial results
 **/
export type ClinicalTrialnumberType = 'preResults' | 'results' | 'postResults'
