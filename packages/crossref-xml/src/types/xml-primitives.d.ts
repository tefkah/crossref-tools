// Source files:
//

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

export interface _Boolean extends XastElement {
  content: boolean
}

export interface _Date extends XastElement {
  content: Date
}

export interface _Number extends XastElement {
  content: number
}

export interface _String extends XastElement {
  content: string
}

export interface _Any extends XastElement {
  content: any
}
