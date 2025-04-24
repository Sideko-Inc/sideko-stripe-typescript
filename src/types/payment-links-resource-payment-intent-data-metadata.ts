import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link.
 */
export type PaymentLinksResourcePaymentIntentDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourcePaymentIntentDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourcePaymentIntentDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentLinksResourcePaymentIntentDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourcePaymentIntentDataMetadata
 */
const SchemaIn$PaymentLinksResourcePaymentIntentDataMetadata: z.ZodType<
  PaymentLinksResourcePaymentIntentDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourcePaymentIntentDataMetadata
 */
const SchemaOut$PaymentLinksResourcePaymentIntentDataMetadata: z.ZodType<
  External$PaymentLinksResourcePaymentIntentDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourcePaymentIntentDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinksResourcePaymentIntentDataMetadata = {
  in: SchemaIn$PaymentLinksResourcePaymentIntentDataMetadata,
  out: SchemaOut$PaymentLinksResourcePaymentIntentDataMetadata,
};
