import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/relations.xsd

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

export interface XrefFaces extends Element {
  type: 'element'
  name: 'xrefFaces' /** Element is self-closing */
  children: []
}

/** A narrative description of the relationship target item */
export interface Description extends Element {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

export type IdentifierType =
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

export interface InterWorkRelation extends Element {
  type: 'element'
  name: 'inter_work_relation'
  attributes: {
    identifierType: IdentifierType
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
    namespace: string
    /** Used to describe relations between items that are not the same work. */
    relationshipType: InterWorkRelationRelationshipType
  }
  /** Element is self-closing */
  children: []
}

export interface IntraWorkRelation extends Element {
  type: 'element'
  name: 'intra_work_relation'
  attributes: {
    identifierType: IdentifierType
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
    namespace: string
    /** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided. */
    relationshipType: IntraWorkRelationRelationshipType
  }
  /** Element is self-closing */
  children: []
}

export type Language =
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

export type Name = TextNode<'name'>

/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
export type Namespace = TextNode
/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness. */
export type NamespacePrimitiveType = string

/** Wrapper element for relationship metadata */
export interface Program extends Element {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RequiredMap<ProgramChildren>[]
}

export interface ProgramChildren {
  related_item?: RelatedItem[]
}

export interface RelatedItem extends Element {
  type: 'element'
  name: 'related_item'
  children: RequiredMap<RelatedItemChildren>[]
}

export interface RelatedItemChildren {
  /** A narrative description of the relationship target item */
  Description?: Description
  InterWorkRelation: InterWorkRelation
  IntraWorkRelation: IntraWorkRelation
}

/** Used to describe relations between items that are not the same work. */
export type InterWorkRelationRelationshipType =
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

/** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided. */
export type IntraWorkRelationRelationshipType =
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
