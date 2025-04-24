import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeCreateBodyCardObj0Metadata
 */
export type ChargeCreateBodyCardObj0Metadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeCreateBodyCardObj0Metadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyCardObj0Metadata = {
  [additionalProperty: string]:
    | External$ChargeCreateBodyCardObj0Metadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyCardObj0Metadata
 */
const SchemaIn$ChargeCreateBodyCardObj0Metadata: z.ZodType<
  ChargeCreateBodyCardObj0Metadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyCardObj0Metadata
 */
const SchemaOut$ChargeCreateBodyCardObj0Metadata: z.ZodType<
  External$ChargeCreateBodyCardObj0Metadata, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyCardObj0Metadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeCreateBodyCardObj0Metadata = {
  in: SchemaIn$ChargeCreateBodyCardObj0Metadata,
  out: SchemaOut$ChargeCreateBodyCardObj0Metadata,
};
