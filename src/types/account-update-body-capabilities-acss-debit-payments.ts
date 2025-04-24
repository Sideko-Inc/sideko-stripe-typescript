import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAcssDebitPayments
 */
export type AccountUpdateBodyCapabilitiesAcssDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAcssDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAcssDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAcssDebitPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAcssDebitPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAcssDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAcssDebitPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAcssDebitPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAcssDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAcssDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAcssDebitPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAcssDebitPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAcssDebitPayments,
};
