import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesKrCardPayments
 */
export type AccountCreateBodyCapabilitiesKrCardPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesKrCardPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesKrCardPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesKrCardPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesKrCardPayments: z.ZodType<
  AccountCreateBodyCapabilitiesKrCardPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesKrCardPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesKrCardPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesKrCardPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesKrCardPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesKrCardPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesKrCardPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesKrCardPayments,
};
