import {
  BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem,
  External$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem,
  Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem,
} from "./billing-credit-grant-create-body-applicability-config-scope-prices-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantCreateBodyApplicabilityConfigScope
 */
export type BillingCreditGrantCreateBodyApplicabilityConfigScope = {
  priceType?: "metered" | undefined;
  prices?:
    | BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem[]
    | undefined;
};

/**
 * @internal
 * BillingCreditGrantCreateBodyApplicabilityConfigScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyApplicabilityConfigScope = {
  price_type?: "metered" | undefined;
  prices?:
    | External$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem[]
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyApplicabilityConfigScope
 */
const SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfigScope: z.ZodType<
  BillingCreditGrantCreateBodyApplicabilityConfigScope, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price_type: z.enum(["metered"]).optional(),
    prices: z
      .array(
        Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyApplicabilityConfigScope
 */
const SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfigScope: z.ZodType<
  External$BillingCreditGrantCreateBodyApplicabilityConfigScope, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyApplicabilityConfigScope // the object to be transformed
> = z
  .object({
    priceType: z.enum(["metered"]).optional(),
    prices: z
      .array(
        Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      priceType: "price_type",
      prices: "prices",
    });
  });

export const Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScope = {
  in: SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfigScope,
  out: SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfigScope,
};
