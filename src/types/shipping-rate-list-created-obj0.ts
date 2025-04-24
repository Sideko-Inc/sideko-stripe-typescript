import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateListCreatedObj0
 */
export type ShippingRateListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ShippingRateListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateListCreatedObj0
 */
const SchemaIn$ShippingRateListCreatedObj0: z.ZodType<
  ShippingRateListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateListCreatedObj0
 */
const SchemaOut$ShippingRateListCreatedObj0: z.ZodType<
  External$ShippingRateListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateListCreatedObj0 // the object to be transformed
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

export const Schemas$ShippingRateListCreatedObj0 = {
  in: SchemaIn$ShippingRateListCreatedObj0,
  out: SchemaOut$ShippingRateListCreatedObj0,
};
