import {
  External$TaxRateFlatAmount,
  Schemas$TaxRateFlatAmount,
  TaxRateFlatAmount,
} from "./tax-rate-flat-amount";
import {
  External$TaxRateMetadata,
  Schemas$TaxRateMetadata,
  TaxRateMetadata,
} from "./tax-rate-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Tax rates can be applied to [invoices](/invoicing/taxes/tax-rates), [subscriptions](/billing/taxes/tax-rates) and [Checkout Sessions](/payments/checkout/use-manual-tax-rates) to collect tax.
 *
 * Related guide: [Tax rates](/billing/taxes/tax-rates)
 */
export type TaxRate = {
  /**
   * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
   */
  active: boolean;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
   */
  description?: string | null | undefined;
  /**
   * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
   */
  displayName: string;
  /**
   * Actual/effective tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true,
   * this percentage reflects the rate actually used to calculate tax based on the product's taxability
   * and whether the user is registered to collect taxes in the corresponding jurisdiction.
   */
  effectivePercentage?: number | null | undefined;
  /**
   * The amount of the tax rate when the `rate_type`` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
   */
  flatAmount?: TaxRateFlatAmount | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * This specifies if the tax rate is inclusive or exclusive.
   */
  inclusive: boolean;
  /**
   * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
   */
  jurisdiction?: string | null | undefined;
  /**
   * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
   */
  jurisdictionLevel?:
    | ("city" | "country" | "county" | "district" | "multiple" | "state")
    | null
    | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: TaxRateMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax_rate";
  /**
   * Tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true, this percentage includes the statutory tax rate of non-taxable jurisdictions.
   */
  percentage: number;
  /**
   * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
   */
  rateType?: ("flat_amount" | "percentage") | null | undefined;
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string | null | undefined;
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
    | null
    | undefined;
};

/**
 * @internal
 * TaxRate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRate = {
  active: boolean;
  country?: string | null | undefined;
  created: number;
  description?: string | null | undefined;
  display_name: string;
  effective_percentage?: number | null | undefined;
  flat_amount?: External$TaxRateFlatAmount | undefined;
  id: string;
  inclusive: boolean;
  jurisdiction?: string | null | undefined;
  jurisdiction_level?:
    | ("city" | "country" | "county" | "district" | "multiple" | "state")
    | null
    | undefined;
  livemode: boolean;
  metadata?: External$TaxRateMetadata | null | undefined;
  object: "tax_rate";
  percentage: number;
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
 * Takes network data, validates it, and transforms keys to match typescript object TaxRate
 */
const SchemaIn$TaxRate: z.ZodType<
  TaxRate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    country: z.string().nullable().optional(),
    created: z.number().int(),
    description: z.string().nullable().optional(),
    display_name: z.string(),
    effective_percentage: z.number().nullable().optional(),
    flat_amount: Schemas$TaxRateFlatAmount.in.optional(),
    id: z.string(),
    inclusive: z.boolean(),
    jurisdiction: z.string().nullable().optional(),
    jurisdiction_level: z
      .enum(["city", "country", "county", "district", "multiple", "state"])
      .nullable()
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$TaxRateMetadata.in.nullable().optional(),
    object: z.enum(["tax_rate"]),
    percentage: z.number(),
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
      active: "active",
      country: "country",
      created: "created",
      description: "description",
      display_name: "displayName",
      effective_percentage: "effectivePercentage",
      flat_amount: "flatAmount",
      id: "id",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      jurisdiction_level: "jurisdictionLevel",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      percentage: "percentage",
      rate_type: "rateType",
      state: "state",
      tax_type: "taxType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRate
 */
const SchemaOut$TaxRate: z.ZodType<
  External$TaxRate, // output type of this zod object
  z.ZodTypeDef,
  TaxRate // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    country: z.string().nullable().optional(),
    created: z.number().int(),
    description: z.string().nullable().optional(),
    displayName: z.string(),
    effectivePercentage: z.number().nullable().optional(),
    flatAmount: Schemas$TaxRateFlatAmount.out.optional(),
    id: z.string(),
    inclusive: z.boolean(),
    jurisdiction: z.string().nullable().optional(),
    jurisdictionLevel: z
      .enum(["city", "country", "county", "district", "multiple", "state"])
      .nullable()
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$TaxRateMetadata.out.nullable().optional(),
    object: z.enum(["tax_rate"]),
    percentage: z.number(),
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
      active: "active",
      country: "country",
      created: "created",
      description: "description",
      displayName: "display_name",
      effectivePercentage: "effective_percentage",
      flatAmount: "flat_amount",
      id: "id",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      jurisdictionLevel: "jurisdiction_level",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      percentage: "percentage",
      rateType: "rate_type",
      state: "state",
      taxType: "tax_type",
    });
  });

export const Schemas$TaxRate = {
  in: SchemaIn$TaxRate,
  out: SchemaOut$TaxRate,
};
