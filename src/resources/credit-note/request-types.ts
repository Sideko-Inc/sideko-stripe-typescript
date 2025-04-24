import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CreditNoteCreateBodyLinesItem,
  External$CreditNoteCreateBodyLinesItem,
  Schemas$CreditNoteCreateBodyLinesItem,
} from "@sideko-inc/stripe/types/credit-note-create-body-lines-item";
import {
  CreditNoteCreateBodyMetadata,
  External$CreditNoteCreateBodyMetadata,
  Schemas$CreditNoteCreateBodyMetadata,
} from "@sideko-inc/stripe/types/credit-note-create-body-metadata";
import {
  CreditNoteCreateBodyRefundsItem,
  External$CreditNoteCreateBodyRefundsItem,
  Schemas$CreditNoteCreateBodyRefundsItem,
} from "@sideko-inc/stripe/types/credit-note-create-body-refunds-item";
import {
  CreditNoteCreateBodyShippingCost,
  External$CreditNoteCreateBodyShippingCost,
  Schemas$CreditNoteCreateBodyShippingCost,
} from "@sideko-inc/stripe/types/credit-note-create-body-shipping-cost";
import {
  CreditNoteListCreatedObj0,
  External$CreditNoteListCreatedObj0,
  Schemas$CreditNoteListCreatedObj0,
} from "@sideko-inc/stripe/types/credit-note-list-created-obj0";
import {
  CreditNotePreviewLinesItem,
  External$CreditNotePreviewLinesItem,
  Schemas$CreditNotePreviewLinesItem,
} from "@sideko-inc/stripe/types/credit-note-preview-lines-item";
import {
  CreditNotePreviewLinesLinesItem,
  External$CreditNotePreviewLinesLinesItem,
  Schemas$CreditNotePreviewLinesLinesItem,
} from "@sideko-inc/stripe/types/credit-note-preview-lines-lines-item";
import {
  CreditNotePreviewLinesMetadata,
  External$CreditNotePreviewLinesMetadata,
  Schemas$CreditNotePreviewLinesMetadata,
} from "@sideko-inc/stripe/types/credit-note-preview-lines-metadata";
import {
  CreditNotePreviewLinesRefundsItem,
  External$CreditNotePreviewLinesRefundsItem,
  Schemas$CreditNotePreviewLinesRefundsItem,
} from "@sideko-inc/stripe/types/credit-note-preview-lines-refunds-item";
import {
  CreditNotePreviewLinesShippingCost,
  External$CreditNotePreviewLinesShippingCost,
  Schemas$CreditNotePreviewLinesShippingCost,
} from "@sideko-inc/stripe/types/credit-note-preview-lines-shipping-cost";
import {
  CreditNotePreviewMetadata,
  External$CreditNotePreviewMetadata,
  Schemas$CreditNotePreviewMetadata,
} from "@sideko-inc/stripe/types/credit-note-preview-metadata";
import {
  CreditNotePreviewRefundsItem,
  External$CreditNotePreviewRefundsItem,
  Schemas$CreditNotePreviewRefundsItem,
} from "@sideko-inc/stripe/types/credit-note-preview-refunds-item";
import {
  CreditNotePreviewShippingCost,
  External$CreditNotePreviewShippingCost,
  Schemas$CreditNotePreviewShippingCost,
} from "@sideko-inc/stripe/types/credit-note-preview-shipping-cost";
import {
  CreditNoteUpdateBody,
  External$CreditNoteUpdateBody,
  Schemas$CreditNoteUpdateBody,
} from "@sideko-inc/stripe/types/credit-note-update-body";
import {
  CreditNoteVoidBody,
  External$CreditNoteVoidBody,
  Schemas$CreditNoteVoidBody,
} from "@sideko-inc/stripe/types/credit-note-void-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return credit notes that were created during the given date interval.
   */
  created?: (CreditNoteListCreatedObj0 | number) | undefined;
  /**
   * Only return credit notes for the customer specified by this customer ID.
   */
  customer?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Only return credit notes for the invoice specified by this invoice ID.
   */
  invoice?: string | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$CreditNoteListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  invoice?: string | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z
      .union([Schemas$CreditNoteListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string().optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      invoice: "invoice",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    created: z
      .union([Schemas$CreditNoteListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    invoice: z.string().optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      invoice: "invoice",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * PreviewRequest
 */
export type PreviewRequest = {
  /**
   * ID of the invoice.
   */
  invoice: string;
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
   * Line items that make up the credit note.
   */
  lines?: CreditNotePreviewLinesItem[] | undefined;
  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CreditNotePreviewMetadata | undefined;
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
  refunds?: CreditNotePreviewRefundsItem[] | undefined;
  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
   */
  shippingCost?: CreditNotePreviewShippingCost | undefined;
};

/**
 * @internal
 * PreviewRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PreviewRequest = {
  invoice: string;
  amount?: number | undefined;
  credit_amount?: number | undefined;
  effective_at?: number | undefined;
  email_type?: ("credit_note" | "none") | undefined;
  expand?: string[] | undefined;
  lines?: External$CreditNotePreviewLinesItem[] | undefined;
  memo?: string | undefined;
  metadata?: External$CreditNotePreviewMetadata | undefined;
  out_of_band_amount?: number | undefined;
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | undefined;
  refund_amount?: number | undefined;
  refunds?: External$CreditNotePreviewRefundsItem[] | undefined;
  shipping_cost?: External$CreditNotePreviewShippingCost | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PreviewRequest
 */
const SchemaIn$PreviewRequest: z.ZodType<
  PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
    amount: z.number().int().optional(),
    credit_amount: z.number().int().optional(),
    effective_at: z.number().int().optional(),
    email_type: z.enum(["credit_note", "none"]).optional(),
    expand: z.array(z.string()).optional(),
    lines: z.array(Schemas$CreditNotePreviewLinesItem.in).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNotePreviewMetadata.in.optional(),
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
    refunds: z.array(Schemas$CreditNotePreviewRefundsItem.in).optional(),
    shipping_cost: Schemas$CreditNotePreviewShippingCost.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      amount: "amount",
      credit_amount: "creditAmount",
      effective_at: "effectiveAt",
      email_type: "emailType",
      expand: "expand",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PreviewRequest
 */
const SchemaOut$PreviewRequest: z.ZodType<
  External$PreviewRequest, // output type of this zod object
  z.ZodTypeDef,
  PreviewRequest // the object to be transformed
> = z
  .object({
    invoice: z.string(),
    amount: z.number().int().optional(),
    creditAmount: z.number().int().optional(),
    effectiveAt: z.number().int().optional(),
    emailType: z.enum(["credit_note", "none"]).optional(),
    expand: z.array(z.string()).optional(),
    lines: z.array(Schemas$CreditNotePreviewLinesItem.out).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNotePreviewMetadata.out.optional(),
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
    refunds: z.array(Schemas$CreditNotePreviewRefundsItem.out).optional(),
    shippingCost: Schemas$CreditNotePreviewShippingCost.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      amount: "amount",
      creditAmount: "credit_amount",
      effectiveAt: "effective_at",
      emailType: "email_type",
      expand: "expand",
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

export const Schemas$PreviewRequest = {
  in: SchemaIn$PreviewRequest,
  out: SchemaOut$PreviewRequest,
};

/**
 * PreviewLinesRequest
 */
export type PreviewLinesRequest = {
  /**
   * ID of the invoice.
   */
  invoice: string;
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
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * Line items that make up the credit note.
   */
  lines?: CreditNotePreviewLinesLinesItem[] | undefined;
  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CreditNotePreviewLinesMetadata | undefined;
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
  refunds?: CreditNotePreviewLinesRefundsItem[] | undefined;
  /**
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
   */
  shippingCost?: CreditNotePreviewLinesShippingCost | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * PreviewLinesRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PreviewLinesRequest = {
  invoice: string;
  amount?: number | undefined;
  credit_amount?: number | undefined;
  effective_at?: number | undefined;
  email_type?: ("credit_note" | "none") | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  lines?: External$CreditNotePreviewLinesLinesItem[] | undefined;
  memo?: string | undefined;
  metadata?: External$CreditNotePreviewLinesMetadata | undefined;
  out_of_band_amount?: number | undefined;
  reason?:
    | ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory")
    | undefined;
  refund_amount?: number | undefined;
  refunds?: External$CreditNotePreviewLinesRefundsItem[] | undefined;
  shipping_cost?: External$CreditNotePreviewLinesShippingCost | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PreviewLinesRequest
 */
const SchemaIn$PreviewLinesRequest: z.ZodType<
  PreviewLinesRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
    amount: z.number().int().optional(),
    credit_amount: z.number().int().optional(),
    effective_at: z.number().int().optional(),
    email_type: z.enum(["credit_note", "none"]).optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lines: z.array(Schemas$CreditNotePreviewLinesLinesItem.in).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNotePreviewLinesMetadata.in.optional(),
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
    refunds: z.array(Schemas$CreditNotePreviewLinesRefundsItem.in).optional(),
    shipping_cost: Schemas$CreditNotePreviewLinesShippingCost.in.optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      amount: "amount",
      credit_amount: "creditAmount",
      effective_at: "effectiveAt",
      email_type: "emailType",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      lines: "lines",
      memo: "memo",
      metadata: "metadata",
      out_of_band_amount: "outOfBandAmount",
      reason: "reason",
      refund_amount: "refundAmount",
      refunds: "refunds",
      shipping_cost: "shippingCost",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PreviewLinesRequest
 */
const SchemaOut$PreviewLinesRequest: z.ZodType<
  External$PreviewLinesRequest, // output type of this zod object
  z.ZodTypeDef,
  PreviewLinesRequest // the object to be transformed
> = z
  .object({
    invoice: z.string(),
    amount: z.number().int().optional(),
    creditAmount: z.number().int().optional(),
    effectiveAt: z.number().int().optional(),
    emailType: z.enum(["credit_note", "none"]).optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lines: z.array(Schemas$CreditNotePreviewLinesLinesItem.out).optional(),
    memo: z.string().optional(),
    metadata: Schemas$CreditNotePreviewLinesMetadata.out.optional(),
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
    refunds: z.array(Schemas$CreditNotePreviewLinesRefundsItem.out).optional(),
    shippingCost: Schemas$CreditNotePreviewLinesShippingCost.out.optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      amount: "amount",
      creditAmount: "credit_amount",
      effectiveAt: "effective_at",
      emailType: "email_type",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      lines: "lines",
      memo: "memo",
      metadata: "metadata",
      outOfBandAmount: "out_of_band_amount",
      reason: "reason",
      refundAmount: "refund_amount",
      refunds: "refunds",
      shippingCost: "shipping_cost",
      startingAfter: "starting_after",
    });
  });

export const Schemas$PreviewLinesRequest = {
  in: SchemaIn$PreviewLinesRequest,
  out: SchemaOut$PreviewLinesRequest,
};

/**
 * LinesRequest
 */
export type LinesRequest = {
  creditNote: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * LinesRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinesRequest = {
  credit_note: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinesRequest
 */
const SchemaIn$LinesRequest: z.ZodType<
  LinesRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credit_note: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credit_note: "creditNote",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinesRequest
 */
const SchemaOut$LinesRequest: z.ZodType<
  External$LinesRequest, // output type of this zod object
  z.ZodTypeDef,
  LinesRequest // the object to be transformed
> = z
  .object({
    creditNote: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditNote: "credit_note",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$LinesRequest = {
  in: SchemaIn$LinesRequest,
  out: SchemaOut$LinesRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  id: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  id: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: CreditNoteUpdateBody | undefined;
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$CreditNoteUpdateBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CreditNoteUpdateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$CreditNoteUpdateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * VoidRequest
 */
export type VoidRequest = {
  data?: CreditNoteVoidBody | undefined;
  id: string;
};

/**
 * @internal
 * VoidRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VoidRequest = {
  data?: External$CreditNoteVoidBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VoidRequest
 */
const SchemaIn$VoidRequest: z.ZodType<
  VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CreditNoteVoidBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VoidRequest
 */
const SchemaOut$VoidRequest: z.ZodType<
  External$VoidRequest, // output type of this zod object
  z.ZodTypeDef,
  VoidRequest // the object to be transformed
> = z
  .object({
    data: Schemas$CreditNoteVoidBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$VoidRequest = {
  in: SchemaIn$VoidRequest,
  out: SchemaOut$VoidRequest,
};
