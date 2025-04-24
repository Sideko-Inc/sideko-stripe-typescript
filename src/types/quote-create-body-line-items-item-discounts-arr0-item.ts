import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBodyLineItemsItemDiscountsArr0Item
 */
export type QuoteCreateBodyLineItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * QuoteCreateBodyLineItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyLineItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyLineItemsItemDiscountsArr0Item
 */
const SchemaIn$QuoteCreateBodyLineItemsItemDiscountsArr0Item: z.ZodType<
  QuoteCreateBodyLineItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyLineItemsItemDiscountsArr0Item
 */
const SchemaOut$QuoteCreateBodyLineItemsItemDiscountsArr0Item: z.ZodType<
  External$QuoteCreateBodyLineItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyLineItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$QuoteCreateBodyLineItemsItemDiscountsArr0Item = {
  in: SchemaIn$QuoteCreateBodyLineItemsItemDiscountsArr0Item,
  out: SchemaOut$QuoteCreateBodyLineItemsItemDiscountsArr0Item,
};
