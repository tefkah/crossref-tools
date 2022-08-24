import * as Primitive from '../../xml-primitives'
import * as ai from '../AccessIndicators.xsd'
import * as ct from '../clinicaltrials.xsd'
import * as fr from '../fundref.xsd'
import * as jats from '../../www.ncbi.nlm.nih.gov/JATS1'
import * as rel from '../relations.xsd'

// Source files:
// https://data.crossref.org/schemas/common5.3.1.xsd
// https://data.crossref.org/schemas/crossref5.3.1.xsd

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

export interface ConferenceDateT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 0
       * @maxLength 100
       **/
      value: string
    },
  ]
}

export interface PID extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern [hH][tT][tT][pP][sS]:\/\/.{1,50}
       **/
      value: string
    },
  ]
}

export interface OrganizationT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 511
       **/
      value: string
    },
  ]
}

export interface OrcidT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern https?:\/\/orcid.org\/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[X0-9]{1}
       **/
      value: string
    },
  ]
}

export interface DateT extends XastElement {
  type: 'element'
  name: string
  attributes: {
    media_type: DateTMediaType
  }
  children: (Day | Month | Year)[]
}

export interface ItemNumberT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: string
    },
  ]
}

export interface IdentifierT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}

export interface FormatT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 0
       * @maxLength 130
       **/
      value: string
    },
  ]
}

export interface ResourceT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
       * @minLength 1
       * @maxLength 2048
       **/
      value: string
    },
  ]
}

export interface CmAssertion extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 1024
       **/
      value: string
    },
  ]
}

export interface IsbnT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern (97(8|9)-)?\d[\d \-]+[\dX]
       * @minLength 10
       * @maxLength 17
       **/
      value: string
    },
  ]
}

export interface IssnT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern \d{4}-?\d{3}[\dX]
       * @minLength 8
       * @maxLength 9
       **/
      value: string
    },
  ]
}

export interface CitationT extends XastElement {
  type: 'element'
  name: string
}

/** content is "Inline" except that anchors shouldn't be nested
 **/
export interface A extends XastTextElement {
  type: 'element'
  name: 'a'
  attributes: {
    href: string
  }
}

/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title.
   * @minLength 1
  * @maxLength 150

**/
export interface AbbrevTitle extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 150
       **/
      value: string
    },
  ]
}
/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title.
   * @minLength 1
  * @maxLength 150

**/
export type AbbrevTitlePrimitiveType = string

/** The date a manuscript was accepted for publication.**/
export interface AcceptanceDate extends DateT {
  type: 'element'
  name: 'acceptance_date'
}

export interface Affiliations extends XastElement {
  type: 'element'
  name: 'affiliations'
  children: Institution[]
}

export interface AltName extends XastElement {
  type: 'element'
  name: 'alt-name'
  children: (Name | StringName)[]
}

/** **/
export interface Anonymous extends XastElement {
  type: 'element'
  name: 'anonymous'
  attributes: {
    contributor_role: ContributorRole
    language?: Language
    nameStyle?: NameStyle
    sequence: Sequence
  }
  children: Affiliations[]
}

/** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted.**/
export interface ApprovalDate extends DateT {
  type: 'element'
  name: 'approval_date'
}

export interface ApprovedMonth extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 12
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

export type StdAltAsPublishedApprovedMonth = string

export interface ApprovedYear extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type StdAltAsPublishedApprovedYear = string

/** Used to indicate the designated archiving organization(s) for an item.**/
export interface Archive extends XastElement {
  type: 'element'
  name: 'archive'
  attributes: {
    name: ArchiveName
  }
  /** XastElement is self-closing */
  children: []
}

/** Container element for archive information**/
export interface ArchiveLocations extends XastElement {
  type: 'element'
  name: 'archive_locations'
  children: Archive[]
}

/** Article title in a citation.**/
export interface ArticleTitle extends XastElement {
  name: 'article_title'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** An assertion is a piece of custom, non-bibliographic metadata that the publisher is asserting about the content to which the Crossmark refers.**/
export interface Assertion extends XastElement {
  type: 'element'
  name: 'assertion'
  attributes: {
    /** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute.	**/
    explanation: string
    /** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.	**/
    group_label: string
    /** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.	**/
    group_name: string
    href: string
    /** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)	**/
    label: string
    /** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name.	**/
    name: string
    /** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present.	**/
    order: string
  }
  /** XastElement is self-closing */
  children: []
}

export interface Authenticated extends XastElement {
  name: 'authenticated'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** First author in a citation.**/
export interface Author extends XastElement {
  name: 'author'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface XrefFaces extends XastElement {
  type: 'element'
  name: 'xrefFaces' /** XastElement is self-closing */
  children: []
}

/** Container for the main body of a DOI record submission. While it is possible to include records for multiple journals, books, conferences, or other types of content in a single submission, it is not possible to mix content types within a single DOI submission.**/
export interface Body extends XastElement {
  type: 'element'
  name: 'body'
  children: (
    | Book
    | Conference
    | Database
    | Dissertation
    | Journal
    | PeerReview
    | PendingPublication
    | PostedContent
    | ReportPaper
    | SaComponent
    | Standard
  )[]
}

/** Container for all information about a single book.**/
export interface Book extends XastElement {
  type: 'element'
  name: 'book'
  attributes: {
    book_type: BookBookType
  }
  children: (BookMetadata | BookSeriesMetadata | BookSetMetadata | ContentItem)[]
}

/** A container for all title-level metadata for a single book that is not part of a series or set.**/
export interface BookMetadata extends XastElement {
  type: 'element'
  name: 'book_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | ArchiveLocations
    | CitationList
    | Contributors
    | Crossmark
    | DoiData
    | EditionNumber
    | Isbn
    | Noisbn
    | rel.Program
    | PublicationDate
    | Publisher
    | PublisherItem
    | Titles
  )[]
}

/** A container for all information that applies to an individual volume of a book series.**/
export interface BookSeriesMetadata extends XastElement {
  type: 'element'
  name: 'book_series_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | ArchiveLocations
    | CitationList
    | Crossmark
    | DoiData
    | rel.Program
    | PublicationDate
    | Publisher
    | PublisherItem
    | SeriesMetadata
  )[]
}

/** A container for all information that applies to an individual volume of a book set.**/
export interface BookSetMetadata extends XastElement {
  type: 'element'
  name: 'book_set_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | ArchiveLocations
    | CitationList
    | Contributors
    | Crossmark
    | DoiData
    | EditionNumber
    | Isbn
    | Noisbn
    | rel.Program
    | PublicationDate
    | Publisher
    | PublisherItem
    | SetMetadata
    | Volume
  )[]
}

export type BookBookType = 'edited_book' | 'monograph' | 'reference' | 'other'

/** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
 * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/
 **/
