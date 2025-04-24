import {
  BillingCreditGrantsResourceScope,
  External$BillingCreditGrantsResourceScope,
  Schemas$BillingCreditGrantsResourceScope,
} from "./billing-credit-grants-resource-scope";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceApplicabilityConfig = {
  scope: BillingCreditGrantsResourceScope;
};

/**
 * @internal
 * BillingCreditGrantsResourceApplicabilityConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceApplicabilityConfig = {
  scope: External$BillingCreditGrantsResourceScope;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceApplicabilityConfig
 */
const SchemaIn$BillingCreditGrantsResourceApplicabilityConfig: z.ZodType<
  BillingCreditGrantsResourceApplicabilityConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    scope: Schemas$BillingCreditGrantsResourceScope.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceApplicabilityConfig
 */
const SchemaOut$BillingCreditGrantsResourceApplicabilityConfig: z.ZodType<
  External$BillingCreditGrantsResourceApplicabilityConfig, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceApplicabilityConfig // the object to be transformed
> = z
  .object({
    scope: Schemas$BillingCreditGrantsResourceScope.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
    });
  });

export const Schemas$BillingCreditGrantsResourceApplicabilityConfig = {
  in: SchemaIn$BillingCreditGrantsResourceApplicabilityConfig,
  out: SchemaOut$BillingCreditGrantsResourceApplicabilityConfig,
};
