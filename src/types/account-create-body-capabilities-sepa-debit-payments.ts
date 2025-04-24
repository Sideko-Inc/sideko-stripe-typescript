import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSepaDebitPayments
 */
export type AccountCreateBodyCapabilitiesSepaDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSepaDebitPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSepaDebitPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSepaDebitPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSepaDebitPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSepaDebitPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSepaDebitPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSepaDebitPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSepaDebitPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSepaDebitPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSepaDebitPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSepaDebitPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSepaDebitPayments,
};
