import {
  BillingCreditBalanceSummaryGetFilterApplicabilityScope,
  External$BillingCreditBalanceSummaryGetFilterApplicabilityScope,
  Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScope,
} from "./billing-credit-balance-summary-get-filter-applicability-scope";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The filter criteria for the credit balance summary.
 */
export type BillingCreditBalanceSummaryGetFilter = {
  applicabilityScope?:
    | BillingCreditBalanceSummaryGetFilterApplicabilityScope
    | undefined;
  creditGrant?: string | undefined;
  type: "applicability_scope" | "credit_grant";
};

/**
 * @internal
 * BillingCreditBalanceSummaryGetFilter without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceSummaryGetFilter = {
  applicability_scope?:
    | External$BillingCreditBalanceSummaryGetFilterApplicabilityScope
    | undefined;
  credit_grant?: string | undefined;
  type: "applicability_scope" | "credit_grant";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceSummaryGetFilter
 */
const SchemaIn$BillingCreditBalanceSummaryGetFilter: z.ZodType<
  BillingCreditBalanceSummaryGetFilter, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    applicability_scope:
      Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScope.in.optional(),
    credit_grant: z.string().optional(),
    type: z.enum(["applicability_scope", "credit_grant"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicability_scope: "applicabilityScope",
      credit_grant: "creditGrant",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceSummaryGetFilter
 */
const SchemaOut$BillingCreditBalanceSummaryGetFilter: z.ZodType<
  External$BillingCreditBalanceSummaryGetFilter, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceSummaryGetFilter // the object to be transformed
> = z
  .object({
    applicabilityScope:
      Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScope.out.optional(),
    creditGrant: z.string().optional(),
    type: z.enum(["applicability_scope", "credit_grant"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicabilityScope: "applicability_scope",
      creditGrant: "credit_grant",
      type: "type",
    });
  });

export const Schemas$BillingCreditBalanceSummaryGetFilter = {
  in: SchemaIn$BillingCreditBalanceSummaryGetFilter,
  out: SchemaOut$BillingCreditBalanceSummaryGetFilter,
};
