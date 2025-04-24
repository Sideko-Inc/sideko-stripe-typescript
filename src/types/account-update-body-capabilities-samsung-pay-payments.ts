import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSamsungPayPayments
 */
export type AccountUpdateBodyCapabilitiesSamsungPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSamsungPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSamsungPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSamsungPayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSamsungPayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSamsungPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSamsungPayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSamsungPayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSamsungPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSamsungPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSamsungPayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSamsungPayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSamsungPayPayments,
};
