import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutListCreatedObj0
 */
export type PayoutListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * PayoutListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutListCreatedObj0
 */
const SchemaIn$PayoutListCreatedObj0: z.ZodType<
  PayoutListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutListCreatedObj0
 */
const SchemaOut$PayoutListCreatedObj0: z.ZodType<
  External$PayoutListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  PayoutListCreatedObj0 // the object to be transformed
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

export const Schemas$PayoutListCreatedObj0 = {
  in: SchemaIn$PayoutListCreatedObj0,
  out: SchemaOut$PayoutListCreatedObj0,
};
