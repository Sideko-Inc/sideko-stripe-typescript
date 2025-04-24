import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardListCreatedObj0
 */
export type IssuingCardListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingCardListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardListCreatedObj0
 */
const SchemaIn$IssuingCardListCreatedObj0: z.ZodType<
  IssuingCardListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardListCreatedObj0
 */
const SchemaOut$IssuingCardListCreatedObj0: z.ZodType<
  External$IssuingCardListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardListCreatedObj0 // the object to be transformed
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

export const Schemas$IssuingCardListCreatedObj0 = {
  in: SchemaIn$IssuingCardListCreatedObj0,
  out: SchemaOut$IssuingCardListCreatedObj0,
};