export interface Citation extends CitationT {
  type: 'element'
  name: 'citation'
  attributes: {
    key: string
  }
}

/** A list of articles, books, and other content cited by the item being registered**/
export interface CitationList extends XastElement {
  type: 'element'
  name: 'citation_list'
  children: Citation[]
}

/** The coden assigned to a journal or conference proceedings.
 * @minLength 1
 * @maxLength 6
 **/
export interface Coden extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 6
       **/
      value: string
    },
  ]
}
/** The coden assigned to a journal or conference proceedings.
 * @minLength 1
 * @maxLength 6
 **/
export type CodenPrimitiveType = string

/** Container for item elements containing non-primary URIs associated with the item being registered. Collections are supported for the following (defined in the property attribute):
 * list-based:  Multiple Resolution, more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/
 * country-based: more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/#00130
 * crawler-based: for Similarity Check URLs, more info: https://www.crossref.org/education/similarity-check/participate/urls-for-new-deposits/
 * text-mining: supply specific URLs for text and data mining, more info: https://www.crossref.org/education/retrieve-metadata/rest-api/text-and-data-mining-for-members/
 * unspecified: can be used for additional URLs
 * syndication: identifies resources to be used for syndication
 * link-header: identifies resources to be used as an endpoint
 **/
export interface Collection extends XastElement {
  type: 'element'
  name: 'collection'
  attributes: {
    multiResolution: CollectionMultiResolution
    property: CollectionProperty
  }
  children: Item[]
}

/** Statement of competing interest supplied by a review author during the review process.**/
export interface CompetingInterestStatement extends XastElement {
  type: 'element'
  name: 'competing_interest_statement'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
  children: []
}

/** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components.**/
export interface Component extends XastElement {
  type: 'element'
  name: 'component'
  attributes: {
    component_size: string
    language?: Language
    parent_relation: ComponentParentRelation
    regAgency?: string
  }
  children: (
    | Contributors
    | Description
    | Doi
    | DoiData
    | Format
    | ai.Program
    | PublicationDate
    | Titles
  )[]
}

/** Container for a group of components**/
export interface ComponentList extends XastElement {
  type: 'element'
  name: 'component_list'
  children: Component[]
}

/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component.
 * @minLength 1
 * @maxLength 50
 **/
export interface ComponentNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 50
       **/
      value: string
    },
  ]
}
/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component.
 * @minLength 1
 * @maxLength 50
 **/
export type ComponentNumberPrimitiveType = string

export interface ComponentSize extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ComponentComponentSize = string

export type ContentItemComponentType =
  | 'chapter'
  | 'section'
  | 'part'
  | 'track'
  | 'reference_entry'
  | 'other'

/** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element.**/
export interface Conference extends XastElement {
  type: 'element'
  name: 'conference'
  children: (
    | ConferencePaper
    | Contributors
    | EventMetadata
    | ProceedingsMetadata
    | ProceedingsSeriesMetadata
  )[]
}

/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available.
 * @minLength 1
 * @maxLength 127
 **/
export interface ConferenceAcronym extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 127
       **/
      value: string
    },
  ]
}
/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available.
 * @minLength 1
 * @maxLength 127
 **/
export type ConferenceAcronymPrimitiveType = string

/** The start and end dates of a conference event. conference_date may be used in three ways:
 * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
 * 2. If publishers have parsed date values, provide them in the attributes.
 * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
 * Jan. 15-17, 1997
 **/
export interface ConferenceDate extends ConferenceDateT {
  type: 'element'
  name: 'conference_date'
  attributes: {
    end_day?: string
    end_month?: string
    end_year?: string
    start_day?: string
    start_month?: string
    start_year?: string
  }
}

/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate.
 * @minLength 2
 * @maxLength 255
 **/
export interface ConferenceLocation extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate.
 * @minLength 2
 * @maxLength 255
 **/
export type ConferenceLocationPrimitiveType = string

/** The official name of the conference, excluding numbers commonly provided in conference
 * @minLength 3
 * @maxLength 512
 **/
export interface ConferenceName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 3
       * @maxLength 512
       **/
      value: string
    },
  ]
}
/** The official name of the conference, excluding numbers commonly provided in conference
 * @minLength 3
 * @maxLength 512
 **/
export type ConferenceNamePrimitiveType = string

/** The number of a conference. conference_number should include only the number of the conference without any extra text
 * @minLength 1
 * @maxLength 15
 **/
export interface ConferenceNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: string
    },
  ]
}
/** The number of a conference. conference_number should include only the number of the conference without any extra text
 * @minLength 1
 * @maxLength 15
 **/
export type ConferenceNumberPrimitiveType = string

/** Container for all information about a single conference paper.**/
export interface ConferencePaper extends XastElement {
  type: 'element'
  name: 'conference_paper'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | ArchiveLocations
    | CitationList
    | ComponentList
    | Contributors
    | Crossmark
    | DoiData
    | Pages
    | rel.Program
    | PublicationDate
    | PublisherItem
    | ScnPolicies
    | Titles
  )[]
}

/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization.
 * @minLength 1
 * @maxLength 255
 **/
export interface ConferenceSponsor extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization.
 * @minLength 1
 * @maxLength 255
 **/
export type ConferenceSponsorPrimitiveType = string

/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000.
 * @minLength 1
 * @maxLength 255
 **/
export interface ConferenceTheme extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000.
 * @minLength 1
 * @maxLength 255
 **/
export type ConferenceThemePrimitiveType = string

/** The date a piece of content was created.**/
export interface ContentDate extends DateT {
  type: 'element'
  name: 'content_date'
}

/** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters.**/
export interface ContentItem extends XastElement {
  type: 'element'
  name: 'content_item'
  attributes: {
    component_type: ContentItemComponentType
    language?: Language
    level_sequence_number: string
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | ArchiveLocations
    | CitationList
    | ComponentList
    | ComponentNumber
    | Contributors
    | Crossmark
    | DoiData
    | Pages
    | rel.Program
    | PublicationDate
    | PublisherItem
    | ScnPolicies
    | Titles
  )[]
}

export type ResourceContentVersion = 'vor' | 'am'

/** The contract number under which a report or paper was written.
 * @minLength 2
 * @maxLength 255
 **/
export interface ContractNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The contract number under which a report or paper was written.
 * @minLength 2
 * @maxLength 255
 **/
export type ContractNumberPrimitiveType = string

export type ContributorRole =
  | 'author'
  | 'editor'
  | 'chair'
  | 'reviewer'
  | 'review-assistant'
  | 'stats-reviewer'
  | 'reviewer-external'
  | 'reader'
  | 'translator'

/** The container for all who contributed to authoring or editing an item.**/
export interface Contributors extends XastElement {
  type: 'element'
  name: 'contributors'
  children: (Anonymous | Organization | PersonName)[]
}

