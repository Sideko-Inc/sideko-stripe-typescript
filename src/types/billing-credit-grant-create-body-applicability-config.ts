import {
  BillingCreditGrantCreateBodyApplicabilityConfigScope,
  External$BillingCreditGrantCreateBodyApplicabilityConfigScope,
  Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScope,
} from "./billing-credit-grant-create-body-applicability-config-scope";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
 */
export type BillingCreditGrantCreateBodyApplicabilityConfig = {
  scope: BillingCreditGrantCreateBodyApplicabilityConfigScope;
};

/**
 * @internal
 * BillingCreditGrantCreateBodyApplicabilityConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyApplicabilityConfig = {
  scope: External$BillingCreditGrantCreateBodyApplicabilityConfigScope;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyApplicabilityConfig
 */
const SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfig: z.ZodType<
  BillingCreditGrantCreateBodyApplicabilityConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    scope: Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScope.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyApplicabilityConfig
 */
const SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfig: z.ZodType<
  External$BillingCreditGrantCreateBodyApplicabilityConfig, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyApplicabilityConfig // the object to be transformed
> = z
  .object({
    scope: Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScope.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
    });
  });

export const Schemas$BillingCreditGrantCreateBodyApplicabilityConfig = {
  in: SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfig,
  out: SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfig,
};
