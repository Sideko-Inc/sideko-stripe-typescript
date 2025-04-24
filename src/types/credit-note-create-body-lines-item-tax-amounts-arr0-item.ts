import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNoteCreateBodyLinesItemTaxAmountsArr0Item
 */
export type CreditNoteCreateBodyLinesItemTaxAmountsArr0Item = {
  amount: number;
  taxRate: string;
  taxableAmount: number;
};

/**
 * @internal
 * CreditNoteCreateBodyLinesItemTaxAmountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item = {
  amount: number;
  tax_rate: string;
  taxable_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteCreateBodyLinesItemTaxAmountsArr0Item
 */
const SchemaIn$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item: z.ZodType<
  CreditNoteCreateBodyLinesItemTaxAmountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item
 */
const SchemaOut$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item: z.ZodType<
  External$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteCreateBodyLinesItemTaxAmountsArr0Item // the object to be transformed
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

export const Schemas$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item = {
  in: SchemaIn$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item,
  out: SchemaOut$CreditNoteCreateBodyLinesItemTaxAmountsArr0Item,
};
