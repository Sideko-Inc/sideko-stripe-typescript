import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link.
 */
export type PaymentLinksResourceSubscriptionDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourceSubscriptionDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceSubscriptionDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentLinksResourceSubscriptionDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceSubscriptionDataMetadata
 */
const SchemaIn$PaymentLinksResourceSubscriptionDataMetadata: z.ZodType<
  PaymentLinksResourceSubscriptionDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceSubscriptionDataMetadata
 */
const SchemaOut$PaymentLinksResourceSubscriptionDataMetadata: z.ZodType<
  External$PaymentLinksResourceSubscriptionDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceSubscriptionDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinksResourceSubscriptionDataMetadata = {
  in: SchemaIn$PaymentLinksResourceSubscriptionDataMetadata,
  out: SchemaOut$PaymentLinksResourceSubscriptionDataMetadata,
};
