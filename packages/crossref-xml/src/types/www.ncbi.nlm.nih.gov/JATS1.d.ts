import * as Primitive from '../xml-primitives'
import * as xlink from '../www.w3.org/1999/xlink'
import * as xml from '../www.w3.org/XML/1998/namespace'

// Source files:
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3-elements.xsd
// https://data.crossref.org/schemas/JATS-journalpublishing1-3d2-mathml3.xsd

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
/** Abbreviated Journal Title */
export interface AbbrevJournaltitle extends Element {
  type: 'element'
  name: 'abbrev-journal-title'
  attributes: {
    abbrev?: string
    /** base (as an attribute name)
     *
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
}

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
    content?: string
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
}

/** Abstract */
export interface Abstract extends Element {
  type: 'element'
  name: 'abstract'
  attributes: {
    abstract?: string
    /** base (as an attribute name)
     *
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
  children: RequiredMap<AbstractChildren>
}

export interface AbstractChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

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
    content?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
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
    content?: string
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
  children: RequiredMap<AckChildren>
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
    content?: string
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
    content?: string
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
  children: RequiredMap<AffAlternativesChildren>
}

export interface AffAlternativesChildren {
  /** Affiliation */
  aff: Aff[]
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
    content?: string
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
}

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
    content?: string
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
}

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
    content?: string
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
    content?: string
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
  children: RequiredMap<AnswerSetChildren>
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
    content?: string
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
  children: RequiredMap<AnswerChildren>
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
    content?: string
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
  children: RequiredMap<AppGroupChildren>
}

export interface AppGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
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
    content?: string
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
  children: RequiredMap<AppChildren>
}

export interface AppChildren {
  /** Permissions */
  permissions?: Permissions
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title: Title
}

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
    content?: string
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
}

type ArrayOrientation = 'landscape' | 'portrait'
interface _ArrayOrientation extends Primitive._string {
  content: ArrayOrientation
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
  children: RequiredMap<ArticleCategoriesChildren>
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
    custom?: string
    id?: string
    pubIdtype?: ArticleIdPubIdtype
    specificUse?: string
  }
}

type ArticleIdPubIdtype =
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
interface _ArticleIdPubIdtype extends Primitive._string {
  content: ArticleIdPubIdtype
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
  children: RequiredMap<ArticleMetaChildren>
}

export interface ArticleMetaChildren {
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
}

/** Article */
export interface Article extends Element {
  type: 'element'
  name: 'article'
  attributes: {
    article?: string
    /** base (as an attribute name)
     *
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
  children: RequiredMap<ArticleChildren>
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

type ArticleDtdVersion =
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
interface _ArticleDtdVersion extends Primitive._string {
  content: ArticleDtdVersion
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
  children: RequiredMap<ArticleVersionalternativesChildren>
}

export interface ArticleVersionalternativesChildren {
  /** Article Version */
  articleVersion: ArticleVersion[]
}

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
    content?: string
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
}

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
}

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
    content?: string
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
  children: RequiredMap<AuthorCommentChildren>
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
  children: RequiredMap<AuthorNotesChildren>
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
}

/** Award Group */
export interface AwardGroup extends Element {
  type: 'element'
  name: 'award-group'
  attributes: {
    actuate?: xlink.Actuate
    award?: string
    /** base (as an attribute name)
     *
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
  children: RequiredMap<AwardGroupChildren>
}

export interface AwardGroupChildren {
  /** Award Description */
  awardDesc?: AwardDesc
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
    award?: string
    /** base (as an attribute name)
     *
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
}

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
}

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
  children: RequiredMap<BackChildren>
}

export interface BackChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title[]
}

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
    content?: string
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
    $title?: string
    type?: xlink.Type
  }
  children: RequiredMap<BioChildren>
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
  children: RequiredMap<BodyChildren>
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
}

type BoldToggle = 'no' | 'yes'
interface _BoldToggle extends Primitive._string {
  content: BoldToggle
}

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
    content?: string
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
  children: RequiredMap<BoxedTextChildren>
}

export interface BoxedTextChildren {
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
}

type BoxedTextOrientation = 'landscape' | 'portrait'
interface _BoxedTextOrientation extends Primitive._string {
  content: BoxedTextOrientation
}

type BoxedTextPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _BoxedTextPosition extends Primitive._string {
  content: BoxedTextPosition
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
}

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
    content?: string
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
  children: RequiredMap<CaptionChildren>
}

export interface CaptionChildren {
  /** Title */
  title?: Title
}

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
}

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
    content?: string
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
    content?: string
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
  children: RequiredMap<ChemStructwrapChildren>
}

export interface ChemStructwrapChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

type ChemStructwrapOrientation = 'landscape' | 'portrait'
interface _ChemStructwrapOrientation extends Primitive._string {
  content: ChemStructwrapOrientation
}

type ChemStructwrapPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _ChemStructwrapPosition extends Primitive._string {
  content: ChemStructwrapPosition
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
    content?: string
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
    code?: string
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
}

type CodeExecutable = 'no' | 'yes'
interface _CodeExecutable extends Primitive._string {
  content: CodeExecutable
}

type CodeOrientation = 'landscape' | 'portrait'
interface _CodeOrientation extends Primitive._string {
  content: CodeOrientation
}

type CodePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _CodePosition extends Primitive._string {
  content: CodePosition
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
    content?: string
    id?: string
    span?: string
    style?: string
    valign?: ColgroupValign
    width?: string
  }
  children: RequiredMap<ColgroupChildren>
}

export interface ColgroupChildren {
  col?: Col[]
}

type ColgroupAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColgroupAlign extends Primitive._string {
  content: ColgroupAlign
}

type ColgroupValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColgroupValign extends Primitive._string {
  content: ColgroupValign
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
    collab?: string
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
}

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
    content?: string
    id?: string
    span?: string
    style?: string
    valign?: ColValign
    width?: string
  }
}

type ColAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColAlign extends Primitive._string {
  content: ColAlign
}

type ColValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColValign extends Primitive._string {
  content: ColValign
}

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
    content?: string
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
    content?: string
    id?: string
  }
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
    content?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<CompoundKwdChildren>
}

export interface CompoundKwdChildren {
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpart[]
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
    content?: string
    id?: string
  }
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
    content?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<CompoundSubjectChildren>
}

export interface CompoundSubjectChildren {
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpart[]
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
    content?: string
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
    content?: string
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
    content?: string
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
  children: RequiredMap<ConferenceChildren>
}

export interface ConferenceChildren {
  /** Conference Acronym */
  confAcronym: ConfAcronym[]
  /** Conference Date */
  confDate: ConfDate
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
    id?: string
    specificUse?: string
  }
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
    content?: string
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
}

type ContribIdAuthenticated = 'false' | 'true'
interface _ContribIdAuthenticated extends Primitive._string {
  content: ContribIdAuthenticated
}

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
    contrib?: string
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
}

type ContribCorresp = 'no' | 'yes'
interface _ContribCorresp extends Primitive._string {
  content: ContribCorresp
}

type ContribDeceased = 'no' | 'yes'
interface _ContribDeceased extends Primitive._string {
  content: ContribDeceased
}

type ContribEqualContrib = 'no' | 'yes'
interface _ContribEqualContrib extends Primitive._string {
  content: ContribEqualContrib
}

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
    resource?: string
    specificUse?: string
  }
  children: RequiredMap<ContributedResourcegroupChildren>
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
    content?: string
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
    content?: string
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
    content?: string
    id?: string
    specificUse?: string
  }
}

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
    content?: string
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
}

/** Country: in an Address */
export interface Country extends Element {
  type: 'element'
  name: 'country'
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
    content?: string
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
}

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
  children: RequiredMap<CountsChildren>
}

export interface CountsChildren {
  /** Count */
  count?: Count[]
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
    count: string
    id?: string
  }
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
    content?: string
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
  children: RequiredMap<CustomMetagroupChildren>
}

export interface CustomMetagroupChildren {
  /** Custom Metadata */
  customMeta: CustomMeta[]
}

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
  children: RequiredMap<CustomMetaChildren>
}

export interface CustomMetaChildren {
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaName
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValue
}

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
    content?: string
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
    content?: string
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
    date?: string
    id?: string
    iso8601Date?: string
    publicationFormat?: string
    specificUse?: string
  }
  children: RequiredMap<DateChildren>
}

export interface DateChildren {
  /** Era */
  era?: Era
  /** Season */
  season?: Season
  /** Year */
  year: Year
}

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
    content?: string
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
  children: RequiredMap<DefItemChildren>
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
    list?: string
    prefixWord?: string
    specificUse?: string
  }
  children: RequiredMap<DefListChildren>
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
}

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
    content?: string
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
    content?: string
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
  children: RequiredMap<DispFormulagroupChildren>
}

export interface DispFormulagroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

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
    content?: string
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
    content?: string
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
  children: RequiredMap<DispQuoteChildren>
}

export interface DispQuoteChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

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
    content?: string
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
    publication?: string
    publisher?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    use?: string
  }
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
    content?: string
    id?: string
    seq?: string
    specificUse?: string
  }
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
    content?: string
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
}

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
    content?: string
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
    event?: string
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
  children: RequiredMap<EventChildren>
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
    content?: string
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
  children: RequiredMap<ExplanationChildren>
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
}

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
    content?: string
    id?: string
    specificUse?: string
  }
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
    content?: string
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
}

type FigGroupOrientation = 'landscape' | 'portrait'
interface _FigGroupOrientation extends Primitive._string {
  content: FigGroupOrientation
}

type FigGroupPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _FigGroupPosition extends Primitive._string {
  content: FigGroupPosition
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
    fig?: string
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
}

type FigOrientation = 'landscape' | 'portrait'
interface _FigOrientation extends Primitive._string {
  content: FigOrientation
}

type FigPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _FigPosition extends Primitive._string {
  content: FigPosition
}

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
    content?: string
    id?: string
    specificUse?: string
  }
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
    content?: string
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
  children: RequiredMap<FnGroupChildren>
}

export interface FnGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
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
    custom?: string
    fn?: FnFn
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
  children: RequiredMap<FnChildren>
}

export interface FnChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

type FnFn =
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
interface _FnFn extends Primitive._string {
  content: FnFn
}

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
    content?: string
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
  children: RequiredMap<FrontStubChildren>
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
  children: RequiredMap<FrontChildren>
}

export interface FrontChildren {
  /** Article Metadata */
  articleMeta: ArticleMeta
  /** Journal Metadata */
  journalMeta: JournalMeta
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
  children: RequiredMap<FundingGroupChildren>
}

export interface FundingGroupChildren {
  /** Award Group */
  awardGroup?: AwardGroup[]
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
    source?: string
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
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
    content?: string
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
  children: RequiredMap<GlossaryChildren>
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
    content?: string
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
    content?: string
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
}

type GraphicOrientation = 'landscape' | 'portrait'
interface _GraphicOrientation extends Primitive._string {
  content: GraphicOrientation
}

type GraphicPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _GraphicPosition extends Primitive._string {
  content: GraphicPosition
}

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
}

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
    content?: string
    id?: string
    index?: string
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
  children: RequiredMap<IndexTermChildren>
}

