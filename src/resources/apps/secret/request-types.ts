import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AppsSecretCreateBodyScope,
  External$AppsSecretCreateBodyScope,
  Schemas$AppsSecretCreateBodyScope,
} from "@sideko-inc/stripe/types/apps-secret-create-body-scope";
import {
  AppsSecretDeleteBodyScope,
  External$AppsSecretDeleteBodyScope,
  Schemas$AppsSecretDeleteBodyScope,
} from "@sideko-inc/stripe/types/apps-secret-delete-body-scope";
import {
  AppsSecretFindScope,
  External$AppsSecretFindScope,
  Schemas$AppsSecretFindScope,
} from "@sideko-inc/stripe/types/apps-secret-find-scope";
import {
  AppsSecretListScope,
  External$AppsSecretListScope,
  Schemas$AppsSecretListScope,
} from "@sideko-inc/stripe/types/apps-secret-list-scope";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: AppsSecretListScope;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  scope: External$AppsSecretListScope;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    scope: Schemas$AppsSecretListScope.in,
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    scope: Schemas$AppsSecretListScope.out,
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      scope: "scope",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * FindRequest
 */
export type FindRequest = {
  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;
  /**
   * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
   */
  scope: AppsSecretFindScope;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * FindRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FindRequest = {
  name: string;
  scope: External$AppsSecretFindScope;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FindRequest
 */
const SchemaIn$FindRequest: z.ZodType<
  FindRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    scope: Schemas$AppsSecretFindScope.in,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      scope: "scope",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FindRequest
 */
const SchemaOut$FindRequest: z.ZodType<
  External$FindRequest, // output type of this zod object
  z.ZodTypeDef,
  FindRequest // the object to be transformed
> = z
  .object({
    name: z.string(),
    scope: Schemas$AppsSecretFindScope.out,
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      scope: "scope",
      expand: "expand",
    });
  });

export const Schemas$FindRequest = {
  in: SchemaIn$FindRequest,
  out: SchemaOut$FindRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  name: string;
  payload: string;
  scope: External$AppsSecretCreateBodyScope;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    name: z.string(),
    payload: z.string(),
    scope: Schemas$AppsSecretCreateBodyScope.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      name: "name",
      payload: "payload",
      scope: "scope",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * DeleteRequest
 */
export type DeleteRequest = {
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
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  expand?: string[] | undefined;
  name: string;
  scope: External$AppsSecretDeleteBodyScope;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string(),
    scope: Schemas$AppsSecretDeleteBodyScope.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      scope: "scope",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    name: z.string(),
    scope: Schemas$AppsSecretDeleteBodyScope.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      name: "name",
      scope: "scope",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};
