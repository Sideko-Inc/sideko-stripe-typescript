import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LineItemsTaxAmount = {
  /**
   * Amount of tax applied for this rate.
   */
  amount: number;
  /**
   * Tax rates can be applied to [invoices](/invoicing/taxes/tax-rates), [subscriptions](/billing/taxes/tax-rates) and [Checkout Sessions](/payments/checkout/use-manual-tax-rates) to collect tax.
   *
   * Related guide: [Tax rates](/billing/taxes/tax-rates)
   */
  rate: TaxRate;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
   */
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
    | null
    | undefined;
  /**
   * The amount on which tax is calculated, in cents (or local equivalent).
   */
  taxableAmount?: number | null | undefined;
};

/**
 * @internal
 * LineItemsTaxAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LineItemsTaxAmount = {
  amount: number;
  rate: External$TaxRate;
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
    | null
    | undefined;
  taxable_amount?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LineItemsTaxAmount
 */
const SchemaIn$LineItemsTaxAmount: z.ZodType<
  LineItemsTaxAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    rate: Schemas$TaxRate.in,
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
      .nullable()
      .optional(),
    taxable_amount: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      rate: "rate",
      taxability_reason: "taxabilityReason",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LineItemsTaxAmount
 */
const SchemaOut$LineItemsTaxAmount: z.ZodType<
  External$LineItemsTaxAmount, // output type of this zod object
  z.ZodTypeDef,
  LineItemsTaxAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    rate: Schemas$TaxRate.out,
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
      .nullable()
      .optional(),
    taxableAmount: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      rate: "rate",
      taxabilityReason: "taxability_reason",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$LineItemsTaxAmount = {
  in: SchemaIn$LineItemsTaxAmount,
  out: SchemaOut$LineItemsTaxAmount,
};
