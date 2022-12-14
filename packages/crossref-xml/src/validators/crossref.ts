import * as Primitive from './Primitive'
import * as ai from './ai'
import * as ct from './ct'
import * as fr from './fr'
import * as jats from './jats'
import * as rel from './rel'

import {
  A,
  AbbrevTitle,
  AbbrevTitlePrimitiveType,
  AcceptanceDate,
  Affiliations,
  AltName,
  Anonymous,
  ApprovalDate,
  ApprovedMonth,
  ApprovedYear,
  Archive,
  ArchiveLocations,
  ArchiveName,
  ArticleTitle,
  Assertion,
  Authenticated,
  Author,
  Book,
  BookBookType,
  BookMetadata,
  BookSeriesMetadata,
  BookSetMetadata,
  Citation,
  CitationList,
  CitationT,
  CmAssertion,
  CmAssertionGroupLabel,
  CmAssertionGroupName,
  CmAssertionLabel,
  CmAssertionName,
  CmDomain,
  CmUpdateType,
  Coden,
  CodenPrimitiveType,
  Collection,
  CollectionMultiResolution,
  CollectionProperty,
  CompetingInterestStatement,
  Component,
  ComponentComponentSize,
  ComponentList,
  ComponentNumber,
  ComponentNumberPrimitiveType,
  ComponentParentRelation,
  ComponentRegAgency,
  ComponentSize,
  Conference,
  ConferenceAcronym,
  ConferenceAcronymPrimitiveType,
  ConferenceDate,
  ConferenceDateT,
  ConferenceLocation,
  ConferenceLocationPrimitiveType,
  ConferenceName,
  ConferenceNamePrimitiveType,
  ConferenceNumber,
  ConferenceNumberPrimitiveType,
  ConferencePaper,
  ConferenceSponsor,
  ConferenceSponsorPrimitiveType,
  ConferenceTheme,
  ConferenceThemePrimitiveType,
  ContentDate,
  ContentItem,
  ContentItemComponentType,
  ContentItemLevelSequenceNumber,
  ContractNumber,
  ContractNumberPrimitiveType,
  ContributorRole,
  Contributors,
  CreationDate,
  Crossmark,
  CrossmarkDomain,
  CrossmarkDomainExclusive,
  CrossmarkDomains,
  CrossmarkPolicy,
  CrossmarkVersion,
  CustomMetadata,
  CYear,
  Database,
  DatabaseDate,
  DatabaseMetadata,
  Dataset,
  DatasetDatasetType,
  DatePrimitiveType,
  DateT,
  DateTMediaType,
  Day,
  Degree,
  DegreePrimitiveType,
  Degrees,
  Depositor,
  DepositorName,
  DepositorNamePrimitiveType,
  Description,
  Designators,
  Dissertation,
  Doi,
  DoiBatch,
  DoiBatchId,
  DoiBatchIdPrimitiveType,
  DoiData,
  DoiPrimitiveType,
  DoiT,
  Domain,
  EditionNumber,
  EditionNumberPrimitiveType,
  ElocationId,
  EmailAddress,
  EmailAddressPrimitiveType,
  EndDay,
  EndMonth,
  EndYear,
  EventMetadata,
  Explanation,
  FakerXastElement,
  FakeXastElement,
  Family,
  Filter,
  FirstPage,
  FirstPagePrimitiveType,
  Format,
  FormatT,
  FullTitle,
  FullTitlePrimitiveType,
  GivenName,
  GivenNamePrimitiveType,
  GroupLabel,
  GroupName,
  GroupTitle,
  GroupTitlePrimitiveType,
  Head,
  Href,
  Identifier,
  IdentifierIdType,
  IdentifierT,
  Institution,
  InstitutionAcronym,
  InstitutionAcronymPrimitiveType,
  InstitutionDepartment,
  InstitutionDepartmentPrimitiveType,
  InstitutionId,
  InstitutionIdType,
  InstitutionName,
  InstitutionNamePrimitiveType,
  InstitutionPlace,
  InstitutionPlacePrimitiveType,
  IntentStatement,
  Isbn,
  IsbnT,
  Issn,
  IssnT,
  Issue,
  IssuePrimitiveType,
  Item,
  ItemCountry,
  ItemCrawler,
  ItemLabel,
  ItemLinkHeaderRelationship,
  ItemNumber,
  ItemNumberT,
  ItemNumberType,
  Journal,
  JournalArticle,
  JournalIssue,
  JournalMetadata,
  JournalTitle,
  JournalVolume,
  Key,
  KeyPrimitiveType,
  Label,
  Language,
  LastPage,
  LastPagePrimitiveType,
  LevelSequenceNumber,
  MediaType,
  Month,
  Name,
  NameNameStyle,
  NameStyle,
  Noisbn,
  NoisbnReason,
  ORCID,
  OrcidT,
  Order,
  Organization,
  OrganizationT,
  OriginalLanguageTitle,
  OtherPages,
  OtherPagesPrimitiveType,
  Pages,
  ParentDoi,
  PartNumber,
  PartNumberPrimitiveType,
  PeerReview,
  PeerReviewRecommendation,
  PeerReviewStage,
  PeerReviewType,
  PendingPublication,
  PersonName,
  PID,
  PostedContent,
  PostedContentType,
  PostedDate,
  Prefix,
  ProceedingsMetadata,
  ProceedingsSeriesMetadata,
  ProceedingsSubject,
  ProceedingsSubjectPrimitiveType,
  ProceedingsTitle,
  ProceedingsTitlePrimitiveType,
  Publication,
  PublicationDate,
  PublicationType,
  Publisher,
  PublisherItem,
  PublisherName,
  PublisherNamePrimitiveType,
  PublisherPlace,
  PublisherPlacePrimitiveType,
  ReferenceDistributionOpts,
  RegAgency,
  Registrant,
  RegistrantPrimitiveType,
  ReportPaper,
  ReportPaperMetadata,
  ReportPaperSeriesMetadata,
  Resource,
  ResourceContentVersion,
  ResourceT,
  ReviewDate,
  RevisionRound,
  RunningNumber,
  SaComponent,
  SaComponentParentDoi,
  ScnPolicies,
  ScnPolicyRef,
  ScnPolicyRefPrimitiveType,
  ScnPolicySet,
  Sequence,
  SeriesMetadata,
  SeriesNumber,
  SeriesNumberPrimitiveType,
  SeriesTitle,
  SetMetadata,
  SpecialNumbering,
  SpecialNumberingPrimitiveType,
  Standard,
  StandardMetadata,
  StandardMetadataPublicationStatus,
  StandardsBody,
  StartDate,
  StartDay,
  StartMonth,
  StartYear,
  StdAdoptedFrom,
  StdAltAsPublished,
  StdAltAsPublishedApprovedMonth,
  StdAltAsPublishedApprovedYear,
  StdAltAsPublishedReason,
  StdAltScript,
  StdAsPublished,
  StdDesignator,
  StdDesignatorT,
  StdDesignatorvalueT,
  StdRevisionOf,
  StdSetDesignator,
  StdSupersedes,
  StdUndatedDesignator,
  StdVariantForm,
  StringName,
  StringNameNameStyle,
  Subtitle,
  Suffix,
  SuffixPrimitiveType,
  Surname,
  SurnamePrimitiveType,
  Timestamp,
  Title,
  Titles,
  Undated,
  UnstructuredCitation,
  Update,
  UpdateDate,
  Updates,
  Version,
  Volume,
  VolumePrimitiveType,
  VolumeTitle,
  XastAttributes,
  XastCData,
  XastComment,
  XastElement,
  XastInstruction,
  XastText,
  XastTextElement,
  XrefDay,
  XrefFaces,
  XrefMonth,
  XrefYear,
  Year,
} from '../types'
// Generated by ts-to-zod
import { z } from 'zod'

// Source files:
// https://data.crossref.org/schemas/common5.3.1.xsd
// https://data.crossref.org/schemas/crossref5.3.1.xsd
export const XastAttributesSchema: z.ZodSchema<XastAttributes> = z.record(
  z.union([z.string(), z.undefined()]).nullable(),
)

const XastTextSchema: z.ZodSchema<XastText> = z.object({
  type: z.literal('text'),
  value: z.string(),
})

const XastCommentSchema: z.ZodSchema<XastComment> = z.object({
  type: z.literal('comment'),
  value: z.string(),
})

const XastCDataSchema: z.ZodSchema<XastCData> = z.object({
  type: z.literal('cdata'),
  value: z.string(),
})

const XastInstructionSchema: z.ZodSchema<XastInstruction> = z.object({
  type: z.literal('instruction'),
  name: z.string(),
  value: z.string(),
})

const FakerXastElementSchema: z.ZodSchema<FakerXastElement> = z.object({
  type: z.literal('element'),
  name: z.string(),
  attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
  children: z.array(
    z.union([
      z.object({
        type: z.string(),
        name: z.string().optional(),
        attributes: z.record(z.any()).optional(),
        children: z.array(z.any()),
      }),
      XastTextSchema,
      XastCommentSchema,
      XastInstructionSchema,
      XastCDataSchema,
    ]),
  ),
})

const FakeXastElementSchema: z.ZodSchema<FakeXastElement> = z.object({
  type: z.literal('element'),
  name: z.string(),
  attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
  children: z.array(
    z.union([
      FakerXastElementSchema,
      XastTextSchema,
      XastCommentSchema,
      XastInstructionSchema,
      XastCDataSchema,
    ]),
  ),
})

type T = typeof XastElementSchema['shape']['children']

type XastChildren = z.ZodArray<
  z.ZodUnion<
    [
      z.ZodType<FakeXastElement, z.ZodTypeDef, FakeXastElement>,
      z.ZodType<XastText, z.ZodTypeDef, XastText>,
      z.ZodType<XastComment, z.ZodTypeDef, XastComment>,
      z.ZodType<XastInstruction, z.ZodTypeDef, XastInstruction>,
      z.ZodType<XastCData, z.ZodTypeDef, XastCData>,
    ]
  >
>

type ZodXastElement = z.ZodObject<
  {
    type: z.ZodLiteral<'element'>
    name: z.ZodString
    attributes: z.ZodOptional<
      z.ZodUnion<[z.ZodType<XastAttributes, z.ZodTypeDef, XastAttributes>, z.ZodUndefined]>
    >
    children: XastChildren
  },
  'strip',
  z.ZodTypeAny
>

export const XastElementSchema: ZodXastElement = //: z.ZodObject<XastElement>
  z.object({
    type: z.literal('element'),
    name: z.string(),
    attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
    children: z.array(
      z.union([
        FakeXastElementSchema,
        XastTextSchema,
        XastCommentSchema,
        XastInstructionSchema,
        XastCDataSchema,
      ]),
    ),
  })

type ElementType = z.infer<typeof XastElementSchema>

const XastTextElementSchema: z.ZodSchema<XastTextElement> = XastElementSchema.extend({
  children: z.tuple([XastTextSchema]),
})

export const ConferenceDateTSchema: z.ZodSchema<ConferenceDateT> = XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 0
       * @maxLength 100
       **/
      value: z.string().min(0).max(100),
    }),
  ]),
})

export const PIDSchema: z.ZodSchema<PID> = XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern [hH][tT][tT][pP][sS]:\/\/.{1,50}
       **/
      value: z.string().regex(/[hH][tT][tT][pP][sS]:\/\/.{1,50}/),
    }),
  ]),
})

export const OrganizationTSchema: z.ZodSchema<OrganizationT> = XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 511
       **/
      value: z.string().min(1).max(511),
    }),
  ]),
})

export const OrcidTSchema: z.ZodSchema<z.ZodObject<z.ZodType<OrcidT>>> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern https?:\/\/orcid.org\/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[X0-9]{1}
       **/
      value: z.string().regex(/https?:\/\/orcid.org\/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[X0-9]{1}/),
    }),
  ]),
})

export const ItemNumberTSchema: z.ZodSchema<ItemNumberT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: z.string().min(1).max(32),
    }),
  ]),
})

export const IdentifierTSchema: z.ZodSchema<IdentifierT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: z.string().min(1).max(255),
    }),
  ]),
})

export const FormatTSchema: z.ZodSchema<FormatT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 0
       * @maxLength 130
       **/
      value: z.string().min(0).max(130),
    }),
  ]),
})

export const ResourceTSchema: z.ZodSchema<ResourceT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
       * @minLength 1
       * @maxLength 2048
       **/
      value: z
        .string()
        .min(1)
        .max(2048)
        .regex(/([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*/),
    }),
  ]),
})

export const CmAssertionSchema: z.ZodSchema<CmAssertion> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 1024
       **/
      value: z.string().min(2).max(1024),
    }),
  ]),
})

export const IsbnTSchema: z.ZodSchema<IsbnT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern (97(8|9)-)?\d[\d \-]+[\dX]
       * @minLength 10
       * @maxLength 17
       **/
      value: z
        .string()
        .min(10)
        .max(17)
        .regex(/(97(8|9)-)?\d[\d \-]+[\dX]/),
    }),
  ]),
})

export const IssnTSchema: z.ZodSchema<IssnT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern \d{4}-?\d{3}[\dX]
       * @minLength 8
       * @maxLength 9
       **/
      value: z
        .string()
        .min(8)
        .max(9)
        .regex(/\d{4}-?\d{3}[\dX]/),
    }),
  ]),
})

export const CitationTSchema: z.ZodSchema<CitationT> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.string(),
})

/** content is "Inline" except that anchors shouldn't be nested
 **/
export const ASchema: z.ZodSchema<A> =  XastTextElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('a'),
  attributes: z.object({
    href: z.string(),
  }),
})

/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title.
   * @minLength 1
  * @maxLength 150

**/
export const AbbrevTitleSchema: z.ZodObject<AbbrevTitle> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 150
       **/
      value: z.string().min(1).max(150),
    }),
  ]),
})

