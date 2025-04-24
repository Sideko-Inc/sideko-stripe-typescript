import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item
 */
export type InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item,
};
