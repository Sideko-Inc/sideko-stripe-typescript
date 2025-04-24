import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeRefundCreate1BodyMetadataObj0
 */
export type ChargeRefundCreate1BodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeRefundCreate1BodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeRefundCreate1BodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeRefundCreate1BodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeRefundCreate1BodyMetadataObj0
 */
const SchemaIn$ChargeRefundCreate1BodyMetadataObj0: z.ZodType<
  ChargeRefundCreate1BodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeRefundCreate1BodyMetadataObj0
 */
const SchemaOut$ChargeRefundCreate1BodyMetadataObj0: z.ZodType<
  External$ChargeRefundCreate1BodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeRefundCreate1BodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeRefundCreate1BodyMetadataObj0 = {
  in: SchemaIn$ChargeRefundCreate1BodyMetadataObj0,
  out: SchemaOut$ChargeRefundCreate1BodyMetadataObj0,
};