/** Common abbreviation or abbreviations used when citing a journal. It is recommended that periods be included after abbreviated words within the title.
   * @minLength 1
  * @maxLength 150

**/
export const AbbrevTitlePrimitiveTypeSchema: z.ZodSchema<AbbrevTitlePrimitiveType> =  z
  .string()
  .min(1)
  .max(150)

export const ApprovedMonthSchema: z.ZodSchema<ApprovedMonth> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 12
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

export const StdAltAsPublishedApprovedMonthSchema: z.ZodLazy<
  z.ZodSchema<StdAltAsPublishedApprovedMonth>
> =  z.string()

export const ApprovedYearSchema: z.ZodSchema<ApprovedYear> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const StdAltAsPublishedApprovedYearSchema: z.ZodLazy<
  z.ZodSchema<StdAltAsPublishedApprovedYear>
> =  z.string()

/** Article title in a citation.**/
export const ArticleTitleSchema: z.ZodSchema<ArticleTitle> =  XastElementSchema.extend({
  name: z.literal('article_title'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** An assertion is a piece of custom, non-bibliographic metadata that the publisher is asserting about the content to which the Crossmark refers.**/
export const AssertionSchema: z.ZodSchema<Assertion> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('assertion'),
  attributes: z.object({
    /** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute.	**/
    explanation: z.string(),
    /** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.	**/
    group_label: z.string(),
    /** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.	**/
    group_name: z.string(),
    href: z.string(),
    /** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)	**/
    label: z.string(),
    /** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name.	**/
    name: z.string(),
    /** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present.	**/
    order: z.string(),
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

export const AuthenticatedSchema: z.ZodSchema<Authenticated> =  XastElementSchema.extend({
  name: z.literal('authenticated'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** First author in a citation.**/
export const AuthorSchema: z.ZodSchema<Author> =  XastElementSchema.extend({
  name: z.literal('author'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const XrefFacesSchema: z.ZodSchema<XrefFaces> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('xrefFaces'),
  children: z.tuple([]),
})

export const BookBookTypeSchema: z.ZodSchema<BookBookType> =  z.union([
  z.literal('edited_book'),
  z.literal('monograph'),
  z.literal('reference'),
  z.literal('other'),
])

/** citation is used to deposit each reference in the reference list of the item for which the DOI is being deposited. For details see:
 * https://www.crossref.org/education/metadata-stewardship/maintaining-your-metadata/add-references/
 **/
export const CitationSchema: z.ZodSchema<Citation> =  CitationTSchema.extend({
  type: z.literal('element'),
  name: z.literal('citation'),
  attributes: z.object({
    key: z.string(),
  }),
})

/** A list of articles, books, and other content cited by the item being registered**/
export const CitationListSchema: z.ZodSchema<CitationList> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('citation_list'),
  children: z.array(CitationSchema),
})

/** The coden assigned to a journal or conference proceedings.
 * @minLength 1
 * @maxLength 6
 **/
export const CodenSchema: z.ZodSchema<Coden> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 6
       **/
      value: z.string().min(1).max(6),
    }),
  ]),
})

/** The coden assigned to a journal or conference proceedings.
 * @minLength 1
 * @maxLength 6
 **/
export const CodenPrimitiveTypeSchema: z.ZodSchema<CodenPrimitiveType> =  z
  .string()
  .min(1)
  .max(6)

/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component.
 * @minLength 1
 * @maxLength 50
 **/
export const ComponentNumberSchema: z.ZodSchema<ComponentNumber> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 50
         **/
        value: z.string().min(1).max(50),
      }),
    ]),
  })

/** The chapter, section, part, etc. number for a content item in a book. Unlike volume and edition_number, component_number should include any additional text that helps identify the type of component.
 * @minLength 1
 * @maxLength 50
 **/
export const ComponentNumberPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ComponentNumberPrimitiveType>
> =  z.string().min(1).max(50)

export const ComponentSizeSchema: z.ZodSchema<ComponentSize> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const ComponentComponentSizeSchema: z.ZodSchema<ComponentComponentSize> =
  z.string()

export const ContentItemComponentTypeSchema: z.ZodSchema<ContentItemComponentType> =
  z.union([
    z.literal('chapter'),
    z.literal('section'),
    z.literal('part'),
    z.literal('track'),
    z.literal('reference_entry'),
    z.literal('other'),
  ])

/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available.
 * @minLength 1
 * @maxLength 127
 **/
export const ConferenceAcronymSchema: z.ZodSchema<ConferenceAcronym> = XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 127
         **/
        value: z.string().min(1).max(127),
      }),
    ]),
  })

/** The popularly known as or jargon name (e.g. SIGGRAPH for "Special Interest Group on Computer Graphics"). Authors commonly cite the conference acronym rather than the full conference or proceedings name, so it is best to include this element when it is available.
 * @minLength 1
 * @maxLength 127
 **/
export const ConferenceAcronymPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceAcronymPrimitiveType>
> =  z.string().min(1).max(127)

/** The start and end dates of a conference event. conference_date may be used in three ways:
 * 1. If publishers that do not have parsed date values, provide just text with the conference dates. The date text should be taken from the proceedings title page.
 * 2. If publishers have parsed date values, provide them in the attributes.
 * 3. If both parsed date values and the date text are available, both should be provided. This is the preferred tagging for conference_date. For example:
 * Jan. 15-17, 1997
 **/
export const ConferenceDateSchema: z.ZodSchema<ConferenceDate> =
  ConferenceDateTSchema.extend({
    type: z.literal('element'),
    name: z.literal('conference_date'),
    attributes: z.object({
      end_day: z.string().optional(),
      end_month: z.string().optional(),
      end_year: z.string().optional(),
      start_day: z.string().optional(),
      start_month: z.string().optional(),
      start_year: z.string().optional(),
    }),
  })

/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate.
 * @minLength 2
 * @maxLength 255
 **/
export const ConferenceLocationSchema: z.ZodSchema<ConferenceLocation> =
  >XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 255
         **/
        value: z.string().min(2).max(255),
      }),
    ]),
  })

/** The location of the conference. The city, state, province or country of the conference may be provided as appropriate.
 * @minLength 2
 * @maxLength 255
 **/
export const ConferenceLocationPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceLocationPrimitiveType>
> =  z.string().min(2).max(255)

/** The official name of the conference, excluding numbers commonly provided in conference
 * @minLength 3
 * @maxLength 512
 **/
export const ConferenceNameSchema: z.ZodSchema<ConferenceName> =
  >XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 3
         * @maxLength 512
         **/
        value: z.string().min(3).max(512),
      }),
    ]),
  })

/** The official name of the conference, excluding numbers commonly provided in conference
 * @minLength 3
 * @maxLength 512
 **/
export const ConferenceNamePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceNamePrimitiveType>
> =  z.string().min(3).max(512)

/** The number of a conference. conference_number should include only the number of the conference without any extra text
 * @minLength 1
 * @maxLength 15
 **/
export const ConferenceNumberSchema: z.ZodSchema<ConferenceNumber> =
  >XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 15
         **/
        value: z.string().min(1).max(15),
      }),
    ]),
  })

/** The number of a conference. conference_number should include only the number of the conference without any extra text
 * @minLength 1
 * @maxLength 15
 **/
export const ConferenceNumberPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceNumberPrimitiveType>
> =  z.string().min(1).max(15)

/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization.
 * @minLength 1
 * @maxLength 255
 **/
export const ConferenceSponsorSchema: z.ZodSchema<ConferenceSponsor> =
 > XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 255
         **/
        value: z.string().min(1).max(255),
      }),
    ]),
  })

/** The sponsoring organization(s) of a conference. Multiple sponsors may be given if a conference is hosted by more than one organization.
 * @minLength 1
 * @maxLength 255
 **/
export const ConferenceSponsorPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceSponsorPrimitiveType>
> =  z.string().min(1).max(255)

/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000.
 * @minLength 1
 * @maxLength 255
 **/
export const ConferenceThemeSchema: z.ZodSchema<ConferenceTheme> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 255
         **/
        value: z.string().min(1).max(255),
      }),
    ]),
  })

/** The theme is the slogan or special emphasis of a conference in a particular year. It differs from the subject of a conference in that the subject is stable over the years while the theme may vary from year to year. For example, the American Society for Information Science and Technology conference theme was "Knowledge: Creation, Organization and Use" in 1999 and "Defining Information Architecture" in 2000.
 * @minLength 1
 * @maxLength 255
 **/
export const ConferenceThemePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ConferenceThemePrimitiveType>
> =  z.string().min(1).max(255)

export const ResourceContentVersionSchema: z.ZodSchema<ResourceContentVersion> =  z.union(
  [z.literal('vor'), z.literal('am')],
)

/** The contract number under which a report or paper was written.
 * @minLength 2
 * @maxLength 255
 **/
export const ContractNumberSchema: z.ZodSchema<ContractNumber> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 255
         **/
        value: z.string().min(2).max(255),
      }),
    ]),
  })

/** The contract number under which a report or paper was written.
 * @minLength 2
 * @maxLength 255
 **/
export const ContractNumberPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ContractNumberPrimitiveType>
> =  z.string().min(2).max(255)

export const ContributorRoleSchema: z.ZodSchema<ContributorRole> =  z.union([
  z.literal('author'),
  z.literal('editor'),
  z.literal('chair'),
  z.literal('reviewer'),
  z.literal('review-assistant'),
  z.literal('stats-reviewer'),
  z.literal('reviewer-external'),
  z.literal('reader'),
  z.literal('translator'),
])

export const ItemCountrySchema: z.ZodSchema<ItemCountry> =  z.union([
  z.literal('AD'),
  z.literal('AE'),
  z.literal('AF'),
  z.literal('AG'),
  z.literal('AI'),
  z.literal('AL'),
  z.literal('AM'),
  z.literal('AN'),
  z.literal('AO'),
  z.literal('AQ'),
  z.literal('AR'),
  z.literal('AS'),
  z.literal('AT'),
  z.literal('AU'),
  z.literal('AW'),
  z.literal('AX'),
  z.literal('AZ'),
  z.literal('BA'),
  z.literal('BB'),
  z.literal('BD'),
  z.literal('BE'),
  z.literal('BF'),
  z.literal('BG'),
  z.literal('BH'),
  z.literal('BI'),
  z.literal('BJ'),
  z.literal('BL'),
  z.literal('BM'),
  z.literal('BN'),
  z.literal('BO'),
  z.literal('BQ'),
  z.literal('BR'),
  z.literal('BS'),
  z.literal('BT'),
  z.literal('BV'),
  z.literal('BW'),
  z.literal('BY'),
  z.literal('BZ'),
  z.literal('CA'),
  z.literal('CC'),
  z.literal('CD'),
  z.literal('CF'),
  z.literal('CG'),
  z.literal('CH'),
  z.literal('CI'),
  z.literal('CK'),
  z.literal('CL'),
  z.literal('CM'),
  z.literal('CN'),
  z.literal('CO'),
  z.literal('CR'),
  z.literal('CS'),
  z.literal('CU'),
  z.literal('CV'),
  z.literal('CX'),
  z.literal('CY'),
  z.literal('CZ'),
  z.literal('DE'),
  z.literal('DJ'),
  z.literal('DK'),
  z.literal('DM'),
  z.literal('DO'),
  z.literal('DZ'),
  z.literal('EC'),
  z.literal('EE'),
  z.literal('EG'),
  z.literal('EH'),
  z.literal('ER'),
  z.literal('ES'),
  z.literal('ET'),
  z.literal('FI'),
  z.literal('FJ'),
  z.literal('FK'),
  z.literal('FM'),
  z.literal('FO'),
  z.literal('FR'),
  z.literal('GA'),
  z.literal('GB'),
  z.literal('GD'),
  z.literal('GE'),
  z.literal('GF'),
  z.literal('GG'),
  z.literal('GH'),
  z.literal('GI'),
  z.literal('GL'),
  z.literal('GM'),
  z.literal('GN'),
  z.literal('GP'),
  z.literal('GQ'),
  z.literal('GR'),
  z.literal('GS'),
  z.literal('GT'),
  z.literal('GU'),
  z.literal('GW'),
  z.literal('GY'),
  z.literal('HK'),
  z.literal('HM'),
  z.literal('HN'),
  z.literal('HR'),
  z.literal('HT'),
  z.literal('HU'),
  z.literal('ID'),
  z.literal('IE'),
  z.literal('IL'),
  z.literal('IM'),
  z.literal('IN'),
  z.literal('IO'),
  z.literal('IQ'),
  z.literal('IR'),
  z.literal('IS'),
  z.literal('IT'),
  z.literal('JE'),
  z.literal('JM'),
  z.literal('JO'),
  z.literal('JP'),
  z.literal('KE'),
  z.literal('KG'),
  z.literal('KH'),
  z.literal('KI'),
  z.literal('KM'),
  z.literal('KN'),
  z.literal('KP'),
  z.literal('KR'),
  z.literal('KW'),
  z.literal('KY'),
  z.literal('KZ'),
  z.literal('LA'),
  z.literal('LB'),
  z.literal('LC'),
  z.literal('LI'),
  z.literal('LK'),
  z.literal('LR'),
  z.literal('LS'),
  z.literal('LT'),
  z.literal('LU'),
  z.literal('LV'),
  z.literal('LY'),
  z.literal('MA'),
  z.literal('MC'),
  z.literal('MD'),
  z.literal('ME'),
  z.literal('MF'),
  z.literal('MG'),
  z.literal('MH'),
  z.literal('MK'),
  z.literal('ML'),
  z.literal('MM'),
  z.literal('MN'),
  z.literal('MO'),
  z.literal('MP'),
  z.literal('MQ'),
  z.literal('MR'),
  z.literal('MS'),
  z.literal('MT'),
  z.literal('MU'),
  z.literal('MV'),
  z.literal('MW'),
  z.literal('MX'),
  z.literal('MY'),
  z.literal('MZ'),
  z.literal('NA'),
  z.literal('NC'),
  z.literal('NE'),
  z.literal('NF'),
  z.literal('NG'),
  z.literal('NI'),
  z.literal('NL'),
  z.literal('NO'),
  z.literal('NP'),
  z.literal('NR'),
  z.literal('NU'),
  z.literal('NZ'),
  z.literal('OM'),
  z.literal('PA'),
  z.literal('PE'),
  z.literal('PF'),
  z.literal('PG'),
  z.literal('PH'),
  z.literal('PK'),
  z.literal('PL'),
  z.literal('PM'),
  z.literal('PN'),
  z.literal('PR'),
  z.literal('PS'),
  z.literal('PT'),
  z.literal('PW'),
  z.literal('PY'),
  z.literal('QA'),
  z.literal('RE'),
  z.literal('RO'),
  z.literal('RS'),
  z.literal('RU'),
  z.literal('RW'),
  z.literal('SA'),
  z.literal('SB'),
  z.literal('SC'),
  z.literal('SD'),
  z.literal('SE'),
  z.literal('SG'),
  z.literal('SH'),
  z.literal('SI'),
  z.literal('SJ'),
  z.literal('SK'),
  z.literal('SL'),
  z.literal('SM'),
  z.literal('SN'),
  z.literal('SO'),
  z.literal('SR'),
  z.literal('SS'),
  z.literal('ST'),
  z.literal('SV'),
  z.literal('SX'),
  z.literal('SY'),
  z.literal('SZ'),
  z.literal('TC'),
  z.literal('TD'),
  z.literal('TF'),
  z.literal('TG'),
  z.literal('TH'),
  z.literal('TJ'),
  z.literal('TK'),
  z.literal('TL'),
  z.literal('TM'),
  z.literal('TN'),
  z.literal('TO'),
  z.literal('TR'),
  z.literal('TT'),
  z.literal('TV'),
  z.literal('TW'),
  z.literal('TZ'),
  z.literal('UA'),
  z.literal('UG'),
  z.literal('UM'),
  z.literal('US'),
  z.literal('UY'),
  z.literal('UZ'),
  z.literal('VA'),
  z.literal('VC'),
  z.literal('VE'),
  z.literal('VG'),
  z.literal('VI'),
  z.literal('VN'),
  z.literal('VU'),
  z.literal('WF'),
  z.literal('WS'),
  z.literal('YE'),
  z.literal('YT'),
  z.literal('ZA'),
  z.literal('ZM'),
  z.literal('ZW'),
])

