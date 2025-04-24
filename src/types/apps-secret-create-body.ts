import {
  AppsSecretCreateBodyScope,
  External$AppsSecretCreateBodyScope,
  Schemas$AppsSecretCreateBodyScope,
} from "./apps-secret-create-body-scope";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AppsSecretCreateBody
 */
export type AppsSecretCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
   */
  expiresAt?: number | undefined;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * The plaintext secret value to be stored.
   */
  payload: string;
  /**
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: AppsSecretCreateBodyScope;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | string
    | string
    | AppsSecretCreateBodyScope
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AppsSecretCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AppsSecretCreateBody = {
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  name: string;
  payload: string;
  scope: External$AppsSecretCreateBodyScope;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | string
    | string
    | External$AppsSecretCreateBodyScope
    | External$AppsSecretCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AppsSecretCreateBody
 */
const SchemaIn$AppsSecretCreateBody: z.ZodType<
  AppsSecretCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    name: z.string(),
    payload: z.string(),
    scope: Schemas$AppsSecretCreateBodyScope.in,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
      name: "name",
      payload: "payload",
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AppsSecretCreateBody
 */
const SchemaOut$AppsSecretCreateBody: z.ZodType<
  External$AppsSecretCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AppsSecretCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    name: z.string(),
    payload: z.string(),
    scope: Schemas$AppsSecretCreateBodyScope.out,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      name: "name",
      payload: "payload",
      scope: "scope",
    });
  });

export const Schemas$AppsSecretCreateBody = {
  in: SchemaIn$AppsSecretCreateBody,
  out: SchemaOut$AppsSecretCreateBody,
};
