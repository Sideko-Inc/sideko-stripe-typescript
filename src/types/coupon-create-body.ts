import {
  CouponCreateBodyAppliesTo,
  External$CouponCreateBodyAppliesTo,
  Schemas$CouponCreateBodyAppliesTo,
} from "./coupon-create-body-applies-to";
import {
  CouponCreateBodyCurrencyOptions,
  External$CouponCreateBodyCurrencyOptions,
  Schemas$CouponCreateBodyCurrencyOptions,
} from "./coupon-create-body-currency-options";
import {
  CouponCreateBodyMetadataObj0,
  External$CouponCreateBodyMetadataObj0,
  Schemas$CouponCreateBodyMetadataObj0,
} from "./coupon-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponCreateBody
 */
export type CouponCreateBody = {
  /**
   * A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
   */
  amountOff?: number | undefined;
  /**
   * A hash containing directions for what this Coupon will apply discounts to.
   */
  appliesTo?: CouponCreateBodyAppliesTo | undefined;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
   */
  currency?: string | undefined;
  /**
   * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: CouponCreateBodyCurrencyOptions | undefined;
  /**
   * Specifies how long the discount will be in effect if used on a subscription. Defaults to `once`.
   */
  duration?: ("forever" | "once" | "repeating") | undefined;
  /**
   * Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
   */
  durationInMonths?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
   */
  id?: string | undefined;
  /**
   * A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
   */
  maxRedemptions?: number | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CouponCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string | undefined;
  /**
   * A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
   */
  percentOff?: number | undefined;
  /**
   * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.
   */
  redeemBy?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (CouponCreateBodyAppliesTo | undefined)
    | (string | undefined)
    | (CouponCreateBodyCurrencyOptions | undefined)
    | (("forever" | "once" | "repeating") | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (number | undefined)
    | ((CouponCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CouponCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCreateBody = {
  amount_off?: number | undefined;
  applies_to?: External$CouponCreateBodyAppliesTo | undefined;
  currency?: string | undefined;
  currency_options?: External$CouponCreateBodyCurrencyOptions | undefined;
  duration?: ("forever" | "once" | "repeating") | undefined;
  duration_in_months?: number | undefined;
  expand?: string[] | undefined;
  id?: string | undefined;
  max_redemptions?: number | undefined;
  metadata?: (External$CouponCreateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  percent_off?: number | undefined;
  redeem_by?: number | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (External$CouponCreateBodyAppliesTo | undefined)
    | (string | undefined)
    | (External$CouponCreateBodyCurrencyOptions | undefined)
    | (("forever" | "once" | "repeating") | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (number | undefined)
    | ((External$CouponCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (number | undefined)
    | External$CouponCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCreateBody
 */
const SchemaIn$CouponCreateBody: z.ZodType<
  CouponCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_off: z.number().int().optional(),
    applies_to: Schemas$CouponCreateBodyAppliesTo.in.optional(),
    currency: z.string().optional(),
    currency_options: Schemas$CouponCreateBodyCurrencyOptions.in.optional(),
    duration: z.enum(["forever", "once", "repeating"]).optional(),
    duration_in_months: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    max_redemptions: z.number().int().optional(),
    metadata: z
      .union([Schemas$CouponCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    percent_off: z.number().optional(),
    redeem_by: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount_off: "amountOff",
      applies_to: "appliesTo",
      currency: "currency",
      currency_options: "currencyOptions",
      duration: "duration",
      duration_in_months: "durationInMonths",
      expand: "expand",
      id: "id",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      name: "name",
      percent_off: "percentOff",
      redeem_by: "redeemBy",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCreateBody
 */
const SchemaOut$CouponCreateBody: z.ZodType<
  External$CouponCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CouponCreateBody // the object to be transformed
> = z
  .object({
    amountOff: z.number().int().optional(),
    appliesTo: Schemas$CouponCreateBodyAppliesTo.out.optional(),
    currency: z.string().optional(),
    currencyOptions: Schemas$CouponCreateBodyCurrencyOptions.out.optional(),
    duration: z.enum(["forever", "once", "repeating"]).optional(),
    durationInMonths: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    maxRedemptions: z.number().int().optional(),
    metadata: z
      .union([Schemas$CouponCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    percentOff: z.number().optional(),
    redeemBy: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amountOff: "amount_off",
      appliesTo: "applies_to",
      currency: "currency",
      currencyOptions: "currency_options",
      duration: "duration",
      durationInMonths: "duration_in_months",
      expand: "expand",
      id: "id",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      name: "name",
      percentOff: "percent_off",
      redeemBy: "redeem_by",
    });
  });

export const Schemas$CouponCreateBody = {
  in: SchemaIn$CouponCreateBody,
  out: SchemaOut$CouponCreateBody,
};
