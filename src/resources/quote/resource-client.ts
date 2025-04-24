import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  BinaryResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
  zodUploadFile,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/quote/request-types";
import { Schemas$Quote } from "@sideko-inc/stripe/types/quote";
import { Schemas$QuoteAcceptBody } from "@sideko-inc/stripe/types/quote-accept-body";
import { Schemas$QuoteCancelBody } from "@sideko-inc/stripe/types/quote-cancel-body";
import { Schemas$QuoteComputedUpfrontLineItemsResponse } from "@sideko-inc/stripe/types/quote-computed-upfront-line-items-response";
import { Schemas$QuoteCreateBody } from "@sideko-inc/stripe/types/quote-create-body";
import { Schemas$QuoteFinalizeBody } from "@sideko-inc/stripe/types/quote-finalize-body";
import { Schemas$QuoteListResponse } from "@sideko-inc/stripe/types/quote-list-response";
import { Schemas$QuoteUpdateBody } from "@sideko-inc/stripe/types/quote-update-body";
import * as z from "zod";

export class QuoteClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all quotes
   *
   * <p>Returns a list of your quotes.</p>
   *
   * GET /v1/quotes
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.QuoteListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/quotes",
      auth: ["bearerAuth"],
      query: [
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
            .enum(["accepted", "canceled", "draft", "open"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "test_clock",
          value: z.string().optional().parse(request.testClock),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$QuoteListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a quote
   *
   * <p>Retrieves the quote with the given ID.</p>
   *
   * GET /v1/quotes/{quote}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Retrieve a quote's upfront line items
   *
   * <p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>
   *
   * GET /v1/quotes/{quote}/computed_upfront_line_items
   */
  computedUpfrontLineItems(
    request: requests.ComputedUpfrontLineItemsRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.QuoteComputedUpfrontLineItemsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}/computed_upfront_line_items`,
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
      responseSchema: z.lazy(
        () => Schemas$QuoteComputedUpfrontLineItemsResponse.in,
      ),
      opts,
    });
  }
  /**
   * Download quote PDF
   *
   * <p>Download the PDF for a finalized quote. Explanation for special handling can be found <a href="https://docs.stripe.com/quotes/overview#quote_pdf">here</a></p>
   *
   * GET /v1/quotes/{quote}/pdf
   */
  pdf(
    request: requests.PdfRequest,
    opts?: RequestOptions,
  ): ApiPromise<BinaryResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}/pdf`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: zodUploadFile,
      opts,
    });
  }
  /**
   * Create a quote
   *
   * <p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>
   *
   * POST /v1/quotes
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/quotes",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$QuoteCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          application_fee_amount: "deepObject",
          application_fee_percent: "deepObject",
          automatic_tax: "deepObject",
          collection_method: "form",
          customer: "form",
          default_tax_rates: "deepObject",
          description: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          expires_at: "form",
          footer: "deepObject",
          from_quote: "deepObject",
          header: "deepObject",
          invoice_settings: "deepObject",
          line_items: "deepObject",
          metadata: "deepObject",
          on_behalf_of: "deepObject",
          subscription_data: "deepObject",
          test_clock: "form",
          transfer_data: "deepObject",
        },
        explode: {
          application_fee_amount: true,
          application_fee_percent: true,
          automatic_tax: true,
          collection_method: true,
          customer: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          expand: true,
          expires_at: true,
          footer: true,
          from_quote: true,
          header: true,
          invoice_settings: true,
          line_items: true,
          metadata: true,
          on_behalf_of: true,
          subscription_data: true,
          test_clock: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Update a quote
   *
   * <p>A quote models prices and services for a customer.</p>
   *
   * POST /v1/quotes/{quote}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$QuoteUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          application_fee_amount: "deepObject",
          application_fee_percent: "deepObject",
          automatic_tax: "deepObject",
          collection_method: "form",
          customer: "form",
          default_tax_rates: "deepObject",
          description: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          expires_at: "form",
          footer: "deepObject",
          header: "deepObject",
          invoice_settings: "deepObject",
          line_items: "deepObject",
          metadata: "deepObject",
          on_behalf_of: "deepObject",
          subscription_data: "deepObject",
          transfer_data: "deepObject",
        },
        explode: {
          application_fee_amount: true,
          application_fee_percent: true,
          automatic_tax: true,
          collection_method: true,
          customer: true,
          default_tax_rates: true,
          description: true,
          discounts: true,
          expand: true,
          expires_at: true,
          footer: true,
          header: true,
          invoice_settings: true,
          line_items: true,
          metadata: true,
          on_behalf_of: true,
          subscription_data: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Accept a quote
   *
   * <p>Accepts the specified quote.</p>
   *
   * POST /v1/quotes/{quote}/accept
   */
  accept(
    request: requests.AcceptRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/accept`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$QuoteAcceptBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Cancel a quote
   *
   * <p>Cancels the quote.</p>
   *
   * POST /v1/quotes/{quote}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$QuoteCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Finalize a quote
   *
   * <p>Finalizes the quote.</p>
   *
   * POST /v1/quotes/{quote}/finalize
   */
  finalize(
    request: requests.FinalizeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/finalize`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$QuoteFinalizeBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", expires_at: "form" },
        explode: { expand: true, expires_at: true },
      },
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
}
