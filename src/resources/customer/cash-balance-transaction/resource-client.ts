import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/cash-balance-transaction/request-types";
import { Schemas$CustomerCashBalanceTransaction } from "@sideko-inc/stripe/types/customer-cash-balance-transaction";
import { Schemas$CustomerCashBalanceTransactionListResponse } from "@sideko-inc/stripe/types/customer-cash-balance-transaction-list-response";
import * as z from "zod";

export class CashBalanceTransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List cash balance transactions
   *
   * <p>Returns a list of transactions that modified the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
   *
   * GET /v1/customers/{customer}/cash_balance_transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerCashBalanceTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/cash_balance_transactions`,
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
        () => Schemas$CustomerCashBalanceTransactionListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a cash balance transaction
   *
   * <p>Retrieves a specific cash balance transaction, which updated the customer’s <a href="/docs/payments/customer-balance">cash balance</a>.</p>
   *
   * GET /v1/customers/{customer}/cash_balance_transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerCashBalanceTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/cash_balance_transactions/${request.transaction}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CustomerCashBalanceTransaction.in),
      opts,
    });
  }
}
