import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingClocksResourceStatusDetailsAdvancingStatusDetails = {
  /**
   * The `frozen_time` that the Test Clock is advancing towards.
   */
  targetFrozenTime: number;
};

/**
 * @internal
 * BillingClocksResourceStatusDetailsAdvancingStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingClocksResourceStatusDetailsAdvancingStatusDetails =
  {
    target_frozen_time: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingClocksResourceStatusDetailsAdvancingStatusDetails
 */
const SchemaIn$BillingClocksResourceStatusDetailsAdvancingStatusDetails: z.ZodType<
  BillingClocksResourceStatusDetailsAdvancingStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    target_frozen_time: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      target_frozen_time: "targetFrozenTime",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingClocksResourceStatusDetailsAdvancingStatusDetails
 */
const SchemaOut$BillingClocksResourceStatusDetailsAdvancingStatusDetails: z.ZodType<
  External$BillingClocksResourceStatusDetailsAdvancingStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingClocksResourceStatusDetailsAdvancingStatusDetails // the object to be transformed
> = z
  .object({
    targetFrozenTime: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      targetFrozenTime: "target_frozen_time",
    });
  });

export const Schemas$BillingClocksResourceStatusDetailsAdvancingStatusDetails =
  {
    in: SchemaIn$BillingClocksResourceStatusDetailsAdvancingStatusDetails,
    out: SchemaOut$BillingClocksResourceStatusDetailsAdvancingStatusDetails,
  };
