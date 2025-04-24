import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesBilliePayments
 */
export type AccountCreateBodyCapabilitiesBilliePayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesBilliePayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesBilliePayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesBilliePayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesBilliePayments: z.ZodType<
  AccountCreateBodyCapabilitiesBilliePayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesBilliePayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesBilliePayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesBilliePayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesBilliePayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesBilliePayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesBilliePayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesBilliePayments,
};
