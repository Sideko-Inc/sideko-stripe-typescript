import {
  CreditNoteCreateBodyLinesItem,
  External$CreditNoteCreateBodyLinesItem,
  Schemas$CreditNoteCreateBodyLinesItem,
} from "./credit-note-create-body-lines-item";
import {
  CreditNoteCreateBodyMetadata,
  External$CreditNoteCreateBodyMetadata,
  Schemas$CreditNoteCreateBodyMetadata,
} from "./credit-note-create-body-metadata";
import {
  CreditNoteCreateBodyRefundsItem,
  External$CreditNoteCreateBodyRefundsItem,
  Schemas$CreditNoteCreateBodyRefundsItem,
} from "./credit-note-create-body-refunds-item";
import {
  CreditNoteCreateBodyShippingCost,
  External$CreditNoteCreateBodyShippingCost,
  Schemas$CreditNoteCreateBodyShippingCost,
} from "./credit-note-create-body-shipping-cost";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNoteCreateBody
 */
export type CreditNoteCreateBody = {
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
   */
  amount?: number | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
   */
  creditAmount?: number | undefined;
  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effectiveAt?: number | undefined;
  /**
   * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
   */
  emailType?: ("credit_note" | "none") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * ID of the invoice.
   */
  invoice: string;
  /**
   * Line items that make up the credit note.
   */
  lines?: CreditNoteCreateBodyLinesItem[] | undefined;
  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CreditNoteCreateBodyMetadata | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
   */
  outOfBandAmount?: number | undefined;
  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | undefined;
  /**
   * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
   */
  refundAmount?: number | undefined;
  /**
   * Refunds to link to this credit note.
   */
  refunds?: CreditNoteCreateBodyRefundsItem[] | undefined;
  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
   */
  shippingCost?: CreditNoteCreateBodyShippingCost | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (("credit_note" | "none") | undefined)
    | (string[] | undefined)
    | string
    | (CreditNoteCreateBodyLinesItem[] | undefined)
    | (string | undefined)
    | (CreditNoteCreateBodyMetadata | undefined)
    | (number | undefined)
    | (
        | (
            | "duplicate"
            | "fraudulent"
            | "order_change"
            | "product_unsatisfactory"
          )
        | undefined
      )
    | (number | undefined)
    | (CreditNoteCreateBodyRefundsItem[] | undefined)
    | (CreditNoteCreateBodyShippingCost | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CreditNoteCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteCreateBody = {
  amount?: number | undefined;
  credit_amount?: number | undefined;
  effective_at?: number | undefined;
  email_type?: ("credit_note" | "none") | undefined;
  expand?: string[] | undefined;
  invoice: string;
  lines?: External$CreditNoteCreateBodyLinesItem[] | undefined;
  memo?: string | undefined;
  metadata?: External$CreditNoteCreateBodyMetadata | undefined;
  out_of_band_amount?: number | undefined;
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | undefined;
  refund_amount?: number | undefined;
  refunds?: External$CreditNoteCreateBodyRefundsItem[] | undefined;
  shipping_cost?: External$CreditNoteCreateBodyShippingCost | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (("credit_note" | "none") | undefined)
    | (string[] | undefined)
    | string
    | (External$CreditNoteCreateBodyLinesItem[] | undefined)
    | (string | undefined)
    | (External$CreditNoteCreateBodyMetadata | undefined)
    | (number | undefined)
    | (
        | (
            | "duplicate"
            | "fraudulent"
            | "order_change"
            | "product_unsatisfactory"
          )
        | undefined
      )
    | (number | undefined)
    | (External$CreditNoteCreateBodyRefundsItem[] | undefined)
    | (External$CreditNoteCreateBodyShippingCost | undefined)
    | External$CreditNoteCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteCreateBody
 */
const SchemaIn$CreditNoteCreateBody: z.ZodType<
  CreditNoteCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    credit_amount: z.number().int().optional(),
    effective_at: z.number().int().optional(),
    email_type: z.enum(["credit_note", "none"]).optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
    lines: z.array(Schemas$CreditNoteCreateBodyLinesItem.in).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNoteCreateBodyMetadata.in.optional(),
    out_of_band_amount: z.number().int().optional(),
    reason: z
      .enum([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ])
      .optional(),
    refund_amount: z.number().int().optional(),
    refunds: z.array(Schemas$CreditNoteCreateBodyRefundsItem.in).optional(),
    shipping_cost: Schemas$CreditNoteCreateBodyShippingCost.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      credit_amount: "creditAmount",
      effective_at: "effectiveAt",
      email_type: "emailType",
      expand: "expand",
      invoice: "invoice",
      lines: "lines",
      memo: "memo",
      metadata: "metadata",
      out_of_band_amount: "outOfBandAmount",
      reason: "reason",
      refund_amount: "refundAmount",
      refunds: "refunds",
      shipping_cost: "shippingCost",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteCreateBody
 */
const SchemaOut$CreditNoteCreateBody: z.ZodType<
  External$CreditNoteCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    creditAmount: z.number().int().optional(),
    effectiveAt: z.number().int().optional(),
    emailType: z.enum(["credit_note", "none"]).optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string(),
    lines: z.array(Schemas$CreditNoteCreateBodyLinesItem.out).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNoteCreateBodyMetadata.out.optional(),
    outOfBandAmount: z.number().int().optional(),
    reason: z
      .enum([
        "duplicate",
        "fraudulent",
        "order_change",
        "product_unsatisfactory",
      ])
      .optional(),
    refundAmount: z.number().int().optional(),
    refunds: z.array(Schemas$CreditNoteCreateBodyRefundsItem.out).optional(),
    shippingCost: Schemas$CreditNoteCreateBodyShippingCost.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      creditAmount: "credit_amount",
      effectiveAt: "effective_at",
      emailType: "email_type",
      expand: "expand",
      invoice: "invoice",
      lines: "lines",
      memo: "memo",
      metadata: "metadata",
      outOfBandAmount: "out_of_band_amount",
      reason: "reason",
      refundAmount: "refund_amount",
      refunds: "refunds",
      shippingCost: "shipping_cost",
    });
  });

export const Schemas$CreditNoteCreateBody = {
  in: SchemaIn$CreditNoteCreateBody,
  out: SchemaOut$CreditNoteCreateBody,
};
