import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesPayByBankPayments
 */
export type AccountCreateBodyCapabilitiesPayByBankPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesPayByBankPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesPayByBankPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesPayByBankPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesPayByBankPayments: z.ZodType<
  AccountCreateBodyCapabilitiesPayByBankPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesPayByBankPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesPayByBankPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesPayByBankPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesPayByBankPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesPayByBankPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesPayByBankPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesPayByBankPayments,
};
