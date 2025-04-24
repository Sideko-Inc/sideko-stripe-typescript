import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { LineClient } from "@sideko-inc/stripe/resources/invoice/line";
import * as requests from "@sideko-inc/stripe/resources/invoice/request-types";
import { Schemas$DeletedInvoice } from "@sideko-inc/stripe/types/deleted-invoice";
import { Schemas$Invoice } from "@sideko-inc/stripe/types/invoice";
import { Schemas$InvoiceCreateBody } from "@sideko-inc/stripe/types/invoice-create-body";
import { Schemas$InvoiceFinalizeBody } from "@sideko-inc/stripe/types/invoice-finalize-body";
import { Schemas$InvoiceListCreatedObj0 } from "@sideko-inc/stripe/types/invoice-list-created-obj0";
import { Schemas$InvoiceListDueDateObj0 } from "@sideko-inc/stripe/types/invoice-list-due-date-obj0";
import { Schemas$InvoiceListResponse } from "@sideko-inc/stripe/types/invoice-list-response";
import { Schemas$InvoiceMarkUncollectibleBody } from "@sideko-inc/stripe/types/invoice-mark-uncollectible-body";
import { Schemas$InvoicePayBody } from "@sideko-inc/stripe/types/invoice-pay-body";
import { Schemas$InvoicePreviewBody } from "@sideko-inc/stripe/types/invoice-preview-body";
import { Schemas$InvoiceSearchResponse } from "@sideko-inc/stripe/types/invoice-search-response";
import { Schemas$InvoiceSendBody } from "@sideko-inc/stripe/types/invoice-send-body";
import { Schemas$InvoiceUpdateBody } from "@sideko-inc/stripe/types/invoice-update-body";
import { Schemas$InvoiceVoidBody } from "@sideko-inc/stripe/types/invoice-void-body";
import * as z from "zod";

