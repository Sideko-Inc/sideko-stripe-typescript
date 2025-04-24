import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCaptureBodyMetadataObj0
 */
export type PaymentIntentCaptureBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentCaptureBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCaptureBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PaymentIntentCaptureBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCaptureBodyMetadataObj0
 */
const SchemaIn$PaymentIntentCaptureBodyMetadataObj0: z.ZodType<
  PaymentIntentCaptureBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCaptureBodyMetadataObj0
 */
const SchemaOut$PaymentIntentCaptureBodyMetadataObj0: z.ZodType<
  External$PaymentIntentCaptureBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCaptureBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentIntentCaptureBodyMetadataObj0 = {
  in: SchemaIn$PaymentIntentCaptureBodyMetadataObj0,
  out: SchemaOut$PaymentIntentCaptureBodyMetadataObj0,
};
