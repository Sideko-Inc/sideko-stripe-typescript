import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type KlarnaAddress = {
  /**
   * The payer address country
   */
  country?: string | null | undefined;
};

/**
 * @internal
 * KlarnaAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$KlarnaAddress = {
  country?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object KlarnaAddress
 */
const SchemaIn$KlarnaAddress: z.ZodType<
  KlarnaAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$KlarnaAddress
 */
const SchemaOut$KlarnaAddress: z.ZodType<
  External$KlarnaAddress, // output type of this zod object
  z.ZodTypeDef,
  KlarnaAddress // the object to be transformed
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$KlarnaAddress = {
  in: SchemaIn$KlarnaAddress,
  out: SchemaOut$KlarnaAddress,
};
