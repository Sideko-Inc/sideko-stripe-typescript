import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateUpdateBodyMetadataObj0
 */
export type ShippingRateUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ShippingRateUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ShippingRateUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateUpdateBodyMetadataObj0
 */
const SchemaIn$ShippingRateUpdateBodyMetadataObj0: z.ZodType<
  ShippingRateUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateUpdateBodyMetadataObj0
 */
const SchemaOut$ShippingRateUpdateBodyMetadataObj0: z.ZodType<
  External$ShippingRateUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ShippingRateUpdateBodyMetadataObj0 = {
  in: SchemaIn$ShippingRateUpdateBodyMetadataObj0,
  out: SchemaOut$ShippingRateUpdateBodyMetadataObj0,
};
