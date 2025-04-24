import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ClimateOrderCancelBody,
  External$ClimateOrderCancelBody,
  Schemas$ClimateOrderCancelBody,
} from "@sideko-inc/stripe/types/climate-order-cancel-body";
import {
  ClimateOrderCreateBodyBeneficiary,
  External$ClimateOrderCreateBodyBeneficiary,
  Schemas$ClimateOrderCreateBodyBeneficiary,
} from "@sideko-inc/stripe/types/climate-order-create-body-beneficiary";
import {
  ClimateOrderCreateBodyMetadata,
  External$ClimateOrderCreateBodyMetadata,
  Schemas$ClimateOrderCreateBodyMetadata,
} from "@sideko-inc/stripe/types/climate-order-create-body-metadata";
import {
  ClimateOrderUpdateBody,
  External$ClimateOrderUpdateBody,
  Schemas$ClimateOrderUpdateBody,
} from "@sideko-inc/stripe/types/climate-order-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
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
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
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
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
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
  /**
   * Unique identifier of the order.
   */
  order: string;
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
  order: string;
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
    order: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      order: "order",
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
    order: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      order: "order",
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
  /**
   * Requested amount of carbon removal units. Either this or `metric_tons` must be specified.
   */
  amount?: number | undefined;
  /**
   * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
   */
  beneficiary?: ClimateOrderCreateBodyBeneficiary | undefined;
  /**
   * Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.
   */
  currency?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ClimateOrderCreateBodyMetadata | undefined;
  /**
   * Requested number of tons for the order. Either this or `amount` must be specified.
   */
  metricTons?: string | undefined;
  /**
   * Unique identifier of the Climate product.
   */
  product: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount?: number | undefined;
  beneficiary?: External$ClimateOrderCreateBodyBeneficiary | undefined;
  currency?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$ClimateOrderCreateBodyMetadata | undefined;
  metric_tons?: string | undefined;
  product: string;
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
    amount: z.number().int().optional(),
    beneficiary: Schemas$ClimateOrderCreateBodyBeneficiary.in.optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderCreateBodyMetadata.in.optional(),
    metric_tons: z.string().optional(),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      beneficiary: "beneficiary",
      currency: "currency",
      expand: "expand",
      metadata: "metadata",
      metric_tons: "metricTons",
      product: "product",
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
    amount: z.number().int().optional(),
    beneficiary: Schemas$ClimateOrderCreateBodyBeneficiary.out.optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderCreateBodyMetadata.out.optional(),
    metricTons: z.string().optional(),
    product: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      beneficiary: "beneficiary",
      currency: "currency",
      expand: "expand",
      metadata: "metadata",
      metricTons: "metric_tons",
      product: "product",
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
  data?: ClimateOrderUpdateBody | undefined;
  /**
   * Unique identifier of the order.
   */
  order: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$ClimateOrderUpdateBody | undefined;
  order: string;
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
    data: Schemas$ClimateOrderUpdateBody.in.optional(),
    order: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      order: "order",
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
    data: Schemas$ClimateOrderUpdateBody.out.optional(),
    order: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      order: "order",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: ClimateOrderCancelBody | undefined;
  /**
   * Unique identifier of the order.
   */
  order: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$ClimateOrderCancelBody | undefined;
  order: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ClimateOrderCancelBody.in.optional(),
    order: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      order: "order",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$ClimateOrderCancelBody.out.optional(),
    order: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      order: "order",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};
