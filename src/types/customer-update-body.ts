import {
  CustomerUpdateBodyAddressObj0,
  External$CustomerUpdateBodyAddressObj0,
  Schemas$CustomerUpdateBodyAddressObj0,
} from "./customer-update-body-address-obj0";
import {
  CustomerUpdateBodyBankAccountObj0,
  External$CustomerUpdateBodyBankAccountObj0,
  Schemas$CustomerUpdateBodyBankAccountObj0,
} from "./customer-update-body-bank-account-obj0";
import {
  CustomerUpdateBodyCardObj0,
  External$CustomerUpdateBodyCardObj0,
  Schemas$CustomerUpdateBodyCardObj0,
} from "./customer-update-body-card-obj0";
import {
  CustomerUpdateBodyCashBalance,
  External$CustomerUpdateBodyCashBalance,
  Schemas$CustomerUpdateBodyCashBalance,
} from "./customer-update-body-cash-balance";
import {
  CustomerUpdateBodyInvoiceSettings,
  External$CustomerUpdateBodyInvoiceSettings,
  Schemas$CustomerUpdateBodyInvoiceSettings,
} from "./customer-update-body-invoice-settings";
import {
  CustomerUpdateBodyMetadataObj0,
  External$CustomerUpdateBodyMetadataObj0,
  Schemas$CustomerUpdateBodyMetadataObj0,
} from "./customer-update-body-metadata-obj0";
import {
  CustomerUpdateBodyShippingObj0,
  External$CustomerUpdateBodyShippingObj0,
  Schemas$CustomerUpdateBodyShippingObj0,
} from "./customer-update-body-shipping-obj0";
import {
  CustomerUpdateBodyTax,
  External$CustomerUpdateBodyTax,
  Schemas$CustomerUpdateBodyTax,
} from "./customer-update-body-tax";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBody
 */
