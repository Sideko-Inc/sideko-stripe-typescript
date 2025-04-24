import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData
 */
export type InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData = {
  country?: string | undefined;
  description?: string | undefined;
  displayName: string;
  inclusive: boolean;
  jurisdiction?: string | undefined;
  jurisdictionLevel?:
    | ("city" | "country" | "county" | "district" | "multiple" | "state")
    | undefined;
  percentage: number;
  state?: string | undefined;
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
    | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData =
  {
    country?: string | undefined;
    description?: string | undefined;
    display_name: string;
    inclusive: boolean;
    jurisdiction?: string | undefined;
    jurisdiction_level?:
      | ("city" | "country" | "county" | "district" | "multiple" | "state")
      | undefined;
    percentage: number;
    state?: string | undefined;
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
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().optional(),
    description: z.string().optional(),
    display_name: z.string(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    jurisdiction_level: z
      .enum(["city", "country", "county", "district", "multiple", "state"])
      .optional(),
    percentage: z.number(),
    state: z.string().optional(),
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
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      description: "description",
      display_name: "displayName",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      jurisdiction_level: "jurisdictionLevel",
      percentage: "percentage",
      state: "state",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData // the object to be transformed
> = z
  .object({
    country: z.string().optional(),
    description: z.string().optional(),
    displayName: z.string(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    jurisdictionLevel: z
      .enum(["city", "country", "county", "district", "multiple", "state"])
      .optional(),
    percentage: z.number(),
    state: z.string().optional(),
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
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      description: "description",
      displayName: "display_name",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      jurisdictionLevel: "jurisdiction_level",
      percentage: "percentage",
      state: "state",
      taxType: "tax_type",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData =
  {
    in: SchemaIn$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData,
    out: SchemaOut$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0ItemTaxRateData,
  };
