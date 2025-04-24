import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/balance/history/request-types";
import { Schemas$BalanceHistoryListCreatedObj0 } from "@sideko-inc/stripe/types/balance-history-list-created-obj0";
import { Schemas$BalanceHistoryListResponse } from "@sideko-inc/stripe/types/balance-history-list-response";
import { Schemas$BalanceTransaction } from "@sideko-inc/stripe/types/balance-transaction";
import * as z from "zod";

export class HistoryClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all balance transactions
   *
   * <p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>
   *
   * <p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>
   *
   * GET /v1/balance/history
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.BalanceHistoryListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/balance/history",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$BalanceHistoryListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "currency",
          value: z.string().optional().parse(request.currency),
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
          name: "payout",
          value: z.string().optional().parse(request.payout),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "source",
          value: z.string().optional().parse(request.source),
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
          name: "type",
          value: z.string().optional().parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BalanceHistoryListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a balance transaction
   *
   * <p>Retrieves the balance transaction with the given ID.</p>
   *
   * <p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>
   *
   * GET /v1/balance/history/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BalanceTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/balance/history/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BalanceTransaction.in),
      opts,
    });
  }
}
