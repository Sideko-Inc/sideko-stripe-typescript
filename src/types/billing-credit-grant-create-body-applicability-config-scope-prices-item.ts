import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem
 */
export type BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem = {
  id: string;
};

/**
 * @internal
 * BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem =
  {
    id: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem
 */
const SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem: z.ZodType<
  BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem
 */
const SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem: z.ZodType<
  External$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem // the object to be transformed
> = z
  .object({
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
    });
  });

export const Schemas$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem =
  {
    in: SchemaIn$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem,
    out: SchemaOut$BillingCreditGrantCreateBodyApplicabilityConfigScopePricesItem,
  };
