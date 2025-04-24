import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesBacsDebitPayments
 */
export type AccountCreateBodyCapabilitiesBacsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesBacsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesBacsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesBacsDebitPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesBacsDebitPayments: z.ZodType<
  AccountCreateBodyCapabilitiesBacsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesBacsDebitPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesBacsDebitPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesBacsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesBacsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesBacsDebitPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesBacsDebitPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesBacsDebitPayments,
};
