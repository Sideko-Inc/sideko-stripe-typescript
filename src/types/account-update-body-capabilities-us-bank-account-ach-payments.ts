import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesUsBankAccountAchPayments
 */
export type AccountUpdateBodyCapabilitiesUsBankAccountAchPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesUsBankAccountAchPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesUsBankAccountAchPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesUsBankAccountAchPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesUsBankAccountAchPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesUsBankAccountAchPayments,
};
