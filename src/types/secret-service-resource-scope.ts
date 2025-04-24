import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SecretServiceResourceScope = {
  /**
   * The secret scope type.
   */
  type: "account" | "user";
  /**
   * The user ID, if type is set to "user"
   */
  user?: string | undefined;
};

/**
 * @internal
 * SecretServiceResourceScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SecretServiceResourceScope = {
  type: "account" | "user";
  user?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SecretServiceResourceScope
 */
const SchemaIn$SecretServiceResourceScope: z.ZodType<
  SecretServiceResourceScope, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["account", "user"]),
    user: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      user: "user",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SecretServiceResourceScope
 */
const SchemaOut$SecretServiceResourceScope: z.ZodType<
  External$SecretServiceResourceScope, // output type of this zod object
  z.ZodTypeDef,
  SecretServiceResourceScope // the object to be transformed
> = z
  .object({
    type: z.enum(["account", "user"]),
    user: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      user: "user",
    });
  });

export const Schemas$SecretServiceResourceScope = {
  in: SchemaIn$SecretServiceResourceScope,
  out: SchemaOut$SecretServiceResourceScope,
};
