import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyPaymentIntentDataMetadata
 */
export type PaymentLinkCreateBodyPaymentIntentDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyPaymentIntentDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyPaymentIntentDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentLinkCreateBodyPaymentIntentDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyPaymentIntentDataMetadata
 */
const SchemaIn$PaymentLinkCreateBodyPaymentIntentDataMetadata: z.ZodType<
  PaymentLinkCreateBodyPaymentIntentDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyPaymentIntentDataMetadata
 */
const SchemaOut$PaymentLinkCreateBodyPaymentIntentDataMetadata: z.ZodType<
  External$PaymentLinkCreateBodyPaymentIntentDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyPaymentIntentDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentLinkCreateBodyPaymentIntentDataMetadata = {
  in: SchemaIn$PaymentLinkCreateBodyPaymentIntentDataMetadata,
  out: SchemaOut$PaymentLinkCreateBodyPaymentIntentDataMetadata,
};
