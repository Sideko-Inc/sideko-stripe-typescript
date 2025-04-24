import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesIndiaInternationalPayments
 */
export type AccountUpdateBodyCapabilitiesIndiaInternationalPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesIndiaInternationalPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesIndiaInternationalPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesIndiaInternationalPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesIndiaInternationalPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesIndiaInternationalPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesIndiaInternationalPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesIndiaInternationalPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesIndiaInternationalPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesIndiaInternationalPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesIndiaInternationalPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesIndiaInternationalPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesIndiaInternationalPayments,
};