export type ItemCountry =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CS'
  | 'CU'
  | 'CV'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'

export type ItemCrawler = 'google' | 'msn' | 'scirus' | 'yahoo' | 'iParadigms'

/** The date a database or dataset item was created.**/
export interface CreationDate extends DateT {
  type: 'element'
  name: 'creation_date'
}

/** Container element for CrossMark data.**/
export interface Crossmark extends XastElement {
  type: 'element'
  name: 'crossmark'
  children: (
    | CrossmarkDomainExclusive
    | CrossmarkDomains
    | CrossmarkPolicy
    | CrossmarkVersion
    | CustomMetadata
    | Updates
  )[]
}

/** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain.**/
export interface CrossmarkDomain extends XastElement {
  type: 'element'
  name: 'crossmark_domain'
  children: (Domain | Filter)[]
}

export interface CrossmarkDomainExclusive extends XastElement {
  name: 'crossmark_domain_exclusive'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content**/
export interface CrossmarkDomains extends XastElement {
  type: 'element'
  name: 'crossmark_domains'
  children: CrossmarkDomain[]
}

/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications.
 * @pattern 10\.[0-9]{4,9}\/.{1,200}
 * @minLength 6
 * @maxLength 2048
 **/
export interface CrossmarkPolicy extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern 10\.[0-9]{4,9}\/.{1,200}
       * @minLength 6
       * @maxLength 2048
       **/
      value: string
    },
  ]
}
/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications.
 * @pattern 10\.[0-9]{4,9}\/.{1,200}
 * @minLength 6
 * @maxLength 2048
 **/
export interface DoiT extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface CrossmarkVersion extends XastElement {
  name: 'crossmark_version'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document.**/
export interface CustomMetadata extends XastElement {
  type: 'element'
  name: 'custom_metadata'
  children: ct.Program[]
}

/** Year of publication in citation.**/
export interface CYear extends XastElement {
  name: 'cYear'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** database is the top level element for deposit of metadata about one or more datasets or records in a database.**/
export interface Database extends XastElement {
  type: 'element'
  name: 'database'
  children: (ComponentList | DatabaseMetadata | Dataset)[]
}

/** Container for key dates in the life of a database or dataset.**/
export interface DatabaseDate extends XastElement {
  type: 'element'
  name: 'database_date'
  children: (CreationDate | PublicationDate | UpdateDate)[]
}

/** database_metadata contains metadata about the database.**/
export interface DatabaseMetadata extends XastElement {
  type: 'element'
  name: 'database_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | ArchiveLocations
    | Contributors
    | DatabaseDate
    | Description
    | DoiData
    | Institution
    | rel.Program
    | Publisher
    | PublisherItem
    | Titles
  )[]
}

/** dataset is used to capture information about one or more database records or collections.**/
export interface Dataset extends XastElement {
  type: 'element'
  name: 'dataset'
  attributes: {
    dataset_type: DatasetDatasetType
  }
  children: (
    | ArchiveLocations
    | CitationList
    | ComponentList
    | Contributors
    | Crossmark
    | DatabaseDate
    | Description
    | DoiData
    | Format
    | rel.Program
    | PublisherItem
    | Titles
  )[]
}

export type DatasetDatasetType = 'record' | 'collection' | 'crossmark_policy' | 'other'

/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.**/
export interface Date extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}
/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.**/
export type DatePrimitiveType = string

/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5").
 * @maxInclusive 31
 * @maxLength 2
 * @minLength 2
 **/
export interface Day extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}
/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5").
 * @maxInclusive 31
 * @maxLength 2
 * @minLength 2
 **/
export type XrefDay = string

/** The degree(s) awarded for a dissertation.
 * @minLength 2
 * @maxLength 255
 **/
export interface Degree extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The degree(s) awarded for a dissertation.
 * @minLength 2
 * @maxLength 255
 **/
export type DegreePrimitiveType = string

export interface Degrees extends XastElement {
  type: 'element'
  name: 'degrees'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
  children: []
}

/** Information about the organization submitting DOI metadata to Crossref**/
export interface Depositor extends XastElement {
  type: 'element'
  name: 'depositor'
  children: (DepositorName | EmailAddress)[]
}

/** Name of the organization registering the DOIs.
 * @minLength 1
 * @maxLength 130
 **/
export interface DepositorName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 130
       **/
      value: string
    },
  ]
}
/** Name of the organization registering the DOIs.
 * @minLength 1
 * @maxLength 130
 **/
export type DepositorNamePrimitiveType = string

/** A narrative description of a file (e.g. a figure caption or video description).**/
export interface Description extends XastElement {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
  children: []
}

/** A wrapper for designators or other primary identifiers for a standard.**/
export interface Designators extends XastElement {
  type: 'element'
  name: 'designators'
  children: (StdAdoptedFrom | StdRevisionOf | StdSupersedes)[]
}

/** dissertation is the top level element for deposit of metadata about one or more dissertations.**/
export interface Dissertation extends XastElement {
  type: 'element'
  name: 'dissertation'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | ApprovalDate
    | ArchiveLocations
    | CitationList
    | ComponentList
    | Contributors
    | Crossmark
    | Degree
    | DoiData
    | Institution
    | Isbn
    | PersonName
    | rel.Program
    | PublisherItem
    | ScnPolicies
    | Titles
  )[]
}

/** DOI for an entity being registered with Crossref.**/
export interface Doi extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}
/** DOI for an entity being registered with Crossref.**/
export type DoiPrimitiveType = string

/** Top level element for a metadata record submission. This element indicates the start and end of the XML file. The version number is fixed to the version of the schema.**/
export interface DoiBatch extends XastElement {
  type: 'element'
  name: 'doi_batch'
  attributes: {
    version: string
  }
  children: (Body | Head)[]
}

/** Publisher generated ID that uniquely identifies the DOI submission batch.
 * @minLength 4
 * @maxLength 100
 **/
export interface DoiBatchId extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 4
       * @maxLength 100
       **/
      value: string
    },
  ]
}
/** Publisher generated ID that uniquely identifies the DOI submission batch.
 * @minLength 4
 * @maxLength 100
 **/
export type DoiBatchIdPrimitiveType = string

/** The container for elements related directly to a DOI.**/
export interface DoiData extends XastElement {
  type: 'element'
  name: 'doi_data'
  children: (Collection | Doi | Resource | Timestamp)[]
}

/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain.
 * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
 * @minLength 4
 * @maxLength 1024
 **/
export interface Domain extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
       * @minLength 4
       * @maxLength 1024
       **/
      value: string
    },
  ]
}
/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain.
 * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
 * @minLength 4
 * @maxLength 1024
 **/
export type CmDomain = string

