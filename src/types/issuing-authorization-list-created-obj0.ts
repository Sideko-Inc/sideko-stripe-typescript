import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingAuthorizationListCreatedObj0
 */
export type IssuingAuthorizationListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingAuthorizationListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationListCreatedObj0
 */
const SchemaIn$IssuingAuthorizationListCreatedObj0: z.ZodType<
  IssuingAuthorizationListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationListCreatedObj0
 */
const SchemaOut$IssuingAuthorizationListCreatedObj0: z.ZodType<
  External$IssuingAuthorizationListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationListCreatedObj0 // the object to be transformed
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

export const Schemas$IssuingAuthorizationListCreatedObj0 = {
  in: SchemaIn$IssuingAuthorizationListCreatedObj0,
  out: SchemaOut$IssuingAuthorizationListCreatedObj0,
};
