import {
  External$TaxProductResourceTaxRateDetails,
  Schemas$TaxProductResourceTaxRateDetails,
  TaxProductResourceTaxRateDetails,
} from "./tax-product-resource-tax-rate-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxBreakdown = {
  /**
   * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Specifies whether the tax amount is included in the line item amount.
   */
  inclusive: boolean;
  taxRateDetails: TaxProductResourceTaxRateDetails;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
   */
  taxabilityReason:
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
    | "zero_rated";
  /**
   * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  taxableAmount: number;
};

/**
 * @internal
 * TaxProductResourceTaxBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxBreakdown = {
  amount: number;
  inclusive: boolean;
  tax_rate_details: External$TaxProductResourceTaxRateDetails;
  taxability_reason:
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
    | "zero_rated";
  taxable_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxBreakdown
 */
const SchemaIn$TaxProductResourceTaxBreakdown: z.ZodType<
  TaxProductResourceTaxBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    inclusive: z.boolean(),
    tax_rate_details: Schemas$TaxProductResourceTaxRateDetails.in,
    taxability_reason: z.enum([
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
    ]),
    taxable_amount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      inclusive: "inclusive",
      tax_rate_details: "taxRateDetails",
      taxability_reason: "taxabilityReason",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxBreakdown
 */
const SchemaOut$TaxProductResourceTaxBreakdown: z.ZodType<
  External$TaxProductResourceTaxBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxBreakdown // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    inclusive: z.boolean(),
    taxRateDetails: Schemas$TaxProductResourceTaxRateDetails.out,
    taxabilityReason: z.enum([
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
    ]),
    taxableAmount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      inclusive: "inclusive",
      taxRateDetails: "tax_rate_details",
      taxabilityReason: "taxability_reason",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$TaxProductResourceTaxBreakdown = {
  in: SchemaIn$TaxProductResourceTaxBreakdown,
  out: SchemaOut$TaxProductResourceTaxBreakdown,
};
