import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentIntentDataMetadata
 */
export type CheckoutSessionCreateBodyPaymentIntentDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentIntentDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentIntentDataMetadata = {
  [additionalProperty: string]:
    | External$CheckoutSessionCreateBodyPaymentIntentDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentIntentDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataMetadata: z.ZodType<
  CheckoutSessionCreateBodyPaymentIntentDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentIntentDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentIntentDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentIntentDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodyPaymentIntentDataMetadata = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataMetadata,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataMetadata,
};
