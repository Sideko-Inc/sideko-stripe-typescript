import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item,
  };
