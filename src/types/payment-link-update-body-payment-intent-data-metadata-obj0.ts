import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0
 */
export type PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 = {
  [additionalProperty: string]:
    | External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0
 */
const SchemaIn$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0: z.ZodType<
  PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0
 */
const SchemaOut$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0: z.ZodType<
  External$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0,
  out: SchemaOut$PaymentLinkUpdateBodyPaymentIntentDataMetadataObj0,
};
