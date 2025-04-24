import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodySubscriptionDataMetadataObj0
 */
export type PaymentLinkUpdateBodySubscriptionDataMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionDataMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0 = {
  [additionalProperty: string]:
    | External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionDataMetadataObj0
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionDataMetadataObj0: z.ZodType<
  PaymentLinkUpdateBodySubscriptionDataMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionDataMetadataObj0: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionDataMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkUpdateBodySubscriptionDataMetadataObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodySubscriptionDataMetadataObj0,
  out: SchemaOut$PaymentLinkUpdateBodySubscriptionDataMetadataObj0,
};
