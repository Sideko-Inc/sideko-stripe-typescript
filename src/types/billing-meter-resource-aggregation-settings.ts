import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingMeterResourceAggregationSettings = {
  /**
   * Specifies how events are aggregated.
   */
  formula: "count" | "last" | "sum";
};

/**
 * @internal
 * BillingMeterResourceAggregationSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterResourceAggregationSettings = {
  formula: "count" | "last" | "sum";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterResourceAggregationSettings
 */
const SchemaIn$BillingMeterResourceAggregationSettings: z.ZodType<
  BillingMeterResourceAggregationSettings, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterResourceAggregationSettings
 */
const SchemaOut$BillingMeterResourceAggregationSettings: z.ZodType<
  External$BillingMeterResourceAggregationSettings, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterResourceAggregationSettings // the object to be transformed
> = z
  .object({
    formula: z.enum(["count", "last", "sum"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      formula: "formula",
    });
  });

export const Schemas$BillingMeterResourceAggregationSettings = {
  in: SchemaIn$BillingMeterResourceAggregationSettings,
  out: SchemaOut$BillingMeterResourceAggregationSettings,
};
