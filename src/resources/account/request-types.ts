import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountCreateBody,
  External$AccountCreateBody,
  Schemas$AccountCreateBody,
} from "@sideko-inc/stripe/types/account-create-body";
import {
  AccountCreateLoginLinkBody,
  External$AccountCreateLoginLinkBody,
  Schemas$AccountCreateLoginLinkBody,
} from "@sideko-inc/stripe/types/account-create-login-link-body";
import {
  AccountListCreatedObj0,
  External$AccountListCreatedObj0,
  Schemas$AccountListCreatedObj0,
} from "@sideko-inc/stripe/types/account-list-created-obj0";
import {
  AccountUpdateBody,
  External$AccountUpdateBody,
  Schemas$AccountUpdateBody,
} from "@sideko-inc/stripe/types/account-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  account: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  account: string;
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
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
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
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * DetailsRequest
 */
export type DetailsRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * DetailsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DetailsRequest = {
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DetailsRequest
 */
const SchemaIn$DetailsRequest: z.ZodType<
  DetailsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DetailsRequest
 */
const SchemaOut$DetailsRequest: z.ZodType<
  External$DetailsRequest, // output type of this zod object
  z.ZodTypeDef,
  DetailsRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

export const Schemas$DetailsRequest = {
  in: SchemaIn$DetailsRequest,
  out: SchemaOut$DetailsRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return connected accounts that were created during the given date interval.
   */
  created?: (AccountListCreatedObj0 | number) | undefined;
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
  created?: (External$AccountListCreatedObj0 | number) | undefined;
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
    created: z
      .union([Schemas$AccountListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
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
    created: z
      .union([Schemas$AccountListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
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
 * GetRequest
 */
export type GetRequest = {
  account: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  account: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    account: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  data?: AccountCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$AccountCreateBody | undefined;
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
    data: Schemas$AccountCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
    data: Schemas$AccountCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: AccountUpdateBody | undefined;
  account: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$AccountUpdateBody | undefined;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$AccountUpdateBody.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$AccountUpdateBody.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CreateLoginLinkRequest
 */
export type CreateLoginLinkRequest = {
  data?: AccountCreateLoginLinkBody | undefined;
  account: string;
};

/**
 * @internal
 * CreateLoginLinkRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateLoginLinkRequest = {
  data?: External$AccountCreateLoginLinkBody | undefined;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateLoginLinkRequest
 */
const SchemaIn$CreateLoginLinkRequest: z.ZodType<
  CreateLoginLinkRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$AccountCreateLoginLinkBody.in.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateLoginLinkRequest
 */
const SchemaOut$CreateLoginLinkRequest: z.ZodType<
  External$CreateLoginLinkRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateLoginLinkRequest // the object to be transformed
> = z
  .object({
    data: Schemas$AccountCreateLoginLinkBody.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
    });
  });

export const Schemas$CreateLoginLinkRequest = {
  in: SchemaIn$CreateLoginLinkRequest,
  out: SchemaOut$CreateLoginLinkRequest,
};

/**
 * RejectRequest
 */
export type RejectRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
   */
  reason: string;
  account: string;
};

/**
 * @internal
 * RejectRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RejectRequest = {
  expand?: string[] | undefined;
  reason: string;
  account: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RejectRequest
 */
const SchemaIn$RejectRequest: z.ZodType<
  RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RejectRequest
 */
const SchemaOut$RejectRequest: z.ZodType<
  External$RejectRequest, // output type of this zod object
  z.ZodTypeDef,
  RejectRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    reason: z.string(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      reason: "reason",
      account: "account",
    });
  });

export const Schemas$RejectRequest = {
  in: SchemaIn$RejectRequest,
  out: SchemaOut$RejectRequest,
};
