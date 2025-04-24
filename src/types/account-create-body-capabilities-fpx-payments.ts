import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesFpxPayments
 */
export type AccountCreateBodyCapabilitiesFpxPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesFpxPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesFpxPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesFpxPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesFpxPayments: z.ZodType<
  AccountCreateBodyCapabilitiesFpxPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesFpxPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesFpxPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesFpxPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesFpxPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesFpxPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesFpxPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesFpxPayments,
};
