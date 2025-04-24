import {
  External$TaxRateFlatAmount,
  Schemas$TaxRateFlatAmount,
  TaxRateFlatAmount,
} from "./tax-rate-flat-amount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxRateDetails = {
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | null | undefined;
  /**
   * The amount of the tax rate when the `rate_type`` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
   */
  flatAmount?: TaxRateFlatAmount | undefined;
  /**
   * The tax rate percentage as a string. For example, 8.5% is represented as `"8.5"`.
   */
  percentageDecimal: string;
  /**
   * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
   */
  rateType?: ("flat_amount" | "percentage") | null | undefined;
  /**
   * State, county, province, or region.
   */
  state?: string | null | undefined;
  /**
   * The tax type, such as `vat` or `sales_tax`.
   */
  taxType?:
    | (
        | "amusement_tax"
        | "communications_tax"
        | "gst"
        | "hst"
        | "igst"
        | "jct"
        | "lease_tax"
        | "pst"
        | "qst"
        | "retail_delivery_fee"
        | "rst"
        | "sales_tax"
        | "service_tax"
        | "vat"
      )
    | null
    | undefined;
};

/**
 * @internal
 * TaxProductResourceTaxRateDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxRateDetails = {
  country?: string | null | undefined;
  flat_amount?: External$TaxRateFlatAmount | undefined;
  percentage_decimal: string;
  rate_type?: ("flat_amount" | "percentage") | null | undefined;
  state?: string | null | undefined;
  tax_type?:
    | (
        | "amusement_tax"
        | "communications_tax"
        | "gst"
        | "hst"
        | "igst"
        | "jct"
        | "lease_tax"
        | "pst"
        | "qst"
        | "retail_delivery_fee"
        | "rst"
        | "sales_tax"
        | "service_tax"
        | "vat"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxRateDetails
 */
const SchemaIn$TaxProductResourceTaxRateDetails: z.ZodType<
  TaxProductResourceTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().nullable().optional(),
    flat_amount: Schemas$TaxRateFlatAmount.in.optional(),
    percentage_decimal: z.string(),
    rate_type: z.enum(["flat_amount", "percentage"]).nullable().optional(),
    state: z.string().nullable().optional(),
    tax_type: z
      .enum([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      flat_amount: "flatAmount",
      percentage_decimal: "percentageDecimal",
      rate_type: "rateType",
      state: "state",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxRateDetails
 */
const SchemaOut$TaxProductResourceTaxRateDetails: z.ZodType<
  External$TaxProductResourceTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxRateDetails // the object to be transformed
> = z
  .object({
    country: z.string().nullable().optional(),
    flatAmount: Schemas$TaxRateFlatAmount.out.optional(),
    percentageDecimal: z.string(),
    rateType: z.enum(["flat_amount", "percentage"]).nullable().optional(),
    state: z.string().nullable().optional(),
    taxType: z
      .enum([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      flatAmount: "flat_amount",
      percentageDecimal: "percentage_decimal",
      rateType: "rate_type",
      state: "state",
      taxType: "tax_type",
    });
  });

export const Schemas$TaxProductResourceTaxRateDetails = {
  in: SchemaIn$TaxProductResourceTaxRateDetails,
  out: SchemaOut$TaxProductResourceTaxRateDetails,
};
