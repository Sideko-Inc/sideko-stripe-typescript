import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemUpdateBodyDiscountsArr0Item
 */
export type InvoiceItemUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceItemUpdateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemUpdateBodyDiscountsArr0Item
 */
const SchemaIn$InvoiceItemUpdateBodyDiscountsArr0Item: z.ZodType<
  InvoiceItemUpdateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemUpdateBodyDiscountsArr0Item
 */
const SchemaOut$InvoiceItemUpdateBodyDiscountsArr0Item: z.ZodType<
  External$InvoiceItemUpdateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemUpdateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceItemUpdateBodyDiscountsArr0Item = {
  in: SchemaIn$InvoiceItemUpdateBodyDiscountsArr0Item,
  out: SchemaOut$InvoiceItemUpdateBodyDiscountsArr0Item,
};