export const ItemCrawlerSchema: z.ZodSchema<ItemCrawler> =  z.union([
  z.literal('google'),
  z.literal('msn'),
  z.literal('scirus'),
  z.literal('yahoo'),
  z.literal('iParadigms'),
])

export const CrossmarkDomainExclusiveSchema: z.ZodSchema<CrossmarkDomainExclusive> =
  XastElementSchema.extend({
    name: z.literal('crossmark_domain_exclusive'),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        value: z.string(),
      }),
    ]),
  })

/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications.
 * @pattern 10\.[0-9]{4,9}\/.{1,200}
 * @minLength 6
 * @maxLength 2048
 **/
export const CrossmarkPolicySchema: z.ZodSchema<CrossmarkPolicy> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @pattern 10\.[0-9]{4,9}\/.{1,200}
         * @minLength 6
         * @maxLength 2048
         **/
        value: z
          .string()
          .min(6)
          .max(2048)
          .regex(/10\.[0-9]{4,9}\/.{1,200}/),
      }),
    ]),
  })

/** A DOI which points to a publisher's CrossMark policy document. Publishers might have different policies for different publications.
 * @pattern 10\.[0-9]{4,9}\/.{1,200}
 * @minLength 6
 * @maxLength 2048
 **/
export const DoiTSchema: z.ZodSchema<DoiT> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const CrossmarkVersionSchema: z.ZodSchema<CrossmarkVersion> =
  XastElementSchema.extend({
    name: z.literal('crossmark_version'),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        value: z.string(),
      }),
    ]),
  })

/** Publishers are encouraged to provided any non-bibliographical metadata that they feel might help the researcher evaluate and make better use of the content that the Crossmark record refers to. For example, publishers might want to provide funding information, clinical trial numbers, information about the peer-review process or a summary of the publication history of the document.**/
export const CustomMetadataSchema: z.ZodSchema<CustomMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('custom_metadata'),
    children: z.array(ct.ProgramSchema),
  })

/** Year of publication in citation.**/
export const CYearSchema: z.ZodSchema<CYear> =  XastElementSchema.extend({
  name: z.literal('cYear'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const DatasetDatasetTypeSchema: z.ZodSchema<DatasetDatasetType> =  z.union([
  z.literal('record'),
  z.literal('collection'),
  z.literal('crossmark_policy'),
  z.literal('other'),
])

/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.**/
export const DateSchema: z.ZodSchema<Date> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.**/
export const DatePrimitiveTypeSchema: z.ZodSchema<DatePrimitiveType> =  z.string()

/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5").
 * @maxInclusive 31
 * @maxLength 2
 * @minLength 2
 **/
export const DaySchema: z.ZodSchema<Day> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

/** Day of publication. The should must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5").
 * @maxInclusive 31
 * @maxLength 2
 * @minLength 2
 **/
export const XrefDaySchema: z.ZodSchema<XrefDay> =  z.string().min(2).max(2)

/** The degree(s) awarded for a dissertation.
 * @minLength 2
 * @maxLength 255
 **/
export const DegreeSchema: z.ZodSchema<Degree> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 255
       **/
      value: z.string().min(2).max(255),
    }),
  ]),
})

/** The degree(s) awarded for a dissertation.
 * @minLength 2
 * @maxLength 255
 **/
export const DegreePrimitiveTypeSchema: z.ZodSchema<DegreePrimitiveType> =  z
  .string()
  .min(2)
  .max(255)

/** Name of the organization registering the DOIs.
 * @minLength 1
 * @maxLength 130
 **/
export const DepositorNameSchema: z.ZodSchema<DepositorName> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 130
       **/
      value: z.string().min(1).max(130),
    }),
  ]),
})

/** Name of the organization registering the DOIs.
 * @minLength 1
 * @maxLength 130
 **/
export const DepositorNamePrimitiveTypeSchema: z.ZodSchema<DepositorNamePrimitiveType> =
  z.string().min(1).max(130)

/** DOI for an entity being registered with Crossref.**/
export const DoiSchema: z.ZodSchema<Doi> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** DOI for an entity being registered with Crossref.**/
export const DoiPrimitiveTypeSchema: z.ZodSchema<DoiPrimitiveType> =  z.string()

/** Publisher generated ID that uniquely identifies the DOI submission batch.
 * @minLength 4
 * @maxLength 100
 **/
export const DoiBatchIdSchema: z.ZodSchema<DoiBatchId> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 4
       * @maxLength 100
       **/
      value: z.string().min(4).max(100),
    }),
  ]),
})

/** Publisher generated ID that uniquely identifies the DOI submission batch.
 * @minLength 4
 * @maxLength 100
 **/
export const DoiBatchIdPrimitiveTypeSchema: z.ZodSchema<DoiBatchIdPrimitiveType> =  z
  .string()
  .min(4)
  .max(100)

/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain.
 * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
 * @minLength 4
 * @maxLength 1024
 **/
export const DomainSchema: z.ZodSchema<Domain> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
       * @minLength 4
       * @maxLength 1024
       **/
      value: z
        .string()
        .min(4)
        .max(1024)
        .regex(/[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*/),
    }),
  ]),
})

/** A domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain.
 * @pattern [A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*
 * @minLength 4
 * @maxLength 1024
 **/
export const CmDomainSchema: z.ZodSchema<CmDomain> =  z
  .string()
  .min(4)
  .max(1024)
  .regex(/[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*\.[A-Za-z0-9_]+([-.][A-Za-z0-9_]+)*/)

/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable.
 * @minLength 1
 * @maxLength 15
 **/
export const EditionNumberSchema: z.ZodSchema<EditionNumber> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: z.string().min(1).max(15),
    }),
  ]),
})

/** The edition number of a book. edition_number should include only a number and not additional text such as "edition". For example, you should submit "3", not "third edition" or "3rd edition". Roman numerals are acceptable.
 * @minLength 1
 * @maxLength 15
 **/
export const EditionNumberPrimitiveTypeSchema: z.ZodSchema<EditionNumberPrimitiveType> =
  z.string().min(1).max(15)

/** article identifier or e-location id of the item**/
export const ElocationIdSchema: z.ZodSchema<ElocationId> =  XastElementSchema.extend({
  name: z.literal('elocation_id'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** e-mail address to which batch success and/or error messages are sent.
 * @minLength 6
 * @maxLength 200
 **/
export const EmailAddressSchema: z.ZodSchema<EmailAddress> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 6
       * @maxLength 200
       **/
      value: z.string().min(6).max(200),
    }),
  ]),
})

/** e-mail address to which batch success and/or error messages are sent.
 * @minLength 6
 * @maxLength 200
 **/
export const EmailAddressPrimitiveTypeSchema: z.ZodSchema<EmailAddressPrimitiveType> =  z
  .string()
  .min(6)
  .max(200)

export const EndDaySchema: z.ZodSchema<EndDay> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

export const EndMonthSchema: z.ZodSchema<EndMonth> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

export const XrefMonthSchema: z.ZodSchema<XrefMonth> =  z.string()

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export const EndYearSchema: z.ZodSchema<EndYear> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: z.string().min(4).max(4),
    }),
  ]),
})

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export const XrefYearSchema: z.ZodSchema<XrefYear> =  z.string().min(4).max(4)

/** A container for all information that applies to a conference event. event_metadata captures information about a conference event. Data about conference proceedings is captured in proceedings_metadata.**/
export const EventMetadataSchema: z.ZodSchema<EventMetadata> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('event_metadata'),
  children: z.array(
    z.union([
      ConferenceAcronymSchema,
      ConferenceDateSchema,
      ConferenceLocationSchema,
      ConferenceNameSchema,
      ConferenceNumberSchema,
      ConferenceSponsorSchema,
      ConferenceThemeSchema,
    ]),
  ),
})

/** If the publisher wants to provide a further explanation of what the particular "assertion" means, they can link to such an explanation by providing an appropriate url on the "explanation" attribute.**/
export const ExplanationSchema: z.ZodSchema<Explanation> =  XastElementSchema.extend({
  name: z.literal('explanation'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const FamilySchema: z.ZodSchema<Family> =  XastElementSchema.extend({
  name: z.literal('family'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const StringSchema: z.ZodSchema<String> =  z.string()

/** The filter element is used to disambiguate content in situations where multiple publishers share the same host (e.g. when on an aggregated platform). It should contain a substring of the path that can be used to uniquely identify a publisher's or publication's content. For instance, using the string "alpsp" here would help the CrossMark system distinguish between ALPSP publications on the ingentaconnect host and other publications on the same host.**/
export const FilterSchema: z.ZodSchema<Filter> =  XastElementSchema.extend({
  name: z.literal('filter'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** First page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export const FirstPageSchema: z.ZodSchema<FirstPage> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: z.string().min(1).max(32),
    }),
  ]),
})

/** First page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export const FirstPagePrimitiveTypeSchema: z.ZodSchema<FirstPagePrimitiveType> =  z
  .string()
  .min(1)
  .max(32)

/** The full title by which a journal is commonly known or cited.
 * @minLength 1
 * @maxLength 255
 **/
export const FullTitleSchema: z.ZodSchema<FullTitle> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: z.string().min(1).max(255),
    }),
  ]),
})

/** The full title by which a journal is commonly known or cited.
 * @minLength 1
 * @maxLength 255
 **/
export const FullTitlePrimitiveTypeSchema: z.ZodSchema<FullTitlePrimitiveType> =  z
  .string()
  .min(1)
  .max(255)

/** A contributor's given name.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export const GivenNameSchema: z.ZodSchema<GivenName> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern [^\d\?]*[^\?\s]+[^\d]*
       * @minLength 1
       * @maxLength 60
       **/
      value: z
        .string()
        .min(1)
        .max(60)
        .regex(/[^\d\?]*[^\?\s]+[^\d]*/),
    }),
  ]),
})

/** A contributor's given name.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export const GivenNamePrimitiveTypeSchema: z.ZodSchema<GivenNamePrimitiveType> =  z
  .string()
  .min(1)
  .max(60)
  .regex(/[^\d\?]*[^\?\s]+[^\d]*/)

/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.
 * @minLength 2
 * @maxLength 150
 **/
export const GroupLabelSchema: z.ZodSchema<GroupLabel> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

/** This is the human-readable form of the "group_name" attribute. This is what will be displayed in the group headings on the Crossmark metadata record dialog.
 * @minLength 2
 * @maxLength 150
 **/
export const CmAssertionGroupLabelSchema: z.ZodSchema<CmAssertionGroupLabel> =  z
  .string()
  .min(2)
  .max(150)

/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.
 * @minLength 2
 * @maxLength 150
 **/
export const GroupNameSchema: z.ZodSchema<GroupName> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

/** Some assertions could be logically "grouped" together in the CrossMark dialog. For instance, if the publisher is recording several pieces of metadata related to funding sources (source name, percentage, grant number), they may want to make sure that these three assertions are grouped next to each-other in the CrossMark dialog. The group_name attribute is the machine-readable value that will be used for grouping such assertions.
 * @minLength 2
 * @maxLength 150
 **/
export const CmAssertionGroupNameSchema: z.ZodSchema<CmAssertionGroupName> =  z
  .string()
  .min(2)
  .max(150)

/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area.
 * @minLength 1
 * @maxLength 1024
 **/
export const GroupTitleSchema: z.ZodSchema<GroupTitle> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 1024
       **/
      value: z.string().min(1).max(1024),
    }),
  ]),
})

