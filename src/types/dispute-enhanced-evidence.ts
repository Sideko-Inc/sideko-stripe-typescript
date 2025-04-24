import {
  DisputeEnhancedEvidenceVisaCompellingEvidence3,
  External$DisputeEnhancedEvidenceVisaCompellingEvidence3,
  Schemas$DisputeEnhancedEvidenceVisaCompellingEvidence3,
} from "./dispute-enhanced-evidence-visa-compelling-evidence3";
import {
  DisputeEnhancedEvidenceVisaCompliance,
  External$DisputeEnhancedEvidenceVisaCompliance,
  Schemas$DisputeEnhancedEvidenceVisaCompliance,
} from "./dispute-enhanced-evidence-visa-compliance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEvidence = {
  visaCompellingEvidence3?:
    | DisputeEnhancedEvidenceVisaCompellingEvidence3
    | undefined;
  visaCompliance?: DisputeEnhancedEvidenceVisaCompliance | undefined;
};

/**
 * @internal
 * DisputeEnhancedEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEvidence = {
  visa_compelling_evidence_3?:
    | External$DisputeEnhancedEvidenceVisaCompellingEvidence3
    | undefined;
  visa_compliance?: External$DisputeEnhancedEvidenceVisaCompliance | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEvidence
 */
const SchemaIn$DisputeEnhancedEvidence: z.ZodType<
  DisputeEnhancedEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    visa_compelling_evidence_3:
      Schemas$DisputeEnhancedEvidenceVisaCompellingEvidence3.in.optional(),
    visa_compliance:
      Schemas$DisputeEnhancedEvidenceVisaCompliance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visa_compelling_evidence_3: "visaCompellingEvidence3",
      visa_compliance: "visaCompliance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEvidence
 */
const SchemaOut$DisputeEnhancedEvidence: z.ZodType<
  External$DisputeEnhancedEvidence, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEvidence // the object to be transformed
> = z
  .object({
    visaCompellingEvidence3:
      Schemas$DisputeEnhancedEvidenceVisaCompellingEvidence3.out.optional(),
    visaCompliance:
      Schemas$DisputeEnhancedEvidenceVisaCompliance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visaCompellingEvidence3: "visa_compelling_evidence_3",
      visaCompliance: "visa_compliance",
    });
  });

export const Schemas$DisputeEnhancedEvidence = {
  in: SchemaIn$DisputeEnhancedEvidence,
  out: SchemaOut$DisputeEnhancedEvidence,
};
