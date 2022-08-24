import * as Primitive from '../xml-primitives'

// Source files:
// https://data.crossref.org/schemas/relations.xsd

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

export interface XrefFaces extends XastElement {
  type: 'element'
  name: 'xrefFaces' /** XastElement is self-closing */
  children: []
}

/** A narrative description of the relationship target item**/
export interface Description extends XastElement {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
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

export interface InterWorkRelation extends XastElement {
  type: 'element'
  name: 'inter_work_relation'
  attributes: {
    identifierType: IdentifierType
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.	**/
    namespace: string
    /** Used to describe relations between items that are not the same work.
     **/
    relationshipType: InterWorkRelationRelationshipType
  }
  /** XastElement is self-closing */
  children: []
}

export interface IntraWorkRelation extends XastElement {
  type: 'element'
  name: 'intra_work_relation'
  attributes: {
    identifierType: IdentifierType
    /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.	**/
    namespace: string
    /** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided.
     **/
    relationshipType: IntraWorkRelationRelationshipType
  }
  /** XastElement is self-closing */
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

export interface Name extends XastElement {
  name: 'name'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.
 * @minLength 4
 * @maxLength 1024
 **/
export interface Namespace extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 4
       * @maxLength 1024
       **/
      value: string
    },
  ]
}
/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.
 * @minLength 4
 * @maxLength 1024
 **/
export type NamespacePrimitiveType = string

/** Wrapper element for relationship metadata**/
export interface Program extends XastElement {
  type: 'element'
  name: 'program'
  attributes: {
    name: string
  }
  children: RelatedItem[]
}

export interface RelatedItem extends XastElement {
  type: 'element'
  name: 'related_item'
  children: (Description | InterWorkRelation | IntraWorkRelation)[]
}

/** Used to describe relations between items that are not the same work.
 **/
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

/** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided.
 **/
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
