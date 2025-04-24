import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    prices: string[];
    product: string;
  };

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    prices: string[];
    product: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item // the object to be transformed
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

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  };
