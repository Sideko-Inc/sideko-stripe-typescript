import {
  External$SecretServiceResourceScope,
  Schemas$SecretServiceResourceScope,
  SecretServiceResourceScope,
} from "./secret-service-resource-scope";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Secret Store is an API that allows Stripe Apps developers to securely persist secrets for use by UI Extensions and app backends.
 *
 * The primary resource in Secret Store is a `secret`. Other apps can't view secrets created by an app. Additionally, secrets are scoped to provide further permission control.
 *
 * All Dashboard users and the app backend share `account` scoped secrets. Use the `account` scope for secrets that don't change per-user, like a third-party API key.
 *
 * A `user` scoped secret is accessible by the app backend and one specific Dashboard user. Use the `user` scope for per-user secrets like per-user OAuth tokens, where different users might have different permissions.
 *
 * Related guide: [Store data between page reloads](https://stripe.com/docs/stripe-apps/store-auth-data-custom-objects)
 */
export type AppsSecret = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * If true, indicates that this secret has been deleted
   */
  deleted?: boolean | undefined;
  /**
   * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "apps.secret";
  /**
   * The plaintext secret value to be stored.
   */
  payload?: string | null | undefined;
  scope: SecretServiceResourceScope;
};

/**
 * @internal
 * AppsSecret without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AppsSecret = {
  created: number;
  deleted?: boolean | undefined;
  expires_at?: number | null | undefined;
  id: string;
  livemode: boolean;
  name: string;
  object: "apps.secret";
  payload?: string | null | undefined;
  scope: External$SecretServiceResourceScope;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AppsSecret
 */
const SchemaIn$AppsSecret: z.ZodType<
  AppsSecret, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    deleted: z.boolean().optional(),
    expires_at: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["apps.secret"]),
    payload: z.string().nullable().optional(),
    scope: Schemas$SecretServiceResourceScope.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      deleted: "deleted",
      expires_at: "expiresAt",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      payload: "payload",
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AppsSecret
 */
const SchemaOut$AppsSecret: z.ZodType<
  External$AppsSecret, // output type of this zod object
  z.ZodTypeDef,
  AppsSecret // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    deleted: z.boolean().optional(),
    expiresAt: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["apps.secret"]),
    payload: z.string().nullable().optional(),
    scope: Schemas$SecretServiceResourceScope.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      deleted: "deleted",
      expiresAt: "expires_at",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      payload: "payload",
      scope: "scope",
    });
  });

export const Schemas$AppsSecret = {
  in: SchemaIn$AppsSecret,
  out: SchemaOut$AppsSecret,
};
