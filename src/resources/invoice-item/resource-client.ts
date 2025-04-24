import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/invoice-item/request-types";
import { Schemas$DeletedInvoiceitem } from "@sideko-inc/stripe/types/deleted-invoiceitem";
import { Schemas$InvoiceItemCreateBody } from "@sideko-inc/stripe/types/invoice-item-create-body";
import { Schemas$InvoiceItemListCreatedObj0 } from "@sideko-inc/stripe/types/invoice-item-list-created-obj0";
import { Schemas$InvoiceItemListResponse } from "@sideko-inc/stripe/types/invoice-item-list-response";
import { Schemas$InvoiceItemUpdateBody } from "@sideko-inc/stripe/types/invoice-item-update-body";
import { Schemas$Invoiceitem } from "@sideko-inc/stripe/types/invoiceitem";
import * as z from "zod";

export class InvoiceItemClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete an invoice item
   *
   * <p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>
   *
   * DELETE /v1/invoiceitems/{invoiceitem}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedInvoiceitem> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/invoiceitems/${request.invoiceitem}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedInvoiceitem.in,
      opts,
    });
  }
  /**
   * List all invoice items
   *
   * <p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>
   *
   * GET /v1/invoiceitems
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.InvoiceItemListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/invoiceitems",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$InvoiceItemListCreatedObj0.out, z.number().int()])
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
          name: "pending",
          value: z.boolean().optional().parse(request.pending),
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
      responseSchema: z.lazy(() => Schemas$InvoiceItemListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an invoice item
   *
   * <p>Retrieves the invoice item with the given ID.</p>
   *
   * GET /v1/invoiceitems/{invoiceitem}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoiceitem> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/invoiceitems/${request.invoiceitem}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Invoiceitem.in),
      opts,
    });
  }
  /**
   * Create an invoice item
   *
   * <p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>
   *
   * POST /v1/invoiceitems
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoiceitem> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/invoiceitems",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$InvoiceItemCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          customer: "form",
          description: "form",
          discountable: "form",
          discounts: "deepObject",
          expand: "deepObject",
          invoice: "form",
          metadata: "deepObject",
          period: "deepObject",
          price_data: "deepObject",
          pricing: "deepObject",
          quantity: "form",
          subscription: "form",
          tax_behavior: "form",
          tax_code: "deepObject",
          tax_rates: "deepObject",
          unit_amount_decimal: "form",
        },
        explode: {
          amount: true,
          currency: true,
          customer: true,
          description: true,
          discountable: true,
          discounts: true,
          expand: true,
          invoice: true,
          metadata: true,
          period: true,
          price_data: true,
          pricing: true,
          quantity: true,
          subscription: true,
          tax_behavior: true,
          tax_code: true,
          tax_rates: true,
          unit_amount_decimal: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoiceitem.in),
      opts,
    });
  }
  /**
   * Update an invoice item
   *
   * <p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>
   *
   * POST /v1/invoiceitems/{invoiceitem}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoiceitem> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoiceitems/${request.invoiceitem}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceItemUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          description: "form",
          discountable: "form",
          discounts: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          period: "deepObject",
          price_data: "deepObject",
          pricing: "deepObject",
          quantity: "form",
          tax_behavior: "form",
          tax_code: "deepObject",
          tax_rates: "deepObject",
          unit_amount_decimal: "form",
        },
        explode: {
          amount: true,
          description: true,
          discountable: true,
          discounts: true,
          expand: true,
          metadata: true,
          period: true,
          price_data: true,
          pricing: true,
          quantity: true,
          tax_behavior: true,
          tax_code: true,
          tax_rates: true,
          unit_amount_decimal: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Invoiceitem.in),
      opts,
    });
  }
}
