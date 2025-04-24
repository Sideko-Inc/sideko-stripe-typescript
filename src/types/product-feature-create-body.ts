import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductFeatureCreateBody
 */
export type ProductFeatureCreateBody = {
  /**
   * The ID of the [Feature](https://stripe.com/docs/api/entitlements/feature) object attached to this product.
   */
  entitlementFeature: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ProductFeatureCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductFeatureCreateBody = {
  entitlement_feature: string;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | string
    | (string[] | undefined)
    | External$ProductFeatureCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductFeatureCreateBody
 */
const SchemaIn$ProductFeatureCreateBody: z.ZodType<
  ProductFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    entitlement_feature: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      entitlement_feature: "entitlementFeature",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductFeatureCreateBody
 */
const SchemaOut$ProductFeatureCreateBody: z.ZodType<
  External$ProductFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ProductFeatureCreateBody // the object to be transformed
> = z
  .object({
    entitlementFeature: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      entitlementFeature: "entitlement_feature",
      expand: "expand",
    });
  });

export const Schemas$ProductFeatureCreateBody = {
  in: SchemaIn$ProductFeatureCreateBody,
  out: SchemaOut$ProductFeatureCreateBody,
};
