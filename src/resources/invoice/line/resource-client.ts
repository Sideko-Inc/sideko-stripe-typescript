import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/invoice/line/request-types";
import { Schemas$Invoice } from "@sideko-inc/stripe/types/invoice";
import { Schemas$InvoiceLineCreateManyBody } from "@sideko-inc/stripe/types/invoice-line-create-many-body";
import { Schemas$InvoiceLineListResponse } from "@sideko-inc/stripe/types/invoice-line-list-response";
import { Schemas$InvoiceLineRemoveManyBody } from "@sideko-inc/stripe/types/invoice-line-remove-many-body";
import { Schemas$InvoiceLineUpdateBody } from "@sideko-inc/stripe/types/invoice-line-update-body";
import { Schemas$InvoiceLineUpdateManyBody } from "@sideko-inc/stripe/types/invoice-line-update-many-body";
import { Schemas$LineItem } from "@sideko-inc/stripe/types/line-item";
import * as z from "zod";

export class LineClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve an invoice's line items
   *
   * <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>
   *
   * GET /v1/invoices/{invoice}/lines
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.InvoiceLineListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/invoices/${request.invoice}/lines`,
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
      responseSchema: z.lazy(() => Schemas$InvoiceLineListResponse.in),
      opts,
    });
  }
  /**
   * Bulk add invoice line items
   *
   * <p>Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * POST /v1/invoices/{invoice}/add_lines
   */
  createMany(
    request: requests.CreateManyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/add_lines`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$InvoiceLineCreateManyBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          invoice_metadata: "deepObject",
          lines: "deepObject",
        },
        explode: { expand: true, invoice_metadata: true, lines: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Update an invoice's line item
   *
   * <p>Updates an invoice’s line item. Some fields, such as <code>tax_amounts</code>, only live on the invoice line item,
   * so they can only be updated through this endpoint. Other fields, such as <code>amount</code>, live on both the invoice
   * item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
   * Updating an invoice’s line item is only possible before the invoice is finalized.</p>
   *
   * POST /v1/invoices/{invoice}/lines/{line_item_id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.LineItem> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/lines/${request.lineItemId}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$InvoiceLineUpdateBody.out.parse(request.data)
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
          tax_amounts: "deepObject",
          tax_rates: "deepObject",
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
          tax_amounts: true,
          tax_rates: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$LineItem.in),
      opts,
    });
  }
  /**
   * Bulk remove invoice line items
   *
   * <p>Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * POST /v1/invoices/{invoice}/remove_lines
   */
  removeMany(
    request: requests.RemoveManyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/remove_lines`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$InvoiceLineRemoveManyBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          invoice_metadata: "deepObject",
          lines: "deepObject",
        },
        explode: { expand: true, invoice_metadata: true, lines: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
  /**
   * Bulk update invoice line items
   *
   * <p>Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.</p>
   *
   * POST /v1/invoices/{invoice}/update_lines
   */
  updateMany(
    request: requests.UpdateManyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Invoice> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/invoices/${request.invoice}/update_lines`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$InvoiceLineUpdateManyBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          invoice_metadata: "deepObject",
          lines: "deepObject",
        },
        explode: { expand: true, invoice_metadata: true, lines: true },
      },
      responseSchema: z.lazy(() => Schemas$Invoice.in),
      opts,
    });
  }
}
