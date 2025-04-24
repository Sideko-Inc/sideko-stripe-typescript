import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAcssDebitPayments
 */
export type AccountCreateBodyCapabilitiesAcssDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAcssDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAcssDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAcssDebitPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAcssDebitPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAcssDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAcssDebitPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAcssDebitPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAcssDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAcssDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAcssDebitPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAcssDebitPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAcssDebitPayments,
};
