import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesSwishPayments
 */
export type AccountCreateBodyCapabilitiesSwishPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesSwishPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesSwishPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesSwishPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesSwishPayments: z.ZodType<
  AccountCreateBodyCapabilitiesSwishPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesSwishPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesSwishPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesSwishPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesSwishPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesSwishPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesSwishPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesSwishPayments,
};
