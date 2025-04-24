import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/credit-note/request-types";
import { Schemas$CreditNote } from "@sideko-inc/stripe/types/credit-note";
import { Schemas$CreditNoteCreateBody } from "@sideko-inc/stripe/types/credit-note-create-body";
import { Schemas$CreditNoteLinesResponse } from "@sideko-inc/stripe/types/credit-note-lines-response";
import { Schemas$CreditNoteListCreatedObj0 } from "@sideko-inc/stripe/types/credit-note-list-created-obj0";
import { Schemas$CreditNoteListResponse } from "@sideko-inc/stripe/types/credit-note-list-response";
import { Schemas$CreditNotePreviewLinesItem } from "@sideko-inc/stripe/types/credit-note-preview-lines-item";
import { Schemas$CreditNotePreviewLinesLinesItem } from "@sideko-inc/stripe/types/credit-note-preview-lines-lines-item";
import { Schemas$CreditNotePreviewLinesMetadata } from "@sideko-inc/stripe/types/credit-note-preview-lines-metadata";
import { Schemas$CreditNotePreviewLinesRefundsItem } from "@sideko-inc/stripe/types/credit-note-preview-lines-refunds-item";
import { Schemas$CreditNotePreviewLinesResponse } from "@sideko-inc/stripe/types/credit-note-preview-lines-response";
import { Schemas$CreditNotePreviewLinesShippingCost } from "@sideko-inc/stripe/types/credit-note-preview-lines-shipping-cost";
import { Schemas$CreditNotePreviewMetadata } from "@sideko-inc/stripe/types/credit-note-preview-metadata";
import { Schemas$CreditNotePreviewRefundsItem } from "@sideko-inc/stripe/types/credit-note-preview-refunds-item";
import { Schemas$CreditNotePreviewShippingCost } from "@sideko-inc/stripe/types/credit-note-preview-shipping-cost";
import { Schemas$CreditNoteUpdateBody } from "@sideko-inc/stripe/types/credit-note-update-body";
import { Schemas$CreditNoteVoidBody } from "@sideko-inc/stripe/types/credit-note-void-body";
import * as z from "zod";