/** Posted content may be organzed into groupings within a given publisher. This element provides for naming the group. It is expected that publishers will have a small number of groups each of which reflect a topic or subject area.
 * @minLength 1
 * @maxLength 1024
 **/
export const GroupTitlePrimitiveTypeSchema: z.ZodSchema<GroupTitlePrimitiveType> =  z
  .string()
  .min(1)
  .max(1024)

export const HrefSchema: z.ZodSchema<Href> =  XastElementSchema.extend({
  name: z.literal('href'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const IdentifierIdTypeSchema: z.ZodSchema<IdentifierIdType> =  z.union([
  z.literal('pii'),
  z.literal('sici'),
  z.literal('doi'),
  z.literal('dai'),
  z.literal('Z39.23'),
  z.literal('ISO-std-ref'),
  z.literal('std-designation'),
  z.literal('report-number'),
  z.literal('pmid'),
  z.literal('other'),
])

/** A public standard identifier that can be used to uniquely identify the item being registered.**/
export const IdentifierSchema: z.ZodSchema<Identifier> =  IdentifierTSchema.extend({
  type: z.literal('element'),
  name: z.literal('identifier'),
  attributes: z.object({
    id_type: IdentifierIdTypeSchema,
  }),
})

/** The acronym of the institution.
 * @minLength 1
 * @maxLength 255
 **/
export const InstitutionAcronymSchema: z.ZodSchema<InstitutionAcronym> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 255
         **/
        value: z.string().min(1).max(255),
      }),
    ]),
  })

/** The acronym of the institution.
 * @minLength 1
 * @maxLength 255
 **/
export const InstitutionAcronymPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<InstitutionAcronymPrimitiveType>
> =  z.string().min(1).max(255)

/** The department within an institution.
 * @minLength 2
 * @maxLength 255
 **/
export const InstitutionDepartmentSchema: z.ZodSchema<InstitutionDepartment> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 255
         **/
        value: z.string().min(2).max(255),
      }),
    ]),
  })

/** The department within an institution.
 * @minLength 2
 * @maxLength 255
 **/
export const InstitutionDepartmentPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<InstitutionDepartmentPrimitiveType>
> =  z.string().min(2).max(255)

/** The full name of an institution.
 * @minLength 1
 * @maxLength 1024
 **/
export const InstitutionNameSchema: z.ZodSchema<InstitutionName> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 1024
         **/
        value: z.string().min(1).max(1024),
      }),
    ]),
  })

/** The full name of an institution.
 * @minLength 1
 * @maxLength 1024
 **/
export const InstitutionNamePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<InstitutionNamePrimitiveType>
> =  z.string().min(1).max(1024)

/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export const InstitutionPlaceSchema: z.ZodSchema<InstitutionPlace> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 255
         **/
        value: z.string().min(2).max(255),
      }),
    ]),
  })

/** The primary city location of the institution. institution_place gives the primary city location of the institution. When the location is a major city (e.g. New York, Amsterdam), no qualifying country or U.S. state need be given. If the city is not a major city, the appropriate country and/or state or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export const InstitutionPlacePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<InstitutionPlacePrimitiveType>
> =  z.string().min(2).max(255)

/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue.
 * @minLength 1
 * @maxLength 32
 **/
export const IssueSchema: z.ZodSchema<Issue> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: z.string().min(1).max(32),
    }),
  ]),
})

/** The issue number or name in which an article is published. The issue number takes precedence over any other name. For example, if an issue has only a seasonal name, then the season should be listed in issue.
 * @minLength 1
 * @maxLength 32
 **/
export const IssuePrimitiveTypeSchema: z.ZodSchema<IssuePrimitiveType> =  z
  .string()
  .min(1)
  .max(32)

/** A publisher-assigned number that uniquely identifies the item being registered.**/
export const ItemNumberSchema: z.ZodSchema<ItemNumber> =  ItemNumberTSchema.extend({
  type: z.literal('element'),
  name: z.literal('item_number'),
  attributes: z.object({
    item_number_type: z.string().optional(),
  }),
})

export const ItemNumberTypeSchema: z.ZodSchema<ItemNumberType> =
  XastElementSchema.extend({
    name: z.literal('item_number_type'),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        value: z.string(),
      }),
    ]),
  })

/** Journal title in a citation.**/
export const JournalTitleSchema: z.ZodSchema<JournalTitle> =  XastElementSchema.extend({
  name: z.literal('journal_title'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const KeySchema: z.ZodSchema<Key> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 128
       **/
      value: z.string().min(1).max(128),
    }),
  ]),
})

export const KeyPrimitiveTypeSchema: z.ZodSchema<KeyPrimitiveType> =  z.string()

/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)
 * @minLength 2
 * @maxLength 150
 **/
export const LabelSchema: z.ZodSchema<Label> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

/** This is the human-readable version of the name attribute which will be displayed in the CrossMark dialog. If this attribute is missing, then the value of the assertion will *not* be displayed in the dialog. Publishers may want to "hide" assertions this way in cases where the assertion value is too large or too complex to display in the dialog, but where the assertion is nonetheless valuable enough to include in API queries and metadata dumps (e.g. detailed licensing terms)
 * @minLength 2
 * @maxLength 150
 **/
export const CmAssertionLabelSchema: z.ZodSchema<CmAssertionLabel> =  z
  .string()
  .min(2)
  .max(150)

export const ItemLabelSchema: z.ZodSchema<ItemLabel> =  z.string()

export const LanguageSchema: z.ZodSchema<Language> =  z.union([
  z.literal('aa'),
  z.literal('ab'),
  z.literal('ae'),
  z.literal('af'),
  z.literal('ak'),
  z.literal('am'),
  z.literal('an'),
  z.literal('ar'),
  z.literal('as'),
  z.literal('av'),
  z.literal('ay'),
  z.literal('az'),
  z.literal('ba'),
  z.literal('be'),
  z.literal('bg'),
  z.literal('bh'),
  z.literal('bi'),
  z.literal('bm'),
  z.literal('bn'),
  z.literal('bo'),
  z.literal('br'),
  z.literal('bs'),
  z.literal('ca'),
  z.literal('ce'),
  z.literal('ch'),
  z.literal('co'),
  z.literal('cr'),
  z.literal('cs'),
  z.literal('cu'),
  z.literal('cv'),
  z.literal('cy'),
  z.literal('da'),
  z.literal('de'),
  z.literal('dv'),
  z.literal('dz'),
  z.literal('ee'),
  z.literal('el'),
  z.literal('en'),
  z.literal('eo'),
  z.literal('es'),
  z.literal('et'),
  z.literal('eu'),
  z.literal('fa'),
  z.literal('ff'),
  z.literal('fi'),
  z.literal('fj'),
  z.literal('fo'),
  z.literal('fr'),
  z.literal('fy'),
  z.literal('ga'),
  z.literal('gd'),
  z.literal('gl'),
  z.literal('gn'),
  z.literal('gu'),
  z.literal('gv'),
  z.literal('ha'),
  z.literal('he'),
  z.literal('hi'),
  z.literal('ho'),
  z.literal('hr'),
  z.literal('ht'),
  z.literal('hu'),
  z.literal('hy'),
  z.literal('hz'),
  z.literal('ia'),
  z.literal('id'),
  z.literal('ie'),
  z.literal('ig'),
  z.literal('ii'),
  z.literal('ik'),
  z.literal('io'),
  z.literal('is'),
  z.literal('it'),
  z.literal('iu'),
  z.literal('ja'),
  z.literal('jw'),
  z.literal('ka'),
  z.literal('kg'),
  z.literal('ki'),
  z.literal('kj'),
  z.literal('kk'),
  z.literal('kl'),
  z.literal('km'),
  z.literal('kn'),
  z.literal('ko'),
  z.literal('kr'),
  z.literal('ks'),
  z.literal('ku'),
  z.literal('kv'),
  z.literal('kw'),
  z.literal('ky'),
  z.literal('la'),
  z.literal('lb'),
  z.literal('lg'),
  z.literal('li'),
  z.literal('ln'),
  z.literal('lo'),
  z.literal('lt'),
  z.literal('lu'),
  z.literal('lv'),
  z.literal('mg'),
  z.literal('mu'),
  z.literal('mi'),
  z.literal('mk'),
  z.literal('ml'),
  z.literal('mn'),
  z.literal('mr'),
  z.literal('ms'),
  z.literal('mt'),
  z.literal('my'),
  z.literal('na'),
  z.literal('nb'),
  z.literal('nd'),
  z.literal('ne'),
  z.literal('ng'),
  z.literal('nl'),
  z.literal('nn'),
  z.literal('no'),
  z.literal('nr'),
  z.literal('nv'),
  z.literal('ny'),
  z.literal('oc'),
  z.literal('oj'),
  z.literal('om'),
  z.literal('or'),
  z.literal('os'),
  z.literal('pa'),
  z.literal('pi'),
  z.literal('pl'),
  z.literal('ps'),
  z.literal('pt'),
  z.literal('qu'),
  z.literal('rm'),
  z.literal('rn'),
  z.literal('ro'),
  z.literal('ru'),
  z.literal('rw'),
  z.literal('sa'),
  z.literal('sc'),
  z.literal('sd'),
  z.literal('se'),
  z.literal('sg'),
  z.literal('si'),
  z.literal('sk'),
  z.literal('sl'),
  z.literal('sm'),
  z.literal('sn'),
  z.literal('so'),
  z.literal('sq'),
  z.literal('sr'),
  z.literal('ss'),
  z.literal('st'),
  z.literal('su'),
  z.literal('sv'),
  z.literal('sw'),
  z.literal('ta'),
  z.literal('te'),
  z.literal('tg'),
  z.literal('th'),
  z.literal('ti'),
  z.literal('tk'),
  z.literal('tl'),
  z.literal('tn'),
  z.literal('to'),
  z.literal('tr'),
  z.literal('ts'),
  z.literal('tt'),
  z.literal('tw'),
  z.literal('ty'),
  z.literal('ug'),
  z.literal('uk'),
  z.literal('ur'),
  z.literal('uz'),
  z.literal('ve'),
  z.literal('vi'),
  z.literal('vo'),
  z.literal('wa'),
  z.literal('wo'),
  z.literal('xh'),
  z.literal('yi'),
  z.literal('yo'),
  z.literal('za'),
  z.literal('zh'),
])

/** Last page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export const LastPageSchema: z.ZodSchema<LastPage> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: z.string().min(1).max(32),
    }),
  ]),
})

/** Last page number of an item.
 * @minLength 1
 * @maxLength 32
 **/
export const LastPagePrimitiveTypeSchema: z.ZodSchema<LastPagePrimitiveType> =  z
  .string()
  .min(1)
  .max(32)

export const LevelSequenceNumberSchema: z.ZodSchema<LevelSequenceNumber> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @maxInclusive 9
         * @maxLength 1
         * @minLength 1
         **/
        value: z.string().min(1).max(1),
      }),
    ]),
  })

export const ContentItemLevelSequenceNumberSchema: z.ZodLazy<
  z.ZodSchema<ContentItemLevelSequenceNumber>
> =  z.string()

export const ItemLinkHeaderRelationshipSchema: z.ZodSchema<ItemLinkHeaderRelationship> =
  z.literal('dul')

export const DateTMediaTypeSchema: z.ZodSchema<DateTMediaType> =  z.union([
  z.literal('online'),
  z.literal('print'),
  z.literal('other'),
])

export const MediaTypeSchema: z.ZodSchema<MediaType> =  z.union([
  z.literal('print'),
  z.literal('electronic'),
])

