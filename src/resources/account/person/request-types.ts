import { zodTransform } from "@sideko-inc/stripe/core";
import {
  AccountPersonCreateBody,
  External$AccountPersonCreateBody,
  Schemas$AccountPersonCreateBody,
} from "@sideko-inc/stripe/types/account-person-create-body";
import {
  AccountPersonListRelationship,
  External$AccountPersonListRelationship,
  Schemas$AccountPersonListRelationship,
} from "@sideko-inc/stripe/types/account-person-list-relationship";
import {
  AccountPersonUpdateBody,
  External$AccountPersonUpdateBody,
  Schemas$AccountPersonUpdateBody,
} from "@sideko-inc/stripe/types/account-person-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  account: string;
  person: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  account: string;
  person: string;
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
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      person: "person",
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
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      person: "person",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  account: string;
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
   * Filters on the list of people returned based on the person's relationship to the account's company.
   */
  relationship?: AccountPersonListRelationship | undefined;
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
  account: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  relationship?: External$AccountPersonListRelationship | undefined;
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
    account: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relationship: Schemas$AccountPersonListRelationship.in.optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      relationship: "relationship",
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
    account: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    relationship: Schemas$AccountPersonListRelationship.out.optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      relationship: "relationship",
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
  person: string;
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
  person: string;
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
    person: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      person: "person",
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
    person: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      person: "person",
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
  data?: AccountPersonCreateBody | undefined;
  account: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$AccountPersonCreateBody | undefined;
  account: string;
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
    data: Schemas$AccountPersonCreateBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$AccountPersonCreateBody.out.optional(),
    account: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
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
  data?: AccountPersonUpdateBody | undefined;
  account: string;
  person: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$AccountPersonUpdateBody | undefined;
  account: string;
  person: string;
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
    data: Schemas$AccountPersonUpdateBody.in.optional(),
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
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
    data: Schemas$AccountPersonUpdateBody.out.optional(),
    account: z.string(),
    person: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      account: "account",
      person: "person",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
