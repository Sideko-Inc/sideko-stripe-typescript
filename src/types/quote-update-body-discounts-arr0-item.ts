import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyDiscountsArr0Item
 */
export type QuoteUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyDiscountsArr0Item
 */
const SchemaIn$QuoteUpdateBodyDiscountsArr0Item: z.ZodType<
  QuoteUpdateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyDiscountsArr0Item
 */
const SchemaOut$QuoteUpdateBodyDiscountsArr0Item: z.ZodType<
  External$QuoteUpdateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$QuoteUpdateBodyDiscountsArr0Item = {
  in: SchemaIn$QuoteUpdateBodyDiscountsArr0Item,
  out: SchemaOut$QuoteUpdateBodyDiscountsArr0Item,
};
