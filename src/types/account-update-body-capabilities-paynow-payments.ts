import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesPaynowPayments
 */
export type AccountUpdateBodyCapabilitiesPaynowPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesPaynowPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesPaynowPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesPaynowPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesPaynowPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesPaynowPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesPaynowPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesPaynowPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesPaynowPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesPaynowPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesPaynowPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesPaynowPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesPaynowPayments,
};
