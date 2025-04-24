import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesTransfers
 */
export type AccountUpdateBodyCapabilitiesTransfers = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesTransfers = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesTransfers
 */
const SchemaIn$AccountUpdateBodyCapabilitiesTransfers: z.ZodType<
  AccountUpdateBodyCapabilitiesTransfers, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesTransfers
 */
const SchemaOut$AccountUpdateBodyCapabilitiesTransfers: z.ZodType<
  External$AccountUpdateBodyCapabilitiesTransfers, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesTransfers // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesTransfers = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesTransfers,
  out: SchemaOut$AccountUpdateBodyCapabilitiesTransfers,
};