export interface IndexTermChildren {
  /** Index Term */
  indexTerm: IndexTerm
  /** Definition List: Term */
  term: Term
}

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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
}

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
    content?: string
    id?: string
    publicationFormat?: string
    specificUse?: string
  }
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
}

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
    content?: string
    id?: string
    pub?: string
    publicationFormat?: string
    specificUse?: string
  }
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
  children: RequiredMap<IssueTitlegroupChildren>
}

export interface IssueTitlegroupChildren {
  /** Issue Subtitle */
  issueSubtitle?: IssueSubtitle[]
  /** Issue Title */
  issueTitle: IssueTitle
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
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
    content?: string
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
    content?: string
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
}

type ItalicToggle = 'no' | 'yes'
interface _ItalicToggle extends Primitive._string {
  content: ItalicToggle
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
}

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
  children: RequiredMap<JournalMetaChildren>
}

export interface JournalMetaChildren {
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn: Issn[]
  /** Issn Linking */
  issnL?: IssnL
  /** Journal Identifier */
  journalId: JournalId[]
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
    content?: string
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
    content?: string
    id?: string
  }
  children: RequiredMap<JournalTitlegroupChildren>
}

export interface JournalTitlegroupChildren {
  /** Abbreviated Journal Title */
  abbrevJournaltitle?: AbbrevJournaltitle[]
  /** Journal Subtitle */
  journalSubtitle?: JournalSubtitle[]
  /** Journal Title (Full) */
  journalTitle?: JournalTitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
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
    content?: string
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
  children: RequiredMap<KwdGroupChildren>
}

export interface KwdGroupChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
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
    content?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
}

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
    content?: string
    id?: string
    specificUse?: string
  }
}

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
    license?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
}

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
  children: RequiredMap<ListItemChildren>
}

export interface ListItemChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

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
    list?: string
    prefixWord?: string
    specificUse?: string
  }
  children: RequiredMap<ListChildren>
}

export interface ListChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

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
    content?: string
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
    content?: string
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
}

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
    content?: string
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
}

type MediaOrientation = 'landscape' | 'portrait'
interface _MediaOrientation extends Primitive._string {
  content: MediaOrientation
}

type MediaPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _MediaPosition extends Primitive._string {
  content: MediaPosition
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
    content?: string
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
    content?: string
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
}

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
    publication?: string
    publisher?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
    use?: string
  }
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
}

type MonospaceToggle = 'no' | 'yes'
interface _MonospaceToggle extends Primitive._string {
  content: MonospaceToggle
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
    content?: string
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
    content: string
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
    content?: string
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
  children: RequiredMap<NameChildren>
}

export interface NameChildren {
  /** Given (First) Names */
  givenNames: GivenNames
  /** Prefix */
  prefix?: Prefix
  /** Suffix */
  suffix?: Suffix
}

type NameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'
interface _NameNameStyle extends Primitive._string {
  content: NameNameStyle
}

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
    content?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: RequiredMap<NestedKwdChildren>
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
    publication?: string
    publisher?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
  children: RequiredMap<NlmCitationChildren>
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
    notes?: string
    specificUse?: string
  }
  children: RequiredMap<NotesChildren>
}

export interface NotesChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title?: Title
}

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
    content?: string
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
  children: RequiredMap<NoteChildren>
}

export interface NoteChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

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
    content?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
}

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
    content?: string
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
  children: RequiredMap<OptionChildren>
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

type OptionCorrect = 'no' | 'yes'
interface _OptionCorrect extends Primitive._string {
  content: OptionCorrect
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
}

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
}

type OverlineToggle = 'no' | 'yes'
interface _OverlineToggle extends Primitive._string {
  content: OverlineToggle
}

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
    content?: string
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
    content?: string
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
  children: RequiredMap<PermissionsChildren>
}

export interface PermissionsChildren {
  /** Copyright Holder */
  copyrightHolder?: CopyrightHolder[]
  /** Copyright Statement */
  copyrightStatement?: CopyrightStatement[]
  /** Copyright Year */
  copyrightYear?: CopyrightYear[]
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
    custom?: string
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
}

type PersonGroupPersonGrouptype =
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
interface _PersonGroupPersonGrouptype extends Primitive._string {
  content: PersonGroupPersonGrouptype
}

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
    content?: string
    id?: string
    specificUse?: string
  }
}

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
    content?: string
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
    content?: string
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
}

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
    preformat?: string
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
}

type PreformatOrientation = 'landscape' | 'portrait'
interface _PreformatOrientation extends Primitive._string {
  content: PreformatOrientation
}

type PreformatPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _PreformatPosition extends Primitive._string {
  content: PreformatPosition
}

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
    content?: string
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
  children: RequiredMap<PrivateCharChildren>
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
  children: RequiredMap<ProcessingMetaChildren>
}

export interface ProcessingMetaChildren {
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup[]
  /** Extended-by Model */
  extendedBy?: ExtendedBy[]
  /** Restricted-by Model */
  restrictedBy?: RestrictedBy[]
}

type ProcessingMetaBaseTagset = 'archiving' | 'authoring' | 'publishing'
interface _ProcessingMetaBaseTagset extends Primitive._string {
  content: ProcessingMetaBaseTagset
}

type ProcessingMetaMathmlVersion = '2.0' | '3.0'
interface _ProcessingMetaMathmlVersion extends Primitive._string {
  content: ProcessingMetaMathmlVersion
}

type ProcessingMetaTableModel = 'both' | 'none' | 'oasis' | 'xhtml'
interface _ProcessingMetaTableModel extends Primitive._string {
  content: ProcessingMetaTableModel
}

