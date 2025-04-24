import {
  BillingBillResourceInvoicingTaxesTax,
  External$BillingBillResourceInvoicingTaxesTax,
  Schemas$BillingBillResourceInvoicingTaxesTax,
} from "./billing-bill-resource-invoicing-taxes-tax";
import {
  CreditNoteLines,
  External$CreditNoteLines,
  Schemas$CreditNoteLines,
} from "./credit-note-lines";
import {
  CreditNoteMetadata,
  External$CreditNoteMetadata,
  Schemas$CreditNoteMetadata,
} from "./credit-note-metadata";
import {
  CreditNoteRefund,
  External$CreditNoteRefund,
  Schemas$CreditNoteRefund,
} from "./credit-note-refund";
import {
  CreditNotesPretaxCreditAmount,
  External$CreditNotesPretaxCreditAmount,
  Schemas$CreditNotesPretaxCreditAmount,
} from "./credit-notes-pretax-credit-amount";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  CustomerBalanceTransaction,
  External$CustomerBalanceTransaction,
  Schemas$CustomerBalanceTransaction,
} from "./customer-balance-transaction";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  DiscountsResourceDiscountAmount,
  External$DiscountsResourceDiscountAmount,
  Schemas$DiscountsResourceDiscountAmount,
} from "./discounts-resource-discount-amount";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$InvoicesResourceShippingCost,
  InvoicesResourceShippingCost,
  Schemas$InvoicesResourceShippingCost,
} from "./invoices-resource-shipping-cost";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
 *
 * Related guide: [Credit notes](https://stripe.com/docs/billing/invoices/credit-notes)
 */
export type CreditNote = {
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
   */
  amount: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer.
   */
  customer: string | Customer | DeletedCustomer;
  /**
   * Customer balance transaction related to this credit note.
   */
  customerBalanceTransaction?:
    | (string | CustomerBalanceTransaction)
    | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.
   */
  discountAmount: number;
  /**
   * The aggregate amounts calculated per discount for all line items.
   */
  discountAmounts: DiscountsResourceDiscountAmount[];
  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effectiveAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice.
   */
  invoice: string | Invoice;
  /**
   * Line items that make up the credit note
   */
  lines: CreditNoteLines;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Customer-facing text that appears on the credit note PDF.
   */
  memo?: string | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CreditNoteMetadata | null | undefined;
  /**
   * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
   */
  number: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "credit_note";
  /**
   * Amount that was credited outside of Stripe.
   */
  outOfBandAmount?: number | null | undefined;
  /**
   * The link to download the PDF of the credit note.
   */
  pdf: string;
  /**
   * The pretax credit amounts (ex: discount, credit grants, etc) for all line items.
   */
  pretaxCreditAmounts: CreditNotesPretaxCreditAmount[];
  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | null
    | undefined;
  /**
   * Refunds related to this credit note.
   */
  refunds: CreditNoteRefund[];
  shippingCost?: InvoicesResourceShippingCost | undefined;
  /**
   * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
   */
  status: "issued" | "void";
  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
   */
  subtotal: number;
  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.
   */
  subtotalExcludingTax?: number | null | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.
   */
  total: number;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.
   */
  totalExcludingTax?: number | null | undefined;
  /**
   * The aggregate tax information for all line items.
   */
  totalTaxes?: BillingBillResourceInvoicingTaxesTax[] | null | undefined;
  /**
   * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
   */
  type: "post_payment" | "pre_payment";
  /**
   * The time that the credit note was voided.
   */
  voidedAt?: number | null | undefined;
};

/**
 * @internal
 * CreditNote without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNote = {
  amount: number;
  amount_shipping: number;
  created: number;
  currency: string;
  customer: string | External$Customer | External$DeletedCustomer;
  customer_balance_transaction?:
    | (string | External$CustomerBalanceTransaction)
    | undefined;
  discount_amount: number;
  discount_amounts: External$DiscountsResourceDiscountAmount[];
  effective_at?: number | null | undefined;
  id: string;
  invoice: string | External$Invoice;
  lines: External$CreditNoteLines;
  livemode: boolean;
  memo?: string | null | undefined;
  metadata?: External$CreditNoteMetadata | null | undefined;
  number: string;
  object: "credit_note";
  out_of_band_amount?: number | null | undefined;
  pdf: string;
  pretax_credit_amounts: External$CreditNotesPretaxCreditAmount[];
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | null
    | undefined;
  refunds: External$CreditNoteRefund[];
  shipping_cost?: External$InvoicesResourceShippingCost | undefined;
  status: "issued" | "void";
  subtotal: number;
  subtotal_excluding_tax?: number | null | undefined;
  total: number;
  total_excluding_tax?: number | null | undefined;
  total_taxes?:
    | External$BillingBillResourceInvoicingTaxesTax[]
    | null
    | undefined;
  type: "post_payment" | "pre_payment";
  voided_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNote
 */
const SchemaIn$CreditNote: z.ZodType<
  CreditNote, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_shipping: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    customer_balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$CustomerBalanceTransaction.in)])
      .optional(),
    discount_amount: z.number().int(),
    discount_amounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceDiscountAmount.in),
    ),
    effective_at: z.number().int().nullable().optional(),
    id: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]),
    lines: z.lazy(() => Schemas$CreditNoteLines.in),
    livemode: z.boolean(),
    memo: z.string().nullable().optional(),
    metadata: Schemas$CreditNoteMetadata.in.nullable().optional(),
    number: z.string(),
    object: z.enum(["credit_note"]),
    out_of_band_amount: z.number().int().nullable().optional(),
    pdf: z.string(),
    pretax_credit_amounts: z.array(
      z.lazy(() => Schemas$CreditNotesPretaxCreditAmount.in),
    ),
    reason: z
      .enum([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ])
      .nullable()
      .optional(),
    refunds: z.array(z.lazy(() => Schemas$CreditNoteRefund.in)),
    shipping_cost: Schemas$InvoicesResourceShippingCost.in.optional(),
    status: z.enum(["issued", "void"]),
    subtotal: z.number().int(),
    subtotal_excluding_tax: z.number().int().nullable().optional(),
    total: z.number().int(),
    total_excluding_tax: z.number().int().nullable().optional(),
    total_taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.in)
      .nullable()
      .optional(),
    type: z.enum(["post_payment", "pre_payment"]),
    voided_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_shipping: "amountShipping",
      created: "created",
      currency: "currency",
      customer: "customer",
      customer_balance_transaction: "customerBalanceTransaction",
      discount_amount: "discountAmount",
      discount_amounts: "discountAmounts",
      effective_at: "effectiveAt",
      id: "id",
      invoice: "invoice",
      lines: "lines",
      livemode: "livemode",
      memo: "memo",
      metadata: "metadata",
      number: "number",
      object: "object",
      out_of_band_amount: "outOfBandAmount",
      pdf: "pdf",
      pretax_credit_amounts: "pretaxCreditAmounts",
      reason: "reason",
      refunds: "refunds",
      shipping_cost: "shippingCost",
      status: "status",
      subtotal: "subtotal",
      subtotal_excluding_tax: "subtotalExcludingTax",
      total: "total",
      total_excluding_tax: "totalExcludingTax",
      total_taxes: "totalTaxes",
      type: "type",
      voided_at: "voidedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNote
 */
