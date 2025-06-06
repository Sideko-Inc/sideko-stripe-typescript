import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem
 */
export type SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem
 */
const SchemaIn$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem: z.ZodType<
  SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotion_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem
 */
const SchemaOut$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem: z.ZodType<
  External$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem // the object to be transformed
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotionCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem = {
  in: SchemaIn$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem,
  out: SchemaOut$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem,
};
