import {
  CreditNotePreviewLinesItemTaxAmountsArr0Item,
  External$CreditNotePreviewLinesItemTaxAmountsArr0Item,
  Schemas$CreditNotePreviewLinesItemTaxAmountsArr0Item,
} from "./credit-note-preview-lines-item-tax-amounts-arr0-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreviewLinesItem
 */
export type CreditNotePreviewLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  invoiceLineItem?: string | undefined;
  quantity?: number | undefined;
  taxAmounts?:
    | (CreditNotePreviewLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  taxRates?: (string[] | string) | undefined;
  type: "custom_line_item" | "invoice_line_item";
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * CreditNotePreviewLinesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  invoice_line_item?: string | undefined;
  quantity?: number | undefined;
  tax_amounts?:
    | (External$CreditNotePreviewLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  tax_rates?: (string[] | string) | undefined;
  type: "custom_line_item" | "invoice_line_item";
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewLinesItem
 */
const SchemaIn$CreditNotePreviewLinesItem: z.ZodType<
  CreditNotePreviewLinesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    invoice_line_item: z.string().optional(),
    quantity: z.number().int().optional(),
    tax_amounts: z
      .union([
        z.array(Schemas$CreditNotePreviewLinesItemTaxAmountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    type: z.enum(["custom_line_item", "invoice_line_item"]),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      invoice_line_item: "invoiceLineItem",
      quantity: "quantity",
      tax_amounts: "taxAmounts",
      tax_rates: "taxRates",
      type: "type",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewLinesItem
 */
const SchemaOut$CreditNotePreviewLinesItem: z.ZodType<
  External$CreditNotePreviewLinesItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewLinesItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    invoiceLineItem: z.string().optional(),
    quantity: z.number().int().optional(),
    taxAmounts: z
      .union([
        z.array(Schemas$CreditNotePreviewLinesItemTaxAmountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
    type: z.enum(["custom_line_item", "invoice_line_item"]),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      invoiceLineItem: "invoice_line_item",
      quantity: "quantity",
      taxAmounts: "tax_amounts",
      taxRates: "tax_rates",
      type: "type",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$CreditNotePreviewLinesItem = {
  in: SchemaIn$CreditNotePreviewLinesItem,
  out: SchemaOut$CreditNotePreviewLinesItem,
};
