import {
  External$InvoiceItemUpdateBodyDiscountsArr0Item,
  InvoiceItemUpdateBodyDiscountsArr0Item,
  Schemas$InvoiceItemUpdateBodyDiscountsArr0Item,
} from "./invoice-item-update-body-discounts-arr0-item";
import {
  External$InvoiceItemUpdateBodyMetadataObj0,
  InvoiceItemUpdateBodyMetadataObj0,
  Schemas$InvoiceItemUpdateBodyMetadataObj0,
} from "./invoice-item-update-body-metadata-obj0";
import {
  External$InvoiceItemUpdateBodyPeriod,
  InvoiceItemUpdateBodyPeriod,
  Schemas$InvoiceItemUpdateBodyPeriod,
} from "./invoice-item-update-body-period";
import {
  External$InvoiceItemUpdateBodyPriceData,
  InvoiceItemUpdateBodyPriceData,
  Schemas$InvoiceItemUpdateBodyPriceData,
} from "./invoice-item-update-body-price-data";
import {
  External$InvoiceItemUpdateBodyPricing,
  InvoiceItemUpdateBodyPricing,
  Schemas$InvoiceItemUpdateBodyPricing,
} from "./invoice-item-update-body-pricing";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemUpdateBody
 */
export type InvoiceItemUpdateBody = {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
   */
  amount?: number | undefined;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string | undefined;
  /**
   * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
   */
  discountable?: boolean | undefined;
  /**
   * The coupons, promotion codes & existing discounts which apply to the invoice item or invoice line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: (InvoiceItemUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceItemUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: InvoiceItemUpdateBodyPeriod | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: InvoiceItemUpdateBodyPriceData | undefined;
  /**
   * The pricing information for the invoice item.
   */
  pricing?: InvoiceItemUpdateBodyPricing | undefined;
  /**
   * Non-negative integer. The quantity of units for the invoice item.
   */
  quantity?: number | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: (string | string) | undefined;
  /**
   * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. Pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: (string[] | string) | undefined;
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
    | (boolean | undefined)
    | ((InvoiceItemUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | ((InvoiceItemUpdateBodyMetadataObj0 | string) | undefined)
    | (InvoiceItemUpdateBodyPeriod | undefined)
    | (InvoiceItemUpdateBodyPriceData | undefined)
    | (InvoiceItemUpdateBodyPricing | undefined)
    | (number | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceItemUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemUpdateBody = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceItemUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?: (External$InvoiceItemUpdateBodyMetadataObj0 | string) | undefined;
  period?: External$InvoiceItemUpdateBodyPeriod | undefined;
  price_data?: External$InvoiceItemUpdateBodyPriceData | undefined;
  pricing?: External$InvoiceItemUpdateBodyPricing | undefined;
  quantity?: number | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: (string | string) | undefined;
  tax_rates?: (string[] | string) | undefined;
  unit_amount_decimal?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | ((External$InvoiceItemUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | ((External$InvoiceItemUpdateBodyMetadataObj0 | string) | undefined)
    | (External$InvoiceItemUpdateBodyPeriod | undefined)
    | (External$InvoiceItemUpdateBodyPriceData | undefined)
    | (External$InvoiceItemUpdateBodyPricing | undefined)
    | (number | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | External$InvoiceItemUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemUpdateBody
 */
const SchemaIn$InvoiceItemUpdateBody: z.ZodType<
  InvoiceItemUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceItemUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceItemUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    period: Schemas$InvoiceItemUpdateBodyPeriod.in.optional(),
    price_data: Schemas$InvoiceItemUpdateBodyPriceData.in.optional(),
    pricing: Schemas$InvoiceItemUpdateBodyPricing.in.optional(),
    quantity: z.number().int().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.union([z.string(), z.string()]).optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    unit_amount_decimal: z.string().optional(),
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
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      tax_rates: "taxRates",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemUpdateBody
 */
const SchemaOut$InvoiceItemUpdateBody: z.ZodType<
  External$InvoiceItemUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemUpdateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceItemUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$InvoiceItemUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    period: Schemas$InvoiceItemUpdateBodyPeriod.out.optional(),
    priceData: Schemas$InvoiceItemUpdateBodyPriceData.out.optional(),
    pricing: Schemas$InvoiceItemUpdateBodyPricing.out.optional(),
    quantity: z.number().int().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.union([z.string(), z.string()]).optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
    unitAmountDecimal: z.string().optional(),
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
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      taxRates: "tax_rates",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$InvoiceItemUpdateBody = {
  in: SchemaIn$InvoiceItemUpdateBody,
  out: SchemaOut$InvoiceItemUpdateBody,
};
