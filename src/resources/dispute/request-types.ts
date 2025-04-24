import { zodTransform } from "@sideko-inc/stripe/core";
import {
  DisputeCloseBody,
  External$DisputeCloseBody,
  Schemas$DisputeCloseBody,
} from "@sideko-inc/stripe/types/dispute-close-body";
import {
  DisputeListCreatedObj0,
  External$DisputeListCreatedObj0,
  Schemas$DisputeListCreatedObj0,
} from "@sideko-inc/stripe/types/dispute-list-created-obj0";
import {
  DisputeUpdateBody,
  External$DisputeUpdateBody,
  Schemas$DisputeUpdateBody,
} from "@sideko-inc/stripe/types/dispute-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return disputes associated to the charge specified by this charge ID.
   */
  charge?: string | undefined;
  /**
   * Only return disputes that were created during the given date interval.
   */
  created?: (DisputeListCreatedObj0 | number) | undefined;
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
   * Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
   */
  paymentIntent?: string | undefined;
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
  charge?: string | undefined;
  created?: (External$DisputeListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_intent?: string | undefined;
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
    charge: z.string().optional(),
    created: z
      .union([Schemas$DisputeListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_intent: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_intent: "paymentIntent",
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
    charge: z.string().optional(),
    created: z
      .union([Schemas$DisputeListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentIntent: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentIntent: "payment_intent",
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
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: DisputeUpdateBody | undefined;
  dispute: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$DisputeUpdateBody | undefined;
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
    data: Schemas$DisputeUpdateBody.in.optional(),
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
    data: Schemas$DisputeUpdateBody.out.optional(),
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
 * CloseRequest
 */
export type CloseRequest = {
  data?: DisputeCloseBody | undefined;
  dispute: string;
};

/**
 * @internal
 * CloseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CloseRequest = {
  data?: External$DisputeCloseBody | undefined;
  dispute: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CloseRequest
 */
const SchemaIn$CloseRequest: z.ZodType<
  CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$DisputeCloseBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CloseRequest
 */
const SchemaOut$CloseRequest: z.ZodType<
  External$CloseRequest, // output type of this zod object
  z.ZodTypeDef,
  CloseRequest // the object to be transformed
> = z
  .object({
    data: Schemas$DisputeCloseBody.out.optional(),
    dispute: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      dispute: "dispute",
    });
  });

export const Schemas$CloseRequest = {
  in: SchemaIn$CloseRequest,
  out: SchemaOut$CloseRequest,
};
