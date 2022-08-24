import * as Primitive from '../../xml-primitives'
import * as ai from '../AccessIndicators.xsd'
import * as ct from '../clinicaltrials.xsd'
import * as fr from '../fundref.xsd'
import * as jats from '../../www.ncbi.nlm.nih.gov/JATS1'
import * as rel from '../relations.xsd'

// Source files:
// https://data.crossref.org/schemas/common5.3.1.xsd
// https://data.crossref.org/schemas/crossref5.3.1.xsd

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

export type ConferenceDateT = TextNode
type _ConferenceDateT = Primitive._String

export type PID = TextNode
type _PID = Primitive._String

export type OrganizationT = TextNode
type _OrganizationT = Primitive._String

export type OrcidT = TextNode
type _OrcidT = Primitive._String

export interface DateT extends Element {
  type: 'element'
  name: string
  attributes: {
    media_type: DateTMediaType
  }
  children: RequiredMap<DateTChildren>[]
}

export interface DateTChildren {
  /** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
  day?: Day
  /** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range. */
  month?: Month
  /** Year of publication. */
  year: Year
}

export type ItemNumberT = TextNode
type _ItemNumberT = Primitive._String

export type IdentifierT = TextNode
type _IdentifierT = Primitive._String

export type FormatT = TextNode
type _FormatT = Primitive._String

export type ResourceT = TextNode
type _ResourceT = Primitive._String

export type CmAssertion = TextNode
type _CmAssertion = Primitive._String

export type IsbnT = TextNode
type _IsbnT = Primitive._String

export type IssnT = TextNode
type _IssnT = Primitive._String

export interface CitationT extends Element {
  type: 'element'
  name: string
}

export interface CitationTChildren {
  /** Article title in a citation. */
  article_title?: ArticleTitle
  /** First author in a citation. */
  author?: Author
  /** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
  component_number?: ComponentNumber
  /** Year of publication in citation. */
  cYear?: CYear
  /** DOI for an entity being registered with Crossref. */
  doi?: Doi
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** article identifier or e-location id of the item */
  elocation_id?: ElocationId
  /** First page number of an item. */
  first_page?: FirstPage
  /** The ISBN assigned to an entity. */
  Isbn?: Isbn
  /** The ISSN assigned to the title being registered. */
  Issn?: Issn
  /** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
  issue?: Issue
  /** Journal title in a citation. */
  journal_title?: JournalTitle
  /** Book series title in a citation. */
  series_title?: SeriesTitle
  /** A wrapper for standards body information. */
  StandardsBody?: StandardsBody
  std_designator?: StdDesignator
  /** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available. */
  UnstructuredCitation?: UnstructuredCitation
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume?: Volume
  /** Book volume title in a citation. */
  volume_title?: VolumeTitle
}

/** content is "Inline" except that anchors shouldn't be nested */
export interface A extends Primitive._String {
  type: 'element'
  name: 'a'
  attributes: {
    href: string
  }
}

/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
export type AbbrevTitle = TextNode
/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
export type AbbrevTitlePrimitiveType = string

/** The date a manuscript was accepted for publication. */
export interface AcceptanceDate extends DateT {
  type: 'element'
  name: 'acceptance_date'
}

export interface Affiliations extends Element {
  type: 'element'
  name: 'affiliations'
  children: RequiredMap<AffiliationsChildren>[]
}

export interface AffiliationsChildren {
  /** Container element for information about an institution or organization associated with an item. */
  institution: Institution[]
}

export interface AltName extends Element {
  type: 'element'
  name: 'alt-name'
  children: RequiredMap<AltNameChildren>[]
}

export interface AltNameChildren {
  name: Name[]
  stringName: StringName[]
}

export interface Anonymous extends Element {
  type: 'element'
  name: 'anonymous'
  attributes: {
    contributor_role: ContributorRole
    language?: Language
    nameStyle?: NameStyle
    sequence: Sequence
  }
  children: RequiredMap<AnonymousChildren>[]
}

export interface AnonymousChildren {
  affiliations?: Affiliations
}

/** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
export interface ApprovalDate extends DateT {
  type: 'element'
  name: 'approval_date'
}

export type ApprovedMonth = TextNode

export type StdAltAsPublishedApprovedMonth = `${number}`

export type ApprovedYear = TextNode

export type StdAltAsPublishedApprovedYear = string

/** Used to indicate the designated archiving organization(s) for an item. */
export interface Archive extends Element {
  type: 'element'
  name: 'archive'
  attributes: {
    name: ArchiveName
  }
  /** Element is self-closing */
  children: []
}

/** Container element for archive information */
export interface ArchiveLocations extends Element {
  type: 'element'
  name: 'archive_locations'
  children: RequiredMap<ArchiveLocationsChildren>[]
}

export interface ArchiveLocationsChildren {
  /** Used to indicate the designated archiving organization(s) for an item. */
  archive?: Archive[]
}

/** Article title in a citation. */
export type ArticleTitle = TextNode<'article_title'>

/** An assertion is a piece of custom, non-bibliographic metadata that the publisher is asserting about the content to which the Crossmark refers. */
export interface Assertion extends Element {
  type: 'element'
  name: 'assertion'
  attributes: {
    /** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute. */
    explanation: string
    /** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog. */
    group_label: string
    /** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions. */
    group_name: string
    href: string
    /** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms) */
    label: string
    /** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name. */
    name: string
    /** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present. */
    order: `${number}`
  }
  /** Element is self-closing */
  children: []
}

export type Authenticated = TextNode<'authenticated'>

/** First author in a citation. */
export type Author = TextNode<'author'>

export interface XrefFaces extends Element {
  type: 'element'
  name: 'xrefFaces' /** Element is self-closing */
  children: []
}

/** Container for the main body of a DOI record submission. While it is possible to include records for multiple journals, books, conferences, or other types of content in a single submission, it is not possible to mix content types within a single DOI submission. */
export interface Body extends Element {
  type: 'element'
  name: 'body'
  children: RequiredMap<BodyChildren>[]
}

export interface BodyChildren {
  /** Container for all information about a single book. */
  book: Book[]
  /** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element. */
  conference: Conference[]
  /** database is the top level element for deposit of metadata about one or more datasets or records in a database. */
  database: Database[]
  /** dissertation is the top level element for deposit of metadata about one or more dissertations. */
  dissertation: Dissertation[]
  /** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file. */
  journal: Journal[]
  /** The peer_review content type is intended for assigning DOIs to the reports and other artifacts associated with the review of published content. */
  peer_review: PeerReview[]
  /** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print. */
  pending_publication: PendingPublication[]
  /** Container for posted content metadata. */
  posted_content: PostedContent[]
  /** report-paper is the top level element for deposit of metadata about one or more reports or working papers. */
  reportPaper: ReportPaper[]
  /** Container for component metadata if the component is being registered after the parent record/DOI is created. */
  sa_component: SaComponent[]
  /** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia. */
  standard: Standard[]
}

