import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
 */
export type AppsSecretCreateBodyScope = {
  type: "account" | "user";
  user?: string | undefined;
};

/**
 * @internal
 * AppsSecretCreateBodyScope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AppsSecretCreateBodyScope = {
  type: "account" | "user";
  user?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AppsSecretCreateBodyScope
 */
const SchemaIn$AppsSecretCreateBodyScope: z.ZodType<
  AppsSecretCreateBodyScope, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AppsSecretCreateBodyScope
 */
const SchemaOut$AppsSecretCreateBodyScope: z.ZodType<
  External$AppsSecretCreateBodyScope, // output type of this zod object
  z.ZodTypeDef,
  AppsSecretCreateBodyScope // the object to be transformed
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

export const Schemas$AppsSecretCreateBodyScope = {
  in: SchemaIn$AppsSecretCreateBodyScope,
  out: SchemaOut$AppsSecretCreateBodyScope,
};
