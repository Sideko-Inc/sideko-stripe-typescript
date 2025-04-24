import {
  CouponAppliesTo,
  External$CouponAppliesTo,
  Schemas$CouponAppliesTo,
} from "./coupon-applies-to";
import {
  CouponCurrencyOptions,
  External$CouponCurrencyOptions,
  Schemas$CouponCurrencyOptions,
} from "./coupon-currency-options";
import {
  CouponMetadata,
  External$CouponMetadata,
  Schemas$CouponMetadata,
} from "./coupon-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A coupon contains information about a percent-off or amount-off discount you
 * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
 * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
 */
export type Coupon = {
  /**
   * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
   */
  amountOff?: number | null | undefined;
  appliesTo?: CouponAppliesTo | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
   */
  currency?: string | null | undefined;
  /**
   * Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CouponCurrencyOptions | undefined;
  /**
   * One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount.
   */
  duration: "forever" | "once" | "repeating";
  /**
   * If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
   */
  durationInMonths?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
   */
  maxRedemptions?: number | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CouponMetadata | null | undefined;
  /**
   * Name of the coupon displayed to customers on for instance invoices or receipts.
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "coupon";
  /**
   * Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a $ (or local equivalent)100 invoice $ (or local equivalent)50 instead.
   */
  percentOff?: number | null | undefined;
  /**
   * Date after which the coupon can no longer be redeemed.
   */
  redeemBy?: number | null | undefined;
  /**
   * Number of times this coupon has been applied to a customer.
   */
  timesRedeemed: number;
  /**
   * Taking account of the above properties, whether this coupon can still be applied to a customer.
   */
  valid: boolean;
};

/**
 * @internal
 * Coupon without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Coupon = {
  amount_off?: number | null | undefined;
  applies_to?: External$CouponAppliesTo | undefined;
  created: number;
  currency?: string | null | undefined;
  currency_options?: External$CouponCurrencyOptions | undefined;
  duration: "forever" | "once" | "repeating";
  duration_in_months?: number | null | undefined;
  id: string;
  livemode: boolean;
  max_redemptions?: number | null | undefined;
  metadata?: External$CouponMetadata | null | undefined;
  name?: string | null | undefined;
  object: "coupon";
  percent_off?: number | null | undefined;
  redeem_by?: number | null | undefined;
  times_redeemed: number;
  valid: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Coupon
 */
const SchemaIn$Coupon: z.ZodType<
  Coupon, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_off: z.number().int().nullable().optional(),
    applies_to: Schemas$CouponAppliesTo.in.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    currency_options: Schemas$CouponCurrencyOptions.in.optional(),
    duration: z.enum(["forever", "once", "repeating"]),
    duration_in_months: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    max_redemptions: z.number().int().nullable().optional(),
    metadata: Schemas$CouponMetadata.in.nullable().optional(),
    name: z.string().nullable().optional(),
    object: z.enum(["coupon"]),
    percent_off: z.number().nullable().optional(),
    redeem_by: z.number().int().nullable().optional(),
    times_redeemed: z.number().int(),
    valid: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_off: "amountOff",
      applies_to: "appliesTo",
      created: "created",
      currency: "currency",
      currency_options: "currencyOptions",
      duration: "duration",
      duration_in_months: "durationInMonths",
      id: "id",
      livemode: "livemode",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      name: "name",
      object: "object",
      percent_off: "percentOff",
      redeem_by: "redeemBy",
      times_redeemed: "timesRedeemed",
      valid: "valid",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Coupon
 */
const SchemaOut$Coupon: z.ZodType<
  External$Coupon, // output type of this zod object
  z.ZodTypeDef,
  Coupon // the object to be transformed
> = z
  .object({
    amountOff: z.number().int().nullable().optional(),
    appliesTo: Schemas$CouponAppliesTo.out.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    currencyOptions: Schemas$CouponCurrencyOptions.out.optional(),
    duration: z.enum(["forever", "once", "repeating"]),
    durationInMonths: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    maxRedemptions: z.number().int().nullable().optional(),
    metadata: Schemas$CouponMetadata.out.nullable().optional(),
    name: z.string().nullable().optional(),
    object: z.enum(["coupon"]),
    percentOff: z.number().nullable().optional(),
    redeemBy: z.number().int().nullable().optional(),
    timesRedeemed: z.number().int(),
    valid: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
      appliesTo: "applies_to",
      created: "created",
      currency: "currency",
      currencyOptions: "currency_options",
      duration: "duration",
      durationInMonths: "duration_in_months",
      id: "id",
      livemode: "livemode",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      name: "name",
      object: "object",
      percentOff: "percent_off",
      redeemBy: "redeem_by",
      timesRedeemed: "times_redeemed",
      valid: "valid",
    });
  });

export const Schemas$Coupon = {
  in: SchemaIn$Coupon,
  out: SchemaOut$Coupon,
};
