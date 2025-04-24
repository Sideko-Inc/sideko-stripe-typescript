import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData
 */
export type CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData = {
  currency: string;
  product: string;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData =
  {
    currency: string;
    product: string;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    unit_amount?: number | undefined;
    unit_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData
 */
const SchemaIn$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData: z.ZodType<
  CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      tax_behavior: "taxBehavior",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData
 */
const SchemaOut$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData: z.ZodType<
  External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      taxBehavior: "tax_behavior",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData,
    out: SchemaOut$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData,
  };
