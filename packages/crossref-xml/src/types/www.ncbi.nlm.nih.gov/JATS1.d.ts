import * as Primitive from '../xml-primitives'
import * as xlink from '../www.w3.org/1999/xlink'
import * as xml from '../www.w3.org/XML/1998/namespace'

// Source files:
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3-elements.xsd
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3.xsd

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

export interface Abbr extends XastElement {
  name: 'abbr'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type String = string

/** Abbreviation or Acronym
 **/
export interface Abbrev extends XastElement {
  type: 'element'
  name: 'abbrev'
  attributes: {
    actuate?: xlink.Actuate
    alt?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Abbreviated Journal Title
 **/
export interface AbbrevJournaltitle extends XastElement {
  type: 'element'
  name: 'abbrev-journal-title'
  attributes: {
    abbrevType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface AbbrevType extends XastElement {
  name: 'abbrev-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Abstract
 **/
export interface Abstract extends XastElement {
  type: 'element'
  name: 'abstract'
  attributes: {
    abstractType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export interface AbstractType extends XastElement {
  name: 'abstract-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Access Date For Cited Work
 **/
export interface AccessDate extends XastElement {
  type: 'element'
  name: 'access-date'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Acknowledgments
 **/
export interface Ack extends XastElement {
  type: 'element'
  name: 'ack'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

/** Address/Contact Information
 **/
export interface Address extends XastElement {
  type: 'element'
  name: 'address'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Address Line
 **/
export interface AddrLine extends XastElement {
  type: 'element'
  name: 'addr-line'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Affiliation
 **/
export interface Aff extends XastElement {
  type: 'element'
  name: 'aff'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Affiliation Alternatives
 **/
export interface AffAlternatives extends XastElement {
  type: 'element'
  name: 'aff-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: Aff[]
}

export type ColAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type ColgroupAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TbodyAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TrAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TdAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type ThAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TfootAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TheadAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export interface Alt extends XastElement {
  name: 'alt'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Alternatives For Processing
 **/
export interface Alternatives extends XastElement {
  type: 'element'
  name: 'alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Alternate Title Text For a Figure, Etc.
 **/
export interface AltText extends XastElement {
  type: 'element'
  name: 'alt-text'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Alternate Title
 **/
export interface AltTitle extends XastElement {
  type: 'element'
  name: 'alt-title'
  attributes: {
    altTitletype?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface AltTitletype extends XastElement {
  name: 'alt-title-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Annotation in a Citation
 **/
export interface Annotation extends XastElement {
  type: 'element'
  name: 'annotation'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Anonymous
 **/
export interface Anonymous extends XastElement {
  type: 'element'
  name: 'anonymous'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Answer Elements
 **/
export interface Answer extends XastElement {
  type: 'element'
  name: 'answer'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    pointerToquestion: string
    specificUse?: string
  }
  children: (AltTitle | Explanation | Label | Subtitle | Title)[]
}

/** Answer Set
 **/
export interface AnswerSet extends XastElement {
  type: 'element'
  name: 'answer-set'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (AltTitle | Answer | Explanation | Label | Subtitle | Title)[]
}

/** Appendix
 **/
export interface App extends XastElement {
  type: 'element'
  name: 'app'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Permissions | SecMeta | Title)[]
}

/** Appendix Group
 **/
export interface AppGroup extends XastElement {
  type: 'element'
  name: 'app-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export type SubArrange = 'stack' | 'stagger'

export type SupArrange = 'stack' | 'stagger'

/** Array (Simple Tabular Array)
 **/
export interface Array extends XastElement {
  type: 'element'
  name: 'array'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: ArrayOrientation
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Article
 **/
export interface Article extends XastElement {
  type: 'element'
  name: 'article'
  attributes: {
    articleType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    dtdVersion?: ArticleDtdVersion
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Back | Body | FloatsGroup | Front | ProcessingMeta | Response | SubArticle)[]
}

/** Article Grouping Data
 **/
export interface ArticleCategories extends XastElement {
  type: 'element'
  name: 'article-categories'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (SeriesText | SeriesTitle | SubjGroup)[]
}

/** Article Identifier
 **/
export interface ArticleId extends XastElement {
  type: 'element'
  name: 'article-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    customType?: string
    id?: string
    pubIdtype?: ArticleIdPubIdtype
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Article Metadata
 **/
export interface ArticleMeta extends XastElement {
  type: 'element'
  name: 'article-meta'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (
    | ArticleCategories
    | ArticleId
    | AuthorNotes
    | Conference
    | Counts
    | CustomMetagroup
    | ElocationId
    | FundingGroup
    | History
    | Isbn
    | Issue
    | IssueId
    | IssuePart
    | IssueSponsor
    | IssueTitle
    | IssueTitlegroup
    | Permissions
    | Product
    | PubDatenotavailable
    | PubHistory
    | SelfUri
    | Supplement
    | SupplementaryMaterial
    | SupportGroup
    | TitleGroup
    | TransAbstract
    | Volume
    | VolumeId
    | VolumeIssuegroup
    | VolumeSeries
  )[]
}

/** Article Title
 **/
export interface ArticleTitle extends XastElement {
  type: 'element'
  name: 'article-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface ArticleType extends XastElement {
  name: 'article-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Article Version
 **/
export interface ArticleVersion extends XastElement {
  type: 'element'
  name: 'article-version'
  attributes: {
    actuate?: xlink.Actuate
    articleVersiontype?: string
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    designator?: string
    href?: string
    hreflang?: string
    id?: string
    iso8601Date?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Article Version Alternatives
 **/
export interface ArticleVersionalternatives extends XastElement {
  type: 'element'
  name: 'article-version-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: ArticleVersion[]
}

export interface ArticleVersiontype extends XastElement {
  name: 'article-version-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface AssigningAuthority extends XastElement {
  name: 'assigning-authority'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Attribution
 **/
export interface Attrib extends XastElement {
  type: 'element'
  name: 'attrib'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Audience extends XastElement {
  name: 'audience'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ContribIdAuthenticated = 'false' | 'true'

/** Author Comment
 **/
export interface AuthorComment extends XastElement {
  type: 'element'
  name: 'author-comment'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: Title[]
}

/** Author Note Group
 **/
export interface AuthorNotes extends XastElement {
  type: 'element'
  name: 'author-notes'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    rid?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

/** Award Description
 **/
export interface AwardDesc extends XastElement {
  type: 'element'
  name: 'award-desc'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Award Group
 **/
export interface AwardGroup extends XastElement {
  type: 'element'
  name: 'award-group'
  attributes: {
    actuate?: xlink.Actuate
    awardType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: (
    | AwardDesc
    | AwardId
    | AwardName
    | FundingSource
    | PrincipalAwardrecipient
    | PrincipalInvestigator
    | SupportSource
  )[]
}

/** Award Identifier
 **/
export interface AwardId extends XastElement {
  type: 'element'
  name: 'award-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    awardIdtype?: string
    awardType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface AwardIdtype extends XastElement {
  name: 'award-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Award Name
 **/
export interface AwardName extends XastElement {
  type: 'element'
  name: 'award-name'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface AwardType extends XastElement {
  name: 'award-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Axis extends XastElement {
  name: 'axis'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Back Matter
 **/
export interface Back extends XastElement {
  type: 'element'
  name: 'back'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (Label | Title)[]
}

export interface BaselineShift extends XastElement {
  name: 'baseline-shift'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ProcessingMetaBaseTagset = 'archiving' | 'authoring' | 'publishing'

/** Biography
 **/
export interface Bio extends XastElement {
  type: 'element'
  name: 'bio'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: (Label | SecMeta | Title)[]
}

/** Block-Level Alternatives For Processing
 **/
export interface BlockAlternatives extends XastElement {
  type: 'element'
  name: 'block-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Body of the Article
 **/
export interface Body extends XastElement {
  type: 'element'
  name: 'body'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
  }
  children: SigBlock[]
}

/** Bold
 **/
export interface Bold extends XastElement {
  type: 'element'
  name: 'bold'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: BoldToggle
  }
  /** XastElement is self-closing */
  children: []
}

export interface Border extends XastElement {
  name: 'border'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Boxed Text
 **/
export interface BoxedText extends XastElement {
  type: 'element'
  name: 'boxed-text'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: BoxedTextOrientation
    position?: BoxedTextPosition
    specificUse?: string
  }
  children: (Caption | Label | SecMeta)[]
}

/** Line Break
 **/
export interface Break extends XastElement {
  type: 'element'
  name: 'break'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Calendar extends XastElement {
  name: 'calendar'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Caption of a Figure, Table, Etc.
 **/
export interface Caption extends XastElement {
  type: 'element'
  name: 'caption'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
    style?: string
  }
  children: Title[]
}

export interface Cellpadding extends XastElement {
  name: 'cellpadding'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Cellspacing extends XastElement {
  name: 'cellspacing'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Chapter Title in a Citation
 **/
export interface ChapterTitle extends XastElement {
  type: 'element'
  name: 'chapter-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Char extends XastElement {
  name: 'char'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Charoff extends XastElement {
  name: 'charoff'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Chemical Structure (Display)
 **/
export interface ChemStruct extends XastElement {
  type: 'element'
  name: 'chem-struct'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Chemical Structure Wrapper
 **/
export interface ChemStructwrap extends XastElement {
  type: 'element'
  name: 'chem-struct-wrap'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: ChemStructwrapOrientation
    position?: ChemStructwrapPosition
    specificUse?: string
  }
  children: Label[]
}

/** Citation Alternatives
 **/
export interface CitationAlternatives extends XastElement {
  type: 'element'
  name: 'citation-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** City: in an Address
 **/
export interface City extends XastElement {
  type: 'element'
  name: 'city'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Code Text
 **/
export interface Code extends XastElement {
  type: 'element'
  name: 'code'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    codeType?: string
    codeVersion?: string
    executable?: CodeExecutable
    id?: string
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
    lang?: string
    language?: string
    languageVersion?: string
    orientation?: CodeOrientation
    platforms?: string
    position?: CodePosition
    /** space (as an attribute name)
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification.
     **/
    space: xml.Space
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface CodeType extends XastElement {
  name: 'code-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface CodeVersion extends XastElement {
  name: 'code-version'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Col extends XastElement {
  type: 'element'
  name: 'col'
  attributes: {
    align?: ColAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    span?: string
    style?: string
    valign?: ColValign
    width?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Colgroup extends XastElement {
  type: 'element'
  name: 'colgroup'
  attributes: {
    align?: ColgroupAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    span?: string
    style?: string
    valign?: ColgroupValign
    width?: string
  }
  children: Col[]
}

/** Collaborative (Group) Author
 **/
export interface Collab extends XastElement {
  type: 'element'
  name: 'collab'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    collabType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    symbol?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Collaboration Alternatives
 **/
export interface CollabAlternatives extends XastElement {
  type: 'element'
  name: 'collab-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface CollabType extends XastElement {
  name: 'collab-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Colspan extends XastElement {
  name: 'colspan'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Comment in a Citation
 **/
export interface Comment extends XastElement {
  type: 'element'
  name: 'comment'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Compound Keyword
 **/
export interface CompoundKwd extends XastElement {
  type: 'element'
  name: 'compound-kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: CompoundKwdpart[]
}

/** Compound Keyword Part
 **/
export interface CompoundKwdpart extends XastElement {
  type: 'element'
  name: 'compound-kwd-part'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Compound Subject Name
 **/
export interface CompoundSubject extends XastElement {
  type: 'element'
  name: 'compound-subject'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: CompoundSubjectpart[]
}

/** Compound Subject Part Name
 **/
export interface CompoundSubjectpart extends XastElement {
  type: 'element'
  name: 'compound-subject-part'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Acronym
 **/
export interface ConfAcronym extends XastElement {
  type: 'element'
  name: 'conf-acronym'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Date
 **/
export interface ConfDate extends XastElement {
  type: 'element'
  name: 'conf-date'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Information
 **/
export interface Conference extends XastElement {
  type: 'element'
  name: 'conference'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: (ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme)[]
}

/** Conference Location
 **/
export interface ConfLoc extends XastElement {
  type: 'element'
  name: 'conf-loc'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Name
 **/
export interface ConfName extends XastElement {
  type: 'element'
  name: 'conf-name'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Number
 **/
export interface ConfNum extends XastElement {
  type: 'element'
  name: 'conf-num'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Sponsor
 **/
export interface ConfSponsor extends XastElement {
  type: 'element'
  name: 'conf-sponsor'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Conference Theme
 **/
export interface ConfTheme extends XastElement {
  type: 'element'
  name: 'conf-theme'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface ContentType extends XastElement {
  name: 'content-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface ContinuedFrom extends XastElement {
  name: 'continued-from'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Contributor
 **/
export interface Contrib extends XastElement {
  type: 'element'
  name: 'contrib'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contribType?: string
    corresp?: ContribCorresp
    deceased?: ContribDeceased
    equalContrib?: ContribEqualContrib
    href?: string
    hreflang?: string
    id?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Contributor Group
 **/
export interface ContribGroup extends XastElement {
  type: 'element'
  name: 'contrib-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Contributor Identifier
 **/
export interface ContribId extends XastElement {
  type: 'element'
  name: 'contrib-id'
  attributes: {
    assigningAuthority?: string
    authenticated?: ContribIdAuthenticated
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    contribIdtype?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface ContribIdtype extends XastElement {
  name: 'contrib-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface ContribType extends XastElement {
  name: 'contrib-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Contributed Resource Group
 **/
export interface ContributedResourcegroup extends XastElement {
  type: 'element'
  name: 'contributed-resource-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    resourceType?: string
    specificUse?: string
  }
  children: (AwardGroup | ResourceGroup | SupportDescription)[]
}

/** Copyright Holder
 **/
export interface CopyrightHolder extends XastElement {
  type: 'element'
  name: 'copyright-holder'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Copyright Statement
 **/
export interface CopyrightStatement extends XastElement {
  type: 'element'
  name: 'copyright-statement'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Copyright Year
 **/
export interface CopyrightYear extends XastElement {
  type: 'element'
  name: 'copyright-year'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type OptionCorrect = 'no' | 'yes'

export type ContribCorresp = 'no' | 'yes'

/** Correspondence Information
 **/
export interface Corresp extends XastElement {
  type: 'element'
  name: 'corresp'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Count
 **/
export interface Count extends XastElement {
  type: 'element'
  name: 'count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    countType: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Country extends XastElement {
  name: 'country'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Counts
 **/
export interface Counts extends XastElement {
  type: 'element'
  name: 'counts'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount)[]
}

export interface CountType extends XastElement {
  name: 'count-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Currency extends XastElement {
  name: 'currency'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Custom Metadata
 **/
export interface CustomMeta extends XastElement {
  type: 'element'
  name: 'custom-meta'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: (MetaName | MetaValue)[]
}

/** Custom Metadata Group
 **/
export interface CustomMetagroup extends XastElement {
  type: 'element'
  name: 'custom-meta-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: CustomMeta[]
}

export interface CustomType extends XastElement {
  name: 'custom-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Data Title in a Citation
 **/
export interface DataTitle extends XastElement {
  type: 'element'
  name: 'data-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Date
 **/
export interface Date extends XastElement {
  type: 'element'
  name: 'date'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    publicationFormat?: string
    specificUse?: string
  }
  children: (Era | Season | Year)[]
}

/** Date Inside Citation
 **/
export interface DateIncitation extends XastElement {
  type: 'element'
  name: 'date-in-citation'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface DateType extends XastElement {
  name: 'date-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Day
 **/
export interface Day extends XastElement {
  type: 'element'
  name: 'day'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type ContribDeceased = 'no' | 'yes'

/** Definition List: Definition
 **/
export interface Def extends XastElement {
  type: 'element'
  name: 'def'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Definition List: Definition Head
 **/
export interface DefHead extends XastElement {
  type: 'element'
  name: 'def-head'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Definition List: Definition Item
 **/
export interface DefItem extends XastElement {
  type: 'element'
  name: 'def-item'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Def | Term)[]
}

/** Definition List
 **/
export interface DefList extends XastElement {
  type: 'element'
  name: 'def-list'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    continuedFrom?: string
    id?: string
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
    lang?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }
  children: (DefHead | Label | TermHead | Title)[]
}

export interface DegreeContribution extends XastElement {
  name: 'degree-contribution'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Degree(s)
 **/
export interface Degrees extends XastElement {
  type: 'element'
  name: 'degrees'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Description extends XastElement {
  name: 'description'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Designator extends XastElement {
  name: 'designator'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Formula, Display
 **/
export interface DispFormula extends XastElement {
  type: 'element'
  name: 'disp-formula'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Formula, Display Group
 **/
export interface DispFormulagroup extends XastElement {
  type: 'element'
  name: 'disp-formula-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: Label[]
}

/** Quote, Displayed
 **/
export interface DispQuote extends XastElement {
  type: 'element'
  name: 'disp-quote'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export interface DocumentId extends XastElement {
  name: 'document-id'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface DocumentIdtype extends XastElement {
  name: 'document-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface DocumentType extends XastElement {
  name: 'document-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ArticleDtdVersion =
  | '0.4'
  | '1.0'
  | '1.1'
  | '1.1d1'
  | '1.1d2'
  | '1.1d3'
  | '1.2'
  | '1.2d1'
  | '1.2d2'
  | '1.3d1'
  | '1.3d2'
  | '3.0'

/** Edition Statement, Cited
 **/
export interface Edition extends XastElement {
  type: 'element'
  name: 'edition'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    designator?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Element Citation
 **/
export interface ElementCitation extends XastElement {
  type: 'element'
  name: 'element-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    useType?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Electronic Location Identifier
 **/
export interface ElocationId extends XastElement {
  type: 'element'
  name: 'elocation-id'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Email Address
 **/
export interface Email extends XastElement {
  type: 'element'
  name: 'email'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export type ContribEqualContrib = 'no' | 'yes'

/** Equation Count
 **/
export interface EquationCount extends XastElement {
  type: 'element'
  name: 'equation-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Era
 **/
export interface Era extends XastElement {
  type: 'element'
  name: 'era'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Et Al
 **/
export interface Etal extends XastElement {
  type: 'element'
  name: 'etal'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Event in Publishing History
 **/
export interface Event extends XastElement {
  type: 'element'
  name: 'event'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    eventType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (
    | ArticleId
    | EventDesc
    | Isbn
    | Issn
    | IssnL
    | Notes
    | Permissions
    | PubDatenotavailable
    | SelfUri
  )[]
}

/** Event Description
 **/
export interface EventDesc extends XastElement {
  type: 'element'
  name: 'event-desc'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface EventType extends XastElement {
  name: 'event-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type CodeExecutable = 'no' | 'yes'

/** Explanation
 **/
export interface Explanation extends XastElement {
  type: 'element'
  name: 'explanation'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    pointerToexplained: string
    specificUse?: string
  }
  children: (AltTitle | Label | Subtitle | Title)[]
}

/** Extended-by Model
 **/
export interface ExtendedBy extends XastElement {
  type: 'element'
  name: 'extended-by'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    designator?: string
    href?: string
    hreflang?: string
    id?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** External Link
 **/
export interface ExtLink extends XastElement {
  type: 'element'
  name: 'ext-link'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    extLinktype?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface ExtLinktype extends XastElement {
  name: 'ext-link-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Fax Number: in an Address
 **/
export interface Fax extends XastElement {
  type: 'element'
  name: 'fax'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Figure
 **/
export interface Fig extends XastElement {
  type: 'element'
  name: 'fig'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    figType?: string
    id?: string
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
    lang?: string
    orientation?: FigOrientation
    position?: FigPosition
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Figure Count
 **/
export interface FigCount extends XastElement {
  type: 'element'
  name: 'fig-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Figure Group
 **/
export interface FigGroup extends XastElement {
  type: 'element'
  name: 'fig-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: FigGroupOrientation
    position?: FigGroupPosition
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface FigType extends XastElement {
  name: 'fig-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Fixed Case
 **/
export interface FixedCase extends XastElement {
  type: 'element'
  name: 'fixed-case'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Floats Group
 **/
export interface FloatsGroup extends XastElement {
  type: 'element'
  name: 'floats-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Footnote
 **/
export interface Fn extends XastElement {
  type: 'element'
  name: 'fn'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    customType?: string
    fnType?: FnFnType
    id?: string
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
    lang?: string
    specificUse?: string
    symbol?: string
  }
  children: Label[]
}

/** Footnote Group
 **/
export interface FnGroup extends XastElement {
  type: 'element'
  name: 'fn-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export type FnFnType =
  | 'abbr'
  | 'coi-statement'
  | 'com'
  | 'con'
  | 'conflict'
  | 'corresp'
  | 'current-aff'
  | 'custom'
  | 'deceased'
  | 'edited-by'
  | 'equal'
  | 'financial-disclosure'
  | 'on-leave'
  | 'other'
  | 'participating-researchers'
  | 'present-address'
  | 'presented-at'
  | 'presented-by'
  | 'previously-at'
  | 'study-group-members'
  | 'supplementary-material'
  | 'supported-by'

export interface Fontchar extends XastElement {
  name: 'fontchar'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Fontname extends XastElement {
  name: 'fontname'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Format extends XastElement {
  name: 'format'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** First Page
 **/
export interface Fpage extends XastElement {
  type: 'element'
  name: 'fpage'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type TableFrame =
  | 'above'
  | 'below'
  | 'border'
  | 'box'
  | 'hsides'
  | 'lhs'
  | 'rhs'
  | 'void'
  | 'vsides'

/** Front Matter
 **/
export interface Front extends XastElement {
  type: 'element'
  name: 'front'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (ArticleMeta | JournalMeta)[]
}

/** Stub Front Metadata
 **/
export interface FrontStub extends XastElement {
  type: 'element'
  name: 'front-stub'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (
    | ArticleCategories
    | ArticleId
    | AuthorNotes
    | Conference
    | Counts
    | CustomMetagroup
    | ElocationId
    | FundingGroup
    | History
    | Isbn
    | Issue
    | IssueId
    | IssuePart
    | IssueSponsor
    | IssueTitle
    | IssueTitlegroup
    | Permissions
    | Product
    | PubDatenotavailable
    | PubHistory
    | SelfUri
    | Supplement
    | SupplementaryMaterial
    | SupportGroup
    | TitleGroup
    | TransAbstract
    | Volume
    | VolumeId
    | VolumeIssuegroup
    | VolumeSeries
  )[]
}

/** Funding Group
 **/
export interface FundingGroup extends XastElement {
  type: 'element'
  name: 'funding-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (AwardGroup | FundingStatement | OpenAccess)[]
}

/** Funding Source
 **/
export interface FundingSource extends XastElement {
  type: 'element'
  name: 'funding-source'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    country?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    sourceType?: string
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Funding Statement
 **/
export interface FundingStatement extends XastElement {
  type: 'element'
  name: 'funding-statement'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Given (First) Names
 **/
export interface GivenNames extends XastElement {
  type: 'element'
  name: 'given-names'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    initials?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Glossary Elements
 **/
export interface Glossary extends XastElement {
  type: 'element'
  name: 'glossary'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Glossary | Label | Title)[]
}

/** Glyph Data For a Private Character
 **/
export interface GlyphData extends XastElement {
  type: 'element'
  name: 'glyph-data'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    fontchar?: string
    fontname?: string
    format?: string
    id?: string
    resolution?: string
    /** space (as an attribute name)
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification.
     **/
    space: xml.Space
    xSize?: string
    ySize?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Glyph Reference For a Private Character
 **/
export interface GlyphRef extends XastElement {
  type: 'element'
  name: 'glyph-ref'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    glyphData?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Government Report, Cited
 **/
export interface Gov extends XastElement {
  type: 'element'
  name: 'gov'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Graphic
 **/
export interface Graphic extends XastElement {
  type: 'element'
  name: 'graphic'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    orientation?: GraphicOrientation
    position?: GraphicPosition
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface Headers extends XastElement {
  name: 'headers'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** History: Document History
 **/
export interface History extends XastElement {
  type: 'element'
  name: 'history'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Horizontal Rule
 **/
export interface Hr extends XastElement {
  type: 'element'
  name: 'hr'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Hreflang extends XastElement {
  name: 'hreflang'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Id extends XastElement {
  name: 'id'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface IndentLevel extends XastElement {
  name: 'indent-level'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Index Term
 **/
export interface IndexTerm extends XastElement {
  type: 'element'
  name: 'index-term'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    indexType?: string
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
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: (IndexTerm | Term)[]
}

/** Index Term Range End
 **/
export interface IndexTermrangeend extends XastElement {
  type: 'element'
  name: 'index-term-range-end'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    rid: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface IndexType extends XastElement {
  name: 'index-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Initials extends XastElement {
  name: 'initials'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Formula, Inline
 **/
export interface InlineFormula extends XastElement {
  type: 'element'
  name: 'inline-formula'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Inline Graphic
 **/
export interface InlineGraphic extends XastElement {
  type: 'element'
  name: 'inline-graphic'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    baselineShift?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Inline Media Object
 **/
export interface InlineMedia extends XastElement {
  type: 'element'
  name: 'inline-media'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Inline Supplementary Material
 **/
export interface InlineSupplementarymaterial extends XastElement {
  type: 'element'
  name: 'inline-supplementary-material'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Institution Name: in an Address
 **/
export interface Institution extends XastElement {
  type: 'element'
  name: 'institution'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Institution Identifier
 **/
export interface InstitutionId extends XastElement {
  type: 'element'
  name: 'institution-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    institutionIdtype?: string
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
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface InstitutionIdtype extends XastElement {
  name: 'institution-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Institution Wrapper
 **/
export interface InstitutionWrap extends XastElement {
  type: 'element'
  name: 'institution-wrap'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Isbn
 **/
export interface Isbn extends XastElement {
  type: 'element'
  name: 'isbn'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    publicationFormat?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Iso8601Date extends XastElement {
  name: 'iso-8601-date'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Issn
 **/
export interface Issn extends XastElement {
  type: 'element'
  name: 'issn'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    pubType?: string
    publicationFormat?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issn Linking
 **/
export interface IssnL extends XastElement {
  type: 'element'
  name: 'issn-l'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Number
 **/
export interface Issue extends XastElement {
  type: 'element'
  name: 'issue'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Identifier
 **/
export interface IssueId extends XastElement {
  type: 'element'
  name: 'issue-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    pubIdtype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Part
 **/
export interface IssuePart extends XastElement {
  type: 'element'
  name: 'issue-part'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Title
 **/
export interface IssueSponsor extends XastElement {
  type: 'element'
  name: 'issue-sponsor'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Subtitle
 **/
export interface IssueSubtitle extends XastElement {
  type: 'element'
  name: 'issue-subtitle'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Title
 **/
export interface IssueTitle extends XastElement {
  type: 'element'
  name: 'issue-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Issue Title Group
 **/
export interface IssueTitlegroup extends XastElement {
  type: 'element'
  name: 'issue-title-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (IssueSubtitle | IssueTitle | TransTitlegroup)[]
}

/** Italic
 **/
export interface Italic extends XastElement {
  type: 'element'
  name: 'italic'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: ItalicToggle
  }
  /** XastElement is self-closing */
  children: []
}

/** Journal Identifier
 **/
export interface JournalId extends XastElement {
  type: 'element'
  name: 'journal-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    journalIdtype?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface JournalIdtype extends XastElement {
  name: 'journal-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Journal Metadata
 **/
export interface JournalMeta extends XastElement {
  type: 'element'
  name: 'journal-meta'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (Isbn | Issn | IssnL | JournalId | JournalTitlegroup | Notes | Publisher | SelfUri)[]
}

/** Journal Subtitle
 **/
export interface JournalSubtitle extends XastElement {
  type: 'element'
  name: 'journal-subtitle'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Journal Title (Full)
 **/
export interface JournalTitle extends XastElement {
  type: 'element'
  name: 'journal-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Journal Title Group
 **/
export interface JournalTitlegroup extends XastElement {
  type: 'element'
  name: 'journal-title-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
  }
  children: (AbbrevJournaltitle | JournalSubtitle | JournalTitle | TransTitlegroup)[]
}

/** Keyword
 **/
export interface Kwd extends XastElement {
  type: 'element'
  name: 'kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Keyword Group
 **/
export interface KwdGroup extends XastElement {
  type: 'element'
  name: 'kwd-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    kwdGrouptype?: string
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
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  children: (Label | Title)[]
}

export interface KwdGrouptype extends XastElement {
  name: 'kwd-group-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Label of a Figure, Reference, Etc.
 **/
export interface Label extends XastElement {
  type: 'element'
  name: 'label'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Language extends XastElement {
  name: 'language'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface LanguageVersion extends XastElement {
  name: 'language-version'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** License Information
 **/
export interface License extends XastElement {
  type: 'element'
  name: 'license'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    licenseType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** License Paragraph
 **/
export interface LicenseP extends XastElement {
  type: 'element'
  name: 'license-p'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface LicenseType extends XastElement {
  name: 'license-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface LinkType extends XastElement {
  name: 'link-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** List
 **/
export interface List extends XastElement {
  type: 'element'
  name: 'list'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    continuedFrom?: string
    id?: string
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
    lang?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export interface ListContent extends XastElement {
  name: 'list-content'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** List Item
 **/
export interface ListItem extends XastElement {
  type: 'element'
  name: 'list-item'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

export interface ListType extends XastElement {
  name: 'list-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Long Description
 **/
export interface LongDesc extends XastElement {
  type: 'element'
  name: 'long-desc'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Last Page
 **/
export interface Lpage extends XastElement {
  type: 'element'
  name: 'lpage'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type ProcessingMetaMathmlVersion = '2.0' | '3.0'

export interface MathRepresentation extends XastElement {
  name: 'math-representation'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Media Object
 **/
export interface Media extends XastElement {
  type: 'element'
  name: 'media'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    orientation?: MediaOrientation
    position?: MediaPosition
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Metadata Data Name For Custom Metadata
 **/
export interface MetaName extends XastElement {
  type: 'element'
  name: 'meta-name'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Metadata Data Value For Custom Metadata
 **/
export interface MetaValue extends XastElement {
  type: 'element'
  name: 'meta-value'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Milestone End
 **/
export interface MilestoneEnd extends XastElement {
  type: 'element'
  name: 'milestone-end'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Milestone Start
 **/
export interface MilestoneStart extends XastElement {
  type: 'element'
  name: 'milestone-start'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface MimeSubtype extends XastElement {
  name: 'mime-subtype'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Mimetype extends XastElement {
  name: 'mimetype'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Mixed Citation
 **/
export interface MixedCitation extends XastElement {
  type: 'element'
  name: 'mixed-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    useType?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Monospace Text (Typewriter Text)
 **/
export interface Monospace extends XastElement {
  type: 'element'
  name: 'monospace'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: MonospaceToggle
  }
  /** XastElement is self-closing */
  children: []
}

/** Month
 **/
export interface Month extends XastElement {
  type: 'element'
  name: 'month'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Name of Person (Structured)
 **/
export interface Name extends XastElement {
  type: 'element'
  name: 'name'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    nameStyle?: NameNameStyle
    specificUse?: string
  }
  children: (GivenNames | Prefix | Suffix)[]
}

/** Name Alternatives
 **/
export interface NameAlternatives extends XastElement {
  type: 'element'
  name: 'name-alternatives'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Named Special (Subject) Content
 **/
export interface NamedContent extends XastElement {
  type: 'element'
  name: 'named-content'
  attributes: {
    actuate?: xlink.Actuate
    alt?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type NameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

export type StringNameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

/** Nested Keyword
 **/
export interface NestedKwd extends XastElement {
  type: 'element'
  name: 'nested-kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: NestedKwd[]
}

/** Nlm Citation Model
 **/
export interface NlmCitation extends XastElement {
  type: 'element'
  name: 'nlm-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: (
    | AccessDate
    | Annotation
    | ArticleTitle
    | Collab
    | Comment
    | ConfDate
    | ConfLoc
    | ConfName
    | Edition
    | Fpage
    | Issue
    | Lpage
    | PageCount
    | Patent
    | PersonGroup
    | PubId
    | PublisherLoc
    | PublisherName
    | Season
    | Series
    | Source
    | Supplement
    | TransSource
    | TransTitle
    | Volume
    | Year
  )[]
}

export type TexMathNotation = 'LaTeX' | 'TEX' | 'TeX' | 'tex'

/** Note in a Reference List
 **/
export interface Note extends XastElement {
  type: 'element'
  name: 'note'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: Label[]
}

/** Notes
 **/
export interface Notes extends XastElement {
  type: 'element'
  name: 'notes'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    notesType?: string
    specificUse?: string
  }
  children: (Label | SecMeta | Title)[]
}

export interface NotesType extends XastElement {
  name: 'notes-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Object Identifier
 **/
export interface ObjectId extends XastElement {
  type: 'element'
  name: 'object-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface ObjectIdtype extends XastElement {
  name: 'object-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface ObjectType extends XastElement {
  name: 'object-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** On Behalf of
 **/
export interface OnBehalfof extends XastElement {
  type: 'element'
  name: 'on-behalf-of'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Open Access
 **/
export interface OpenAccess extends XastElement {
  type: 'element'
  name: 'open-access'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Option Elements
 **/
export interface Option extends XastElement {
  type: 'element'
  name: 'option'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    correct?: OptionCorrect
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (AltTitle | Explanation | Label | Subtitle | Title)[]
}

export type ArrayOrientation = 'landscape' | 'portrait'

export type SupplementaryMaterialOrientation = 'landscape' | 'portrait'

export type BoxedTextOrientation = 'landscape' | 'portrait'

export type ChemStructwrapOrientation = 'landscape' | 'portrait'

export type CodeOrientation = 'landscape' | 'portrait'

export type FigOrientation = 'landscape' | 'portrait'

export type FigGroupOrientation = 'landscape' | 'portrait'

export type GraphicOrientation = 'landscape' | 'portrait'

export type MediaOrientation = 'landscape' | 'portrait'

export type PreformatOrientation = 'landscape' | 'portrait'

export type TableWrapOrientation = 'landscape' | 'portrait'

export type TableWrapgroupOrientation = 'landscape' | 'portrait'

/** Overline
 **/
export interface Overline extends XastElement {
  type: 'element'
  name: 'overline'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: OverlineToggle
  }
  /** XastElement is self-closing */
  children: []
}

/** Overline End
 **/
export interface OverlineEnd extends XastElement {
  type: 'element'
  name: 'overline-end'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    rid: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Overline Start
 **/
export interface OverlineStart extends XastElement {
  type: 'element'
  name: 'overline-start'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Paragraph
 **/
export interface P extends XastElement {
  type: 'element'
  name: 'p'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Page extends XastElement {
  name: 'page'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Page Count
 **/
export interface PageCount extends XastElement {
  type: 'element'
  name: 'page-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Page Ranges
 **/
export interface PageRange extends XastElement {
  type: 'element'
  name: 'page-range'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Part Title in a Citation
 **/
export interface PartTitle extends XastElement {
  type: 'element'
  name: 'part-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Patent Number, Cited
 **/
export interface Patent extends XastElement {
  type: 'element'
  name: 'patent'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    country?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Permissions
 **/
export interface Permissions extends XastElement {
  type: 'element'
  name: 'permissions'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (CopyrightHolder | CopyrightStatement | CopyrightYear)[]
}

/** Person Group For a Cited Publication
 **/
export interface PersonGroup extends XastElement {
  type: 'element'
  name: 'person-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    customType?: string
    id?: string
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
    lang?: string
    personGrouptype?: PersonGroupPersonGrouptype
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type PersonGroupPersonGrouptype =
  | 'allauthors'
  | 'assignee'
  | 'author'
  | 'compiler'
  | 'curator'
  | 'custom'
  | 'director'
  | 'editor'
  | 'guest-editor'
  | 'illustrator'
  | 'inventor'
  | 'research-assistant'
  | 'transed'
  | 'translator'

/** Phone Number: in an Address
 **/
export interface Phone extends XastElement {
  type: 'element'
  name: 'phone'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Platforms extends XastElement {
  name: 'platforms'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface PointerToexplained extends XastElement {
  name: 'pointer-to-explained'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface PointerToquestion extends XastElement {
  name: 'pointer-to-question'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type SupplementaryMaterialPosition = 'anchor' | 'background' | 'float' | 'margin'

export type BoxedTextPosition = 'anchor' | 'background' | 'float' | 'margin'

export type ChemStructwrapPosition = 'anchor' | 'background' | 'float' | 'margin'

export type CodePosition = 'anchor' | 'background' | 'float' | 'margin'

export type FigPosition = 'anchor' | 'background' | 'float' | 'margin'

export type FigGroupPosition = 'anchor' | 'background' | 'float' | 'margin'

export type GraphicPosition = 'anchor' | 'background' | 'float' | 'margin'

export type MediaPosition = 'anchor' | 'background' | 'float' | 'margin'

export type PreformatPosition = 'anchor' | 'background' | 'float' | 'margin'

export type TableWrapPosition = 'anchor' | 'background' | 'float' | 'margin'

export type TableWrapgroupPosition = 'anchor' | 'background' | 'float' | 'margin'

/** Postal Code: in an Address
 **/
export interface PostalCode extends XastElement {
  type: 'element'
  name: 'postal-code'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Prefix
 **/
export interface Prefix extends XastElement {
  type: 'element'
  name: 'prefix'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface PrefixWord extends XastElement {
  name: 'prefix-word'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Preformatted Text
 **/
export interface Preformat extends XastElement {
  type: 'element'
  name: 'preformat'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    orientation?: PreformatOrientation
    position?: PreformatPosition
    preformatType?: string
    /** space (as an attribute name)
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification.
     **/
    space: xml.Space
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface PreformatType extends XastElement {
  name: 'preformat-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Price
 **/
export interface Price extends XastElement {
  type: 'element'
  name: 'price'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    currency?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Principal Award Recipient
 **/
export interface PrincipalAwardrecipient extends XastElement {
  type: 'element'
  name: 'principal-award-recipient'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Principal Investigator Recipient
 **/
export interface PrincipalInvestigator extends XastElement {
  type: 'element'
  name: 'principal-investigator'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Private Character (Custom or Unicode)
 **/
export interface PrivateChar extends XastElement {
  type: 'element'
  name: 'private-char'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    description?: string
    id?: string
    name?: string
    specificUse?: string
  }
  children: InlineGraphic[]
}

/** Processing Metadata Model
 **/
export interface ProcessingMeta extends XastElement {
  type: 'element'
  name: 'processing-meta'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    baseTagset?: ProcessingMetaBaseTagset
    id?: string
    mathRepresentation?: string
    mathmlVersion?: ProcessingMetaMathmlVersion
    tableModel?: ProcessingMetaTableModel
    tagsetFamily?: ProcessingMetaTagsetFamily
  }
  children: (CustomMetagroup | ExtendedBy | RestrictedBy)[]
}

/** Product Information
 **/
export interface Product extends XastElement {
  type: 'element'
  name: 'product'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    productType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface ProductType extends XastElement {
  name: 'product-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Publication Date
 **/
export interface PubDate extends XastElement {
  type: 'element'
  name: 'pub-date'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
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
    lang?: string
    pubType?: string
    publicationFormat?: string
  }
  children: (Era | Season | Year)[]
}

/** Date Not Available Flag
 **/
export interface PubDatenotavailable extends XastElement {
  type: 'element'
  name: 'pub-date-not-available'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Publication History
 **/
export interface PubHistory extends XastElement {
  type: 'element'
  name: 'pub-history'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Publication Identifier For a Cited Publication
 **/
export interface PubId extends XastElement {
  type: 'element'
  name: 'pub-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    customType?: string
    href?: string
    hreflang?: string
    id?: string
    pubIdtype?: PubIdPubIdtype
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export type ArticleIdPubIdtype =
  | 'accession'
  | 'archive'
  | 'ark'
  | 'art-access-id'
  | 'arxiv'
  | 'coden'
  | 'custom'
  | 'doaj'
  | 'doi'
  | 'handle'
  | 'index'
  | 'isbn'
  | 'manuscript'
  | 'medline'
  | 'mr'
  | 'other'
  | 'pii'
  | 'pmcid'
  | 'pmid'
  | 'publisher-id'
  | 'sici'
  | 'std-designation'
  | 'zbl'

export interface PubIdtype extends XastElement {
  name: 'pub-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type PubIdPubIdtype =
  | 'accession'
  | 'archive'
  | 'ark'
  | 'art-access-id'
  | 'arxiv'
  | 'coden'
  | 'custom'
  | 'doaj'
  | 'doi'
  | 'handle'
  | 'index'
  | 'isbn'
  | 'manuscript'
  | 'medline'
  | 'mr'
  | 'other'
  | 'pii'
  | 'pmcid'
  | 'pmid'
  | 'publisher-id'
  | 'sici'
  | 'std-designation'
  | 'zbl'

export interface PublicationFormat extends XastElement {
  name: 'publication-format'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface PublicationType extends XastElement {
  name: 'publication-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Publisher
 **/
export interface Publisher extends XastElement {
  type: 'element'
  name: 'publisher'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Publisher's Location
 **/
export interface PublisherLoc extends XastElement {
  type: 'element'
  name: 'publisher-loc'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Publisher's Name
 **/
export interface PublisherName extends XastElement {
  type: 'element'
  name: 'publisher-name'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface PublisherType extends XastElement {
  name: 'publisher-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface PubType extends XastElement {
  name: 'pub-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Question
 **/
export interface Question extends XastElement {
  type: 'element'
  name: 'question'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    questionResponsetype?: QuestionQuestionResponsetype
    specificUse?: string
  }
  children: (AltTitle | Label | SecMeta | Subtitle | Title)[]
}

/** Question Preamble
 **/
export interface QuestionPreamble extends XastElement {
  type: 'element'
  name: 'question-preamble'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (AltTitle | Label | Subtitle | Title)[]
}

export type QuestionQuestionResponsetype =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'

/** Question Wrap
 **/
export interface QuestionWrap extends XastElement {
  type: 'element'
  name: 'question-wrap'
  attributes: {
    audience?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Answer | AnswerSet | Explanation | Question)[]
}

/** Question Wrap Group
 **/
export interface QuestionWrapgroup extends XastElement {
  type: 'element'
  name: 'question-wrap-group'
  attributes: {
    audience?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (AltTitle | Label | QuestionPreamble | Subtitle | Title)[]
}

export interface Rationale extends XastElement {
  name: 'rationale'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Ruby Base
 **/
export interface Rb extends XastElement {
  type: 'element'
  name: 'rb'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Reference Item
 **/
export interface Ref extends XastElement {
  type: 'element'
  name: 'ref'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: Label[]
}

/** Reference Count
 **/
export interface RefCount extends XastElement {
  type: 'element'
  name: 'ref-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Reference List (Bibliographic Reference List)
 **/
export interface RefList extends XastElement {
  type: 'element'
  name: 'ref-list'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Ref | Title)[]
}

export type XrefRefType =
  | 'aff'
  | 'app'
  | 'author-notes'
  | 'award'
  | 'bibr'
  | 'bio'
  | 'boxed-text'
  | 'chem'
  | 'collab'
  | 'contrib'
  | 'corresp'
  | 'custom'
  | 'disp-formula'
  | 'fig'
  | 'fn'
  | 'kwd'
  | 'list'
  | 'other'
  | 'plate'
  | 'scheme'
  | 'sec'
  | 'statement'
  | 'supplementary-material'
  | 'table'
  | 'table-fn'

/** Related Article Information
 **/
export interface RelatedArticle extends XastElement {
  type: 'element'
  name: 'related-article'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    elocationId?: string
    extLinktype?: string
    href?: string
    hreflang?: string
    id?: string
    issue?: string
    journalId?: string
    journalIdtype?: string
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
    lang?: string
    page?: string
    relatedArticletype: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    vol?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface RelatedArticletype extends XastElement {
  name: 'related-article-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Related Object Information
 **/
export interface RelatedObject extends XastElement {
  type: 'element'
  name: 'related-object'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    documentId?: string
    documentIdtype?: string
    documentType?: string
    extLinktype?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    linkType?: string
    objectId?: string
    objectIdtype?: string
    objectType?: string
    role?: string
    show?: xlink.Show
    sourceId?: string
    sourceIdtype?: string
    sourceType?: string
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface Resolution extends XastElement {
  name: 'resolution'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Resource Group
 **/
export interface ResourceGroup extends XastElement {
  type: 'element'
  name: 'resource-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Resource Identifier
 **/
export interface ResourceId extends XastElement {
  type: 'element'
  name: 'resource-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    resourceIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface ResourceIdtype extends XastElement {
  name: 'resource-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Resource Name
 **/
export interface ResourceName extends XastElement {
  type: 'element'
  name: 'resource-name'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface ResourceType extends XastElement {
  name: 'resource-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Resource Wrap
 **/
export interface ResourceWrap extends XastElement {
  type: 'element'
  name: 'resource-wrap'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (ResourceId | ResourceName)[]
}

/** Response
 **/
export interface Response extends XastElement {
  type: 'element'
  name: 'response'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    responseType?: string
    specificUse?: string
  }
  children: (Back | Body | FloatsGroup | Front | FrontStub | ProcessingMeta)[]
}

export interface ResponseType extends XastElement {
  name: 'response-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Restricted-by Model
 **/
export interface RestrictedBy extends XastElement {
  type: 'element'
  name: 'restricted-by'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    designator?: string
    href?: string
    hreflang?: string
    id?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Rid extends XastElement {
  name: 'rid'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Role or Function Title of Contributor
 **/
export interface Role extends XastElement {
  type: 'element'
  name: 'role'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    degreeContribution?: string
    id?: string
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
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Roman
 **/
export interface Roman extends XastElement {
  type: 'element'
  name: 'roman'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: RomanToggle
  }
  /** XastElement is self-closing */
  children: []
}

export interface Rowspan extends XastElement {
  name: 'rowspan'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Ruby Parenthesis
 **/
export interface Rp extends XastElement {
  type: 'element'
  name: 'rp'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Ruby Textual Annotation
 **/
export interface Rt extends XastElement {
  type: 'element'
  name: 'rt'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Ruby Wrapper
 **/
export interface Ruby extends XastElement {
  type: 'element'
  name: 'ruby'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  children: (Rb | Rt)[]
}

export type TableRules = 'all' | 'cols' | 'groups' | 'none' | 'rows'

/** Sans Serif
 **/
export interface SansSerif extends XastElement {
  type: 'element'
  name: 'sans-serif'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: SansSerifToggle
  }
  /** XastElement is self-closing */
  children: []
}

/** Small Caps
 **/
export interface Sc extends XastElement {
  type: 'element'
  name: 'sc'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: ScToggle
  }
  /** XastElement is self-closing */
  children: []
}

export type TdScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

export type ThScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

/** Season
 **/
export interface Season extends XastElement {
  type: 'element'
  name: 'season'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Section
 **/
export interface Sec extends XastElement {
  type: 'element'
  name: 'sec'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    secType?: string
    specificUse?: string
  }
  children: (SecMeta | Title)[]
}

/** Section Metadata
 **/
export interface SecMeta extends XastElement {
  type: 'element'
  name: 'sec-meta'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: Permissions[]
}

export interface SecType extends XastElement {
  name: 'sec-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** See
 **/
export interface See extends XastElement {
  type: 'element'
  name: 'see'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** See-Also Term
 **/
export interface SeeAlso extends XastElement {
  type: 'element'
  name: 'see-also'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Uri For This Same Article Online
 **/
export interface SelfUri extends XastElement {
  type: 'element'
  name: 'self-uri'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface Seq extends XastElement {
  name: 'seq'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Series
 **/
export interface Series extends XastElement {
  type: 'element'
  name: 'series'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Series Text: Header Text to Describe
 **/
export interface SeriesText extends XastElement {
  type: 'element'
  name: 'series-text'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Series Title
 **/
export interface SeriesTitle extends XastElement {
  type: 'element'
  name: 'series-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Signature
 **/
export interface Sig extends XastElement {
  type: 'element'
  name: 'sig'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Signature Block
 **/
export interface SigBlock extends XastElement {
  type: 'element'
  name: 'sig-block'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Size
 **/
export interface Size extends XastElement {
  type: 'element'
  name: 'size'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
    units: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Source
 **/
export interface Source extends XastElement {
  type: 'element'
  name: 'source'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface SourceId extends XastElement {
  name: 'source-id'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface SourceIdtype extends XastElement {
  name: 'source-id-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface SourceType extends XastElement {
  name: 'source-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Span extends XastElement {
  name: 'span'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Speaker
 **/
export interface Speaker extends XastElement {
  type: 'element'
  name: 'speaker'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface SpecificUse extends XastElement {
  name: 'specific-use'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Speech
 **/
export interface Speech extends XastElement {
  type: 'element'
  name: 'speech'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: Speaker[]
}

/** State or Province: in an Address
 **/
export interface State extends XastElement {
  type: 'element'
  name: 'state'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Statement, Formal
 **/
export interface Statement extends XastElement {
  type: 'element'
  name: 'statement'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

/** Standard, Cited
 **/
export interface Std extends XastElement {
  type: 'element'
  name: 'std'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Standards Organization
 **/
export interface StdOrganization extends XastElement {
  type: 'element'
  name: 'std-organization'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Strike Through
 **/
export interface Strike extends XastElement {
  type: 'element'
  name: 'strike'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: StrikeToggle
  }
  /** XastElement is self-closing */
  children: []
}

/** String Conference Name
 **/
export interface StringConf extends XastElement {
  type: 'element'
  name: 'string-conf'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Date As a String
 **/
export interface StringDate extends XastElement {
  type: 'element'
  name: 'string-date'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Name of Person (Unstructured)
 **/
export interface StringName extends XastElement {
  type: 'element'
  name: 'string-name'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    nameStyle?: StringNameNameStyle
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Style extends XastElement {
  name: 'style'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Styled Special (Subject) Content
 **/
export interface StyledContent extends XastElement {
  type: 'element'
  name: 'styled-content'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
    toggle?: StyledContentToggle
  }
  /** XastElement is self-closing */
  children: []
}

export interface StyleDetail extends XastElement {
  name: 'style-detail'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface StyleType extends XastElement {
  name: 'style-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Subscript
 **/
export interface Sub extends XastElement {
  type: 'element'
  name: 'sub'
  attributes: {
    arrange?: SubArrange
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Sub-Article
 **/
export interface SubArticle extends XastElement {
  type: 'element'
  name: 'sub-article'
  attributes: {
    articleType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (
    | Back
    | Body
    | FloatsGroup
    | Front
    | FrontStub
    | ProcessingMeta
    | Response
    | SubArticle
  )[]
}

/** Subject Name
 **/
export interface Subject extends XastElement {
  type: 'element'
  name: 'subject'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface SubjGroup extends XastElement {
  type: 'element'
  name: 'subj-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
    subjGrouptype?: string
    vocab?: string
    vocabIdentifier?: string
  }
  children: (CompoundSubject | SubjGroup | Subject)[]
}

export interface SubjGrouptype extends XastElement {
  name: 'subj-group-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Article Subtitle
 **/
export interface Subtitle extends XastElement {
  type: 'element'
  name: 'subtitle'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Suffix
 **/
export interface Suffix extends XastElement {
  type: 'element'
  name: 'suffix'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Summary extends XastElement {
  name: 'summary'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Superscript
 **/
export interface Sup extends XastElement {
  type: 'element'
  name: 'sup'
  attributes: {
    arrange?: SupArrange
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Supplement
 **/
export interface Supplement extends XastElement {
  type: 'element'
  name: 'supplement'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
    supplementType?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Supplementary Material
 **/
export interface SupplementaryMaterial extends XastElement {
  type: 'element'
  name: 'supplementary-material'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    orientation?: SupplementaryMaterialOrientation
    position?: SupplementaryMaterialPosition
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface SupplementType extends XastElement {
  name: 'supplement-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Support Description
 **/
export interface SupportDescription extends XastElement {
  type: 'element'
  name: 'support-description'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Support Group
 **/
export interface SupportGroup extends XastElement {
  type: 'element'
  name: 'support-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (ContributedResourcegroup | FundingGroup)[]
}

/** Support Source
 **/
export interface SupportSource extends XastElement {
  type: 'element'
  name: 'support-source'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    country?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    supportType?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface SupportType extends XastElement {
  name: 'support-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Surname
 **/
export interface Surname extends XastElement {
  type: 'element'
  name: 'surname'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    initials?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Symbol extends XastElement {
  name: 'symbol'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Table: Table Element ..............................
 **/
export interface Table extends XastElement {
  type: 'element'
  name: 'table'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    border?: string
    cellpadding?: string
    cellspacing?: string
    contentType?: string
    frame?: TableFrame
    id?: string
    rules?: TableRules
    specificUse?: string
    style?: string
    summary?: string
    width?: string
  }
  children: (Col | Colgroup)[]
}

/** Table Count
 **/
export interface TableCount extends XastElement {
  type: 'element'
  name: 'table-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type ProcessingMetaTableModel = 'both' | 'none' | 'oasis' | 'xhtml'

/** Table Wrapper
 **/
export interface TableWrap extends XastElement {
  type: 'element'
  name: 'table-wrap'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: TableWrapOrientation
    position?: TableWrapPosition
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Table Wrap Footer
 **/
export interface TableWrapfoot extends XastElement {
  type: 'element'
  name: 'table-wrap-foot'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: Title[]
}

/** Table Wrapper Group
 **/
export interface TableWrapgroup extends XastElement {
  type: 'element'
  name: 'table-wrap-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    orientation?: TableWrapgroupOrientation
    position?: TableWrapgroupPosition
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export type ProcessingMetaTagsetFamily = 'bits' | 'jats' | 'sts'

/** Target of an Internal Link
 **/
export interface Target extends XastElement {
  type: 'element'
  name: 'target'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id: string
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
    lang?: string
    specificUse?: string
    targetType?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface TargetType extends XastElement {
  name: 'target-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Tbody extends XastElement {
  type: 'element'
  name: 'tbody'
  attributes: {
    align?: TbodyAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TbodyValign
  }
  children: Tr[]
}

export interface Td extends XastElement {
  type: 'element'
  name: 'td'
  attributes: {
    abbr?: string
    align?: TdAlign
    axis?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    colspan?: string
    contentType?: string
    headers?: string
    id?: string
    rowspan?: string
    scope?: TdScope
    style?: string
    valign?: TdValign
  }
  /** XastElement is self-closing */
  children: []
}

/** Definition List: Term
 **/
export interface Term extends XastElement {
  type: 'element'
  name: 'term'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    rid?: string
    specificUse?: string
    termStatus?: string
    termType?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Definition List: Term Head
 **/
export interface TermHead extends XastElement {
  type: 'element'
  name: 'term-head'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface TermStatus extends XastElement {
  name: 'term-status'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface TermType extends XastElement {
  name: 'term-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Tex Math Equation
 **/
export interface TexMath extends XastElement {
  type: 'element'
  name: 'tex-math'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    notation?: TexMathNotation
    specificUse?: string
    version?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Textual Form
 **/
export interface TextualForm extends XastElement {
  type: 'element'
  name: 'textual-form'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Tfoot extends XastElement {
  type: 'element'
  name: 'tfoot'
  attributes: {
    align?: TfootAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TfootValign
  }
  children: Tr[]
}

export interface Th extends XastElement {
  type: 'element'
  name: 'th'
  attributes: {
    abbr?: string
    align?: ThAlign
    axis?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    colspan?: string
    contentType?: string
    headers?: string
    id?: string
    rowspan?: string
    scope?: ThScope
    style?: string
    valign?: ThValign
  }
  /** XastElement is self-closing */
  children: []
}

export interface Thead extends XastElement {
  type: 'element'
  name: 'thead'
  attributes: {
    align?: TheadAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TheadValign
  }
  children: Tr[]
}

/** Time Stamp For Cited Work
 **/
export interface TimeStamp extends XastElement {
  type: 'element'
  name: 'time-stamp'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Title
 **/
export interface Title extends XastElement {
  type: 'element'
  name: 'title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Title Group
 **/
export interface TitleGroup extends XastElement {
  type: 'element'
  name: 'title-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
  }
  children: (AltTitle | ArticleTitle | FnGroup | Subtitle | TransTitlegroup)[]
}

export type BoldToggle = 'no' | 'yes'

export type ItalicToggle = 'no' | 'yes'

export type MonospaceToggle = 'no' | 'yes'

export type OverlineToggle = 'no' | 'yes'

export type RomanToggle = 'no' | 'yes'

export type SansSerifToggle = 'no' | 'yes'

export type ScToggle = 'no' | 'yes'

export type StrikeToggle = 'no' | 'yes'

export type StyledContentToggle = 'no' | 'yes'

export type UnderlineToggle = 'no' | 'yes'

export interface Tr extends XastElement {
  type: 'element'
  name: 'tr'
  attributes: {
    align?: TrAlign
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TrValign
  }
  children: (Td | Th)[]
}

/** Translated Abstract
 **/
export interface TransAbstract extends XastElement {
  type: 'element'
  name: 'trans-abstract'
  attributes: {
    abstractType?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (Label | Title)[]
}

/** Translated Source
 **/
export interface TransSource extends XastElement {
  type: 'element'
  name: 'trans-source'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Translated Subtitle
 **/
export interface TransSubtitle extends XastElement {
  type: 'element'
  name: 'trans-subtitle'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Translated Title
 **/
export interface TransTitle extends XastElement {
  type: 'element'
  name: 'trans-title'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Translated Title Group
 **/
export interface TransTitlegroup extends XastElement {
  type: 'element'
  name: 'trans-title-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (TransSubtitle | TransTitle)[]
}

/** Underline
 **/
export interface Underline extends XastElement {
  type: 'element'
  name: 'underline'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    specificUse?: string
    toggle?: UnderlineToggle
    underlineStyle?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Underline End
 **/
export interface UnderlineEnd extends XastElement {
  type: 'element'
  name: 'underline-end'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    rid: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Underline Start
 **/
export interface UnderlineStart extends XastElement {
  type: 'element'
  name: 'underline-start'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface UnderlineStyle extends XastElement {
  name: 'underline-style'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Units extends XastElement {
  name: 'units'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Unstructured Keyword Group
 **/
export interface UnstructuredKwdgroup extends XastElement {
  type: 'element'
  name: 'unstructured-kwd-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    id?: string
    kwdGrouptype?: string
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
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Uri
 **/
export interface Uri extends XastElement {
  type: 'element'
  name: 'uri'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

export interface UseType extends XastElement {
  name: 'use-type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ColValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type ColgroupValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TbodyValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TrValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TdValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type ThValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TfootValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TheadValign = 'baseline' | 'bottom' | 'middle' | 'top'

/** Verse Form For Poetry
 **/
export interface VerseGroup extends XastElement {
  type: 'element'
  name: 'verse-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }
  children: (Label | Subtitle | Title | VerseGroup | VerseLine)[]
}

/** Line of a Verse
 **/
export interface VerseLine extends XastElement {
  type: 'element'
  name: 'verse-line'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
    indentLevel?: string
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
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Version extends XastElement {
  name: 'version'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Vocab extends XastElement {
  name: 'vocab'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface VocabIdentifier extends XastElement {
  name: 'vocab-identifier'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface VocabTerm extends XastElement {
  name: 'vocab-term'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface VocabTermidentifier extends XastElement {
  name: 'vocab-term-identifier'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Vol extends XastElement {
  name: 'vol'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Volume Number
 **/
export interface Volume extends XastElement {
  type: 'element'
  name: 'volume'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** Volume Identifier
 **/
export interface VolumeId extends XastElement {
  type: 'element'
  name: 'volume-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
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
    lang?: string
    pubIdtype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** XastElement is self-closing */
  children: []
}

/** Translated Title Group
 **/
export interface VolumeIssuegroup extends XastElement {
  type: 'element'
  name: 'volume-issue-group'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  children: (
    | Issue
    | IssueId
    | IssuePart
    | IssueSponsor
    | IssueTitle
    | IssueTitlegroup
    | Volume
    | VolumeId
    | VolumeSeries
  )[]
}

/** Volume Series
 **/
export interface VolumeSeries extends XastElement {
  type: 'element'
  name: 'volume-series'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Width extends XastElement {
  name: 'width'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Word Count
 **/
export interface WordCount extends XastElement {
  type: 'element'
  name: 'word-count'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    count: string
    id?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** X - Generated Text and Punctuation
 **/
export interface X extends XastElement {
  type: 'element'
  name: 'x'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    contentType?: string
    id?: string
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
    lang?: string
    /** space (as an attribute name)
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification.
     **/
    space: xml.Space
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

/** X(cross) Reference
 **/
export interface Xref extends XastElement {
  type: 'element'
  name: 'xref'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    customType?: string
    id?: string
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
    lang?: string
    refType?: XrefRefType
    rid?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface XSize extends XastElement {
  name: 'x-size'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Year
 **/
export interface Year extends XastElement {
  type: 'element'
  name: 'year'
  attributes: {
    /** base (as an attribute name)
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute.
     **/
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
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
    lang?: string
    specificUse?: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface YSize extends XastElement {
  name: 'y-size'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}
