import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSatispayPayments
 */
export type AccountCreateBodyCapabilitiesSatispayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSatispayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSatispayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSatispayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSatispayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSatispayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSatispayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSatispayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSatispayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSatispayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSatispayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSatispayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSatispayPayments,
};
