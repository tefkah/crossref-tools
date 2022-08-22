import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/relations.xsd

import { Element, Text } from 'xast'
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
/** A narrative description of the relationship target item */
export interface Description extends Element {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
}

type Identifier =
  | 'doi'
  | 'issn'
  | 'isbn'
  | 'uri'
  | 'pmid'
  | 'pmcid'
  | 'purl'
  | 'arxiv'
  | 'ark'
  | 'handle'
  | 'uuid'
  | 'ecli'
  | 'accession'
  | 'other'
interface _Identifier extends Primitive._string {
  content: Identifier
}

export interface InterWorkRelation extends Element {
  type: 'element'
  name: 'inter_work_relation'
  attributes: {
    identifier: Identifier
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
    namespace: string
    /** Used to describe relations between items that are not the same work. */
    relationship: InterWorkRelationRelationship
  }
}

/** Used to describe relations between items that are not the same work. */
type InterWorkRelationRelationship =
  | 'isDerivedFrom'
  | 'hasDerivation'
  | 'isReviewOf'
  | 'hasReview'
  | 'isCommentOn'
  | 'hasComment'
  | 'isReplyTo'
  | 'hasReply'
  | 'basedOnData'
  | 'isDataBasisFor'
  | 'hasRelatedMaterial'
  | 'isRelatedMaterial'
  | 'isCompiledBy'
  | 'compiles'
  | 'isDocumentedBy'
  | 'documents'
  | 'isSupplementTo'
  | 'isSupplementedBy'
  | 'isContinuedBy'
  | 'continues'
  | 'isPartOf'
  | 'hasPart'
  | 'references'
  | 'isReferencedBy'
  | 'isBasedOn'
  | 'isBasisFor'
  | 'requires'
  | 'isRequiredBy'
  | 'finances'
  | 'isFinancedBy'
interface _InterWorkRelationRelationship extends Primitive._string {
  content: InterWorkRelationRelationship
}

export interface IntraWorkRelation extends Element {
  type: 'element'
  name: 'intra_work_relation'
  attributes: {
    identifier: Identifier
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
    namespace: string
    /** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided. */
    relationship: IntraWorkRelationRelationship
  }
}

/** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided. */
type IntraWorkRelationRelationship =
  | 'isTranslationOf'
  | 'hasTranslation'
  | 'isPreprintOf'
  | 'hasPreprint'
  | 'isManuscriptOf'
  | 'hasManuscript'
  | 'isExpressionOf'
  | 'hasExpression'
  | 'isManifestationOf'
  | 'hasManifestation'
  | 'isReplacedBy'
  | 'replaces'
  | 'isSameAs'
  | 'isIdenticalTo'
  | 'isVariantFormOf'
  | 'isOriginalFormOf'
  | 'isVersionOf'
  | 'hasVersion'
  | 'isFormatOf'
  | 'hasFormat'
interface _IntraWorkRelationRelationship extends Primitive._string {
  content: IntraWorkRelationRelationship
}

type Language =
  | 'aa'
  | 'ab'
  | 'ae'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'ar'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bh'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ch'
  | 'co'
  | 'cr'
  | 'cs'
  | 'cu'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'ff'
  | 'fi'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'he'
  | 'hi'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'hz'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ig'
  | 'ii'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jw'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kj'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mg'
  | 'mu'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'nv'
  | 'ny'
  | 'oc'
  | 'oj'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'wo'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zh'
interface _Language extends Primitive._string {
  content: Language
}

/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
type Namespace = string
type _Namespace = Primitive._string

/** Wrapper element for relationship metadata */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RequiredMap<ProgramChildren>
}

export interface ProgramChildren {
  relatedItem?: RelatedItem[]
}

export interface RelatedItem extends Element {
  type: 'element'
  name: 'related_item'
  attributes: {}
  children: RequiredMap<RelatedItemChildren>
}

export interface RelatedItemChildren {
  /** A narrative description of the relationship target item */
  description?: Description
  interWorkRelation: InterWorkRelation
  intraWorkRelation: IntraWorkRelation
}

export interface xrefFaces extends Element {
  type: 'element'
  name: 'xrefFaces'
  attributes: {}
}

export interface document extends Element {
  b: xrefFaces
  /** A narrative description of the relationship target item */
  description: Description
  em: xrefFaces
  font: xrefFaces
  i: xrefFaces
  interWorkRelation: InterWorkRelation
  intraWorkRelation: IntraWorkRelation
  ovl: xrefFaces
  /** Wrapper element for relationship metadata */
  program: Program
  relatedItem: RelatedItem
  scp: xrefFaces
  strong: xrefFaces
  sub: xrefFaces
  sup: xrefFaces
  tt: xrefFaces
  u: xrefFaces
}
export var document: document
