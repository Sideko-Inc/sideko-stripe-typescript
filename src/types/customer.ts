import { Address, External$Address, Schemas$Address } from "./address";
import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import {
  CashBalance,
  External$CashBalance,
  Schemas$CashBalance,
} from "./cash-balance";
import {
  CustomerInvoiceCreditBalance,
  External$CustomerInvoiceCreditBalance,
  Schemas$CustomerInvoiceCreditBalance,
} from "./customer-invoice-credit-balance";
import {
  CustomerMetadata,
  External$CustomerMetadata,
  Schemas$CustomerMetadata,
} from "./customer-metadata";
import {
  CustomerSources,
  External$CustomerSources,
  Schemas$CustomerSources,
} from "./customer-sources";
import {
  CustomerSubscriptions,
  External$CustomerSubscriptions,
  Schemas$CustomerSubscriptions,
} from "./customer-subscriptions";
import {
  CustomerTax,
  External$CustomerTax,
  Schemas$CustomerTax,
} from "./customer-tax";
import {
  CustomerTaxIds,
  External$CustomerTaxIds,
  Schemas$CustomerTaxIds,
} from "./customer-tax-ids";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import {
  External$InvoiceSettingCustomerSetting,
  InvoiceSettingCustomerSetting,
  Schemas$InvoiceSettingCustomerSetting,
} from "./invoice-setting-customer-setting";
import { External$Shipping, Schemas$Shipping, Shipping } from "./shipping";
import { External$Source, Schemas$Source, Source } from "./source";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This object represents a customer of your business. Use it to [create recurring charges](https://stripe.com/docs/invoicing/customer), [save payment](https://stripe.com/docs/payments/save-during-payment) and contact information,
 * and track payments that belong to the same customer.
 */
export type Customer = {
  address?: Address | undefined;
  /**
   * The current balance, if any, that's stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that's added to their next invoice. The balance only considers amounts that Stripe hasn't successfully applied to any invoice. It doesn't reflect unpaid invoices. This balance is only taken into account after invoices finalize.
   */
  balance?: number | undefined;
  /**
   * A customer's `Cash balance` represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account.
   */
  cashBalance?: CashBalance | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
   */
  currency?: string | null | undefined;
  /**
   * ID of the default payment source for the customer.
   *
   * If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
   */
  defaultSource?: (string | BankAccount | Card | Source) | undefined;
  /**
   * Tracks the most recent state change on any invoice belonging to the customer. Paying an invoice or marking it uncollectible via the API will set this field to false. An automatic payment failure or passing the `invoice.due_date` will set this field to `true`.
   *
   * If an invoice becomes uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't reset to `false`.
   *
   * If you care whether the customer has paid their most recent subscription invoice, use `subscription.status` instead. Paying or marking uncollectible any customer invoice regardless of whether it is the latest invoice for a subscription will always set this field to `false`.
   */
  delinquent?: boolean | null | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
   * It contains information about when the discount began, when it will end, and what it is applied to.
   *
   * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
   */
  discount?: Discount | undefined;
  /**
   * The customer's email address.
   */
  email?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
   */
  invoiceCreditBalance?: CustomerInvoiceCreditBalance | undefined;
  /**
   * The prefix for the customer used to generate unique invoice numbers.
   */
  invoicePrefix?: string | null | undefined;
  invoiceSettings?: InvoiceSettingCustomerSetting | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CustomerMetadata | undefined;
  /**
   * The customer's full name or business name.
   */
  name?: string | null | undefined;
  /**
   * The suffix of the customer's next invoice number (for example, 0001). When the account uses account level sequencing, this parameter is ignored in API requests and the field omitted in API responses.
   */
  nextInvoiceSequence?: number | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "customer";
  /**
   * The customer's phone number.
   */
  phone?: string | null | undefined;
  /**
   * The customer's preferred locales (languages), ordered by preference.
   */
  preferredLocales?: string[] | null | undefined;
  shipping?: Shipping | undefined;
  /**
   * The customer's payment sources, if any.
   */
  sources?: CustomerSources | undefined;
  /**
   * The customer's current subscriptions, if any.
   */
  subscriptions?: CustomerSubscriptions | undefined;
  tax?: CustomerTax | undefined;
  /**
   * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | null | undefined;
  /**
   * The customer's tax IDs.
   */
  taxIds?: CustomerTaxIds | undefined;
  /**
   * ID of the test clock that this customer belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
};

/**
 * @internal
 * Customer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Customer = {
  address?: External$Address | undefined;
  balance?: number | undefined;
  cash_balance?: External$CashBalance | undefined;
  created: number;
  currency?: string | null | undefined;
  default_source?:
    | (string | External$BankAccount | External$Card | External$Source)
    | undefined;
  delinquent?: boolean | null | undefined;
  description?: string | null | undefined;
  discount?: External$Discount | undefined;
  email?: string | null | undefined;
  id: string;
  invoice_credit_balance?: External$CustomerInvoiceCreditBalance | undefined;
  invoice_prefix?: string | null | undefined;
  invoice_settings?: External$InvoiceSettingCustomerSetting | undefined;
  livemode: boolean;
  metadata?: External$CustomerMetadata | undefined;
  name?: string | null | undefined;
  next_invoice_sequence?: number | undefined;
  object: "customer";
  phone?: string | null | undefined;
  preferred_locales?: string[] | null | undefined;
  shipping?: External$Shipping | undefined;
  sources?: External$CustomerSources | undefined;
  subscriptions?: External$CustomerSubscriptions | undefined;
  tax?: External$CustomerTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | null | undefined;
  tax_ids?: External$CustomerTaxIds | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Customer
 */
const SchemaIn$Customer: z.ZodType<
  Customer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    balance: z.number().int().optional(),
    cash_balance: Schemas$CashBalance.in.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    default_source: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ])
      .optional(),
    delinquent: z.boolean().nullable().optional(),
    description: z.string().nullable().optional(),
    discount: z.lazy(() => Schemas$Discount.in.optional()),
    email: z.string().nullable().optional(),
    id: z.string(),
    invoice_credit_balance: Schemas$CustomerInvoiceCreditBalance.in.optional(),
    invoice_prefix: z.string().nullable().optional(),
    invoice_settings: z.lazy(() =>
      Schemas$InvoiceSettingCustomerSetting.in.optional(),
    ),
    livemode: z.boolean(),
    metadata: Schemas$CustomerMetadata.in.optional(),
    name: z.string().nullable().optional(),
    next_invoice_sequence: z.number().int().optional(),
    object: z.enum(["customer"]),
    phone: z.string().nullable().optional(),
    preferred_locales: z.array(z.string()).nullable().optional(),
    shipping: Schemas$Shipping.in.optional(),
    sources: z.lazy(() => Schemas$CustomerSources.in.optional()),
    subscriptions: z.lazy(() => Schemas$CustomerSubscriptions.in.optional()),
    tax: Schemas$CustomerTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).nullable().optional(),
    tax_ids: z.lazy(() => Schemas$CustomerTaxIds.in.optional()),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cash_balance: "cashBalance",
      created: "created",
      currency: "currency",
      default_source: "defaultSource",
      delinquent: "delinquent",
      description: "description",
      discount: "discount",
      email: "email",
      id: "id",
      invoice_credit_balance: "invoiceCreditBalance",
      invoice_prefix: "invoicePrefix",
      invoice_settings: "invoiceSettings",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      next_invoice_sequence: "nextInvoiceSequence",
      object: "object",
      phone: "phone",
      preferred_locales: "preferredLocales",
      shipping: "shipping",
      sources: "sources",
      subscriptions: "subscriptions",
      tax: "tax",
      tax_exempt: "taxExempt",
      tax_ids: "taxIds",
      test_clock: "testClock",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Customer
 */
