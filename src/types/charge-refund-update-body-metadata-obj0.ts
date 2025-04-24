import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeRefundUpdateBodyMetadataObj0
 */
export type ChargeRefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeRefundUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeRefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeRefundUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeRefundUpdateBodyMetadataObj0
 */
const SchemaIn$ChargeRefundUpdateBodyMetadataObj0: z.ZodType<
  ChargeRefundUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeRefundUpdateBodyMetadataObj0
 */
const SchemaOut$ChargeRefundUpdateBodyMetadataObj0: z.ZodType<
  External$ChargeRefundUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeRefundUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeRefundUpdateBodyMetadataObj0 = {
  in: SchemaIn$ChargeRefundUpdateBodyMetadataObj0,
  out: SchemaOut$ChargeRefundUpdateBodyMetadataObj0,
};
