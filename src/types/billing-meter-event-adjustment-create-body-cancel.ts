import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Specifies which event to cancel.
 */
export type BillingMeterEventAdjustmentCreateBodyCancel = {
  identifier?: string | undefined;
};

/**
 * @internal
 * BillingMeterEventAdjustmentCreateBodyCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventAdjustmentCreateBodyCancel = {
  identifier?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventAdjustmentCreateBodyCancel
 */
const SchemaIn$BillingMeterEventAdjustmentCreateBodyCancel: z.ZodType<
  BillingMeterEventAdjustmentCreateBodyCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    identifier: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      identifier: "identifier",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventAdjustmentCreateBodyCancel
 */
const SchemaOut$BillingMeterEventAdjustmentCreateBodyCancel: z.ZodType<
  External$BillingMeterEventAdjustmentCreateBodyCancel, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventAdjustmentCreateBodyCancel // the object to be transformed
> = z
  .object({
    identifier: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      identifier: "identifier",
    });
  });

export const Schemas$BillingMeterEventAdjustmentCreateBodyCancel = {
  in: SchemaIn$BillingMeterEventAdjustmentCreateBodyCancel,
  out: SchemaOut$BillingMeterEventAdjustmentCreateBodyCancel,
};
