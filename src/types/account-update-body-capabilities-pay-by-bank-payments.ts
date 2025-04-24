import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesPayByBankPayments
 */
export type AccountUpdateBodyCapabilitiesPayByBankPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesPayByBankPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesPayByBankPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesPayByBankPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesPayByBankPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesPayByBankPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesPayByBankPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesPayByBankPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesPayByBankPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesPayByBankPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesPayByBankPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesPayByBankPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesPayByBankPayments,
};
