import {
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
} from "./charge-dispute-create-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3";
import {
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
} from "./charge-dispute-create-body-evidence-enhanced-evidence-obj0-visa-compliance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0
 */
export type ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0 = {
  visaCompellingEvidence3?:
    | ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
    | undefined;
  visaCompliance?:
    | ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
    | undefined;
};

/**
 * @internal
 * ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0 = {
  visa_compelling_evidence_3?:
    | External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
    | undefined;
  visa_compliance?:
    | External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0
 */
const SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0: z.ZodType<
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    visa_compelling_evidence_3:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3.in.optional(),
    visa_compliance:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visa_compelling_evidence_3: "visaCompellingEvidence3",
      visa_compliance: "visaCompliance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0
 */
const SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0: z.ZodType<
  External$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0 // the object to be transformed
> = z
  .object({
    visaCompellingEvidence3:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3.out.optional(),
    visaCompliance:
      Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0VisaCompliance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visaCompellingEvidence3: "visa_compelling_evidence_3",
      visaCompliance: "visa_compliance",
    });
  });

export const Schemas$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0 = {
  in: SchemaIn$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0,
  out: SchemaOut$ChargeDisputeCreateBodyEvidenceEnhancedEvidenceObj0,
};
