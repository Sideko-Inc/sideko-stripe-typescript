import { Account, External$Account, Schemas$Account } from "./account";
import { Address, External$Address, Schemas$Address } from "./address";
import { ApiErrors, External$ApiErrors, Schemas$ApiErrors } from "./api-errors";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  AutomaticTax,
  External$AutomaticTax,
  Schemas$AutomaticTax,
} from "./automatic-tax";
import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import {
  BillingBillResourceInvoicingParentsInvoiceParent,
  External$BillingBillResourceInvoicingParentsInvoiceParent,
  Schemas$BillingBillResourceInvoicingParentsInvoiceParent,
} from "./billing-bill-resource-invoicing-parents-invoice-parent";
import {
  BillingBillResourceInvoicingTaxesTax,
  External$BillingBillResourceInvoicingTaxesTax,
  Schemas$BillingBillResourceInvoicingTaxesTax,
} from "./billing-bill-resource-invoicing-taxes-tax";
import { Card, External$Card, Schemas$Card } from "./card";
import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
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
  DeletedDiscount,
  External$DeletedDiscount,
  Schemas$DeletedDiscount,
} from "./deleted-discount";
import {
  DeletedTaxId,
  External$DeletedTaxId,
  Schemas$DeletedTaxId,
} from "./deleted-tax-id";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import {
  DiscountsResourceDiscountAmount,
  External$DiscountsResourceDiscountAmount,
  Schemas$DiscountsResourceDiscountAmount,
} from "./discounts-resource-discount-amount";
import {
  External$InvoiceLines,
  InvoiceLines,
  Schemas$InvoiceLines,
} from "./invoice-lines";
import {
  External$InvoiceMetadata,
  InvoiceMetadata,
  Schemas$InvoiceMetadata,
} from "./invoice-metadata";
import {
  External$InvoicePayments,
  InvoicePayments,
  Schemas$InvoicePayments,
} from "./invoice-payments";
import {
  External$InvoiceSettingCustomField,
  InvoiceSettingCustomField,
  Schemas$InvoiceSettingCustomField,
} from "./invoice-setting-custom-field";
import {
  External$InvoiceThresholdReason,
  InvoiceThresholdReason,
  Schemas$InvoiceThresholdReason,
} from "./invoice-threshold-reason";
import {
  External$InvoicesPaymentSettings,
  InvoicesPaymentSettings,
  Schemas$InvoicesPaymentSettings,
} from "./invoices-payment-settings";
import {
  External$InvoicesResourceConfirmationSecret,
  InvoicesResourceConfirmationSecret,
  Schemas$InvoicesResourceConfirmationSecret,
} from "./invoices-resource-confirmation-secret";
import {
  External$InvoicesResourceFromInvoice,
  InvoicesResourceFromInvoice,
  Schemas$InvoicesResourceFromInvoice,
} from "./invoices-resource-from-invoice";
import {
  External$InvoicesResourceInvoiceRendering,
  InvoicesResourceInvoiceRendering,
  Schemas$InvoicesResourceInvoiceRendering,
} from "./invoices-resource-invoice-rendering";
import {
  External$InvoicesResourceInvoiceTaxId,
  InvoicesResourceInvoiceTaxId,
  Schemas$InvoicesResourceInvoiceTaxId,
} from "./invoices-resource-invoice-tax-id";
import {
  External$InvoicesResourcePretaxCreditAmount,
  InvoicesResourcePretaxCreditAmount,
  Schemas$InvoicesResourcePretaxCreditAmount,
} from "./invoices-resource-pretax-credit-amount";
import {
  External$InvoicesResourceShippingCost,
  InvoicesResourceShippingCost,
  Schemas$InvoicesResourceShippingCost,
} from "./invoices-resource-shipping-cost";
import {
  External$InvoicesResourceStatusTransitions,
  InvoicesResourceStatusTransitions,
  Schemas$InvoicesResourceStatusTransitions,
} from "./invoices-resource-status-transitions";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import { External$Shipping, Schemas$Shipping, Shipping } from "./shipping";
import { External$Source, Schemas$Source, Source } from "./source";
import { External$TaxId, Schemas$TaxId, TaxId } from "./tax-id";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Invoices are statements of amounts owed by a customer, and are either
 * generated one-off, or generated periodically from a subscription.
 *
 * They contain [invoice items](https://stripe.com/docs/api#invoiceitems), and proration adjustments
 * that may be caused by subscription upgrades/downgrades (if necessary).
 *
 * If your invoice is configured to be billed through automatic charges,
 * Stripe automatically finalizes your invoice and attempts payment. Note
 * that finalizing the invoice,
 * [when automatic](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection), does
 * not happen immediately as the invoice is created. Stripe waits
 * until one hour after the last webhook was successfully sent (or the last
 * webhook timed out after failing). If you (and the platforms you may have
 * connected to) have no webhooks configured, Stripe waits one hour after
 * creation to finalize the invoice.
 *
 * If your invoice is configured to be billed by sending an email, then based on your
 * [email settings](https://dashboard.stripe.com/account/billing/automatic),
 * Stripe will email the invoice to your customer and await payment. These
 * emails can contain a link to a hosted page to pay the invoice.
 *
 * Stripe applies any customer credit on the account before determining the
 * amount due for the invoice (i.e., the amount that will be actually
 * charged). If the amount due for the invoice is less than Stripe's [minimum allowed charge
 * per currency](/docs/currencies#minimum-and-maximum-charge-amounts), the
 * invoice is automatically marked paid, and we add the amount due to the
 * customer's credit balance which is applied to the next invoice.
 *
 * More details on the customer's credit balance are
 * [here](https://stripe.com/docs/billing/customer/balance).
 *
 * Related guide: [Send invoices to customers](https://stripe.com/docs/billing/invoices/sending)
 */
export type Invoice = {
  /**
   * The country of the business associated with this invoice, most often the business creating the invoice.
   */
  accountCountry?: string | null | undefined;
  /**
   * The public name of the business associated with this invoice, most often the business creating the invoice.
   */
  accountName?: string | null | undefined;
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: (string | TaxId | DeletedTaxId)[] | null | undefined;
  /**
   * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
   */
  amountDue: number;
  /**
   * Amount that was overpaid on the invoice. The amount overpaid is credited to the customer's credit balance.
   */
  amountOverpaid: number;
  /**
   * The amount, in cents (or local equivalent), that was paid.
   */
  amountPaid: number;
  /**
   * The difference between amount_due and amount_paid, in cents (or local equivalent).
   */
  amountRemaining: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping: number;
  /**
   * ID of the Connect Application that created the invoice.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  /**
   * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule. If a failure is returned with a non-retryable return code, the invoice can no longer be retried unless a new payment method is obtained. Retries will continue to be scheduled, and attempt_count will continue to increment, but retries will only be executed if a new payment method is obtained.
   */
  attemptCount: number;
  /**
   * Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
   */
  attempted: boolean;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance: boolean;
  automaticTax: AutomaticTax;
  /**
   * The time when this invoice is currently scheduled to be automatically finalized. The field will be `null` if the invoice is not scheduled to finalize in the future. If the invoice is not in the draft state, this field will always be `null` - see `finalized_at` for the time when an already-finalized invoice was finalized.
   */
  automaticallyFinalizesAt?: number | null | undefined;
  /**
   * Indicates the reason why the invoice was created.
   *
   * * `manual`: Unrelated to a subscription, for example, created via the invoice editor.
   * * `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
   * * `subscription_create`: A new subscription was created.
   * * `subscription_cycle`: A subscription advanced into a new period.
   * * `subscription_threshold`: A subscription reached a billing threshold.
   * * `subscription_update`: A subscription was updated.
   * * `upcoming`: Reserved for simulated invoices, per the upcoming invoice endpoint.
   */
  billingReason?:
    | (
        | "automatic_pending_invoice_item_invoice"
        | "manual"
        | "quote_accept"
        | "subscription"
        | "subscription_create"
        | "subscription_cycle"
        | "subscription_threshold"
        | "subscription_update"
        | "upcoming"
      )
    | null
    | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
   */
  collectionMethod: "charge_automatically" | "send_invoice";
  confirmationSecret?: InvoicesResourceConfirmationSecret | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Custom fields displayed on the invoice.
   */
  customFields?: InvoiceSettingCustomField[] | null | undefined;
  /**
   * The ID of the customer who will be billed.
   */
  customer: string | Customer | DeletedCustomer;
  customerAddress?: Address | undefined;
  /**
   * The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerEmail?: string | null | undefined;
  /**
   * The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerName?: string | null | undefined;
  /**
   * The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerPhone?: string | null | undefined;
  customerShipping?: Shipping | undefined;
  /**
   * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerTaxExempt?: ("exempt" | "none" | "reverse") | null | undefined;
  /**
   * The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
   */
  customerTaxIds?: InvoicesResourceInvoiceTaxId[] | null | undefined;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: (string | PaymentMethod) | undefined;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: (string | BankAccount | Card | Source) | undefined;
  /**
   * The tax rates applied to this invoice, if any.
   */
  defaultTaxRates: TaxRate[];
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string | null | undefined;
  /**
   * The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: (string | Discount | DeletedDiscount)[];
  /**
   * The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
   */
  dueDate?: number | null | undefined;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: number | null | undefined;
  /**
   * Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
   */
  endingBalance?: number | null | undefined;
  /**
   * Footer displayed on the invoice.
   */
  footer?: string | null | undefined;
  fromInvoice?: InvoicesResourceFromInvoice | undefined;
  /**
   * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
   */
  hostedInvoiceUrl?: string | null | undefined;
  /**
   * Unique identifier for the object. This property is always present unless the invoice is an upcoming invoice. See [Retrieve an upcoming invoice](https://stripe.com/docs/api/invoices/upcoming) for more details.
   */
  id: string;
  /**
   * The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
   */
  invoicePdf?: string | null | undefined;
  issuer: ConnectAccountReference;
  lastFinalizationError?: ApiErrors | undefined;
  /**
   * The ID of the most recent non-draft revision of this invoice
   */
  latestRevision?: (string | Invoice) | undefined;
  /**
   * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
   */
  lines: InvoiceLines;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: InvoiceMetadata | null | undefined;
  /**
   * The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
   */
  nextPaymentAttempt?: number | null | undefined;
  /**
   * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
   */
  number?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "invoice";
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  parent?: BillingBillResourceInvoicingParentsInvoiceParent | undefined;
  paymentSettings: InvoicesPaymentSettings;
  /**
   * Payments for this invoice
   */
  payments?: InvoicePayments | undefined;
  /**
   * End of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
   */
  periodEnd: number;
  /**
   * Start of the usage period during which invoice items were added to this invoice. This looks back one period for a subscription invoice. Use the [line item period](/api/invoices/line_item#invoice_line_item_object-period) to get the service period for each price.
   */
  periodStart: number;
  /**
   * Total amount of all post-payment credit notes issued for this invoice.
   */
  postPaymentCreditNotesAmount: number;
  /**
   * Total amount of all pre-payment credit notes issued for this invoice.
   */
  prePaymentCreditNotesAmount: number;
  /**
   * This is the transaction number that appears on email receipts sent for this invoice.
   */
  receiptNumber?: string | null | undefined;
  rendering?: InvoicesResourceInvoiceRendering | undefined;
  shippingCost?: InvoicesResourceShippingCost | undefined;
  shippingDetails?: Shipping | undefined;
  /**
   * Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. For revision invoices, this also includes any customer balance that was applied to the original invoice.
   */
  startingBalance: number;
  /**
   * Extra information about an invoice for the customer's credit card statement.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
   */
  status?:
    | ("draft" | "open" | "paid" | "uncollectible" | "void")
    | null
    | undefined;
  statusTransitions: InvoicesResourceStatusTransitions;
  /**
   * Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or exclusive tax is applied. Item discounts are already incorporated
   */
  subtotal: number;
  /**
   * The integer amount in cents (or local equivalent) representing the subtotal of the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
   */
  subtotalExcludingTax?: number | null | undefined;
  /**
   * ID of the test clock this invoice belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
  thresholdReason?: InvoiceThresholdReason | undefined;
  /**
   * Total after discounts and taxes.
   */
  total: number;
  /**
   * The aggregate amounts calculated per discount across all line items.
   */
  totalDiscountAmounts?: DiscountsResourceDiscountAmount[] | null | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the invoice including all discounts but excluding all tax.
   */
  totalExcludingTax?: number | null | undefined;
  /**
   * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this invoice. This is a combined list of total_pretax_credit_amounts across all invoice line items.
   */
  totalPretaxCreditAmounts?:
    | InvoicesResourcePretaxCreditAmount[]
    | null
    | undefined;
  /**
   * The aggregate tax information of all line items.
   */
  totalTaxes?: BillingBillResourceInvoicingTaxesTax[] | null | undefined;
  /**
   * Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.
   */
  webhooksDeliveredAt?: number | null | undefined;
};

/**
 * @internal
 * Invoice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Invoice = {
  account_country?: string | null | undefined;
  account_name?: string | null | undefined;
  account_tax_ids?:
    | (string | External$TaxId | External$DeletedTaxId)[]
    | null
    | undefined;
  amount_due: number;
  amount_overpaid: number;
  amount_paid: number;
  amount_remaining: number;
  amount_shipping: number;
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  attempt_count: number;
  attempted: boolean;
  auto_advance: boolean;
  automatic_tax: External$AutomaticTax;
  automatically_finalizes_at?: number | null | undefined;
  billing_reason?:
    | (
        | "automatic_pending_invoice_item_invoice"
        | "manual"
        | "quote_accept"
        | "subscription"
        | "subscription_create"
        | "subscription_cycle"
        | "subscription_threshold"
        | "subscription_update"
        | "upcoming"
      )
    | null
    | undefined;
  collection_method: "charge_automatically" | "send_invoice";
  confirmation_secret?: External$InvoicesResourceConfirmationSecret | undefined;
  created: number;
  currency: string;
  custom_fields?: External$InvoiceSettingCustomField[] | null | undefined;
  customer: string | External$Customer | External$DeletedCustomer;
  customer_address?: External$Address | undefined;
  customer_email?: string | null | undefined;
  customer_name?: string | null | undefined;
  customer_phone?: string | null | undefined;
  customer_shipping?: External$Shipping | undefined;
  customer_tax_exempt?: ("exempt" | "none" | "reverse") | null | undefined;
  customer_tax_ids?: External$InvoicesResourceInvoiceTaxId[] | null | undefined;
  default_payment_method?: (string | External$PaymentMethod) | undefined;
  default_source?:
    | (string | External$BankAccount | External$Card | External$Source)
    | undefined;
  default_tax_rates: External$TaxRate[];
  description?: string | null | undefined;
  discounts: (string | External$Discount | External$DeletedDiscount)[];
  due_date?: number | null | undefined;
  effective_at?: number | null | undefined;
  ending_balance?: number | null | undefined;
  footer?: string | null | undefined;
  from_invoice?: External$InvoicesResourceFromInvoice | undefined;
  hosted_invoice_url?: string | null | undefined;
  id: string;
  invoice_pdf?: string | null | undefined;
  issuer: External$ConnectAccountReference;
  last_finalization_error?: External$ApiErrors | undefined;
  latest_revision?: (string | External$Invoice) | undefined;
  lines: External$InvoiceLines;
  livemode: boolean;
  metadata?: External$InvoiceMetadata | null | undefined;
  next_payment_attempt?: number | null | undefined;
  number?: string | null | undefined;
  object: "invoice";
  on_behalf_of?: (string | External$Account) | undefined;
  parent?:
    | External$BillingBillResourceInvoicingParentsInvoiceParent
    | undefined;
  payment_settings: External$InvoicesPaymentSettings;
  payments?: External$InvoicePayments | undefined;
  period_end: number;
  period_start: number;
  post_payment_credit_notes_amount: number;
  pre_payment_credit_notes_amount: number;
  receipt_number?: string | null | undefined;
  rendering?: External$InvoicesResourceInvoiceRendering | undefined;
  shipping_cost?: External$InvoicesResourceShippingCost | undefined;
  shipping_details?: External$Shipping | undefined;
  starting_balance: number;
  statement_descriptor?: string | null | undefined;
  status?:
    | ("draft" | "open" | "paid" | "uncollectible" | "void")
    | null
    | undefined;
  status_transitions: External$InvoicesResourceStatusTransitions;
  subtotal: number;
  subtotal_excluding_tax?: number | null | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
  threshold_reason?: External$InvoiceThresholdReason | undefined;
  total: number;
  total_discount_amounts?:
    | External$DiscountsResourceDiscountAmount[]
    | null
    | undefined;
  total_excluding_tax?: number | null | undefined;
  total_pretax_credit_amounts?:
    | External$InvoicesResourcePretaxCreditAmount[]
    | null
    | undefined;
  total_taxes?:
    | External$BillingBillResourceInvoicingTaxesTax[]
    | null
    | undefined;
  webhooks_delivered_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Invoice
 */
const SchemaIn$Invoice: z.ZodType<
  Invoice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_country: z.string().nullable().optional(),
    account_name: z.string().nullable().optional(),
    account_tax_ids: z
      .array(
        z.union([
          z.string(),
          z.lazy(() => Schemas$TaxId.in),
          Schemas$DeletedTaxId.in,
        ]),
      )
      .nullable()
      .optional(),
    amount_due: z.number().int(),
    amount_overpaid: z.number().int(),
    amount_paid: z.number().int(),
    amount_remaining: z.number().int(),
    amount_shipping: z.number().int(),
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    attempt_count: z.number().int(),
    attempted: z.boolean(),
    auto_advance: z.boolean(),
    automatic_tax: z.lazy(() => Schemas$AutomaticTax.in),
    automatically_finalizes_at: z.number().int().nullable().optional(),
    billing_reason: z
      .enum([
        "automatic_pending_invoice_item_invoice",
        "manual",
        "quote_accept",
        "subscription",
        "subscription_create",
        "subscription_cycle",
        "subscription_threshold",
        "subscription_update",
        "upcoming",
      ])
      .nullable()
      .optional(),
    collection_method: z.enum(["charge_automatically", "send_invoice"]),
    confirmation_secret:
      Schemas$InvoicesResourceConfirmationSecret.in.optional(),
    created: z.number().int(),
    currency: z.string(),
    custom_fields: z
      .array(Schemas$InvoiceSettingCustomField.in)
      .nullable()
      .optional(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    customer_address: Schemas$Address.in.optional(),
    customer_email: z.string().nullable().optional(),
    customer_name: z.string().nullable().optional(),
    customer_phone: z.string().nullable().optional(),
    customer_shipping: Schemas$Shipping.in.optional(),
    customer_tax_exempt: z
      .enum(["exempt", "none", "reverse"])
      .nullable()
      .optional(),
    customer_tax_ids: z
      .array(Schemas$InvoicesResourceInvoiceTaxId.in)
      .nullable()
      .optional(),
    default_payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    default_source: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ])
      .optional(),
    default_tax_rates: z.array(Schemas$TaxRate.in),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([
        z.string(),
        z.lazy(() => Schemas$Discount.in),
        z.lazy(() => Schemas$DeletedDiscount.in),
      ]),
    ),
    due_date: z.number().int().nullable().optional(),
    effective_at: z.number().int().nullable().optional(),
    ending_balance: z.number().int().nullable().optional(),
    footer: z.string().nullable().optional(),
    from_invoice: z.lazy(() =>
      Schemas$InvoicesResourceFromInvoice.in.optional(),
    ),
    hosted_invoice_url: z.string().nullable().optional(),
    id: z.string(),
    invoice_pdf: z.string().nullable().optional(),
    issuer: z.lazy(() => Schemas$ConnectAccountReference.in),
    last_finalization_error: z.lazy(() => Schemas$ApiErrors.in.optional()),
    latest_revision: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.in)])
      .optional(),
    lines: z.lazy(() => Schemas$InvoiceLines.in),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceMetadata.in.nullable().optional(),
    next_payment_attempt: z.number().int().nullable().optional(),
    number: z.string().nullable().optional(),
    object: z.enum(["invoice"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    parent: z.lazy(() =>
      Schemas$BillingBillResourceInvoicingParentsInvoiceParent.in.optional(),
    ),
    payment_settings: Schemas$InvoicesPaymentSettings.in,
    payments: z.lazy(() => Schemas$InvoicePayments.in.optional()),
    period_end: z.number().int(),
    period_start: z.number().int(),
    post_payment_credit_notes_amount: z.number().int(),
    pre_payment_credit_notes_amount: z.number().int(),
    receipt_number: z.string().nullable().optional(),
    rendering: Schemas$InvoicesResourceInvoiceRendering.in.optional(),
    shipping_cost: Schemas$InvoicesResourceShippingCost.in.optional(),
    shipping_details: Schemas$Shipping.in.optional(),
    starting_balance: z.number().int(),
    statement_descriptor: z.string().nullable().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .nullable()
      .optional(),
    status_transitions: Schemas$InvoicesResourceStatusTransitions.in,
    subtotal: z.number().int(),
    subtotal_excluding_tax: z.number().int().nullable().optional(),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
    threshold_reason: Schemas$InvoiceThresholdReason.in.optional(),
    total: z.number().int(),
    total_discount_amounts: z
      .array(z.lazy(() => Schemas$DiscountsResourceDiscountAmount.in))
      .nullable()
      .optional(),
    total_excluding_tax: z.number().int().nullable().optional(),
    total_pretax_credit_amounts: z
      .array(z.lazy(() => Schemas$InvoicesResourcePretaxCreditAmount.in))
      .nullable()
      .optional(),
    total_taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.in)
      .nullable()
      .optional(),
    webhooks_delivered_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_country: "accountCountry",
      account_name: "accountName",
      account_tax_ids: "accountTaxIds",
      amount_due: "amountDue",
      amount_overpaid: "amountOverpaid",
      amount_paid: "amountPaid",
      amount_remaining: "amountRemaining",
      amount_shipping: "amountShipping",
      application: "application",
      attempt_count: "attemptCount",
      attempted: "attempted",
      auto_advance: "autoAdvance",
      automatic_tax: "automaticTax",
      automatically_finalizes_at: "automaticallyFinalizesAt",
      billing_reason: "billingReason",
      collection_method: "collectionMethod",
      confirmation_secret: "confirmationSecret",
      created: "created",
      currency: "currency",
      custom_fields: "customFields",
      customer: "customer",
      customer_address: "customerAddress",
      customer_email: "customerEmail",
      customer_name: "customerName",
      customer_phone: "customerPhone",
      customer_shipping: "customerShipping",
      customer_tax_exempt: "customerTaxExempt",
      customer_tax_ids: "customerTaxIds",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      due_date: "dueDate",
      effective_at: "effectiveAt",
      ending_balance: "endingBalance",
      footer: "footer",
      from_invoice: "fromInvoice",
      hosted_invoice_url: "hostedInvoiceUrl",
      id: "id",
      invoice_pdf: "invoicePdf",
      issuer: "issuer",
      last_finalization_error: "lastFinalizationError",
      latest_revision: "latestRevision",
      lines: "lines",
      livemode: "livemode",
      metadata: "metadata",
      next_payment_attempt: "nextPaymentAttempt",
      number: "number",
      object: "object",
      on_behalf_of: "onBehalfOf",
      parent: "parent",
      payment_settings: "paymentSettings",
      payments: "payments",
      period_end: "periodEnd",
      period_start: "periodStart",
      post_payment_credit_notes_amount: "postPaymentCreditNotesAmount",
      pre_payment_credit_notes_amount: "prePaymentCreditNotesAmount",
      receipt_number: "receiptNumber",
      rendering: "rendering",
      shipping_cost: "shippingCost",
      shipping_details: "shippingDetails",
      starting_balance: "startingBalance",
      statement_descriptor: "statementDescriptor",
      status: "status",
      status_transitions: "statusTransitions",
      subtotal: "subtotal",
      subtotal_excluding_tax: "subtotalExcludingTax",
      test_clock: "testClock",
      threshold_reason: "thresholdReason",
      total: "total",
      total_discount_amounts: "totalDiscountAmounts",
      total_excluding_tax: "totalExcludingTax",
      total_pretax_credit_amounts: "totalPretaxCreditAmounts",
      total_taxes: "totalTaxes",
      webhooks_delivered_at: "webhooksDeliveredAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Invoice
 */
const SchemaOut$Invoice: z.ZodType<
  External$Invoice, // output type of this zod object
  z.ZodTypeDef,
  Invoice // the object to be transformed
> = z
  .object({
    accountCountry: z.string().nullable().optional(),
    accountName: z.string().nullable().optional(),
    accountTaxIds: z
      .array(
        z.union([
          z.string(),
          z.lazy(() => Schemas$TaxId.out),
          Schemas$DeletedTaxId.out,
        ]),
      )
      .nullable()
      .optional(),
    amountDue: z.number().int(),
    amountOverpaid: z.number().int(),
    amountPaid: z.number().int(),
    amountRemaining: z.number().int(),
    amountShipping: z.number().int(),
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    attemptCount: z.number().int(),
    attempted: z.boolean(),
    autoAdvance: z.boolean(),
    automaticTax: z.lazy(() => Schemas$AutomaticTax.out),
    automaticallyFinalizesAt: z.number().int().nullable().optional(),
    billingReason: z
      .enum([
        "automatic_pending_invoice_item_invoice",
        "manual",
        "quote_accept",
        "subscription",
        "subscription_create",
        "subscription_cycle",
        "subscription_threshold",
        "subscription_update",
        "upcoming",
      ])
      .nullable()
      .optional(),
    collectionMethod: z.enum(["charge_automatically", "send_invoice"]),
    confirmationSecret:
      Schemas$InvoicesResourceConfirmationSecret.out.optional(),
    created: z.number().int(),
    currency: z.string(),
    customFields: z
      .array(Schemas$InvoiceSettingCustomField.out)
      .nullable()
      .optional(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    customerAddress: Schemas$Address.out.optional(),
    customerEmail: z.string().nullable().optional(),
    customerName: z.string().nullable().optional(),
    customerPhone: z.string().nullable().optional(),
    customerShipping: Schemas$Shipping.out.optional(),
    customerTaxExempt: z
      .enum(["exempt", "none", "reverse"])
      .nullable()
      .optional(),
    customerTaxIds: z
      .array(Schemas$InvoicesResourceInvoiceTaxId.out)
      .nullable()
      .optional(),
    defaultPaymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    defaultSource: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$Source.out,
      ])
      .optional(),
    defaultTaxRates: z.array(Schemas$TaxRate.out),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([
        z.string(),
        z.lazy(() => Schemas$Discount.out),
        z.lazy(() => Schemas$DeletedDiscount.out),
      ]),
    ),
    dueDate: z.number().int().nullable().optional(),
    effectiveAt: z.number().int().nullable().optional(),
    endingBalance: z.number().int().nullable().optional(),
    footer: z.string().nullable().optional(),
    fromInvoice: z.lazy(() =>
      Schemas$InvoicesResourceFromInvoice.out.optional(),
    ),
    hostedInvoiceUrl: z.string().nullable().optional(),
    id: z.string(),
    invoicePdf: z.string().nullable().optional(),
    issuer: z.lazy(() => Schemas$ConnectAccountReference.out),
    lastFinalizationError: z.lazy(() => Schemas$ApiErrors.out.optional()),
    latestRevision: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.out)])
      .optional(),
    lines: z.lazy(() => Schemas$InvoiceLines.out),
    livemode: z.boolean(),
    metadata: Schemas$InvoiceMetadata.out.nullable().optional(),
    nextPaymentAttempt: z.number().int().nullable().optional(),
    number: z.string().nullable().optional(),
    object: z.enum(["invoice"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    parent: z.lazy(() =>
      Schemas$BillingBillResourceInvoicingParentsInvoiceParent.out.optional(),
    ),
    paymentSettings: Schemas$InvoicesPaymentSettings.out,
    payments: z.lazy(() => Schemas$InvoicePayments.out.optional()),
    periodEnd: z.number().int(),
    periodStart: z.number().int(),
    postPaymentCreditNotesAmount: z.number().int(),
    prePaymentCreditNotesAmount: z.number().int(),
    receiptNumber: z.string().nullable().optional(),
    rendering: Schemas$InvoicesResourceInvoiceRendering.out.optional(),
    shippingCost: Schemas$InvoicesResourceShippingCost.out.optional(),
    shippingDetails: Schemas$Shipping.out.optional(),
    startingBalance: z.number().int(),
    statementDescriptor: z.string().nullable().optional(),
    status: z
      .enum(["draft", "open", "paid", "uncollectible", "void"])
      .nullable()
      .optional(),
    statusTransitions: Schemas$InvoicesResourceStatusTransitions.out,
    subtotal: z.number().int(),
    subtotalExcludingTax: z.number().int().nullable().optional(),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
    thresholdReason: Schemas$InvoiceThresholdReason.out.optional(),
    total: z.number().int(),
    totalDiscountAmounts: z
      .array(z.lazy(() => Schemas$DiscountsResourceDiscountAmount.out))
      .nullable()
      .optional(),
    totalExcludingTax: z.number().int().nullable().optional(),
    totalPretaxCreditAmounts: z
      .array(z.lazy(() => Schemas$InvoicesResourcePretaxCreditAmount.out))
      .nullable()
      .optional(),
    totalTaxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.out)
      .nullable()
      .optional(),
    webhooksDeliveredAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountCountry: "account_country",
      accountName: "account_name",
      accountTaxIds: "account_tax_ids",
      amountDue: "amount_due",
      amountOverpaid: "amount_overpaid",
      amountPaid: "amount_paid",
      amountRemaining: "amount_remaining",
      amountShipping: "amount_shipping",
      application: "application",
      attemptCount: "attempt_count",
      attempted: "attempted",
      autoAdvance: "auto_advance",
      automaticTax: "automatic_tax",
      automaticallyFinalizesAt: "automatically_finalizes_at",
      billingReason: "billing_reason",
      collectionMethod: "collection_method",
      confirmationSecret: "confirmation_secret",
      created: "created",
      currency: "currency",
      customFields: "custom_fields",
      customer: "customer",
      customerAddress: "customer_address",
      customerEmail: "customer_email",
      customerName: "customer_name",
      customerPhone: "customer_phone",
      customerShipping: "customer_shipping",
      customerTaxExempt: "customer_tax_exempt",
      customerTaxIds: "customer_tax_ids",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      dueDate: "due_date",
      effectiveAt: "effective_at",
      endingBalance: "ending_balance",
      footer: "footer",
      fromInvoice: "from_invoice",
      hostedInvoiceUrl: "hosted_invoice_url",
      id: "id",
      invoicePdf: "invoice_pdf",
      issuer: "issuer",
      lastFinalizationError: "last_finalization_error",
      latestRevision: "latest_revision",
      lines: "lines",
      livemode: "livemode",
      metadata: "metadata",
      nextPaymentAttempt: "next_payment_attempt",
      number: "number",
      object: "object",
      onBehalfOf: "on_behalf_of",
      parent: "parent",
      paymentSettings: "payment_settings",
      payments: "payments",
      periodEnd: "period_end",
      periodStart: "period_start",
      postPaymentCreditNotesAmount: "post_payment_credit_notes_amount",
      prePaymentCreditNotesAmount: "pre_payment_credit_notes_amount",
      receiptNumber: "receipt_number",
      rendering: "rendering",
      shippingCost: "shipping_cost",
      shippingDetails: "shipping_details",
      startingBalance: "starting_balance",
      statementDescriptor: "statement_descriptor",
      status: "status",
      statusTransitions: "status_transitions",
      subtotal: "subtotal",
      subtotalExcludingTax: "subtotal_excluding_tax",
      testClock: "test_clock",
      thresholdReason: "threshold_reason",
      total: "total",
      totalDiscountAmounts: "total_discount_amounts",
      totalExcludingTax: "total_excluding_tax",
      totalPretaxCreditAmounts: "total_pretax_credit_amounts",
      totalTaxes: "total_taxes",
      webhooksDeliveredAt: "webhooks_delivered_at",
    });
  });

export const Schemas$Invoice = {
  in: SchemaIn$Invoice,
  out: SchemaOut$Invoice,
};