/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable.
 * @minLength 1
 * @maxLength 15
 **/
export interface EditionNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: string
    },
  ]
}
/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable.
 * @minLength 1
 * @maxLength 15
 **/
export type EditionNumberPrimitiveType = string

/** article identifier or e-location id of the item**/
export interface ElocationId extends XastElement {
  name: 'elocation_id'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** e-mail address to which batch success and/or error messages are sent.
 * @minLength 6
 * @maxLength 200
 **/
export interface EmailAddress extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 6
       * @maxLength 200
       **/
      value: string
    },
  ]
}
/** e-mail address to which batch success and/or error messages are sent.
 * @minLength 6
 * @maxLength 200
 **/
export type EmailAddressPrimitiveType = string

export interface EndDay extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

export interface EndMonth extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

export type XrefMonth = string

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export interface EndYear extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: string
    },
  ]
}
/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export type XrefYear = string

/** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata.**/
export interface EventMetadata extends XastElement {
  type: 'element'
  name: 'event_metadata'
  children: (
    | ConferenceAcronym
    | ConferenceDate
    | ConferenceLocation
    | ConferenceName
    | ConferenceNumber
    | ConferenceSponsor
    | ConferenceTheme
  )[]
}

/** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute.**/
export interface Explanation extends XastElement {
  name: 'explanation'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Family extends XastElement {
  name: 'family'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type String = string

/** The filter element is used to disambiguate content in situations where multiple publishers share the same host (e.g. when on an aggregated platform). It should contain a substring of the path that can be used to uniquely identify a publisher's or publication's content. For instance, using the string "alpsp" here would help the CrossMark system distinguish between ALPSP publications on the ingentaconnect host and other publications on the same host.**/
export interface Filter extends XastElement {
  name: 'filter'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** First page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export interface FirstPage extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: string
    },
  ]
}
/** First page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export type FirstPagePrimitiveType = string

/** A narrative description of a component's file format and/or file extension.**/
export interface Format extends FormatT {
  type: 'element'
  name: 'format'
  attributes: {
    mime_type?: MimeType
  }
}

/** The full title by which a journal is commonly known or cited.
 * @minLength 1
 * @maxLength 255
 **/
export interface FullTitle extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The full title by which a journal is commonly known or cited.
 * @minLength 1
 * @maxLength 255
 **/
export type FullTitlePrimitiveType = string

/** A contributor's given name.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export interface GivenName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern [^\d\?]*[^\?\s]+[^\d]*
       * @minLength 1
       * @maxLength 60
       **/
      value: string
    },
  ]
}
/** A contributor's given name.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export type GivenNamePrimitiveType = string

/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.
 * @minLength 2
 * @maxLength 150
 **/
export interface GroupLabel extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}
/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.
 * @minLength 2
 * @maxLength 150
 **/
export type CmAssertionGroupLabel = string

/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.
 * @minLength 2
 * @maxLength 150
 **/
export interface GroupName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}
/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.
 * @minLength 2
 * @maxLength 150
 **/
export type CmAssertionGroupName = string

/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area.
 * @minLength 1
 * @maxLength 1024
 **/
export interface GroupTitle extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 1024
       **/
      value: string
    },
  ]
}
/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area.
 * @minLength 1
 * @maxLength 1024
 **/
export type GroupTitlePrimitiveType = string

/** Container for information related to the DOI batch submission. This element uniquely identifies the batch deposit to Crossref and contains information that will be used as a reference in error messages triggered during submission processing.
 **/
export interface Head extends XastElement {
  type: 'element'
  name: 'head'
  children: (Depositor | DoiBatchId | Registrant | Timestamp)[]
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

export type IdentifierIdType =
  | 'pii'
  | 'sici'
  | 'doi'
  | 'dai'
  | 'Z39.23'
  | 'ISO-std-ref'
  | 'std-designation'
  | 'report-number'
  | 'pmid'
  | 'other'

/** A public standard identifier that can be used to uniquely identify the item being registered.**/
export interface Identifier extends IdentifierT {
  type: 'element'
  name: 'identifier'
  attributes: {
    id_type: IdentifierIdType
  }
}

/** Container element for information about an institution or organization associated with an item.**/
export interface Institution extends XastElement {
  type: 'element'
  name: 'institution'
  children: (InstitutionAcronym | InstitutionDepartment | InstitutionId | InstitutionPlace)[]
}

/** The acronym of the institution.
 * @minLength 1
 * @maxLength 255
 **/
export interface InstitutionAcronym extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The acronym of the institution.
 * @minLength 1
 * @maxLength 255
 **/
export type InstitutionAcronymPrimitiveType = string

/** The department within an institution.
 * @minLength 2
 * @maxLength 255
 **/
export interface InstitutionDepartment extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The department within an institution.
 * @minLength 2
 * @maxLength 255
 **/
export type InstitutionDepartmentPrimitiveType = string

/** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI**/
export interface InstitutionId extends PID {
  type: 'element'
  name: 'institution_id'
  attributes: {
    type: InstitutionIdType
  }
}

/** The full name of an institution.
 * @minLength 1
 * @maxLength 1024
 **/
export interface InstitutionName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 1024
       **/
      value: string
    },
  ]
}
/** The full name of an institution.
 * @minLength 1
 * @maxLength 1024
 **/
export type InstitutionNamePrimitiveType = string

/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export interface InstitutionPlace extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export type InstitutionPlacePrimitiveType = string

/** Member's custom statement of intent to publish content for which a pending publication DOI has been created**/
export interface IntentStatement extends XastElement {
  type: 'element'
  name: 'intent_statement'
  attributes: {
    language?: Language
  }
  children: (A | XrefFaces | XrefFaces | XrefFaces)[]
}

/** The ISBN assigned to an entity.**/
export interface Isbn extends IsbnT {
  type: 'element'
  name: 'isbn'
  attributes: {
    media_type: MediaType
  }
}

/** The ISSN assigned to the title being registered.**/
export interface Issn extends IssnT {
  type: 'element'
  name: 'issn'
  attributes: {
    media_type: MediaType
  }
}

/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue.
 * @minLength 1
 * @maxLength 32
 **/
export interface Issue extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: string
    },
  ]
}
/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue.
 * @minLength 1
 * @maxLength 32
 **/
export type IssuePrimitiveType = string

/** A container used to associate a URI with the DOI being registered.**/
export interface Item extends XastElement {
  type: 'element'
  name: 'item'
  attributes: {
    country?: ItemCountry
    crawler?: ItemCrawler
    label?: string
    link_header_relationship: ItemLinkHeaderRelationship
  }
  children: (Doi | Resource)[]
}

/** A publisher-assigned number that uniquely identifies the item being registered.**/
export interface ItemNumber extends ItemNumberT {
  type: 'element'
  name: 'item_number'
  attributes: {
    item_number_type?: string
  }
}

