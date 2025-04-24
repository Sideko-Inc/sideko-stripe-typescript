import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PromotionCodeCreateBodyMetadata,
  PromotionCodeCreateBodyMetadata,
  Schemas$PromotionCodeCreateBodyMetadata,
} from "@sideko-inc/stripe/types/promotion-code-create-body-metadata";
import {
  External$PromotionCodeCreateBodyRestrictions,
  PromotionCodeCreateBodyRestrictions,
  Schemas$PromotionCodeCreateBodyRestrictions,
} from "@sideko-inc/stripe/types/promotion-code-create-body-restrictions";
import {
  External$PromotionCodeListCreatedObj0,
  PromotionCodeListCreatedObj0,
  Schemas$PromotionCodeListCreatedObj0,
} from "@sideko-inc/stripe/types/promotion-code-list-created-obj0";
import {
  External$PromotionCodeUpdateBody,
  PromotionCodeUpdateBody,
  Schemas$PromotionCodeUpdateBody,
} from "@sideko-inc/stripe/types/promotion-code-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Filter promotion codes by whether they are active.
   */
  active?: boolean | undefined;
  /**
   * Only return promotion codes that have this case-insensitive code.
   */
  code?: string | undefined;
  /**
   * Only return promotion codes for this coupon.
   */
  coupon?: string | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (PromotionCodeListCreatedObj0 | number) | undefined;
  /**
   * Only return promotion codes that are restricted to this customer.
   */
  customer?: string | undefined;
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
  code?: string | undefined;
  coupon?: string | undefined;
  created?: (External$PromotionCodeListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
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
    code: z.string().optional(),
    coupon: z.string().optional(),
    created: z
      .union([Schemas$PromotionCodeListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      created: "created",
      customer: "customer",
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
    code: z.string().optional(),
    coupon: z.string().optional(),
    created: z
      .union([Schemas$PromotionCodeListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      created: "created",
      customer: "customer",
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
  promotionCode: string;
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
  promotion_code: string;
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
    promotion_code: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      promotion_code: "promotionCode",
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
    promotionCode: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      promotionCode: "promotion_code",
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
   * Whether the promotion code is currently active.
   */
  active?: boolean | undefined;
  /**
   * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), and digits (0-9).
   *
   * If left blank, we will generate one automatically.
   */
  code?: string | undefined;
  /**
   * The coupon for this promotion code.
   */
  coupon: string;
  /**
   * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
   */
  expiresAt?: number | undefined;
  /**
   * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
   */
  maxRedemptions?: number | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PromotionCodeCreateBodyMetadata | undefined;
  /**
   * Settings that restrict the redemption of the promotion code.
   */
  restrictions?: PromotionCodeCreateBodyRestrictions | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  active?: boolean | undefined;
  code?: string | undefined;
  coupon: string;
  customer?: string | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  max_redemptions?: number | undefined;
  metadata?: External$PromotionCodeCreateBodyMetadata | undefined;
  restrictions?: External$PromotionCodeCreateBodyRestrictions | undefined;
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
    active: z.boolean().optional(),
    code: z.string().optional(),
    coupon: z.string(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    max_redemptions: z.number().int().optional(),
    metadata: Schemas$PromotionCodeCreateBodyMetadata.in.optional(),
    restrictions: Schemas$PromotionCodeCreateBodyRestrictions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      customer: "customer",
      expand: "expand",
      expires_at: "expiresAt",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      restrictions: "restrictions",
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
    active: z.boolean().optional(),
    code: z.string().optional(),
    coupon: z.string(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    maxRedemptions: z.number().int().optional(),
    metadata: Schemas$PromotionCodeCreateBodyMetadata.out.optional(),
    restrictions: Schemas$PromotionCodeCreateBodyRestrictions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      customer: "customer",
      expand: "expand",
      expiresAt: "expires_at",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      restrictions: "restrictions",
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
  data?: PromotionCodeUpdateBody | undefined;
  promotionCode: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PromotionCodeUpdateBody | undefined;
  promotion_code: string;
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
    data: Schemas$PromotionCodeUpdateBody.in.optional(),
    promotion_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      promotion_code: "promotionCode",
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
    data: Schemas$PromotionCodeUpdateBody.out.optional(),
    promotionCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
