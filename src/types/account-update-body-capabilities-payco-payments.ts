import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesPaycoPayments
 */
export type AccountUpdateBodyCapabilitiesPaycoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesPaycoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesPaycoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesPaycoPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesPaycoPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesPaycoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesPaycoPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesPaycoPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesPaycoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesPaycoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesPaycoPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesPaycoPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesPaycoPayments,
};
