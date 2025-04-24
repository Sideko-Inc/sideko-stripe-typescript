import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBodyDiscountsArr0Item
 */
export type QuoteCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * QuoteCreateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyDiscountsArr0Item
 */
const SchemaIn$QuoteCreateBodyDiscountsArr0Item: z.ZodType<
  QuoteCreateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyDiscountsArr0Item
 */
const SchemaOut$QuoteCreateBodyDiscountsArr0Item: z.ZodType<
  External$QuoteCreateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$QuoteCreateBodyDiscountsArr0Item = {
  in: SchemaIn$QuoteCreateBodyDiscountsArr0Item,
  out: SchemaOut$QuoteCreateBodyDiscountsArr0Item,
};