export interface ItemNumberType extends XastElement {
  name: 'item_number_type'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file.**/
export interface Journal extends XastElement {
  type: 'element'
  name: 'journal'
  children: (JournalArticle | JournalIssue | JournalMetadata)[]
}

/** Container for all information about a single journal article.**/
export interface JournalArticle extends XastElement {
  type: 'element'
  name: 'journal_article'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | ArchiveLocations
    | CitationList
    | ComponentList
    | Contributors
    | Crossmark
    | DoiData
    | Pages
    | rel.Program
    | PublicationDate
    | PublisherItem
    | ScnPolicies
    | Titles
  )[]
}

/** Container for metadata that defines a single issue of a journal.**/
export interface JournalIssue extends XastElement {
  type: 'element'
  name: 'journal_issue'
  children: (
    | ArchiveLocations
    | Contributors
    | DoiData
    | Issue
    | JournalVolume
    | PublicationDate
    | SpecialNumbering
    | Titles
  )[]
}

/** Container for metadata that defines a journal.**/
export interface JournalMetadata extends XastElement {
  type: 'element'
  name: 'journal_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (AbbrevTitle | ArchiveLocations | Coden | DoiData | FullTitle | Issn)[]
}

/** Journal title in a citation.**/
export interface JournalTitle extends XastElement {
  name: 'journal_title'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume.**/
export interface JournalVolume extends XastElement {
  type: 'element'
  name: 'journal_volume'
  children: (ArchiveLocations | DoiData | PublisherItem | Volume)[]
}

export interface Key extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 128
       **/
      value: string
    },
  ]
}

export type KeyPrimitiveType = string

/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)
 * @minLength 2
 * @maxLength 150
 **/
export interface Label extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}
/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)
 * @minLength 2
 * @maxLength 150
 **/
export type CmAssertionLabel = string

export type ItemLabel = string

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

/** Last page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export interface LastPage extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: string
    },
  ]
}
/** Last page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export type LastPagePrimitiveType = string

export interface LevelSequenceNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 9
       * @maxLength 1
       * @minLength 1
       **/
      value: string
    },
  ]
}

export type ContentItemLevelSequenceNumber = string

export type ItemLinkHeaderRelationship = 'dul'

export type DateTMediaType = 'online' | 'print' | 'other'

export type MediaType = 'print' | 'electronic'

export type MimeType =
  | 'text/css'
  | 'text/csv'
  | 'text/enriched'
  | 'text/html'
  | 'text/plain'
  | 'text/richtext'
  | 'text/rtf'
  | 'text/sgml'
  | 'text/tab-separated-values'
  | 'text/xml'
  | 'text/xml-external-parsed-entity'
  | 'multipart/mixed'
  | 'multipart/alternative'
  | 'multipart/digest'
  | 'multipart/parallel'
  | 'multipart/appledouble'
  | 'multipart/header-set'
  | 'multipart/form-data'
  | 'multipart/report'
  | 'multipart/voice-message'
  | 'multipart/signed'
  | 'multipart/encrypted'
  | 'multipart/byteranges'
  | 'application/eps'
  | 'application/epub+zip'
  | 'application/octet-stream'
  | 'application/postscript'
  | 'application/rtf'
  | 'application/applefile'
  | 'application/mac-binhex40'
  | 'application/wordperfect5.1'
  | 'application/pdf'
  | 'application/x-gzip'
  | 'application/zip'
  | 'application/gzip'
  | 'application/macwriteii'
  | 'application/msword'
  | 'application/sgml'
  | 'application/cals-1840'
  | 'application/pgp-encrypted'
  | 'application/pgp-signature'
  | 'application/pgp-keys'
  | 'application/sgml-open-catalog'
  | 'application/rc'
  | 'application/xml'
  | 'application/xml-external-parsed-entity'
  | 'application/xml-dtd'
  | 'application/batch-SMTP'
  | 'application/ipp'
  | 'application/ocsp-request'
  | 'application/ocsp-response'
  | 'application/vnd.wolfram.mathematica'
  | 'application/vnd.wolfram.mathematica.package'
  | 'application/vnd.wolfram.player'
  | 'application/vnd.oasis.opendocument.text'
  | 'application/vnd.oasis.opendocument.presentation'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.ms-asf'
  | 'application/vnd.ms-excel'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/epub+zip'
  | 'application/regex.clinical-trial-number'
  | 'image/fits'
  | 'image/jpeg'
  | 'image/gif'
  | 'image/ief'
  | 'image/g3fax'
  | 'image/tiff'
  | 'image/Graphics-Metafile'
  | 'image/png'
  | 'audio/basic'
  | 'audio/32kadpcm'
  | 'audio/mpeg'
  | 'audio/parityfec'
  | 'audio/MP4A-LATM'
  | 'audio/mpa-robust'
  | 'video/x-ms-wmv'
  | 'video/avi'
  | 'video/mpeg'
  | 'video/quicktime'
  | 'video/pointer'
  | 'video/parityfec'
  | 'video/MP4V-ES'
  | 'video/mp4'
  | 'chemical/x-alchemy'
  | 'chemical/x-cache-csf'
  | 'chemical/x-cactvs-binary'
  | 'chemical/x-cactvs-binary'
  | 'chemical/x-cactvs-binary'
  | 'chemical/x-cdx'
  | 'chemical/x-cerius'
  | 'chemical/x-chemdraw'
  | 'chemical/x-cif'
  | 'chemical/x-mmcif'
  | 'chemical/x-chem3d'
  | 'chemical/x-cmdf'
  | 'chemical/x-compass'
  | 'chemical/x-crossfire'
  | 'chemical/x-cml'
  | 'chemical/x-csml'
  | 'chemical/x-ctx'
  | 'chemical/x-cxf'
  | 'chemical/x-daylight-smiles'
  | 'chemical/x-embl-dl-nucleotide'
  | 'chemical/x-galactic-spc'
  | 'chemical/x-gamess-input'
  | 'chemical/x-gaussian-input'
  | 'chemical/x-gaussian-checkpoint'
  | 'chemical/x-gaussian-cube'
  | 'chemical/x-gcg8-sequence'
  | 'chemical/x-genbank'
  | 'chemical/x-isostar'
  | 'chemical/x-jcamp-dx'
  | 'chemical/x-kinemage'
  | 'chemical/x-macmolecule'
  | 'chemical/x-macromodel-input'
  | 'chemical/x-mdl-molfile'
  | 'chemical/x-mdl-rdfile'
  | 'chemical/x-mdl-rxnfile'
  | 'chemical/x-mdl-sdfile'
  | 'chemical/x-mdl-tgf'
  | 'chemical/x-mif'
  | 'chemical/x-mol2'
  | 'chemical/x-molconn-Z'
  | 'chemical/x-mopac-input'
  | 'chemical/x-mopac-graph'
  | 'chemical/x-ncbi-asn1'
  | 'chemical/x-ncbi-asn1-binary'
  | 'chemical/x-pdb'
  | 'chemical/x-swissprot'
  | 'chemical/x-vamas-iso14976'
  | 'chemical/x-vmd'
  | 'chemical/x-xtel'
  | 'chemical/x-xyz'
  | 'model/stl'
  | 'model/x.stl-binary'
  | 'model/x.stl-ascii'
  | 'model/vrml'
  | 'audio/x-wav'
  | 'video/x-flv'
  | 'Data/spcvue.htm'

/** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range.
 * @maxInclusive 34
 * @maxLength 2
 * @minLength 2
 **/
export interface Month extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

export type CollectionMultiResolution = 'lock' | 'unlock'

export interface Name extends XastElement {
  type: 'element'
  name: 'name'
  attributes: {
    language?: Language
    nameStyle: NameNameStyle
  }
  children: (GivenName | Prefix | Suffix)[]
}

export type ArchiveName = 'CLOCKSS' | 'LOCKSS' | 'Portico' | 'KB' | 'Internet Archive' | 'DWT'

/** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name.
 * @minLength 2
 * @maxLength 150
 **/
export type CmAssertionName = string

export type NameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

export type StringNameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

export type NameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

/** Identifies books or conference proceedings that have no ISBN assigned.**/
export interface Noisbn extends XastElement {
  type: 'element'
  name: 'noisbn'
  attributes: {
    reason: NoisbnReason
  }
  /** XastElement is self-closing */
  children: []
}

/** The ORCID iD for an author.**/
export interface ORCID extends OrcidT {
  type: 'element'
  name: 'ORCID'
  attributes: {
    authenticated: string
  }
}

/** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present.**/
export interface Order extends XastElement {
  name: 'order'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors.**/
export interface Organization extends OrganizationT {
  type: 'element'
  name: 'organization'
  attributes: {
    contributor_role: ContributorRole
    language?: Language
    nameStyle?: NameStyle
    sequence: Sequence
  }
}

/** The title of an item in its original language if the registration is for a translation of a work.**/
export interface OriginalLanguageTitle extends XastElement {
  type: 'element'
  name: 'original_language_title'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
  children: []
}

/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages.
 * @minLength 1
 * @maxLength 100
 **/
export interface OtherPages extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 100
       **/
      value: string
    },
  ]
}
/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages.
 * @minLength 1
 * @maxLength 100
 **/
export type OtherPagesPrimitiveType = string

/** The container for information about page ranges.**/
export interface Pages extends XastElement {
  type: 'element'
  name: 'pages'
  children: (FirstPage | LastPage | OtherPages)[]
}

export interface ParentDoi extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 6
       * @maxLength 2048
       **/
      value: string
    },
  ]
}

export type SaComponentParentDoi = string

export type ComponentParentRelation =
  | 'isPartOf'
  | 'isReferencedBy'
  | 'isRequiredBy'
  | 'isTranslationOf'

/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element.
 * @minLength 1
 * @maxLength 15
 **/
export interface PartNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: string
    },
  ]
}
/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element.
 * @minLength 1
 * @maxLength 15
 **/
export type PartNumberPrimitiveType = string

/** The peer_review content type is intended for assigning DOIs to the reports and other artifacts associated with the review of published content.
 **/
export interface PeerReview extends XastElement {
  type: 'element'
  name: 'peer_review'
  attributes: {
    language?: Language
    recommendation?: PeerReviewRecommendation
    /** Required attribute. First submission defined as revision round zero	**/
    revisionRound?: string
    stage?: PeerReviewStage
    type?: PeerReviewType
  }
  children: (
    | CompetingInterestStatement
    | Contributors
    | DoiData
    | Institution
    | ai.Program
    | ReviewDate
    | RunningNumber
    | ScnPolicies
    | Titles
  )[]
}

/** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print.**/
export interface PendingPublication extends XastElement {
  type: 'element'
  name: 'pending_publication'
  attributes: {
    language?: Language
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | Contributors
    | Crossmark
    | Doi
    | Institution
    | IntentStatement
    | ItemNumber
    | rel.Program
    | Publication
    | Titles
  )[]
}

/** The name of a person (as opposed to an organization) that contributed to an item.**/
export interface PersonName extends XastElement {
  type: 'element'
  name: 'person_name'
  attributes: {
    contributor_role: ContributorRole
    language?: Language
    nameStyle?: NameStyle
    sequence: Sequence
  }
  children: (Affiliations | AltName | GivenName | ORCID | Suffix | Surname)[]
}

/** Container for posted content metadata.
 **/
export interface PostedContent extends XastElement {
  type: 'element'
  name: 'posted_content'
  attributes: {
    language?: Language
    type: PostedContentType
  }
  children: (
    | jats.Abstract
    | AcceptanceDate
    | CitationList
    | Contributors
    | DoiData
    | GroupTitle
    | Institution
    | ItemNumber
    | PostedDate
    | fr.Program
    | ScnPolicies
    | Titles
  )[]
}

/** The date a pre-print was posted to a repository.**/
export interface PostedDate extends DateT {
  type: 'element'
  name: 'posted_date'
}

export interface Prefix extends XastElement {
  type: 'element'
  name: 'prefix'
  attributes: {
    language?: Language
  }
  /** XastElement is self-closing */
  children: []
}

/** Container for all information that applies to a non-series conference proceeding.**/
export interface ProceedingsMetadata extends XastElement {
  type: 'element'
  name: 'proceedings_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | ArchiveLocations
    | DoiData
    | Isbn
    | Noisbn
    | ProceedingsSubject
    | ProceedingsTitle
    | PublicationDate
    | Publisher
    | PublisherItem
  )[]
}

/** Container for all information that applies to a specific conference proceeding that is part of a series.**/
export interface ProceedingsSeriesMetadata extends XastElement {
  type: 'element'
  name: 'proceedings_series_metadata'
  attributes: {
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (ArchiveLocations | DoiData | PublisherItem | SeriesMetadata)[]
}

/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH.
 * @minLength 1
 * @maxLength 255
 **/
export interface ProceedingsSubject extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH.
 * @minLength 1
 * @maxLength 255
 **/
export type ProceedingsSubjectPrimitiveType = string

/** The undifferentiated title of a conference proceeding.
 * @minLength 1
 * @maxLength 511
 **/
export interface ProceedingsTitle extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 511
       **/
      value: string
    },
  ]
}
/** The undifferentiated title of a conference proceeding.
 * @minLength 1
 * @maxLength 511
 **/
export type ProceedingsTitlePrimitiveType = string

