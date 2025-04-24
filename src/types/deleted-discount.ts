import { Coupon, External$Coupon, Schemas$Coupon } from "./coupon";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$PromotionCode,
  PromotionCode,
  Schemas$PromotionCode,
} from "./promotion-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedDiscount = {
  /**
   * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
   */
  checkoutSession?: string | null | undefined;
  /**
   * A coupon contains information about a percent-off or amount-off discount you
   * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
   * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
   */
  coupon: Coupon;
  /**
   * The ID of the customer associated with this discount.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
   */
  id: string;
  /**
   * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
   */
  invoice?: string | null | undefined;
  /**
   * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
   */
  invoiceItem?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "discount";
  /**
   * The promotion code applied to create this discount.
   */
  promotionCode?: (string | PromotionCode) | undefined;
  /**
   * Date that the coupon was applied.
   */
  start: number;
  /**
   * The subscription that this coupon is applied to, if it is applied to a particular subscription.
   */
  subscription?: string | null | undefined;
  /**
   * The subscription item that this coupon is applied to, if it is applied to a particular subscription item.
   */
  subscriptionItem?: string | null | undefined;
};

/**
 * @internal
 * DeletedDiscount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedDiscount = {
  checkout_session?: string | null | undefined;
  coupon: External$Coupon;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  deleted: boolean;
  id: string;
  invoice?: string | null | undefined;
  invoice_item?: string | null | undefined;
  object: "discount";
  promotion_code?: (string | External$PromotionCode) | undefined;
  start: number;
  subscription?: string | null | undefined;
  subscription_item?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedDiscount
 */
const SchemaIn$DeletedDiscount: z.ZodType<
  DeletedDiscount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    checkout_session: z.string().nullable().optional(),
    coupon: Schemas$Coupon.in,
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    deleted: z.boolean(),
    id: z.string(),
    invoice: z.string().nullable().optional(),
    invoice_item: z.string().nullable().optional(),
    object: z.enum(["discount"]),
    promotion_code: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.in)])
      .optional(),
    start: z.number().int(),
    subscription: z.string().nullable().optional(),
    subscription_item: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      checkout_session: "checkoutSession",
      coupon: "coupon",
      customer: "customer",
      deleted: "deleted",
      id: "id",
      invoice: "invoice",
      invoice_item: "invoiceItem",
      object: "object",
      promotion_code: "promotionCode",
      start: "start",
      subscription: "subscription",
      subscription_item: "subscriptionItem",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedDiscount
 */
const SchemaOut$DeletedDiscount: z.ZodType<
  External$DeletedDiscount, // output type of this zod object
  z.ZodTypeDef,
  DeletedDiscount // the object to be transformed
> = z
  .object({
    checkoutSession: z.string().nullable().optional(),
    coupon: Schemas$Coupon.out,
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    deleted: z.boolean(),
    id: z.string(),
    invoice: z.string().nullable().optional(),
    invoiceItem: z.string().nullable().optional(),
    object: z.enum(["discount"]),
    promotionCode: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.out)])
      .optional(),
    start: z.number().int(),
    subscription: z.string().nullable().optional(),
    subscriptionItem: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      checkoutSession: "checkout_session",
      coupon: "coupon",
      customer: "customer",
      deleted: "deleted",
      id: "id",
      invoice: "invoice",
      invoiceItem: "invoice_item",
      object: "object",
      promotionCode: "promotion_code",
      start: "start",
      subscription: "subscription",
      subscriptionItem: "subscription_item",
    });
  });

export const Schemas$DeletedDiscount = {
  in: SchemaIn$DeletedDiscount,
  out: SchemaOut$DeletedDiscount,
};
