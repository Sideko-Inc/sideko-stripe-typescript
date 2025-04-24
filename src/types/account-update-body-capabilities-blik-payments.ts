import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBlikPayments
 */
export type AccountUpdateBodyCapabilitiesBlikPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBlikPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBlikPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBlikPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBlikPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBlikPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBlikPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBlikPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBlikPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBlikPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBlikPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBlikPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBlikPayments,
};
