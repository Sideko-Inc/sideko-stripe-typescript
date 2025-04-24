import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem
 */
export type CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem
 */
const SchemaIn$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem: z.ZodType<
  CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem
 */
const SchemaOut$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem: z.ZodType<
  External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
    out: SchemaOut$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
  };
