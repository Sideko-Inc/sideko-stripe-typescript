import { Coupon, External$Coupon, Schemas$Coupon } from "./coupon";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$PromotionCodeMetadata,
  PromotionCodeMetadata,
  Schemas$PromotionCodeMetadata,
} from "./promotion-code-metadata";
import {
  External$PromotionCodesResourceRestrictions,
  PromotionCodesResourceRestrictions,
  Schemas$PromotionCodesResourceRestrictions,
} from "./promotion-codes-resource-restrictions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Promotion Code represents a customer-redeemable code for a [coupon](https://stripe.com/docs/api#coupons). It can be used to
 * create multiple codes for a single coupon.
 */
export type PromotionCode = {
  /**
   * Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
   */
  active: boolean;
  /**
   * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), and digits (0-9).
   */
  code: string;
  /**
   * A coupon contains information about a percent-off or amount-off discount you
   * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
   * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
   */
  coupon: Coupon;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The customer that this promotion code can be used by.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * Date at which the promotion code can no longer be redeemed.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Maximum number of times this promotion code can be redeemed.
   */
  maxRedemptions?: number | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PromotionCodeMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "promotion_code";
  restrictions: PromotionCodesResourceRestrictions;
  /**
   * Number of times this promotion code has been used.
   */
  timesRedeemed: number;
};

/**
 * @internal
 * PromotionCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCode = {
  active: boolean;
  code: string;
  coupon: External$Coupon;
  created: number;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  expires_at?: number | null | undefined;
  id: string;
  livemode: boolean;
  max_redemptions?: number | null | undefined;
  metadata?: External$PromotionCodeMetadata | null | undefined;
  object: "promotion_code";
  restrictions: External$PromotionCodesResourceRestrictions;
  times_redeemed: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCode
 */
const SchemaIn$PromotionCode: z.ZodType<
  PromotionCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    code: z.string(),
    coupon: Schemas$Coupon.in,
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    expires_at: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    max_redemptions: z.number().int().nullable().optional(),
    metadata: Schemas$PromotionCodeMetadata.in.nullable().optional(),
    object: z.enum(["promotion_code"]),
    restrictions: Schemas$PromotionCodesResourceRestrictions.in,
    times_redeemed: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      created: "created",
      customer: "customer",
      expires_at: "expiresAt",
      id: "id",
      livemode: "livemode",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      object: "object",
      restrictions: "restrictions",
      times_redeemed: "timesRedeemed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCode
 */
const SchemaOut$PromotionCode: z.ZodType<
  External$PromotionCode, // output type of this zod object
  z.ZodTypeDef,
  PromotionCode // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    code: z.string(),
    coupon: Schemas$Coupon.out,
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    expiresAt: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    maxRedemptions: z.number().int().nullable().optional(),
    metadata: Schemas$PromotionCodeMetadata.out.nullable().optional(),
    object: z.enum(["promotion_code"]),
    restrictions: Schemas$PromotionCodesResourceRestrictions.out,
    timesRedeemed: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      created: "created",
      customer: "customer",
      expiresAt: "expires_at",
      id: "id",
      livemode: "livemode",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      object: "object",
      restrictions: "restrictions",
      timesRedeemed: "times_redeemed",
    });
  });

export const Schemas$PromotionCode = {
  in: SchemaIn$PromotionCode,
  out: SchemaOut$PromotionCode,
};
