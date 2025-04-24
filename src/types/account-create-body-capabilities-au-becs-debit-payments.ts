import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAuBecsDebitPayments
 */
export type AccountCreateBodyCapabilitiesAuBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAuBecsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAuBecsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAuBecsDebitPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAuBecsDebitPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAuBecsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAuBecsDebitPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAuBecsDebitPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAuBecsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAuBecsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAuBecsDebitPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAuBecsDebitPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAuBecsDebitPayments,
};
