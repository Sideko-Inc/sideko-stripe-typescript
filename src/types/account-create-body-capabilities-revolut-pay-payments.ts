import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesRevolutPayPayments
 */
export type AccountCreateBodyCapabilitiesRevolutPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesRevolutPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesRevolutPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesRevolutPayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesRevolutPayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesRevolutPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesRevolutPayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesRevolutPayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesRevolutPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesRevolutPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesRevolutPayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesRevolutPayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesRevolutPayPayments,
};
