import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesCardPayments
 */
export type AccountCreateBodyCapabilitiesCardPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesCardPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesCardPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesCardPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesCardPayments: z.ZodType<
  AccountCreateBodyCapabilitiesCardPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesCardPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesCardPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesCardPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesCardPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesCardPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesCardPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesCardPayments,
};
