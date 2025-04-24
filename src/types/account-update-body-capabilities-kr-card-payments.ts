import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesKrCardPayments
 */
export type AccountUpdateBodyCapabilitiesKrCardPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesKrCardPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesKrCardPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesKrCardPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesKrCardPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesKrCardPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesKrCardPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesKrCardPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesKrCardPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesKrCardPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesKrCardPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesKrCardPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesKrCardPayments,
};