export class InvoiceClient extends CoreResourceClient {
  private _lineLazy?: LineClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.line;
    }
  }
  get line(): LineClient {
    return (
      this._lineLazy ??
      (this._lineLazy = new (require("./line").LineClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * Delete a draft invoice
   *
   * <p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>
   *
   * DELETE /v1/invoices/{invoice}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedInvoice> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/invoices/${request.invoice}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedInvoice.in,
      opts,
    });
  }
  /**
   * List all invoices
   *
   * <p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>
   *
   * GET /v1/invoices
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.InvoiceListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/invoices",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "collection_method",
          value: z
            .enum(["charge_automatically", "send_invoice"])
            .optional()
            .parse(request.collectionMethod),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$InvoiceListCreatedObj0.out, z.number().int()])
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
          name: "due_date",
          value: z
            .union([Schemas$InvoiceListDueDateObj0.out, z.number().int()])
            .optional()
            .parse(request.dueDate),
          style: "deepObject",
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["draft", "open", "paid", "uncollectible", "void"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "subscription",
          value: z.string().optional().parse(request.subscription),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$InvoiceListResponse.in),
      opts,
    });
  }
  /**
   * Search invoices
   *
   * <p>Search for invoices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/invoices/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.InvoiceSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/invoices/search",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$InvoiceSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an invoice
   *
   * <p>Retrieves the invoice with the given ID.</p>
   *
   * GET /v1/invoices/{invoice}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/invoices/${request.invoice}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Create an invoice
   *
   * <p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>
   *
   * POST /v1/invoices
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/invoices",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          account_tax_ids: "deepObject",
          application_fee_amount: "form",
          auto_advance: "form",
          automatic_tax: "deepObject",
          automatically_finalizes_at: "form",
          collection_method: "form",
          currency: "form",
          custom_fields: "deepObject",
          customer: "form",
          days_until_due: "form",
          default_payment_method: "form",
          default_source: "form",
          default_tax_rates: "deepObject",
          description: "form",
          discounts: "deepObject",
          due_date: "form",
          effective_at: "form",
          expand: "deepObject",
          footer: "form",
          from_invoice: "deepObject",
          issuer: "deepObject",
          metadata: "deepObject",
          number: "form",
          on_behalf_of: "form",
          payment_settings: "deepObject",
          pending_invoice_items_behavior: "form",
          rendering: "deepObject",
          shipping_cost: "deepObject",
          shipping_details: "deepObject",
          statement_descriptor: "form",
          subscription: "form",
          transfer_data: "deepObject",
        },
        explode: {
          account_tax_ids: true,
          application_fee_amount: true,
          auto_advance: true,
          automatic_tax: true,
          automatically_finalizes_at: true,
          collection_method: true,
          currency: true,
          custom_fields: true,
          customer: true,
          days_until_due: true,
          default_payment_method: true,
          default_source: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          due_date: true,
          effective_at: true,
          expand: true,
          footer: true,
          from_invoice: true,
          issuer: true,
          metadata: true,
          number: true,
          on_behalf_of: true,
          payment_settings: true,
          pending_invoice_items_behavior: true,
          rendering: true,
          shipping_cost: true,
          shipping_details: true,
          statement_descriptor: true,
          subscription: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Create a preview invoice
   *
   * <p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>
   *
   * <p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>
   *
   * <p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_details.proration_date</code> value passed in the request. </p>
   *
   * <p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>
   *
   * POST /v1/invoices/create_preview
   */
  preview(
    request: requests.PreviewRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/invoices/create_preview",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoicePreviewBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          automatic_tax: "deepObject",
          currency: "form",
          customer: "form",
          customer_details: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          invoice_items: "deepObject",
          issuer: "deepObject",
          on_behalf_of: "deepObject",
          preview_mode: "form",
          schedule: "form",
          schedule_details: "deepObject",
          subscription: "form",
          subscription_details: "deepObject",
        },
        explode: {
          automatic_tax: true,
          currency: true,
          customer: true,
          customer_details: true,
          discounts: true,
          expand: true,
          invoice_items: true,
          issuer: true,
          on_behalf_of: true,
          preview_mode: true,
          schedule: true,
          schedule_details: true,
          subscription: true,
          subscription_details: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Update an invoice
   *
   * <p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
   * monetary values, as well as <code>collection_method</code>, become uneditable.</p>
   *
   * <p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
   * sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
   * <code>auto_advance=false</code>.</p>
   *
   * POST /v1/invoices/{invoice}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          account_tax_ids: "deepObject",
          application_fee_amount: "form",
          auto_advance: "form",
          automatic_tax: "deepObject",
          automatically_finalizes_at: "form",
          collection_method: "form",
          custom_fields: "deepObject",
          days_until_due: "form",
          default_payment_method: "form",
          default_source: "deepObject",
          default_tax_rates: "deepObject",
          description: "form",
          discounts: "deepObject",
          due_date: "form",
          effective_at: "deepObject",
          expand: "deepObject",
          footer: "form",
          issuer: "deepObject",
          metadata: "deepObject",
          number: "deepObject",
          on_behalf_of: "deepObject",
          payment_settings: "deepObject",
          rendering: "deepObject",
          shipping_cost: "deepObject",
          shipping_details: "deepObject",
          statement_descriptor: "form",
          transfer_data: "deepObject",
        },
        explode: {
          account_tax_ids: true,
          application_fee_amount: true,
          auto_advance: true,
          automatic_tax: true,
          automatically_finalizes_at: true,
          collection_method: true,
          custom_fields: true,
          days_until_due: true,
          default_payment_method: true,
          default_source: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          due_date: true,
          effective_at: true,
          expand: true,
          footer: true,
          issuer: true,
          metadata: true,
          number: true,
          on_behalf_of: true,
          payment_settings: true,
          rendering: true,
          shipping_cost: true,
          shipping_details: true,
          statement_descriptor: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Finalize an invoice
   *
   * <p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>
   *
   * POST /v1/invoices/{invoice}/finalize
   */
  finalize(
    request: requests.FinalizeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/finalize`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceFinalizeBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { auto_advance: "form", expand: "deepObject" },
        explode: { auto_advance: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Mark an invoice as uncollectible
   *
   * <p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>
   *
   * POST /v1/invoices/{invoice}/mark_uncollectible
   */
  markUncollectible(
    request: requests.MarkUncollectibleRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/mark_uncollectible`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceMarkUncollectibleBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Pay an invoice
   *
   * <p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>
   *
   * POST /v1/invoices/{invoice}/pay
   */
  pay(
    request: requests.PayRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/pay`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoicePayBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          forgive: "form",
          mandate: "deepObject",
          off_session: "form",
          paid_out_of_band: "form",
          payment_method: "form",
          source: "form",
        },
        explode: {
          expand: true,
          forgive: true,
          mandate: true,
          off_session: true,
          paid_out_of_band: true,
          payment_method: true,
          source: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Send an invoice for manual payment
   *
   * <p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>
   *
   * <p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>
   *
   * POST /v1/invoices/{invoice}/send
   */
  send(
    request: requests.SendRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/send`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceSendBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Void an invoice
   *
   * <p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>
   *
   * <p>Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you’re doing business in. You might need to <a href="#create_invoice">issue another invoice</a> or <a href="#create_credit_note">credit note</a> instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.</p>
   *
   * POST /v1/invoices/{invoice}/void
   */
  void_(
    request: requests.VoidRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/void`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceVoidBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
}
