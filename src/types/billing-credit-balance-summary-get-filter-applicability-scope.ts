import {
  BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem,
  External$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem,
  Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem,
} from "./billing-credit-balance-summary-get-filter-applicability-scope-prices-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditBalanceSummaryGetFilterApplicabilityScope
 */
export type BillingCreditBalanceSummaryGetFilterApplicabilityScope = {
  priceType?: "metered" | undefined;
  prices?:
    | BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem[]
    | undefined;
};

/**
 * @internal
 * BillingCreditBalanceSummaryGetFilterApplicabilityScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceSummaryGetFilterApplicabilityScope = {
  price_type?: "metered" | undefined;
  prices?:
    | External$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem[]
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceSummaryGetFilterApplicabilityScope
 */
const SchemaIn$BillingCreditBalanceSummaryGetFilterApplicabilityScope: z.ZodType<
  BillingCreditBalanceSummaryGetFilterApplicabilityScope, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price_type: z.enum(["metered"]).optional(),
    prices: z
      .array(
        Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem.in,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price_type: "priceType",
      prices: "prices",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceSummaryGetFilterApplicabilityScope
 */
const SchemaOut$BillingCreditBalanceSummaryGetFilterApplicabilityScope: z.ZodType<
  External$BillingCreditBalanceSummaryGetFilterApplicabilityScope, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceSummaryGetFilterApplicabilityScope // the object to be transformed
> = z
  .object({
    priceType: z.enum(["metered"]).optional(),
    prices: z
      .array(
        Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      priceType: "price_type",
      prices: "prices",
    });
  });

export const Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScope = {
  in: SchemaIn$BillingCreditBalanceSummaryGetFilterApplicabilityScope,
  out: SchemaOut$BillingCreditBalanceSummaryGetFilterApplicabilityScope,
};
