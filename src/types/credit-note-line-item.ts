import {
  BillingBillResourceInvoicingTaxesTax,
  External$BillingBillResourceInvoicingTaxesTax,
  Schemas$BillingBillResourceInvoicingTaxesTax,
} from "./billing-bill-resource-invoicing-taxes-tax";
import {
  CreditNotesPretaxCreditAmount,
  External$CreditNotesPretaxCreditAmount,
  Schemas$CreditNotesPretaxCreditAmount,
} from "./credit-notes-pretax-credit-amount";
import {
  DiscountsResourceDiscountAmount,
  External$DiscountsResourceDiscountAmount,
  Schemas$DiscountsResourceDiscountAmount,
} from "./discounts-resource-discount-amount";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The credit note line item object
 */
export type CreditNoteLineItem = {
  /**
   * The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
   */
  amount: number;
  /**
   * Description of the item being credited.
   */
  description?: string | null | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
   */
  discountAmount: number;
  /**
   * The amount of discount calculated per discount for this line item
   */
  discountAmounts: DiscountsResourceDiscountAmount[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice line item being credited
   */
  invoiceLineItem?: string | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "credit_note_line_item";
  /**
   * The pretax credit amounts (ex: discount, credit grants, etc) for this line item.
   */
  pretaxCreditAmounts: CreditNotesPretaxCreditAmount[];
  /**
   * The number of units of product being credited.
   */
  quantity?: number | null | undefined;
  /**
   * The tax rates which apply to the line item.
   */
  taxRates: TaxRate[];
  /**
   * The tax information of the line item.
   */
  taxes?: BillingBillResourceInvoicingTaxesTax[] | null | undefined;
  /**
   * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
   */
  type: "custom_line_item" | "invoice_line_item";
  /**
   * The cost of each unit of product being credited.
   */
  unitAmount?: number | null | undefined;
  /**
   * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * CreditNoteLineItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteLineItem = {
  amount: number;
  description?: string | null | undefined;
  discount_amount: number;
  discount_amounts: External$DiscountsResourceDiscountAmount[];
  id: string;
  invoice_line_item?: string | undefined;
  livemode: boolean;
  object: "credit_note_line_item";
  pretax_credit_amounts: External$CreditNotesPretaxCreditAmount[];
  quantity?: number | null | undefined;
  tax_rates: External$TaxRate[];
  taxes?: External$BillingBillResourceInvoicingTaxesTax[] | null | undefined;
  type: "custom_line_item" | "invoice_line_item";
  unit_amount?: number | null | undefined;
  unit_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteLineItem
 */
const SchemaIn$CreditNoteLineItem: z.ZodType<
  CreditNoteLineItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    description: z.string().nullable().optional(),
    discount_amount: z.number().int(),
    discount_amounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceDiscountAmount.in),
    ),
    id: z.string(),
    invoice_line_item: z.string().optional(),
    livemode: z.boolean(),
    object: z.enum(["credit_note_line_item"]),
    pretax_credit_amounts: z.array(
      z.lazy(() => Schemas$CreditNotesPretaxCreditAmount.in),
    ),
    quantity: z.number().int().nullable().optional(),
    tax_rates: z.array(Schemas$TaxRate.in),
    taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.in)
      .nullable()
      .optional(),
    type: z.enum(["custom_line_item", "invoice_line_item"]),
    unit_amount: z.number().int().nullable().optional(),
    unit_amount_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discount_amount: "discountAmount",
      discount_amounts: "discountAmounts",
      id: "id",
      invoice_line_item: "invoiceLineItem",
      livemode: "livemode",
      object: "object",
      pretax_credit_amounts: "pretaxCreditAmounts",
      quantity: "quantity",
      tax_rates: "taxRates",
      taxes: "taxes",
      type: "type",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteLineItem
 */
const SchemaOut$CreditNoteLineItem: z.ZodType<
  External$CreditNoteLineItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteLineItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    description: z.string().nullable().optional(),
    discountAmount: z.number().int(),
    discountAmounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceDiscountAmount.out),
    ),
    id: z.string(),
    invoiceLineItem: z.string().optional(),
    livemode: z.boolean(),
    object: z.enum(["credit_note_line_item"]),
    pretaxCreditAmounts: z.array(
      z.lazy(() => Schemas$CreditNotesPretaxCreditAmount.out),
    ),
    quantity: z.number().int().nullable().optional(),
    taxRates: z.array(Schemas$TaxRate.out),
    taxes: z
      .array(Schemas$BillingBillResourceInvoicingTaxesTax.out)
      .nullable()
      .optional(),
    type: z.enum(["custom_line_item", "invoice_line_item"]),
    unitAmount: z.number().int().nullable().optional(),
    unitAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountAmount: "discount_amount",
      discountAmounts: "discount_amounts",
      id: "id",
      invoiceLineItem: "invoice_line_item",
      livemode: "livemode",
      object: "object",
      pretaxCreditAmounts: "pretax_credit_amounts",
      quantity: "quantity",
      taxRates: "tax_rates",
      taxes: "taxes",
      type: "type",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$CreditNoteLineItem = {
  in: SchemaIn$CreditNoteLineItem,
  out: SchemaOut$CreditNoteLineItem,
};
