import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ReviewListCreatedObj0
 */
export type ReviewListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ReviewListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReviewListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReviewListCreatedObj0
 */
const SchemaIn$ReviewListCreatedObj0: z.ZodType<
  ReviewListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReviewListCreatedObj0
 */
const SchemaOut$ReviewListCreatedObj0: z.ZodType<
  External$ReviewListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  ReviewListCreatedObj0 // the object to be transformed
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

export const Schemas$ReviewListCreatedObj0 = {
  in: SchemaIn$ReviewListCreatedObj0,
  out: SchemaOut$ReviewListCreatedObj0,
};