export type CollectionProperty =
  | 'list-based'
  | 'country-based'
  | 'crawler-based'
  | 'text-mining'
  | 'unspecified'
  | 'syndication'
  | 'link-header'

/** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI**/
export interface Publication extends XastElement {
  type: 'element'
  name: 'publication'
  children: FullTitle[]
}

/** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions.**/
export interface PublicationDate extends DateT {
  type: 'element'
  name: 'publication_date'
}

export type StandardMetadataPublicationStatus = 'released' | 'withdrawn'

export type PublicationType = 'abstract_only' | 'full_text' | 'bibliographic_record'

/** A container for information about the publisher of the item being registered**/
export interface Publisher extends XastElement {
  type: 'element'
  name: 'publisher'
  children: (PublisherName | PublisherPlace)[]
}

/** A container for item identification numbers set by a publisher.**/
export interface PublisherItem extends XastElement {
  type: 'element'
  name: 'publisher_item'
  children: (Identifier | ItemNumber)[]
}

/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record.
 * @minLength 1
 * @maxLength 255
 **/
export interface PublisherName extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record.
 * @minLength 1
 * @maxLength 255
 **/
export type PublisherNamePrimitiveType = string

/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export interface PublisherPlace extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export type PublisherPlacePrimitiveType = string

export type NoisbnReason = 'archive_volume' | 'monograph' | 'simple_series'

export type StdAltAsPublishedReason = string

export type PeerReviewRecommendation =
  | 'major-revision'
  | 'minor-revision'
  | 'reject'
  | 'reject-with-resubmit'
  | 'accept'
  | 'accept-with-reservation'

export type ReferenceDistributionOpts = 'none' | 'query' | 'any'

export interface RegAgency extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export type ComponentRegAgency = string

/** The organization responsible for the information being registered.
 * @minLength 1
 * @maxLength 255
 **/
export interface Registrant extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: string
    },
  ]
}
/** The organization responsible for the information being registered.
 * @minLength 1
 * @maxLength 255
 **/
export type RegistrantPrimitiveType = string

/** report-paper is the top level element for deposit of metadata about one or more reports or working papers.**/
export interface ReportPaper extends XastElement {
  type: 'element'
  name: 'report-paper'
  attributes: {
    publication_type: PublicationType
  }
  children: (ComponentList | ContentItem | ReportPaperMetadata | ReportPaperSeriesMetadata)[]
}

/** Container for the metadata related to a Technical Report or Working Paper.**/
export interface ReportPaperMetadata extends XastElement {
  type: 'element'
  name: 'report-paper_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | ApprovalDate
    | ArchiveLocations
    | CitationList
    | ContractNumber
    | Contributors
    | Crossmark
    | DoiData
    | EditionNumber
    | Institution
    | Isbn
    | rel.Program
    | PublicationDate
    | Publisher
    | PublisherItem
    | ScnPolicies
    | Titles
  )[]
}

/** Container for the metadata related to a Technical Report or Working Paper that is part of a series.**/
export interface ReportPaperSeriesMetadata extends XastElement {
  type: 'element'
  name: 'report-paper_series_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | ApprovalDate
    | ArchiveLocations
    | CitationList
    | ContractNumber
    | Contributors
    | DoiData
    | EditionNumber
    | Institution
    | Isbn
    | rel.Program
    | PublicationDate
    | Publisher
    | PublisherItem
    | SeriesMetadata
    | Volume
  )[]
}

/** The URI associated with a DOI.**/
export interface Resource extends ResourceT {
  type: 'element'
  name: 'resource'
  attributes: {
    content_version: ResourceContentVersion
    mime_type?: MimeType
  }
}

/** The date a review was published to a repository.**/
export interface ReviewDate extends XastElement {
  type: 'element'
  name: 'review_date'
  children: (Day | Month | Year)[]
}

/** Required attribute. First submission defined as revision round zero**/
export interface RevisionRound extends XastElement {
  name: 'revision-round'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Running numbers to specify the various reports (ex: RC1 to RC4)**/
export interface RunningNumber extends XastElement {
  name: 'running_number'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Container for component metadata if the component is being registered after the parent record/DOI is created.**/
export interface SaComponent extends XastElement {
  type: 'element'
  name: 'sa_component'
  attributes: {
    parent_doi: string
  }
  children: ComponentList[]
}

/** A wrapper for Scholarly Sharing Network (SCN) policy information**/
export interface ScnPolicies extends XastElement {
  type: 'element'
  name: 'scn_policies'
  children: ScnPolicySet[]
}

/** An individual SCN policy
 * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
 * @minLength 1
 * @maxLength 2048
 **/
export interface ScnPolicyRef extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
       * @minLength 1
       * @maxLength 2048
       **/
      value: string
    },
  ]
}
/** An individual SCN policy
 * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
 * @minLength 1
 * @maxLength 2048
 **/
export type ScnPolicyRefPrimitiveType = string

/** A group of related SCN policies**/
export interface ScnPolicySet extends XastElement {
  type: 'element'
  name: 'scn_policy_set'
  attributes: {
    /** A date, unknown format **/
    start_date?: string
  }
  children: ScnPolicyRef[]
}

export type Sequence = 'first' | 'additional'

/** Container for metadata about a series publication.**/
export interface SeriesMetadata extends XastElement {
  type: 'element'
  name: 'series_metadata'
  children: (
    | jats.Abstract
    | ArchiveLocations
    | Coden
    | Contributors
    | Crossmark
    | DoiData
    | Issn
    | PublisherItem
    | SeriesNumber
    | Titles
  )[]
}

/** The series number within a specific published conference discipline.
 * @minLength 1
 * @maxLength 15
 **/
export interface SeriesNumber extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: string
    },
  ]
}
/** The series number within a specific published conference discipline.
 * @minLength 1
 * @maxLength 15
 **/
export type SeriesNumberPrimitiveType = string

/** Book series title in a citation.**/
export interface SeriesTitle extends XastElement {
  name: 'series_title'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface Set extends XastElement {
  name: 'set'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set.**/
export interface SetMetadata extends XastElement {
  type: 'element'
  name: 'set_metadata'
  children: (
    | ArchiveLocations
    | Contributors
    | DoiData
    | Isbn
    | Noisbn
    | PartNumber
    | PublisherItem
    | Titles
  )[]
}

/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number.
 * @minLength 1
 * @maxLength 15
 **/
export interface SpecialNumbering extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: string
    },
  ]
}
/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number.
 * @minLength 1
 * @maxLength 15
 **/
export type SpecialNumberingPrimitiveType = string

export type PeerReviewStage = 'pre-publication' | 'post-publication'

/** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia.**/
export interface Standard extends XastElement {
  type: 'element'
  name: 'standard'
  attributes: {
    publication_type: PublicationType
  }
  children: (ComponentList | ContentItem | StandardMetadata)[]
}

