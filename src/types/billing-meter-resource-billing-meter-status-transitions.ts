import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingMeterResourceBillingMeterStatusTransitions = {
  /**
   * The time the meter was deactivated, if any. Measured in seconds since Unix epoch.
   */
  deactivatedAt?: number | null | undefined;
};

/**
 * @internal
 * BillingMeterResourceBillingMeterStatusTransitions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterResourceBillingMeterStatusTransitions = {
  deactivated_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterResourceBillingMeterStatusTransitions
 */
const SchemaIn$BillingMeterResourceBillingMeterStatusTransitions: z.ZodType<
  BillingMeterResourceBillingMeterStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deactivated_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deactivated_at: "deactivatedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterResourceBillingMeterStatusTransitions
 */
const SchemaOut$BillingMeterResourceBillingMeterStatusTransitions: z.ZodType<
  External$BillingMeterResourceBillingMeterStatusTransitions, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterResourceBillingMeterStatusTransitions // the object to be transformed
> = z
  .object({
    deactivatedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deactivatedAt: "deactivated_at",
    });
  });

export const Schemas$BillingMeterResourceBillingMeterStatusTransitions = {
  in: SchemaIn$BillingMeterResourceBillingMeterStatusTransitions,
  out: SchemaOut$BillingMeterResourceBillingMeterStatusTransitions,
};
