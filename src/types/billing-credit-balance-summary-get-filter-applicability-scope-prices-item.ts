import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem
 */
export type BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem = {
  id: string;
};

/**
 * @internal
 * BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem =
  {
    id: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem
 */
const SchemaIn$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem: z.ZodType<
  BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem
 */
const SchemaOut$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem: z.ZodType<
  External$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem // the object to be transformed
> = z
  .object({
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

export const Schemas$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem =
  {
    in: SchemaIn$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem,
    out: SchemaOut$BillingCreditBalanceSummaryGetFilterApplicabilityScopePricesItem,
  };
