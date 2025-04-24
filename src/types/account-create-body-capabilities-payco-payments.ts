import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesPaycoPayments
 */
export type AccountCreateBodyCapabilitiesPaycoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesPaycoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesPaycoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesPaycoPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesPaycoPayments: z.ZodType<
  AccountCreateBodyCapabilitiesPaycoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesPaycoPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesPaycoPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesPaycoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesPaycoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesPaycoPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesPaycoPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesPaycoPayments,
};
