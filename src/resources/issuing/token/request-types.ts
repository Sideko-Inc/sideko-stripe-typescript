import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingTokenListCreatedObj0,
  IssuingTokenListCreatedObj0,
  Schemas$IssuingTokenListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-token-list-created-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The Issuing card identifier to list tokens for.
   */
  card: string;
  /**
   * Only return Issuing tokens that were created during the given date interval.
   */
  created?: (IssuingTokenListCreatedObj0 | number) | undefined;
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
  /**
   * Select Issuing tokens with the given status.
   */
  status?: ("active" | "deleted" | "requested" | "suspended") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  card: string;
  created?: (External$IssuingTokenListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "deleted" | "requested" | "suspended") | undefined;
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
    card: z.string(),
    created: z
      .union([Schemas$IssuingTokenListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "deleted", "requested", "suspended"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
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
    card: z.string(),
    created: z
      .union([Schemas$IssuingTokenListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "deleted", "requested", "suspended"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
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
  token: string;
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
  token: string;
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
    token: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      token: "token",
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
    token: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      token: "token",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Specifies which status the token should be updated to.
   */
  status: "active" | "deleted" | "suspended";
  token: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  expand?: string[] | undefined;
  status: "active" | "deleted" | "suspended";
  token: string;
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
    expand: z.array(z.string()).optional(),
    status: z.enum(["active", "deleted", "suspended"]),
    token: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      status: "status",
      token: "token",
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
    expand: z.array(z.string()).optional(),
    status: z.enum(["active", "deleted", "suspended"]),
    token: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      status: "status",
      token: "token",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
