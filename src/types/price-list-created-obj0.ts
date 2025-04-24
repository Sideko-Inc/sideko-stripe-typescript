import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceListCreatedObj0
 */
export type PriceListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * PriceListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceListCreatedObj0
 */
const SchemaIn$PriceListCreatedObj0: z.ZodType<
  PriceListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceListCreatedObj0
 */
const SchemaOut$PriceListCreatedObj0: z.ZodType<
  External$PriceListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  PriceListCreatedObj0 // the object to be transformed
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

export const Schemas$PriceListCreatedObj0 = {
  in: SchemaIn$PriceListCreatedObj0,
  out: SchemaOut$PriceListCreatedObj0,
};
