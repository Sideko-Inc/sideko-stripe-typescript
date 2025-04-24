import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodUpdateBodyMetadataObj0
 */
export type PaymentMethodUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PaymentMethodUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBodyMetadataObj0
 */
const SchemaIn$PaymentMethodUpdateBodyMetadataObj0: z.ZodType<
  PaymentMethodUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBodyMetadataObj0
 */
const SchemaOut$PaymentMethodUpdateBodyMetadataObj0: z.ZodType<
  External$PaymentMethodUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PaymentMethodUpdateBodyMetadataObj0 = {
  in: SchemaIn$PaymentMethodUpdateBodyMetadataObj0,
  out: SchemaOut$PaymentMethodUpdateBodyMetadataObj0,
};
