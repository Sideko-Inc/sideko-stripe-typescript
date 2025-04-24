import {
  BillingBillResourceInvoiceItemParentsInvoiceItemParent,
  External$BillingBillResourceInvoiceItemParentsInvoiceItemParent,
  Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemParent,
} from "./billing-bill-resource-invoice-item-parents-invoice-item-parent";
import {
  BillingBillResourceInvoicingPricingPricing,
  External$BillingBillResourceInvoicingPricingPricing,
  Schemas$BillingBillResourceInvoicingPricingPricing,
} from "./billing-bill-resource-invoicing-pricing-pricing";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$InvoiceLineItemPeriod,
  InvoiceLineItemPeriod,
  Schemas$InvoiceLineItemPeriod,
} from "./invoice-line-item-period";
import {
  External$InvoiceitemMetadata,
  InvoiceitemMetadata,
  Schemas$InvoiceitemMetadata,
} from "./invoiceitem-metadata";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Invoice Items represent the component lines of an [invoice](https://stripe.com/docs/api/invoices). An invoice item is added to an
 * invoice by creating or updating it with an `invoice` field, at which point it will be included as
 * [an invoice line item](https://stripe.com/docs/api/invoices/line_item) within
 * [invoice.lines](https://stripe.com/docs/api/invoices/object#invoice_object-lines).
 *
 * Invoice Items can be created before you are ready to actually send the invoice. This can be particularly useful when combined
 * with a [subscription](https://stripe.com/docs/api/subscriptions). Sometimes you want to add a charge or credit to a customer, but actually charge
 * or credit the customer’s card only at the end of a regular billing cycle. This is useful for combining several charges
 * (to minimize per-transaction fees), or for having Stripe tabulate your usage-based billing totals.
 *
 * Related guides: [Integrate with the Invoicing API](https://stripe.com/docs/invoicing/integration), [Subscription Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
 */
export type Invoiceitem = {
  /**
   * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of the customer who will be billed when this invoice item is billed.
   */
  customer: string | Customer | DeletedCustomer;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  date: number;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * If true, discounts will apply to this invoice item. Always false for prorations.
   */
  discountable: boolean;
  /**
   * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts?: (string | Discount)[] | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice this invoice item belongs to.
   */
  invoice?: (string | Invoice) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: InvoiceitemMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "invoiceitem";
  parent?: BillingBillResourceInvoiceItemParentsInvoiceItemParent | undefined;
  period: InvoiceLineItemPeriod;
  pricing?: BillingBillResourceInvoicingPricingPricing | undefined;
  /**
   * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
   */
  proration: boolean;
  /**
   * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
   */
  quantity: number;
  /**
   * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
   */
  taxRates?: TaxRate[] | null | undefined;
  /**
   * ID of the test clock this invoice item belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
};

/**
 * @internal
 * Invoiceitem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Invoiceitem = {
  amount: number;
  currency: string;
  customer: string | External$Customer | External$DeletedCustomer;
  date: number;
  description?: string | null | undefined;
  discountable: boolean;
  discounts?: (string | External$Discount)[] | null | undefined;
  id: string;
  invoice?: (string | External$Invoice) | undefined;
  livemode: boolean;
  metadata?: External$InvoiceitemMetadata | null | undefined;
  object: "invoiceitem";
  parent?:
    | External$BillingBillResourceInvoiceItemParentsInvoiceItemParent
    | undefined;
  period: External$InvoiceLineItemPeriod;
  pricing?: External$BillingBillResourceInvoicingPricingPricing | undefined;
  proration: boolean;
  quantity: number;
  tax_rates?: External$TaxRate[] | null | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Invoiceitem
 */
const SchemaIn$Invoiceitem: z.ZodType<
  Invoiceitem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    date: z.number().int(),
    description: z.string().nullable().optional(),
    discountable: z.boolean(),
    discounts: z
      .array(z.union([z.string(), z.lazy(() => Schemas$Discount.in)]))
      .nullable()
      .optional(),
    id: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]).optional(),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceitemMetadata.in.nullable().optional(),
    object: z.enum(["invoiceitem"]),
    parent:
      Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemParent.in.optional(),
    period: Schemas$InvoiceLineItemPeriod.in,
    pricing: Schemas$BillingBillResourceInvoicingPricingPricing.in.optional(),
    proration: z.boolean(),
    quantity: z.number().int(),
    tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      date: "date",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      parent: "parent",
      period: "period",
      pricing: "pricing",
      proration: "proration",
      quantity: "quantity",
      tax_rates: "taxRates",
      test_clock: "testClock",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Invoiceitem
 */
const SchemaOut$Invoiceitem: z.ZodType<
  External$Invoiceitem, // output type of this zod object
  z.ZodTypeDef,
  Invoiceitem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    date: z.number().int(),
    description: z.string().nullable().optional(),
    discountable: z.boolean(),
    discounts: z
      .array(z.union([z.string(), z.lazy(() => Schemas$Discount.out)]))
      .nullable()
      .optional(),
    id: z.string(),
    invoice: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.out)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceitemMetadata.out.nullable().optional(),
    object: z.enum(["invoiceitem"]),
    parent:
      Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemParent.out.optional(),
    period: Schemas$InvoiceLineItemPeriod.out,
    pricing: Schemas$BillingBillResourceInvoicingPricingPricing.out.optional(),
    proration: z.boolean(),
    quantity: z.number().int(),
    taxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      date: "date",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      parent: "parent",
      period: "period",
      pricing: "pricing",
      proration: "proration",
      quantity: "quantity",
      taxRates: "tax_rates",
      testClock: "test_clock",
    });
  });

export const Schemas$Invoiceitem = {
  in: SchemaIn$Invoiceitem,
  out: SchemaOut$Invoiceitem,
};
