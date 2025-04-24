import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSofortPayments
 */
export type AccountCreateBodyCapabilitiesSofortPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSofortPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSofortPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSofortPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSofortPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSofortPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSofortPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSofortPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSofortPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSofortPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSofortPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSofortPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSofortPayments,
};
