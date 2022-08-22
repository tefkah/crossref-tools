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
/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
export type AbbrevTitle = TextNode<'abbrev_title'>
type _AbbrevTitle = Primitive._string

/** The date a manuscript was accepted for publication. */
export interface AcceptanceDate extends dateT {
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
    contributorRole: ContributorRole
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
export interface ApprovalDate extends dateT {
  type: 'element'
  name: 'approval_date'
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

/** Used to indicate the designated archiving organization(s) for an item. */
export interface Archive extends Element {
  type: 'element'
  name: 'archive'
  attributes: {
    name: ArchiveName
  }
}

type ArchiveName = 'CLOCKSS' | 'LOCKSS' | 'Portico' | 'KB' | 'Internet Archive' | 'DWT'
interface _ArchiveName extends Primitive._string {
  content: ArchiveName
}

/** An assertion is a piece of custom, non-bibliographic metadata that the publisher is asserting about the content to which the Crossmark refers. */
export interface Assertion extends Element {
  type: 'element'
  name: 'assertion'
  attributes: {
    /** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute. */
    explanation: string
    /** This is the human-readable form of the "groupName" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog. */
    groupLabel: string
    /** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The groupName attribute is the machine-readable value that will be used for grouping such assertions. */
    groupName: string
    href: string
    /** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms) */
    label: string
    /** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name. */
    name: string
    /** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present. */
    order: `${number}`
  }
}

/** content is "Inline" except that anchors shouldn't be nested */
export interface A extends Primitive._string {
  type: 'element'
  name: 'a'
  attributes: {
    href: string
  }
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
  peerReview: PeerReview[]
  /** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print. */
  pendingPublication: PendingPublication[]
  /** Container for posted content metadata. */
  postedContent: PostedContent[]
  /** report-paper is the top level element for deposit of metadata about one or more reports or working papers. */
  reportPaper: ReportPaper[]
  /** Container for component metadata if the component is being registered after the parent record/DOI is created. */
  saComponent: SaComponent[]
  /** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia. */
  standard: Standard[]
}

/** A container for all title-level metadata for a single book that is not part of a series or set. */
export interface BookMetadata extends Element {
  type: 'element'
  name: 'book_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookMetadataChildren>[]
}

export interface BookMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptanceDate?: AcceptanceDate
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** A container for all information that applies to an individual volume of a book series. */
export interface BookSeriesMetadata extends Element {
  type: 'element'
  name: 'book_series_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookSeriesMetadataChildren>[]
}

export interface BookSeriesMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** Container for metadata about a series publication. */
  seriesMetadata: SeriesMetadata
}

/** A container for all information that applies to an individual volume of a book set. */
export interface BookSetMetadata extends Element {
  type: 'element'
  name: 'book_set_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<BookSetMetadataChildren>[]
}

export interface BookSetMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set. */
  setMetadata: SetMetadata
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

/** Container for all information about a single book. */
export interface Book extends Element {
  type: 'element'
  name: 'book'
  attributes: {
    book: BookBook
  }
  children: RequiredMap<BookChildren>[]
}

export interface BookChildren {
  /** A container for all title-level metadata for a single book that is not part of a series or set. */
  bookMetadata: BookMetadata
  /** A container for all information that applies to an individual volume of a book series. */
  bookSeriesMetadata: BookSeriesMetadata
  /** A container for all information that applies to an individual volume of a book set. */
  bookSetMetadata: BookSetMetadata
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  contentItem?: ContentItem[]
}

type BookBook = 'edited_book' | 'monograph' | 'reference' | 'other'
interface _BookBook extends Primitive._string {
  content: BookBook
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
  citation?: Citation[]
}

export interface citationT extends Element {
  type: 'element'
  name: 'citation_t'
}

/** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
 * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/ */
export interface Citation extends citationT {
  type: 'element'
  name: 'citation'
  attributes: {
    key: string
  }
}

export type cmAssertion = TextNode
type _cmAssertion = Primitive._string

export type cmAssertionGroupLabel = TextNode
type _cmAssertionGroupLabel = Primitive._string

export type cmAssertionGroupName = TextNode
type _cmAssertionGroupName = Primitive._string

export type cmAssertionLabel = TextNode
type _cmAssertionLabel = Primitive._string

export type cmAssertionName = TextNode
type _cmAssertionName = Primitive._string

export type cmDomain = TextNode
type _cmDomain = Primitive._string

export type cmUpdate =
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
interface _cmUpdate extends Primitive._string {
  content: cmUpdate
}

/** The coden assigned to a journal or conference proceedings. */
export type Coden = TextNode<'coden'>
type _Coden = Primitive._string

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

type CollectionMultiResolution = 'lock' | 'unlock'
interface _CollectionMultiResolution extends Primitive._string {
  content: CollectionMultiResolution
}

type CollectionProperty =
  | 'list-based'
  | 'country-based'
  | 'crawler-based'
  | 'text-mining'
  | 'unspecified'
  | 'syndication'
  | 'link-header'
interface _CollectionProperty extends Primitive._string {
  content: CollectionProperty
}

/** Statement of competing interest supplied by a review author during the review process. */
export interface CompetingInterestStatement extends Element {
  type: 'element'
  name: 'competing_interest_statement'
  attributes: {
    language?: Language
  }
}

/** Container for a group of components */
export interface ComponentList extends Element {
  type: 'element'
  name: 'component_list'
  children: RequiredMap<ComponentListChildren>[]
}

export interface ComponentListChildren {
  /** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components. */
  component?: Component[]
}

/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
export type ComponentNumber = TextNode<'component_number'>
type _ComponentNumber = Primitive._string

/** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components. */
export interface Component extends Element {
  type: 'element'
  name: 'component'
  attributes: {
    componentSize: `${number}`
    language?: Language
    parentRelation: ComponentParentRelation
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
  doiData: DoiData
  /** A narrative description of a component's file format and/or file extension. */
  format?: Format
  /** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
  program?: ai.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate?: PublicationDate
  /** A container for the title and original language title elements. */
  titles?: Titles
}

export type ComponentComponentSize = TextNode<'component_size'>
type _ComponentComponentSize = Primitive._number

type ComponentParentRelation = 'isPartOf' | 'isReferencedBy' | 'isRequiredBy' | 'isTranslationOf'
interface _ComponentParentRelation extends Primitive._string {
  content: ComponentParentRelation
}

export type ComponentRegAgency = TextNode<'reg-agency'>
type _ComponentRegAgency = Primitive._string

/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
export type ConferenceAcronym = TextNode<'conference_acronym'>
type _ConferenceAcronym = Primitive._string

export type conferenceDateT = TextNode
type _conferenceDateT = Primitive._string

/** The start and end dates of a conference event. conference_date may be used in three ways:
 * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
 * 2. If publishers have parsed date values, provide them in the attributes.
 * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
 * Jan. 15-17, 1997 */
export interface ConferenceDate extends conferenceDateT {
  type: 'element'
  name: 'conference_date'
  attributes: {
    endDay?: `${number}`
    endMonth?: `${number}`
    endYear?: `${number}`
    startDay?: `${number}`
    startMonth?: `${number}`
    startYear?: `${number}`
  }
}

/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
export type ConferenceLocation = TextNode<'conference_location'>
type _ConferenceLocation = Primitive._string

/** The official name of the conference, excluding numbers commonly provided in conference */
export type ConferenceName = TextNode<'conference_name'>
type _ConferenceName = Primitive._string

/** The number of a conference. conference_number should include only the number of the conference without any extra text */
export type ConferenceNumber = TextNode<'conference_number'>
type _ConferenceNumber = Primitive._string

/** Container for all information about a single conference paper. */
export interface ConferencePaper extends Element {
  type: 'element'
  name: 'conference_paper'
  attributes: {
    language?: Language
    publication: Publication
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ConferencePaperChildren>[]
}

export interface ConferencePaperChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptanceDate?: AcceptanceDate
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container for a group of components */
  componentList?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate?: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
export type ConferenceSponsor = TextNode<'conference_sponsor'>
type _ConferenceSponsor = Primitive._string

/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
export type ConferenceTheme = TextNode<'conference_theme'>
type _ConferenceTheme = Primitive._string

/** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element. */
export interface Conference extends Element {
  type: 'element'
  name: 'conference'
  children: RequiredMap<ConferenceChildren>[]
}

export interface ConferenceChildren {
  /** Container for all information about a single conference paper. */
  conferencePaper?: ConferencePaper[]
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata. */
  eventMetadata: EventMetadata
  /** Container for all information that applies to a non-series conference proceeding. */
  proceedingsMetadata: ProceedingsMetadata
  /** Container for all information that applies to a specific conference proceeding that is part of a series. */
  proceedingsSeriesMetadata: ProceedingsSeriesMetadata
}

/** The date a piece of content was created. */
export interface ContentDate extends dateT {
  type: 'element'
  name: 'content_date'
}

/** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
export interface ContentItem extends Element {
  type: 'element'
  name: 'content_item'
  attributes: {
    component: ContentItemComponent
    language?: Language
    levelSequenceNumber: `${number}`
    publication: Publication
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ContentItemChildren>[]
}

export interface ContentItemChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptanceDate?: AcceptanceDate
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container for a group of components */
  componentList?: ComponentList
  /** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
  componentNumber?: ComponentNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate?: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles?: Titles
}

type ContentItemComponent = 'chapter' | 'section' | 'part' | 'track' | 'reference_entry' | 'other'
interface _ContentItemComponent extends Primitive._string {
  content: ContentItemComponent
}

export type ContentItemLevelSequenceNumber = TextNode<'level_sequence_number'>
type _ContentItemLevelSequenceNumber = Primitive._number

/** The contract number under which a report or paper was written. */
export type ContractNumber = TextNode<'contract_number'>
type _ContractNumber = Primitive._string

type ContributorRole =
  | 'author'
  | 'editor'
  | 'chair'
  | 'reviewer'
  | 'review-assistant'
  | 'stats-reviewer'
  | 'reviewer-external'
  | 'reader'
  | 'translator'
interface _ContributorRole extends Primitive._string {
  content: ContributorRole
}

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
  personName: PersonName[]
}

/** The date a database or dataset item was created. */
export interface CreationDate extends dateT {
  type: 'element'
  name: 'creation_date'
}

/** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content */
export interface CrossmarkDomains extends Element {
  type: 'element'
  name: 'crossmark_domains'
  children: RequiredMap<CrossmarkDomainsChildren>[]
}

export interface CrossmarkDomainsChildren {
  /** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain. */
  crossmarkDomain: CrossmarkDomain[]
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

/** Container element for CrossMark data. */
export interface Crossmark extends Element {
  type: 'element'
  name: 'crossmark'
  children: RequiredMap<CrossmarkChildren>[]
}

export interface CrossmarkChildren {
  crossmarkDomainExclusive?: CrossmarkDomainExclusive
  /** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content */
  crossmarkDomains?: CrossmarkDomains[]
  /** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications. */
  crossmarkPolicy?: CrossmarkPolicy
  crossmarkVersion?: CrossmarkVersion
  /** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document. */
  customMetadata?: CustomMetadata
  /** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here. */
  updates?: Updates
}

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

/** Container for key dates in the life of a database or dataset. */
export interface DatabaseDate extends Element {
  type: 'element'
  name: 'database_date'
  children: RequiredMap<DatabaseDateChildren>[]
}

export interface DatabaseDateChildren {
  /** The date a database or dataset item was created. */
  creationDate?: CreationDate
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate?: PublicationDate
  /** The date a pre-print was posted to a repository. */
  updateDate?: UpdateDate
}

/** database_metadata contains metadata about the database. */
export interface DatabaseMetadata extends Element {
  type: 'element'
  name: 'database_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<DatabaseMetadataChildren>[]
}

export interface DatabaseMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container for key dates in the life of a database or dataset. */
  databaseDate?: DatabaseDate[]
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description?: Description
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** database is the top level element for deposit of metadata about one or more datasets or records in a database. */
export interface Database extends Element {
  type: 'element'
  name: 'database'
  children: RequiredMap<DatabaseChildren>[]
}

export interface DatabaseChildren {
  /** Container for a group of components */
  componentList?: ComponentList
  /** database_metadata contains metadata about the database. */
  databaseMetadata: DatabaseMetadata
  /** dataset is used to capture information about one or more database records or collections. */
  dataset?: Dataset[]
}

/** dataset is used to capture information about one or more database records or collections. */
export interface Dataset extends Element {
  type: 'element'
  name: 'dataset'
  attributes: {
    dataset: DatasetDataset
  }
  children: RequiredMap<DatasetChildren>[]
}

export interface DatasetChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container for a group of components */
  componentList?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** Container for key dates in the life of a database or dataset. */
  databaseDate?: DatabaseDate[]
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description?: Description
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** A narrative description of a component's file format and/or file extension. */
  format?: Format
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A container for the title and original language title elements. */
  titles?: Titles
}

type DatasetDataset = 'record' | 'collection' | 'crossmark_policy' | 'other'
interface _DatasetDataset extends Primitive._string {
  content: DatasetDataset
}

export interface dateT extends Element {
  type: 'element'
  name: 'date_t'
  attributes: {
    media: dateTMedia
  }
  children: RequiredMap<dateTChildren>[]
}

export interface dateTChildren {
  /** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
  day?: Day
  /** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range. */
  month?: Month
  /** Year of publication. */
  year: Year
}

type dateTMedia = 'online' | 'print' | 'other'
interface _dateTMedia extends Primitive._string {
  content: dateTMedia
}

export interface Degrees extends Element {
  type: 'element'
  name: 'degrees'
  attributes: {
    language?: Language
  }
}

/** The degree(s) awarded for a dissertation. */
export type Degree = TextNode<'degree'>
type _Degree = Primitive._string

/** Name of the organization registering the DOIs. */
export type DepositorName = TextNode<'depositor_name'>
type _DepositorName = Primitive._string

/** Information about the organization submitting DOI metadata to Crossref */
export interface Depositor extends Element {
  type: 'element'
  name: 'depositor'
  children: RequiredMap<DepositorChildren>[]
}

export interface DepositorChildren {
  /** Name of the organization registering the DOIs. */
  depositorName: DepositorName
  /** e-mail address to which batch success and/or error messages are sent. */
  emailAddress: EmailAddress
}

/** A narrative description of a file (e.g. a figure caption or video description). */
export interface Description extends Element {
  type: 'element'
  name: 'description'
  attributes: {
    language?: Language
  }
}

/** A wrapper for designators or other primary identifiers for a standard. */
export interface Designators extends Element {
  type: 'element'
  name: 'designators'
  children: RequiredMap<DesignatorsChildren>[]
}

export interface DesignatorsChildren {
  /** Designator for standard from which the current deposit is adopted. */
  stdAdoptedFrom?: StdAdoptedFrom[]
  /** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem) */
  stdRevisionOf?: StdRevisionOf[]
  /** Designator for standard being replaced by the standard being deposited. */
  stdSupersedes?: StdSupersedes[]
}

/** dissertation is the top level element for deposit of metadata about one or more dissertations. */
export interface Dissertation extends Element {
  type: 'element'
  name: 'dissertation'
  attributes: {
    language?: Language
    publication: Publication
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<DissertationChildren>[]
}

export interface DissertationChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approvalDate: ApprovalDate[]
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container for a group of components */
  componentList?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The degree(s) awarded for a dissertation. */
  degree?: Degree[]
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** The name of a person (as opposed to an organization) that contributed to an item. */
  personName: PersonName[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Publisher generated ID that uniquely identifies the DOI submission batch. */
export type DoiBatchId = TextNode<'doi_batch_id'>
type _DoiBatchId = Primitive._string

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
  collection?: Collection[]
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** The URI associated with a DOI. */
  resource: Resource
  /** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
  timestamp?: Timestamp
}

export type doiT = TextNode
type _doiT = Primitive._string

/** DOI for an entity being registered with Crossref. */
export type Doi = TextNode<'doi'>
type _Doi = _doiT

/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
export type EditionNumber = TextNode<'edition_number'>
type _EditionNumber = Primitive._string

/** e-mail address to which batch success and/or error messages are sent. */
export type EmailAddress = TextNode<'email_address'>
type _EmailAddress = Primitive._string

/** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata. */
export interface EventMetadata extends Element {
  type: 'element'
  name: 'event_metadata'
  children: RequiredMap<EventMetadataChildren>[]
}

export interface EventMetadataChildren {
  /** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
  conferenceAcronym?: ConferenceAcronym
  /** The start and end dates of a conference event. conference_date may be used in three ways:
   * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
   * 2. If publishers have parsed date values, provide them in the attributes.
   * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
   * Jan. 15-17, 1997 */
  conferenceDate?: ConferenceDate
  /** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
  conferenceLocation?: ConferenceLocation
  /** The official name of the conference, excluding numbers commonly provided in conference */
  conferenceName: ConferenceName
  /** The number of a conference. conference_number should include only the number of the conference without any extra text */
  conferenceNumber?: ConferenceNumber
  /** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
  conferenceSponsor?: ConferenceSponsor[]
  /** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
  conferenceTheme?: ConferenceTheme
}

/** First page number of an item. */
export type FirstPage = TextNode<'first_page'>
type _FirstPage = Primitive._string

export type formatT = TextNode
type _formatT = Primitive._string

/** A narrative description of a component's file format and/or file extension. */
export interface Format extends formatT {
  type: 'element'
  name: 'format'
  attributes: {
    mime?: Mime
  }
}

/** The full title by which a journal is commonly known or cited. */
export type FullTitle = TextNode<'full_title'>
type _FullTitle = Primitive._string

/** A contributor's given name. */
export type GivenName = TextNode<'given_name'>
type _GivenName = Primitive._string

/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
export type GroupTitle = TextNode<'group_title'>
type _GroupTitle = Primitive._string

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
  doiBatchId: DoiBatchId
  /** The organization responsible for the information being registered. */
  registrant: Registrant
  /** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
  timestamp: Timestamp
}

export type identifierT = TextNode
type _identifierT = Primitive._string

/** A public standard identifier that can be used to uniquely identify the item being registered. */
export interface Identifier extends identifierT {
  type: 'element'
  name: 'identifier'
  attributes: {
    id: IdentifierId
  }
}

type IdentifierId =
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
interface _IdentifierId extends Primitive._string {
  content: IdentifierId
}

/** The acronym of the institution. */
export type InstitutionAcronym = TextNode<'institution_acronym'>
type _InstitutionAcronym = Primitive._string

/** The department within an institution. */
export type InstitutionDepartment = TextNode<'institution_department'>
type _InstitutionDepartment = Primitive._string

/** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI */
export interface InstitutionId extends PID {
  type: 'element'
  name: 'institution_id'
  attributes: {
    type: InstitutionId
  }
}

type InstitutionId = 'ror' | 'isni' | 'wikidata'
interface _InstitutionId extends Primitive._string {
  content: InstitutionId
}

/** The full name of an institution. */
export type InstitutionName = TextNode<'institution_name'>
type _InstitutionName = Primitive._string

/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
export type InstitutionPlace = TextNode<'institution_place'>
type _InstitutionPlace = Primitive._string

/** Container element for information about an institution or organization associated with an item. */
export interface Institution extends Element {
  type: 'element'
  name: 'institution'
  children: RequiredMap<InstitutionChildren>[]
}

export interface InstitutionChildren {
  /** The acronym of the institution. */
  institutionAcronym?: InstitutionAcronym[]
  /** The department within an institution. */
  institutionDepartment?: InstitutionDepartment[]
  /** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI */
  institutionId: InstitutionId[]
  /** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
  institutionPlace?: InstitutionPlace[]
}

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
  b?: xrefFaces[]
  i?: xrefFaces[]
  u?: xrefFaces[]
}

export type isbnT = TextNode
type _isbnT = Primitive._string

/** The ISBN assigned to an entity. */
export interface Isbn extends isbnT {
  type: 'element'
  name: 'isbn'
  attributes: {
    media: Media
  }
}

export type issnT = TextNode
type _issnT = Primitive._string

/** The ISSN assigned to the title being registered. */
export interface Issn extends issnT {
  type: 'element'
  name: 'issn'
  attributes: {
    media: Media
  }
}

/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
export type Issue = TextNode<'issue'>
type _Issue = Primitive._string

export type itemNumberT = TextNode
type _itemNumberT = Primitive._string

/** A publisher-assigned number that uniquely identifies the item being registered. */
export interface ItemNumber extends itemNumberT {
  type: 'element'
  name: 'item_number'
  attributes: {
    itemNumber?: string
  }
}

/** A container used to associate a URI with the DOI being registered. */
export interface Item extends Element {
  type: 'element'
  name: 'item'
  attributes: {
    country?: ItemCountry
    crawler?: ItemCrawler
    label?: string
    linkHeaderRelationship: ItemLinkHeaderRelationship
  }
  children: RequiredMap<ItemChildren>[]
}

export interface ItemChildren {
  /** DOI for an entity being registered with Crossref. */
  doi?: Doi
  /** The URI associated with a DOI. */
  resource?: Resource
}

type ItemCountry =
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
interface _ItemCountry extends Primitive._string {
  content: ItemCountry
}

type ItemCrawler = 'google' | 'msn' | 'scirus' | 'yahoo' | 'iParadigms'
interface _ItemCrawler extends Primitive._string {
  content: ItemCrawler
}

export type ItemLabel = TextNode<'label'>
type _ItemLabel = Primitive._string

type ItemLinkHeaderRelationship = 'dul'
interface _ItemLinkHeaderRelationship extends Primitive._string {
  content: ItemLinkHeaderRelationship
}

/** Container for all information about a single journal article. */
export interface JournalArticle extends Element {
  type: 'element'
  name: 'journal_article'
  attributes: {
    language?: Language
    publication: Publication
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<JournalArticleChildren>[]
}

export interface JournalArticleChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptanceDate?: AcceptanceDate
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** Container for a group of components */
  componentList?: ComponentList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** The container for information about page ranges. */
  pages?: Pages
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
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
  archiveLocations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
  issue?: Issue
  /** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume. */
  journalVolume?: JournalVolume
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
  specialNumbering?: SpecialNumbering
  /** A container for the title and original language title elements. */
  titles?: Titles
}

/** Container for metadata that defines a journal. */
export interface JournalMetadata extends Element {
  type: 'element'
  name: 'journal_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<JournalMetadataChildren>[]
}

export interface JournalMetadataChildren {
  /** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
  abbrevTitle?: AbbrevTitle[]
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The coden assigned to a journal or conference proceedings. */
  coden?: Coden
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The full title by which a journal is commonly known or cited. */
  fullTitle: FullTitle[]
  /** The ISSN assigned to the title being registered. */
  issn?: Issn[]
}

/** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume. */
export interface JournalVolume extends Element {
  type: 'element'
  name: 'journal_volume'
  children: RequiredMap<JournalVolumeChildren>[]
}

export interface JournalVolumeChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

/** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file. */
export interface Journal extends Element {
  type: 'element'
  name: 'journal'
  children: RequiredMap<JournalChildren>[]
}

export interface JournalChildren {
  /** Container for all information about a single journal article. */
  journalArticle?: JournalArticle[]
  /** Container for metadata that defines a single issue of a journal. */
  journalIssue?: JournalIssue
  /** Container for metadata that defines a journal. */
  journalMetadata: JournalMetadata
}

export type Key = TextNode<'key'>
type _Key = Primitive._string

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

/** Last page number of an item. */
export type LastPage = TextNode<'last_page'>
type _LastPage = Primitive._string

type Media = 'print' | 'electronic'
interface _Media extends Primitive._string {
  content: Media
}

type Mime =
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
interface _Mime extends Primitive._string {
  content: Mime
}

type NameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'
interface _NameStyle extends Primitive._string {
  content: NameStyle
}

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
  givenName: GivenName
  prefix?: Prefix
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix
}

type NameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'
interface _NameNameStyle extends Primitive._string {
  content: NameNameStyle
}

/** Identifies books or conference proceedings that have no ISBN assigned. */
export interface Noisbn extends Element {
  type: 'element'
  name: 'noisbn'
  attributes: {
    reason: NoisbnReason
  }
}

type NoisbnReason = 'archive_volume' | 'monograph' | 'simple_series'
interface _NoisbnReason extends Primitive._string {
  content: NoisbnReason
}

export type orcidT = TextNode
type _orcidT = Primitive._string

/** The ORCID iD for an author. */
export interface ORCID extends orcidT {
  type: 'element'
  name: 'ORCID'
  attributes: {
    authenticated: `${boolean}`
  }
}

export type organizationT = TextNode
type _organizationT = Primitive._string

/** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors. */
export interface Organization extends organizationT {
  type: 'element'
  name: 'organization'
  attributes: {
    contributorRole: ContributorRole
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
}

/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
export type OtherPages = TextNode<'other_pages'>
type _OtherPages = Primitive._string

/** The container for information about page ranges. */
export interface Pages extends Element {
  type: 'element'
  name: 'pages'
  children: RequiredMap<PagesChildren>[]
}

export interface PagesChildren {
  /** First page number of an item. */
  firstPage: FirstPage
  /** Last page number of an item. */
  lastPage?: LastPage
  /** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
  otherPages?: OtherPages
}

/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
export type PartNumber = TextNode<'part_number'>
type _PartNumber = Primitive._string

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
    type?: PeerReview
  }
  children: RequiredMap<PeerReviewChildren>[]
}

export interface PeerReviewChildren {
  /** Statement of competing interest supplied by a review author during the review process. */
  competingInterestStatement?: CompetingInterestStatement
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Accommodates deposit of license metadata. The license_ref value will be a URL. Values for the "applies_to" attribute are vor (version of record),am (accepted manuscript), tdm (text and data mining), and stm-asf (STM Article Sharing Framework license). */
  program: ai.Program[]
  /** The date a review was published to a repository. */
  reviewDate: ReviewDate
  /** Running numbers to specify the various reports (ex: RC1 to RC4) */
  runningNumber?: RunningNumber
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

type PeerReviewRecommendation =
  | 'major-revision'
  | 'minor-revision'
  | 'reject'
  | 'reject-with-resubmit'
  | 'accept'
  | 'accept-with-reservation'
interface _PeerReviewRecommendation extends Primitive._string {
  content: PeerReviewRecommendation
}

type PeerReviewStage = 'pre-publication' | 'post-publication'
interface _PeerReviewStage extends Primitive._string {
  content: PeerReviewStage
}

type PeerReview =
  | 'referee-report'
  | 'editor-report'
  | 'author-comment'
  | 'community-comment'
  | 'manuscript'
  | 'aggregate'
  | 'recommendation'
interface _PeerReview extends Primitive._string {
  content: PeerReview
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
  acceptanceDate: AcceptanceDate
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** Member's custom statement of intent to publish content for which a pending publication DOI has been created */
  intentStatement?: IntentStatement
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  itemNumber?: ItemNumber[]
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
    contributorRole: ContributorRole
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
  givenName?: GivenName
  /** The ORCID iD for an author. */
  ORCID?: ORCID
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix
  /** The family_name of a contributor. */
  surname: Surname
}

export type PID = TextNode
type _PID = Primitive._string

/** Container for posted content metadata. */
export interface PostedContent extends Element {
  type: 'element'
  name: 'posted_content'
  attributes: {
    language?: Language
    type: PostedContent
  }
  children: RequiredMap<PostedContentChildren>[]
}

export interface PostedContentChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date a manuscript was accepted for publication. */
  acceptanceDate?: AcceptanceDate
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
  groupTitle?: GroupTitle
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  itemNumber?: ItemNumber[]
  /** The date a pre-print was posted to a repository. */
  postedDate: PostedDate
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
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

type PostedContent =
  | 'preprint'
  | 'working_paper'
  | 'letter'
  | 'dissertation'
  | 'report'
  | 'review'
  | 'other'
interface _PostedContent extends Primitive._string {
  content: PostedContent
}

/** The date a pre-print was posted to a repository. */
export interface PostedDate extends dateT {
  type: 'element'
  name: 'posted_date'
}

export interface Prefix extends Element {
  type: 'element'
  name: 'prefix'
  attributes: {
    language?: Language
  }
}

/** Container for all information that applies to a non-series conference proceeding. */
export interface ProceedingsMetadata extends Element {
  type: 'element'
  name: 'proceedings_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ProceedingsMetadataChildren>[]
}

export interface ProceedingsMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
  proceedingsSubject?: ProceedingsSubject
  /** The undifferentiated title of a conference proceeding. */
  proceedingsTitle: ProceedingsTitle
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
}

/** Container for all information that applies to a specific conference proceeding that is part of a series. */
export interface ProceedingsSeriesMetadata extends Element {
  type: 'element'
  name: 'proceedings_series_metadata'
  attributes: {
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ProceedingsSeriesMetadataChildren>[]
}

export interface ProceedingsSeriesMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** Container for metadata about a series publication. */
  seriesMetadata: SeriesMetadata
}

/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
export type ProceedingsSubject = TextNode<'proceedings_subject'>
type _ProceedingsSubject = Primitive._string

/** The undifferentiated title of a conference proceeding. */
export type ProceedingsTitle = TextNode<'proceedings_title'>
type _ProceedingsTitle = Primitive._string

/** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
export interface PublicationDate extends dateT {
  type: 'element'
  name: 'publication_date'
}

type Publication = 'abstract_only' | 'full_text' | 'bibliographic_record'
interface _Publication extends Primitive._string {
  content: Publication
}

/** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI */
export interface Publication extends Element {
  type: 'element'
  name: 'publication'
  children: RequiredMap<PublicationChildren>[]
}

export interface PublicationChildren {
  /** The full title by which a journal is commonly known or cited. */
  fullTitle: FullTitle[]
}

/** A container for item identification numbers set by a publisher. */
export interface PublisherItem extends Element {
  type: 'element'
  name: 'publisher_item'
  children: RequiredMap<PublisherItemChildren>[]
}

export interface PublisherItemChildren {
  /** A public standard identifier that can be used to uniquely identify the item being registered. */
  identifier?: Identifier[]
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  itemNumber?: ItemNumber[]
}

/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
export type PublisherName = TextNode<'publisher_name'>
type _PublisherName = Primitive._string

/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
export type PublisherPlace = TextNode<'publisher_place'>
type _PublisherPlace = Primitive._string

/** A container for information about the publisher of the item being registered */
export interface Publisher extends Element {
  type: 'element'
  name: 'publisher'
  children: RequiredMap<PublisherChildren>[]
}

export interface PublisherChildren {
  /** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
  publisherName: PublisherName
  /** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
  publisherPlace?: PublisherPlace
}

type ReferenceDistributionOpts = 'none' | 'query' | 'any'
interface _ReferenceDistributionOpts extends Primitive._string {
  content: ReferenceDistributionOpts
}

/** The organization responsible for the information being registered. */
export type Registrant = TextNode<'registrant'>
type _Registrant = Primitive._string

/** Container for the metadata related to a Technical Report or Working Paper. */
export interface ReportPaperMetadata extends Element {
  type: 'element'
  name: 'report-paper_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ReportPaperMetadataChildren>[]
}

export interface ReportPaperMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approvalDate?: ApprovalDate[]
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The contract number under which a report or paper was written. */
  contractNumber?: ContractNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber?: EditionNumber
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies?: ScnPolicies
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Container for the metadata related to a Technical Report or Working Paper that is part of a series. */
export interface ReportPaperSeriesMetadata extends Element {
  type: 'element'
  name: 'report-paper_series_metadata'
  attributes: {
    language?: Language
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<ReportPaperSeriesMetadataChildren>[]
}

export interface ReportPaperSeriesMetadataChildren {
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approvalDate?: ApprovalDate[]
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The contract number under which a report or paper was written. */
  contractNumber?: ContractNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber?: EditionNumber
  /** Container element for information about an institution or organization associated with an item. */
  institution?: Institution[]
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate[]
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** Container for metadata about a series publication. */
  seriesMetadata: SeriesMetadata
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
}

/** report-paper is the top level element for deposit of metadata about one or more reports or working papers. */
export interface ReportPaper extends Element {
  type: 'element'
  name: 'report-paper'
  attributes: {
    publication: Publication
  }
  children: RequiredMap<ReportPaperChildren>[]
}

export interface ReportPaperChildren {
  /** Container for a group of components */
  componentList?: ComponentList
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  contentItem?: ContentItem[]
  /** Container for the metadata related to a Technical Report or Working Paper. */
  reportPaperMetadata: ReportPaperMetadata
  /** Container for the metadata related to a Technical Report or Working Paper that is part of a series. */
  reportPaperSeriesMetadata: ReportPaperSeriesMetadata
}

export type resourceT = TextNode
type _resourceT = Primitive._string

/** The URI associated with a DOI. */
export interface Resource extends resourceT {
  type: 'element'
  name: 'resource'
  attributes: {
    contentVersion: ResourceContentVersion
    mime?: Mime
  }
}

type ResourceContentVersion = 'vor' | 'am'
interface _ResourceContentVersion extends Primitive._string {
  content: ResourceContentVersion
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

/** Container for component metadata if the component is being registered after the parent record/DOI is created. */
export interface SaComponent extends Element {
  type: 'element'
  name: 'sa_component'
  attributes: {
    parentDoi: string
  }
  children: RequiredMap<SaComponentChildren>[]
}

export interface SaComponentChildren {
  /** Container for a group of components */
  componentList: ComponentList
}

export type SaComponentParentDoi = TextNode<'parent_doi'>
type _SaComponentParentDoi = Primitive._string

/** A wrapper for Scholarly Sharing Network (SCN) policy information */
export interface ScnPolicies extends Element {
  type: 'element'
  name: 'scn_policies'
  children: RequiredMap<ScnPoliciesChildren>[]
}

export interface ScnPoliciesChildren {
  /** A group of related SCN policies */
  scnPolicySet?: ScnPolicySet[]
}

/** An individual SCN policy */
export type ScnPolicyRef = TextNode<'scn_policy_ref'>
type _ScnPolicyRef = _resourceT

/** A group of related SCN policies */
export interface ScnPolicySet extends Element {
  type: 'element'
  name: 'scn_policy_set'
  attributes: {
    startDate?: Date
  }
  children: RequiredMap<ScnPolicySetChildren>[]
}

export interface ScnPolicySetChildren {
  /** An individual SCN policy */
  scnPolicyRef?: ScnPolicyRef[]
}

type Sequence = 'first' | 'additional'
interface _Sequence extends Primitive._string {
  content: Sequence
}

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
  archiveLocations?: ArchiveLocations
  /** The coden assigned to a journal or conference proceedings. */
  coden?: Coden
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The ISSN assigned to the title being registered. */
  issn: Issn[]
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** The series number within a specific published conference discipline. */
  seriesNumber?: SeriesNumber
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** The series number within a specific published conference discipline. */
export type SeriesNumber = TextNode<'series_number'>
type _SeriesNumber = Primitive._string

/** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set. */
export interface SetMetadata extends Element {
  type: 'element'
  name: 'set_metadata'
  children: RequiredMap<SetMetadataChildren>[]
}

export interface SetMetadataChildren {
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** The container for elements related directly to a DOI. */
  doiData?: DoiData
  /** The ISBN assigned to an entity. */
  isbn: Isbn[]
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
  partNumber?: PartNumber
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A container for the title and original language title elements. */
  titles: Titles
}

/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
export type SpecialNumbering = TextNode<'special_numbering'>
type _SpecialNumbering = Primitive._string

/** Container for the metadata related to a Standard that is not part of a series. */
export interface StandardMetadata extends Element {
  type: 'element'
  name: 'standard_metadata'
  attributes: {
    language?: Language
    publicationStatus?: StandardMetadataPublicationStatus
    referenceDistributionOpts?: ReferenceDistributionOpts
  }
  children: RequiredMap<StandardMetadataChildren>[]
}

export interface StandardMetadataChildren {
  /** Abstract */
  abstract?: jats.Abstract[]
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approvalDate?: ApprovalDate
  /** Container element for archive information */
  archiveLocations?: ArchiveLocations
  /** A list of articles, books, and other content cited by the item being registered */
  citationList?: CitationList
  /** The container for all who contributed to authoring or editing an item. */
  contributors?: Contributors
  /** Container element for CrossMark data. */
  crossmark?: Crossmark
  /** A wrapper for designators or other primary identifiers for a standard. */
  designators: Designators
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber?: EditionNumber
  /** The ISBN assigned to an entity. */
  isbn?: Isbn[]
  /** Wrapper element for relationship metadata */
  program?: rel.Program
  /** A container for information about the publisher of the item being registered */
  publisher?: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem?: PublisherItem
  /** A wrapper for standards body information. */
  standardsBody: StandardsBody
  /** A container for the title and original language title elements. */
  titles: Titles
}

type StandardMetadataPublicationStatus = 'released' | 'withdrawn'
interface _StandardMetadataPublicationStatus extends Primitive._string {
  content: StandardMetadataPublicationStatus
}

/** A wrapper for standards body information. */
export interface StandardsBody extends Element {
  type: 'element'
  name: 'standards_body'
}

/** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia. */
export interface Standard extends Element {
  type: 'element'
  name: 'standard'
  attributes: {
    publication: Publication
  }
  children: RequiredMap<StandardChildren>[]
}

export interface StandardChildren {
  /** Container for a group of components */
  componentList?: ComponentList
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  contentItem?: ContentItem[]
  /** Container for the metadata related to a Standard that is not part of a series. */
  standardMetadata: StandardMetadata
}

export interface StdAltAsPublished extends stdDesignatorT {
  type: 'element'
  name: 'std_alt_as_published'
  attributes: {
    approvedMonth?: `${number}`
    approvedYear: string
    reason: StdAltAsPublishedReason
  }
}

export type StdAltAsPublishedApprovedMonth = TextNode<'approvedMonth'>
type _StdAltAsPublishedApprovedMonth = Primitive._number

export type StdAltAsPublishedApprovedYear = TextNode<'approvedYear'>
type _StdAltAsPublishedApprovedYear = Primitive._string

type StdAltAsPublishedReason = Type[]

/** Designator or other primary identifier for the standard being deposited. */
export interface StdAsPublished extends stdDesignatorT {
  type: 'element'
  name: 'std_as_published'
  attributes: {
    family: string
    set: string
    undated: string
  }
}

export interface stdDesignatorT extends Element {
  type: 'element'
  name: 'std_designator_t'
  children: RequiredMap<stdDesignatorTChildren>[]
}

export interface stdDesignatorTChildren {
  stdAltScript?: StdAltScript[]
  stdDesignator: StdDesignator
  stdVariantForm?: StdVariantForm[]
}

export type stdDesignatorvalueT = TextNode
type _stdDesignatorvalueT = Primitive._string

/** Provides for defining a DOI for a set of standards (sometimes know as truncated form). */
export interface StdSetDesignator extends stdDesignatorT {
  type: 'element'
  name: 'std_set_designator'
  attributes: {
    family: string
  }
}

/** Provides for defining a DOI for a group of closely related standard documents (undated form is a stem for any dated form) */
export interface StdUndatedDesignator extends stdDesignatorT {
  type: 'element'
  name: 'std_undated_designator'
  attributes: {
    family: string
    set: string
  }
}

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
  degrees?: Degrees[]
  /** A contributor's given name. */
  givenName?: GivenName[]
  prefix?: Prefix[]
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix?: Suffix[]
  /** The family_name of a contributor. */
  surname?: Surname[]
}

type StringNameNameStyle = 'western' | 'eastern' | 'islensk' | 'given-only'
interface _StringNameNameStyle extends Primitive._string {
  content: StringNameNameStyle
}

/** The sub-title portion of a title. */
export interface Subtitle extends Element {
  type: 'element'
  name: 'subtitle'
}

/** The suffix of an author name, e.g. junior, senior, III. */
export type Suffix = TextNode<'suffix'>
type _Suffix = Primitive._string

/** The family_name of a contributor. */
export type Surname = TextNode<'surname'>
type _Surname = Primitive._string

/** A container for the title and original language title elements. */
export interface Titles extends Element {
  type: 'element'
  name: 'titles'
  children: RequiredMap<TitlesChildren>[]
}

export interface TitlesChildren {
  /** The title of an item in its original language if the registration is for a translation of a work. */
  originalLanguageTitle?: OriginalLanguageTitle
  /** The sub-title portion of a title. */
  subtitle?: Subtitle[]
  /** The title of the item being registered. */
  title: Title
}

/** The title of the item being registered. */
export interface Title extends Element {
  type: 'element'
  name: 'title'
}

type Type = 'editorial' | 'revision' | 'reapproval' | 'correction' | 'amendment'
interface _Type extends Primitive._string {
  content: Type
}

/** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available. */
export interface UnstructuredCitation extends Element {
  type: 'element'
  name: 'unstructured_citation'
}

/** The date a pre-print was posted to a repository. */
export interface UpdateDate extends dateT {
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
  update: Update[]
}

/** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader’s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc. */
export interface Update extends doiT {
  type: 'element'
  name: 'update'
  attributes: {
    /** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update. */
    date: Date
    /** This attribute should be used to list the update type. Allowed update types are:
     * addendum
     * clarification
     * correction
     * corrigendum
     * erratum
     * expressionOfConcern
     * newEdition
     * newVersion
     * partialRetraction
     * removal
     * retraction
     * withdrawal */
    type: cmUpdate
  }
}

/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
export type Volume = TextNode<'volume'>
type _Volume = Primitive._string

export type xrefDay = TextNode<'number'>
type _xrefDay = Primitive._number

export interface xrefFaces extends Element {
  type: 'element'
  name: 'xrefFaces'
}

export type xrefMonth = TextNode<'number'>
type _xrefMonth = Primitive._number

/** Basic data types for date parts. */
export type xrefYear = TextNode<'number'>
type _xrefYear = Primitive._number

export interface document extends Element {
  /** content is "Inline" except that anchors shouldn't be nested */
  a: A
  /** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title. */
  abbrevTitle: AbbrevTitle
  /** The date a manuscript was accepted for publication. */
  acceptanceDate: AcceptanceDate
  affiliations: Affiliations
  altName: AltName

  anonymous: Anonymous
  /** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted. */
  approvalDate: ApprovalDate
  /** Used to indicate the designated archiving organization(s) for an item. */
  archive: Archive
  /** Container element for archive information */
  archiveLocations: ArchiveLocations
  /** Article title in a citation. */
  articleTitle: ArticleTitle
  /** An assertion is a piece of custom, non-bibliographic metadata that the publisher is asserting about the content to which the Crossmark refers. */
  assertion: Assertion
  /** First author in a citation. */
  author: Author
  b: xrefFaces
  /** Container for the main body of a DOI record submission. While it is possible to include records for multiple journals, books, conferences, or other types of content in a single submission, it is not possible to mix content types within a single DOI submission. */
  body: Body
  /** Container for all information about a single book. */
  book: Book
  /** A container for all title-level metadata for a single book that is not part of a series or set. */
  bookMetadata: BookMetadata
  /** A container for all information that applies to an individual volume of a book series. */
  bookSeriesMetadata: BookSeriesMetadata
  /** A container for all information that applies to an individual volume of a book set. */
  bookSetMetadata: BookSetMetadata
  /** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
   * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/ */
  citation: Citation
  /** A list of articles, books, and other content cited by the item being registered */
  citationList: CitationList
  /** The coden assigned to a journal or conference proceedings. */
  coden: Coden
  /** Container for item elements containing non-primary URIs associated with the item being registered. Collections are supported for the following (defined in the property attribute):
   *
   * list-based:  Multiple Resolution, more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/
   * country-based: more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/#00130
   * crawler-based: for Similarity Check URLs, more info: https://www.crossref.org/education/similarity-check/participate/urls-for-new-deposits/
   * text-mining: supply specific URLs for text and data mining, more info: https://www.crossref.org/education/retrieve-metadata/rest-api/text-and-data-mining-for-members/
   * unspecified: can be used for additional URLs
   * syndication: identifies resources to be used for syndication
   * link-header: identifies resources to be used as an endpoint */
  collection: Collection
  /** Statement of competing interest supplied by a review author during the review process. */
  competingInterestStatement: CompetingInterestStatement
  /** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components. */
  component: Component
  /** Container for a group of components */
  componentList: ComponentList
  /** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component. */
  componentNumber: ComponentNumber
  /** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element. */
  conference: Conference
  /** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available. */
  conferenceAcronym: ConferenceAcronym
  /** The start and end dates of a conference event. conference_date may be used in three ways:
   * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
   * 2. If publishers have parsed date values, provide them in the attributes.
   * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
   * Jan. 15-17, 1997 */
  conferenceDate: ConferenceDate
  /** The location of the conference. The city, state, province or country of the conference may be provided as appropriate. */
  conferenceLocation: ConferenceLocation
  /** The official name of the conference, excluding numbers commonly provided in conference */
  conferenceName: ConferenceName
  /** The number of a conference. conference_number should include only the number of the conference without any extra text */
  conferenceNumber: ConferenceNumber
  /** Container for all information about a single conference paper. */
  conferencePaper: ConferencePaper
  /** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization. */
  conferenceSponsor: ConferenceSponsor
  /** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000. */
  conferenceTheme: ConferenceTheme
  /** The date a piece of content was created. */
  contentDate: ContentDate
  /** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters. */
  contentItem: ContentItem
  /** The contract number under which a report or paper was written. */
  contractNumber: ContractNumber
  /** The container for all who contributed to authoring or editing an item. */
  contributors: Contributors
  /** The date a database or dataset item was created. */
  creationDate: CreationDate
  /** Container element for CrossMark data. */
  crossmark: Crossmark
  /** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain. */
  crossmarkDomain: CrossmarkDomain
  crossmarkDomainExclusive: CrossmarkDomainExclusive
  /** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content */
  crossmarkDomains: CrossmarkDomains
  /** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications. */
  crossmarkPolicy: CrossmarkPolicy
  crossmarkVersion: CrossmarkVersion
  /** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document. */
  customMetadata: CustomMetadata
  /** Year of publication in citation. */
  cYear: CYear
  /** database is the top level element for deposit of metadata about one or more datasets or records in a database. */
  database: Database
  /** Container for key dates in the life of a database or dataset. */
  databaseDate: DatabaseDate
  /** database_metadata contains metadata about the database. */
  databaseMetadata: DatabaseMetadata
  /** dataset is used to capture information about one or more database records or collections. */
  dataset: Dataset
  /** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). */
  day: Day
  /** The degree(s) awarded for a dissertation. */
  degree: Degree
  degrees: Degrees
  /** Information about the organization submitting DOI metadata to Crossref */
  depositor: Depositor
  /** Name of the organization registering the DOIs. */
  depositorName: DepositorName
  /** A narrative description of a file (e.g. a figure caption or video description). */
  description: Description
  /** A wrapper for designators or other primary identifiers for a standard. */
  designators: Designators
  /** dissertation is the top level element for deposit of metadata about one or more dissertations. */
  dissertation: Dissertation
  /** DOI for an entity being registered with Crossref. */
  doi: Doi
  /** Top level element for a metadata record submission. This element indicates the start and end of the XML file. The version number is fixed to the version of the schema. */
  doiBatch: DoiBatch
  /** Publisher generated ID that uniquely identifies the DOI submission batch. */
  doiBatchId: DoiBatchId
  /** The container for elements related directly to a DOI. */
  doiData: DoiData
  /** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. */
  domain: Domain
  /** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable. */
  editionNumber: EditionNumber
  /** article identifier or e-location id of the item */
  elocationId: ElocationId
  em: xrefFaces
  /** e-mail address to which batch success and/or error messages are sent. */
  emailAddress: EmailAddress
  /** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata. */
  eventMetadata: EventMetadata
  /** The filter element is used to disambiguate content in situations where multiple publishers share the same host (e.g. when on an aggregated platform). It should contain a substring of the path that can be used to uniquely identify a publisher's or publication's content. For instance, using the string "alpsp" here would help the CrossMark system distinguish between ALPSP publications on the ingentaconnect host and other publications on the same host. */
  filter: Filter
  /** First page number of an item. */
  firstPage: FirstPage
  font: xrefFaces
  /** A narrative description of a component's file format and/or file extension. */
  format: Format
  /** The full title by which a journal is commonly known or cited. */
  fullTitle: FullTitle
  /** A contributor's given name. */
  givenName: GivenName
  /** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area. */
  groupTitle: GroupTitle
  /** Container for information related to the DOI batch submission. This element uniquely identifies the batch deposit to Crossref and contains information that will be used as a reference in error messages triggered during submission processing. */
  head: Head
  i: xrefFaces
  /** A public standard identifier that can be used to uniquely identify the item being registered. */
  identifier: Identifier
  /** Container element for information about an institution or organization associated with an item. */
  institution: Institution
  /** The acronym of the institution. */
  institutionAcronym: InstitutionAcronym
  /** The department within an institution. */
  institutionDepartment: InstitutionDepartment
  /** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI */
  institutionId: InstitutionId
  /** The full name of an institution. */
  institutionName: InstitutionName
  /** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added. */
  institutionPlace: InstitutionPlace
  /** Member's custom statement of intent to publish content for which a pending publication DOI has been created */
  intentStatement: IntentStatement
  /** The ISBN assigned to an entity. */
  isbn: Isbn
  /** The ISSN assigned to the title being registered. */
  issn: Issn
  /** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue. */
  issue: Issue
  /** A container used to associate a URI with the DOI being registered. */
  item: Item
  /** A publisher-assigned number that uniquely identifies the item being registered. */
  itemNumber: ItemNumber
  /** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file. */
  journal: Journal
  /** Container for all information about a single journal article. */
  journalArticle: JournalArticle
  /** Container for metadata that defines a single issue of a journal. */
  journalIssue: JournalIssue
  /** Container for metadata that defines a journal. */
  journalMetadata: JournalMetadata
  /** Journal title in a citation. */
  journalTitle: JournalTitle
  /** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume. */
  journalVolume: JournalVolume
  /** Last page number of an item. */
  lastPage: LastPage
  /** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range. */
  month: Month
  name: Name
  /** Identifies books or conference proceedings that have no ISBN assigned. */
  noisbn: Noisbn
  /** The ORCID iD for an author. */
  ORCID: ORCID
  /** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors. */
  organization: Organization
  /** The title of an item in its original language if the registration is for a translation of a work. */
  originalLanguageTitle: OriginalLanguageTitle
  /** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages. */
  otherPages: OtherPages
  ovl: xrefFaces
  /** The container for information about page ranges. */
  pages: Pages
  /** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element. */
  partNumber: PartNumber
  /** The peer_review content type is intended for assigning DOIs to the reports and other artifacts associated with the review of published content. */
  peerReview: PeerReview
  /** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print. */
  pendingPublication: PendingPublication
  /** The name of a person (as opposed to an organization) that contributed to an item. */
  personName: PersonName
  /** Container for posted content metadata. */
  postedContent: PostedContent
  /** The date a pre-print was posted to a repository. */
  postedDate: PostedDate
  prefix: Prefix
  /** Container for all information that applies to a non-series conference proceeding. */
  proceedingsMetadata: ProceedingsMetadata
  /** Container for all information that applies to a specific conference proceeding that is part of a series. */
  proceedingsSeriesMetadata: ProceedingsSeriesMetadata
  /** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH. */
  proceedingsSubject: ProceedingsSubject
  /** The undifferentiated title of a conference proceeding. */
  proceedingsTitle: ProceedingsTitle
  /** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI */
  publication: Publication
  /** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions. */
  publicationDate: PublicationDate
  /** A container for information about the publisher of the item being registered */
  publisher: Publisher
  /** A container for item identification numbers set by a publisher. */
  publisherItem: PublisherItem
  /** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record. */
  publisherName: PublisherName
  /** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added. */
  publisherPlace: PublisherPlace
  /** The organization responsible for the information being registered. */
  registrant: Registrant
  /** report-paper is the top level element for deposit of metadata about one or more reports or working papers. */
  reportPaper: ReportPaper
  /** Container for the metadata related to a Technical Report or Working Paper. */
  reportPaperMetadata: ReportPaperMetadata
  /** Container for the metadata related to a Technical Report or Working Paper that is part of a series. */
  reportPaperSeriesMetadata: ReportPaperSeriesMetadata
  /** The URI associated with a DOI. */
  resource: Resource
  /** The date a review was published to a repository. */
  reviewDate: ReviewDate
  /** Running numbers to specify the various reports (ex: RC1 to RC4) */
  runningNumber: RunningNumber
  /** Container for component metadata if the component is being registered after the parent record/DOI is created. */
  saComponent: SaComponent
  /** A wrapper for Scholarly Sharing Network (SCN) policy information */
  scnPolicies: ScnPolicies
  /** An individual SCN policy */
  scnPolicyRef: ScnPolicyRef
  /** A group of related SCN policies */
  scnPolicySet: ScnPolicySet
  scp: xrefFaces
  /** Container for metadata about a series publication. */
  seriesMetadata: SeriesMetadata
  /** The series number within a specific published conference discipline. */
  seriesNumber: SeriesNumber
  /** Book series title in a citation. */
  seriesTitle: SeriesTitle
  /** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set. */
  setMetadata: SetMetadata
  /** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number. */
  specialNumbering: SpecialNumbering
  /** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia. */
  standard: Standard
  /** Container for the metadata related to a Standard that is not part of a series. */
  standardMetadata: StandardMetadata
  /** A wrapper for standards body information. */
  standardsBody: StandardsBody
  /** Designator for standard from which the current deposit is adopted. */
  stdAdoptedFrom: StdAdoptedFrom
  stdAltAsPublished: StdAltAsPublished
  stdAltScript: StdAltScript
  /** Designator or other primary identifier for the standard being deposited. */
  stdAsPublished: StdAsPublished
  stdDesignator: StdDesignator
  /** Provides for defining a DOI for a broad grouping of standards. */
  stdFamilyDesignator: stdDesignatorT
  /** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem) */
  stdRevisionOf: StdRevisionOf
  /** Provides for defining a DOI for a set of standards (sometimes know as truncated form). */
  stdSetDesignator: StdSetDesignator
  /** Designator for standard being replaced by the standard being deposited. */
  stdSupersedes: StdSupersedes
  /** Provides for defining a DOI for a group of closely related standard documents (undated form is a stem for any dated form) */
  stdUndatedDesignator: StdUndatedDesignator
  stdVariantForm: StdVariantForm
  stringName: StringName
  strong: xrefFaces
  sub: xrefFaces
  /** The sub-title portion of a title. */
  subtitle: Subtitle
  /** The suffix of an author name, e.g. junior, senior, III. */
  suffix: Suffix
  sup: xrefFaces
  /** The family_name of a contributor. */
  surname: Surname
  /** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times. */
  timestamp: Timestamp
  /** The title of the item being registered. */
  title: Title
  /** A container for the title and original language title elements. */
  titles: Titles
  tt: xrefFaces
  u: xrefFaces
  /** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available. */
  unstructuredCitation: UnstructuredCitation
  /** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader’s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc. */
  update: Update
  /** The date a pre-print was posted to a repository. */
  updateDate: UpdateDate
  /** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here. */
  updates: Updates
  /** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings. */
  volume: Volume
  /** Book volume title in a citation. */
  volumeTitle: VolumeTitle
  /** Year of publication. */
  year: Year
}
export var document: document
