import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$ReviewApproveBody,
  ReviewApproveBody,
  Schemas$ReviewApproveBody,
} from "@sideko-inc/stripe/types/review-approve-body";
import {
  External$ReviewListCreatedObj0,
  ReviewListCreatedObj0,
  Schemas$ReviewListCreatedObj0,
} from "@sideko-inc/stripe/types/review-list-created-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return reviews that were created during the given date interval.
   */
  created?: (ReviewListCreatedObj0 | number) | undefined;
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
  created?: (External$ReviewListCreatedObj0 | number) | undefined;
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
      .union([Schemas$ReviewListCreatedObj0.in, z.number().int()])
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
      .union([Schemas$ReviewListCreatedObj0.out, z.number().int()])
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
  review: string;
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
  review: string;
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
    review: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      review: "review",
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
    review: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      review: "review",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * ApproveRequest
 */
export type ApproveRequest = {
  data?: ReviewApproveBody | undefined;
  review: string;
};

/**
 * @internal
 * ApproveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApproveRequest = {
  data?: External$ReviewApproveBody | undefined;
  review: string;
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
    data: Schemas$ReviewApproveBody.in.optional(),
    review: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      review: "review",
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
    data: Schemas$ReviewApproveBody.out.optional(),
    review: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      review: "review",
    });
  });

export const Schemas$ApproveRequest = {
  in: SchemaIn$ApproveRequest,
  out: SchemaOut$ApproveRequest,
};
