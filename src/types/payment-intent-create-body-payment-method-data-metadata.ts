import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataMetadata
 */
export type PaymentIntentCreateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentIntentCreateBodyPaymentMethodDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataMetadata
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataMetadata: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataMetadata
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataMetadata: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataMetadata = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataMetadata,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataMetadata,
};
