import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The default settings to aggregate a meter's events with.
 */
export type BillingMeterCreateBodyDefaultAggregation = {
  formula: "count" | "last" | "sum";
};

/**
 * @internal
 * BillingMeterCreateBodyDefaultAggregation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterCreateBodyDefaultAggregation = {
  formula: "count" | "last" | "sum";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterCreateBodyDefaultAggregation
 */
const SchemaIn$BillingMeterCreateBodyDefaultAggregation: z.ZodType<
  BillingMeterCreateBodyDefaultAggregation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    formula: z.enum(["count", "last", "sum"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      formula: "formula",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterCreateBodyDefaultAggregation
 */
const SchemaOut$BillingMeterCreateBodyDefaultAggregation: z.ZodType<
  External$BillingMeterCreateBodyDefaultAggregation, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterCreateBodyDefaultAggregation // the object to be transformed
> = z
  .object({
    formula: z.enum(["count", "last", "sum"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      formula: "formula",
    });
  });

export const Schemas$BillingMeterCreateBodyDefaultAggregation = {
  in: SchemaIn$BillingMeterCreateBodyDefaultAggregation,
  out: SchemaOut$BillingMeterCreateBodyDefaultAggregation,
};
