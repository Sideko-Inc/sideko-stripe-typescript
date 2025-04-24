import {
  BillingBillResourceInvoicingTaxesTaxRateDetails,
  External$BillingBillResourceInvoicingTaxesTaxRateDetails,
  Schemas$BillingBillResourceInvoicingTaxesTaxRateDetails,
} from "./billing-bill-resource-invoicing-taxes-tax-rate-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingTaxesTax = {
  /**
   * The amount of the tax, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Whether this tax is inclusive or exclusive.
   */
  taxBehavior: "exclusive" | "inclusive";
  taxRateDetails?: BillingBillResourceInvoicingTaxesTaxRateDetails | undefined;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
   */
  taxabilityReason:
    | "customer_exempt"
    | "not_available"
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
   * The amount on which tax is calculated, in cents (or local equivalent).
   */
  taxableAmount?: number | null | undefined;
  /**
   * The type of tax information.
   */
  type: "tax_rate_details";
};

/**
 * @internal
 * BillingBillResourceInvoicingTaxesTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingTaxesTax = {
  amount: number;
  tax_behavior: "exclusive" | "inclusive";
  tax_rate_details?:
    | External$BillingBillResourceInvoicingTaxesTaxRateDetails
    | undefined;
  taxability_reason:
    | "customer_exempt"
    | "not_available"
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
  taxable_amount?: number | null | undefined;
  type: "tax_rate_details";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingTaxesTax
 */
const SchemaIn$BillingBillResourceInvoicingTaxesTax: z.ZodType<
  BillingBillResourceInvoicingTaxesTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_behavior: z.enum(["exclusive", "inclusive"]),
    tax_rate_details:
      Schemas$BillingBillResourceInvoicingTaxesTaxRateDetails.in.optional(),
    taxability_reason: z.enum([
      "customer_exempt",
      "not_available",
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
    taxable_amount: z.number().int().nullable().optional(),
    type: z.enum(["tax_rate_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_behavior: "taxBehavior",
      tax_rate_details: "taxRateDetails",
      taxability_reason: "taxabilityReason",
      taxable_amount: "taxableAmount",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingTaxesTax
 */
const SchemaOut$BillingBillResourceInvoicingTaxesTax: z.ZodType<
  External$BillingBillResourceInvoicingTaxesTax, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingTaxesTax // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxBehavior: z.enum(["exclusive", "inclusive"]),
    taxRateDetails:
      Schemas$BillingBillResourceInvoicingTaxesTaxRateDetails.out.optional(),
    taxabilityReason: z.enum([
      "customer_exempt",
      "not_available",
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
    taxableAmount: z.number().int().nullable().optional(),
    type: z.enum(["tax_rate_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxBehavior: "tax_behavior",
      taxRateDetails: "tax_rate_details",
      taxabilityReason: "taxability_reason",
      taxableAmount: "taxable_amount",
      type: "type",
    });
  });

export const Schemas$BillingBillResourceInvoicingTaxesTax = {
  in: SchemaIn$BillingBillResourceInvoicingTaxesTax,
  out: SchemaOut$BillingBillResourceInvoicingTaxesTax,
};
