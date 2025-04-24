import {
  DisputeEnhancedEligibilityVisaCompellingEvidence3,
  External$DisputeEnhancedEligibilityVisaCompellingEvidence3,
  Schemas$DisputeEnhancedEligibilityVisaCompellingEvidence3,
} from "./dispute-enhanced-eligibility-visa-compelling-evidence3";
import {
  DisputeEnhancedEligibilityVisaCompliance,
  External$DisputeEnhancedEligibilityVisaCompliance,
  Schemas$DisputeEnhancedEligibilityVisaCompliance,
} from "./dispute-enhanced-eligibility-visa-compliance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEligibility = {
  visaCompellingEvidence3?:
    | DisputeEnhancedEligibilityVisaCompellingEvidence3
    | undefined;
  visaCompliance?: DisputeEnhancedEligibilityVisaCompliance | undefined;
};

/**
 * @internal
 * DisputeEnhancedEligibility without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEligibility = {
  visa_compelling_evidence_3?:
    | External$DisputeEnhancedEligibilityVisaCompellingEvidence3
    | undefined;
  visa_compliance?:
    | External$DisputeEnhancedEligibilityVisaCompliance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEligibility
 */
const SchemaIn$DisputeEnhancedEligibility: z.ZodType<
  DisputeEnhancedEligibility, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    visa_compelling_evidence_3:
      Schemas$DisputeEnhancedEligibilityVisaCompellingEvidence3.in.optional(),
    visa_compliance:
      Schemas$DisputeEnhancedEligibilityVisaCompliance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visa_compelling_evidence_3: "visaCompellingEvidence3",
      visa_compliance: "visaCompliance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEligibility
 */
const SchemaOut$DisputeEnhancedEligibility: z.ZodType<
  External$DisputeEnhancedEligibility, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEligibility // the object to be transformed
> = z
  .object({
    visaCompellingEvidence3:
      Schemas$DisputeEnhancedEligibilityVisaCompellingEvidence3.out.optional(),
    visaCompliance:
      Schemas$DisputeEnhancedEligibilityVisaCompliance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      visaCompellingEvidence3: "visa_compelling_evidence_3",
      visaCompliance: "visa_compliance",
    });
  });

export const Schemas$DisputeEnhancedEligibility = {
  in: SchemaIn$DisputeEnhancedEligibility,
  out: SchemaOut$DisputeEnhancedEligibility,
};
