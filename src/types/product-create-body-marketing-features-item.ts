import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductCreateBodyMarketingFeaturesItem
 */
export type ProductCreateBodyMarketingFeaturesItem = {
  name: string;
};

/**
 * @internal
 * ProductCreateBodyMarketingFeaturesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyMarketingFeaturesItem = {
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyMarketingFeaturesItem
 */
const SchemaIn$ProductCreateBodyMarketingFeaturesItem: z.ZodType<
  ProductCreateBodyMarketingFeaturesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyMarketingFeaturesItem
 */
const SchemaOut$ProductCreateBodyMarketingFeaturesItem: z.ZodType<
  External$ProductCreateBodyMarketingFeaturesItem, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyMarketingFeaturesItem // the object to be transformed
> = z
  .object({
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
    });
  });

export const Schemas$ProductCreateBodyMarketingFeaturesItem = {
  in: SchemaIn$ProductCreateBodyMarketingFeaturesItem,
  out: SchemaOut$ProductCreateBodyMarketingFeaturesItem,
};
