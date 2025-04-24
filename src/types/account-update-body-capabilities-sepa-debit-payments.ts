import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSepaDebitPayments
 */
export type AccountUpdateBodyCapabilitiesSepaDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSepaDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSepaDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSepaDebitPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSepaDebitPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSepaDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSepaDebitPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSepaDebitPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSepaDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSepaDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSepaDebitPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSepaDebitPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSepaDebitPayments,
};
