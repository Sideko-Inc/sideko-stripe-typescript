import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesSwishPayments
 */
export type AccountUpdateBodyCapabilitiesSwishPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesSwishPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesSwishPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesSwishPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesSwishPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesSwishPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesSwishPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesSwishPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesSwishPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesSwishPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesSwishPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesSwishPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesSwishPayments,
};
