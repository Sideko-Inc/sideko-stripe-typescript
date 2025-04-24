import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesCartesBancairesPayments
 */
export type AccountUpdateBodyCapabilitiesCartesBancairesPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesCartesBancairesPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesCartesBancairesPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesCartesBancairesPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesCartesBancairesPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesCartesBancairesPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesCartesBancairesPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesCartesBancairesPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesCartesBancairesPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesCartesBancairesPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesCartesBancairesPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesCartesBancairesPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesCartesBancairesPayments,
};
