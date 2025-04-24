import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRateListCreatedObj0
 */
export type TaxRateListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TaxRateListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateListCreatedObj0
 */
const SchemaIn$TaxRateListCreatedObj0: z.ZodType<
  TaxRateListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateListCreatedObj0
 */
const SchemaOut$TaxRateListCreatedObj0: z.ZodType<
  External$TaxRateListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TaxRateListCreatedObj0 // the object to be transformed
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

export const Schemas$TaxRateListCreatedObj0 = {
  in: SchemaIn$TaxRateListCreatedObj0,
  out: SchemaOut$TaxRateListCreatedObj0,
};