type ProcessingMetaTagsetFamily = 'bits' | 'jats' | 'sts'
interface _ProcessingMetaTagsetFamily extends Primitive._string {
  content: ProcessingMetaTagsetFamily
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
    product?: string
    role?: string
    show?: xlink.Show
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
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
    content?: string
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
}

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
    date?: string
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
    pub?: string
    publicationFormat?: string
  }
  children: RequiredMap<PubDateChildren>
}

export interface PubDateChildren {
  /** Era */
  era?: Era
  /** Season */
  season?: Season
  /** Year */
  year: Year
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
    custom?: string
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
}

type PubIdPubIdtype =
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
interface _PubIdPubIdtype extends Primitive._string {
  content: PubIdPubIdtype
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
}

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
    content?: string
    id?: string
  }
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
    content?: string
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
  children: RequiredMap<QuestionPreambleChildren>
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
    content?: string
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
  children: RequiredMap<QuestionChildren>
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

type QuestionQuestionResponsetype =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'
interface _QuestionQuestionResponsetype extends Primitive._string {
  content: QuestionQuestionResponsetype
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
    content?: string
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
  children: RequiredMap<QuestionWrapgroupChildren>
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
    content?: string
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
  children: RequiredMap<QuestionWrapChildren>
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
    content?: string
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
    content?: string
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
  children: RequiredMap<RefListChildren>
}

export interface RefListChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Reference Item */
  ref?: Ref[]
  /** Title */
  title?: Title
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
    content?: string
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
  children: RequiredMap<RefChildren>
}

export interface RefChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
}

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
}

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
    content?: string
    documentId?: string
    documentIdtype?: string
    document?: string
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
    link?: string
    objectId?: string
    objectIdtype?: string
    object?: string
    role?: string
    show?: xlink.Show
    sourceId?: string
    sourceIdtype?: string
    source?: string
    specificUse?: string
    title?: string
    type?: xlink.Type
  }
}

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
    content?: string
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
}

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
    content?: string
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
}

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
  children: RequiredMap<ResourceWrapChildren>
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
    response?: string
    specificUse?: string
  }
  children: RequiredMap<ResponseChildren>
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
  frontStub: FrontStub
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
}

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
}

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
    content?: string
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
}

type RomanToggle = 'no' | 'yes'
interface _RomanToggle extends Primitive._string {
  content: RomanToggle
}

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
    content?: string
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
    content?: string
    id?: string
    specificUse?: string
  }
  children: RequiredMap<RubyChildren>
}

export interface RubyChildren {
  /** Ruby Base */
  rb: Rb
  /** Ruby Textual Annotation */
  rt: Rt
}

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
}

type SansSerifToggle = 'no' | 'yes'
interface _SansSerifToggle extends Primitive._string {
  content: SansSerifToggle
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
}

type ScToggle = 'no' | 'yes'
interface _ScToggle extends Primitive._string {
  content: ScToggle
}

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
    content?: string
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
  children: RequiredMap<SecMetaChildren>
}

export interface SecMetaChildren {
  /** Permissions */
  permissions?: Permissions
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
    sec?: string
    specificUse?: string
  }
  children: RequiredMap<SecChildren>
}

export interface SecChildren {
  /** Section Metadata */
  secMeta?: SecMeta
  /** Title */
  title: Title
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
    content?: string
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
}

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
    content?: string
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
    content?: string
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
    content?: string
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
    content?: string
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
}

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
    content?: string
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
    content?: string
    id?: string
    rid?: string
    specificUse?: string
  }
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
    content?: string
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
    content?: string
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
}

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
    content?: string
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
}

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
    content?: string
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
  children: RequiredMap<SpeechChildren>
}

export interface SpeechChildren {
  /** Speaker */
  speaker: Speaker
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
    content?: string
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
  children: RequiredMap<StatementChildren>
}

export interface StatementChildren {
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
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
    content?: string
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
    content?: string
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
    content?: string
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
}

type StrikeToggle = 'no' | 'yes'
interface _StrikeToggle extends Primitive._string {
  content: StrikeToggle
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
    content?: string
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
    content?: string
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
    content?: string
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
}

type StringNameNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'
interface _StringNameNameStyle extends Primitive._string {
  content: StringNameNameStyle
}

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
    style?: string
    toggle?: StyledContentToggle
  }
}

type StyledContentToggle = 'no' | 'yes'
interface _StyledContentToggle extends Primitive._string {
  content: StyledContentToggle
}

/** Sub-Article */
export interface SubArticle extends Element {
  type: 'element'
  name: 'sub-article'
  attributes: {
    article?: string
    /** base (as an attribute name)
     *
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
  children: RequiredMap<SubArticleChildren>
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
    content?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
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
  children: RequiredMap<SubjGroupChildren>
}

export interface SubjGroupChildren {
  /** Compound Subject Name */
  compoundSubject: CompoundSubject[]
  subjGroup?: SubjGroup[]
  /** Subject Name */
  subject: Subject[]
}

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
    content?: string
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
}

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
}

type SubArrange = 'stack' | 'stagger'
interface _SubArrange extends Primitive._string {
  content: SubArrange
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
    content?: string
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
    content?: string
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
}

type SupplementaryMaterialOrientation = 'landscape' | 'portrait'
interface _SupplementaryMaterialOrientation extends Primitive._string {
  content: SupplementaryMaterialOrientation
}

type SupplementaryMaterialPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _SupplementaryMaterialPosition extends Primitive._string {
  content: SupplementaryMaterialPosition
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
    supplement?: string
  }
}

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
  children: RequiredMap<SupportGroupChildren>
}

