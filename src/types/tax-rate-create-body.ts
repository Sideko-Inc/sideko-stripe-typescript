import {
  External$TaxRateCreateBodyMetadata,
  Schemas$TaxRateCreateBodyMetadata,
  TaxRateCreateBodyMetadata,
} from "./tax-rate-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRateCreateBody
 */
export type TaxRateCreateBody = {
  /**
   * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
   */
  active?: boolean | undefined;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | undefined;
  /**
   * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
   */
  description?: string | undefined;
  /**
   * The display name of the tax rate, which will be shown to users.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * This specifies if the tax rate is inclusive or exclusive.
   */
  inclusive: boolean;
  /**
   * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
   */
  jurisdiction?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TaxRateCreateBodyMetadata | undefined;
  /**
   * This represents the tax rate percent out of 100.
   */
  percentage: number;
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string | undefined;
  /**
   * The high-level tax type, such as `vat` or `sales_tax`.
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
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | string
    | (string[] | undefined)
    | boolean
    | (string | undefined)
    | (TaxRateCreateBodyMetadata | undefined)
    | number
    | (string | undefined)
    | (
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
        | undefined
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxRateCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateCreateBody = {
  active?: boolean | undefined;
  country?: string | undefined;
  description?: string | undefined;
  display_name: string;
  expand?: string[] | undefined;
  inclusive: boolean;
  jurisdiction?: string | undefined;
  metadata?: External$TaxRateCreateBodyMetadata | undefined;
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

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | string
    | (string[] | undefined)
    | boolean
    | (string | undefined)
    | (External$TaxRateCreateBodyMetadata | undefined)
    | number
    | (string | undefined)
    | (
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
        | undefined
      )
    | External$TaxRateCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateCreateBody
 */
const SchemaIn$TaxRateCreateBody: z.ZodType<
  TaxRateCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    country: z.string().optional(),
    description: z.string().optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    metadata: Schemas$TaxRateCreateBodyMetadata.in.optional(),
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
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      country: "country",
      description: "description",
      display_name: "displayName",
      expand: "expand",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      percentage: "percentage",
      state: "state",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateCreateBody
 */
const SchemaOut$TaxRateCreateBody: z.ZodType<
  External$TaxRateCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxRateCreateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    country: z.string().optional(),
    description: z.string().optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    metadata: Schemas$TaxRateCreateBodyMetadata.out.optional(),
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
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      country: "country",
      description: "description",
      displayName: "display_name",
      expand: "expand",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      percentage: "percentage",
      state: "state",
      taxType: "tax_type",
    });
  });

export const Schemas$TaxRateCreateBody = {
  in: SchemaIn$TaxRateCreateBody,
  out: SchemaOut$TaxRateCreateBody,
};
