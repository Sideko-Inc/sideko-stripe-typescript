import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyLineItemsItemDiscountsArr0Item
 */
export type QuoteUpdateBodyLineItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyLineItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyLineItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyLineItemsItemDiscountsArr0Item
 */
const SchemaIn$QuoteUpdateBodyLineItemsItemDiscountsArr0Item: z.ZodType<
  QuoteUpdateBodyLineItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyLineItemsItemDiscountsArr0Item
 */
const SchemaOut$QuoteUpdateBodyLineItemsItemDiscountsArr0Item: z.ZodType<
  External$QuoteUpdateBodyLineItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyLineItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$QuoteUpdateBodyLineItemsItemDiscountsArr0Item = {
  in: SchemaIn$QuoteUpdateBodyLineItemsItemDiscountsArr0Item,
  out: SchemaOut$QuoteUpdateBodyLineItemsItemDiscountsArr0Item,
};
