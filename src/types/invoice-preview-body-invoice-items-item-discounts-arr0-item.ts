import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item
 */
export type InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item
 */
const SchemaIn$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item: z.ZodType<
  InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item
 */
const SchemaOut$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item: z.ZodType<
  External$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item = {
  in: SchemaIn$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item,
  out: SchemaOut$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item,
};
