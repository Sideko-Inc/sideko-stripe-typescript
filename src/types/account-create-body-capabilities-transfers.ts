import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesTransfers
 */
export type AccountCreateBodyCapabilitiesTransfers = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesTransfers = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesTransfers
 */
const SchemaIn$AccountCreateBodyCapabilitiesTransfers: z.ZodType<
  AccountCreateBodyCapabilitiesTransfers, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesTransfers
 */
const SchemaOut$AccountCreateBodyCapabilitiesTransfers: z.ZodType<
  External$AccountCreateBodyCapabilitiesTransfers, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesTransfers // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesTransfers = {
  in: SchemaIn$AccountCreateBodyCapabilitiesTransfers,
  out: SchemaOut$AccountCreateBodyCapabilitiesTransfers,
};
