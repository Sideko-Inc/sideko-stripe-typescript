import {
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent,
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent,
  Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent,
} from "./billing-bill-resource-invoicing-lines-parents-invoice-line-item-parent";
import {
  BillingBillResourceInvoicingPricingPricing,
  External$BillingBillResourceInvoicingPricingPricing,
  Schemas$BillingBillResourceInvoicingPricingPricing,
} from "./billing-bill-resource-invoicing-pricing-pricing";
import {
  BillingBillResourceInvoicingTaxesTax,
  External$BillingBillResourceInvoicingTaxesTax,
  Schemas$BillingBillResourceInvoicingTaxesTax,
} from "./billing-bill-resource-invoicing-taxes-tax";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import {
  DiscountsResourceDiscountAmount,
  External$DiscountsResourceDiscountAmount,
  Schemas$DiscountsResourceDiscountAmount,
} from "./discounts-resource-discount-amount";
import {
  External$InvoiceLineItemPeriod,
  InvoiceLineItemPeriod,
  Schemas$InvoiceLineItemPeriod,
} from "./invoice-line-item-period";
import {
  External$InvoicesResourcePretaxCreditAmount,
  InvoicesResourcePretaxCreditAmount,
  Schemas$InvoicesResourcePretaxCreditAmount,
} from "./invoices-resource-pretax-credit-amount";
import {
  External$LineItemMetadata,
  LineItemMetadata,
  Schemas$LineItemMetadata,
} from "./line-item-metadata";
import {
  External$Subscription,
  Schemas$Subscription,
  Subscription,
} from "./subscription";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Invoice Line Items represent the individual lines within an [invoice](https://stripe.com/docs/api/invoices) and only exist within the context of an invoice.
 *
 * Each line item is backed by either an [invoice item](https://stripe.com/docs/api/invoiceitems) or a [subscription item](https://stripe.com/docs/api/subscription_items).
 */
export type LineItem = {
  /**
   * The amount, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * The amount of discount calculated per discount for this line item.
   */
  discountAmounts?: DiscountsResourceDiscountAmount[] | null | undefined;
  /**
   * If true, discounts will apply to this line item. Always false for prorations.
   */
  discountable: boolean;
  /**
   * The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: (string | Discount)[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice that contains this line item.
   */
  invoice?: string | null | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
   */
  metadata: LineItemMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "line_item";
  parent?:
    | BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent
    | undefined;
  period: InvoiceLineItemPeriod;
  /**
   * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.
   */
  pretaxCreditAmounts?: InvoicesResourcePretaxCreditAmount[] | null | undefined;
  pricing?: BillingBillResourceInvoicingPricingPricing | undefined;
  /**
   * The quantity of the subscription, if the line item is a subscription or a proration.
   */
  quantity?: number | null | undefined;
  subscription?: (string | Subscription) | undefined;
  /**
   * The tax information of the line item.
   */
  taxes?: BillingBillResourceInvoicingTaxesTax[] | null | undefined;
};

/**
 * @internal
 * LineItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LineItem = {
  amount: number;
  currency: string;
  description?: string | null | undefined;
  discount_amounts?:
    | External$DiscountsResourceDiscountAmount[]
    | null
    | undefined;
  discountable: boolean;
  discounts: (string | External$Discount)[];
  id: string;
  invoice?: string | null | undefined;
  livemode: boolean;
  metadata: External$LineItemMetadata;
  object: "line_item";
  parent?:
    | External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent
    | undefined;
  period: External$InvoiceLineItemPeriod;
  pretax_credit_amounts?:
    | External$InvoicesResourcePretaxCreditAmount[]
    | null
    | undefined;
  pricing?: External$BillingBillResourceInvoicingPricingPricing | undefined;
  quantity?: number | null | undefined;
  subscription?: (string | External$Subscription) | undefined;
  taxes?: External$BillingBillResourceInvoicingTaxesTax[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LineItem
 */
const SchemaIn$LineItem: z.ZodType<
  LineItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    discount_amounts: z
      .array(z.lazy(() => Schemas$DiscountsResourceDiscountAmount.in))
      .nullable()
      .optional(),
    discountable: z.boolean(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.in)]),
    ),
    id: z.string(),
    invoice: z.string().nullable().optional(),
    livemode: z.boolean(),
    metadata: Schemas$LineItemMetadata.in,
    object: z.enum(["line_item"]),
    parent:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent.in.optional(),
    period: Schemas$InvoiceLineItemPeriod.in,
    pretax_credit_amounts: z
      .array(z.lazy(() => Schemas$InvoicesResourcePretaxCreditAmount.in))
      .nullable()
      .optional(),
    pricing: Schemas$BillingBillResourceInvoicingPricingPricing.in.optional(),
    quantity: z.number().int().nullable().optional(),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.in)])
      .optional(),
    taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.in)
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      discount_amounts: "discountAmounts",
      discountable: "discountable",
      discounts: "discounts",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      parent: "parent",
      period: "period",
      pretax_credit_amounts: "pretaxCreditAmounts",
      pricing: "pricing",
      quantity: "quantity",
      subscription: "subscription",
      taxes: "taxes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LineItem
 */
const SchemaOut$LineItem: z.ZodType<
  External$LineItem, // output type of this zod object
  z.ZodTypeDef,
  LineItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    discountAmounts: z
      .array(z.lazy(() => Schemas$DiscountsResourceDiscountAmount.out))
      .nullable()
      .optional(),
    discountable: z.boolean(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.out)]),
    ),
    id: z.string(),
    invoice: z.string().nullable().optional(),
    livemode: z.boolean(),
    metadata: Schemas$LineItemMetadata.out,
    object: z.enum(["line_item"]),
    parent:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent.out.optional(),
    period: Schemas$InvoiceLineItemPeriod.out,
    pretaxCreditAmounts: z
      .array(z.lazy(() => Schemas$InvoicesResourcePretaxCreditAmount.out))
      .nullable()
      .optional(),
    pricing: Schemas$BillingBillResourceInvoicingPricingPricing.out.optional(),
    quantity: z.number().int().nullable().optional(),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.out)])
      .optional(),
    taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.out)
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      discountAmounts: "discount_amounts",
      discountable: "discountable",
      discounts: "discounts",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      parent: "parent",
      period: "period",
      pretaxCreditAmounts: "pretax_credit_amounts",
      pricing: "pricing",
      quantity: "quantity",
      subscription: "subscription",
      taxes: "taxes",
    });
  });

export const Schemas$LineItem = {
  in: SchemaIn$LineItem,
  out: SchemaOut$LineItem,
};
