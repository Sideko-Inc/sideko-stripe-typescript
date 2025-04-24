import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesCardPayments
 */
export type AccountUpdateBodyCapabilitiesCardPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesCardPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesCardPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesCardPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesCardPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesCardPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesCardPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesCardPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesCardPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesCardPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesCardPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesCardPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesCardPayments,
};