export const MimeTypeSchema: z.ZodSchema<MimeType> =  z.union([
  z.literal('text/css'),
  z.literal('text/csv'),
  z.literal('text/enriched'),
  z.literal('text/html'),
  z.literal('text/plain'),
  z.literal('text/richtext'),
  z.literal('text/rtf'),
  z.literal('text/sgml'),
  z.literal('text/tab-separated-values'),
  z.literal('text/xml'),
  z.literal('text/xml-external-parsed-entity'),
  z.literal('multipart/mixed'),
  z.literal('multipart/alternative'),
  z.literal('multipart/digest'),
  z.literal('multipart/parallel'),
  z.literal('multipart/appledouble'),
  z.literal('multipart/header-set'),
  z.literal('multipart/form-data'),
  z.literal('multipart/report'),
  z.literal('multipart/voice-message'),
  z.literal('multipart/signed'),
  z.literal('multipart/encrypted'),
  z.literal('multipart/byteranges'),
  z.literal('application/eps'),
  z.literal('application/epub+zip'),
  z.literal('application/octet-stream'),
  z.literal('application/postscript'),
  z.literal('application/rtf'),
  z.literal('application/applefile'),
  z.literal('application/mac-binhex40'),
  z.literal('application/wordperfect5.1'),
  z.literal('application/pdf'),
  z.literal('application/x-gzip'),
  z.literal('application/zip'),
  z.literal('application/gzip'),
  z.literal('application/macwriteii'),
  z.literal('application/msword'),
  z.literal('application/sgml'),
  z.literal('application/cals-1840'),
  z.literal('application/pgp-encrypted'),
  z.literal('application/pgp-signature'),
  z.literal('application/pgp-keys'),
  z.literal('application/sgml-open-catalog'),
  z.literal('application/rc'),
  z.literal('application/xml'),
  z.literal('application/xml-external-parsed-entity'),
  z.literal('application/xml-dtd'),
  z.literal('application/batch-SMTP'),
  z.literal('application/ipp'),
  z.literal('application/ocsp-request'),
  z.literal('application/ocsp-response'),
  z.literal('application/vnd.wolfram.mathematica'),
  z.literal('application/vnd.wolfram.mathematica.package'),
  z.literal('application/vnd.wolfram.player'),
  z.literal('application/vnd.oasis.opendocument.text'),
  z.literal('application/vnd.oasis.opendocument.presentation'),
  z.literal('application/vnd.oasis.opendocument.spreadsheet'),
  z.literal('application/vnd.ms-asf'),
  z.literal('application/vnd.ms-excel'),
  z.literal('application/vnd.ms-powerpoint'),
  z.literal('application/vnd.openxmlformats-officedocument.presentationml.presentation'),
  z.literal('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
  z.literal('application/vnd.openxmlformats-officedocument.wordprocessingml.document'),
  z.literal('application/epub+zip'),
  z.literal('application/regex.clinical-trial-number'),
  z.literal('image/fits'),
  z.literal('image/jpeg'),
  z.literal('image/gif'),
  z.literal('image/ief'),
  z.literal('image/g3fax'),
  z.literal('image/tiff'),
  z.literal('image/Graphics-Metafile'),
  z.literal('image/png'),
  z.literal('audio/basic'),
  z.literal('audio/32kadpcm'),
  z.literal('audio/mpeg'),
  z.literal('audio/parityfec'),
  z.literal('audio/MP4A-LATM'),
  z.literal('audio/mpa-robust'),
  z.literal('video/x-ms-wmv'),
  z.literal('video/avi'),
  z.literal('video/mpeg'),
  z.literal('video/quicktime'),
  z.literal('video/pointer'),
  z.literal('video/parityfec'),
  z.literal('video/MP4V-ES'),
  z.literal('video/mp4'),
  z.literal('chemical/x-alchemy'),
  z.literal('chemical/x-cache-csf'),
  z.literal('chemical/x-cactvs-binary'),
  z.literal('chemical/x-cactvs-binary'),
  z.literal('chemical/x-cactvs-binary'),
  z.literal('chemical/x-cdx'),
  z.literal('chemical/x-cerius'),
  z.literal('chemical/x-chemdraw'),
  z.literal('chemical/x-cif'),
  z.literal('chemical/x-mmcif'),
  z.literal('chemical/x-chem3d'),
  z.literal('chemical/x-cmdf'),
  z.literal('chemical/x-compass'),
  z.literal('chemical/x-crossfire'),
  z.literal('chemical/x-cml'),
  z.literal('chemical/x-csml'),
  z.literal('chemical/x-ctx'),
  z.literal('chemical/x-cxf'),
  z.literal('chemical/x-daylight-smiles'),
  z.literal('chemical/x-embl-dl-nucleotide'),
  z.literal('chemical/x-galactic-spc'),
  z.literal('chemical/x-gamess-input'),
  z.literal('chemical/x-gaussian-input'),
  z.literal('chemical/x-gaussian-checkpoint'),
  z.literal('chemical/x-gaussian-cube'),
  z.literal('chemical/x-gcg8-sequence'),
  z.literal('chemical/x-genbank'),
  z.literal('chemical/x-isostar'),
  z.literal('chemical/x-jcamp-dx'),
  z.literal('chemical/x-kinemage'),
  z.literal('chemical/x-macmolecule'),
  z.literal('chemical/x-macromodel-input'),
  z.literal('chemical/x-mdl-molfile'),
  z.literal('chemical/x-mdl-rdfile'),
  z.literal('chemical/x-mdl-rxnfile'),
  z.literal('chemical/x-mdl-sdfile'),
  z.literal('chemical/x-mdl-tgf'),
  z.literal('chemical/x-mif'),
  z.literal('chemical/x-mol2'),
  z.literal('chemical/x-molconn-Z'),
  z.literal('chemical/x-mopac-input'),
  z.literal('chemical/x-mopac-graph'),
  z.literal('chemical/x-ncbi-asn1'),
  z.literal('chemical/x-ncbi-asn1-binary'),
  z.literal('chemical/x-pdb'),
  z.literal('chemical/x-swissprot'),
  z.literal('chemical/x-vamas-iso14976'),
  z.literal('chemical/x-vmd'),
  z.literal('chemical/x-xtel'),
  z.literal('chemical/x-xyz'),
  z.literal('model/stl'),
  z.literal('model/x.stl-binary'),
  z.literal('model/x.stl-ascii'),
  z.literal('model/vrml'),
  z.literal('audio/x-wav'),
  z.literal('video/x-flv'),
  z.literal('Data/spcvue.htm'),
])

/** Month of publication. The month must be expressed in numeric format rather spelling out the name (e.g.. submit "10", not "October"). The month must be expressed with a leading zero if it is less than 10 (e.g. submit "05", not "5"). When a journal issue has both an issue number and a season, the issue number should be placed in issue. If the month of publication is not known, the season should be placed in month as a two-digit value as follows: Season Value Spring 21 Summer 22 Autumn 23 Winter 24 First Quarter 31 Second Quarter 32 Third Quarter 33 Fourth Quarter 34 In cases when an issue covers multiple months, e.g. "March-April", include only the digits for the first month of the range.
 * @maxInclusive 34
 * @maxLength 2
 * @minLength 2
 **/
export const MonthSchema: z.ZodSchema<Month> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

export const CollectionMultiResolutionSchema: z.ZodSchema<CollectionMultiResolution> =
  z.union([z.literal('lock'), z.literal('unlock')])

export const ArchiveNameSchema: z.ZodSchema<ArchiveName> =  z.union([
  z.literal('CLOCKSS'),
  z.literal('LOCKSS'),
  z.literal('Portico'),
  z.literal('KB'),
  z.literal('Internet Archive'),
  z.literal('DWT'),
])

/** This is the machine-readable name of the assertion. Use the "label" attribute to provide a human-readable version of the name.
 * @minLength 2
 * @maxLength 150
 **/
export const CmAssertionNameSchema: z.ZodSchema<CmAssertionName> =  z
  .string()
  .min(2)
  .max(150)

export const NameNameStyleSchema: z.ZodSchema<NameNameStyle> =  z.union([
  z.literal('western'),
  z.literal('eastern'),
  z.literal('islensk'),
  z.literal('given-only'),
])

export const StringNameNameStyleSchema: z.ZodSchema<StringNameNameStyle> =  z.union([
  z.literal('western'),
  z.literal('eastern'),
  z.literal('islensk'),
  z.literal('given-only'),
])

export const NameStyleSchema: z.ZodSchema<NameStyle> =  z.union([
  z.literal('western'),
  z.literal('eastern'),
  z.literal('islensk'),
  z.literal('given-only'),
])

/** The ORCID iD for an author.**/
export const ORCIDSchema: z.ZodSchema<ORCID> =  OrcidTSchema.extend({
  type: z.literal('element'),
  name: z.literal('ORCID'),
  attributes: z.object({
    authenticated: z.string(),
  }),
})

/** The publisher may want to control the order in which assertions are displayed to the user in the CrossMark dialog. All assertions will be sorted by this element if it is present.**/
export const OrderSchema: z.ZodSchema<Order> =  XastElementSchema.extend({
  name: z.literal('order'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** The title of an item in its original language if the registration is for a translation of a work.**/
export const OriginalLanguageTitleSchema: z.ZodSchema<OriginalLanguageTitle> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('original_language_title'),
    attributes: z.object({
      language: LanguageSchema.optional(),
    }),
    /** XastElement is self-closing */
    children: z.tuple([]),
  })

/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages.
 * @minLength 1
 * @maxLength 100
 **/
export const OtherPagesSchema: z.ZodSchema<OtherPages> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 100
       **/
      value: z.string().min(1).max(100),
    }),
  ]),
})

/** When an item has non-contiguous page information, capture the first page range in first_page and last_page. Any additional page information should be captured in other_pages.
 * @minLength 1
 * @maxLength 100
 **/
export const OtherPagesPrimitiveTypeSchema: z.ZodSchema<OtherPagesPrimitiveType> =  z
  .string()
  .min(1)
  .max(100)

/** The container for information about page ranges.**/
export const PagesSchema: z.ZodSchema<Pages> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('pages'),
  children: z.array(z.union([FirstPageSchema, LastPageSchema, OtherPagesSchema])),
})

export const ParentDoiSchema: z.ZodSchema<ParentDoi> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 6
       * @maxLength 2048
       **/
      value: z.string().min(6).max(2048),
    }),
  ]),
})

export const SaComponentParentDoiSchema: z.ZodSchema<SaComponentParentDoi> =  z.string()

export const ComponentParentRelationSchema: z.ZodSchema<ComponentParentRelation> =
  z.union([
    z.literal('isPartOf'),
    z.literal('isReferencedBy'),
    z.literal('isRequiredBy'),
    z.literal('isTranslationOf'),
  ])

/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element.
 * @minLength 1
 * @maxLength 15
 **/
export const PartNumberSchema: z.ZodSchema<PartNumber> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: z.string().min(1).max(15),
    }),
  ]),
})

/** The part number of a given volume. In some cases, a book set will have multiple parts, and then one or more volumes within each part. The part number of a given volume should be deposited in this element.
 * @minLength 1
 * @maxLength 15
 **/
export const PartNumberPrimitiveTypeSchema: z.ZodSchema<PartNumberPrimitiveType> =  z
  .string()
  .min(1)
  .max(15)

export const PrefixSchema: z.ZodSchema<Prefix> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('prefix'),
  attributes: z.object({
    language: LanguageSchema.optional(),
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH.
 * @minLength 1
 * @maxLength 255
 **/
export const ProceedingsSubjectSchema: z.ZodSchema<ProceedingsSubject> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 255
         **/
        value: z.string().min(1).max(255),
      }),
    ]),
  })

/** The subject of the conference proceeding, e.g. "Computer Graphics" is the subject matter of SIGGRAPH.
 * @minLength 1
 * @maxLength 255
 **/
export const ProceedingsSubjectPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ProceedingsSubjectPrimitiveType>
> =  z.string().min(1).max(255)

/** The undifferentiated title of a conference proceeding.
 * @minLength 1
 * @maxLength 511
 **/
export const ProceedingsTitleSchema: z.ZodSchema<ProceedingsTitle> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 511
         **/
        value: z.string().min(1).max(511),
      }),
    ]),
  })

/** The undifferentiated title of a conference proceeding.
 * @minLength 1
 * @maxLength 511
 **/
export const ProceedingsTitlePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<ProceedingsTitlePrimitiveType>
> =  z.string().min(1).max(511)

export const CollectionPropertySchema: z.ZodSchema<CollectionProperty> =  z.union([
  z.literal('list-based'),
  z.literal('country-based'),
  z.literal('crawler-based'),
  z.literal('text-mining'),
  z.literal('unspecified'),
  z.literal('syndication'),
  z.literal('link-header'),
])

/** Used to define a publication (book, journal, etc) for pending publication content. A title must be supplied, as well as an ISSN, ISBN, or title-level DOI**/
export const PublicationSchema: z.ZodSchema<Publication> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('publication'),
  children: z.array(FullTitleSchema),
})

export const StandardMetadataPublicationStatusSchema: z.ZodLazy<
  z.ZodSchema<StandardMetadataPublicationStatus>
> =  z.union([z.literal('released'), z.literal('withdrawn')])

export const PublicationTypeSchema: z.ZodSchema<PublicationType> =  z.union([
  z.literal('abstract_only'),
  z.literal('full_text'),
  z.literal('bibliographic_record'),
])

/** A container for item identification numbers set by a publisher.**/
export const PublisherItemSchema: z.ZodSchema<PublisherItem> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('publisher_item'),
  children: z.array(z.union([IdentifierSchema, ItemNumberSchema])),
})

/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record.
 * @minLength 1
 * @maxLength 255
 **/
export const PublisherNameSchema: z.ZodSchema<PublisherName> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: z.string().min(1).max(255),
    }),
  ]),
})

/** The name of the publisher of a book or conference proceedings. This name may differ from that of the organization registering or maintaining the metadata record.
 * @minLength 1
 * @maxLength 255
 **/
export const PublisherNamePrimitiveTypeSchema: z.ZodSchema<PublisherNamePrimitiveType> =
  z.string().min(1).max(255)

/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export const PublisherPlaceSchema: z.ZodSchema<PublisherPlace> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 255
         **/
        value: z.string().min(2).max(255),
      }),
    ]),
  })

/** publisher_place gives the primary city location of the publisher.  If the city is not a major city, the appropriate country, state, or province should be added.
 * @minLength 2
 * @maxLength 255
 **/
export const PublisherPlacePrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<PublisherPlacePrimitiveType>
> =  z.string().min(2).max(255)

export const NoisbnReasonSchema: z.ZodSchema<NoisbnReason> =  z.union([
  z.literal('archive_volume'),
  z.literal('monograph'),
  z.literal('simple_series'),
])

export const StdAltAsPublishedReasonSchema: z.ZodSchema<StdAltAsPublishedReason> =
  z.string()

export const PeerReviewRecommendationSchema: z.ZodSchema<PeerReviewRecommendation> =
  z.union([
    z.literal('major-revision'),
    z.literal('minor-revision'),
    z.literal('reject'),
    z.literal('reject-with-resubmit'),
    z.literal('accept'),
    z.literal('accept-with-reservation'),
  ])

export const ReferenceDistributionOptsSchema: z.ZodSchema<ReferenceDistributionOpts> =
  z.union([z.literal('none'), z.literal('query'), z.literal('any')])

export const RegAgencySchema: z.ZodSchema<RegAgency> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const ComponentRegAgencySchema: z.ZodSchema<ComponentRegAgency> =  z.string()

/** The organization responsible for the information being registered.
 * @minLength 1
 * @maxLength 255
 **/
export const RegistrantSchema: z.ZodSchema<Registrant> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 255
       **/
      value: z.string().min(1).max(255),
    }),
  ]),
})

/** The organization responsible for the information being registered.
 * @minLength 1
 * @maxLength 255
 **/
export const RegistrantPrimitiveTypeSchema: z.ZodSchema<RegistrantPrimitiveType> =  z
  .string()
  .min(1)
  .max(255)

