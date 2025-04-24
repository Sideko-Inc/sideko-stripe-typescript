import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesFpxPayments
 */
export type AccountUpdateBodyCapabilitiesFpxPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesFpxPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesFpxPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesFpxPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesFpxPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesFpxPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesFpxPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesFpxPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesFpxPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesFpxPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesFpxPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesFpxPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesFpxPayments,
};
