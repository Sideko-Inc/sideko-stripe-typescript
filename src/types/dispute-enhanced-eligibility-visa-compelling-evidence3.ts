import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputeEnhancedEligibilityVisaCompellingEvidence3 = {
  /**
   * List of actions required to qualify dispute for Visa Compelling Evidence 3.0 evidence submission.
   */
  requiredActions: (
    | "missing_customer_identifiers"
    | "missing_disputed_transaction_description"
    | "missing_merchandise_or_services"
    | "missing_prior_undisputed_transaction_description"
    | "missing_prior_undisputed_transactions"
  )[];
  /**
   * Visa Compelling Evidence 3.0 eligibility status.
   */
  status: "not_qualified" | "qualified" | "requires_action";
};

/**
 * @internal
 * DisputeEnhancedEligibilityVisaCompellingEvidence3 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeEnhancedEligibilityVisaCompellingEvidence3 = {
  required_actions: (
    | "missing_customer_identifiers"
    | "missing_disputed_transaction_description"
    | "missing_merchandise_or_services"
    | "missing_prior_undisputed_transaction_description"
    | "missing_prior_undisputed_transactions"
  )[];
  status: "not_qualified" | "qualified" | "requires_action";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeEnhancedEligibilityVisaCompellingEvidence3
 */
const SchemaIn$DisputeEnhancedEligibilityVisaCompellingEvidence3: z.ZodType<
  DisputeEnhancedEligibilityVisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    required_actions: z.array(
      z.enum([
        "missing_customer_identifiers",
        "missing_disputed_transaction_description",
        "missing_merchandise_or_services",
        "missing_prior_undisputed_transaction_description",
        "missing_prior_undisputed_transactions",
      ]),
    ),
    status: z.enum(["not_qualified", "qualified", "requires_action"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      required_actions: "requiredActions",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeEnhancedEligibilityVisaCompellingEvidence3
 */
const SchemaOut$DisputeEnhancedEligibilityVisaCompellingEvidence3: z.ZodType<
  External$DisputeEnhancedEligibilityVisaCompellingEvidence3, // output type of this zod object
  z.ZodTypeDef,
  DisputeEnhancedEligibilityVisaCompellingEvidence3 // the object to be transformed
> = z
  .object({
    requiredActions: z.array(
      z.enum([
        "missing_customer_identifiers",
        "missing_disputed_transaction_description",
        "missing_merchandise_or_services",
        "missing_prior_undisputed_transaction_description",
        "missing_prior_undisputed_transactions",
      ]),
    ),
    status: z.enum(["not_qualified", "qualified", "requires_action"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requiredActions: "required_actions",
      status: "status",
    });
  });

export const Schemas$DisputeEnhancedEligibilityVisaCompellingEvidence3 = {
  in: SchemaIn$DisputeEnhancedEligibilityVisaCompellingEvidence3,
  out: SchemaOut$DisputeEnhancedEligibilityVisaCompellingEvidence3,
};