export interface SupportGroupChildren {
  /** Contributed Resource Group */
  contributedResourcegroup?: ContributedResourcegroup[]
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
    support?: string
    title?: string
    type?: xlink.Type
  }
}

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
}

type SupArrange = 'stack' | 'stagger'
interface _SupArrange extends Primitive._string {
  content: SupArrange
}

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
}

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
    content?: string
    frame?: TableFrame
    id?: string
    rules?: TableRules
    specificUse?: string
    style?: string
    summary?: string
    width?: string
  }
  children: RequiredMap<TableChildren>
}

export interface TableChildren {
  col?: Col[]
  colgroup?: Colgroup[]
}

type TableFrame =
  | 'above'
  | 'below'
  | 'border'
  | 'box'
  | 'hsides'
  | 'lhs'
  | 'rhs'
  | 'void'
  | 'vsides'
interface _TableFrame extends Primitive._string {
  content: TableFrame
}

type TableRules = 'all' | 'cols' | 'groups' | 'none' | 'rows'
interface _TableRules extends Primitive._string {
  content: TableRules
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
  children: RequiredMap<TableWrapfootChildren>
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
    content?: string
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
}

type TableWrapgroupOrientation = 'landscape' | 'portrait'
interface _TableWrapgroupOrientation extends Primitive._string {
  content: TableWrapgroupOrientation
}

type TableWrapgroupPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _TableWrapgroupPosition extends Primitive._string {
  content: TableWrapgroupPosition
}

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
    content?: string
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
}

type TableWrapOrientation = 'landscape' | 'portrait'
interface _TableWrapOrientation extends Primitive._string {
  content: TableWrapOrientation
}

type TableWrapPosition = 'anchor' | 'background' | 'float' | 'margin'
interface _TableWrapPosition extends Primitive._string {
  content: TableWrapPosition
}

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
    target?: string
  }
}

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
    content?: string
    id?: string
    style?: string
    valign?: TbodyValign
  }
  children: RequiredMap<TbodyChildren>
}

export interface TbodyChildren {
  tr: Tr[]
}

type TbodyAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TbodyAlign extends Primitive._string {
  content: TbodyAlign
}

type TbodyValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TbodyValign extends Primitive._string {
  content: TbodyValign
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
    content?: string
    headers?: string
    id?: string
    rowspan?: string
    scope?: TdScope
    style?: string
    valign?: TdValign
  }
}

type TdAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TdAlign extends Primitive._string {
  content: TdAlign
}

type TdScope = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _TdScope extends Primitive._string {
  content: TdScope
}

type TdValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TdValign extends Primitive._string {
  content: TdValign
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
    term?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
}

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
    content?: string
    id?: string
    notation?: TexMathNotation
    specificUse?: string
    version?: string
  }
}

type TexMathNotation = 'LaTeX' | 'TEX' | 'TeX' | 'tex'
interface _TexMathNotation extends Primitive._string {
  content: TexMathNotation
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
    content?: string
    id?: string
    style?: string
    valign?: TfootValign
  }
  children: RequiredMap<TfootChildren>
}

export interface TfootChildren {
  tr: Tr[]
}

type TfootAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TfootAlign extends Primitive._string {
  content: TfootAlign
}

type TfootValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TfootValign extends Primitive._string {
  content: TfootValign
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
    content?: string
    id?: string
    style?: string
    valign?: TheadValign
  }
  children: RequiredMap<TheadChildren>
}

export interface TheadChildren {
  tr: Tr[]
}

type TheadAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TheadAlign extends Primitive._string {
  content: TheadAlign
}

type TheadValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TheadValign extends Primitive._string {
  content: TheadValign
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
    content?: string
    headers?: string
    id?: string
    rowspan?: string
    scope?: ThScope
    style?: string
    valign?: ThValign
  }
}

type ThAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ThAlign extends Primitive._string {
  content: ThAlign
}

type ThScope = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _ThScope extends Primitive._string {
  content: ThScope
}

type ThValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ThValign extends Primitive._string {
  content: ThValign
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
    content?: string
    id?: string
    specificUse?: string
  }
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
  children: RequiredMap<TitleGroupChildren>
}

export interface TitleGroupChildren {
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Article Title */
  articleTitle: ArticleTitle
  /** Footnote Group */
  fnGroup?: FnGroup
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
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
    content?: string
    id?: string
    specificUse?: string
  }
}

/** Translated Abstract */
export interface TransAbstract extends Element {
  type: 'element'
  name: 'trans-abstract'
  attributes: {
    abstract?: string
    /** base (as an attribute name)
     *
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
  children: RequiredMap<TransAbstractChildren>
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
    content?: string
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
    content?: string
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
  children: RequiredMap<TransTitlegroupChildren>
}

export interface TransTitlegroupChildren {
  /** Translated Subtitle */
  transSubtitle?: TransSubtitle[]
  /** Translated Title */
  transTitle: TransTitle
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
    content?: string
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
}

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
    content?: string
    id?: string
    style?: string
    valign?: TrValign
  }
  children: RequiredMap<TrChildren>
}

export interface TrChildren {
  td: Td[]
  th: Th[]
}

type TrAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TrAlign extends Primitive._string {
  content: TrAlign
}

type TrValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TrValign extends Primitive._string {
  content: TrValign
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
}

type UnderlineToggle = 'no' | 'yes'
interface _UnderlineToggle extends Primitive._string {
  content: UnderlineToggle
}

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
    content?: string
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
}

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
    content?: string
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
    style?: string
  }
  children: RequiredMap<VerseGroupChildren>
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
    content?: string
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
    style?: string
  }
}

