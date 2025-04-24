import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesPaynowPayments
 */
export type AccountCreateBodyCapabilitiesPaynowPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesPaynowPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesPaynowPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesPaynowPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesPaynowPayments: z.ZodType<
  AccountCreateBodyCapabilitiesPaynowPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesPaynowPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesPaynowPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesPaynowPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesPaynowPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesPaynowPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesPaynowPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesPaynowPayments,
};
