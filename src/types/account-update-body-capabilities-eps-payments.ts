import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesEpsPayments
 */
export type AccountUpdateBodyCapabilitiesEpsPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesEpsPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesEpsPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesEpsPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesEpsPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesEpsPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesEpsPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesEpsPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesEpsPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesEpsPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesEpsPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesEpsPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesEpsPayments,
};
