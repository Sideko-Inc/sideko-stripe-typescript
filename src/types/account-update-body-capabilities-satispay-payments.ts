import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSatispayPayments
 */
export type AccountUpdateBodyCapabilitiesSatispayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSatispayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSatispayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSatispayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSatispayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSatispayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSatispayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSatispayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSatispayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSatispayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSatispayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSatispayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSatispayPayments,
};
