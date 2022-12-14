// Generated by ts-to-zod
import { z } from 'zod'

// Source files:
//
export const XastAttributesSchema = z.record(z.union([z.string(), z.undefined()]).nullable())

const XastTextSchema = z.object({
  type: z.literal('text'),
  value: z.string(),
})

const XastCommentSchema = z.object({
  type: z.literal('comment'),
  value: z.string(),
})

const XastCDataSchema = z.object({
  type: z.literal('cdata'),
  value: z.string(),
})

const XastInstructionSchema = z.object({
  type: z.literal('instruction'),
  name: z.string(),
  value: z.string(),
})

const FakerXastElementSchema = z.object({
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

const FakeXastElementSchema = z.object({
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

export const XastElementSchema = z.object({
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

const XastTextElementSchema = XastElementSchema.extend({
  children: z.tuple([XastTextSchema]),
})

export const _BooleanSchema = XastElementSchema.extend({
  content: z.boolean(),
})

export const _DateSchema = XastElementSchema.extend({
  content: z.date(),
})

export const _NumberSchema = XastElementSchema.extend({
  content: z.number(),
})

export const _StringSchema = XastElementSchema.extend({
  content: z.string(),
})

export const _AnySchema = XastElementSchema.extend({
  content: z.any(),
})
