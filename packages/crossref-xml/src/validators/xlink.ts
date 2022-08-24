import * as Primitive from './Primitive'
// Generated by ts-to-zod
import { z } from 'zod'

// Source files:
// https://data.crossref.org/schemas/standard-modules/xlink.xsd
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

export const ActuateSchema = z.union([
  z.literal('onLoad'),
  z.literal('onRequest'),
  z.literal('other'),
  z.literal('none'),
])

export const ArcroleSchema = XastElementSchema.extend({
  name: z.literal('arcrole'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const FromSchema = XastElementSchema.extend({
  name: z.literal('from'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const HrefSchema = XastElementSchema.extend({
  name: z.literal('href'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const LabelSchema = XastElementSchema.extend({
  name: z.literal('label'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const RoleSchema = XastElementSchema.extend({
  name: z.literal('role'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const ShowSchema = z.union([
  z.literal('new'),
  z.literal('replace'),
  z.literal('embed'),
  z.literal('other'),
  z.literal('none'),
])

export const TitleSchema = XastElementSchema.extend({
  name: z.literal('title'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const ToSchema = XastElementSchema.extend({
  name: z.literal('to'),
  children: z.tuple([
    z.object({
      type: z.literal('text'),
      value: z.string(),
    }),
  ]),
})

export const TypeSchema = z.union([
  z.literal('simple'),
  z.literal('extended'),
  z.literal('locator'),
  z.literal('arc'),
  z.literal('resource'),
  z.literal('title'),
  z.literal('none'),
])
