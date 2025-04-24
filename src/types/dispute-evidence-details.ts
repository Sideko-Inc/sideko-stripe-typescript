import {
  DisputeEnhancedEligibility,
  External$DisputeEnhancedEligibility,
  Schemas$DisputeEnhancedEligibility,
} from "./dispute-enhanced-eligibility";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEvidenceDetails = {
  /**
   * Date by which evidence must be submitted in order to successfully challenge dispute. Will be 0 if the customer's bank or credit card company doesn't allow a response for this particular dispute.
   */
  dueBy?: number | null | undefined;
  enhancedEligibility: DisputeEnhancedEligibility;
  /**
   * Whether evidence has been staged for this dispute.
   */
  hasEvidence: boolean;
  /**
   * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
   */
  pastDue: boolean;
  /**
   * The number of times evidence has been submitted. Typically, you may only submit evidence once.
   */
  submissionCount: number;
};

/**
 * @internal
 * DisputeEvidenceDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEvidenceDetails = {
  due_by?: number | null | undefined;
  enhanced_eligibility: External$DisputeEnhancedEligibility;
  has_evidence: boolean;
  past_due: boolean;
  submission_count: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEvidenceDetails
 */
const SchemaIn$DisputeEvidenceDetails: z.ZodType<
  DisputeEvidenceDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    due_by: z.number().int().nullable().optional(),
    enhanced_eligibility: Schemas$DisputeEnhancedEligibility.in,
    has_evidence: z.boolean(),
    past_due: z.boolean(),
    submission_count: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      due_by: "dueBy",
      enhanced_eligibility: "enhancedEligibility",
      has_evidence: "hasEvidence",
      past_due: "pastDue",
      submission_count: "submissionCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEvidenceDetails
 */
const SchemaOut$DisputeEvidenceDetails: z.ZodType<
  External$DisputeEvidenceDetails, // output type of this zod object
  z.ZodTypeDef,
  DisputeEvidenceDetails // the object to be transformed
> = z
  .object({
    dueBy: z.number().int().nullable().optional(),
    enhancedEligibility: Schemas$DisputeEnhancedEligibility.out,
    hasEvidence: z.boolean(),
    pastDue: z.boolean(),
    submissionCount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dueBy: "due_by",
      enhancedEligibility: "enhanced_eligibility",
      hasEvidence: "has_evidence",
      pastDue: "past_due",
      submissionCount: "submission_count",
    });
  });

export const Schemas$DisputeEvidenceDetails = {
  in: SchemaIn$DisputeEvidenceDetails,
  out: SchemaOut$DisputeEvidenceDetails,
};
