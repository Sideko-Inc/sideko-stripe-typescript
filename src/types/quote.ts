import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedApplication,
  External$DeletedApplication,
  Schemas$DeletedApplication,
} from "./deleted-application";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  DeletedInvoice,
  External$DeletedInvoice,
  Schemas$DeletedInvoice,
} from "./deleted-invoice";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$InvoiceSettingQuoteSetting,
  InvoiceSettingQuoteSetting,
  Schemas$InvoiceSettingQuoteSetting,
} from "./invoice-setting-quote-setting";
import {
  External$QuoteLineItems,
  QuoteLineItems,
  Schemas$QuoteLineItems,
} from "./quote-line-items";
import {
  External$QuoteMetadata,
  QuoteMetadata,
  Schemas$QuoteMetadata,
} from "./quote-metadata";
import {
  External$QuotesResourceAutomaticTax,
  QuotesResourceAutomaticTax,
  Schemas$QuotesResourceAutomaticTax,
} from "./quotes-resource-automatic-tax";
import {
  External$QuotesResourceComputed,
  QuotesResourceComputed,
  Schemas$QuotesResourceComputed,
} from "./quotes-resource-computed";
import {
  External$QuotesResourceFromQuote,
  QuotesResourceFromQuote,
  Schemas$QuotesResourceFromQuote,
} from "./quotes-resource-from-quote";
import {
  External$QuotesResourceStatusTransitions,
  QuotesResourceStatusTransitions,
  Schemas$QuotesResourceStatusTransitions,
} from "./quotes-resource-status-transitions";
import {
  External$QuotesResourceSubscriptionDataSubscriptionData,
  QuotesResourceSubscriptionDataSubscriptionData,
  Schemas$QuotesResourceSubscriptionDataSubscriptionData,
} from "./quotes-resource-subscription-data-subscription-data";
import {
  External$QuotesResourceTotalDetails,
  QuotesResourceTotalDetails,
  Schemas$QuotesResourceTotalDetails,
} from "./quotes-resource-total-details";
import {
  External$QuotesResourceTransferData,
  QuotesResourceTransferData,
  Schemas$QuotesResourceTransferData,
} from "./quotes-resource-transfer-data";
import {
  External$Subscription,
  Schemas$Subscription,
  Subscription,
} from "./subscription";
import {
  External$SubscriptionSchedule1,
  Schemas$SubscriptionSchedule1,
  SubscriptionSchedule1,
} from "./subscription-schedule1";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Quote is a way to model prices that you'd like to provide to a customer.
 * Once accepted, it will automatically create an invoice, subscription or subscription schedule.
 */
