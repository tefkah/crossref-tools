import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/AccessIndicators.xsd

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

export interface LicenseRefT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
       * @minLength 10
       **/
      value: string
    },
  ]
}

export type LicenseRefAppliesTo = 'vor' | 'am' | 'tdm' | 'stm-asf'

export interface EndDate extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type Date = string

export interface FreeToRead extends XastElement {
  type: 'element'
  name: 'free_to_read'
  attributes: {
    /** A date, unknown format **/
    end_date?: string
    /** A date, unknown format **/
    start_date?: string
  }
  /** XastElement is self-closing */
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

export interface Name extends XastElement {
  name: 'name'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license).**/
export interface Program extends XastElement {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: (FreeToRead | LicenseRef)[]
}

export interface StartDate extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}
