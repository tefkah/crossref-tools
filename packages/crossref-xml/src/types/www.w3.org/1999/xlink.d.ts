import * as Primitive from '../../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xlink.xsd

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

export type Actuate = 'onLoad' | 'onRequest' | 'other' | 'none'

export interface Arcrole extends XastElement {
  name: 'arcrole'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface From extends XastElement {
  name: 'from'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Href extends XastElement {
  name: 'href'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Label extends XastElement {
  name: 'label'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Role extends XastElement {
  name: 'role'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type Show = 'new' | 'replace' | 'embed' | 'other' | 'none'

export interface Title extends XastElement {
  name: 'title'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface To extends XastElement {
  name: 'to'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type Type = 'simple' | 'extended' | 'locator' | 'arc' | 'resource' | 'title' | 'none'
