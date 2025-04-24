import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceLineItemTaxRateDetails = {
  /**
   * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
   */
  displayName: string;
  /**
   * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
   */
  percentageDecimal: string;
  /**
   * The tax type, such as `vat` or `sales_tax`.
   */
  taxType:
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
    | "vat";
};

/**
 * @internal
 * TaxProductResourceLineItemTaxRateDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceLineItemTaxRateDetails = {
  display_name: string;
  percentage_decimal: string;
  tax_type:
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
    | "vat";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceLineItemTaxRateDetails
 */
const SchemaIn$TaxProductResourceLineItemTaxRateDetails: z.ZodType<
  TaxProductResourceLineItemTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_name: z.string(),
    percentage_decimal: z.string(),
    tax_type: z.enum([
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
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_name: "displayName",
      percentage_decimal: "percentageDecimal",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceLineItemTaxRateDetails
 */
const SchemaOut$TaxProductResourceLineItemTaxRateDetails: z.ZodType<
  External$TaxProductResourceLineItemTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceLineItemTaxRateDetails // the object to be transformed
> = z
  .object({
    displayName: z.string(),
    percentageDecimal: z.string(),
    taxType: z.enum([
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
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayName: "display_name",
      percentageDecimal: "percentage_decimal",
      taxType: "tax_type",
    });
  });

export const Schemas$TaxProductResourceLineItemTaxRateDetails = {
  in: SchemaIn$TaxProductResourceLineItemTaxRateDetails,
  out: SchemaOut$TaxProductResourceLineItemTaxRateDetails,
};
