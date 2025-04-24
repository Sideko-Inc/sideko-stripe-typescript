import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesGiropayPayments
 */
export type AccountUpdateBodyCapabilitiesGiropayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesGiropayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesGiropayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesGiropayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesGiropayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesGiropayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesGiropayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesGiropayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesGiropayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesGiropayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesGiropayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesGiropayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesGiropayPayments,
};
