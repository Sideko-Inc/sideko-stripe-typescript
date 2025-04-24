import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderListCreatedObj0
 */
export type IssuingCardholderListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingCardholderListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderListCreatedObj0
 */
const SchemaIn$IssuingCardholderListCreatedObj0: z.ZodType<
  IssuingCardholderListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderListCreatedObj0
 */
const SchemaOut$IssuingCardholderListCreatedObj0: z.ZodType<
  External$IssuingCardholderListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$IssuingCardholderListCreatedObj0 = {
  in: SchemaIn$IssuingCardholderListCreatedObj0,
  out: SchemaOut$IssuingCardholderListCreatedObj0,
};
