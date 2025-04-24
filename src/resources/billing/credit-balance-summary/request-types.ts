import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingCreditBalanceSummaryGetFilter,
  External$BillingCreditBalanceSummaryGetFilter,
  Schemas$BillingCreditBalanceSummaryGetFilter,
} from "@sideko-inc/stripe/types/billing-credit-balance-summary-get-filter";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * The customer for which to fetch credit balance summary.
   */
  customer: string;
  /**
   * The filter criteria for the credit balance summary.
   */
  filter: BillingCreditBalanceSummaryGetFilter;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  customer: string;
  filter: External$BillingCreditBalanceSummaryGetFilter;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    filter: Schemas$BillingCreditBalanceSummaryGetFilter.in,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      filter: "filter",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    customer: z.string(),
    filter: Schemas$BillingCreditBalanceSummaryGetFilter.out,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      filter: "filter",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};