/** The URI associated with a DOI.**/
export const ResourceSchema: z.ZodSchema<Resource> =  ResourceTSchema.extend({
  type: z.literal('element'),
  name: z.literal('resource'),
  attributes: z.object({
    content_version: ResourceContentVersionSchema,
    mime_type: MimeTypeSchema.optional(),
  }),
})

/** Required attribute. First submission defined as revision round zero**/
export const RevisionRoundSchema: z.ZodSchema<RevisionRound> =  XastElementSchema.extend({
  name: z.literal('revision-round'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** Running numbers to specify the various reports (ex: RC1 to RC4)**/
export const RunningNumberSchema: z.ZodSchema<RunningNumber> =  XastElementSchema.extend({
  name: z.literal('running_number'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** An individual SCN policy
 * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
 * @minLength 1
 * @maxLength 2048
 **/
export const ScnPolicyRefSchema: z.ZodSchema<ScnPolicyRef> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
       * @minLength 1
       * @maxLength 2048
       **/
      value: z
        .string()
        .min(1)
        .max(2048)
        .regex(/([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*/),
    }),
  ]),
})

/** An individual SCN policy
 * @pattern ([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*
 * @minLength 1
 * @maxLength 2048
 **/
export const ScnPolicyRefPrimitiveTypeSchema: z.ZodSchema<ScnPolicyRefPrimitiveType> =  z
  .string()
  .min(1)
  .max(2048)
  .regex(/([hH][tT][tT][pP]|[hH][tT][tT][pP][sS]|[fF][tT][pP]):\/\/.*/)

/** A group of related SCN policies**/
export const ScnPolicySetSchema: z.ZodSchema<ScnPolicySet> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('scn_policy_set'),
  attributes: z.object({
    /** A date, unknown format **/
    start_date: z.string().optional(),
  }),
  children: z.array(ScnPolicyRefSchema),
})

export const SequenceSchema: z.ZodSchema<Sequence> =  z.union([
  z.literal('first'),
  z.literal('additional'),
])

/** The series number within a specific published conference discipline.
 * @minLength 1
 * @maxLength 15
 **/
export const SeriesNumberSchema: z.ZodSchema<SeriesNumber> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 15
       **/
      value: z.string().min(1).max(15),
    }),
  ]),
})

/** The series number within a specific published conference discipline.
 * @minLength 1
 * @maxLength 15
 **/
export const SeriesNumberPrimitiveTypeSchema: z.ZodSchema<SeriesNumberPrimitiveType> =  z
  .string()
  .min(1)
  .max(15)

/** Book series title in a citation.**/
export const SeriesTitleSchema: z.ZodSchema<SeriesTitle> =  XastElementSchema.extend({
  name: z.literal('series_title'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const SetSchema: z.ZodSchema<Set> =  XastElementSchema.extend({
  name: z.literal('set'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number.
 * @minLength 1
 * @maxLength 15
 **/
export const SpecialNumberingSchema: z.ZodSchema<SpecialNumbering> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 1
         * @maxLength 15
         **/
        value: z.string().min(1).max(15),
      }),
    ]),
  })

/** Issue level numbering for supplements or special issues. Text defining the type of special issue (e.g. "suppl") should be included in this element along with the number.
 * @minLength 1
 * @maxLength 15
 **/
export const SpecialNumberingPrimitiveTypeSchema: z.ZodLazy<
  z.ZodSchema<SpecialNumberingPrimitiveType>
> =  z.string().min(1).max(15)

export const PeerReviewStageSchema: z.ZodSchema<PeerReviewStage> =  z.union([
  z.literal('pre-publication'),
  z.literal('post-publication'),
])

/** A wrapper for standards body information.**/
export const StandardsBodySchema: z.ZodSchema<StandardsBody> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('standards_body'),
  children: z.tuple([]),
})

export const StartDateSchema: z.ZodSchema<StartDate> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const StartDaySchema: z.ZodSchema<StartDay> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 31
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

export const StartMonthSchema: z.ZodSchema<StartMonth> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 34
       * @maxLength 2
       * @minLength 2
       **/
      value: z.string().min(2).max(2),
    }),
  ]),
})

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export const StartYearSchema: z.ZodSchema<StartYear> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: z.string().min(4).max(4),
    }),
  ]),
})

/** Designator for standard from which the current deposit is adopted.
   * @minLength 2
  * @maxLength 150

**/
export const StdAdoptedFromSchema: z.ZodSchema<StdAdoptedFrom> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 150
         **/
        value: z.string().min(2).max(150),
      }),
    ]),
  })

/** Designator for standard from which the current deposit is adopted.
   * @minLength 2
  * @maxLength 150

**/
export const StdDesignatorvalueTSchema: z.ZodSchema<StdDesignatorvalueT> =  z
  .string()
  .min(2)
  .max(150)

export const StdAltScriptSchema: z.ZodSchema<StdAltScript> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

export const StdDesignatorSchema: z.ZodSchema<StdDesignator> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

export const StdDesignatorTSchema: z.ZodSchema<StdDesignatorT> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.string(),
  })

/** Designator for the previous revision of the standard being deposited. (note: use alt_as_published for revisions within designators having common stem)
   * @minLength 2
  * @maxLength 150

**/
export const StdRevisionOfSchema: z.ZodSchema<StdRevisionOf> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

/** Provides for defining a DOI for a set of standards (sometimes know as truncated form).**/
export const StdSetDesignatorSchema: z.ZodSchema<StdSetDesignator> =
  StdDesignatorTSchema.extend({
    type: z.literal('element'),
    name: z.literal('std_set_designator'),
    attributes: z.object({
      family: z.string(),
    }),
  })

/** Designator for standard being replaced by the standard being deposited.
 * @minLength 2
 * @maxLength 150
 **/
export const StdSupersedesSchema: z.ZodSchema<StdSupersedes> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 2
       * @maxLength 150
       **/
      value: z.string().min(2).max(150),
    }),
  ]),
})

/** Provides for defining a DOI for a group of closely related standard documents (undated form is a stem for any dated form)**/
export const StdUndatedDesignatorSchema: z.ZodSchema<StdUndatedDesignator> =
  StdDesignatorTSchema.extend({
    type: z.literal('element'),
    name: z.literal('std_undated_designator'),
    attributes: z.object({
      family: z.string(),
      set: z.string(),
    }),
  })

export const StdVariantFormSchema: z.ZodSchema<StdVariantForm> =
  XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([
      z.object({
        type: z.literal('text'),
        /**
         * @minLength 2
         * @maxLength 150
         **/
        value: z.string().min(2).max(150),
      }),
    ]),
  })

/** The sub-title portion of a title.**/
export const SubtitleSchema: z.ZodSchema<Subtitle> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('subtitle'),
  children: z.tuple([]),
})

/** The suffix of an author name, e.g. junior, senior, III.
 * @minLength 1
 * @maxLength 10
 **/
export const SuffixSchema: z.ZodSchema<Suffix> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 10
       **/
      value: z.string().min(1).max(10),
    }),
  ]),
})

/** The suffix of an author name, e.g. junior, senior, III.
 * @minLength 1
 * @maxLength 10
 **/
export const SuffixPrimitiveTypeSchema: z.ZodSchema<SuffixPrimitiveType> =  z
  .string()
  .min(1)
  .max(10)

/** The family_name of a contributor.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export const SurnameSchema: z.ZodSchema<Surname> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @pattern [^\d\?]*[^\?\s]+[^\d]*
       * @minLength 1
       * @maxLength 60
       **/
      value: z
        .string()
        .min(1)
        .max(60)
        .regex(/[^\d\?]*[^\?\s]+[^\d]*/),
    }),
  ]),
})

/** The family_name of a contributor.
 * @pattern [^\d\?]*[^\?\s]+[^\d]*
 * @minLength 1
 * @maxLength 60
 **/
export const SurnamePrimitiveTypeSchema: z.ZodSchema<SurnamePrimitiveType> =  z
  .string()
  .min(1)
  .max(60)
  .regex(/[^\d\?]*[^\?\s]+[^\d]*/)

/** An integer representation of date and time that serves as a version number for the record that is being deposited, used to uniquely identify batch files and DOI values when a DOI has been updated one or more times.**/
export const TimestampSchema: z.ZodSchema<Timestamp> =  XastElementSchema.extend({
  name: z.literal('timestamp'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** The title of the item being registered.**/
export const TitleSchema: z.ZodSchema<Title> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('title'),
  children: z.tuple([]),
})

/** A container for the title and original language title elements.**/
export const TitlesSchema: z.ZodSchema<Titles> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('titles'),
  children: z.array(z.union([OriginalLanguageTitleSchema, SubtitleSchema, TitleSchema])),
})

export const InstitutionIdTypeSchema: z.ZodSchema<InstitutionIdType> =  z.union([
  z.literal('ror'),
  z.literal('isni'),
  z.literal('wikidata'),
])

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
export const CmUpdateTypeSchema: z.ZodSchema<CmUpdateType> =  z.union([
  z.literal('addendum'),
  z.literal('clarification'),
  z.literal('correction'),
  z.literal('corrigendum'),
  z.literal('erratum'),
  z.literal('expression_of_concern'),
  z.literal('new_edition'),
  z.literal('new_version'),
  z.literal('partial_retraction'),
  z.literal('removal'),
  z.literal('retraction'),
  z.literal('withdrawal'),
])

export const PeerReviewTypeSchema: z.ZodSchema<PeerReviewType> =  z.union([
  z.literal('referee-report'),
  z.literal('editor-report'),
  z.literal('author-comment'),
  z.literal('community-comment'),
  z.literal('manuscript'),
  z.literal('aggregate'),
  z.literal('recommendation'),
])

export const PostedContentTypeSchema: z.ZodSchema<PostedContentType> =  z.union([
  z.literal('preprint'),
  z.literal('working_paper'),
  z.literal('letter'),
  z.literal('dissertation'),
  z.literal('report'),
  z.literal('review'),
  z.literal('other'),
])

export const UndatedSchema: z.ZodSchema<Undated> =  XastElementSchema.extend({
  name: z.literal('undated'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** A citation to an item that is not structured with the Crossref citation model.  'unstructured_citation' supports deposit of references for which no structural information is available.**/
export const UnstructuredCitationSchema: z.ZodSchema<UnstructuredCitation> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('unstructured_citation'),
    children: z.tuple([]),
  })

/** The DOI of the content being updated (e.g. corrected, retracted, etc.) In the CrossMark Terms and Conditions "updates" are defined as changes that are likely to "change the reader???s interpretation or crediting of the work." That is, *editorially significant* changes. "Updates" should not include minor changes to spelling, punctuation, formatting, etc.**/
export const UpdateSchema: z.ZodSchema<Update> =  DoiTSchema.extend({
  type: z.literal('element'),
  name: z.literal('update'),
  attributes: z.object({
    /** The date of the update will be displayed in the CrossMark dialog and can help the researcher easily tell whether they are likley to have seen the update.	**/
    /** A date, unknown format **/
    date: z.string(),
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
    type: CmUpdateTypeSchema,
  }),
})

/** A document might provide updates (e.g. corrections, clarifications, retractions) to several other documents. When this is the case, the DOIs of the documents that are being *updated* should be listed here.**/
export const UpdatesSchema: z.ZodSchema<Updates> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('updates'),
  children: z.array(UpdateSchema),
})

export const VersionSchema: z.ZodSchema<Version> =  XastElementSchema.extend({
  name: z.literal('version'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings.
 * @minLength 1
 * @maxLength 32
 **/
export const VolumeSchema: z.ZodSchema<Volume> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @minLength 1
       * @maxLength 32
       **/
      value: z.string().min(1).max(32),
    }),
  ]),
})

/** The volume number of a published journal, or the number of a printed volume for a book or conference proceedings.
 * @minLength 1
 * @maxLength 32
 **/
export const VolumePrimitiveTypeSchema: z.ZodSchema<VolumePrimitiveType> =  z
  .string()
  .min(1)
  .max(32)

/** Book volume title in a citation.**/
export const VolumeTitleSchema: z.ZodSchema<VolumeTitle> =  XastElementSchema.extend({
  name: z.literal('volume_title'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

/** Basic data types for date parts.
 * @maxInclusive 2200
 * @maxLength 4
 * @minLength 4
 **/
export const YearSchema: z.ZodSchema<Year> =  XastElementSchema.extend({
  name: z.string(),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      /**
       * @maxInclusive 2200
       * @maxLength 4
       * @minLength 4
       **/
      value: z.string().min(4).max(4),
    }),
  ]),
})

export const DateTSchema: z.ZodSchema<DateT> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.string(),
  attributes: z.object({
    media_type: DateTMediaTypeSchema,
  }),
  children: z.array(z.union([DaySchema, MonthSchema, YearSchema])),
})

/** The date a manuscript was accepted for publication.**/
export const AcceptanceDateSchema: z.ZodSchema<AcceptanceDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('acceptance_date'),
})

/** The date on which a dissertation was accepted by the institution awarding the degree, a report was approved, or a standard was accepted.**/
export const ApprovalDateSchema: z.ZodSchema<ApprovalDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('approval_date'),
})

/** Used to indicate the designated archiving organization(s) for an item.**/
export const ArchiveSchema: z.ZodSchema<Archive> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('archive'),
  attributes: z.object({
    name: ArchiveNameSchema,
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

/** Container element for archive information**/
export const ArchiveLocationsSchema: z.ZodSchema<ArchiveLocations> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('archive_locations'),
    children: z.array(ArchiveSchema),
  })

/** Statement of competing interest supplied by a review author during the review process.**/
export const CompetingInterestStatementSchema: z.ZodSchema<CompetingInterestStatement> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('competing_interest_statement'),
    attributes: z.object({
      language: LanguageSchema.optional(),
    }),
    /** XastElement is self-closing */
    children: z.tuple([]),
  })

/** The date a piece of content was created.**/
export const ContentDateSchema: z.ZodSchema<ContentDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('content_date'),
})

/** The date a database or dataset item was created.**/
export const CreationDateSchema: z.ZodSchema<CreationDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('creation_date'),
})

