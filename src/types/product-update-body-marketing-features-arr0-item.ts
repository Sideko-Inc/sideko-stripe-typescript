import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductUpdateBodyMarketingFeaturesArr0Item
 */
export type ProductUpdateBodyMarketingFeaturesArr0Item = {
  name: string;
};

/**
 * @internal
 * ProductUpdateBodyMarketingFeaturesArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductUpdateBodyMarketingFeaturesArr0Item = {
  name: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductUpdateBodyMarketingFeaturesArr0Item
 */
const SchemaIn$ProductUpdateBodyMarketingFeaturesArr0Item: z.ZodType<
  ProductUpdateBodyMarketingFeaturesArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductUpdateBodyMarketingFeaturesArr0Item
 */
const SchemaOut$ProductUpdateBodyMarketingFeaturesArr0Item: z.ZodType<
  External$ProductUpdateBodyMarketingFeaturesArr0Item, // output type of this zod object
  z.ZodTypeDef,
  ProductUpdateBodyMarketingFeaturesArr0Item // the object to be transformed
> = z
  .object({
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
    });
  });

export const Schemas$ProductUpdateBodyMarketingFeaturesArr0Item = {
  in: SchemaIn$ProductUpdateBodyMarketingFeaturesArr0Item,
  out: SchemaOut$ProductUpdateBodyMarketingFeaturesArr0Item,
};
