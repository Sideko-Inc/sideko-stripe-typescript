import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateSingleUse = {
  /**
   * The amount of the payment on a single use mandate.
   */
  amount: number;
  /**
   * The currency of the payment on a single use mandate.
   */
  currency: string;
};

/**
 * @internal
 * MandateSingleUse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateSingleUse = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateSingleUse
 */
const SchemaIn$MandateSingleUse: z.ZodType<
  MandateSingleUse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateSingleUse
 */
const SchemaOut$MandateSingleUse: z.ZodType<
  External$MandateSingleUse, // output type of this zod object
  z.ZodTypeDef,
  MandateSingleUse // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

export const Schemas$MandateSingleUse = {
  in: SchemaIn$MandateSingleUse,
  out: SchemaOut$MandateSingleUse,
};
