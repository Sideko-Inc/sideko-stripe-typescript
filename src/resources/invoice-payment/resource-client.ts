import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/invoice-payment/request-types";
import { Schemas$InvoicePayment } from "@sideko-inc/stripe/types/invoice-payment";
import { Schemas$InvoicePaymentListPayment } from "@sideko-inc/stripe/types/invoice-payment-list-payment";
import { Schemas$InvoicePaymentListResponse } from "@sideko-inc/stripe/types/invoice-payment-list-response";
import * as z from "zod";

export class InvoicePaymentClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all payments for an invoice
   *
   * <p>When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.</p>
   *
   * GET /v1/invoice_payments
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.InvoicePaymentListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/invoice_payments",
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
          name: "payment",
          value: Schemas$InvoicePaymentListPayment.out
            .optional()
            .parse(request.payment),
          style: "deepObject",
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
            .enum(["canceled", "open", "paid"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$InvoicePaymentListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an InvoicePayment
   *
   * <p>Retrieves the invoice payment with the given ID.</p>
   *
   * GET /v1/invoice_payments/{invoice_payment}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.InvoicePayment> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/invoice_payments/${request.invoicePayment}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$InvoicePayment.in),
      opts,
    });
  }
}
