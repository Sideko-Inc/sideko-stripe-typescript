import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSofortPayments
 */
export type AccountUpdateBodyCapabilitiesSofortPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSofortPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSofortPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSofortPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSofortPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSofortPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSofortPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSofortPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSofortPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSofortPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSofortPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSofortPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSofortPayments,
};
