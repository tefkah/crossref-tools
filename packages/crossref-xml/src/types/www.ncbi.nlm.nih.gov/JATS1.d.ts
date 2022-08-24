import * as Primitive from '../xml-primitives'
import * as xlink from '../www.w3.org/1999/xlink'
import * as xml from '../www.w3.org/XML/1998/namespace'

// Source files:
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3-elements.xsd
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3.xsd

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

export type Abbr = TextNode<'abbr'>

export type String = string

/** Abbreviation or Acronym */
export interface Abbrev extends Element {
  type: 'element'
  name: 'abbrev'
  attributes: {
    actuate?: xlink.Actuate
    alt?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Abbreviated Journal Title */
export interface AbbrevJournaltitle extends Element {
  type: 'element'
  name: 'abbrev-journal-title'
  attributes: {
    abbrevType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type AbbrevType = TextNode<'abbrev-type'>

/** Abstract */
export interface Abstract extends Element {
  type: 'element'
  name: 'abstract'
  attributes: {
    abstractType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AbstractChildren>[]
}

export interface AbstractChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type AbstractType = TextNode<'abstract-type'>

/** Access Date For Cited Work */
export interface AccessDate extends Element {
  type: 'element'
  name: 'access-date'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Acknowledgments */
export interface Ack extends Element {
  type: 'element'
  name: 'ack'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AckChildren>[]
}

export interface AckChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

/** Address/Contact Information */
export interface Address extends Element {
  type: 'element'
  name: 'address'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Address Line */
export interface AddrLine extends Element {
  type: 'element'
  name: 'addr-line'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Affiliation */
export interface Aff extends Element {
  type: 'element'
  name: 'aff'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Affiliation Alternatives */
export interface AffAlternatives extends Element {
  type: 'element'
  name: 'aff-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<AffAlternativesChildren>[]
}

export interface AffAlternativesChildren {
  /** Affiliation */
  aff: Aff[]
}

export type ColAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type ColgroupAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TbodyAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TrAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TdAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type ThAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TfootAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type TheadAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

export type Alt = TextNode<'alt'>

/** Alternatives For Processing */
export interface Alternatives extends Element {
  type: 'element'
  name: 'alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Alternate Title Text For a Figure, Etc. */
export interface AltText extends Element {
  type: 'element'
  name: 'alt-text'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Alternate Title */
export interface AltTitle extends Element {
  type: 'element'
  name: 'alt-title'
  attributes: {
    altTitletype?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type AltTitletype = TextNode<'alt-title-type'>

/** Annotation in a Citation */
export interface Annotation extends Element {
  type: 'element'
  name: 'annotation'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Anonymous */
export interface Anonymous extends Element {
  type: 'element'
  name: 'anonymous'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Answer Elements */
export interface Answer extends Element {
  type: 'element'
  name: 'answer'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    pointerToquestion: string
    specificUse?: string
  }
  children: RequiredMap<AnswerChildren>[]
}

export interface AnswerChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Explanation */
  explanation?: Explanation[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

/** Answer Set */
export interface AnswerSet extends Element {
  type: 'element'
  name: 'answer-set'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AnswerSetChildren>[]
}

export interface AnswerSetChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Answer Elements */
  answer: Answer[]
  /** Explanation */
  explanation: Explanation[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

/** Appendix */
export interface App extends Element {
  type: 'element'
  name: 'app'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AppChildren>[]
}

export interface AppChildren {
  /** Permissions */
  permissions?: Permissions
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title: Title
}

/** Appendix Group */
export interface AppGroup extends Element {
  type: 'element'
  name: 'app-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AppGroupChildren>[]
}

export interface AppGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type SubArrange = 'stack' | 'stagger'

export type SupArrange = 'stack' | 'stagger'

/** Array (Simple Tabular Array) */
export interface Array extends Element {
  type: 'element'
  name: 'array'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: ArrayOrientation
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Article */
export interface Article extends Element {
  type: 'element'
  name: 'article'
  attributes: {
    articleType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    dtdVersion?: ArticleDtdVersion
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<ArticleChildren>[]
}

export interface ArticleChildren {
  /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
  /** Response */
  response?: Response[]
  /** Sub-Article */
  subArticle?: SubArticle[]
}

/** Article Grouping Data */
export interface ArticleCategories extends Element {
  type: 'element'
  name: 'article-categories'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<ArticleCategoriesChildren>[]
}

export interface ArticleCategoriesChildren {
  /** Series Text: Header Text to Describe */
  seriesText?: SeriesText[]
  /** Series Title */
  seriesTitle?: SeriesTitle[]
  subjGroup?: SubjGroup[]
}

/** Article Identifier */
export interface ArticleId extends Element {
  type: 'element'
  name: 'article-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    customType?: string
    id?: string
    pubIdtype?: ArticleIdPubIdtype
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Article Metadata */
export interface ArticleMeta extends Element {
  type: 'element'
  name: 'article-meta'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<ArticleMetaChildren>[]
}

export interface ArticleMetaChildren {
  /** Article Grouping Data */
  ArticleCategories?: ArticleCategories
  /** Article Identifier */
  ArticleId?: ArticleId[]
  /** Author Note Group */
  authorNotes?: AuthorNotes
  /** Conference Information */
  conference?: Conference[]
  /** Counts */
  counts?: Counts
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup
  /** Electronic Location Identifier */
  elocationId?: ElocationId
  /** Funding Group */
  fundingGroup?: FundingGroup[]
  /** History: Document History */
  history?: History
  /** Isbn */
  isbn?: Isbn[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Permissions */
  permissions?: Permissions
  /** Product Information */
  product?: Product[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Publication History */
  pubHistory?: PubHistory
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
  /** Supplement */
  supplement?: Supplement
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Support Group */
  supportGroup?: SupportGroup[]
  /** Title Group */
  titleGroup: TitleGroup
  /** Translated Abstract */
  transAbstract?: TransAbstract[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroup[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

/** Article Title */
export interface ArticleTitle extends Element {
  type: 'element'
  name: 'article-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
  }
  /** Element is self-closing */
  children: []
}

export type ArticleType = TextNode<'article-type'>

/** Article Version */
export interface ArticleVersion extends Element {
  type: 'element'
  name: 'article-version'
  attributes: {
    actuate?: xlink.Actuate
    articleVersiontype?: string
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

/** Article Version Alternatives */
export interface ArticleVersionalternatives extends Element {
  type: 'element'
  name: 'article-version-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<ArticleVersionalternativesChildren>[]
}

export interface ArticleVersionalternativesChildren {
  /** Article Version */
  articleVersion: ArticleVersion[]
}

export type ArticleVersiontype = TextNode<'article-version-type'>

export type AssigningAuthority = TextNode<'assigning-authority'>

/** Attribution */
export interface Attrib extends Element {
  type: 'element'
  name: 'attrib'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Audience = TextNode<'audience'>

export type ContribIdAuthenticated = 'false' | 'true'

/** Author Comment */
export interface AuthorComment extends Element {
  type: 'element'
  name: 'author-comment'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<AuthorCommentChildren>[]
}

export interface AuthorCommentChildren {
  /** Title */
  title?: Title
}

/** Author Note Group */
export interface AuthorNotes extends Element {
  type: 'element'
  name: 'author-notes'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    rid?: string
    specificUse?: string
  }
  children: RequiredMap<AuthorNotesChildren>[]
}

export interface AuthorNotesChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

/** Award Description */
export interface AwardDesc extends Element {
  type: 'element'
  name: 'award-desc'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Award Group */
export interface AwardGroup extends Element {
  type: 'element'
  name: 'award-group'
  attributes: {
    actuate?: xlink.Actuate
    awardType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: RequiredMap<AwardGroupChildren>[]
}

export interface AwardGroupChildren {
  /** Award Description */
  AwardDesc?: AwardDesc
  /** Award Identifier */
  awardId?: AwardId[]
  /** Award Name */
  awardName?: AwardName
  /** Funding Source */
  fundingSource?: FundingSource[]
  /** Principal Award Recipient */
  principalAwardrecipient?: PrincipalAwardrecipient[]
  /** Principal Investigator Recipient */
  principalInvestigator?: PrincipalInvestigator[]
  /** Support Source */
  supportSource?: SupportSource[]
}

/** Award Identifier */
export interface AwardId extends Element {
  type: 'element'
  name: 'award-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    awardIdtype?: string
    awardType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type AwardIdtype = TextNode<'award-id-type'>

/** Award Name */
export interface AwardName extends Element {
  type: 'element'
  name: 'award-name'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type AwardType = TextNode<'award-type'>

export type Axis = TextNode<'axis'>

/** Back Matter */
export interface Back extends Element {
  type: 'element'
  name: 'back'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<BackChildren>[]
}

export interface BackChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title[]
}

export type BaselineShift = TextNode<'baseline-shift'>

export type ProcessingMetaBaseTagset = 'archiving' | 'authoring' | 'publishing'

/** Biography */
export interface Bio extends Element {
  type: 'element'
  name: 'bio'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: RequiredMap<BioChildren>[]
}

export interface BioChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title?: Title
}

/** Block-Level Alternatives For Processing */
export interface BlockAlternatives extends Element {
  type: 'element'
  name: 'block-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Body of the Article */
export interface Body extends Element {
  type: 'element'
  name: 'body'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
  }
  children: RequiredMap<BodyChildren>[]
}

export interface BodyChildren {
  /** Signature Block */
  sigBlock?: SigBlock
}

/** Bold */
export interface Bold extends Element {
  type: 'element'
  name: 'bold'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: BoldToggle
  }
  /** Element is self-closing */
  children: []
}

export type Border = TextNode<'border'>

/** Boxed Text */
export interface BoxedText extends Element {
  type: 'element'
  name: 'boxed-text'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: BoxedTextOrientation
    position?: BoxedTextPosition
    specificUse?: string
  }
  children: RequiredMap<BoxedTextChildren>[]
}

export interface BoxedTextChildren {
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
}

/** Line Break */
export interface Break extends Element {
  type: 'element'
  name: 'break'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type Calendar = TextNode<'calendar'>

/** Caption of a Figure, Table, Etc. */
export interface Caption extends Element {
  type: 'element'
  name: 'caption'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    style?: string
  }
  children: RequiredMap<CaptionChildren>[]
}

export interface CaptionChildren {
  /** Title */
  title?: Title
}

export type Cellpadding = TextNode<'cellpadding'>

export type Cellspacing = TextNode<'cellspacing'>

/** Chapter Title in a Citation */
export interface ChapterTitle extends Element {
  type: 'element'
  name: 'chapter-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Char = TextNode<'char'>

export type Charoff = TextNode<'charoff'>

/** Chemical Structure (Display) */
export interface ChemStruct extends Element {
  type: 'element'
  name: 'chem-struct'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Chemical Structure Wrapper */
export interface ChemStructwrap extends Element {
  type: 'element'
  name: 'chem-struct-wrap'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: ChemStructwrapOrientation
    position?: ChemStructwrapPosition
    specificUse?: string
  }
  children: RequiredMap<ChemStructwrapChildren>[]
}

export interface ChemStructwrapChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

/** Citation Alternatives */
export interface CitationAlternatives extends Element {
  type: 'element'
  name: 'citation-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** City: in an Address */
export interface City extends Element {
  type: 'element'
  name: 'city'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Code Text */
export interface Code extends Element {
  type: 'element'
  name: 'code'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    codeType?: string
    codeVersion?: string
    executable?: CodeExecutable
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    language?: string
    languageVersion?: string
    orientation?: CodeOrientation
    platforms?: string
    position?: CodePosition
    /** space (as an attribute name)
     *
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification. */
    space: xml.Space
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type CodeType = TextNode<'code-type'>

export type CodeVersion = TextNode<'code-version'>

export interface Col extends Element {
  type: 'element'
  name: 'col'
  attributes: {
    align?: ColAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

export interface Colgroup extends Element {
  type: 'element'
  name: 'colgroup'
  attributes: {
    align?: ColgroupAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  children: RequiredMap<ColgroupChildren>[]
}

export interface ColgroupChildren {
  col?: Col[]
}

/** Collaborative (Group) Author */
export interface Collab extends Element {
  type: 'element'
  name: 'collab'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    collabType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    symbol?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Collaboration Alternatives */
export interface CollabAlternatives extends Element {
  type: 'element'
  name: 'collab-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type CollabType = TextNode<'collab-type'>

export type Colspan = TextNode<'colspan'>

/** Comment in a Citation */
export interface Comment extends Element {
  type: 'element'
  name: 'comment'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Compound Keyword */
export interface CompoundKwd extends Element {
  type: 'element'
  name: 'compound-kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<CompoundKwdChildren>[]
}

export interface CompoundKwdChildren {
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpart[]
}

/** Compound Keyword Part */
export interface CompoundKwdpart extends Element {
  type: 'element'
  name: 'compound-kwd-part'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Compound Subject Name */
export interface CompoundSubject extends Element {
  type: 'element'
  name: 'compound-subject'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<CompoundSubjectChildren>[]
}

export interface CompoundSubjectChildren {
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpart[]
}

/** Compound Subject Part Name */
export interface CompoundSubjectpart extends Element {
  type: 'element'
  name: 'compound-subject-part'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Acronym */
export interface ConfAcronym extends Element {
  type: 'element'
  name: 'conf-acronym'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Date */
export interface ConfDate extends Element {
  type: 'element'
  name: 'conf-date'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Information */
export interface Conference extends Element {
  type: 'element'
  name: 'conference'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: RequiredMap<ConferenceChildren>[]
}

export interface ConferenceChildren {
  /** Conference Acronym */
  ConfAcronym: ConfAcronym[]
  /** Conference Date */
  ConfDate: ConfDate
  /** Conference Location */
  confLoc?: ConfLoc
  /** Conference Name */
  confName: ConfName[]
  /** Conference Number */
  confNum?: ConfNum
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Conference Theme */
  confTheme?: ConfTheme
}

/** Conference Location */
export interface ConfLoc extends Element {
  type: 'element'
  name: 'conf-loc'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Name */
export interface ConfName extends Element {
  type: 'element'
  name: 'conf-name'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Number */
export interface ConfNum extends Element {
  type: 'element'
  name: 'conf-num'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Sponsor */
export interface ConfSponsor extends Element {
  type: 'element'
  name: 'conf-sponsor'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Conference Theme */
export interface ConfTheme extends Element {
  type: 'element'
  name: 'conf-theme'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ContentType = TextNode<'content-type'>

export type ContinuedFrom = TextNode<'continued-from'>

/** Contributor */
export interface Contrib extends Element {
  type: 'element'
  name: 'contrib'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

/** Contributor Group */
export interface ContribGroup extends Element {
  type: 'element'
  name: 'contrib-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Contributor Identifier */
export interface ContribId extends Element {
  type: 'element'
  name: 'contrib-id'
  attributes: {
    assigningAuthority?: string
    authenticated?: ContribIdAuthenticated
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    contribIdtype?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ContribIdtype = TextNode<'contrib-id-type'>

export type ContribType = TextNode<'contrib-type'>

/** Contributed Resource Group */
export interface ContributedResourcegroup extends Element {
  type: 'element'
  name: 'contributed-resource-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    resourceType?: string
    specificUse?: string
  }
  children: RequiredMap<ContributedResourcegroupChildren>[]
}

export interface ContributedResourcegroupChildren {
  /** Award Group */
  awardGroup?: AwardGroup[]
  /** Resource Group */
  resourceGroup?: ResourceGroup[]
  /** Support Description */
  supportDescription?: SupportDescription[]
}

/** Copyright Holder */
export interface CopyrightHolder extends Element {
  type: 'element'
  name: 'copyright-holder'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Copyright Statement */
export interface CopyrightStatement extends Element {
  type: 'element'
  name: 'copyright-statement'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Copyright Year */
export interface CopyrightYear extends Element {
  type: 'element'
  name: 'copyright-year'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type OptionCorrect = 'no' | 'yes'

export type ContribCorresp = 'no' | 'yes'

/** Correspondence Information */
export interface Corresp extends Element {
  type: 'element'
  name: 'corresp'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Count */
export interface Count extends Element {
  type: 'element'
  name: 'count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    countType: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type Country = TextNode<'country'>

/** Counts */
export interface Counts extends Element {
  type: 'element'
  name: 'counts'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<CountsChildren>[]
}

export interface CountsChildren {
  /** Count */
  Count?: Count[]
  /** Equation Count */
  equationCount?: EquationCount
  /** Figure Count */
  figCount?: FigCount
  /** Page Count */
  pageCount?: PageCount
  /** Reference Count */
  refCount?: RefCount
  /** Table Count */
  tableCount?: TableCount
  /** Word Count */
  wordCount?: WordCount
}

export type CountType = TextNode<'count-type'>

export type Currency = TextNode<'currency'>

/** Custom Metadata */
export interface CustomMeta extends Element {
  type: 'element'
  name: 'custom-meta'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  children: RequiredMap<CustomMetaChildren>[]
}

export interface CustomMetaChildren {
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaName
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValue
}

/** Custom Metadata Group */
export interface CustomMetagroup extends Element {
  type: 'element'
  name: 'custom-meta-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<CustomMetagroupChildren>[]
}

export interface CustomMetagroupChildren {
  /** Custom Metadata */
  CustomMeta: CustomMeta[]
}

export type CustomType = TextNode<'custom-type'>

/** Data Title in a Citation */
export interface DataTitle extends Element {
  type: 'element'
  name: 'data-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Date */
export interface Date extends Element {
  type: 'element'
  name: 'date'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    publicationFormat?: string
    specificUse?: string
  }
  children: RequiredMap<DateChildren>[]
}

export interface DateChildren {
  /** Era */
  era?: Era
  /** Season */
  season?: Season
  /** Year */
  year: Year
}

/** Date Inside Citation */
export interface DateIncitation extends Element {
  type: 'element'
  name: 'date-in-citation'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type DateType = TextNode<'date-type'>

/** Day */
export interface Day extends Element {
  type: 'element'
  name: 'day'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ContribDeceased = 'no' | 'yes'

/** Definition List: Definition */
export interface Def extends Element {
  type: 'element'
  name: 'def'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Definition List: Definition Head */
export interface DefHead extends Element {
  type: 'element'
  name: 'def-head'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Definition List: Definition Item */
export interface DefItem extends Element {
  type: 'element'
  name: 'def-item'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<DefItemChildren>[]
}

export interface DefItemChildren {
  /** Definition List: Definition */
  def?: Def[]
  /** Definition List: Term */
  term: Term
}

/** Definition List */
export interface DefList extends Element {
  type: 'element'
  name: 'def-list'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    continuedFrom?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }
  children: RequiredMap<DefListChildren>[]
}

export interface DefListChildren {
  /** Definition List: Definition Head */
  defHead?: DefHead
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Definition List: Term Head */
  termHead?: TermHead
  /** Title */
  title?: Title
}

export type DegreeContribution = TextNode<'degree-contribution'>

/** Degree(s) */
export interface Degrees extends Element {
  type: 'element'
  name: 'degrees'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Description = TextNode<'description'>

export type Designator = TextNode<'designator'>

/** Formula, Display */
export interface DispFormula extends Element {
  type: 'element'
  name: 'disp-formula'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Formula, Display Group */
export interface DispFormulagroup extends Element {
  type: 'element'
  name: 'disp-formula-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<DispFormulagroupChildren>[]
}

export interface DispFormulagroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

/** Quote, Displayed */
export interface DispQuote extends Element {
  type: 'element'
  name: 'disp-quote'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<DispQuoteChildren>[]
}

export interface DispQuoteChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type DocumentId = TextNode<'document-id'>

export type DocumentIdtype = TextNode<'document-id-type'>

export type DocumentType = TextNode<'document-type'>

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

/** Edition Statement, Cited */
export interface Edition extends Element {
  type: 'element'
  name: 'edition'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    designator?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Element Citation */
export interface ElementCitation extends Element {
  type: 'element'
  name: 'element-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

/** Electronic Location Identifier */
export interface ElocationId extends Element {
  type: 'element'
  name: 'elocation-id'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Email Address */
export interface Email extends Element {
  type: 'element'
  name: 'email'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type ContribEqualContrib = 'no' | 'yes'

/** Equation Count */
export interface EquationCount extends Element {
  type: 'element'
  name: 'equation-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Era */
export interface Era extends Element {
  type: 'element'
  name: 'era'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Et Al */
export interface Etal extends Element {
  type: 'element'
  name: 'etal'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Event in Publishing History */
export interface Event extends Element {
  type: 'element'
  name: 'event'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    eventType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<EventChildren>[]
}

export interface EventChildren {
  /** Article Identifier */
  articleId?: ArticleId[]
  /** Event Description */
  eventDesc?: EventDesc
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL
  /** Notes */
  notes?: Notes[]
  /** Permissions */
  permissions?: Permissions
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
}

/** Event Description */
export interface EventDesc extends Element {
  type: 'element'
  name: 'event-desc'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type EventType = TextNode<'event-type'>

export type CodeExecutable = 'no' | 'yes'

/** Explanation */
export interface Explanation extends Element {
  type: 'element'
  name: 'explanation'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    pointerToexplained: string
    specificUse?: string
  }
  children: RequiredMap<ExplanationChildren>[]
}

export interface ExplanationChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

/** Extended-by Model */
export interface ExtendedBy extends Element {
  type: 'element'
  name: 'extended-by'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

/** External Link */
export interface ExtLink extends Element {
  type: 'element'
  name: 'ext-link'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    extLinktype?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type ExtLinktype = TextNode<'ext-link-type'>

/** Fax Number: in an Address */
export interface Fax extends Element {
  type: 'element'
  name: 'fax'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Figure */
export interface Fig extends Element {
  type: 'element'
  name: 'fig'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    figType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: FigOrientation
    position?: FigPosition
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Figure Count */
export interface FigCount extends Element {
  type: 'element'
  name: 'fig-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Figure Group */
export interface FigGroup extends Element {
  type: 'element'
  name: 'fig-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: FigGroupOrientation
    position?: FigGroupPosition
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type FigType = TextNode<'fig-type'>

/** Fixed Case */
export interface FixedCase extends Element {
  type: 'element'
  name: 'fixed-case'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Floats Group */
export interface FloatsGroup extends Element {
  type: 'element'
  name: 'floats-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Footnote */
export interface Fn extends Element {
  type: 'element'
  name: 'fn'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    customType?: string
    fnType?: FnFnType
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    symbol?: string
  }
  children: RequiredMap<FnChildren>[]
}

export interface FnChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

/** Footnote Group */
export interface FnGroup extends Element {
  type: 'element'
  name: 'fn-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<FnGroupChildren>[]
}

export interface FnGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
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

export type Fontchar = TextNode<'fontchar'>

export type Fontname = TextNode<'fontname'>

export type Format = TextNode<'format'>

/** First Page */
export interface Fpage extends Element {
  type: 'element'
  name: 'fpage'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** Element is self-closing */
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

/** Front Matter */
export interface Front extends Element {
  type: 'element'
  name: 'front'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<FrontChildren>[]
}

export interface FrontChildren {
  /** Article Metadata */
  ArticleMeta: ArticleMeta
  /** Journal Metadata */
  journalMeta: JournalMeta
}

/** Stub Front Metadata */
export interface FrontStub extends Element {
  type: 'element'
  name: 'front-stub'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<FrontStubChildren>[]
}

export interface FrontStubChildren {
  /** Article Grouping Data */
  articleCategories?: ArticleCategories
  /** Article Identifier */
  articleId?: ArticleId[]
  /** Author Note Group */
  authorNotes?: AuthorNotes
  /** Conference Information */
  conference?: Conference[]
  /** Counts */
  counts?: Counts
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup
  /** Electronic Location Identifier */
  elocationId?: ElocationId
  /** Funding Group */
  fundingGroup?: FundingGroup[]
  /** History: Document History */
  history?: History
  /** Isbn */
  isbn?: Isbn[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Permissions */
  permissions?: Permissions
  /** Product Information */
  product?: Product[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Publication History */
  pubHistory?: PubHistory
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
  /** Supplement */
  supplement?: Supplement
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Support Group */
  supportGroup?: SupportGroup[]
  /** Title Group */
  titleGroup?: TitleGroup
  /** Translated Abstract */
  transAbstract?: TransAbstract[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroup[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

/** Funding Group */
export interface FundingGroup extends Element {
  type: 'element'
  name: 'funding-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<FundingGroupChildren>[]
}

export interface FundingGroupChildren {
  /** Award Group */
  AwardGroup?: AwardGroup[]
  /** Funding Statement */
  fundingStatement?: FundingStatement[]
  /** Open Access */
  openAccess?: OpenAccess[]
}

/** Funding Source */
export interface FundingSource extends Element {
  type: 'element'
  name: 'funding-source'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    country?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    sourceType?: string
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Funding Statement */
export interface FundingStatement extends Element {
  type: 'element'
  name: 'funding-statement'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Given (First) Names */
export interface GivenNames extends Element {
  type: 'element'
  name: 'given-names'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    initials?: string
  }
  /** Element is self-closing */
  children: []
}

/** Glossary Elements */
export interface Glossary extends Element {
  type: 'element'
  name: 'glossary'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<GlossaryChildren>[]
}

export interface GlossaryChildren {
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

/** Glyph Data For a Private Character */
export interface GlyphData extends Element {
  type: 'element'
  name: 'glyph-data'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    fontchar?: string
    fontname?: string
    format?: string
    id?: string
    resolution?: string
    /** space (as an attribute name)
     *
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification. */
    space: xml.Space
    xSize?: string
    ySize?: string
  }
  /** Element is self-closing */
  children: []
}

/** Glyph Reference For a Private Character */
export interface GlyphRef extends Element {
  type: 'element'
  name: 'glyph-ref'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    glyphData?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Government Report, Cited */
export interface Gov extends Element {
  type: 'element'
  name: 'gov'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Graphic */
export interface Graphic extends Element {
  type: 'element'
  name: 'graphic'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

export type Headers = TextNode<'headers'>

/** History: Document History */
export interface History extends Element {
  type: 'element'
  name: 'history'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Horizontal Rule */
export interface Hr extends Element {
  type: 'element'
  name: 'hr'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type Hreflang = TextNode<'hreflang'>

export type Id = TextNode<'id'>

export type IndentLevel = TextNode<'indent-level'>

/** Index Term */
export interface IndexTerm extends Element {
  type: 'element'
  name: 'index-term'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    indexType?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<IndexTermChildren>[]
}

export interface IndexTermChildren {
  /** Index Term */
  indexTerm: IndexTerm
  /** Definition List: Term */
  term: Term
}

/** Index Term Range End */
export interface IndexTermrangeend extends Element {
  type: 'element'
  name: 'index-term-range-end'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    rid: string
  }
  /** Element is self-closing */
  children: []
}

export type IndexType = TextNode<'index-type'>

export type Initials = TextNode<'initials'>

/** Formula, Inline */
export interface InlineFormula extends Element {
  type: 'element'
  name: 'inline-formula'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Inline Graphic */
export interface InlineGraphic extends Element {
  type: 'element'
  name: 'inline-graphic'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    baselineShift?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Inline Media Object */
export interface InlineMedia extends Element {
  type: 'element'
  name: 'inline-media'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

/** Inline Supplementary Material */
export interface InlineSupplementarymaterial extends Element {
  type: 'element'
  name: 'inline-supplementary-material'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    mimeSubtype?: string
    mimetype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Institution Name: in an Address */
export interface Institution extends Element {
  type: 'element'
  name: 'institution'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Institution Identifier */
export interface InstitutionId extends Element {
  type: 'element'
  name: 'institution-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    institutionIdtype?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** Element is self-closing */
  children: []
}

export type InstitutionIdtype = TextNode<'institution-id-type'>

/** Institution Wrapper */
export interface InstitutionWrap extends Element {
  type: 'element'
  name: 'institution-wrap'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Isbn */
export interface Isbn extends Element {
  type: 'element'
  name: 'isbn'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    publicationFormat?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Iso8601Date = TextNode<'iso-8601-date'>

/** Issn */
export interface Issn extends Element {
  type: 'element'
  name: 'issn'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    pubType?: string
    publicationFormat?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issn Linking */
export interface IssnL extends Element {
  type: 'element'
  name: 'issn-l'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Number */
export interface Issue extends Element {
  type: 'element'
  name: 'issue'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Identifier */
export interface IssueId extends Element {
  type: 'element'
  name: 'issue-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    pubIdtype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Issue Part */
export interface IssuePart extends Element {
  type: 'element'
  name: 'issue-part'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Title */
export interface IssueSponsor extends Element {
  type: 'element'
  name: 'issue-sponsor'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Subtitle */
export interface IssueSubtitle extends Element {
  type: 'element'
  name: 'issue-subtitle'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Title */
export interface IssueTitle extends Element {
  type: 'element'
  name: 'issue-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Issue Title Group */
export interface IssueTitlegroup extends Element {
  type: 'element'
  name: 'issue-title-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<IssueTitlegroupChildren>[]
}

export interface IssueTitlegroupChildren {
  /** Issue Subtitle */
  IssueSubtitle?: IssueSubtitle[]
  /** Issue Title */
  issueTitle: IssueTitle
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
}

/** Italic */
export interface Italic extends Element {
  type: 'element'
  name: 'italic'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: ItalicToggle
  }
  /** Element is self-closing */
  children: []
}

/** Journal Identifier */
export interface JournalId extends Element {
  type: 'element'
  name: 'journal-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    journalIdtype?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type JournalIdtype = TextNode<'journal-id-type'>

/** Journal Metadata */
export interface JournalMeta extends Element {
  type: 'element'
  name: 'journal-meta'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<JournalMetaChildren>[]
}

export interface JournalMetaChildren {
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  Issn: Issn[]
  /** Issn Linking */
  IssnL?: IssnL
  /** Journal Identifier */
  JournalId: JournalId[]
  /** Journal Title Group */
  journalTitlegroup?: JournalTitlegroup[]
  /** Notes */
  notes?: Notes[]
  /** Publisher */
  publisher?: Publisher
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
}

/** Journal Subtitle */
export interface JournalSubtitle extends Element {
  type: 'element'
  name: 'journal-subtitle'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Journal Title (Full) */
export interface JournalTitle extends Element {
  type: 'element'
  name: 'journal-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Journal Title Group */
export interface JournalTitlegroup extends Element {
  type: 'element'
  name: 'journal-title-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
  }
  children: RequiredMap<JournalTitlegroupChildren>[]
}

export interface JournalTitlegroupChildren {
  /** Abbreviated Journal Title */
  abbrevJournaltitle?: AbbrevJournaltitle[]
  /** Journal Subtitle */
  JournalSubtitle?: JournalSubtitle[]
  /** Journal Title (Full) */
  JournalTitle?: JournalTitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
}

/** Keyword */
export interface Kwd extends Element {
  type: 'element'
  name: 'kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** Element is self-closing */
  children: []
}

/** Keyword Group */
export interface KwdGroup extends Element {
  type: 'element'
  name: 'kwd-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    kwdGrouptype?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  children: RequiredMap<KwdGroupChildren>[]
}

export interface KwdGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type KwdGrouptype = TextNode<'kwd-group-type'>

/** Label of a Figure, Reference, Etc. */
export interface Label extends Element {
  type: 'element'
  name: 'label'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
  }
  /** Element is self-closing */
  children: []
}

export type Language = TextNode<'language'>

export type LanguageVersion = TextNode<'language-version'>

/** License Information */
export interface License extends Element {
  type: 'element'
  name: 'license'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    licenseType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** License Paragraph */
export interface LicenseP extends Element {
  type: 'element'
  name: 'license-p'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type LicenseType = TextNode<'license-type'>

export type LinkType = TextNode<'link-type'>

/** List */
export interface List extends Element {
  type: 'element'
  name: 'list'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    continuedFrom?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }
  children: RequiredMap<ListChildren>[]
}

export interface ListChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type ListContent = TextNode<'list-content'>

/** List Item */
export interface ListItem extends Element {
  type: 'element'
  name: 'list-item'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<ListItemChildren>[]
}

export interface ListItemChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

export type ListType = TextNode<'list-type'>

/** Long Description */
export interface LongDesc extends Element {
  type: 'element'
  name: 'long-desc'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Last Page */
export interface Lpage extends Element {
  type: 'element'
  name: 'lpage'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ProcessingMetaMathmlVersion = '2.0' | '3.0'

export type MathRepresentation = TextNode<'math-representation'>

/** Media Object */
export interface Media extends Element {
  type: 'element'
  name: 'media'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

/** Metadata Data Name For Custom Metadata */
export interface MetaName extends Element {
  type: 'element'
  name: 'meta-name'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Metadata Data Value For Custom Metadata */
export interface MetaValue extends Element {
  type: 'element'
  name: 'meta-value'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Milestone End */
export interface MilestoneEnd extends Element {
  type: 'element'
  name: 'milestone-end'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Milestone Start */
export interface MilestoneStart extends Element {
  type: 'element'
  name: 'milestone-start'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type MimeSubtype = TextNode<'mime-subtype'>

export type Mimetype = TextNode<'mimetype'>

/** Mixed Citation */
export interface MixedCitation extends Element {
  type: 'element'
  name: 'mixed-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

/** Monospace Text (Typewriter Text) */
export interface Monospace extends Element {
  type: 'element'
  name: 'monospace'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: MonospaceToggle
  }
  /** Element is self-closing */
  children: []
}

/** Month */
export interface Month extends Element {
  type: 'element'
  name: 'month'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Name of Person (Structured) */
export interface Name extends Element {
  type: 'element'
  name: 'name'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    nameStyle?: NameNameStyle
    specificUse?: string
  }
  children: RequiredMap<NameChildren>[]
}

export interface NameChildren {
  /** Given (First) Names */
  givenNames: GivenNames
  /** Prefix */
  prefix?: Prefix
  /** Suffix */
  suffix?: Suffix
}

/** Name Alternatives */
export interface NameAlternatives extends Element {
  type: 'element'
  name: 'name-alternatives'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Named Special (Subject) Content */
export interface NamedContent extends Element {
  type: 'element'
  name: 'named-content'
  attributes: {
    actuate?: xlink.Actuate
    alt?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

export type NameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

export type StringNameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

/** Nested Keyword */
export interface NestedKwd extends Element {
  type: 'element'
  name: 'nested-kwd'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<NestedKwdChildren>[]
}

export interface NestedKwdChildren {
  /** Nested Keyword */
  nestedKwd?: NestedKwd[]
}

/** Nlm Citation Model */
export interface NlmCitation extends Element {
  type: 'element'
  name: 'nlm-citation'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  children: RequiredMap<NlmCitationChildren>[]
}

export interface NlmCitationChildren {
  /** Access Date For Cited Work */
  accessDate?: AccessDate
  /** Annotation in a Citation */
  annotation?: Annotation
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Date */
  confDate?: ConfDate
  /** Conference Location */
  confLoc?: ConfLoc
  /** Conference Name */
  confName?: ConfName
  /** Edition Statement, Cited */
  edition?: Edition
  /** First Page */
  fpage?: Fpage[]
  /** Issue Number */
  issue?: Issue[]
  /** Last Page */
  lpage?: Lpage[]
  /** Page Count */
  pageCount?: PageCount
  /** Patent Number, Cited */
  patent?: Patent
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc
  /** Publisher's Name */
  publisherName?: PublisherName
  /** Season */
  season?: Season
  /** Series */
  series?: Series
  /** Source */
  source?: Source
  /** Supplement */
  supplement?: Supplement[]
  /** Translated Source */
  transSource?: TransSource
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Volume Number */
  volume?: Volume
  /** Year */
  year?: Year
}

export type TexMathNotation = 'LaTeX' | 'TEX' | 'TeX' | 'tex'

/** Note in a Reference List */
export interface Note extends Element {
  type: 'element'
  name: 'note'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<NoteChildren>[]
}

export interface NoteChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

/** Notes */
export interface Notes extends Element {
  type: 'element'
  name: 'notes'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    notesType?: string
    specificUse?: string
  }
  children: RequiredMap<NotesChildren>[]
}

export interface NotesChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title?: Title
}

export type NotesType = TextNode<'notes-type'>

/** Object Identifier */
export interface ObjectId extends Element {
  type: 'element'
  name: 'object-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ObjectIdtype = TextNode<'object-id-type'>

export type ObjectType = TextNode<'object-type'>

/** On Behalf of */
export interface OnBehalfof extends Element {
  type: 'element'
  name: 'on-behalf-of'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Open Access */
export interface OpenAccess extends Element {
  type: 'element'
  name: 'open-access'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Option Elements */
export interface Option extends Element {
  type: 'element'
  name: 'option'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    correct?: OptionCorrect
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<OptionChildren>[]
}

export interface OptionChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Explanation */
  explanation?: Explanation[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
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

/** Overline */
export interface Overline extends Element {
  type: 'element'
  name: 'overline'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: OverlineToggle
  }
  /** Element is self-closing */
  children: []
}

/** Overline End */
export interface OverlineEnd extends Element {
  type: 'element'
  name: 'overline-end'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    rid: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Overline Start */
export interface OverlineStart extends Element {
  type: 'element'
  name: 'overline-start'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Paragraph */
export interface P extends Element {
  type: 'element'
  name: 'p'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Page = TextNode<'page'>

/** Page Count */
export interface PageCount extends Element {
  type: 'element'
  name: 'page-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Page Ranges */
export interface PageRange extends Element {
  type: 'element'
  name: 'page-range'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Part Title in a Citation */
export interface PartTitle extends Element {
  type: 'element'
  name: 'part-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Patent Number, Cited */
export interface Patent extends Element {
  type: 'element'
  name: 'patent'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    country?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Permissions */
export interface Permissions extends Element {
  type: 'element'
  name: 'permissions'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<PermissionsChildren>[]
}

export interface PermissionsChildren {
  /** Copyright Holder */
  CopyrightHolder?: CopyrightHolder[]
  /** Copyright Statement */
  CopyrightStatement?: CopyrightStatement[]
  /** Copyright Year */
  CopyrightYear?: CopyrightYear[]
}

/** Person Group For a Cited Publication */
export interface PersonGroup extends Element {
  type: 'element'
  name: 'person-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    customType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    personGrouptype?: PersonGroupPersonGrouptype
    specificUse?: string
  }
  /** Element is self-closing */
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

/** Phone Number: in an Address */
export interface Phone extends Element {
  type: 'element'
  name: 'phone'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Platforms = TextNode<'platforms'>

export type PointerToexplained = TextNode<'pointer-to-explained'>

export type PointerToquestion = TextNode<'pointer-to-question'>

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

/** Postal Code: in an Address */
export interface PostalCode extends Element {
  type: 'element'
  name: 'postal-code'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Prefix */
export interface Prefix extends Element {
  type: 'element'
  name: 'prefix'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type PrefixWord = TextNode<'prefix-word'>

/** Preformatted Text */
export interface Preformat extends Element {
  type: 'element'
  name: 'preformat'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: PreformatOrientation
    position?: PreformatPosition
    preformatType?: string
    /** space (as an attribute name)
     *
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification. */
    space: xml.Space
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type PreformatType = TextNode<'preformat-type'>

/** Price */
export interface Price extends Element {
  type: 'element'
  name: 'price'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    currency?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Principal Award Recipient */
export interface PrincipalAwardrecipient extends Element {
  type: 'element'
  name: 'principal-award-recipient'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Principal Investigator Recipient */
export interface PrincipalInvestigator extends Element {
  type: 'element'
  name: 'principal-investigator'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Private Character (Custom or Unicode) */
export interface PrivateChar extends Element {
  type: 'element'
  name: 'private-char'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    description?: string
    id?: string
    name?: string
    specificUse?: string
  }
  children: RequiredMap<PrivateCharChildren>[]
}

export interface PrivateCharChildren {
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
}

/** Processing Metadata Model */
export interface ProcessingMeta extends Element {
  type: 'element'
  name: 'processing-meta'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    baseTagset?: ProcessingMetaBaseTagset
    id?: string
    mathRepresentation?: string
    mathmlVersion?: ProcessingMetaMathmlVersion
    tableModel?: ProcessingMetaTableModel
    tagsetFamily?: ProcessingMetaTagsetFamily
  }
  children: RequiredMap<ProcessingMetaChildren>[]
}

export interface ProcessingMetaChildren {
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup[]
  /** Extended-by Model */
  ExtendedBy?: ExtendedBy[]
  /** Restricted-by Model */
  restrictedBy?: RestrictedBy[]
}

/** Product Information */
export interface Product extends Element {
  type: 'element'
  name: 'product'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    productType?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type ProductType = TextNode<'product-type'>

/** Publication Date */
export interface PubDate extends Element {
  type: 'element'
  name: 'pub-date'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    pubType?: string
    publicationFormat?: string
  }
  children: RequiredMap<PubDateChildren>[]
}

export interface PubDateChildren {
  /** Era */
  era?: Era
  /** Season */
  season?: Season
  /** Year */
  year: Year
}

/** Date Not Available Flag */
export interface PubDatenotavailable extends Element {
  type: 'element'
  name: 'pub-date-not-available'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Publication History */
export interface PubHistory extends Element {
  type: 'element'
  name: 'pub-history'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Publication Identifier For a Cited Publication */
export interface PubId extends Element {
  type: 'element'
  name: 'pub-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
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

export type PubIdtype = TextNode<'pub-id-type'>

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

export type PublicationFormat = TextNode<'publication-format'>

export type PublicationType = TextNode<'publication-type'>

/** Publisher */
export interface Publisher extends Element {
  type: 'element'
  name: 'publisher'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Publisher's Location */
export interface PublisherLoc extends Element {
  type: 'element'
  name: 'publisher-loc'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Publisher's Name */
export interface PublisherName extends Element {
  type: 'element'
  name: 'publisher-name'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type PublisherType = TextNode<'publisher-type'>

export type PubType = TextNode<'pub-type'>

/** Question */
export interface Question extends Element {
  type: 'element'
  name: 'question'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    questionResponsetype?: QuestionQuestionResponsetype
    specificUse?: string
  }
  children: RequiredMap<QuestionChildren>[]
}

export interface QuestionChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

/** Question Preamble */
export interface QuestionPreamble extends Element {
  type: 'element'
  name: 'question-preamble'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<QuestionPreambleChildren>[]
}

export interface QuestionPreambleChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

export type QuestionQuestionResponsetype =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'

/** Question Wrap */
export interface QuestionWrap extends Element {
  type: 'element'
  name: 'question-wrap'
  attributes: {
    audience?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<QuestionWrapChildren>[]
}

export interface QuestionWrapChildren {
  /** Answer Elements */
  answer?: Answer
  /** Answer Set */
  answerSet?: AnswerSet
  /** Explanation */
  explanation?: Explanation[]
  /** Question */
  question: Question
}

/** Question Wrap Group */
export interface QuestionWrapgroup extends Element {
  type: 'element'
  name: 'question-wrap-group'
  attributes: {
    audience?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<QuestionWrapgroupChildren>[]
}

export interface QuestionWrapgroupChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Question Preamble */
  questionPreamble?: QuestionPreamble
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

export type Rationale = TextNode<'rationale'>

/** Ruby Base */
export interface Rb extends Element {
  type: 'element'
  name: 'rb'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Reference Item */
export interface Ref extends Element {
  type: 'element'
  name: 'ref'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<RefChildren>[]
}

export interface RefChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

/** Reference Count */
export interface RefCount extends Element {
  type: 'element'
  name: 'ref-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Reference List (Bibliographic Reference List) */
export interface RefList extends Element {
  type: 'element'
  name: 'ref-list'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<RefListChildren>[]
}

export interface RefListChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Reference Item */
  ref?: Ref[]
  /** Title */
  title?: Title
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

/** Related Article Information */
export interface RelatedArticle extends Element {
  type: 'element'
  name: 'related-article'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

export type RelatedArticletype = TextNode<'related-article-type'>

/** Related Object Information */
export interface RelatedObject extends Element {
  type: 'element'
  name: 'related-object'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

export type Resolution = TextNode<'resolution'>

/** Resource Group */
export interface ResourceGroup extends Element {
  type: 'element'
  name: 'resource-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Resource Identifier */
export interface ResourceId extends Element {
  type: 'element'
  name: 'resource-id'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    resourceIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** Element is self-closing */
  children: []
}

export type ResourceIdtype = TextNode<'resource-id-type'>

/** Resource Name */
export interface ResourceName extends Element {
  type: 'element'
  name: 'resource-name'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type ResourceType = TextNode<'resource-type'>

/** Resource Wrap */
export interface ResourceWrap extends Element {
  type: 'element'
  name: 'resource-wrap'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<ResourceWrapChildren>[]
}

export interface ResourceWrapChildren {
  /** Resource Identifier */
  resourceId?: ResourceId[]
  /** Resource Name */
  resourceName: ResourceName
}

/** Response */
export interface Response extends Element {
  type: 'element'
  name: 'response'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    responseType?: string
    specificUse?: string
  }
  children: RequiredMap<ResponseChildren>[]
}

export interface ResponseChildren {
  /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  FrontStub: FrontStub
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
}

export type ResponseType = TextNode<'response-type'>

/** Restricted-by Model */
export interface RestrictedBy extends Element {
  type: 'element'
  name: 'restricted-by'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

export type Rid = TextNode<'rid'>

/** Role or Function Title of Contributor */
export interface Role extends Element {
  type: 'element'
  name: 'role'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    degreeContribution?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** Element is self-closing */
  children: []
}

/** Roman */
export interface Roman extends Element {
  type: 'element'
  name: 'roman'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: RomanToggle
  }
  /** Element is self-closing */
  children: []
}

export type Rowspan = TextNode<'rowspan'>

/** Ruby Parenthesis */
export interface Rp extends Element {
  type: 'element'
  name: 'rp'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** Ruby Textual Annotation */
export interface Rt extends Element {
  type: 'element'
  name: 'rt'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Ruby Wrapper */
export interface Ruby extends Element {
  type: 'element'
  name: 'ruby'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  children: RequiredMap<RubyChildren>[]
}

export interface RubyChildren {
  /** Ruby Base */
  rb: Rb
  /** Ruby Textual Annotation */
  rt: Rt
}

export type TableRules = 'all' | 'cols' | 'groups' | 'none' | 'rows'

/** Sans Serif */
export interface SansSerif extends Element {
  type: 'element'
  name: 'sans-serif'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: SansSerifToggle
  }
  /** Element is self-closing */
  children: []
}

/** Small Caps */
export interface Sc extends Element {
  type: 'element'
  name: 'sc'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: ScToggle
  }
  /** Element is self-closing */
  children: []
}

export type TdScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

export type ThScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

/** Season */
export interface Season extends Element {
  type: 'element'
  name: 'season'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Section */
export interface Sec extends Element {
  type: 'element'
  name: 'sec'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    secType?: string
    specificUse?: string
  }
  children: RequiredMap<SecChildren>[]
}

export interface SecChildren {
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title: Title
}

/** Section Metadata */
export interface SecMeta extends Element {
  type: 'element'
  name: 'sec-meta'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<SecMetaChildren>[]
}

export interface SecMetaChildren {
  /** Permissions */
  permissions?: Permissions
}

export type SecType = TextNode<'sec-type'>

/** See */
export interface See extends Element {
  type: 'element'
  name: 'see'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** See-Also Term */
export interface SeeAlso extends Element {
  type: 'element'
  name: 'see-also'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** Element is self-closing */
  children: []
}

/** Uri For This Same Article Online */
export interface SelfUri extends Element {
  type: 'element'
  name: 'self-uri'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type Seq = TextNode<'seq'>

/** Series */
export interface Series extends Element {
  type: 'element'
  name: 'series'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Series Text: Header Text to Describe */
export interface SeriesText extends Element {
  type: 'element'
  name: 'series-text'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Series Title */
export interface SeriesTitle extends Element {
  type: 'element'
  name: 'series-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Signature */
export interface Sig extends Element {
  type: 'element'
  name: 'sig'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Signature Block */
export interface SigBlock extends Element {
  type: 'element'
  name: 'sig-block'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Size */
export interface Size extends Element {
  type: 'element'
  name: 'size'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    units: string
  }
  /** Element is self-closing */
  children: []
}

/** Source */
export interface Source extends Element {
  type: 'element'
  name: 'source'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type SourceId = TextNode<'source-id'>

export type SourceIdtype = TextNode<'source-id-type'>

export type SourceType = TextNode<'source-type'>

export type Span = TextNode<'span'>

/** Speaker */
export interface Speaker extends Element {
  type: 'element'
  name: 'speaker'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type SpecificUse = TextNode<'specific-use'>

/** Speech */
export interface Speech extends Element {
  type: 'element'
  name: 'speech'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<SpeechChildren>[]
}

export interface SpeechChildren {
  /** Speaker */
  speaker: Speaker
}

/** State or Province: in an Address */
export interface State extends Element {
  type: 'element'
  name: 'state'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Statement, Formal */
export interface Statement extends Element {
  type: 'element'
  name: 'statement'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<StatementChildren>[]
}

export interface StatementChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

/** Standard, Cited */
export interface Std extends Element {
  type: 'element'
  name: 'std'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Standards Organization */
export interface StdOrganization extends Element {
  type: 'element'
  name: 'std-organization'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Strike Through */
export interface Strike extends Element {
  type: 'element'
  name: 'strike'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: StrikeToggle
  }
  /** Element is self-closing */
  children: []
}

/** String Conference Name */
export interface StringConf extends Element {
  type: 'element'
  name: 'string-conf'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Date As a String */
export interface StringDate extends Element {
  type: 'element'
  name: 'string-date'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Name of Person (Unstructured) */
export interface StringName extends Element {
  type: 'element'
  name: 'string-name'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    nameStyle?: StringNameNameStyle
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Style = TextNode<'style'>

/** Styled Special (Subject) Content */
export interface StyledContent extends Element {
  type: 'element'
  name: 'styled-content'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
    toggle?: StyledContentToggle
  }
  /** Element is self-closing */
  children: []
}

export type StyleDetail = TextNode<'style-detail'>

export type StyleType = TextNode<'style-type'>

/** Subscript */
export interface Sub extends Element {
  type: 'element'
  name: 'sub'
  attributes: {
    arrange?: SubArrange
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Sub-Article */
export interface SubArticle extends Element {
  type: 'element'
  name: 'sub-article'
  attributes: {
    articleType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<SubArticleChildren>[]
}

export interface SubArticleChildren {
  /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  frontStub: FrontStub
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
  /** Response */
  response?: Response[]
  /** Sub-Article */
  subArticle?: SubArticle[]
}

/** Subject Name */
export interface Subject extends Element {
  type: 'element'
  name: 'subject'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  /** Element is self-closing */
  children: []
}

export interface SubjGroup extends Element {
  type: 'element'
  name: 'subj-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    subjGrouptype?: string
    vocab?: string
    vocabIdentifier?: string
  }
  children: RequiredMap<SubjGroupChildren>[]
}

export interface SubjGroupChildren {
  /** Compound Subject Name */
  CompoundSubject: CompoundSubject[]
  subjGroup?: SubjGroup[]
  /** Subject Name */
  Subject: Subject[]
}

export type SubjGrouptype = TextNode<'subj-group-type'>

/** Article Subtitle */
export interface Subtitle extends Element {
  type: 'element'
  name: 'subtitle'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Suffix */
export interface Suffix extends Element {
  type: 'element'
  name: 'suffix'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Summary = TextNode<'summary'>

/** Superscript */
export interface Sup extends Element {
  type: 'element'
  name: 'sup'
  attributes: {
    arrange?: SupArrange
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Supplement */
export interface Supplement extends Element {
  type: 'element'
  name: 'supplement'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    supplementType?: string
  }
  /** Element is self-closing */
  children: []
}

/** Supplementary Material */
export interface SupplementaryMaterial extends Element {
  type: 'element'
  name: 'supplementary-material'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

export type SupplementType = TextNode<'supplement-type'>

/** Support Description */
export interface SupportDescription extends Element {
  type: 'element'
  name: 'support-description'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Support Group */
export interface SupportGroup extends Element {
  type: 'element'
  name: 'support-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<SupportGroupChildren>[]
}

export interface SupportGroupChildren {
  /** Contributed Resource Group */
  ContributedResourcegroup?: ContributedResourcegroup[]
  /** Funding Group */
  fundingGroup?: FundingGroup[]
}

/** Support Source */
export interface SupportSource extends Element {
  type: 'element'
  name: 'support-source'
  attributes: {
    actuate?: xlink.Actuate
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    country?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    rid?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    supportType?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type SupportType = TextNode<'support-type'>

/** Surname */
export interface Surname extends Element {
  type: 'element'
  name: 'surname'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    initials?: string
  }
  /** Element is self-closing */
  children: []
}

export type Symbol = TextNode<'symbol'>

/** Table: Table Element .............................. */
export interface Table extends Element {
  type: 'element'
  name: 'table'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  children: RequiredMap<TableChildren>[]
}

export interface TableChildren {
  col?: Col[]
  colgroup?: Colgroup[]
}

/** Table Count */
export interface TableCount extends Element {
  type: 'element'
  name: 'table-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type ProcessingMetaTableModel = 'both' | 'none' | 'oasis' | 'xhtml'

/** Table Wrapper */
export interface TableWrap extends Element {
  type: 'element'
  name: 'table-wrap'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: TableWrapOrientation
    position?: TableWrapPosition
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Table Wrap Footer */
export interface TableWrapfoot extends Element {
  type: 'element'
  name: 'table-wrap-foot'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<TableWrapfootChildren>[]
}

export interface TableWrapfootChildren {
  /** Title */
  title?: Title
}

/** Table Wrapper Group */
export interface TableWrapgroup extends Element {
  type: 'element'
  name: 'table-wrap-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    orientation?: TableWrapgroupOrientation
    position?: TableWrapgroupPosition
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type ProcessingMetaTagsetFamily = 'bits' | 'jats' | 'sts'

/** Target of an Internal Link */
export interface Target extends Element {
  type: 'element'
  name: 'target'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    targetType?: string
  }
  /** Element is self-closing */
  children: []
}

export type TargetType = TextNode<'target-type'>

export interface Tbody extends Element {
  type: 'element'
  name: 'tbody'
  attributes: {
    align?: TbodyAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TbodyValign
  }
  children: RequiredMap<TbodyChildren>[]
}

export interface TbodyChildren {
  tr: Tr[]
}

export interface Td extends Element {
  type: 'element'
  name: 'td'
  attributes: {
    abbr?: string
    align?: TdAlign
    axis?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

/** Definition List: Term */
export interface Term extends Element {
  type: 'element'
  name: 'term'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
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
  /** Element is self-closing */
  children: []
}

/** Definition List: Term Head */
export interface TermHead extends Element {
  type: 'element'
  name: 'term-head'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

export type TermStatus = TextNode<'term-status'>

export type TermType = TextNode<'term-type'>

/** Tex Math Equation */
export interface TexMath extends Element {
  type: 'element'
  name: 'tex-math'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    notation?: TexMathNotation
    specificUse?: string
    version?: string
  }
  /** Element is self-closing */
  children: []
}

/** Textual Form */
export interface TextualForm extends Element {
  type: 'element'
  name: 'textual-form'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export interface Tfoot extends Element {
  type: 'element'
  name: 'tfoot'
  attributes: {
    align?: TfootAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TfootValign
  }
  children: RequiredMap<TfootChildren>[]
}

export interface TfootChildren {
  tr: Tr[]
}

export interface Th extends Element {
  type: 'element'
  name: 'th'
  attributes: {
    abbr?: string
    align?: ThAlign
    axis?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
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
  /** Element is self-closing */
  children: []
}

export interface Thead extends Element {
  type: 'element'
  name: 'thead'
  attributes: {
    align?: TheadAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TheadValign
  }
  children: RequiredMap<TheadChildren>[]
}

export interface TheadChildren {
  tr: Tr[]
}

/** Time Stamp For Cited Work */
export interface TimeStamp extends Element {
  type: 'element'
  name: 'time-stamp'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Title */
export interface Title extends Element {
  type: 'element'
  name: 'title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Title Group */
export interface TitleGroup extends Element {
  type: 'element'
  name: 'title-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
  }
  children: RequiredMap<TitleGroupChildren>[]
}

export interface TitleGroupChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Article Title */
  ArticleTitle: ArticleTitle
  /** Footnote Group */
  FnGroup?: FnGroup
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
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

export interface Tr extends Element {
  type: 'element'
  name: 'tr'
  attributes: {
    align?: TrAlign
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
    valign?: TrValign
  }
  children: RequiredMap<TrChildren>[]
}

export interface TrChildren {
  Td: Td[]
  Th: Th[]
}

/** Translated Abstract */
export interface TransAbstract extends Element {
  type: 'element'
  name: 'trans-abstract'
  attributes: {
    abstractType?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<TransAbstractChildren>[]
}

export interface TransAbstractChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

/** Translated Source */
export interface TransSource extends Element {
  type: 'element'
  name: 'trans-source'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Translated Subtitle */
export interface TransSubtitle extends Element {
  type: 'element'
  name: 'trans-subtitle'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Translated Title */
export interface TransTitle extends Element {
  type: 'element'
  name: 'trans-title'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Translated Title Group */
export interface TransTitlegroup extends Element {
  type: 'element'
  name: 'trans-title-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<TransTitlegroupChildren>[]
}

export interface TransTitlegroupChildren {
  /** Translated Subtitle */
  TransSubtitle?: TransSubtitle[]
  /** Translated Title */
  TransTitle: TransTitle
}

/** Underline */
export interface Underline extends Element {
  type: 'element'
  name: 'underline'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    specificUse?: string
    toggle?: UnderlineToggle
    underlineStyle?: string
  }
  /** Element is self-closing */
  children: []
}

/** Underline End */
export interface UnderlineEnd extends Element {
  type: 'element'
  name: 'underline-end'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    rid: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Underline Start */
export interface UnderlineStart extends Element {
  type: 'element'
  name: 'underline-start'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type UnderlineStyle = TextNode<'underline-style'>

export type Units = TextNode<'units'>

/** Unstructured Keyword Group */
export interface UnstructuredKwdgroup extends Element {
  type: 'element'
  name: 'unstructured-kwd-group'
  attributes: {
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    id?: string
    kwdGrouptype?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  /** Element is self-closing */
  children: []
}

/** Uri */
export interface Uri extends Element {
  type: 'element'
  name: 'uri'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

export type UseType = TextNode<'use-type'>

export type ColValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type ColgroupValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TbodyValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TrValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TdValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type ThValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TfootValign = 'baseline' | 'bottom' | 'middle' | 'top'

export type TheadValign = 'baseline' | 'bottom' | 'middle' | 'top'

/** Verse Form For Poetry */
export interface VerseGroup extends Element {
  type: 'element'
  name: 'verse-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }
  children: RequiredMap<VerseGroupChildren>[]
}

export interface VerseGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Article Subtitle */
  subtitle?: Subtitle
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
  /** Line of a Verse */
  verseLine: VerseLine[]
}

/** Line of a Verse */
export interface VerseLine extends Element {
  type: 'element'
  name: 'verse-line'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    indentLevel?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }
  /** Element is self-closing */
  children: []
}

export type Version = TextNode<'version'>

export type Vocab = TextNode<'vocab'>

export type VocabIdentifier = TextNode<'vocab-identifier'>

export type VocabTerm = TextNode<'vocab-term'>

export type VocabTermidentifier = TextNode<'vocab-term-identifier'>

export type Vol = TextNode<'vol'>

/** Volume Number */
export interface Volume extends Element {
  type: 'element'
  name: 'volume'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    seq?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** Volume Identifier */
export interface VolumeId extends Element {
  type: 'element'
  name: 'volume-id'
  attributes: {
    actuate?: xlink.Actuate
    assigningAuthority?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    href?: string
    hreflang?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    pubIdtype?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  /** Element is self-closing */
  children: []
}

/** Translated Title Group */
export interface VolumeIssuegroup extends Element {
  type: 'element'
  name: 'volume-issue-group'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  children: RequiredMap<VolumeIssuegroupChildren>[]
}

export interface VolumeIssuegroupChildren {
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

/** Volume Series */
export interface VolumeSeries extends Element {
  type: 'element'
  name: 'volume-series'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type Width = TextNode<'width'>

/** Word Count */
export interface WordCount extends Element {
  type: 'element'
  name: 'word-count'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    count: string
    id?: string
  }
  /** Element is self-closing */
  children: []
}

/** X - Generated Text and Punctuation */
export interface X extends Element {
  type: 'element'
  name: 'x'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    contentType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    /** space (as an attribute name)
     *
     * denotes an attribute whose
     * value is a keyword indicating what whitespace processing
     * discipline is intended for the content of the element; its
     * value is inherited.  This name is reserved by virtue of its
     * definition in the XML specification. */
    space: xml.Space
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

/** X(cross) Reference */
export interface Xref extends Element {
  type: 'element'
  name: 'xref'
  attributes: {
    alt?: string
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    customType?: string
    id?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    refType?: XrefRefType
    rid?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type XSize = TextNode<'x-size'>

/** Year */
export interface Year extends Element {
  type: 'element'
  name: 'year'
  attributes: {
    /** base (as an attribute name)
     *
     * denotes an attribute whose value
     * provides a URI to be used as the base for interpreting any
     * relative URIs in the scope of the element on which it
     * appears; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML Base specification.
     *
     * See http://www.w3.org/TR/xmlbase/
     * for information about this attribute. */
    base?: string
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    /** lang (as an attribute name)
     *
     * denotes an attribute whose value
     * is a language code for the natural language of the content of
     * any element; its value is inherited.  This name is reserved
     * by virtue of its definition in the XML specification.
     *
     * Notes
     *
     * Attempting to install the relevant ISO 2- and 3-letter
     * codes as the enumerated possible values is probably never
     * going to be a realistic possibility.
     *
     * See BCP 47 at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
     * and the IANA language subtag registry at
     *
     * http://www.iana.org/assignments/language-subtag-registry
     * for further information.
     *
     * The union allows for the 'un-declaration' of xml:lang with
     * the empty string. */
    lang?: string
    specificUse?: string
  }
  /** Element is self-closing */
  children: []
}

export type YSize = TextNode<'y-size'>