/** Version Statement, Cited */
export interface Version extends Element {
  type: 'element'
  name: 'version'
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
    content?: string
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
    content?: string
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
    content?: string
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
  children: RequiredMap<VolumeIssuegroupChildren>
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
    content?: string
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
}

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
    content?: string
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
}

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
    custom?: string
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
    ref?: XrefRef
    rid?: string
    specificUse?: string
  }
}

type XrefRef =
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
interface _XrefRef extends Primitive._string {
  content: XrefRef
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
    content?: string
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
}

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
    content?: string
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
}

export interface document extends Element {
  /** Abbreviation or Acronym */
  abbrev: Abbrev
  /** Abbreviated Journal Title */
  abbrevJournaltitle: AbbrevJournaltitle
  /** Abstract */
  abstract: Abstract
  /** Access Date For Cited Work */
  accessDate: AccessDate
  /** Acknowledgments */
  ack: Ack
  /** Address Line */
  addrLine: AddrLine
  /** Address/Contact Information */
  address: Address
  /** Affiliation */
  aff: Aff
  /** Affiliation Alternatives */
  affAlternatives: AffAlternatives
  /** Alternate Title Text For a Figure, Etc. */
  altText: AltText
  /** Alternate Title */
  altTitle: AltTitle
  /** Alternatives For Processing */
  alternatives: Alternatives
  /** Annotation in a Citation */
  annotation: Annotation
  /** Anonymous */
  anonymous: Anonymous
  /** Answer Elements */
  answer: Answer
  /** Answer Set */
  answerSet: AnswerSet
  /** Appendix */
  app: App
  /** Appendix Group */
  appGroup: AppGroup
  /** Array (Simple Tabular Array) */
  array: Array
  /** Article */
  article: Article
  /** Article Grouping Data */
  articleCategories: ArticleCategories
  /** Article Identifier */
  articleId: ArticleId
  /** Article Metadata */
  articleMeta: ArticleMeta
  /** Article Title */
  articleTitle: ArticleTitle
  /** Article Version */
  articleVersion: ArticleVersion
  /** Article Version Alternatives */
  articleVersionalternatives: ArticleVersionalternatives
  /** Attribution */
  attrib: Attrib
  /** Author Comment */
  authorComment: AuthorComment
  /** Author Note Group */
  authorNotes: AuthorNotes
  /** Award Description */
  awardDesc: AwardDesc
  /** Award Group */
  awardGroup: AwardGroup
  /** Award Identifier */
  awardId: AwardId
  /** Award Name */
  awardName: AwardName
  /** Back Matter */
  back: Back
  /** Biography */
  bio: Bio
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives
  /** Body of the Article */
  body: Body
  /** Bold */
  bold: Bold
  /** Boxed Text */
  boxedText: BoxedText
  /** Line Break */
  break: Break
  /** Caption of a Figure, Table, Etc. */
  caption: Caption
  /** Chapter Title in a Citation */
  chapterTitle: ChapterTitle
  /** Chemical Structure (Display) */
  chemStruct: ChemStruct
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap
  /** Citation Alternatives */
  citationAlternatives: CitationAlternatives
  /** City: in an Address */
  city: City
  /** Code Text */
  code: Code
  col: Col
  colgroup: Colgroup
  /** Collaborative (Group) Author */
  collab: Collab
  /** Collaboration Alternatives */
  collabAlternatives: CollabAlternatives
  /** Comment in a Citation */
  comment: Comment
  /** Compound Keyword */
  compoundKwd: CompoundKwd
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpart
  /** Compound Subject Name */
  compoundSubject: CompoundSubject
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpart
  /** Conference Acronym */
  confAcronym: ConfAcronym
  /** Conference Date */
  confDate: ConfDate
  /** Conference Location */
  confLoc: ConfLoc
  /** Conference Name */
  confName: ConfName
  /** Conference Number */
  confNum: ConfNum
  /** Conference Sponsor */
  confSponsor: ConfSponsor
  /** Conference Theme */
  confTheme: ConfTheme
  /** Conference Information */
  conference: Conference
  /** Contributor */
  contrib: Contrib
  /** Contributor Group */
  contribGroup: ContribGroup
  /** Contributor Identifier */
  contribId: ContribId
  /** Contributed Resource Group */
  contributedResourcegroup: ContributedResourcegroup
  /** Copyright Holder */
  copyrightHolder: CopyrightHolder
  /** Copyright Statement */
  copyrightStatement: CopyrightStatement
  /** Copyright Year */
  copyrightYear: CopyrightYear
  /** Correspondence Information */
  corresp: Corresp
  /** Count */
  count: Count
  /** Country: in an Address */
  country: Country
  /** Counts */
  counts: Counts
  /** Custom Metadata */
  customMeta: CustomMeta
  /** Custom Metadata Group */
  customMetagroup: CustomMetagroup
  /** Data Title in a Citation */
  dataTitle: DataTitle
  /** Date */
  date: Date
  /** Date Inside Citation */
  dateIncitation: DateIncitation
  /** Day */
  day: Day
  /** Definition List: Definition */
  def: Def
  /** Definition List: Definition Head */
  defHead: DefHead
  /** Definition List: Definition Item */
  defItem: DefItem
  /** Definition List */
  defList: DefList
  /** Degree(s) */
  degrees: Degrees
  /** Formula, Display */
  dispFormula: DispFormula
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup
  /** Quote, Displayed */
  dispQuote: DispQuote
  /** Edition Statement, Cited */
  edition: Edition
  /** Element Citation */
  elementCitation: ElementCitation
  /** Electronic Location Identifier */
  elocationId: ElocationId
  /** Email Address */
  email: Email
  /** Equation Count */
  equationCount: EquationCount
  /** Era */
  era: Era
  /** Et Al */
  etal: Etal
  /** Event in Publishing History */
  event: Event
  /** Event Description */
  eventDesc: EventDesc
  /** Explanation */
  explanation: Explanation
  /** External Link */
  extLink: ExtLink
  /** Extended-by Model */
  extendedBy: ExtendedBy
  /** Fax Number: in an Address */
  fax: Fax
  /** Figure */
  fig: Fig
  /** Figure Count */
  figCount: FigCount
  /** Figure Group */
  figGroup: FigGroup
  /** Fixed Case */
  fixedCase: FixedCase
  /** Floats Group */
  floatsGroup: FloatsGroup
  /** Footnote */
  fn: Fn
  /** Footnote Group */
  fnGroup: FnGroup
  /** First Page */
  fpage: Fpage
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  frontStub: FrontStub
  /** Funding Group */
  fundingGroup: FundingGroup
  /** Funding Source */
  fundingSource: FundingSource
  /** Funding Statement */
  fundingStatement: FundingStatement
  /** Given (First) Names */
  givenNames: GivenNames
  /** Glossary Elements */
  glossary: Glossary
  /** Glyph Data For a Private Character */
  glyphData: GlyphData
  /** Glyph Reference For a Private Character */
  glyphRef: GlyphRef
  /** Government Report, Cited */
  gov: Gov
  /** Graphic */
  graphic: Graphic
  /** History: Document History */
  history: History
  /** Horizontal Rule */
  hr: Hr
  /** Index Term */
  indexTerm: IndexTerm
  /** Index Term Range End */
  indexTermrangeend: IndexTermrangeend
  /** Formula, Inline */
  inlineFormula: InlineFormula
  /** Inline Graphic */
  inlineGraphic: InlineGraphic
  /** Inline Media Object */
  inlineMedia: InlineMedia
  /** Inline Supplementary Material */
  inlineSupplementarymaterial: InlineSupplementarymaterial
  /** Institution Name: in an Address */
  institution: Institution
  /** Institution Identifier */
  institutionId: InstitutionId
  /** Institution Wrapper */
  institutionWrap: InstitutionWrap
  /** Isbn */
  isbn: Isbn
  /** Issn */
  issn: Issn
  /** Issn Linking */
  issnL: IssnL
  /** Issue Number */
  issue: Issue
  /** Issue Identifier */
  issueId: IssueId
  /** Issue Part */
  issuePart: IssuePart
  /** Issue Title */
  issueSponsor: IssueSponsor
  /** Issue Subtitle */
  issueSubtitle: IssueSubtitle
  /** Issue Title */
  issueTitle: IssueTitle
  /** Issue Title Group */
  issueTitlegroup: IssueTitlegroup
  /** Italic */
  italic: Italic
  /** Journal Identifier */
  journalId: JournalId
  /** Journal Metadata */
  journalMeta: JournalMeta
  /** Journal Subtitle */
  journalSubtitle: JournalSubtitle
  /** Journal Title (Full) */
  journalTitle: JournalTitle
  /** Journal Title Group */
  journalTitlegroup: JournalTitlegroup
  /** Keyword */
  kwd: Kwd
  /** Keyword Group */
  kwdGroup: KwdGroup
  /** Label of a Figure, Reference, Etc. */
  label: Label
  /** License Information */
  license: License
  /** License Paragraph */
  licenseP: LicenseP
  /** List */
  list: List
  /** List Item */
  listItem: ListItem
  /** Long Description */
  longDesc: LongDesc
  /** Last Page */
  lpage: Lpage
  /** Media Object */
  media: Media
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaName
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValue
  /** Milestone End */
  milestoneEnd: MilestoneEnd
  /** Milestone Start */
  milestoneStart: MilestoneStart
  /** Mixed Citation */
  mixedCitation: MixedCitation
  /** Monospace Text (Typewriter Text) */
  monospace: Monospace
  /** Month */
  month: Month
  /** Name of Person (Structured) */
  name: Name
  /** Name Alternatives */
  nameAlternatives: NameAlternatives
  /** Named Special (Subject) Content */
  namedContent: NamedContent
  /** Nested Keyword */
  nestedKwd: NestedKwd
  /** Nlm Citation Model */
  nlmCitation: NlmCitation
  /** Note in a Reference List */
  note: Note
  /** Notes */
  notes: Notes
  /** Object Identifier */
  objectId: ObjectId
  /** On Behalf of */
  onBehalfof: OnBehalfof
  /** Open Access */
  openAccess: OpenAccess
  /** Option Elements */
  option: Option
  /** Overline */
  overline: Overline
  /** Overline End */
  overlineEnd: OverlineEnd
  /** Overline Start */
  overlineStart: OverlineStart
  /** Paragraph */
  p: P
  /** Page Count */
  pageCount: PageCount
  /** Page Ranges */
  pageRange: PageRange
  /** Part Title in a Citation */
  partTitle: PartTitle
  /** Patent Number, Cited */
  patent: Patent
  /** Permissions */
  permissions: Permissions
  /** Person Group For a Cited Publication */
  personGroup: PersonGroup
  /** Phone Number: in an Address */
  phone: Phone
  /** Postal Code: in an Address */
  postalCode: PostalCode
  /** Prefix */
  prefix: Prefix
  /** Preformatted Text */
  preformat: Preformat
  /** Price */
  price: Price
  /** Principal Award Recipient */
  principalAwardrecipient: PrincipalAwardrecipient
  /** Principal Investigator Recipient */
  principalInvestigator: PrincipalInvestigator
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateChar
  /** Processing Metadata Model */
  processingMeta: ProcessingMeta
  /** Product Information */
  product: Product
  /** Publication Date */
  pubDate: PubDate
  /** Date Not Available Flag */
  pubDatenotavailable: PubDatenotavailable
  /** Publication History */
  pubHistory: PubHistory
  /** Publication Identifier For a Cited Publication */
  pubId: PubId
  /** Publisher */
  publisher: Publisher
  /** Publisher's Location */
  publisherLoc: PublisherLoc
  /** Publisher's Name */
  publisherName: PublisherName
  /** Question */
  question: Question
  /** Question Preamble */
  questionPreamble: QuestionPreamble
  /** Question Wrap */
  questionWrap: QuestionWrap
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup
  /** Ruby Base */
  rb: Rb
  /** Reference Item */
  ref: Ref
  /** Reference Count */
  refCount: RefCount
  /** Reference List (Bibliographic Reference List) */
  refList: RefList
  /** Related Article Information */
  relatedArticle: RelatedArticle
  /** Related Object Information */
  relatedObject: RelatedObject
  /** Resource Group */
  resourceGroup: ResourceGroup
  /** Resource Identifier */
  resourceId: ResourceId
  /** Resource Name */
  resourceName: ResourceName
  /** Resource Wrap */
  resourceWrap: ResourceWrap
  /** Response */
  response: Response
  /** Restricted-by Model */
  restrictedBy: RestrictedBy
  /** Role or Function Title of Contributor */
  role: Role
  /** Roman */
  roman: Roman
  /** Ruby Parenthesis */
  rp: Rp
  /** Ruby Textual Annotation */
  rt: Rt
  /** Ruby Wrapper */
  ruby: Ruby
  /** Sans Serif */
  sansSerif: SansSerif
  /** Small Caps */
  sc: Sc
  /** Season */
  season: Season
  /** Section */
  sec: Sec
  /** Section Metadata */
  secMeta: SecMeta
  /** See */
  see: See
  /** See-Also Term */
  seeAlso: SeeAlso
  /** Uri For This Same Article Online */
  selfUri: SelfUri
  /** Series */
  series: Series
  /** Series Text: Header Text to Describe */
  seriesText: SeriesText
  /** Series Title */
  seriesTitle: SeriesTitle
  /** Signature */
  sig: Sig
  /** Signature Block */
  sigBlock: SigBlock
  /** Size */
  size: Size
  /** Source */
  source: Source
  /** Speaker */
  speaker: Speaker
  /** Speech */
  speech: Speech
  /** State or Province: in an Address */
  state: State
  /** Statement, Formal */
  statement: Statement
  /** Standard, Cited */
  std: Std
  /** Standards Organization */
  stdOrganization: StdOrganization
  /** Strike Through */
  strike: Strike
  /** String Conference Name */
  stringConf: StringConf
  /** Date As a String */
  stringDate: StringDate
  /** Name of Person (Unstructured) */
  stringName: StringName
  /** Styled Special (Subject) Content */
  styledContent: StyledContent
  /** Subscript */
  sub: Sub
  /** Sub-Article */
  subArticle: SubArticle
  subjGroup: SubjGroup
  /** Subject Name */
  subject: Subject
  /** Article Subtitle */
  subtitle: Subtitle
  /** Suffix */
  suffix: Suffix
  /** Superscript */
  sup: Sup
  /** Supplement */
  supplement: Supplement
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial
  /** Support Description */
  supportDescription: SupportDescription
  /** Support Group */
  supportGroup: SupportGroup
  /** Support Source */
  supportSource: SupportSource
  /** Surname */
  surname: Surname
  /** Table: Table Element .............................. */
  table: Table
  /** Table Count */
  tableCount: TableCount
  /** Table Wrapper */
  tableWrap: TableWrap
  /** Table Wrap Footer */
  tableWrapfoot: TableWrapfoot
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup
  /** Target of an Internal Link */
  target: Target
  tbody: Tbody
  td: Td
  /** Definition List: Term */
  term: Term
  /** Definition List: Term Head */
  termHead: TermHead
  /** Tex Math Equation */
  texMath: TexMath
  /** Textual Form */
  textualForm: TextualForm
  tfoot: Tfoot
  th: Th
  thead: Thead
  /** Time Stamp For Cited Work */
  timeStamp: TimeStamp
  /** Title */
  title: Title
  /** Title Group */
  titleGroup: TitleGroup
  tr: Tr
  /** Translated Abstract */
  transAbstract: TransAbstract
  /** Translated Source */
  transSource: TransSource
  /** Translated Subtitle */
  transSubtitle: TransSubtitle
  /** Translated Title */
  transTitle: TransTitle
  /** Translated Title Group */
  transTitlegroup: TransTitlegroup
  /** Underline */
  underline: Underline
  /** Underline End */
  underlineEnd: UnderlineEnd
  /** Underline Start */
  underlineStart: UnderlineStart
  /** Unstructured Keyword Group */
  unstructuredKwdgroup: UnstructuredKwdgroup
  /** Uri */
  uri: Uri
  /** Verse Form For Poetry */
  verseGroup: VerseGroup
  /** Line of a Verse */
  verseLine: VerseLine
  /** Version Statement, Cited */
  version: Version
  /** Volume Number */
  volume: Volume
  /** Volume Identifier */
  volumeId: VolumeId
  /** Translated Title Group */
  volumeIssuegroup: VolumeIssuegroup
  /** Volume Series */
  volumeSeries: VolumeSeries
  /** Word Count */
  wordCount: WordCount
  /** X - Generated Text and Punctuation */
  x: X
  /** X(cross) Reference */
  xref: Xref
  /** Year */
  year: Year
}
export var document: document
