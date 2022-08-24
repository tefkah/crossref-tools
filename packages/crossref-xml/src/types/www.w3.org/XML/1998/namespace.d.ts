import * as Primitive from '../../../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xml.xsd

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

/** base (as an attribute name)
 *
 * denotes an attribute whose value
 * provides a URI to be used as the base for interpreting any
 * relative URIs in the scope of the element on which it
 * appears; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML Base specification.
 *
 * See http://www.w3.org/TR/xmlbase/
 * for information about this attribute. */
export type Base = TextNode<'base'>

/** id (as an attribute name)
 *
 * denotes an attribute whose value
 * should be interpreted as if declared to be of type ID.
 * This name is reserved by virtue of its definition in the
 * xml:id specification.
 *
 * See http://www.w3.org/TR/xml-id/
 * for information about this attribute. */
export type Id = TextNode<'id'>

/** lang (as an attribute name)
 *
 * denotes an attribute whose value
 * is a language code for the natural language of the content of
 * any element; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML specification.
 *
 * Notes
 *
 * Attempting to install the relevant ISO 2- and 3-letter
 * codes as the enumerated possible values is probably never
 * going to be a realistic possibility.
 *
 * See BCP 47 at
 * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
 * and the IANA language subtag registry at
 *
 * http://www.iana.org/assignments/language-subtag-registry
 * for further information.
 *
 * The union allows for the 'un-declaration' of xml:lang with
 * the empty string. */
export type Lang = TextNode
/** lang (as an attribute name)
 *
 * denotes an attribute whose value
 * is a language code for the natural language of the content of
 * any element; its value is inherited.  This name is reserved
 * by virtue of its definition in the XML specification.
 *
 * Notes
 *
 * Attempting to install the relevant ISO 2- and 3-letter
 * codes as the enumerated possible values is probably never
 * going to be a realistic possibility.
 *
 * See BCP 47 at
 * http://www.rfc-editor.org/rfc/bcp/bcp47.txt
 * and the IANA language subtag registry at
 *
 * http://www.iana.org/assignments/language-subtag-registry
 * for further information.
 *
 * The union allows for the 'un-declaration' of xml:lang with
 * the empty string. */
export type LangPrimitiveType = string

/** space (as an attribute name)
 *
 * denotes an attribute whose
 * value is a keyword indicating what whitespace processing
 * discipline is intended for the content of the element; its
 * value is inherited.  This name is reserved by virtue of its
 * definition in the XML specification. */
export type Space = 'default' | 'preserve'