export class CreditNoteClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all credit notes
   *
   * <p>Returns a list of credit notes.</p>
   *
   * GET /v1/credit_notes
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNoteListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/credit_notes",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$CreditNoteListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "invoice",
          value: z.string().optional().parse(request.invoice),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CreditNoteListResponse.in),
      opts,
    });
  }
  /**
   * Preview a credit note
   *
   * <p>Get a preview of a credit note without creating it.</p>
   *
   * GET /v1/credit_notes/preview
   */
  preview(
    request: requests.PreviewRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNote> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/credit_notes/preview",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "invoice",
          value: z.string().parse(request.invoice),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "amount",
          value: z.number().int().optional().parse(request.amount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "credit_amount",
          value: z.number().int().optional().parse(request.creditAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "effective_at",
          value: z.number().int().optional().parse(request.effectiveAt),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "email_type",
          value: z
            .enum(["credit_note", "none"])
            .optional()
            .parse(request.emailType),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "lines",
          value: z
            .array(Schemas$CreditNotePreviewLinesItem.out)
            .optional()
            .parse(request.lines),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "memo",
          value: z.string().optional().parse(request.memo),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "metadata",
          value: Schemas$CreditNotePreviewMetadata.out
            .optional()
            .parse(request.metadata),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "out_of_band_amount",
          value: z.number().int().optional().parse(request.outOfBandAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "reason",
          value: z
            .enum([
              "duplicate",
              "fraudulent",
              "order_change",
              "product_unsatisfactory",
            ])
            .optional()
            .parse(request.reason),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "refund_amount",
          value: z.number().int().optional().parse(request.refundAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "refunds",
          value: z
            .array(Schemas$CreditNotePreviewRefundsItem.out)
            .optional()
            .parse(request.refunds),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "shipping_cost",
          value: Schemas$CreditNotePreviewShippingCost.out
            .optional()
            .parse(request.shippingCost),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CreditNote.in),
      opts,
    });
  }
  /**
   * Retrieve a credit note preview's line items
   *
   * <p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>
   *
   * GET /v1/credit_notes/preview/lines
   */
  previewLines(
    request: requests.PreviewLinesRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNotePreviewLinesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/credit_notes/preview/lines",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "invoice",
          value: z.string().parse(request.invoice),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "amount",
          value: z.number().int().optional().parse(request.amount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "credit_amount",
          value: z.number().int().optional().parse(request.creditAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "effective_at",
          value: z.number().int().optional().parse(request.effectiveAt),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "email_type",
          value: z
            .enum(["credit_note", "none"])
            .optional()
            .parse(request.emailType),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "lines",
          value: z
            .array(Schemas$CreditNotePreviewLinesLinesItem.out)
            .optional()
            .parse(request.lines),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "memo",
          value: z.string().optional().parse(request.memo),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "metadata",
          value: Schemas$CreditNotePreviewLinesMetadata.out
            .optional()
            .parse(request.metadata),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "out_of_band_amount",
          value: z.number().int().optional().parse(request.outOfBandAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "reason",
          value: z
            .enum([
              "duplicate",
              "fraudulent",
              "order_change",
              "product_unsatisfactory",
            ])
            .optional()
            .parse(request.reason),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "refund_amount",
          value: z.number().int().optional().parse(request.refundAmount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "refunds",
          value: z
            .array(Schemas$CreditNotePreviewLinesRefundsItem.out)
            .optional()
            .parse(request.refunds),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "shipping_cost",
          value: Schemas$CreditNotePreviewLinesShippingCost.out
            .optional()
            .parse(request.shippingCost),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CreditNotePreviewLinesResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a credit note's line items
   *
   * <p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * GET /v1/credit_notes/{credit_note}/lines
   */
  lines(
    request: requests.LinesRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNoteLinesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/credit_notes/${request.creditNote}/lines`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CreditNoteLinesResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a credit note
   *
   * <p>Retrieves the credit note object with the given identifier.</p>
   *
   * GET /v1/credit_notes/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNote> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/credit_notes/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CreditNote.in),
      opts,
    });
  }
  /**
   * Create a credit note
   *
   * <p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
   * its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
   * in any combination of the following:</p>
   *
   * <ul>
   * <li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
   * <li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
   * <li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
   * </ul>
   *
   * <p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>
   *
   * <p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice’s <code>pre_payment_credit_notes_amount</code>
   * or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p>
   *
   * POST /v1/credit_notes
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNote> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/credit_notes",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CreditNoteCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          credit_amount: "form",
          effective_at: "form",
          email_type: "form",
          expand: "deepObject",
          invoice: "form",
          lines: "deepObject",
          memo: "form",
          metadata: "deepObject",
          out_of_band_amount: "form",
          reason: "form",
          refund_amount: "form",
          refunds: "deepObject",
          shipping_cost: "deepObject",
        },
        explode: {
          amount: true,
          credit_amount: true,
          effective_at: true,
          email_type: true,
          expand: true,
          invoice: true,
          lines: true,
          memo: true,
          metadata: true,
          out_of_band_amount: true,
          reason: true,
          refund_amount: true,
          refunds: true,
          shipping_cost: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$CreditNote.in),
      opts,
    });
  }
  /**
   * Update a credit note
   *
   * <p>Updates an existing credit note.</p>
   *
   * POST /v1/credit_notes/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/credit_notes/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CreditNoteUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", memo: "form", metadata: "deepObject" },
        explode: { expand: true, memo: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$CreditNote.in),
      opts,
    });
  }
  /**
   * Void a credit note
   *
   * <p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>
   *
   * POST /v1/credit_notes/{id}/void
   */
  void_(
    request: requests.VoidRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreditNote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/credit_notes/${request.id}/void`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CreditNoteVoidBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$CreditNote.in),
      opts,
    });
  }
}
