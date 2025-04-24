import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesMultibancoPayments
 */
export type AccountCreateBodyCapabilitiesMultibancoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesMultibancoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesMultibancoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesMultibancoPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesMultibancoPayments: z.ZodType<
  AccountCreateBodyCapabilitiesMultibancoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesMultibancoPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesMultibancoPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesMultibancoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesMultibancoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesMultibancoPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesMultibancoPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesMultibancoPayments,
};
