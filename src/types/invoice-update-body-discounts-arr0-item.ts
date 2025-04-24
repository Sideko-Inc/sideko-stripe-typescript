import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyDiscountsArr0Item
 */
export type InvoiceUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyDiscountsArr0Item
 */
const SchemaIn$InvoiceUpdateBodyDiscountsArr0Item: z.ZodType<
  InvoiceUpdateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyDiscountsArr0Item
 */
const SchemaOut$InvoiceUpdateBodyDiscountsArr0Item: z.ZodType<
  External$InvoiceUpdateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyDiscountsArr0Item = {
  in: SchemaIn$InvoiceUpdateBodyDiscountsArr0Item,
  out: SchemaOut$InvoiceUpdateBodyDiscountsArr0Item,
};
