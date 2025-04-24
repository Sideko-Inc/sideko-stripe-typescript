import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBilliePayments
 */
export type AccountUpdateBodyCapabilitiesBilliePayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBilliePayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBilliePayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBilliePayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBilliePayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBilliePayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBilliePayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBilliePayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBilliePayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBilliePayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBilliePayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBilliePayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBilliePayments,
};
