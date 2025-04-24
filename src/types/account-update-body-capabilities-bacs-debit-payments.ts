import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBacsDebitPayments
 */
export type AccountUpdateBodyCapabilitiesBacsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBacsDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBacsDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBacsDebitPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBacsDebitPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBacsDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBacsDebitPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBacsDebitPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBacsDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBacsDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBacsDebitPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBacsDebitPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBacsDebitPayments,
};
