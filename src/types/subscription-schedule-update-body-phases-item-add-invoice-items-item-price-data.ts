import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData
 */
export type SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData =
  {
    currency: string;
    product: string;
    taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    unitAmount?: number | undefined;
    unitAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData =
  {
    currency: string;
    product: string;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
    unit_amount?: number | undefined;
    unit_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData,
  };
