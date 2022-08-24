import * as Primitive from '../../../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xml.xsd

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

/** base (as an attribute name)
 * denotes an attribute whose value
 * provides a URI to be used as the base for interpreting any
 * relative URIs in the scope of the element on which it
 * appears; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML Base specification.
 * See http://www.w3.org/TR/xmlbase/
 * for information about this attribute.
 **/
export interface Base extends XastElement {
  name: 'base'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** id (as an attribute name)
 * denotes an attribute whose value
 * should be interpreted as if declared to be of type ID.
 * This name is reserved by virtue of its definition in the
 * xml:id specification.
 * See http://www.w3.org/TR/xml-id/
 * for information about this attribute.
 **/
export interface Id extends XastElement {
  name: 'id'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** lang (as an attribute name)
 * denotes an attribute whose value
 * is a language code for the natural language of the content of
 * any element; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML specification.
 * Notes
 * Attempting to install the relevant ISO 2- and 3-letter
 * codes as the enumerated possible values is probably never
 * going to be a realistic possibility.
 * See BCP 47 at
 * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
 * and the IANA language subtag registry at
 * http://www.iana.org/assignments/language-subtag-registry
 * for further information.
 * The union allows for the 'un-declaration' of xml:lang with
 * the empty string.
 **/
export interface Lang extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}
/** lang (as an attribute name)
 * denotes an attribute whose value
 * is a language code for the natural language of the content of
 * any element; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML specification.
 * Notes
 * Attempting to install the relevant ISO 2- and 3-letter
 * codes as the enumerated possible values is probably never
 * going to be a realistic possibility.
 * See BCP 47 at
 * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
 * and the IANA language subtag registry at
 * http://www.iana.org/assignments/language-subtag-registry
 * for further information.
 * The union allows for the 'un-declaration' of xml:lang with
 * the empty string.
 **/
export type LangPrimitiveType = string

/** space (as an attribute name)
 * denotes an attribute whose
 * value is a keyword indicating what whitespace processing
 * discipline is intended for the content of the element; its
 * value is inherited.  This name is reserved by virtue of its
 * definition in the XML specification.
 **/
export type Space = 'default' | 'preserve'