const SchemaOut$CreditNote: z.ZodType<
  External$CreditNote, // output type of this zod object
  z.ZodTypeDef,
  CreditNote // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountShipping: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    customerBalanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$CustomerBalanceTransaction.out)])
      .optional(),
    discountAmount: z.number().int(),
    discountAmounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceDiscountAmount.out),
    ),
    effectiveAt: z.number().int().nullable().optional(),
    id: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.out)]),
    lines: z.lazy(() => Schemas$CreditNoteLines.out),
    livemode: z.boolean(),
    memo: z.string().nullable().optional(),
    metadata: Schemas$CreditNoteMetadata.out.nullable().optional(),
    number: z.string(),
    object: z.enum(["credit_note"]),
    outOfBandAmount: z.number().int().nullable().optional(),
    pdf: z.string(),
    pretaxCreditAmounts: z.array(
      z.lazy(() => Schemas$CreditNotesPretaxCreditAmount.out),
    ),
    reason: z
      .enum([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ])
      .nullable()
      .optional(),
    refunds: z.array(z.lazy(() => Schemas$CreditNoteRefund.out)),
    shippingCost: Schemas$InvoicesResourceShippingCost.out.optional(),
    status: z.enum(["issued", "void"]),
    subtotal: z.number().int(),
    subtotalExcludingTax: z.number().int().nullable().optional(),
    total: z.number().int(),
    totalExcludingTax: z.number().int().nullable().optional(),
    totalTaxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.out)
      .nullable()
      .optional(),
    type: z.enum(["post_payment", "pre_payment"]),
    voidedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountShipping: "amount_shipping",
      created: "created",
      currency: "currency",
      customer: "customer",
      customerBalanceTransaction: "customer_balance_transaction",
      discountAmount: "discount_amount",
      discountAmounts: "discount_amounts",
      effectiveAt: "effective_at",
      id: "id",
      invoice: "invoice",
      lines: "lines",
      livemode: "livemode",
      memo: "memo",
      metadata: "metadata",
      number: "number",
      object: "object",
      outOfBandAmount: "out_of_band_amount",
      pdf: "pdf",
      pretaxCreditAmounts: "pretax_credit_amounts",
      reason: "reason",
      refunds: "refunds",
      shippingCost: "shipping_cost",
      status: "status",
      subtotal: "subtotal",
      subtotalExcludingTax: "subtotal_excluding_tax",
      total: "total",
      totalExcludingTax: "total_excluding_tax",
      totalTaxes: "total_taxes",
      type: "type",
      voidedAt: "voided_at",
    });
  });

export const Schemas$CreditNote = {
  in: SchemaIn$CreditNote,
  out: SchemaOut$CreditNote,
};
