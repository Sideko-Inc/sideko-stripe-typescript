import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesEpsPayments
 */
export type AccountCreateBodyCapabilitiesEpsPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesEpsPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesEpsPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesEpsPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesEpsPayments: z.ZodType<
  AccountCreateBodyCapabilitiesEpsPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesEpsPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesEpsPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesEpsPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesEpsPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesEpsPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesEpsPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesEpsPayments,
};
