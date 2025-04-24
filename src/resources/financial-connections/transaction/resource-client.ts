import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/financial-connections/transaction/request-types";
import { Schemas$FinancialConnectionsTransaction } from "@sideko-inc/stripe/types/financial-connections-transaction";
import { Schemas$FinancialConnectionsTransactionListResponse } from "@sideko-inc/stripe/types/financial-connections-transaction-list-response";
import { Schemas$FinancialConnectionsTransactionListTransactedAtObj0 } from "@sideko-inc/stripe/types/financial-connections-transaction-list-transacted-at-obj0";
import { Schemas$FinancialConnectionsTransactionListTransactionRefresh } from "@sideko-inc/stripe/types/financial-connections-transaction-list-transaction-refresh";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List Transactions
   *
   * <p>Returns a list of Financial Connections <code>Transaction</code> objects.</p>
   *
   * GET /v1/financial_connections/transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/financial_connections/transactions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "account",
          value: z.string().parse(request.account),
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
          name: "transacted_at",
          value: z
            .union([
              Schemas$FinancialConnectionsTransactionListTransactedAtObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.transactedAt),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "transaction_refresh",
          value:
            Schemas$FinancialConnectionsTransactionListTransactionRefresh.out
              .optional()
              .parse(request.transactionRefresh),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$FinancialConnectionsTransactionListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a Transaction
   *
   * <p>Retrieves the details of a Financial Connections <code>Transaction</code></p>
   *
   * GET /v1/financial_connections/transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/financial_connections/transactions/${request.transaction}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$FinancialConnectionsTransaction.in,
      opts,
    });
  }
}
