import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeRefundUpdateBodyMetadataObj0
 */
export type ApplicationFeeRefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ApplicationFeeRefundUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ApplicationFeeRefundUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefundUpdateBodyMetadataObj0
 */
const SchemaIn$ApplicationFeeRefundUpdateBodyMetadataObj0: z.ZodType<
  ApplicationFeeRefundUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefundUpdateBodyMetadataObj0
 */
const SchemaOut$ApplicationFeeRefundUpdateBodyMetadataObj0: z.ZodType<
  External$ApplicationFeeRefundUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefundUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ApplicationFeeRefundUpdateBodyMetadataObj0 = {
  in: SchemaIn$ApplicationFeeRefundUpdateBodyMetadataObj0,
  out: SchemaOut$ApplicationFeeRefundUpdateBodyMetadataObj0,
};