const SchemaOut$Customer: z.ZodType<
  External$Customer, // output type of this zod object
  z.ZodTypeDef,
  Customer // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    balance: z.number().int().optional(),
    cashBalance: Schemas$CashBalance.out.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    defaultSource: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$Source.out,
      ])
      .optional(),
    delinquent: z.boolean().nullable().optional(),
    description: z.string().nullable().optional(),
    discount: z.lazy(() => Schemas$Discount.out.optional()),
    email: z.string().nullable().optional(),
    id: z.string(),
    invoiceCreditBalance: Schemas$CustomerInvoiceCreditBalance.out.optional(),
    invoicePrefix: z.string().nullable().optional(),
    invoiceSettings: z.lazy(() =>
      Schemas$InvoiceSettingCustomerSetting.out.optional(),
    ),
    livemode: z.boolean(),
    metadata: Schemas$CustomerMetadata.out.optional(),
    name: z.string().nullable().optional(),
    nextInvoiceSequence: z.number().int().optional(),
    object: z.enum(["customer"]),
    phone: z.string().nullable().optional(),
    preferredLocales: z.array(z.string()).nullable().optional(),
    shipping: Schemas$Shipping.out.optional(),
    sources: z.lazy(() => Schemas$CustomerSources.out.optional()),
    subscriptions: z.lazy(() => Schemas$CustomerSubscriptions.out.optional()),
    tax: Schemas$CustomerTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).nullable().optional(),
    taxIds: z.lazy(() => Schemas$CustomerTaxIds.out.optional()),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cashBalance: "cash_balance",
      created: "created",
      currency: "currency",
      defaultSource: "default_source",
      delinquent: "delinquent",
      description: "description",
      discount: "discount",
      email: "email",
      id: "id",
      invoiceCreditBalance: "invoice_credit_balance",
      invoicePrefix: "invoice_prefix",
      invoiceSettings: "invoice_settings",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      nextInvoiceSequence: "next_invoice_sequence",
      object: "object",
      phone: "phone",
      preferredLocales: "preferred_locales",
      shipping: "shipping",
      sources: "sources",
      subscriptions: "subscriptions",
      tax: "tax",
      taxExempt: "tax_exempt",
      taxIds: "tax_ids",
      testClock: "test_clock",
    });
  });

export const Schemas$Customer = {
  in: SchemaIn$Customer,
  out: SchemaOut$Customer,
};
