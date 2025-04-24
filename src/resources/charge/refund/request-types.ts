import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeRefundCreateBody,
  External$ChargeRefundCreateBody,
  Schemas$ChargeRefundCreateBody,
} from "@sideko-inc/stripe/types/charge-refund-create-body";
import {
  ChargeRefundCreate1Body,
  External$ChargeRefundCreate1Body,
  Schemas$ChargeRefundCreate1Body,
} from "@sideko-inc/stripe/types/charge-refund-create1-body";
import {
  ChargeRefundUpdateBody,
  External$ChargeRefundUpdateBody,
  Schemas$ChargeRefundUpdateBody,
} from "@sideko-inc/stripe/types/charge-refund-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  charge: string;
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
  charge: string;
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
    charge: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
    charge: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
  charge: string;
  refund: string;
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
  charge: string;
  refund: string;
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
    charge: z.string(),
    refund: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      refund: "refund",
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
    charge: z.string(),
    refund: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
      refund: "refund",
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
  data?: ChargeRefundCreateBody | undefined;
  /**
   * The identifier of the charge to refund.
   */
  charge: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$ChargeRefundCreateBody | undefined;
  charge: string;
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
    data: Schemas$ChargeRefundCreateBody.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
    data: Schemas$ChargeRefundCreateBody.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * Create1Request
 */
export type Create1Request = {
  data?: ChargeRefundCreate1Body | undefined;
  /**
   * The identifier of the charge to refund.
   */
  charge: string;
};

/**
 * @internal
 * Create1Request without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Create1Request = {
  data?: External$ChargeRefundCreate1Body | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Create1Request
 */
const SchemaIn$Create1Request: z.ZodType<
  Create1Request, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ChargeRefundCreate1Body.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Create1Request
 */
const SchemaOut$Create1Request: z.ZodType<
  External$Create1Request, // output type of this zod object
  z.ZodTypeDef,
  Create1Request // the object to be transformed
> = z
  .object({
    data: Schemas$ChargeRefundCreate1Body.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$Create1Request = {
  in: SchemaIn$Create1Request,
  out: SchemaOut$Create1Request,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: ChargeRefundUpdateBody | undefined;
  charge: string;
  refund: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$ChargeRefundUpdateBody | undefined;
  charge: string;
  refund: string;
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
    data: Schemas$ChargeRefundUpdateBody.in.optional(),
    charge: z.string(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      refund: "refund",
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
    data: Schemas$ChargeRefundUpdateBody.out.optional(),
    charge: z.string(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
      refund: "refund",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
