import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
export type ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance =
  {
    feeAcknowledged?: boolean | undefined;
  };

/**
 * @internal
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance =
  {
    fee_acknowledged?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
const SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance: z.ZodType<
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
 */
const SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance: z.ZodType<
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance, // output type of this zod object
  z.ZodTypeDef,
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance // the object to be transformed
> = z
  .object({
    feeAcknowledged: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      feeAcknowledged: "fee_acknowledged",
    });
  });

export const Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance =
  {
    in: SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
    out: SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  };
