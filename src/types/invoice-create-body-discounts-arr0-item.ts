import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyDiscountsArr0Item
 */
export type InvoiceCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyDiscountsArr0Item
 */
const SchemaIn$InvoiceCreateBodyDiscountsArr0Item: z.ZodType<
  InvoiceCreateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyDiscountsArr0Item
 */
const SchemaOut$InvoiceCreateBodyDiscountsArr0Item: z.ZodType<
  External$InvoiceCreateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoiceCreateBodyDiscountsArr0Item = {
  in: SchemaIn$InvoiceCreateBodyDiscountsArr0Item,
  out: SchemaOut$InvoiceCreateBodyDiscountsArr0Item,
};
