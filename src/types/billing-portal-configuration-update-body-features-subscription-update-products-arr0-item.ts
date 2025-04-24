import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    prices: string[];
    product: string;
  };

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    prices: string[];
    product: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    prices: z.array(z.string()),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prices: "prices",
      product: "product",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item // the object to be transformed
> = z
  .object({
    prices: z.array(z.string()),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      prices: "prices",
      product: "product",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  };
