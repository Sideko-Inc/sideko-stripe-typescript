import {
  External$TaxProductResourceJurisdiction,
  Schemas$TaxProductResourceJurisdiction,
  TaxProductResourceJurisdiction,
} from "./tax-product-resource-jurisdiction";
import {
  External$TaxProductResourceLineItemTaxRateDetails,
  Schemas$TaxProductResourceLineItemTaxRateDetails,
  TaxProductResourceLineItemTaxRateDetails,
} from "./tax-product-resource-line-item-tax-rate-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceLineItemTaxBreakdown = {
  /**
   * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  jurisdiction: TaxProductResourceJurisdiction;
  /**
   * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
   */
  sourcing: "destination" | "origin";
  taxRateDetails?: TaxProductResourceLineItemTaxRateDetails | undefined;
  /**
   * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
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
 * TaxProductResourceLineItemTaxBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceLineItemTaxBreakdown = {
  amount: number;
  jurisdiction: External$TaxProductResourceJurisdiction;
  sourcing: "destination" | "origin";
  tax_rate_details?:
    | External$TaxProductResourceLineItemTaxRateDetails
    | undefined;
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
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceLineItemTaxBreakdown
 */
const SchemaIn$TaxProductResourceLineItemTaxBreakdown: z.ZodType<
  TaxProductResourceLineItemTaxBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    jurisdiction: Schemas$TaxProductResourceJurisdiction.in,
    sourcing: z.enum(["destination", "origin"]),
    tax_rate_details:
      Schemas$TaxProductResourceLineItemTaxRateDetails.in.optional(),
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
      jurisdiction: "jurisdiction",
      sourcing: "sourcing",
      tax_rate_details: "taxRateDetails",
      taxability_reason: "taxabilityReason",
      taxable_amount: "taxableAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceLineItemTaxBreakdown
 */
const SchemaOut$TaxProductResourceLineItemTaxBreakdown: z.ZodType<
  External$TaxProductResourceLineItemTaxBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceLineItemTaxBreakdown // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    jurisdiction: Schemas$TaxProductResourceJurisdiction.out,
    sourcing: z.enum(["destination", "origin"]),
    taxRateDetails:
      Schemas$TaxProductResourceLineItemTaxRateDetails.out.optional(),
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
      jurisdiction: "jurisdiction",
      sourcing: "sourcing",
      taxRateDetails: "tax_rate_details",
      taxabilityReason: "taxability_reason",
      taxableAmount: "taxable_amount",
    });
  });

export const Schemas$TaxProductResourceLineItemTaxBreakdown = {
  in: SchemaIn$TaxProductResourceLineItemTaxBreakdown,
  out: SchemaOut$TaxProductResourceLineItemTaxBreakdown,
};
