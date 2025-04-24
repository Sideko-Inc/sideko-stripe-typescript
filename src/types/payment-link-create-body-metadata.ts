import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
 */
export type PaymentLinkCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$PaymentLinkCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyMetadata
 */
const SchemaIn$PaymentLinkCreateBodyMetadata: z.ZodType<
  PaymentLinkCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyMetadata
 */
const SchemaOut$PaymentLinkCreateBodyMetadata: z.ZodType<
  External$PaymentLinkCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkCreateBodyMetadata = {
  in: SchemaIn$PaymentLinkCreateBodyMetadata,
  out: SchemaOut$PaymentLinkCreateBodyMetadata,
};
