import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyMetadataObj0
 */
export type CheckoutSessionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CheckoutSessionUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CheckoutSessionUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyMetadataObj0
 */
const SchemaIn$CheckoutSessionUpdateBodyMetadataObj0: z.ZodType<
  CheckoutSessionUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyMetadataObj0
 */
const SchemaOut$CheckoutSessionUpdateBodyMetadataObj0: z.ZodType<
  External$CheckoutSessionUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionUpdateBodyMetadataObj0 = {
  in: SchemaIn$CheckoutSessionUpdateBodyMetadataObj0,
  out: SchemaOut$CheckoutSessionUpdateBodyMetadataObj0,
};
