import {
  External$InvoiceLineUpdateBodyDiscountsArr0Item,
  InvoiceLineUpdateBodyDiscountsArr0Item,
  Schemas$InvoiceLineUpdateBodyDiscountsArr0Item,
} from "./invoice-line-update-body-discounts-arr0-item";
import {
  External$InvoiceLineUpdateBodyMetadataObj0,
  InvoiceLineUpdateBodyMetadataObj0,
  Schemas$InvoiceLineUpdateBodyMetadataObj0,
} from "./invoice-line-update-body-metadata-obj0";
import {
  External$InvoiceLineUpdateBodyPeriod,
  InvoiceLineUpdateBodyPeriod,
  Schemas$InvoiceLineUpdateBodyPeriod,
} from "./invoice-line-update-body-period";
import {
  External$InvoiceLineUpdateBodyPriceData,
  InvoiceLineUpdateBodyPriceData,
  Schemas$InvoiceLineUpdateBodyPriceData,
} from "./invoice-line-update-body-price-data";
import {
  External$InvoiceLineUpdateBodyPricing,
  InvoiceLineUpdateBodyPricing,
  Schemas$InvoiceLineUpdateBodyPricing,
} from "./invoice-line-update-body-pricing";
import {
  External$InvoiceLineUpdateBodyTaxAmountsArr0Item,
  InvoiceLineUpdateBodyTaxAmountsArr0Item,
  Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item,
} from "./invoice-line-update-body-tax-amounts-arr0-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateBody
 */
export type InvoiceLineUpdateBody = {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
   */
  amount?: number | undefined;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string | undefined;
  /**
   * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
   */
  discountable?: boolean | undefined;
  /**
   * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: (InvoiceLineUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  metadata?: (InvoiceLineUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: InvoiceLineUpdateBodyPeriod | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: InvoiceLineUpdateBodyPriceData | undefined;
  /**
   * The pricing information for the invoice item.
   */
  pricing?: InvoiceLineUpdateBodyPricing | undefined;
  /**
   * Non-negative integer. The quantity of units for the line item.
   */
  quantity?: number | undefined;
  /**
   * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://stripe.com/docs/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://stripe.com/docs/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
   */
  taxAmounts?: (InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string) | undefined;
  /**
   * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: (string[] | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | ((InvoiceLineUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | ((InvoiceLineUpdateBodyMetadataObj0 | string) | undefined)
    | (InvoiceLineUpdateBodyPeriod | undefined)
    | (InvoiceLineUpdateBodyPriceData | undefined)
    | (InvoiceLineUpdateBodyPricing | undefined)
    | (number | undefined)
    | ((InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string) | undefined)
    | ((string[] | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBody = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceLineUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?: (External$InvoiceLineUpdateBodyMetadataObj0 | string) | undefined;
  period?: External$InvoiceLineUpdateBodyPeriod | undefined;
  price_data?: External$InvoiceLineUpdateBodyPriceData | undefined;
  pricing?: External$InvoiceLineUpdateBodyPricing | undefined;
  quantity?: number | undefined;
  tax_amounts?:
    | (External$InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string)
    | undefined;
  tax_rates?: (string[] | string) | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | ((External$InvoiceLineUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | ((External$InvoiceLineUpdateBodyMetadataObj0 | string) | undefined)
    | (External$InvoiceLineUpdateBodyPeriod | undefined)
    | (External$InvoiceLineUpdateBodyPriceData | undefined)
    | (External$InvoiceLineUpdateBodyPricing | undefined)
    | (number | undefined)
    | (
        | (External$InvoiceLineUpdateBodyTaxAmountsArr0Item[] | string)
        | undefined
      )
    | ((string[] | string) | undefined)
    | External$InvoiceLineUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBody
 */
const SchemaIn$InvoiceLineUpdateBody: z.ZodType<
  InvoiceLineUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceLineUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    period: Schemas$InvoiceLineUpdateBodyPeriod.in.optional(),
    price_data: Schemas$InvoiceLineUpdateBodyPriceData.in.optional(),
    pricing: Schemas$InvoiceLineUpdateBodyPricing.in.optional(),
    quantity: z.number().int().optional(),
    tax_amounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      period: "period",
      price_data: "priceData",
      pricing: "pricing",
      quantity: "quantity",
      tax_amounts: "taxAmounts",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBody
 */
const SchemaOut$InvoiceLineUpdateBody: z.ZodType<
  External$InvoiceLineUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceLineUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    period: Schemas$InvoiceLineUpdateBodyPeriod.out.optional(),
    priceData: Schemas$InvoiceLineUpdateBodyPriceData.out.optional(),
    pricing: Schemas$InvoiceLineUpdateBodyPricing.out.optional(),
    quantity: z.number().int().optional(),
    taxAmounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateBodyTaxAmountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      period: "period",
      priceData: "price_data",
      pricing: "pricing",
      quantity: "quantity",
      taxAmounts: "tax_amounts",
      taxRates: "tax_rates",
    });
  });

export const Schemas$InvoiceLineUpdateBody = {
  in: SchemaIn$InvoiceLineUpdateBody,
  out: SchemaOut$InvoiceLineUpdateBody,
};