/** Container for all information about a single book. */
export interface Book extends Element {
  type: 'element'
  name: 'book'
  attributes: {
    book_type: BookBookType
  }
  children: RequiredMap<BookChildren>[]
}

export interface BookChildren {
  /** A container for all title-level metadata for a single book that is not part of a series or set. */
  book_metadata: BookMetadata
  /** A container for all information that applies to an individual volume of a book series. */
  book_series_metadata: BookSeriesMetadata
  /** A container for all information that applies to an individual volume of a book set. */
  book_set_metadata: BookSetMetadata
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  content_item?: ContentItem[]
}

/** A container for all title-level metadata for a single book that is not part of a series or set. */
export interface BookMetadata extends Element {
  type: 'element'
  name: 'book_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookMetadataChildren>[]
}

export interface BookMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date?: AcceptanceDate
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** A container for all information that applies to an individual volume of a book series. */
export interface BookSeriesMetadata extends Element {
  type: 'element'
  name: 'book_series_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookSeriesMetadataChildren>[]
}

export interface BookSeriesMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** Container for metadata about a series publication. */
  series_metadata: SeriesMetadata
}

/** A container for all information that applies to an individual volume of a book set. */
export interface BookSetMetadata extends Element {
  type: 'element'
  name: 'book_set_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookSetMetadataChildren>[]
}

export interface BookSetMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set. */
  set_metadata: SetMetadata
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

export type BookBookType = 'edited_book' | 'monograph' | 'reference' | 'other'

/** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
 * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/ */
export interface Citation extends CitationT {
  type: 'element'
  name: 'citation'
  attributes: {
    key: string
  }
}

/** A list of articles, books, and other content cited by the item being registered */
export interface CitationList extends Element {
  type: 'element'
  name: 'citation_list'
  children: RequiredMap<CitationListChildren>[]
}

export interface CitationListChildren {
  /** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
   * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/ */
  Citation?: Citation[]
}

/** The coden assigned to a journal or conference proceedings. */
export type Coden = TextNode
/** The coden assigned to a journal or conference proceedings. */
export type CodenPrimitiveType = string

/** Container for item elements containing non-primary URIs associated with the item being registered. Collections are supported for the following (defined in the property attribute):
 *
 * list-based:  Multiple Resolution, more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/
 * country-based: more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/#00130
 * crawler-based: for Similarity Check URLs, more info: https://www.crossref.org/education/similarity-check/participate/urls-for-new-deposits/
 * text-mining: supply specific URLs for text and data mining, more info: https://www.crossref.org/education/retrieve-metadata/rest-api/text-and-data-mining-for-members/
 * unspecified: can be used for additional URLs
 * syndication: identifies resources to be used for syndication
 * link-header: identifies resources to be used as an endpoint */
export interface Collection extends Element {
  type: 'element'
  name: 'collection'
  attributes: {
    multiResolution: CollectionMultiResolution
    property: CollectionProperty
  }
  children: RequiredMap<CollectionChildren>[]
}

export interface CollectionChildren {
  /** A container used to associate a URI with the DOI being registered. */
  item?: Item[]
}

