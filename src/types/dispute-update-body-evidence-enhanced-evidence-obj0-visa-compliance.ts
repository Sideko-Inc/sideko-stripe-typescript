import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance = {
  feeAcknowledged?: boolean | undefined;
};

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance =
  {
    fee_acknowledged?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fee_acknowledged: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fee_acknowledged: "feeAcknowledged",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance // the object to be transformed
> = z
  .object({
    feeAcknowledged: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      feeAcknowledged: "fee_acknowledged",
    });
  });

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance =
  {
    in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
    out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  };
