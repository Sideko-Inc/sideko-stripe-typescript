import {
  External$TaxRateUpdateBodyMetadataObj0,
  Schemas$TaxRateUpdateBodyMetadataObj0,
  TaxRateUpdateBodyMetadataObj0,
} from "./tax-rate-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRateUpdateBody
 */
export type TaxRateUpdateBody = {
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
  displayName?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
   */
  jurisdiction?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TaxRateUpdateBodyMetadataObj0 | string) | undefined;
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
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((TaxRateUpdateBodyMetadataObj0 | string) | undefined)
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
 * TaxRateUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateUpdateBody = {
  active?: boolean | undefined;
  country?: string | undefined;
  description?: string | undefined;
  display_name?: string | undefined;
  expand?: string[] | undefined;
  jurisdiction?: string | undefined;
  metadata?: (External$TaxRateUpdateBodyMetadataObj0 | string) | undefined;
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
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((External$TaxRateUpdateBodyMetadataObj0 | string) | undefined)
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
    | External$TaxRateUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateUpdateBody
 */
const SchemaIn$TaxRateUpdateBody: z.ZodType<
  TaxRateUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    country: z.string().optional(),
    description: z.string().optional(),
    display_name: z.string().optional(),
    expand: z.array(z.string()).optional(),
    jurisdiction: z.string().optional(),
    metadata: z
      .union([Schemas$TaxRateUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
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
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      state: "state",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateUpdateBody
 */
const SchemaOut$TaxRateUpdateBody: z.ZodType<
  External$TaxRateUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TaxRateUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    country: z.string().optional(),
    description: z.string().optional(),
    displayName: z.string().optional(),
    expand: z.array(z.string()).optional(),
    jurisdiction: z.string().optional(),
    metadata: z
      .union([Schemas$TaxRateUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
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
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      state: "state",
      taxType: "tax_type",
    });
  });

export const Schemas$TaxRateUpdateBody = {
  in: SchemaIn$TaxRateUpdateBody,
  out: SchemaOut$TaxRateUpdateBody,
};
