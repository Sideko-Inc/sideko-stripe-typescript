import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$ShippingRateCreateBodyDeliveryEstimate,
  Schemas$ShippingRateCreateBodyDeliveryEstimate,
  ShippingRateCreateBodyDeliveryEstimate,
} from "@sideko-inc/stripe/types/shipping-rate-create-body-delivery-estimate";
import {
  External$ShippingRateCreateBodyFixedAmount,
  Schemas$ShippingRateCreateBodyFixedAmount,
  ShippingRateCreateBodyFixedAmount,
} from "@sideko-inc/stripe/types/shipping-rate-create-body-fixed-amount";
import {
  External$ShippingRateCreateBodyMetadata,
  Schemas$ShippingRateCreateBodyMetadata,
  ShippingRateCreateBodyMetadata,
} from "@sideko-inc/stripe/types/shipping-rate-create-body-metadata";
import {
  External$ShippingRateListCreatedObj0,
  Schemas$ShippingRateListCreatedObj0,
  ShippingRateListCreatedObj0,
} from "@sideko-inc/stripe/types/shipping-rate-list-created-obj0";
import {
  External$ShippingRateUpdateBody,
  Schemas$ShippingRateUpdateBody,
  ShippingRateUpdateBody,
} from "@sideko-inc/stripe/types/shipping-rate-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return shipping rates that are active or inactive.
   */
  active?: boolean | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (ShippingRateListCreatedObj0 | number) | undefined;
  /**
   * Only return shipping rates for the given currency.
   */
  currency?: string | undefined;
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
  active?: boolean | undefined;
  created?: (External$ShippingRateListCreatedObj0 | number) | undefined;
  currency?: string | undefined;
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$ShippingRateListCreatedObj0.in, z.number().int()])
      .optional(),
    currency: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      currency: "currency",
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$ShippingRateListCreatedObj0.out, z.number().int()])
      .optional(),
    currency: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      currency: "currency",
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
  shippingRateToken: string;
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
  shipping_rate_token: string;
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
    shipping_rate_token: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate_token: "shippingRateToken",
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
    shippingRateToken: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRateToken: "shipping_rate_token",
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
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  deliveryEstimate?: ShippingRateCreateBodyDeliveryEstimate | undefined;
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixedAmount?: ShippingRateCreateBodyFixedAmount | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ShippingRateCreateBodyMetadata | undefined;
  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  taxCode?: string | undefined;
  /**
   * The type of calculation to use on the shipping rate.
   */
  type?: "fixed_amount" | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  delivery_estimate?:
    | External$ShippingRateCreateBodyDeliveryEstimate
    | undefined;
  display_name: string;
  expand?: string[] | undefined;
  fixed_amount?: External$ShippingRateCreateBodyFixedAmount | undefined;
  metadata?: External$ShippingRateCreateBodyMetadata | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: string | undefined;
  type?: "fixed_amount" | undefined;
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
    delivery_estimate:
      Schemas$ShippingRateCreateBodyDeliveryEstimate.in.optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    fixed_amount: Schemas$ShippingRateCreateBodyFixedAmount.in.optional(),
    metadata: Schemas$ShippingRateCreateBodyMetadata.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delivery_estimate: "deliveryEstimate",
      display_name: "displayName",
      expand: "expand",
      fixed_amount: "fixedAmount",
      metadata: "metadata",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      type: "type",
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
    deliveryEstimate:
      Schemas$ShippingRateCreateBodyDeliveryEstimate.out.optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    fixedAmount: Schemas$ShippingRateCreateBodyFixedAmount.out.optional(),
    metadata: Schemas$ShippingRateCreateBodyMetadata.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.string().optional(),
    type: z.enum(["fixed_amount"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deliveryEstimate: "delivery_estimate",
      displayName: "display_name",
      expand: "expand",
      fixedAmount: "fixed_amount",
      metadata: "metadata",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      type: "type",
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
  data?: ShippingRateUpdateBody | undefined;
  shippingRateToken: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$ShippingRateUpdateBody | undefined;
  shipping_rate_token: string;
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
    data: Schemas$ShippingRateUpdateBody.in.optional(),
    shipping_rate_token: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      shipping_rate_token: "shippingRateToken",
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
    data: Schemas$ShippingRateUpdateBody.out.optional(),
    shippingRateToken: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      shippingRateToken: "shipping_rate_token",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