/** This should be a simple Internet domain name or subdomain name (e.g. www.psychoceramics.org or psychoceramics.org). It is used to identify when a referring URL is coming from a Crossmark domain. A "crossmark_domain" is made up of two subelements; a "domain" and a "filter". The filter is only needed for use in situations where content from multiple publishers/publications is on the same host with the same domain name (e.g. an aggregator) and one needs to use the referrer's URI "path" to further determine whether the content in a crossmark domain.**/
export const CrossmarkDomainSchema: z.ZodSchema<CrossmarkDomain> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('crossmark_domain'),
    children: z.array(z.union([DomainSchema, FilterSchema])),
  })

/** Container element for crossmark_domain. A list of domains where the publisher maintains updates and corrections to their content. Minimally, one of these should include the Internet domain name of the publisher's web site(s), but the publisher might also decide to include 3rd party aggregators (e.g. Ebsco, IngentaConnect) or archives with which the publisher has agreements to update the content**/
export const CrossmarkDomainsSchema: z.ZodSchema<CrossmarkDomains> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('crossmark_domains'),
    children: z.array(CrossmarkDomainSchema),
  })

export const DegreesSchema: z.ZodSchema<Degrees> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('degrees'),
  attributes: z.object({
    language: LanguageSchema.optional(),
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

/** Information about the organization submitting DOI metadata to Crossref**/
export const DepositorSchema: z.ZodSchema<Depositor> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('depositor'),
  children: z.array(z.union([DepositorNameSchema, EmailAddressSchema])),
})

/** A narrative description of a file (e.g. a figure caption or video description).**/
export const DescriptionSchema: z.ZodSchema<Description> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('description'),
  attributes: z.object({
    language: LanguageSchema.optional(),
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

/** A wrapper for designators or other primary identifiers for a standard.**/
export const DesignatorsSchema: z.ZodSchema<Designators> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('designators'),
  children: z.array(z.union([StdAdoptedFromSchema, StdRevisionOfSchema, StdSupersedesSchema])),
})

/** A narrative description of a component's file format and/or file extension.**/
export const FormatSchema: z.ZodSchema<Format> =  FormatTSchema.extend({
  type: z.literal('element'),
  name: z.literal('format'),
  attributes: z.object({
    mime_type: MimeTypeSchema.optional(),
  }),
})

/** Container for information related to the DOI batch submission. This element uniquely identifies the batch deposit to Crossref and contains information that will be used as a reference in error messages triggered during submission processing.
 **/
export const HeadSchema: z.ZodSchema<Head> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('head'),
  children: z.array(
    z.union([DepositorSchema, DoiBatchIdSchema, RegistrantSchema, TimestampSchema]),
  ),
})

/** Identifier for an institution or organization (currently supported: ROR, ISNI, Wikidata). Identifiers must be included as a URI**/
export const InstitutionIdSchema: z.ZodSchema<InstitutionId> =  PIDSchema.extend({
  type: z.literal('element'),
  name: z.literal('institution_id'),
  attributes: z.object({
    type: InstitutionIdTypeSchema,
  }),
})

/** Member's custom statement of intent to publish content for which a pending publication DOI has been created**/
export const IntentStatementSchema: z.ZodSchema<IntentStatement> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('intent_statement'),
    attributes: z.object({
      language: LanguageSchema.optional(),
    }),
    children: z.array(z.union([ASchema, XrefFacesSchema, XrefFacesSchema, XrefFacesSchema])),
  })

/** The ISBN assigned to an entity.**/
export const IsbnSchema: z.ZodSchema<Isbn> =  IsbnTSchema.extend({
  type: z.literal('element'),
  name: z.literal('isbn'),
  attributes: z.object({
    media_type: MediaTypeSchema,
  }),
})

/** The ISSN assigned to the title being registered.**/
export const IssnSchema: z.ZodSchema<Issn> =  IssnTSchema.extend({
  type: z.literal('element'),
  name: z.literal('issn'),
  attributes: z.object({
    media_type: MediaTypeSchema,
  }),
})

/** A container used to associate a URI with the DOI being registered.**/
export const ItemSchema: z.ZodSchema<Item> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('item'),
  attributes: z.object({
    country: ItemCountrySchema.optional(),
    crawler: ItemCrawlerSchema.optional(),
    label: z.string().optional(),
    link_header_relationship: ItemLinkHeaderRelationshipSchema,
  }),
  children: z.array(z.union([DoiSchema, ResourceSchema])),
})

export const NameSchema: z.ZodSchema<Name> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('name'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    nameStyle: NameNameStyleSchema,
  }),
  children: z.array(z.union([GivenNameSchema, PrefixSchema, SuffixSchema])),
})

/** Identifies books or conference proceedings that have no ISBN assigned.**/
export const NoisbnSchema: z.ZodSchema<Noisbn> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('noisbn'),
  attributes: z.object({
    reason: NoisbnReasonSchema,
  }),
  /** XastElement is self-closing */
  children: z.tuple([]),
})

/** The name of an organization (as opposed to a person) that contributed to an item. If an item was authored by individuals in addition to one or more organizations, person_name and organization may be freely intermixed within contributors.**/
export const OrganizationSchema: z.ZodSchema<Organization> =  OrganizationTSchema.extend({
  type: z.literal('element'),
  name: z.literal('organization'),
  attributes: z.object({
    contributor_role: ContributorRoleSchema,
    language: LanguageSchema.optional(),
    nameStyle: NameStyleSchema.optional(),
    sequence: SequenceSchema,
  }),
})

/** The date a pre-print was posted to a repository.**/
export const PostedDateSchema: z.ZodSchema<PostedDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('posted_date'),
})

/** The date of publication. Multiple dates are allowed to allow for different dates of publication for online and print versions.**/
export const PublicationDateSchema: z.ZodSchema<PublicationDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('publication_date'),
})

/** A container for information about the publisher of the item being registered**/
export const PublisherSchema: z.ZodSchema<Publisher> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('publisher'),
  children: z.array(z.union([PublisherNameSchema, PublisherPlaceSchema])),
})

/** The date a review was published to a repository.**/
export const ReviewDateSchema: z.ZodSchema<ReviewDate> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('review_date'),
  children: z.array(z.union([DaySchema, MonthSchema, YearSchema])),
})

/** A wrapper for Scholarly Sharing Network (SCN) policy information**/
export const ScnPoliciesSchema: z.ZodSchema<ScnPolicies> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('scn_policies'),
  children: z.array(ScnPolicySetSchema),
})

export const StdAltAsPublishedSchema: z.ZodSchema<StdAltAsPublished> =
  StdDesignatorTSchema.extend({
    type: z.literal('element'),
    name: z.literal('std_alt_as_published'),
    attributes: z.object({
      approvedMonth: z.string().optional(),
      approvedYear: z.string(),
      Reason: StdAltAsPublishedReasonSchema,
    }),
  })

/** Designator or other primary identifier for the standard being deposited.**/
export const StdAsPublishedSchema: z.ZodSchema<StdAsPublished> =
  StdDesignatorTSchema.extend({
    type: z.literal('element'),
    name: z.literal('std_as_published'),
    attributes: z.object({
      family: z.string(),
      set: z.string(),
      undated: z.string(),
    }),
  })

export const StringNameSchema: z.ZodSchema<StringName> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('string-name'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    nameStyle: StringNameNameStyleSchema,
  }),
  children: z.array(
    z.union([DegreesSchema, GivenNameSchema, PrefixSchema, SuffixSchema, SurnameSchema]),
  ),
})

/** The date a pre-print was posted to a repository.**/
export const UpdateDateSchema: z.ZodSchema<UpdateDate> =  DateTSchema.extend({
  type: z.literal('element'),
  name: z.literal('update_date'),
})

export const AltNameSchema: z.ZodSchema<AltName> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('alt-name'),
  children: z.array(z.union([NameSchema, StringNameSchema])),
})

/** Container for item elements containing non-primary URIs associated with the item being registered. Collections are supported for the following (defined in the property attribute):
 * list-based:  Multiple Resolution, more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/
 * country-based: more info: https://www.crossref.org/education/content-registration/creating-and-managing-dois/multiple-resolution/#00130
 * crawler-based: for Similarity Check URLs, more info: https://www.crossref.org/education/similarity-check/participate/urls-for-new-deposits/
 * text-mining: supply specific URLs for text and data mining, more info: https://www.crossref.org/education/retrieve-metadata/rest-api/text-and-data-mining-for-members/
 * unspecified: can be used for additional URLs
 * syndication: identifies resources to be used for syndication
 * link-header: identifies resources to be used as an endpoint
 **/
export const CollectionSchema: z.ZodSchema<Collection> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('collection'),
  attributes: z.object({
    multiResolution: CollectionMultiResolutionSchema,
    property: CollectionPropertySchema,
  }),
  children: z.array(ItemSchema),
})

/** Container element for CrossMark data.**/
export const CrossmarkSchema: z.ZodSchema<Crossmark> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('crossmark'),
  children: z.array(
    z.union([
      CrossmarkDomainExclusiveSchema,
      CrossmarkDomainsSchema,
      CrossmarkPolicySchema,
      CrossmarkVersionSchema,
      CustomMetadataSchema,
      UpdatesSchema,
    ]),
  ),
})

/** Container for key dates in the life of a database or dataset.**/
export const DatabaseDateSchema: z.ZodSchema<DatabaseDate> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('database_date'),
  children: z.array(z.union([CreationDateSchema, PublicationDateSchema, UpdateDateSchema])),
})

/** The container for elements related directly to a DOI.**/
export const DoiDataSchema: z.ZodSchema<DoiData> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('doi_data'),
  children: z.array(z.union([CollectionSchema, DoiSchema, ResourceSchema, TimestampSchema])),
})

/** Container element for information about an institution or organization associated with an item.**/
export const InstitutionSchema: z.ZodSchema<Institution> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('institution'),
  children: z.array(
    z.union([
      InstitutionAcronymSchema,
      InstitutionDepartmentSchema,
      InstitutionIdSchema,
      InstitutionPlaceSchema,
    ]),
  ),
})

/** Container for metadata that defines a journal.**/
export const JournalMetadataSchema: z.ZodSchema<JournalMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('journal_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        AbbrevTitleSchema,
        ArchiveLocationsSchema,
        CodenSchema,
        DoiDataSchema,
        FullTitleSchema,
        IssnSchema,
      ]),
    ),
  })

/** Container for the journal volume and DOI assigned to an entire journal volume. You may register a DOI for an entire volume by including doi_data in journal_volume.**/
export const JournalVolumeSchema: z.ZodSchema<JournalVolume> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('journal_volume'),
  children: z.array(
    z.union([ArchiveLocationsSchema, DoiDataSchema, PublisherItemSchema, VolumeSchema]),
  ),
})

/** Container for all information that applies to a non-series conference proceeding.**/
export const ProceedingsMetadataSchema: z.ZodSchema<ProceedingsMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('proceedings_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        ArchiveLocationsSchema,
        DoiDataSchema,
        IsbnSchema,
        NoisbnSchema,
        ProceedingsSubjectSchema,
        ProceedingsTitleSchema,
        PublicationDateSchema,
        PublisherSchema,
        PublisherItemSchema,
      ]),
    ),
  })

export const AffiliationsSchema: z.ZodSchema<Affiliations> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('affiliations'),
  children: z.array(InstitutionSchema),
})

/** **/
export const AnonymousSchema: z.ZodSchema<Anonymous> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('anonymous'),
  attributes: z.object({
    contributor_role: ContributorRoleSchema,
    language: LanguageSchema.optional(),
    nameStyle: NameStyleSchema.optional(),
    sequence: SequenceSchema,
  }),
  children: z.array(AffiliationsSchema),
})

/** The name of a person (as opposed to an organization) that contributed to an item.**/
export const PersonNameSchema: z.ZodSchema<PersonName> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('person_name'),
  attributes: z.object({
    contributor_role: ContributorRoleSchema,
    language: LanguageSchema.optional(),
    nameStyle: NameStyleSchema.optional(),
    sequence: SequenceSchema,
  }),
  children: z.array(
    z.union([
      AffiliationsSchema,
      AltNameSchema,
      GivenNameSchema,
      ORCIDSchema,
      SuffixSchema,
      SurnameSchema,
    ]),
  ),
})

/** The container for all who contributed to authoring or editing an item.**/
export const ContributorsSchema: z.ZodSchema<Contributors> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('contributors'),
  children: z.array(z.union([AnonymousSchema, OrganizationSchema, PersonNameSchema])),
})

/** database_metadata contains metadata about the database.**/
export const DatabaseMetadataSchema: z.ZodSchema<DatabaseMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('database_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        ArchiveLocationsSchema,
        ContributorsSchema,
        DatabaseDateSchema,
        DescriptionSchema,
        DoiDataSchema,
        InstitutionSchema,
        rel.ProgramSchema,
        PublisherSchema,
        PublisherItemSchema,
        TitlesSchema,
      ]),
    ),
  })

/** Container for metadata that defines a single issue of a journal.**/
export const JournalIssueSchema: z.ZodSchema<JournalIssue> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('journal_issue'),
  children: z.array(
    z.union([
      ArchiveLocationsSchema,
      ContributorsSchema,
      DoiDataSchema,
      IssueSchema,
      JournalVolumeSchema,
      PublicationDateSchema,
      SpecialNumberingSchema,
      TitlesSchema,
    ]),
  ),
})

/** The peer_review content type is intended for assigning DOIs to the reports and other artifacts associated with the review of published content.
 **/
export const PeerReviewSchema: z.ZodSchema<PeerReview> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('peer_review'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    recommendation: PeerReviewRecommendationSchema.optional(),
    /** Required attribute. First submission defined as revision round zero	**/
    revisionRound: z.string().optional(),
    stage: PeerReviewStageSchema.optional(),
    type: PeerReviewTypeSchema.optional(),
  }),
  children: z.array(
    z.union([
      CompetingInterestStatementSchema,
      ContributorsSchema,
      DoiDataSchema,
      InstitutionSchema,
      ai.ProgramSchema,
      ReviewDateSchema,
      RunningNumberSchema,
      ScnPoliciesSchema,
      TitlesSchema,
    ]),
  ),
})

