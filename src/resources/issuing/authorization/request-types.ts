import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingAuthorizationApproveBody,
  IssuingAuthorizationApproveBody,
  Schemas$IssuingAuthorizationApproveBody,
} from "@sideko-inc/stripe/types/issuing-authorization-approve-body";
import {
  External$IssuingAuthorizationDeclineBody,
  IssuingAuthorizationDeclineBody,
  Schemas$IssuingAuthorizationDeclineBody,
} from "@sideko-inc/stripe/types/issuing-authorization-decline-body";
import {
  External$IssuingAuthorizationListCreatedObj0,
  IssuingAuthorizationListCreatedObj0,
  Schemas$IssuingAuthorizationListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-authorization-list-created-obj0";
import {
  External$IssuingAuthorizationUpdateBody,
  IssuingAuthorizationUpdateBody,
  Schemas$IssuingAuthorizationUpdateBody,
} from "@sideko-inc/stripe/types/issuing-authorization-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return authorizations that belong to the given card.
   */
  card?: string | undefined;
  /**
   * Only return authorizations that belong to the given cardholder.
   */
  cardholder?: string | undefined;
  /**
   * Only return authorizations that were created during the given date interval.
   */
  created?: (IssuingAuthorizationListCreatedObj0 | number) | undefined;
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
   * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
   */
  status?: ("closed" | "expired" | "pending" | "reversed") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  card?: string | undefined;
  cardholder?: string | undefined;
  created?: (External$IssuingAuthorizationListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("closed" | "expired" | "pending" | "reversed") | undefined;
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
    card: z.string().optional(),
    cardholder: z.string().optional(),
    created: z
      .union([Schemas$IssuingAuthorizationListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["closed", "expired", "pending", "reversed"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      cardholder: "cardholder",
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
    card: z.string().optional(),
    cardholder: z.string().optional(),
    created: z
      .union([
        Schemas$IssuingAuthorizationListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["closed", "expired", "pending", "reversed"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      cardholder: "cardholder",
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
  authorization: string;
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
  authorization: string;
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
    authorization: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorization: "authorization",
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
    authorization: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      authorization: "authorization",
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
  data?: IssuingAuthorizationUpdateBody | undefined;
  authorization: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingAuthorizationUpdateBody | undefined;
  authorization: string;
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
    data: Schemas$IssuingAuthorizationUpdateBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
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
    data: Schemas$IssuingAuthorizationUpdateBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * ApproveRequest
 */
export type ApproveRequest = {
  data?: IssuingAuthorizationApproveBody | undefined;
  authorization: string;
};

/**
 * @internal
 * ApproveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApproveRequest = {
  data?: External$IssuingAuthorizationApproveBody | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApproveRequest
 */
const SchemaIn$ApproveRequest: z.ZodType<
  ApproveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IssuingAuthorizationApproveBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApproveRequest
 */
const SchemaOut$ApproveRequest: z.ZodType<
  External$ApproveRequest, // output type of this zod object
  z.ZodTypeDef,
  ApproveRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IssuingAuthorizationApproveBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$ApproveRequest = {
  in: SchemaIn$ApproveRequest,
  out: SchemaOut$ApproveRequest,
};

/**
 * DeclineRequest
 */
export type DeclineRequest = {
  data?: IssuingAuthorizationDeclineBody | undefined;
  authorization: string;
};

/**
 * @internal
 * DeclineRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeclineRequest = {
  data?: External$IssuingAuthorizationDeclineBody | undefined;
  authorization: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeclineRequest
 */
const SchemaIn$DeclineRequest: z.ZodType<
  DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IssuingAuthorizationDeclineBody.in.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeclineRequest
 */
const SchemaOut$DeclineRequest: z.ZodType<
  External$DeclineRequest, // output type of this zod object
  z.ZodTypeDef,
  DeclineRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IssuingAuthorizationDeclineBody.out.optional(),
    authorization: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      authorization: "authorization",
    });
  });

export const Schemas$DeclineRequest = {
  in: SchemaIn$DeclineRequest,
  out: SchemaOut$DeclineRequest,
};
