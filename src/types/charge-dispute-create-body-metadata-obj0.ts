import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeDisputeCreateBodyMetadataObj0
 */
export type ChargeDisputeCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeDisputeCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeDisputeCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeDisputeCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeDisputeCreateBodyMetadataObj0
 */
const SchemaIn$ChargeDisputeCreateBodyMetadataObj0: z.ZodType<
  ChargeDisputeCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeDisputeCreateBodyMetadataObj0
 */
const SchemaOut$ChargeDisputeCreateBodyMetadataObj0: z.ZodType<
  External$ChargeDisputeCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeDisputeCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeDisputeCreateBodyMetadataObj0 = {
  in: SchemaIn$ChargeDisputeCreateBodyMetadataObj0,
  out: SchemaOut$ChargeDisputeCreateBodyMetadataObj0,
};