/** Container for the metadata related to a Standard that is not part of a series.**/
export interface StandardMetadata extends XastElement {
  type: 'element'
  name: 'standard_metadata'
  attributes: {
    language?: Language
    publication_status?: StandardMetadataPublicationStatus
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: (
    | jats.Abstract
    | ApprovalDate
    | ArchiveLocations
    | CitationList
    | Contributors
    | Crossmark
    | Designators
    | DoiData
    | EditionNumber
    | Isbn
    | rel.Program
    | Publisher
    | PublisherItem
    | StandardsBody
    | Titles
  )[]
}

/** A wrapper for standards body information.**/
export interface StandardsBody extends XastElement {
  type: 'element'
  name: 'standards_body' /** XastElement is self-closing */
  children: []
}

export interface StartDate extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

export interface StartDay extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

export interface StartMonth extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: string
    },
  ]
}

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export interface StartYear extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: string
    },
  ]
}

/** Designator for standard from which the current deposit is adopted.
   * @minLength 2
  * @maxLength 150

**/
export interface StdAdoptedFrom extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}
/** Designator for standard from which the current deposit is adopted.
   * @minLength 2
  * @maxLength 150

**/
export type StdDesignatorvalueT = string

export interface StdAltAsPublished extends StdDesignatorT {
  type: 'element'
  name: 'std_alt_as_published'
  attributes: {
    approvedMonth?: string
    approvedYear: string
    Reason: StdAltAsPublishedReason
  }
}

export interface StdAltScript extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}

/** Designator or other primary identifier for the standard being deposited.**/
export interface StdAsPublished extends StdDesignatorT {
  type: 'element'
  name: 'std_as_published'
  attributes: {
    family: string
    set: string
    undated: string
  }
}

export interface StdDesignator extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}

export interface StdDesignatorT extends XastElement {
  type: 'element'
  name: string
}

/** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem)
   * @minLength 2
  * @maxLength 150

**/
export interface StdRevisionOf extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}

/** Provides for defining a DOI for a set of standards (sometimes know as truncated form).**/
export interface StdSetDesignator extends StdDesignatorT {
  type: 'element'
  name: 'std_set_designator'
  attributes: {
    family: string
  }
}

/** Designator for standard being replaced by the standard being deposited.
 * @minLength 2
 * @maxLength 150
 **/
export interface StdSupersedes extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}

/** Provides for defining a DOI for a group of closely related standard documents (undated form is a stem for any dated form)**/
export interface StdUndatedDesignator extends StdDesignatorT {
  type: 'element'
  name: 'std_undated_designator'
  attributes: {
    family: string
    set: string
  }
}

export interface StdVariantForm extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: string
    },
  ]
}

export interface StringName extends XastElement {
  type: 'element'
  name: 'string-name'
  attributes: {
    language?: Language
    nameStyle: StringNameNameStyle
  }
  children: (Degrees | GivenName | Prefix | Suffix | Surname)[]
}

/** The sub-title portion of a title.**/
export interface Subtitle extends XastElement {
  type: 'element'
  name: 'subtitle' /** XastElement is self-closing */
  children: []
}

/** The suffix of an author name, e.g. junior, senior, III.
 * @minLength 1
 * @maxLength 10
 **/
export interface Suffix extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 10
       **/
      value: string
    },
  ]
}
/** The suffix of an author name, e.g. junior, senior, III.
 * @minLength 1
 * @maxLength 10
 **/
export type SuffixPrimitiveType = string

/** The family_name of a contributor.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export interface Surname extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @pattern [^\d\?]*[^\?\s]+[^\d]*
       * @minLength 1
       * @maxLength 60
       **/
      value: string
    },
  ]
}
/** The family_name of a contributor.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export type SurnamePrimitiveType = string

/** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times.**/
export interface Timestamp extends XastElement {
  name: 'timestamp'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** The title of the item being registered.**/
export interface Title extends XastElement {
  type: 'element'
  name: 'title' /** XastElement is self-closing */
  children: []
}

/** A container for the title and original language title elements.**/
export interface Titles extends XastElement {
  type: 'element'
  name: 'titles'
  children: (OriginalLanguageTitle | Subtitle | Title)[]
}

export type InstitutionIdType = 'ror' | 'isni' | 'wikidata'

/** This attribute should be used to list the update type. Allowed update types are:
 * addendum
 * clarification
 * correction
 * corrigendum
 * erratum
 * expression_of_concern
 * new_edition
 * new_version
 * partial_retraction
 * removal
 * retraction
 * withdrawal
 **/
export type CmUpdateType =
  | 'addendum'
  | 'clarification'
  | 'correction'
  | 'corrigendum'
  | 'erratum'
  | 'expression_of_concern'
  | 'new_edition'
  | 'new_version'
  | 'partial_retraction'
  | 'removal'
  | 'retraction'
  | 'withdrawal'

export type PeerReviewType =
  | 'referee-report'
  | 'editor-report'
  | 'author-comment'
  | 'community-comment'
  | 'manuscript'
  | 'aggregate'
  | 'recommendation'

export type PostedContentType =
  | 'preprint'
  | 'working_paper'
  | 'letter'
  | 'dissertation'
  | 'report'
  | 'review'
  | 'other'

export interface Undated extends XastElement {
  name: 'undated'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available.**/
export interface UnstructuredCitation extends XastElement {
  type: 'element'
  name: 'unstructured_citation' /** XastElement is self-closing */
  children: []
}

/** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader’s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc.**/
export interface Update extends DoiT {
  type: 'element'
  name: 'update'
  attributes: {
    /** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.	**/
    /** A date, unknown format **/
    date: string
    /** This attribute should be used to list the update type. Allowed update types are:
     * addendum
     * clarification
     * correction
     * corrigendum
     * erratum
     * expression_of_concern
     * new_edition
     * new_version
     * partial_retraction
     * removal
     * retraction
     * withdrawal
     **/
    type: CmUpdateType
  }
}

/** The date a pre-print was posted to a repository.**/
export interface UpdateDate extends DateT {
  type: 'element'
  name: 'update_date'
}

/** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here.**/
export interface Updates extends XastElement {
  type: 'element'
  name: 'updates'
  children: Update[]
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

/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings.
 * @minLength 1
 * @maxLength 32
 **/
export interface Volume extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: string
    },
  ]
}
/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings.
 * @minLength 1
 * @maxLength 32
 **/
export type VolumePrimitiveType = string

/** Book volume title in a citation.**/
export interface VolumeTitle extends XastElement {
  name: 'volume_title'
  children: [
    {
      type: 'text'
      value: string
    },
  ]
}

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export interface Year extends XastElement {
  name: string
  children: [
    {
      type: 'text'
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: string
    },
  ]
}
