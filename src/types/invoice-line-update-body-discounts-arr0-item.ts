import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateBodyDiscountsArr0Item
 */
export type InvoiceLineUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyDiscountsArr0Item
 */
const SchemaIn$InvoiceLineUpdateBodyDiscountsArr0Item: z.ZodType<
  InvoiceLineUpdateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyDiscountsArr0Item
 */
const SchemaOut$InvoiceLineUpdateBodyDiscountsArr0Item: z.ZodType<
  External$InvoiceLineUpdateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceLineUpdateBodyDiscountsArr0Item = {
  in: SchemaIn$InvoiceLineUpdateBodyDiscountsArr0Item,
  out: SchemaOut$InvoiceLineUpdateBodyDiscountsArr0Item,
};
