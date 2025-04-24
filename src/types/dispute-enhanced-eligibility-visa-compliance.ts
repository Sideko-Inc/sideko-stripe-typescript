import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEligibilityVisaCompliance = {
  /**
   * Visa compliance eligibility status.
   */
  status: "fee_acknowledged" | "requires_fee_acknowledgement";
};

/**
 * @internal
 * DisputeEnhancedEligibilityVisaCompliance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEligibilityVisaCompliance = {
  status: "fee_acknowledged" | "requires_fee_acknowledgement";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEligibilityVisaCompliance
 */
const SchemaIn$DisputeEnhancedEligibilityVisaCompliance: z.ZodType<
  DisputeEnhancedEligibilityVisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["fee_acknowledged", "requires_fee_acknowledgement"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEligibilityVisaCompliance
 */
const SchemaOut$DisputeEnhancedEligibilityVisaCompliance: z.ZodType<
  External$DisputeEnhancedEligibilityVisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEligibilityVisaCompliance // the object to be transformed
> = z
  .object({
    status: z.enum(["fee_acknowledged", "requires_fee_acknowledgement"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
    });
  });

export const Schemas$DisputeEnhancedEligibilityVisaCompliance = {
  in: SchemaIn$DisputeEnhancedEligibilityVisaCompliance,
  out: SchemaOut$DisputeEnhancedEligibilityVisaCompliance,
};
