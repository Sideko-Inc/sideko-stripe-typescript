import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
 */
export type AppsSecretListScope = {
  type: "account" | "user";
  user?: string | undefined;
};

/**
 * @internal
 * AppsSecretListScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AppsSecretListScope = {
  type: "account" | "user";
  user?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AppsSecretListScope
 */
const SchemaIn$AppsSecretListScope: z.ZodType<
  AppsSecretListScope, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AppsSecretListScope
 */
const SchemaOut$AppsSecretListScope: z.ZodType<
  External$AppsSecretListScope, // output type of this zod object
  z.ZodTypeDef,
  AppsSecretListScope // the object to be transformed
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

export const Schemas$AppsSecretListScope = {
  in: SchemaIn$AppsSecretListScope,
  out: SchemaOut$AppsSecretListScope,
};
