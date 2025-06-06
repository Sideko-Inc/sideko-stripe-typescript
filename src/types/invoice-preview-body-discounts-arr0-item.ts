import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyDiscountsArr0Item
 */
export type InvoicePreviewBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyDiscountsArr0Item
 */
const SchemaIn$InvoicePreviewBodyDiscountsArr0Item: z.ZodType<
  InvoicePreviewBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyDiscountsArr0Item
 */
const SchemaOut$InvoicePreviewBodyDiscountsArr0Item: z.ZodType<
  External$InvoicePreviewBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoicePreviewBodyDiscountsArr0Item = {
  in: SchemaIn$InvoicePreviewBodyDiscountsArr0Item,
  out: SchemaOut$InvoicePreviewBodyDiscountsArr0Item,
};
