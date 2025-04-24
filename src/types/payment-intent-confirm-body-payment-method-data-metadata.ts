import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataMetadata
 */
export type PaymentIntentConfirmBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataMetadata = {
  [additionalProperty: string]:
    | External$PaymentIntentConfirmBodyPaymentMethodDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataMetadata
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataMetadata: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataMetadata
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataMetadata: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataMetadata = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataMetadata,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataMetadata,
};