export type CustomerUpdateBody = {
  /**
   * The customer's address.
   */
  address?: (CustomerUpdateBodyAddressObj0 | string) | undefined;
  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (CustomerUpdateBodyBankAccountObj0 | string) | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerUpdateBodyCardObj0 | string) | undefined;
  /**
   * Balance information and default balance settings for this customer.
   */
  cashBalance?: CustomerUpdateBodyCashBalance | undefined;
  /**
   * ID of Alipay account to make the customer's new default for invoice payments.
   */
  defaultAlipayAccount?: string | undefined;
  /**
   * ID of bank account to make the customer's new default for invoice payments.
   */
  defaultBankAccount?: string | undefined;
  /**
   * ID of card to make the customer's new default for invoice payments.
   */
  defaultCard?: string | undefined;
  /**
   * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
   *
   * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.
   *
   * If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
   */
  defaultSource?: string | undefined;
  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string | undefined;
  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoicePrefix?: string | undefined;
  /**
   * Default invoice settings for this customer.
   */
  invoiceSettings?: CustomerUpdateBodyInvoiceSettings | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The customer's full name or business name.
   */
  name?: string | undefined;
  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  nextInvoiceSequence?: number | undefined;
  /**
   * The customer's phone number.
   */
  phone?: string | undefined;
  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferredLocales?: string[] | undefined;
  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: (CustomerUpdateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  /**
   * Tax details about the customer.
   */
  tax?: CustomerUpdateBodyTax | undefined;
  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((CustomerUpdateBodyAddressObj0 | string) | undefined)
    | (number | undefined)
    | ((CustomerUpdateBodyBankAccountObj0 | string) | undefined)
    | ((CustomerUpdateBodyCardObj0 | string) | undefined)
    | (CustomerUpdateBodyCashBalance | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (CustomerUpdateBodyInvoiceSettings | undefined)
    | ((CustomerUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((CustomerUpdateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (CustomerUpdateBodyTax | undefined)
    | (("exempt" | "none" | "reverse") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBody = {
  address?: (External$CustomerUpdateBodyAddressObj0 | string) | undefined;
  balance?: number | undefined;
  bank_account?:
    | (External$CustomerUpdateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerUpdateBodyCardObj0 | string) | undefined;
  cash_balance?: External$CustomerUpdateBodyCashBalance | undefined;
  default_alipay_account?: string | undefined;
  default_bank_account?: string | undefined;
  default_card?: string | undefined;
  default_source?: string | undefined;
  description?: string | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  invoice_prefix?: string | undefined;
  invoice_settings?: External$CustomerUpdateBodyInvoiceSettings | undefined;
  metadata?: (External$CustomerUpdateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  next_invoice_sequence?: number | undefined;
  phone?: string | undefined;
  preferred_locales?: string[] | undefined;
  shipping?: (External$CustomerUpdateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  tax?: External$CustomerUpdateBodyTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | undefined;

  [additionalProperty: string]:
    | ((External$CustomerUpdateBodyAddressObj0 | string) | undefined)
    | (number | undefined)
    | ((External$CustomerUpdateBodyBankAccountObj0 | string) | undefined)
    | ((External$CustomerUpdateBodyCardObj0 | string) | undefined)
    | (External$CustomerUpdateBodyCashBalance | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$CustomerUpdateBodyInvoiceSettings | undefined)
    | ((External$CustomerUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$CustomerUpdateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (External$CustomerUpdateBodyTax | undefined)
    | (("exempt" | "none" | "reverse") | undefined)
    | External$CustomerUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBody
 */
const SchemaIn$CustomerUpdateBody: z.ZodType<
  CustomerUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([Schemas$CustomerUpdateBodyAddressObj0.in, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    bank_account: z
      .union([Schemas$CustomerUpdateBodyBankAccountObj0.in, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerUpdateBodyCardObj0.in, z.string()])
      .optional(),
    cash_balance: Schemas$CustomerUpdateBodyCashBalance.in.optional(),
    default_alipay_account: z.string().optional(),
    default_bank_account: z.string().optional(),
    default_card: z.string().optional(),
    default_source: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice_prefix: z.string().optional(),
    invoice_settings: Schemas$CustomerUpdateBodyInvoiceSettings.in.optional(),
    metadata: z
      .union([Schemas$CustomerUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    next_invoice_sequence: z.number().int().optional(),
    phone: z.string().optional(),
    preferred_locales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerUpdateBodyShippingObj0.in, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerUpdateBodyTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      bank_account: "bankAccount",
      card: "card",
      cash_balance: "cashBalance",
      default_alipay_account: "defaultAlipayAccount",
      default_bank_account: "defaultBankAccount",
      default_card: "defaultCard",
      default_source: "defaultSource",
      description: "description",
      email: "email",
      expand: "expand",
      invoice_prefix: "invoicePrefix",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      name: "name",
      next_invoice_sequence: "nextInvoiceSequence",
      phone: "phone",
      preferred_locales: "preferredLocales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      tax_exempt: "taxExempt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBody
 */
const SchemaOut$CustomerUpdateBody: z.ZodType<
  External$CustomerUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBody // the object to be transformed
> = z
  .object({
    address: z
      .union([Schemas$CustomerUpdateBodyAddressObj0.out, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    bankAccount: z
      .union([Schemas$CustomerUpdateBodyBankAccountObj0.out, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerUpdateBodyCardObj0.out, z.string()])
      .optional(),
    cashBalance: Schemas$CustomerUpdateBodyCashBalance.out.optional(),
    defaultAlipayAccount: z.string().optional(),
    defaultBankAccount: z.string().optional(),
    defaultCard: z.string().optional(),
    defaultSource: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoicePrefix: z.string().optional(),
    invoiceSettings: Schemas$CustomerUpdateBodyInvoiceSettings.out.optional(),
    metadata: z
      .union([Schemas$CustomerUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    nextInvoiceSequence: z.number().int().optional(),
    phone: z.string().optional(),
    preferredLocales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerUpdateBodyShippingObj0.out, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerUpdateBodyTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      bankAccount: "bank_account",
      card: "card",
      cashBalance: "cash_balance",
      defaultAlipayAccount: "default_alipay_account",
      defaultBankAccount: "default_bank_account",
      defaultCard: "default_card",
      defaultSource: "default_source",
      description: "description",
      email: "email",
      expand: "expand",
      invoicePrefix: "invoice_prefix",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      name: "name",
      nextInvoiceSequence: "next_invoice_sequence",
      phone: "phone",
      preferredLocales: "preferred_locales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      taxExempt: "tax_exempt",
    });
  });

export const Schemas$CustomerUpdateBody = {
  in: SchemaIn$CustomerUpdateBody,
  out: SchemaOut$CustomerUpdateBody,
};
