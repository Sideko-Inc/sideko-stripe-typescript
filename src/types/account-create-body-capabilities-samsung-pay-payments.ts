import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSamsungPayPayments
 */
export type AccountCreateBodyCapabilitiesSamsungPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSamsungPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSamsungPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSamsungPayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSamsungPayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSamsungPayPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSamsungPayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSamsungPayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSamsungPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSamsungPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSamsungPayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSamsungPayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSamsungPayPayments,
};
