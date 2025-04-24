import {
  CustomerCreateBodyAddressObj0,
  External$CustomerCreateBodyAddressObj0,
  Schemas$CustomerCreateBodyAddressObj0,
} from "./customer-create-body-address-obj0";
import {
  CustomerCreateBodyCashBalance,
  External$CustomerCreateBodyCashBalance,
  Schemas$CustomerCreateBodyCashBalance,
} from "./customer-create-body-cash-balance";
import {
  CustomerCreateBodyInvoiceSettings,
  External$CustomerCreateBodyInvoiceSettings,
  Schemas$CustomerCreateBodyInvoiceSettings,
} from "./customer-create-body-invoice-settings";
import {
  CustomerCreateBodyMetadataObj0,
  External$CustomerCreateBodyMetadataObj0,
  Schemas$CustomerCreateBodyMetadataObj0,
} from "./customer-create-body-metadata-obj0";
import {
  CustomerCreateBodyShippingObj0,
  External$CustomerCreateBodyShippingObj0,
  Schemas$CustomerCreateBodyShippingObj0,
} from "./customer-create-body-shipping-obj0";
import {
  CustomerCreateBodyTax,
  External$CustomerCreateBodyTax,
  Schemas$CustomerCreateBodyTax,
} from "./customer-create-body-tax";
import {
  CustomerCreateBodyTaxIdDataItem,
  External$CustomerCreateBodyTaxIdDataItem,
  Schemas$CustomerCreateBodyTaxIdDataItem,
} from "./customer-create-body-tax-id-data-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBody
 */
