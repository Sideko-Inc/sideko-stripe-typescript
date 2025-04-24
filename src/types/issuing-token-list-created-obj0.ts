import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingTokenListCreatedObj0
 */
export type IssuingTokenListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingTokenListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTokenListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTokenListCreatedObj0
 */
const SchemaIn$IssuingTokenListCreatedObj0: z.ZodType<
  IssuingTokenListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTokenListCreatedObj0
 */
const SchemaOut$IssuingTokenListCreatedObj0: z.ZodType<
  External$IssuingTokenListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingTokenListCreatedObj0 // the object to be transformed
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

export const Schemas$IssuingTokenListCreatedObj0 = {
  in: SchemaIn$IssuingTokenListCreatedObj0,
  out: SchemaOut$IssuingTokenListCreatedObj0,
};
