import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBoletoPayments
 */
export type AccountUpdateBodyCapabilitiesBoletoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBoletoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBoletoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBoletoPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBoletoPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBoletoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBoletoPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBoletoPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBoletoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBoletoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBoletoPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBoletoPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBoletoPayments,
};
