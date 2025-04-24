import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreviewLinesLinesItemTaxAmountsArr0Item
 */
export type CreditNotePreviewLinesLinesItemTaxAmountsArr0Item = {
  amount: number;
  taxRate: string;
  taxableAmount: number;
};

/**
 * @internal
 * CreditNotePreviewLinesLinesItemTaxAmountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item = {
  amount: number;
  tax_rate: string;
  taxable_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewLinesLinesItemTaxAmountsArr0Item
 */
const SchemaIn$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item: z.ZodType<
  CreditNotePreviewLinesLinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_rate: z.string(),
    taxable_amount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_rate: "taxRate",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item
 */
const SchemaOut$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item: z.ZodType<
  External$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewLinesLinesItemTaxAmountsArr0Item // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxRate: z.string(),
    taxableAmount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxRate: "tax_rate",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item = {
  in: SchemaIn$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item,
  out: SchemaOut$CreditNotePreviewLinesLinesItemTaxAmountsArr0Item,
};
