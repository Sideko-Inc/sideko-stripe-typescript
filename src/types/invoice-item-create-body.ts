import {
  External$InvoiceItemCreateBodyDiscountsArr0Item,
  InvoiceItemCreateBodyDiscountsArr0Item,
  Schemas$InvoiceItemCreateBodyDiscountsArr0Item,
} from "./invoice-item-create-body-discounts-arr0-item";
import {
  External$InvoiceItemCreateBodyMetadataObj0,
  InvoiceItemCreateBodyMetadataObj0,
  Schemas$InvoiceItemCreateBodyMetadataObj0,
} from "./invoice-item-create-body-metadata-obj0";
import {
  External$InvoiceItemCreateBodyPeriod,
  InvoiceItemCreateBodyPeriod,
  Schemas$InvoiceItemCreateBodyPeriod,
} from "./invoice-item-create-body-period";
import {
  External$InvoiceItemCreateBodyPriceData,
  InvoiceItemCreateBodyPriceData,
  Schemas$InvoiceItemCreateBodyPriceData,
} from "./invoice-item-create-body-price-data";
import {
  External$InvoiceItemCreateBodyPricing,
  InvoiceItemCreateBodyPricing,
  Schemas$InvoiceItemCreateBodyPricing,
} from "./invoice-item-create-body-pricing";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemCreateBody
 */
export type InvoiceItemCreateBody = {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.
   */
  amount?: number | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * The ID of the customer who will be billed when this invoice item is billed.
   */
  customer: string;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string | undefined;
  /**
   * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
   */
  discountable?: boolean | undefined;
  /**
   * The coupons and promotion codes to redeem into discounts for the invoice item or invoice line item.
   */
  discounts?: (InvoiceItemCreateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices and there is a maximum of 250 items per invoice.
   */
  invoice?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceItemCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: InvoiceItemCreateBodyPeriod | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: InvoiceItemCreateBodyPriceData | undefined;
  /**
   * The pricing information for the invoice item.
   */
  pricing?: InvoiceItemCreateBodyPricing | undefined;
  /**
   * Non-negative integer. The quantity of units for the invoice item.
   */
  quantity?: number | undefined;
  /**
   * The ID of a subscription to add this invoice item to. When left blank, the invoice item is added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
   */
  subscription?: string | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: (string | string) | undefined;
  /**
   * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
   */
  taxRates?: string[] | undefined;
  /**
   * The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This `unit_amount_decimal` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount_decimal` will reduce the `amount_due` on the invoice. Accepts at most 12 decimal places.
   */
  unitAmountDecimal?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | string
    | (string | undefined)
    | (boolean | undefined)
    | ((InvoiceItemCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((InvoiceItemCreateBodyMetadataObj0 | string) | undefined)
    | (InvoiceItemCreateBodyPeriod | undefined)
    | (InvoiceItemCreateBodyPriceData | undefined)
    | (InvoiceItemCreateBodyPricing | undefined)
    | (number | undefined)
    | (string | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceItemCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemCreateBody = {
  amount?: number | undefined;
  currency?: string | undefined;
  customer: string;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceItemCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  invoice?: string | undefined;
  metadata?: (External$InvoiceItemCreateBodyMetadataObj0 | string) | undefined;
  period?: External$InvoiceItemCreateBodyPeriod | undefined;
  price_data?: External$InvoiceItemCreateBodyPriceData | undefined;
  pricing?: External$InvoiceItemCreateBodyPricing | undefined;
  quantity?: number | undefined;
  subscription?: string | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: (string | string) | undefined;
  tax_rates?: string[] | undefined;
  unit_amount_decimal?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | string
    | (string | undefined)
    | (boolean | undefined)
    | ((External$InvoiceItemCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((External$InvoiceItemCreateBodyMetadataObj0 | string) | undefined)
    | (External$InvoiceItemCreateBodyPeriod | undefined)
    | (External$InvoiceItemCreateBodyPriceData | undefined)
    | (External$InvoiceItemCreateBodyPricing | undefined)
    | (number | undefined)
    | (string | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | External$InvoiceItemCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemCreateBody
 */
const SchemaIn$InvoiceItemCreateBody: z.ZodType<
  InvoiceItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceItemCreateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string().optional(),
    metadata: z
      .union([Schemas$InvoiceItemCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    period: Schemas$InvoiceItemCreateBodyPeriod.in.optional(),
    price_data: Schemas$InvoiceItemCreateBodyPriceData.in.optional(),
    pricing: Schemas$InvoiceItemCreateBodyPricing.in.optional(),
    quantity: z.number().int().optional(),
    subscription: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.union([z.string(), z.string()]).optional(),
    tax_rates: z.array(z.string()).optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      invoice: "invoice",
      metadata: "metadata",
      period: "period",
      price_data: "priceData",
      pricing: "pricing",
      quantity: "quantity",
      subscription: "subscription",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      tax_rates: "taxRates",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemCreateBody
 */
const SchemaOut$InvoiceItemCreateBody: z.ZodType<
  External$InvoiceItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    customer: z.string(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceItemCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string().optional(),
    metadata: z
      .union([Schemas$InvoiceItemCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    period: Schemas$InvoiceItemCreateBodyPeriod.out.optional(),
    priceData: Schemas$InvoiceItemCreateBodyPriceData.out.optional(),
    pricing: Schemas$InvoiceItemCreateBodyPricing.out.optional(),
    quantity: z.number().int().optional(),
    subscription: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.union([z.string(), z.string()]).optional(),
    taxRates: z.array(z.string()).optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      expand: "expand",
      invoice: "invoice",
      metadata: "metadata",
      period: "period",
      priceData: "price_data",
      pricing: "pricing",
      quantity: "quantity",
      subscription: "subscription",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      taxRates: "tax_rates",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$InvoiceItemCreateBody = {
  in: SchemaIn$InvoiceItemCreateBody,
  out: SchemaOut$InvoiceItemCreateBody,
};
