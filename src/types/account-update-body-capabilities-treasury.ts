import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesTreasury
 */
export type AccountUpdateBodyCapabilitiesTreasury = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesTreasury = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesTreasury
 */
const SchemaIn$AccountUpdateBodyCapabilitiesTreasury: z.ZodType<
  AccountUpdateBodyCapabilitiesTreasury, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesTreasury
 */
const SchemaOut$AccountUpdateBodyCapabilitiesTreasury: z.ZodType<
  External$AccountUpdateBodyCapabilitiesTreasury, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesTreasury // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesTreasury = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesTreasury,
  out: SchemaOut$AccountUpdateBodyCapabilitiesTreasury,
};