/** Container for 'pending publication' metadata. Pending publication DOIs are used to create a DOI for a content item that is not yet available online or in print.**/
export const PendingPublicationSchema: z.ZodSchema<PendingPublication> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('pending_publication'),
    attributes: z.object({
      language: LanguageSchema.optional(),
    }),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        AcceptanceDateSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiSchema,
        InstitutionSchema,
        IntentStatementSchema,
        ItemNumberSchema,
        rel.ProgramSchema,
        PublicationSchema,
        TitlesSchema,
      ]),
    ),
  })

/** Container for posted content metadata.
 **/
export const PostedContentSchema: z.ZodSchema<PostedContent> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('posted_content'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    type: PostedContentTypeSchema,
  }),
  children: z.array(
    z.union([
      jats.AbstractSchema,
      AcceptanceDateSchema,
      CitationListSchema,
      ContributorsSchema,
      DoiDataSchema,
      GroupTitleSchema,
      InstitutionSchema,
      ItemNumberSchema,
      PostedDateSchema,
      fr.ProgramSchema,
      ScnPoliciesSchema,
      TitlesSchema,
    ]),
  ),
})

/** Container for the metadata related to a Technical Report or Working Paper.**/
export const ReportPaperMetadataSchema: z.ZodSchema<ReportPaperMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('report-paper_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        ApprovalDateSchema,
        ArchiveLocationsSchema,
        CitationListSchema,
        ContractNumberSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiDataSchema,
        EditionNumberSchema,
        InstitutionSchema,
        IsbnSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherSchema,
        PublisherItemSchema,
        ScnPoliciesSchema,
        TitlesSchema,
      ]),
    ),
  })

/** Container for metadata about a series publication.**/
export const SeriesMetadataSchema: z.ZodSchema<SeriesMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('series_metadata'),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        ArchiveLocationsSchema,
        CodenSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiDataSchema,
        IssnSchema,
        PublisherItemSchema,
        SeriesNumberSchema,
        TitlesSchema,
      ]),
    ),
  })

/** When a book consists of multiple volumes that are not part of a serial publication (series), set_metadata is used to describe information about the entire set.**/
export const SetMetadataSchema: z.ZodSchema<SetMetadata> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('set_metadata'),
  children: z.array(
    z.union([
      ArchiveLocationsSchema,
      ContributorsSchema,
      DoiDataSchema,
      IsbnSchema,
      NoisbnSchema,
      PartNumberSchema,
      PublisherItemSchema,
      TitlesSchema,
    ]),
  ),
})

/** Container for the metadata related to a Standard that is not part of a series.**/
export const StandardMetadataSchema: z.ZodSchema<StandardMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('standard_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      publication_status: StandardMetadataPublicationStatusSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        ApprovalDateSchema,
        ArchiveLocationsSchema,
        CitationListSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DesignatorsSchema,
        DoiDataSchema,
        EditionNumberSchema,
        IsbnSchema,
        rel.ProgramSchema,
        PublisherSchema,
        PublisherItemSchema,
        StandardsBodySchema,
        TitlesSchema,
      ]),
    ),
  })

/** A container for all title-level metadata for a single book that is not part of a series or set.**/
export const BookMetadataSchema: z.ZodSchema<BookMetadata> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('book_metadata'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
  }),
  children: z.array(
    z.union([
      jats.AbstractSchema,
      AcceptanceDateSchema,
      ArchiveLocationsSchema,
      CitationListSchema,
      ContributorsSchema,
      CrossmarkSchema,
      DoiDataSchema,
      EditionNumberSchema,
      IsbnSchema,
      NoisbnSchema,
      rel.ProgramSchema,
      PublicationDateSchema,
      PublisherSchema,
      PublisherItemSchema,
      TitlesSchema,
    ]),
  ),
})

/** A container for all information that applies to an individual volume of a book series.**/
export const BookSeriesMetadataSchema: z.ZodSchema<BookSeriesMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('book_series_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        ArchiveLocationsSchema,
        CitationListSchema,
        CrossmarkSchema,
        DoiDataSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherSchema,
        PublisherItemSchema,
        SeriesMetadataSchema,
      ]),
    ),
  })

/** A container for all information that applies to an individual volume of a book set.**/
export const BookSetMetadataSchema: z.ZodSchema<BookSetMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('book_set_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        ArchiveLocationsSchema,
        CitationListSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiDataSchema,
        EditionNumberSchema,
        IsbnSchema,
        NoisbnSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherSchema,
        PublisherItemSchema,
        SetMetadataSchema,
        VolumeSchema,
      ]),
    ),
  })

/** Container for component metadata. Supplemental materials, figures, tables, and other items that can be considered a citeable part of a registered item may be registered as components.**/
export const ComponentSchema: z.ZodSchema<Component> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('component'),
  attributes: z.object({
    component_size: z.string(),
    language: LanguageSchema.optional(),
    parent_relation: ComponentParentRelationSchema,
    regAgency: z.string().optional(),
  }),
  children: z.array(
    z.union([
      ContributorsSchema,
      DescriptionSchema,
      DoiSchema,
      DoiDataSchema,
      FormatSchema,
      ai.ProgramSchema,
      PublicationDateSchema,
      TitlesSchema,
    ]),
  ),
})

/** Container for a group of components**/
export const ComponentListSchema: z.ZodSchema<ComponentList> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('component_list'),
  children: z.array(ComponentSchema),
})

/** Container for all information about a single conference paper.**/
export const ConferencePaperSchema: z.ZodSchema<ConferencePaper> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('conference_paper'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      publication_type: PublicationTypeSchema,
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        AcceptanceDateSchema,
        ArchiveLocationsSchema,
        CitationListSchema,
        ComponentListSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiDataSchema,
        PagesSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherItemSchema,
        ScnPoliciesSchema,
        TitlesSchema,
      ]),
    ),
  })

/** A segment of a book, report, or standard for which a DOI is being registered. Most commonly used for book chapters.**/
export const ContentItemSchema: z.ZodSchema<ContentItem> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('content_item'),
  attributes: z.object({
    component_type: ContentItemComponentTypeSchema,
    language: LanguageSchema.optional(),
    level_sequence_number: z.string(),
    publication_type: PublicationTypeSchema,
    reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
  }),
  children: z.array(
    z.union([
      jats.AbstractSchema,
      AcceptanceDateSchema,
      ArchiveLocationsSchema,
      CitationListSchema,
      ComponentListSchema,
      ComponentNumberSchema,
      ContributorsSchema,
      CrossmarkSchema,
      DoiDataSchema,
      PagesSchema,
      rel.ProgramSchema,
      PublicationDateSchema,
      PublisherItemSchema,
      ScnPoliciesSchema,
      TitlesSchema,
    ]),
  ),
})

/** dataset is used to capture information about one or more database records or collections.**/
export const DatasetSchema: z.ZodSchema<Dataset> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('dataset'),
  attributes: z.object({
    dataset_type: DatasetDatasetTypeSchema,
  }),
  children: z.array(
    z.union([
      ArchiveLocationsSchema,
      CitationListSchema,
      ComponentListSchema,
      ContributorsSchema,
      CrossmarkSchema,
      DatabaseDateSchema,
      DescriptionSchema,
      DoiDataSchema,
      FormatSchema,
      rel.ProgramSchema,
      PublisherItemSchema,
      TitlesSchema,
    ]),
  ),
})

/** dissertation is the top level element for deposit of metadata about one or more dissertations.**/
export const DissertationSchema: z.ZodSchema<Dissertation> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('dissertation'),
  attributes: z.object({
    language: LanguageSchema.optional(),
    publication_type: PublicationTypeSchema,
    reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
  }),
  children: z.array(
    z.union([
      jats.AbstractSchema,
      ApprovalDateSchema,
      ArchiveLocationsSchema,
      CitationListSchema,
      ComponentListSchema,
      ContributorsSchema,
      CrossmarkSchema,
      DegreeSchema,
      DoiDataSchema,
      InstitutionSchema,
      IsbnSchema,
      PersonNameSchema,
      rel.ProgramSchema,
      PublisherItemSchema,
      ScnPoliciesSchema,
      TitlesSchema,
    ]),
  ),
})

/** Container for all information about a single journal article.**/
export const JournalArticleSchema: z.ZodSchema<JournalArticle> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('journal_article'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      publication_type: PublicationTypeSchema,
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        jats.AbstractSchema,
        AcceptanceDateSchema,
        ArchiveLocationsSchema,
        CitationListSchema,
        ComponentListSchema,
        ContributorsSchema,
        CrossmarkSchema,
        DoiDataSchema,
        PagesSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherItemSchema,
        ScnPoliciesSchema,
        TitlesSchema,
      ]),
    ),
  })

/** Container for all information that applies to a specific conference proceeding that is part of a series.**/
export const ProceedingsSeriesMetadataSchema: z.ZodSchema<ProceedingsSeriesMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('proceedings_series_metadata'),
    attributes: z.object({
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([ArchiveLocationsSchema, DoiDataSchema, PublisherItemSchema, SeriesMetadataSchema]),
    ),
  })

/** Container for the metadata related to a Technical Report or Working Paper that is part of a series.**/
export const ReportPaperSeriesMetadataSchema: z.ZodSchema<ReportPaperSeriesMetadata> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('report-paper_series_metadata'),
    attributes: z.object({
      language: LanguageSchema.optional(),
      reference_distribution_opts: ReferenceDistributionOptsSchema.optional(),
    }),
    children: z.array(
      z.union([
        ApprovalDateSchema,
        ArchiveLocationsSchema,
        CitationListSchema,
        ContractNumberSchema,
        ContributorsSchema,
        DoiDataSchema,
        EditionNumberSchema,
        InstitutionSchema,
        IsbnSchema,
        rel.ProgramSchema,
        PublicationDateSchema,
        PublisherSchema,
        PublisherItemSchema,
        SeriesMetadataSchema,
        VolumeSchema,
      ]),
    ),
  })

/** Container for component metadata if the component is being registered after the parent record/DOI is created.**/
export const SaComponentSchema: z.ZodSchema<SaComponent> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('sa_component'),
  attributes: z.object({
    parent_doi: z.string(),
  }),
  children: z.array(ComponentListSchema),
})

/** standard is the top level element for deposit of metadata about standards developed by Standards Development Organizations (SDOs) or Consortia.**/
export const StandardSchema: z.ZodSchema<Standard> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('standard'),
  attributes: z.object({
    publication_type: PublicationTypeSchema,
  }),
  children: z.array(z.union([ComponentListSchema, ContentItemSchema, StandardMetadataSchema])),
})

/** Container for all information about a single book.**/
export const BookSchema: z.ZodSchema<Book> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('book'),
  attributes: z.object({
    book_type: BookBookTypeSchema,
  }),
  children: z.array(
    z.union([
      BookMetadataSchema,
      BookSeriesMetadataSchema,
      BookSetMetadataSchema,
      ContentItemSchema,
    ]),
  ),
})

/** Container for all information about a single conference and its proceedings. If a conference proceedings spans multiple volumes, each volume must be contained in a unique conference element.**/
export const ConferenceSchema: z.ZodSchema<Conference> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('conference'),
  children: z.array(
    z.union([
      ConferencePaperSchema,
      ContributorsSchema,
      EventMetadataSchema,
      ProceedingsMetadataSchema,
      ProceedingsSeriesMetadataSchema,
    ]),
  ),
})

/** database is the top level element for deposit of metadata about one or more datasets or records in a database.**/
export const DatabaseSchema: z.ZodSchema<Database> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('database'),
  children: z.array(z.union([ComponentListSchema, DatabaseMetadataSchema, DatasetSchema])),
})

/** Container for all information about a single journal and the volumes, issues, and articles being registered within the journal.  Within a journal instance you may register articles from a single issue, detailed in journal_issue. If you want to register items from more than one issue you must use multiple journal instances within your XML file.**/
export const JournalSchema: z.ZodSchema<Journal> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('journal'),
  children: z.array(z.union([JournalArticleSchema, JournalIssueSchema, JournalMetadataSchema])),
})

/** report-paper is the top level element for deposit of metadata about one or more reports or working papers.**/
export const ReportPaperSchema: z.ZodSchema<ReportPaper> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('report-paper'),
  attributes: z.object({
    publication_type: PublicationTypeSchema,
  }),
  children: z.array(
    z.union([
      ComponentListSchema,
      ContentItemSchema,
      ReportPaperMetadataSchema,
      ReportPaperSeriesMetadataSchema,
    ]),
  ),
})

/** Container for the main body of a DOI record submission. While it is possible to include records for multiple journals, books, conferences, or other types of content in a single submission, it is not possible to mix content types within a single DOI submission.**/
export const BodySchema: z.ZodSchema<Body> =  XastElementSchema.extend({
  type: z.literal('element'),
  name: z.literal('body'),
  children: z.array(
    z.union([
      BookSchema,
      ConferenceSchema,
      DatabaseSchema,
      DissertationSchema,
      JournalSchema,
      PeerReviewSchema,
      PendingPublicationSchema,
      PostedContentSchema,
      ReportPaperSchema,
      SaComponentSchema,
      StandardSchema,
    ]),
  ),
})

/** Top level element for a metadata record submission. This element indicates the start and end of the XML file. The version number is fixed to the version of the schema.**/
export const DoiBatchSchema: z.ZodSchema<DoiBatch> =
  XastElementSchema.extend({
    type: z.literal('element'),
    name: z.literal('doi_batch'),
    attributes: z.object({
      version: z.string(),
    }),
    children: z.array(z.union([BodySchema, HeadSchema])),
  }),
)
