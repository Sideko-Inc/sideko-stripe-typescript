import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ProductMarketingFeature = {
  /**
   * The marketing feature name. Up to 80 characters long.
   */
  name?: string | undefined;
};

/**
 * @internal
 * ProductMarketingFeature without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductMarketingFeature = {
  name?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductMarketingFeature
 */
const SchemaIn$ProductMarketingFeature: z.ZodType<
  ProductMarketingFeature, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductMarketingFeature
 */
const SchemaOut$ProductMarketingFeature: z.ZodType<
  External$ProductMarketingFeature, // output type of this zod object
  z.ZodTypeDef,
  ProductMarketingFeature // the object to be transformed
> = z
  .object({
    name: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
    });
  });

export const Schemas$ProductMarketingFeature = {
  in: SchemaIn$ProductMarketingFeature,
  out: SchemaOut$ProductMarketingFeature,
};
