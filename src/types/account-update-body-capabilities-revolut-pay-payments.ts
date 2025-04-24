import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesRevolutPayPayments
 */
export type AccountUpdateBodyCapabilitiesRevolutPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesRevolutPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesRevolutPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesRevolutPayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesRevolutPayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesRevolutPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesRevolutPayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesRevolutPayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesRevolutPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesRevolutPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesRevolutPayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesRevolutPayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesRevolutPayPayments,
};
