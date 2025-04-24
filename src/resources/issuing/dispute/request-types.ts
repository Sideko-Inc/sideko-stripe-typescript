import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingDisputeCreateBody,
  IssuingDisputeCreateBody,
  Schemas$IssuingDisputeCreateBody,
} from "@sideko-inc/stripe/types/issuing-dispute-create-body";
import {
  External$IssuingDisputeListCreatedObj0,
  IssuingDisputeListCreatedObj0,
  Schemas$IssuingDisputeListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-dispute-list-created-obj0";
import {
  External$IssuingDisputeSubmitBody,
  IssuingDisputeSubmitBody,
  Schemas$IssuingDisputeSubmitBody,
} from "@sideko-inc/stripe/types/issuing-dispute-submit-body";
import {
  External$IssuingDisputeUpdateBody,
  IssuingDisputeUpdateBody,
  Schemas$IssuingDisputeUpdateBody,
} from "@sideko-inc/stripe/types/issuing-dispute-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return Issuing disputes that were created during the given date interval.
   */
  created?: (IssuingDisputeListCreatedObj0 | number) | undefined;
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
   * Select Issuing disputes with the given status.
   */
  status?:
    | ("expired" | "lost" | "submitted" | "unsubmitted" | "won")
    | undefined;
  /**
   * Select the Issuing dispute for the given transaction.
   */
  transaction?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$IssuingDisputeListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?:
    | ("expired" | "lost" | "submitted" | "unsubmitted" | "won")
    | undefined;
  transaction?: string | undefined;
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
      .union([Schemas$IssuingDisputeListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["expired", "lost", "submitted", "unsubmitted", "won"])
      .optional(),
    transaction: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
      transaction: "transaction",
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
      .union([Schemas$IssuingDisputeListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["expired", "lost", "submitted", "unsubmitted", "won"])
      .optional(),
    transaction: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
      transaction: "transaction",
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
  dispute: string;
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
  dispute: string;
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
    dispute: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dispute: "dispute",
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
    dispute: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dispute: "dispute",
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
  data?: IssuingDisputeCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$IssuingDisputeCreateBody | undefined;
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
    data: Schemas$IssuingDisputeCreateBody.in.optional(),
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
    data: Schemas$IssuingDisputeCreateBody.out.optional(),
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
  data?: IssuingDisputeUpdateBody | undefined;
  dispute: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingDisputeUpdateBody | undefined;
  dispute: string;
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
    data: Schemas$IssuingDisputeUpdateBody.in.optional(),
    dispute: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      dispute: "dispute",
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
    data: Schemas$IssuingDisputeUpdateBody.out.optional(),
    dispute: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      dispute: "dispute",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * SubmitRequest
 */
export type SubmitRequest = {
  data?: IssuingDisputeSubmitBody | undefined;
  dispute: string;
};

/**
 * @internal
 * SubmitRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubmitRequest = {
  data?: External$IssuingDisputeSubmitBody | undefined;
  dispute: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubmitRequest
 */
const SchemaIn$SubmitRequest: z.ZodType<
  SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IssuingDisputeSubmitBody.in.optional(),
    dispute: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      dispute: "dispute",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubmitRequest
 */
const SchemaOut$SubmitRequest: z.ZodType<
  External$SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  SubmitRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IssuingDisputeSubmitBody.out.optional(),
    dispute: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      dispute: "dispute",
    });
  });

export const Schemas$SubmitRequest = {
  in: SchemaIn$SubmitRequest,
  out: SchemaOut$SubmitRequest,
};
