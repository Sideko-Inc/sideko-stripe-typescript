import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type ShippingRateCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ShippingRateCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$ShippingRateCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyMetadata
 */
const SchemaIn$ShippingRateCreateBodyMetadata: z.ZodType<
  ShippingRateCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyMetadata
 */
const SchemaOut$ShippingRateCreateBodyMetadata: z.ZodType<
  External$ShippingRateCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ShippingRateCreateBodyMetadata = {
  in: SchemaIn$ShippingRateCreateBodyMetadata,
  out: SchemaOut$ShippingRateCreateBodyMetadata,
};
