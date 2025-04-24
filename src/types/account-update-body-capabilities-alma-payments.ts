import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAlmaPayments
 */
export type AccountUpdateBodyCapabilitiesAlmaPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAlmaPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAlmaPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAlmaPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAlmaPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAlmaPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAlmaPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAlmaPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAlmaPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAlmaPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAlmaPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAlmaPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAlmaPayments,
};