export type Quote = {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * ID of the Connect Application that created the quote.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
   */
  applicationFeeAmount?: number | null | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
   */
  applicationFeePercent?: number | null | undefined;
  automaticTax: QuotesResourceAutomaticTax;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod: "charge_automatically" | "send_invoice";
  computed: QuotesResourceComputed;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | null | undefined;
  /**
   * The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * The tax rates applied to this quote.
   */
  defaultTaxRates?: (string | TaxRate)[] | undefined;
  /**
   * A description that will be displayed on the quote PDF.
   */
  description?: string | null | undefined;
  /**
   * The discounts applied to this quote.
   */
  discounts: (string | Discount)[];
  /**
   * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt: number;
  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer?: string | null | undefined;
  fromQuote?: QuotesResourceFromQuote | undefined;
  /**
   * A header that will be displayed on the quote PDF.
   */
  header?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The invoice that was created from this quote.
   */
  invoice?: (string | Invoice | DeletedInvoice) | undefined;
  invoiceSettings: InvoiceSettingQuoteSetting;
  /**
   * A list of items the customer is being quoted for.
   */
  lineItems?: QuoteLineItems | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: QuoteMetadata;
  /**
   * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
   */
  number?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "quote";
  /**
   * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * The status of the quote.
   */
  status: "accepted" | "canceled" | "draft" | "open";
  statusTransitions: QuotesResourceStatusTransitions;
  /**
   * The subscription that was created or updated from this quote.
   */
  subscription?: (string | Subscription) | undefined;
  subscriptionData: QuotesResourceSubscriptionDataSubscriptionData;
  /**
   * The subscription schedule that was created or updated from this quote.
   */
  subscriptionSchedule?: (string | SubscriptionSchedule1) | undefined;
  /**
   * ID of the test clock this quote belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
  totalDetails: QuotesResourceTotalDetails;
  transferData?: QuotesResourceTransferData | undefined;
};

/**
 * @internal
 * Quote without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Quote = {
  amount_subtotal: number;
  amount_total: number;
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  application_fee_amount?: number | null | undefined;
  application_fee_percent?: number | null | undefined;
  automatic_tax: External$QuotesResourceAutomaticTax;
  collection_method: "charge_automatically" | "send_invoice";
  computed: External$QuotesResourceComputed;
  created: number;
  currency?: string | null | undefined;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  default_tax_rates?: (string | External$TaxRate)[] | undefined;
  description?: string | null | undefined;
  discounts: (string | External$Discount)[];
  expires_at: number;
  footer?: string | null | undefined;
  from_quote?: External$QuotesResourceFromQuote | undefined;
  header?: string | null | undefined;
  id: string;
  invoice?: (string | External$Invoice | External$DeletedInvoice) | undefined;
  invoice_settings: External$InvoiceSettingQuoteSetting;
  line_items?: External$QuoteLineItems | undefined;
  livemode: boolean;
  metadata: External$QuoteMetadata;
  number?: string | null | undefined;
  object: "quote";
  on_behalf_of?: (string | External$Account) | undefined;
  status: "accepted" | "canceled" | "draft" | "open";
  status_transitions: External$QuotesResourceStatusTransitions;
  subscription?: (string | External$Subscription) | undefined;
  subscription_data: External$QuotesResourceSubscriptionDataSubscriptionData;
  subscription_schedule?: (string | External$SubscriptionSchedule1) | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
  total_details: External$QuotesResourceTotalDetails;
  transfer_data?: External$QuotesResourceTransferData | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Quote
 */
const SchemaIn$Quote: z.ZodType<
  Quote, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    application_fee_amount: z.number().int().nullable().optional(),
    application_fee_percent: z.number().nullable().optional(),
    automatic_tax: z.lazy(() => Schemas$QuotesResourceAutomaticTax.in),
    collection_method: z.enum(["charge_automatically", "send_invoice"]),
    computed: z.lazy(() => Schemas$QuotesResourceComputed.in),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    default_tax_rates: z
      .array(z.union([z.string(), Schemas$TaxRate.in]))
      .optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.in)]),
    ),
    expires_at: z.number().int(),
    footer: z.string().nullable().optional(),
    from_quote: z.lazy(() => Schemas$QuotesResourceFromQuote.in.optional()),
    header: z.string().nullable().optional(),
    id: z.string(),
    invoice: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Invoice.in),
        Schemas$DeletedInvoice.in,
      ])
      .optional(),
    invoice_settings: z.lazy(() => Schemas$InvoiceSettingQuoteSetting.in),
    line_items: z.lazy(() => Schemas$QuoteLineItems.in.optional()),
    livemode: z.boolean(),
    metadata: Schemas$QuoteMetadata.in,
    number: z.string().nullable().optional(),
    object: z.enum(["quote"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]),
    status_transitions: Schemas$QuotesResourceStatusTransitions.in,
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.in)])
      .optional(),
    subscription_data:
      Schemas$QuotesResourceSubscriptionDataSubscriptionData.in,
    subscription_schedule: z
      .union([z.string(), z.lazy(() => Schemas$SubscriptionSchedule1.in)])
      .optional(),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
    total_details: z.lazy(() => Schemas$QuotesResourceTotalDetails.in),
    transfer_data: z.lazy(() =>
      Schemas$QuotesResourceTransferData.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      application: "application",
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      collection_method: "collectionMethod",
      computed: "computed",
      created: "created",
      currency: "currency",
      customer: "customer",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      expires_at: "expiresAt",
      footer: "footer",
      from_quote: "fromQuote",
      header: "header",
      id: "id",
      invoice: "invoice",
      invoice_settings: "invoiceSettings",
      line_items: "lineItems",
      livemode: "livemode",
      metadata: "metadata",
      number: "number",
      object: "object",
      on_behalf_of: "onBehalfOf",
      status: "status",
      status_transitions: "statusTransitions",
      subscription: "subscription",
      subscription_data: "subscriptionData",
      subscription_schedule: "subscriptionSchedule",
      test_clock: "testClock",
      total_details: "totalDetails",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Quote
 */
const SchemaOut$Quote: z.ZodType<
  External$Quote, // output type of this zod object
  z.ZodTypeDef,
  Quote // the object to be transformed
> = z
  .object({
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    applicationFeeAmount: z.number().int().nullable().optional(),
    applicationFeePercent: z.number().nullable().optional(),
    automaticTax: z.lazy(() => Schemas$QuotesResourceAutomaticTax.out),
    collectionMethod: z.enum(["charge_automatically", "send_invoice"]),
    computed: z.lazy(() => Schemas$QuotesResourceComputed.out),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    defaultTaxRates: z
      .array(z.union([z.string(), Schemas$TaxRate.out]))
      .optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.out)]),
    ),
    expiresAt: z.number().int(),
    footer: z.string().nullable().optional(),
    fromQuote: z.lazy(() => Schemas$QuotesResourceFromQuote.out.optional()),
    header: z.string().nullable().optional(),
    id: z.string(),
    invoice: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Invoice.out),
        Schemas$DeletedInvoice.out,
      ])
      .optional(),
    invoiceSettings: z.lazy(() => Schemas$InvoiceSettingQuoteSetting.out),
    lineItems: z.lazy(() => Schemas$QuoteLineItems.out.optional()),
    livemode: z.boolean(),
    metadata: Schemas$QuoteMetadata.out,
    number: z.string().nullable().optional(),
    object: z.enum(["quote"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    status: z.enum(["accepted", "canceled", "draft", "open"]),
    statusTransitions: Schemas$QuotesResourceStatusTransitions.out,
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.out)])
      .optional(),
    subscriptionData:
      Schemas$QuotesResourceSubscriptionDataSubscriptionData.out,
    subscriptionSchedule: z
      .union([z.string(), z.lazy(() => Schemas$SubscriptionSchedule1.out)])
      .optional(),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
    totalDetails: z.lazy(() => Schemas$QuotesResourceTotalDetails.out),
    transferData: z.lazy(() =>
      Schemas$QuotesResourceTransferData.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      application: "application",
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      collectionMethod: "collection_method",
      computed: "computed",
      created: "created",
      currency: "currency",
      customer: "customer",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      expiresAt: "expires_at",
      footer: "footer",
      fromQuote: "from_quote",
      header: "header",
      id: "id",
      invoice: "invoice",
      invoiceSettings: "invoice_settings",
      lineItems: "line_items",
      livemode: "livemode",
      metadata: "metadata",
      number: "number",
      object: "object",
      onBehalfOf: "on_behalf_of",
      status: "status",
      statusTransitions: "status_transitions",
      subscription: "subscription",
      subscriptionData: "subscription_data",
      subscriptionSchedule: "subscription_schedule",
      testClock: "test_clock",
      totalDetails: "total_details",
      transferData: "transfer_data",
    });
  });

export const Schemas$Quote = {
  in: SchemaIn$Quote,
  out: SchemaOut$Quote,
};
