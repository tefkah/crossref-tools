import * as Primitive from  './Primitive'
// Generated by ts-to-zod
import { z } from "zod";

// Source files:
// https://data.crossref.org/schemas/relations.xsd
export const XastAttributesSchema = z.record(z.union([z.string(), z.undefined()]).nullable());

const XastTextSchema = z.object({
    type: z.literal("text"),
    value: z.string()
});

const XastCommentSchema = z.object({
    type: z.literal("comment"),
    value: z.string()
});

const XastCDataSchema = z.object({
    type: z.literal("cdata"),
    value: z.string()
});

const XastInstructionSchema = z.object({
    type: z.literal("instruction"),
    name: z.string(),
    value: z.string()
});

const FakerXastElementSchema = z.object({
    type: z.literal("element"),
    name: z.string(),
    attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
    children: z.array(z.union([z.object({
            type: z.string(),
            name: z.string().optional(),
            attributes: z.record(z.any()).optional(),
            children: z.array(z.any())
        }), XastTextSchema, XastCommentSchema, XastInstructionSchema, XastCDataSchema]))
});

const FakeXastElementSchema = z.object({
    type: z.literal("element"),
    name: z.string(),
    attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
    children: z.array(z.union([FakerXastElementSchema, XastTextSchema, XastCommentSchema, XastInstructionSchema, XastCDataSchema]))
});

export const XastElementSchema = z.object({
    type: z.literal("element"),
    name: z.string(),
    attributes: z.union([XastAttributesSchema, z.undefined()]).optional(),
    children: z.array(z.union([FakeXastElementSchema, XastTextSchema, XastCommentSchema, XastInstructionSchema, XastCDataSchema]))
});

const XastTextElementSchema = XastElementSchema.extend({
    children: z.tuple([XastTextSchema])
});

export const XrefFacesSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("xrefFaces"),
    children: z.tuple([])
});

export const IdentifierTypeSchema = z.union([z.literal("doi"), z.literal("issn"), z.literal("isbn"), z.literal("uri"), z.literal("pmid"), z.literal("pmcid"), z.literal("purl"), z.literal("arxiv"), z.literal("ark"), z.literal("handle"), z.literal("uuid"), z.literal("ecli"), z.literal("accession"), z.literal("other")]);

export const LanguageSchema = z.union([z.literal("aa"), z.literal("ab"), z.literal("ae"), z.literal("af"), z.literal("ak"), z.literal("am"), z.literal("an"), z.literal("ar"), z.literal("as"), z.literal("av"), z.literal("ay"), z.literal("az"), z.literal("ba"), z.literal("be"), z.literal("bg"), z.literal("bh"), z.literal("bi"), z.literal("bm"), z.literal("bn"), z.literal("bo"), z.literal("br"), z.literal("bs"), z.literal("ca"), z.literal("ce"), z.literal("ch"), z.literal("co"), z.literal("cr"), z.literal("cs"), z.literal("cu"), z.literal("cv"), z.literal("cy"), z.literal("da"), z.literal("de"), z.literal("dv"), z.literal("dz"), z.literal("ee"), z.literal("el"), z.literal("en"), z.literal("eo"), z.literal("es"), z.literal("et"), z.literal("eu"), z.literal("fa"), z.literal("ff"), z.literal("fi"), z.literal("fj"), z.literal("fo"), z.literal("fr"), z.literal("fy"), z.literal("ga"), z.literal("gd"), z.literal("gl"), z.literal("gn"), z.literal("gu"), z.literal("gv"), z.literal("ha"), z.literal("he"), z.literal("hi"), z.literal("ho"), z.literal("hr"), z.literal("ht"), z.literal("hu"), z.literal("hy"), z.literal("hz"), z.literal("ia"), z.literal("id"), z.literal("ie"), z.literal("ig"), z.literal("ii"), z.literal("ik"), z.literal("io"), z.literal("is"), z.literal("it"), z.literal("iu"), z.literal("ja"), z.literal("jw"), z.literal("ka"), z.literal("kg"), z.literal("ki"), z.literal("kj"), z.literal("kk"), z.literal("kl"), z.literal("km"), z.literal("kn"), z.literal("ko"), z.literal("kr"), z.literal("ks"), z.literal("ku"), z.literal("kv"), z.literal("kw"), z.literal("ky"), z.literal("la"), z.literal("lb"), z.literal("lg"), z.literal("li"), z.literal("ln"), z.literal("lo"), z.literal("lt"), z.literal("lu"), z.literal("lv"), z.literal("mg"), z.literal("mu"), z.literal("mi"), z.literal("mk"), z.literal("ml"), z.literal("mn"), z.literal("mr"), z.literal("ms"), z.literal("mt"), z.literal("my"), z.literal("na"), z.literal("nb"), z.literal("nd"), z.literal("ne"), z.literal("ng"), z.literal("nl"), z.literal("nn"), z.literal("no"), z.literal("nr"), z.literal("nv"), z.literal("ny"), z.literal("oc"), z.literal("oj"), z.literal("om"), z.literal("or"), z.literal("os"), z.literal("pa"), z.literal("pi"), z.literal("pl"), z.literal("ps"), z.literal("pt"), z.literal("qu"), z.literal("rm"), z.literal("rn"), z.literal("ro"), z.literal("ru"), z.literal("rw"), z.literal("sa"), z.literal("sc"), z.literal("sd"), z.literal("se"), z.literal("sg"), z.literal("si"), z.literal("sk"), z.literal("sl"), z.literal("sm"), z.literal("sn"), z.literal("so"), z.literal("sq"), z.literal("sr"), z.literal("ss"), z.literal("st"), z.literal("su"), z.literal("sv"), z.literal("sw"), z.literal("ta"), z.literal("te"), z.literal("tg"), z.literal("th"), z.literal("ti"), z.literal("tk"), z.literal("tl"), z.literal("tn"), z.literal("to"), z.literal("tr"), z.literal("ts"), z.literal("tt"), z.literal("tw"), z.literal("ty"), z.literal("ug"), z.literal("uk"), z.literal("ur"), z.literal("uz"), z.literal("ve"), z.literal("vi"), z.literal("vo"), z.literal("wa"), z.literal("wo"), z.literal("xh"), z.literal("yi"), z.literal("yo"), z.literal("za"), z.literal("zh")]);