/** Statement of competing interest supplied by a review author during the review process. */
export interface CompetingInterestStatement extends Element {
  type: 'element'
  name: 'competing_interest_statement'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

/** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components. */
export interface Component extends Element {
  type: 'element'
  name: 'component'
  attributes: {
    component_size: `${number}`
    language?: Language
    parent_relation: ComponentParentRelation
    regAgency?: string
  }
  children: RequiredMap<ComponentChildren>[]
}

export interface ComponentChildren {
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description?: Description
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** A narrative description of a component's file format and/or file extension. */
  format?: Format
  /** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
  program?: ai.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date?: PublicationDate
  /** A container for the title and original language title elements. */
  titles?: Titles
}

/** Container for a group of components */
export interface ComponentList extends Element {
  type: 'element'
  name: 'component_list'
  children: RequiredMap<ComponentListChildren>[]
}

export interface ComponentListChildren {
  /** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components. */
  Component?: Component[]
}

/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
export type ComponentNumber = TextNode
/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
export type ComponentNumberPrimitiveType = string

export type ComponentSize = TextNode

export type ComponentComponentSize = `${number}`

export type ContentItemComponentType =
  | 'chapter'
  | 'section'
  | 'part'
  | 'track'
  | 'reference_entry'
  | 'other'

/** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element. */
export interface Conference extends Element {
  type: 'element'
  name: 'conference'
  children: RequiredMap<ConferenceChildren>[]
}

export interface ConferenceChildren {
  /** Container for all information about a single conference paper. */
  conference_paper?: ConferencePaper[]
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata. */
  event_metadata: EventMetadata
  /** Container for all information that applies to a non-series conference proceeding. */
  proceedings_metadata: ProceedingsMetadata
  /** Container for all information that applies to a specific conference proceeding that is part of a series. */
  proceedings_series_metadata: ProceedingsSeriesMetadata
}

/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
export type ConferenceAcronym = TextNode
/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
export type ConferenceAcronymPrimitiveType = string

/** The start and end dates of a conference event. conference_date may be used in three ways:
 * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
 * 2. If publishers have parsed date values, provide them in the attributes.
 * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
 * Jan. 15-17, 1997 */
export interface ConferenceDate extends ConferenceDateT {
  type: 'element'
  name: 'conference_date'
  attributes: {
    end_day?: `${number}`
    end_month?: `${number}`
    end_year?: `${number}`
    start_day?: `${number}`
    start_month?: `${number}`
    start_year?: `${number}`
  }
}

/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
export type ConferenceLocation = TextNode
/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
export type ConferenceLocationPrimitiveType = string

/** The official name of the conference, excluding numbers commonly provided in conference */
export type ConferenceName = TextNode
/** The official name of the conference, excluding numbers commonly provided in conference */
export type ConferenceNamePrimitiveType = string

/** The number of a conference. conference_number should include only the number of the conference without any extra text */
export type ConferenceNumber = TextNode
/** The number of a conference. conference_number should include only the number of the conference without any extra text */
export type ConferenceNumberPrimitiveType = string

/** Container for all information about a single conference paper. */
export interface ConferencePaper extends Element {
  type: 'element'
  name: 'conference_paper'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ConferencePaperChildren>[]
}

export interface ConferencePaperChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date?: AcceptanceDate
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container for a group of components */
  component_list?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date?: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
export type ConferenceSponsor = TextNode
/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
export type ConferenceSponsorPrimitiveType = string

/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
export type ConferenceTheme = TextNode
/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
export type ConferenceThemePrimitiveType = string

/** The date a piece of content was created. */
export interface ContentDate extends DateT {
  type: 'element'
  name: 'content_date'
}

/** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
export interface ContentItem extends Element {
  type: 'element'
  name: 'content_item'
  attributes: {
    component_type: ContentItemComponentType
    language?: Language
    level_sequence_number: `${number}`
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ContentItemChildren>[]
}

export interface ContentItemChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date?: AcceptanceDate
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container for a group of components */
  ComponentList?: ComponentList
  /** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
  component_number?: ComponentNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date?: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles?: Titles
}

export type ResourceContentVersion = 'vor' | 'am'

/** The contract number under which a report or paper was written. */
export type ContractNumber = TextNode
/** The contract number under which a report or paper was written. */
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

/** The container for all who contributed to authoring or editing an item. */
export interface Contributors extends Element {
  type: 'element'
  name: 'contributors'
  children: RequiredMap<ContributorsChildren>[]
}

export interface ContributorsChildren {
  anonymous: Anonymous[]
  /** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors. */
  organization: Organization[]
  /** The name of a person (as opposed to an organization) that contributed to an item. */
  person_name: PersonName[]
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

/** The date a database or dataset item was created. */
export interface CreationDate extends DateT {
  type: 'element'
  name: 'creation_date'
}

/** Container element for CrossMark data. */
export interface Crossmark extends Element {
  type: 'element'
  name: 'crossmark'
  children: RequiredMap<CrossmarkChildren>[]
}

export interface CrossmarkChildren {
  crossmark_domain_exclusive?: CrossmarkDomainExclusive
  /** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content */
  crossmark_domains?: CrossmarkDomains[]
  /** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications. */
  crossmark_policy?: CrossmarkPolicy
  crossmark_version?: CrossmarkVersion
  /** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document. */
  custom_metadata?: CustomMetadata
  /** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here. */
  updates?: Updates
}

/** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain. */
export interface CrossmarkDomain extends Element {
  type: 'element'
  name: 'crossmark_domain'
  children: RequiredMap<CrossmarkDomainChildren>[]
}

export interface CrossmarkDomainChildren {
  /** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. */
  domain: Domain
  /** The filter element is used to disambiguate content in situations where multiple publishers share the same host (e.g. when on an aggregated platform). It should contain a substring of the path that can be used to uniquely identify a publisher's or publication's content. For instance, using the string "alpsp" here would help the CrossMark system distinguish between ALPSP publications on the ingentaconnect host and other publications on the same host. */
  filter?: Filter
}

export type CrossmarkDomainExclusive = TextNode<'crossmark_domain_exclusive'>

/** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content */
export interface CrossmarkDomains extends Element {
  type: 'element'
  name: 'crossmark_domains'
  children: RequiredMap<CrossmarkDomainsChildren>[]
}

export interface CrossmarkDomainsChildren {
  /** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain. */
  CrossmarkDomain: CrossmarkDomain[]
}

/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications. */
export type CrossmarkPolicy = TextNode
/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications. */
export type DoiT = TextNode

export type CrossmarkVersion = TextNode<'crossmark_version'>

/** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document. */
export interface CustomMetadata extends Element {
  type: 'element'
  name: 'custom_metadata'
  children: RequiredMap<CustomMetadataChildren>[]
}

export interface CustomMetadataChildren {
  /** Accommodates deposit of linked clincal trials metadata. The clinical-trial-number value will
   * be a string that must match a specific pattern appropriate for a given clinical trial registry. The
   * registry is identified in the required attribute 'registry' and must be the DOI of a recognized registry
   * (see http://dx.doi.org/10.18810/registries) */
  program: ct.Program
}

/** Year of publication in citation. */
export type CYear = TextNode<'cYear'>

/** database is the top level element for deposit of metadata about one or more datasets or records in a database. */
export interface Database extends Element {
  type: 'element'
  name: 'database'
  children: RequiredMap<DatabaseChildren>[]
}

export interface DatabaseChildren {
  /** Container for a group of components */
  component_list?: ComponentList
  /** database_metadata contains metadata about the database. */
  database_metadata: DatabaseMetadata
  /** dataset is used to capture information about one or more database records or collections. */
  dataset?: Dataset[]
}

/** Container for key dates in the life of a database or dataset. */
export interface DatabaseDate extends Element {
  type: 'element'
  name: 'database_date'
  children: RequiredMap<DatabaseDateChildren>[]
}

export interface DatabaseDateChildren {
  /** The date a database or dataset item was created. */
  CreationDate?: CreationDate
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date?: PublicationDate
  /** The date a pre-print was posted to a repository. */
  update_date?: UpdateDate
}

/** database_metadata contains metadata about the database. */
export interface DatabaseMetadata extends Element {
  type: 'element'
  name: 'database_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<DatabaseMetadataChildren>[]
}

export interface DatabaseMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container for key dates in the life of a database or dataset. */
  DatabaseDate?: DatabaseDate[]
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description?: Description
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** dataset is used to capture information about one or more database records or collections. */
export interface Dataset extends Element {
  type: 'element'
  name: 'dataset'
  attributes: {
    dataset_type: DatasetDatasetType
  }
  children: RequiredMap<DatasetChildren>[]
}

export interface DatasetChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container for a group of components */
  component_list?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** Container for key dates in the life of a database or dataset. */
  database_date?: DatabaseDate[]
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description?: Description
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** A narrative description of a component's file format and/or file extension. */
  format?: Format
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A container for the title and original language title elements. */
  titles?: Titles
}

export type DatasetDatasetType = 'record' | 'collection' | 'crossmark_policy' | 'other'

/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update. */
export type Date = TextNode
/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update. */
export type DatePrimitiveType = string

/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
export type Day = TextNode
/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
export type XrefDay = `${number}`

/** The degree(s) awarded for a dissertation. */
export type Degree = TextNode
/** The degree(s) awarded for a dissertation. */
export type DegreePrimitiveType = string

export interface Degrees extends Element {
  type: 'element'
  name: 'degrees'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

/** Information about the organization submitting DOI metadata to Crossref */
export interface Depositor extends Element {
  type: 'element'
  name: 'depositor'
  children: RequiredMap<DepositorChildren>[]
}

export interface DepositorChildren {
  /** Name of the organization registering the DOIs. */
  depositor_name: DepositorName
  /** e-mail address to which batch success and/or error messages are sent. */
  email_address: EmailAddress
}

/** Name of the organization registering the DOIs. */
export type DepositorName = TextNode
/** Name of the organization registering the DOIs. */
export type DepositorNamePrimitiveType = string

/** A narrative description of a file (e.g. a figure caption or video description). */
export interface Description extends Element {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

/** A wrapper for designators or other primary identifiers for a standard. */
export interface Designators extends Element {
  type: 'element'
  name: 'designators'
  children: RequiredMap<DesignatorsChildren>[]
}

export interface DesignatorsChildren {
  /** Designator for standard from which the current deposit is adopted. */
  std_adopted_from?: StdAdoptedFrom[]
  /** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem) */
  std_revision_of?: StdRevisionOf[]
  /** Designator for standard being replaced by the standard being deposited. */
  std_supersedes?: StdSupersedes[]
}

/** dissertation is the top level element for deposit of metadata about one or more dissertations. */
export interface Dissertation extends Element {
  type: 'element'
  name: 'dissertation'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<DissertationChildren>[]
}

export interface DissertationChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approval_date: ApprovalDate[]
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container for a group of components */
  component_list?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The degree(s) awarded for a dissertation. */
  degree?: Degree[]
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** The name of a person (as opposed to an organization) that contributed to an item. */
  person_name: PersonName[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** DOI for an entity being registered with Crossref. */
export type Doi = TextNode
/** DOI for an entity being registered with Crossref. */
export type DoiPrimitiveType = string

/** Top level element for a metadata record submission. This element indicates the start and end of the XML file. The version number is fixed to the version of the schema. */
export interface DoiBatch extends Element {
  type: 'element'
  name: 'doi_batch'
  attributes: {
    version: string
  }
  children: RequiredMap<DoiBatchChildren>[]
}

export interface DoiBatchChildren {
  /** Container for the main body of a DOI record submission. While it is possible to include records for multiple journals, books, conferences, or other types of content in a single submission, it is not possible to mix content types within a single DOI submission. */
  body: Body
  /** Container for information related to the DOI batch submission. This element uniquely identifies the batch deposit to Crossref and contains information that will be used as a reference in error messages triggered during submission processing. */
  head: Head
}

/** Publisher generated ID that uniquely identifies the DOI submission batch. */
export type DoiBatchId = TextNode
/** Publisher generated ID that uniquely identifies the DOI submission batch. */
export type DoiBatchIdPrimitiveType = string

/** The container for elements related directly to a DOI. */
export interface DoiData extends Element {
  type: 'element'
  name: 'doi_data'
  children: RequiredMap<DoiDataChildren>[]
}

export interface DoiDataChildren {
  /** Container for item elements containing non-primary URIs associated with the item being registered. Collections are supported for the following (defined in the property attribute):
   *
   * list-based:  Multiple Resolution, more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/
   * country-based: more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/#00130
   * crawler-based: for Similarity Check URLs, more info: https://www.crossref.org/education/similarity-check/participate/urls-for-new-deposits/
   * text-mining: supply specific URLs for text and data mining, more info: https://www.crossref.org/education/retrieve-metadata/rest-api/text-and-data-mining-for-members/
   * unspecified: can be used for additional URLs
   * syndication: identifies resources to be used for syndication
   * link-header: identifies resources to be used as an endpoint */
  Collection?: Collection[]
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** The URI associated with a DOI. */
  resource: Resource
  /** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
  timestamp?: Timestamp
}

/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. */
export type Domain = TextNode
/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. */
export type CmDomain = string

/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
export type EditionNumber = TextNode
/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
export type EditionNumberPrimitiveType = string

/** article identifier or e-location id of the item */
export type ElocationId = TextNode<'elocation_id'>

/** e-mail address to which batch success and/or error messages are sent. */
export type EmailAddress = TextNode
/** e-mail address to which batch success and/or error messages are sent. */
export type EmailAddressPrimitiveType = string

export type EndDay = TextNode

export type EndMonth = TextNode

export type XrefMonth = `${number}`

/** Basic data types for date parts. */
export type EndYear = TextNode
/** Basic data types for date parts. */
export type XrefYear = `${number}`

/** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata. */
export interface EventMetadata extends Element {
  type: 'element'
  name: 'event_metadata'
  children: RequiredMap<EventMetadataChildren>[]
}

export interface EventMetadataChildren {
  /** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
  conference_acronym?: ConferenceAcronym
  /** The start and end dates of a conference event. conference_date may be used in three ways:
   * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
   * 2. If publishers have parsed date values, provide them in the attributes.
   * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
   * Jan. 15-17, 1997 */
  ConferenceDate?: ConferenceDate
  /** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
  conference_location?: ConferenceLocation
  /** The official name of the conference, excluding numbers commonly provided in conference */
  conference_name: ConferenceName
  /** The number of a conference. conference_number should include only the number of the conference without any extra text */
  conference_number?: ConferenceNumber
  /** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
  conference_sponsor?: ConferenceSponsor[]
  /** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
  conference_theme?: ConferenceTheme
}

/** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute. */
export type Explanation = TextNode<'explanation'>

export type Family = TextNode<'family'>

export type String = string

/** The filter element is used to disambiguate content in situations where multiple publishers share the same host (e.g. when on an aggregated platform). It should contain a substring of the path that can be used to uniquely identify a publisher's or publication's content. For instance, using the string "alpsp" here would help the CrossMark system distinguish between ALPSP publications on the ingentaconnect host and other publications on the same host. */
export type Filter = TextNode<'filter'>

/** First page number of an item. */
export type FirstPage = TextNode
/** First page number of an item. */
export type FirstPagePrimitiveType = string

/** A narrative description of a component's file format and/or file extension. */
export interface Format extends FormatT {
  type: 'element'
  name: 'format'
  attributes: {
    mime_type?: MimeType
  }
}

/** The full title by which a journal is commonly known or cited. */
export type FullTitle = TextNode
/** The full title by which a journal is commonly known or cited. */
export type FullTitlePrimitiveType = string

/** A contributor's given name. */
export type GivenName = TextNode
/** A contributor's given name. */
export type GivenNamePrimitiveType = string

/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog. */
export type GroupLabel = TextNode
/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog. */
export type CmAssertionGroupLabel = string

/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions. */
export type GroupName = TextNode
/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions. */
export type CmAssertionGroupName = string

/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
export type GroupTitle = TextNode
/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
export type GroupTitlePrimitiveType = string

/** Container for information related to the DOI batch submission. This element uniquely identifies the batch deposit to Crossref and contains information that will be used as a reference in error messages triggered during submission processing. */
export interface Head extends Element {
  type: 'element'
  name: 'head'
  children: RequiredMap<HeadChildren>[]
}

export interface HeadChildren {
  /** Information about the organization submitting DOI metadata to Crossref */
  depositor: Depositor
  /** Publisher generated ID that uniquely identifies the DOI submission batch. */
  doi_batch_id: DoiBatchId
  /** The organization responsible for the information being registered. */
  registrant: Registrant
  /** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
  timestamp: Timestamp
}

export type Href = TextNode<'href'>

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

/** A public standard identifier that can be used to uniquely identify the item being registered. */
export interface Identifier extends IdentifierT {
  type: 'element'
  name: 'identifier'
  attributes: {
    id_type: IdentifierIdType
  }
}

/** Container element for information about an institution or organization associated with an item. */
export interface Institution extends Element {
  type: 'element'
  name: 'institution'
  children: RequiredMap<InstitutionChildren>[]
}

export interface InstitutionChildren {
  /** The acronym of the institution. */
  institution_acronym?: InstitutionAcronym[]
  /** The department within an institution. */
  institution_department?: InstitutionDepartment[]
  /** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI */
  institution_id: InstitutionId[]
  /** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
  institution_place?: InstitutionPlace[]
}

/** The acronym of the institution. */
export type InstitutionAcronym = TextNode
/** The acronym of the institution. */
export type InstitutionAcronymPrimitiveType = string

/** The department within an institution. */
export type InstitutionDepartment = TextNode
/** The department within an institution. */
export type InstitutionDepartmentPrimitiveType = string

/** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI */
export interface InstitutionId extends PID {
  type: 'element'
  name: 'institution_id'
  attributes: {
    type: InstitutionIdType
  }
}

/** The full name of an institution. */
export type InstitutionName = TextNode
/** The full name of an institution. */
export type InstitutionNamePrimitiveType = string

/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
export type InstitutionPlace = TextNode
/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
export type InstitutionPlacePrimitiveType = string

/** Member's custom statement of intent to publish content for which a pending publication DOI has been created */
export interface IntentStatement extends Element {
  type: 'element'
  name: 'intent_statement'
  attributes: {
    language?: Language
  }
  children: RequiredMap<IntentStatementChildren>[]
}

export interface IntentStatementChildren {
  /** content is "Inline" except that anchors shouldn't be nested */
  a?: A[]
  b?: XrefFaces[]
  i?: XrefFaces[]
  u?: XrefFaces[]
}

/** The ISBN assigned to an entity. */
export interface Isbn extends IsbnT {
  type: 'element'
  name: 'isbn'
  attributes: {
    media_type: MediaType
  }
}

/** The ISSN assigned to the title being registered. */
export interface Issn extends IssnT {
  type: 'element'
  name: 'issn'
  attributes: {
    media_type: MediaType
  }
}

/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
export type Issue = TextNode
/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
export type IssuePrimitiveType = string

/** A container used to associate a URI with the DOI being registered. */
export interface Item extends Element {
  type: 'element'
  name: 'item'
  attributes: {
    country?: ItemCountry
    crawler?: ItemCrawler
    label?: string
    link_header_relationship: ItemLinkHeaderRelationship
  }
  children: RequiredMap<ItemChildren>[]
}

export interface ItemChildren {
  /** DOI for an entity being registered with Crossref. */
  doi?: Doi
  /** The URI associated with a DOI. */
  resource?: Resource
}

/** A publisher-assigned number that uniquely identifies the item being registered. */
export interface ItemNumber extends ItemNumberT {
  type: 'element'
  name: 'item_number'
  attributes: {
    item_number_type?: string
  }
}

export type ItemNumberType = TextNode<'item_number_type'>

/** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file. */
export interface Journal extends Element {
  type: 'element'
  name: 'journal'
  children: RequiredMap<JournalChildren>[]
}

export interface JournalChildren {
  /** Container for all information about a single journal article. */
  journal_article?: JournalArticle[]
  /** Container for metadata that defines a single issue of a journal. */
  journal_issue?: JournalIssue
  /** Container for metadata that defines a journal. */
  journal_metadata: JournalMetadata
}

/** Container for all information about a single journal article. */
export interface JournalArticle extends Element {
  type: 'element'
  name: 'journal_article'
  attributes: {
    language?: Language
    publication_type: PublicationType
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<JournalArticleChildren>[]
}

export interface JournalArticleChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date?: AcceptanceDate
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** Container for a group of components */
  component_list?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles[]
}

/** Container for metadata that defines a single issue of a journal. */
export interface JournalIssue extends Element {
  type: 'element'
  name: 'journal_issue'
  children: RequiredMap<JournalIssueChildren>[]
}

export interface JournalIssueChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
  issue?: Issue
  /** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume. */
  journal_volume?: JournalVolume
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
  special_numbering?: SpecialNumbering
  /** A container for the title and original language title elements. */
  titles?: Titles
}

/** Container for metadata that defines a journal. */
export interface JournalMetadata extends Element {
  type: 'element'
  name: 'journal_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<JournalMetadataChildren>[]
}

export interface JournalMetadataChildren {
  /** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
  abbrev_title?: AbbrevTitle[]
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The coden assigned to a journal or conference proceedings. */
  coden?: Coden
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The full title by which a journal is commonly known or cited. */
  full_title: FullTitle[]
  /** The ISSN assigned to the title being registered. */
  issn?: Issn[]
}

/** Journal title in a citation. */
export type JournalTitle = TextNode<'journal_title'>

/** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume. */
export interface JournalVolume extends Element {
  type: 'element'
  name: 'journal_volume'
  children: RequiredMap<JournalVolumeChildren>[]
}

export interface JournalVolumeChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

export type Key = TextNode

export type KeyPrimitiveType = string

/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms) */
export type Label = TextNode
/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms) */
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

/** Last page number of an item. */
export type LastPage = TextNode
/** Last page number of an item. */
export type LastPagePrimitiveType = string

export type LevelSequenceNumber = TextNode

export type ContentItemLevelSequenceNumber = `${number}`

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

/** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range. */
export type Month = TextNode

export type CollectionMultiResolution = 'lock' | 'unlock'

export interface Name extends Element {
  type: 'element'
  name: 'name'
  attributes: {
    language?: Language
    nameStyle: NameNameStyle
  }
  children: RequiredMap<NameChildren>[]
}

export interface NameChildren {
  /** A contributor's given name. */
  given_name: GivenName
  prefix?: Prefix
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix
}

export type ArchiveName = 'CLOCKSS' | 'LOCKSS' | 'Portico' | 'KB' | 'Internet Archive' | 'DWT'

/** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name. */
export type CmAssertionName = string

export type NameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

export type StringNameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

export type NameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'

/** Identifies books or conference proceedings that have no ISBN assigned. */
export interface Noisbn extends Element {
  type: 'element'
  name: 'noisbn'
  attributes: {
    reason: NoisbnReason
  }
  /** Element is self-closing */
  children: []
}

/** The ORCID iD for an author. */
export interface ORCID extends OrcidT {
  type: 'element'
  name: 'ORCID'
  attributes: {
    authenticated: `${boolean}`
  }
}

/** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present. */
export type Order = TextNode<'order'>

/** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors. */
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

/** The title of an item in its original language if the registration is for a translation of a work. */
export interface OriginalLanguageTitle extends Element {
  type: 'element'
  name: 'original_language_title'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
export type OtherPages = TextNode
/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
export type OtherPagesPrimitiveType = string

/** The container for information about page ranges. */
export interface Pages extends Element {
  type: 'element'
  name: 'pages'
  children: RequiredMap<PagesChildren>[]
}

export interface PagesChildren {
  /** First page number of an item. */
  first_page: FirstPage
  /** Last page number of an item. */
  last_page?: LastPage
  /** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
  other_pages?: OtherPages
}

export type ParentDoi = TextNode

export type SaComponentParentDoi = string

export type ComponentParentRelation =
  | 'isPartOf'
  | 'isReferencedBy'
  | 'isRequiredBy'
  | 'isTranslationOf'

/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
export type PartNumber = TextNode
/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
export type PartNumberPrimitiveType = string

/** The peer_review content type is intended for assigning DOIs to the reports and other artifacts associated with the review of published content. */
export interface PeerReview extends Element {
  type: 'element'
  name: 'peer_review'
  attributes: {
    language?: Language
    recommendation?: PeerReviewRecommendation
    /** Required attribute. First submission defined as revision round zero */
    revisionRound?: `${number}`
    stage?: PeerReviewStage
    type?: PeerReviewType
  }
  children: RequiredMap<PeerReviewChildren>[]
}

export interface PeerReviewChildren {
  /** Statement of competing interest supplied by a review author during the review process. */
  CompetingInterestStatement?: CompetingInterestStatement
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
  program: ai.Program[]
  /** The date a review was published to a repository. */
  review_date: ReviewDate
  /** Running numbers to specify the various reports (ex: RC1 to RC4) */
  running_number?: RunningNumber
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print. */
export interface PendingPublication extends Element {
  type: 'element'
  name: 'pending_publication'
  attributes: {
    language?: Language
  }
  children: RequiredMap<PendingPublicationChildren>[]
}

export interface PendingPublicationChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date: AcceptanceDate
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Member's custom statement of intent to publish content for which a pending publication DOI has been created */
  IntentStatement?: IntentStatement
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  item_number?: ItemNumber[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI */
  publication: Publication
  /** A container for the title and original language title elements. */
  titles?: Titles
}

/** The name of a person (as opposed to an organization) that contributed to an item. */
export interface PersonName extends Element {
  type: 'element'
  name: 'person_name'
  attributes: {
    contributor_role: ContributorRole
    language?: Language
    nameStyle?: NameStyle
    sequence: Sequence
  }
  children: RequiredMap<PersonNameChildren>[]
}

export interface PersonNameChildren {
  affiliations?: Affiliations
  altName?: AltName
  /** A contributor's given name. */
  given_name?: GivenName
  /** The ORCID iD for an author. */
  ORCID?: ORCID
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix
  /** The family_name of a contributor. */
  surname: Surname
}

/** Container for posted content metadata. */
export interface PostedContent extends Element {
  type: 'element'
  name: 'posted_content'
  attributes: {
    language?: Language
    type: PostedContentType
  }
  children: RequiredMap<PostedContentChildren>[]
}

export interface PostedContentChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptance_date?: AcceptanceDate
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
  group_title?: GroupTitle
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  item_number?: ItemNumber[]
  /** The date a pre-print was posted to a repository. */
  posted_date: PostedDate
  /** FundRef documentation and examples: http://help.crossref.org/#fundref
   *
   * As part of CrossMark metadata, a deposit may contain what is called FundRef info. This details the funding behind a published article. The schema is a sequence of nested <assertion> tags.
   *
   * If a DOI is not participating in CrossMark, FundRef data may be deposited as part of the <journal_article> metadata.
   *
   * Note: Some rules will be enforced by the deposit logic (e.g. not the schema).
   *
   * FundRef data includes one or more award numbers (award_number), each of which may have one or more funders (funder_name). Each funder may have one or more optional identifiers (funder_identifier).
   *
   * A FundRef deposit begins with a <fr:program> tag within the <crossmark> structure (where fr is the namespace for the FundRef program).
   *
   * The <program> element is an implicit funder_group and will typically contain:
   *
   * A) one or more funder_name assertions and an award_number assertion.
   *
   * or
   *
   * B) one or more funder_group assertions where each funder_group should contain one or more funder_name assertions and at least one award_number assertion.
   *
   * Multiple 'award_number's may be included in a single program or fundgroup. Deposits without an award_number will be accepted, but award_number should be provided whenever possible. Items with several award numbers associated with a single funding organization should be grouped together by enclosing the "funder_name", "funder_identifier", and award_number(s) within a "fundgroup" assertion. */
  program?: fr.Program[]
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** The date a pre-print was posted to a repository. */
export interface PostedDate extends DateT {
  type: 'element'
  name: 'posted_date'
}

export interface Prefix extends Element {
  type: 'element'
  name: 'prefix'
  attributes: {
    language?: Language
  }
  /** Element is self-closing */
  children: []
}

/** Container for all information that applies to a non-series conference proceeding. */
export interface ProceedingsMetadata extends Element {
  type: 'element'
  name: 'proceedings_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ProceedingsMetadataChildren>[]
}

export interface ProceedingsMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
  proceedings_subject?: ProceedingsSubject
  /** The undifferentiated title of a conference proceeding. */
  proceedings_title: ProceedingsTitle
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
}

/** Container for all information that applies to a specific conference proceeding that is part of a series. */
export interface ProceedingsSeriesMetadata extends Element {
  type: 'element'
  name: 'proceedings_series_metadata'
  attributes: {
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ProceedingsSeriesMetadataChildren>[]
}

export interface ProceedingsSeriesMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** Container for metadata about a series publication. */
  series_metadata: SeriesMetadata
}

/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
export type ProceedingsSubject = TextNode
/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
export type ProceedingsSubjectPrimitiveType = string

/** The undifferentiated title of a conference proceeding. */
export type ProceedingsTitle = TextNode
/** The undifferentiated title of a conference proceeding. */
export type ProceedingsTitlePrimitiveType = string

export type CollectionProperty =
  | 'list-based'
  | 'country-based'
  | 'crawler-based'
  | 'text-mining'
  | 'unspecified'
  | 'syndication'
  | 'link-header'

/** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI */
export interface Publication extends Element {
  type: 'element'
  name: 'publication'
  children: RequiredMap<PublicationChildren>[]
}

export interface PublicationChildren {
  /** The full title by which a journal is commonly known or cited. */
  full_title: FullTitle[]
}

/** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
export interface PublicationDate extends DateT {
  type: 'element'
  name: 'publication_date'
}

export type StandardMetadataPublicationStatus = 'released' | 'withdrawn'

export type PublicationType = 'abstract_only' | 'full_text' | 'bibliographic_record'

/** A container for information about the publisher of the item being registered */
export interface Publisher extends Element {
  type: 'element'
  name: 'publisher'
  children: RequiredMap<PublisherChildren>[]
}

export interface PublisherChildren {
  /** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
  publisher_name: PublisherName
  /** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
  publisher_place?: PublisherPlace
}

/** A container for item identification numbers set by a publisher. */
export interface PublisherItem extends Element {
  type: 'element'
  name: 'publisher_item'
  children: RequiredMap<PublisherItemChildren>[]
}

export interface PublisherItemChildren {
  /** A public standard identifier that can be used to uniquely identify the item being registered. */
  Identifier?: Identifier[]
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  ItemNumber?: ItemNumber[]
}

/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
export type PublisherName = TextNode
/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
export type PublisherNamePrimitiveType = string

/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
export type PublisherPlace = TextNode
/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
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

export type RegAgency = TextNode

export type ComponentRegAgency = string

/** The organization responsible for the information being registered. */
export type Registrant = TextNode
/** The organization responsible for the information being registered. */
export type RegistrantPrimitiveType = string

/** report-paper is the top level element for deposit of metadata about one or more reports or working papers. */
export interface ReportPaper extends Element {
  type: 'element'
  name: 'report-paper'
  attributes: {
    publication_type: PublicationType
  }
  children: RequiredMap<ReportPaperChildren>[]
}

export interface ReportPaperChildren {
  /** Container for a group of components */
  component_list?: ComponentList
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  content_item?: ContentItem[]
  /** Container for the metadata related to a Technical Report or Working Paper. */
  reportPaper_metadata: ReportPaperMetadata
  /** Container for the metadata related to a Technical Report or Working Paper that is part of a series. */
  reportPaper_series_metadata: ReportPaperSeriesMetadata
}

/** Container for the metadata related to a Technical Report or Working Paper. */
export interface ReportPaperMetadata extends Element {
  type: 'element'
  name: 'report-paper_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ReportPaperMetadataChildren>[]
}

export interface ReportPaperMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approval_date?: ApprovalDate[]
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The contract number under which a report or paper was written. */
  contract_number?: ContractNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scn_policies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Container for the metadata related to a Technical Report or Working Paper that is part of a series. */
export interface ReportPaperSeriesMetadata extends Element {
  type: 'element'
  name: 'report-paper_series_metadata'
  attributes: {
    language?: Language
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ReportPaperSeriesMetadataChildren>[]
}

export interface ReportPaperSeriesMetadataChildren {
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approval_date?: ApprovalDate[]
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The contract number under which a report or paper was written. */
  contract_number?: ContractNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publication_date: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** Container for metadata about a series publication. */
  series_metadata: SeriesMetadata
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

/** The URI associated with a DOI. */
export interface Resource extends ResourceT {
  type: 'element'
  name: 'resource'
  attributes: {
    content_version: ResourceContentVersion
    mime_type?: MimeType
  }
}

/** The date a review was published to a repository. */
export interface ReviewDate extends Element {
  type: 'element'
  name: 'review_date'
  children: RequiredMap<ReviewDateChildren>[]
}

export interface ReviewDateChildren {
  /** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
  day: Day
  /** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range. */
  month: Month
  /** Year of publication. */
  year: Year
}

/** Required attribute. First submission defined as revision round zero */
export type RevisionRound = TextNode<'revision-round'>

/** Running numbers to specify the various reports (ex: RC1 to RC4) */
export type RunningNumber = TextNode<'running_number'>

/** Container for component metadata if the component is being registered after the parent record/DOI is created. */
export interface SaComponent extends Element {
  type: 'element'
  name: 'sa_component'
  attributes: {
    parent_doi: string
  }
  children: RequiredMap<SaComponentChildren>[]
}

export interface SaComponentChildren {
  /** Container for a group of components */
  component_list: ComponentList
}

/** A wrapper for Scholarly Sharing Network (SCN) policy information */
export interface ScnPolicies extends Element {
  type: 'element'
  name: 'scn_policies'
  children: RequiredMap<ScnPoliciesChildren>[]
}

export interface ScnPoliciesChildren {
  /** A group of related SCN policies */
  scn_policy_set?: ScnPolicySet[]
}

/** An individual SCN policy */
export type ScnPolicyRef = TextNode
/** An individual SCN policy */
export type ScnPolicyRefPrimitiveType = string

/** A group of related SCN policies */
export interface ScnPolicySet extends Element {
  type: 'element'
  name: 'scn_policy_set'
  attributes: {
    /** A date, unknown format **/
    start_date?: string
  }
  children: RequiredMap<ScnPolicySetChildren>[]
}

export interface ScnPolicySetChildren {
  /** An individual SCN policy */
  scn_policy_ref?: ScnPolicyRef[]
}

export type Sequence = 'first' | 'additional'

/** Container for metadata about a series publication. */
export interface SeriesMetadata extends Element {
  type: 'element'
  name: 'series_metadata'
  children: RequiredMap<SeriesMetadataChildren>[]
}

export interface SeriesMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The coden assigned to a journal or conference proceedings. */
  coden?: Coden
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The ISSN assigned to the title being registered. */
  issn: Issn[]
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** The series number within a specific published conference discipline. */
  series_number?: SeriesNumber
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** The series number within a specific published conference discipline. */
export type SeriesNumber = TextNode
/** The series number within a specific published conference discipline. */
export type SeriesNumberPrimitiveType = string

/** Book series title in a citation. */
export type SeriesTitle = TextNode<'series_title'>

export type Set = TextNode<'set'>

/** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set. */
export interface SetMetadata extends Element {
  type: 'element'
  name: 'set_metadata'
  children: RequiredMap<SetMetadataChildren>[]
}

export interface SetMetadataChildren {
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doi_data?: DoiData
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
  part_number?: PartNumber
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
export type SpecialNumbering = TextNode
/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
export type SpecialNumberingPrimitiveType = string

export type PeerReviewStage = 'pre-publication' | 'post-publication'

/** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia. */
export interface Standard extends Element {
  type: 'element'
  name: 'standard'
  attributes: {
    publication_type: PublicationType
  }
  children: RequiredMap<StandardChildren>[]
}

export interface StandardChildren {
  /** Container for a group of components */
  component_list?: ComponentList
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  content_item?: ContentItem[]
  /** Container for the metadata related to a Standard that is not part of a series. */
  standard_metadata: StandardMetadata
}

/** Container for the metadata related to a Standard that is not part of a series. */
export interface StandardMetadata extends Element {
  type: 'element'
  name: 'standard_metadata'
  attributes: {
    language?: Language
    publication_status?: StandardMetadataPublicationStatus
    reference_distribution_opts?: ReferenceDistributionOpts
  }
  children: RequiredMap<StandardMetadataChildren>[]
}

export interface StandardMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approval_date?: ApprovalDate
  /** Container element for archive information */
  archive_locations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citation_list?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** A wrapper for designators or other primary identifiers for a standard. */
  Designators: Designators
  /** The container for elements related directly to a DOI. */
  doi_data: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  edition_number?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisher_item?: PublisherItem
  /** A wrapper for standards body information. */
  standards_body: StandardsBody
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** A wrapper for standards body information. */
export interface StandardsBody extends Element {
  type: 'element'
  name: 'standards_body' /** Element is self-closing */
  children: []
}

export type StartDate = TextNode

export type StartDay = TextNode

export type StartMonth = TextNode

/** Basic data types for date parts. */
export type StartYear = TextNode

/** Designator for standard from which the current deposit is adopted. */
export type StdAdoptedFrom = TextNode
/** Designator for standard from which the current deposit is adopted. */
export type StdDesignatorvalueT = string

export interface StdAltAsPublished extends StdDesignatorT {
  type: 'element'
  name: 'std_alt_as_published'
  attributes: {
    approvedMonth?: `${number}`
    approvedYear: string
    Reason: StdAltAsPublishedReason
  }
}

export type StdAltScript = TextNode

/** Designator or other primary identifier for the standard being deposited. */
export interface StdAsPublished extends StdDesignatorT {
  type: 'element'
  name: 'std_as_published'
  attributes: {
    family: string
    set: string
    undated: string
  }
}

export type StdDesignator = TextNode

export interface StdDesignatorT extends Element {
  type: 'element'
  name: string
}

export interface StdDesignatorTChildren {
  std_alt_script?: StdAltScript[]
  std_designator: StdDesignator
  std_variant_form?: StdVariantForm[]
}

/** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem) */
export type StdRevisionOf = TextNode

/** Provides for defining a DOI for a set of standards (sometimes know as truncated form). */
export interface StdSetDesignator extends StdDesignatorT {
  type: 'element'
  name: 'std_set_designator'
  attributes: {
    family: string
  }
}

/** Designator for standard being replaced by the standard being deposited. */
export type StdSupersedes = TextNode

/** Provides for defining a DOI for a group of closely related standard documents (undated form is a stem for any dated form) */
export interface StdUndatedDesignator extends StdDesignatorT {
  type: 'element'
  name: 'std_undated_designator'
  attributes: {
    family: string
    set: string
  }
}

export type StdVariantForm = TextNode

export interface StringName extends Element {
  type: 'element'
  name: 'string-name'
  attributes: {
    language?: Language
    nameStyle: StringNameNameStyle
  }
  children: RequiredMap<StringNameChildren>[]
}

export interface StringNameChildren {
  Degrees?: Degrees[]
  /** A contributor's given name. */
  given_name?: GivenName[]
  prefix?: Prefix[]
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix[]
  /** The family_name of a contributor. */
  surname?: Surname[]
}

/** The sub-title portion of a title. */
export interface Subtitle extends Element {
  type: 'element'
  name: 'subtitle' /** Element is self-closing */
  children: []
}

/** The suffix of an author name, e.g. junior, senior, III. */
export type Suffix = TextNode
/** The suffix of an author name, e.g. junior, senior, III. */
export type SuffixPrimitiveType = string

/** The family_name of a contributor. */
export type Surname = TextNode
/** The family_name of a contributor. */
export type SurnamePrimitiveType = string

/** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
export type Timestamp = TextNode<'timestamp'>

/** The title of the item being registered. */
export interface Title extends Element {
  type: 'element'
  name: 'title' /** Element is self-closing */
  children: []
}

/** A container for the title and original language title elements. */
export interface Titles extends Element {
  type: 'element'
  name: 'titles'
  children: RequiredMap<TitlesChildren>[]
}

export interface TitlesChildren {
  /** The title of an item in its original language if the registration is for a translation of a work. */
  OriginalLanguageTitle?: OriginalLanguageTitle
  /** The sub-title portion of a title. */
  Subtitle?: Subtitle[]
  /** The title of the item being registered. */
  Title: Title
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
 * withdrawal */
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

export type Undated = TextNode<'undated'>

/** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available. */
export interface UnstructuredCitation extends Element {
  type: 'element'
  name: 'unstructured_citation' /** Element is self-closing */
  children: []
}

/** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader’s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc. */
export interface Update extends DoiT {
  type: 'element'
  name: 'update'
  attributes: {
    /** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update. */
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
     * withdrawal */
    type: CmUpdateType
  }
}

/** The date a pre-print was posted to a repository. */
export interface UpdateDate extends DateT {
  type: 'element'
  name: 'update_date'
}

/** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here. */
export interface Updates extends Element {
  type: 'element'
  name: 'updates'
  children: RequiredMap<UpdatesChildren>[]
}

export interface UpdatesChildren {
  /** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader’s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc. */
  Update: Update[]
}

export type Version = TextNode<'version'>

/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
export type Volume = TextNode
/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
export type VolumePrimitiveType = string

/** Book volume title in a citation. */
export type VolumeTitle = TextNode<'volume_title'>

/** Basic data types for date parts. */
export type Year = TextNode
