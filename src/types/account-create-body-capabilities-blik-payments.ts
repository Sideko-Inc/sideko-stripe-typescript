import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesBlikPayments
 */
export type AccountCreateBodyCapabilitiesBlikPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesBlikPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesBlikPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesBlikPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesBlikPayments: z.ZodType<
  AccountCreateBodyCapabilitiesBlikPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesBlikPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesBlikPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesBlikPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesBlikPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesBlikPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesBlikPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesBlikPayments,
};
