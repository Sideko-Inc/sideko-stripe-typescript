import {
  BillingCreditGrantsResourceApplicablePrice,
  External$BillingCreditGrantsResourceApplicablePrice,
  Schemas$BillingCreditGrantsResourceApplicablePrice,
} from "./billing-credit-grants-resource-applicable-price";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceScope = {
  /**
   * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
   */
  priceType?: "metered" | undefined;
  /**
   * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
   */
  prices?: BillingCreditGrantsResourceApplicablePrice[] | undefined;
};

/**
 * @internal
 * BillingCreditGrantsResourceScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceScope = {
  price_type?: "metered" | undefined;
  prices?: External$BillingCreditGrantsResourceApplicablePrice[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceScope
 */
const SchemaIn$BillingCreditGrantsResourceScope: z.ZodType<
  BillingCreditGrantsResourceScope, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price_type: z.enum(["metered"]).optional(),
    prices: z
      .array(Schemas$BillingCreditGrantsResourceApplicablePrice.in)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceScope
 */
const SchemaOut$BillingCreditGrantsResourceScope: z.ZodType<
  External$BillingCreditGrantsResourceScope, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceScope // the object to be transformed
> = z
  .object({
    priceType: z.enum(["metered"]).optional(),
    prices: z
      .array(Schemas$BillingCreditGrantsResourceApplicablePrice.out)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      priceType: "price_type",
      prices: "prices",
    });
  });

export const Schemas$BillingCreditGrantsResourceScope = {
  in: SchemaIn$BillingCreditGrantsResourceScope,
  out: SchemaOut$BillingCreditGrantsResourceScope,
};
