import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeRefundCreateBodyMetadataObj0
 */
export type ChargeRefundCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeRefundCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeRefundCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeRefundCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeRefundCreateBodyMetadataObj0
 */
const SchemaIn$ChargeRefundCreateBodyMetadataObj0: z.ZodType<
  ChargeRefundCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeRefundCreateBodyMetadataObj0
 */
const SchemaOut$ChargeRefundCreateBodyMetadataObj0: z.ZodType<
  External$ChargeRefundCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeRefundCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeRefundCreateBodyMetadataObj0 = {
  in: SchemaIn$ChargeRefundCreateBodyMetadataObj0,
  out: SchemaOut$ChargeRefundCreateBodyMetadataObj0,
};