export type CustomerCreateBody = {
  /**
   * The customer's address.
   */
  address?: (CustomerCreateBodyAddressObj0 | string) | undefined;
  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number | undefined;
  /**
   * Balance information and default balance settings for this customer.
   */
  cashBalance?: CustomerCreateBodyCashBalance | undefined;
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
  invoiceSettings?: CustomerCreateBodyInvoiceSettings | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The customer's full name or business name.
   */
  name?: string | undefined;
  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  nextInvoiceSequence?: number | undefined;
  paymentMethod?: string | undefined;
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
  shipping?: (CustomerCreateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  /**
   * Tax details about the customer.
   */
  tax?: CustomerCreateBodyTax | undefined;
  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  taxExempt?: ("exempt" | "none" | "reverse") | undefined;
  /**
   * The customer's tax IDs.
   */
  taxIdData?: CustomerCreateBodyTaxIdDataItem[] | undefined;
  /**
   * ID of the test clock to attach to the customer.
   */
  testClock?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((CustomerCreateBodyAddressObj0 | string) | undefined)
    | (number | undefined)
    | (CustomerCreateBodyCashBalance | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (CustomerCreateBodyInvoiceSettings | undefined)
    | ((CustomerCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((CustomerCreateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (CustomerCreateBodyTax | undefined)
    | (("exempt" | "none" | "reverse") | undefined)
    | (CustomerCreateBodyTaxIdDataItem[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBody = {
  address?: (External$CustomerCreateBodyAddressObj0 | string) | undefined;
  balance?: number | undefined;
  cash_balance?: External$CustomerCreateBodyCashBalance | undefined;
  description?: string | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  invoice_prefix?: string | undefined;
  invoice_settings?: External$CustomerCreateBodyInvoiceSettings | undefined;
  metadata?: (External$CustomerCreateBodyMetadataObj0 | string) | undefined;
  name?: string | undefined;
  next_invoice_sequence?: number | undefined;
  payment_method?: string | undefined;
  phone?: string | undefined;
  preferred_locales?: string[] | undefined;
  shipping?: (External$CustomerCreateBodyShippingObj0 | string) | undefined;
  source?: string | undefined;
  tax?: External$CustomerCreateBodyTax | undefined;
  tax_exempt?: ("exempt" | "none" | "reverse") | undefined;
  tax_id_data?: External$CustomerCreateBodyTaxIdDataItem[] | undefined;
  test_clock?: string | undefined;

  [additionalProperty: string]:
    | ((External$CustomerCreateBodyAddressObj0 | string) | undefined)
    | (number | undefined)
    | (External$CustomerCreateBodyCashBalance | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$CustomerCreateBodyInvoiceSettings | undefined)
    | ((External$CustomerCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$CustomerCreateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (External$CustomerCreateBodyTax | undefined)
    | (("exempt" | "none" | "reverse") | undefined)
    | (External$CustomerCreateBodyTaxIdDataItem[] | undefined)
    | (string | undefined)
    | External$CustomerCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBody
 */
const SchemaIn$CustomerCreateBody: z.ZodType<
  CustomerCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([Schemas$CustomerCreateBodyAddressObj0.in, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    cash_balance: Schemas$CustomerCreateBodyCashBalance.in.optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice_prefix: z.string().optional(),
    invoice_settings: Schemas$CustomerCreateBodyInvoiceSettings.in.optional(),
    metadata: z
      .union([Schemas$CustomerCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
    next_invoice_sequence: z.number().int().optional(),
    payment_method: z.string().optional(),
    phone: z.string().optional(),
    preferred_locales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerCreateBodyShippingObj0.in, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerCreateBodyTax.in.optional(),
    tax_exempt: z.enum(["exempt", "none", "reverse"]).optional(),
    tax_id_data: z.array(Schemas$CustomerCreateBodyTaxIdDataItem.in).optional(),
    test_clock: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cash_balance: "cashBalance",
      description: "description",
      email: "email",
      expand: "expand",
      invoice_prefix: "invoicePrefix",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      name: "name",
      next_invoice_sequence: "nextInvoiceSequence",
      payment_method: "paymentMethod",
      phone: "phone",
      preferred_locales: "preferredLocales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      tax_exempt: "taxExempt",
      tax_id_data: "taxIdData",
      test_clock: "testClock",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBody
 */
const SchemaOut$CustomerCreateBody: z.ZodType<
  External$CustomerCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBody // the object to be transformed
> = z
  .object({
    address: z
      .union([Schemas$CustomerCreateBodyAddressObj0.out, z.string()])
      .optional(),
    balance: z.number().int().optional(),
    cashBalance: Schemas$CustomerCreateBodyCashBalance.out.optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoicePrefix: z.string().optional(),
    invoiceSettings: Schemas$CustomerCreateBodyInvoiceSettings.out.optional(),
    metadata: z
      .union([Schemas$CustomerCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
    nextInvoiceSequence: z.number().int().optional(),
    paymentMethod: z.string().optional(),
    phone: z.string().optional(),
    preferredLocales: z.array(z.string()).optional(),
    shipping: z
      .union([Schemas$CustomerCreateBodyShippingObj0.out, z.string()])
      .optional(),
    source: z.string().optional(),
    tax: Schemas$CustomerCreateBodyTax.out.optional(),
    taxExempt: z.enum(["exempt", "none", "reverse"]).optional(),
    taxIdData: z.array(Schemas$CustomerCreateBodyTaxIdDataItem.out).optional(),
    testClock: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      balance: "balance",
      cashBalance: "cash_balance",
      description: "description",
      email: "email",
      expand: "expand",
      invoicePrefix: "invoice_prefix",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      name: "name",
      nextInvoiceSequence: "next_invoice_sequence",
      paymentMethod: "payment_method",
      phone: "phone",
      preferredLocales: "preferred_locales",
      shipping: "shipping",
      source: "source",
      tax: "tax",
      taxExempt: "tax_exempt",
      taxIdData: "tax_id_data",
      testClock: "test_clock",
    });
  });

export const Schemas$CustomerCreateBody = {
  in: SchemaIn$CustomerCreateBody,
  out: SchemaOut$CustomerCreateBody,
};