export const NameSchema = XastElementSchema.extend({
    name: z.literal("name"),
    children: z.tuple([z.object({
            type: z.literal("text"),
            value: z.string()
        })])
});

/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.
 * @minLength 4
 * @maxLength 1024
 **/
export const NamespaceSchema = XastElementSchema.extend({
    name: z.string(),
    children: z.tuple([z.object({
            type: z.literal("text"),
            /**
             * @minLength 4
             * @maxLength 1024
             **/
            value: z.string().min(4).max(1024)
        })])
});

/** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.
 * @minLength 4
 * @maxLength 1024
 **/
export const NamespacePrimitiveTypeSchema = z.string().min(4).max(1024);

/** Used to describe relations between items that are not the same work.
 **/
export const InterWorkRelationRelationshipTypeSchema = z.union([z.literal("isDerivedFrom"), z.literal("hasDerivation"), z.literal("isReviewOf"), z.literal("hasReview"), z.literal("isCommentOn"), z.literal("hasComment"), z.literal("isReplyTo"), z.literal("hasReply"), z.literal("basedOnData"), z.literal("isDataBasisFor"), z.literal("hasRelatedMaterial"), z.literal("isRelatedMaterial"), z.literal("isCompiledBy"), z.literal("compiles"), z.literal("isDocumentedBy"), z.literal("documents"), z.literal("isSupplementTo"), z.literal("isSupplementedBy"), z.literal("isContinuedBy"), z.literal("continues"), z.literal("isPartOf"), z.literal("hasPart"), z.literal("references"), z.literal("isReferencedBy"), z.literal("isBasedOn"), z.literal("isBasisFor"), z.literal("requires"), z.literal("isRequiredBy"), z.literal("finances"), z.literal("isFinancedBy")]);

/** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided.
 **/
export const IntraWorkRelationRelationshipTypeSchema = z.union([z.literal("isTranslationOf"), z.literal("hasTranslation"), z.literal("isPreprintOf"), z.literal("hasPreprint"), z.literal("isManuscriptOf"), z.literal("hasManuscript"), z.literal("isExpressionOf"), z.literal("hasExpression"), z.literal("isManifestationOf"), z.literal("hasManifestation"), z.literal("isReplacedBy"), z.literal("replaces"), z.literal("isSameAs"), z.literal("isIdenticalTo"), z.literal("isVariantFormOf"), z.literal("isOriginalFormOf"), z.literal("isVersionOf"), z.literal("hasVersion"), z.literal("isFormatOf"), z.literal("hasFormat")]);

/** A narrative description of the relationship target item**/
export const DescriptionSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("description"),
    attributes: z.object({
        language: LanguageSchema.optional()
    }),
    /** XastElement is self-closing */
    children: z.tuple([])
});

export const InterWorkRelationSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("inter_work_relation"),
    attributes: z.object({
        identifierType: IdentifierTypeSchema,
        /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.	**/
        namespace: z.string(),
        /** Used to describe relations between items that are not the same work.
         **/
        relationshipType: InterWorkRelationRelationshipTypeSchema
    }),
    /** XastElement is self-closing */
    children: z.tuple([])
});

export const IntraWorkRelationSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("intra_work_relation"),
    attributes: z.object({
        identifierType: IdentifierTypeSchema,
        /** An identifier systems may require a namespace that is needed in addition to the identifer value to provide uniqueness.	**/
        namespace: z.string(),
        /** Used to define relations between items that are essentially the same work but may differ in some way that impacts citation, for example a difference in format, language, or revision. Assigning different identifers to exactly the same item available in one place or as copies in multiple places can be problematic and should be avoided.
         **/
        relationshipType: IntraWorkRelationRelationshipTypeSchema
    }),
    /** XastElement is self-closing */
    children: z.tuple([])
});

export const RelatedItemSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("related_item"),
    children: z.array(z.union([DescriptionSchema, InterWorkRelationSchema, IntraWorkRelationSchema]))
});

/** Wrapper element for relationship metadata**/
export const ProgramSchema = XastElementSchema.extend({
    type: z.literal("element"),
    name: z.literal("program"),
    attributes: z.object({
        name: z.string()
    }),
    children: z.array(RelatedItemSchema)
});