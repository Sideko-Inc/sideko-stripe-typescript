import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyMetadataObj0
 */
export type PaymentIntentUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PaymentIntentUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyMetadataObj0
 */
const SchemaIn$PaymentIntentUpdateBodyMetadataObj0: z.ZodType<
  PaymentIntentUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyMetadataObj0
 */
const SchemaOut$PaymentIntentUpdateBodyMetadataObj0: z.ZodType<
  External$PaymentIntentUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentIntentUpdateBodyMetadataObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyMetadataObj0,
  out: SchemaOut$PaymentIntentUpdateBodyMetadataObj0,
};
