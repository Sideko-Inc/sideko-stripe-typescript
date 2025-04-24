import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingMeterResourceBillingMeterEventAdjustmentCancel = {
  /**
   * Unique identifier for the event.
   */
  identifier?: string | null | undefined;
};

/**
 * @internal
 * BillingMeterResourceBillingMeterEventAdjustmentCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterResourceBillingMeterEventAdjustmentCancel = {
  identifier?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterResourceBillingMeterEventAdjustmentCancel
 */
const SchemaIn$BillingMeterResourceBillingMeterEventAdjustmentCancel: z.ZodType<
  BillingMeterResourceBillingMeterEventAdjustmentCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    identifier: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      identifier: "identifier",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterResourceBillingMeterEventAdjustmentCancel
 */
const SchemaOut$BillingMeterResourceBillingMeterEventAdjustmentCancel: z.ZodType<
  External$BillingMeterResourceBillingMeterEventAdjustmentCancel, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterResourceBillingMeterEventAdjustmentCancel // the object to be transformed
> = z
  .object({
    identifier: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      identifier: "identifier",
    });
  });

export const Schemas$BillingMeterResourceBillingMeterEventAdjustmentCancel = {
  in: SchemaIn$BillingMeterResourceBillingMeterEventAdjustmentCancel,
  out: SchemaOut$BillingMeterResourceBillingMeterEventAdjustmentCancel,
};
