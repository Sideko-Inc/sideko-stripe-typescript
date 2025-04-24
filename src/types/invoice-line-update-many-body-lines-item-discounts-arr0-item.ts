import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item
 */
export type InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item,
};
