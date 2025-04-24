import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesTreasury
 */
export type AccountCreateBodyCapabilitiesTreasury = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesTreasury without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesTreasury = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesTreasury
 */
const SchemaIn$AccountCreateBodyCapabilitiesTreasury: z.ZodType<
  AccountCreateBodyCapabilitiesTreasury, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesTreasury
 */
const SchemaOut$AccountCreateBodyCapabilitiesTreasury: z.ZodType<
  External$AccountCreateBodyCapabilitiesTreasury, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesTreasury // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesTreasury = {
  in: SchemaIn$AccountCreateBodyCapabilitiesTreasury,
  out: SchemaOut$AccountCreateBodyCapabilitiesTreasury,
};
