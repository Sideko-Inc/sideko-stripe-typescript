import {
  External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData,
  InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData,
  Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData,
} from "./invoice-line-update-many-body-lines-item-tax-amounts-arr0-item-tax-rate-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item
 */
export type InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item = {
  amount: number;
  taxRateData: InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData;
  taxabilityReason?:
    | (
        | "customer_exempt"
        | "not_collecting"
        | "not_subject_to_tax"
        | "not_supported"
        | "portion_product_exempt"
        | "portion_reduced_rated"
        | "portion_standard_rated"
        | "product_exempt"
        | "product_exempt_holiday"
        | "proportionally_rated"
        | "reduced_rated"
        | "reverse_charge"
        | "standard_rated"
        | "taxable_basis_reduced"
        | "zero_rated"
      )
    | undefined;
  taxableAmount: number;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item = {
  amount: number;
  tax_rate_data: External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData;
  taxability_reason?:
    | (
        | "customer_exempt"
        | "not_collecting"
        | "not_subject_to_tax"
        | "not_supported"
        | "portion_product_exempt"
        | "portion_reduced_rated"
        | "portion_standard_rated"
        | "product_exempt"
        | "product_exempt_holiday"
        | "proportionally_rated"
        | "reduced_rated"
        | "reverse_charge"
        | "standard_rated"
        | "taxable_basis_reduced"
        | "zero_rated"
      )
    | undefined;
  taxable_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_rate_data:
      Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData.in,
    taxability_reason: z
      .enum([
        "customer_exempt",
        "not_collecting",
        "not_subject_to_tax",
        "not_supported",
        "portion_product_exempt",
        "portion_reduced_rated",
        "portion_standard_rated",
        "product_exempt",
        "product_exempt_holiday",
        "proportionally_rated",
        "reduced_rated",
        "reverse_charge",
        "standard_rated",
        "taxable_basis_reduced",
        "zero_rated",
      ])
      .optional(),
    taxable_amount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_rate_data: "taxRateData",
      taxability_reason: "taxabilityReason",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxRateData:
      Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData.out,
    taxabilityReason: z
      .enum([
        "customer_exempt",
        "not_collecting",
        "not_subject_to_tax",
        "not_supported",
        "portion_product_exempt",
        "portion_reduced_rated",
        "portion_standard_rated",
        "product_exempt",
        "product_exempt_holiday",
        "proportionally_rated",
        "reduced_rated",
        "reverse_charge",
        "standard_rated",
        "taxable_basis_reduced",
        "zero_rated",
      ])
      .optional(),
    taxableAmount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxRateData: "tax_rate_data",
      taxabilityReason: "taxability_reason",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item,
};
