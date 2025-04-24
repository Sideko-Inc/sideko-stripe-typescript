import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEvidenceVisaCompliance = {
  /**
   * A field acknowledging the fee incurred when countering a Visa compliance dispute. If this field is set to true, evidence can be submitted for the compliance dispute. Stripe collects a 500 USD (or local equivalent) amount to cover the network costs associated with resolving compliance disputes. Stripe refunds the 500 USD network fee if you win the dispute.
   */
  feeAcknowledged: boolean;
};

/**
 * @internal
 * DisputeEnhancedEvidenceVisaCompliance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEvidenceVisaCompliance = {
  fee_acknowledged: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEvidenceVisaCompliance
 */
const SchemaIn$DisputeEnhancedEvidenceVisaCompliance: z.ZodType<
  DisputeEnhancedEvidenceVisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fee_acknowledged: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fee_acknowledged: "feeAcknowledged",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEvidenceVisaCompliance
 */
const SchemaOut$DisputeEnhancedEvidenceVisaCompliance: z.ZodType<
  External$DisputeEnhancedEvidenceVisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEvidenceVisaCompliance // the object to be transformed
> = z
  .object({
    feeAcknowledged: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      feeAcknowledged: "fee_acknowledged",
    });
  });

export const Schemas$DisputeEnhancedEvidenceVisaCompliance = {
  in: SchemaIn$DisputeEnhancedEvidenceVisaCompliance,
  out: SchemaOut$DisputeEnhancedEvidenceVisaCompliance,
};
