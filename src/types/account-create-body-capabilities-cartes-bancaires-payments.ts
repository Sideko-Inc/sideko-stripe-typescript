import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesCartesBancairesPayments
 */
export type AccountCreateBodyCapabilitiesCartesBancairesPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesCartesBancairesPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesCartesBancairesPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesCartesBancairesPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesCartesBancairesPayments: z.ZodType<
  AccountCreateBodyCapabilitiesCartesBancairesPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesCartesBancairesPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesCartesBancairesPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesCartesBancairesPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesCartesBancairesPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesCartesBancairesPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesCartesBancairesPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesCartesBancairesPayments,
};
