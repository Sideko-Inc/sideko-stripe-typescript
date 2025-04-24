import {
  AppsSecretDeleteBodyScope,
  External$AppsSecretDeleteBodyScope,
  Schemas$AppsSecretDeleteBodyScope,
} from "./apps-secret-delete-body-scope";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AppsSecretDeleteBody
 */
export type AppsSecretDeleteBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: AppsSecretDeleteBodyScope;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | AppsSecretDeleteBodyScope
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AppsSecretDeleteBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AppsSecretDeleteBody = {
  expand?: string[] | undefined;
  name: string;
  scope: External$AppsSecretDeleteBodyScope;

  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | External$AppsSecretDeleteBodyScope
    | External$AppsSecretDeleteBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AppsSecretDeleteBody
 */
const SchemaIn$AppsSecretDeleteBody: z.ZodType<
  AppsSecretDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string(),
    scope: Schemas$AppsSecretDeleteBodyScope.in,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AppsSecretDeleteBody
 */
const SchemaOut$AppsSecretDeleteBody: z.ZodType<
  External$AppsSecretDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  AppsSecretDeleteBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string(),
    scope: Schemas$AppsSecretDeleteBodyScope.out,
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      scope: "scope",
    });
  });

export const Schemas$AppsSecretDeleteBody = {
  in: SchemaIn$AppsSecretDeleteBody,
  out: SchemaOut$AppsSecretDeleteBody,
};
