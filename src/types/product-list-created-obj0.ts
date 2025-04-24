import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductListCreatedObj0
 */
export type ProductListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ProductListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductListCreatedObj0
 */
const SchemaIn$ProductListCreatedObj0: z.ZodType<
  ProductListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductListCreatedObj0
 */
const SchemaOut$ProductListCreatedObj0: z.ZodType<
  External$ProductListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  ProductListCreatedObj0 // the object to be transformed
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

export const Schemas$ProductListCreatedObj0 = {
  in: SchemaIn$ProductListCreatedObj0,
  out: SchemaOut$ProductListCreatedObj0,
};
