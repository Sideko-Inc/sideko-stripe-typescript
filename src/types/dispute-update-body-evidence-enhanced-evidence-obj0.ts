import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compelling-evidence3";
import {
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
  Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance,
} from "./dispute-update-body-evidence-enhanced-evidence-obj0-visa-compliance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0
 */
export type DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 = {
  visaCompellingEvidence3?:
    | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
    | undefined;
  visaCompliance?:
    | DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
    | undefined;
};

/**
 * @internal
 * DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 = {
  visa_compelling_evidence_3?:
    | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3
    | undefined;
  visa_compliance?:
    | External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyEvidenceEnhancedEvidenceObj0
 */
const SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0: z.ZodType<
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    visa_compelling_evidence_3:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3.in.optional(),
    visa_compliance:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visa_compelling_evidence_3: "visaCompellingEvidence3",
      visa_compliance: "visaCompliance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0
 */
const SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0: z.ZodType<
  External$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 // the object to be transformed
> = z
  .object({
    visaCompellingEvidence3:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompellingEvidence3.out.optional(),
    visaCompliance:
      Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0VisaCompliance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visaCompellingEvidence3: "visa_compelling_evidence_3",
      visaCompliance: "visa_compliance",
    });
  });

export const Schemas$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0 = {
  in: SchemaIn$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0,
  out: SchemaOut$DisputeUpdateBodyEvidenceEnhancedEvidenceObj0,
};
