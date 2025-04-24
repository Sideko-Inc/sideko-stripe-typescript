import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/transaction/line-items/request-types";
import { Schemas$TaxTransactionLineItemsListResponse } from "@sideko-inc/stripe/types/tax-transaction-line-items-list-response";
import * as z from "zod";

export class LineItemsClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a transaction's line items
   *
   * <p>Retrieves the line items of a committed standalone transaction as a collection.</p>
   *
   * GET /v1/tax/transactions/{transaction}/line_items
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransactionLineItemsListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/transactions/${request.transaction}/line_items`,
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
      responseSchema: Schemas$TaxTransactionLineItemsListResponse.in,
      opts,
    });
  }
}
