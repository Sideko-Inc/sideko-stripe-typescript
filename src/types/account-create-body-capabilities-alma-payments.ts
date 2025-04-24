import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAlmaPayments
 */
export type AccountCreateBodyCapabilitiesAlmaPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAlmaPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAlmaPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAlmaPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAlmaPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAlmaPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAlmaPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAlmaPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAlmaPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAlmaPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAlmaPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAlmaPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAlmaPayments,
};
