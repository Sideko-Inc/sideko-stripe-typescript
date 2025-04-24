import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAuBecsDebitPayments
 */
export type AccountUpdateBodyCapabilitiesAuBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAuBecsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAuBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAuBecsDebitPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAuBecsDebitPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAuBecsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAuBecsDebitPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAuBecsDebitPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAuBecsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAuBecsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAuBecsDebitPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAuBecsDebitPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAuBecsDebitPayments,
};
