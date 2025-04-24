import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/balance-transaction/request-types";
import { Schemas$CustomerBalanceTransaction } from "@sideko-inc/stripe/types/customer-balance-transaction";
import { Schemas$CustomerBalanceTransactionCreateBody } from "@sideko-inc/stripe/types/customer-balance-transaction-create-body";
import { Schemas$CustomerBalanceTransactionListResponse } from "@sideko-inc/stripe/types/customer-balance-transaction-list-response";
import { Schemas$CustomerBalanceTransactionUpdateBody } from "@sideko-inc/stripe/types/customer-balance-transaction-update-body";
import * as z from "zod";

export class BalanceTransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List customer balance transactions
   *
   * <p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
   *
   * GET /v1/customers/{customer}/balance_transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerBalanceTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/balance_transactions`,
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
        () => Schemas$CustomerBalanceTransactionListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a customer balance transaction
   *
   * <p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
   *
   * GET /v1/customers/{customer}/balance_transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerBalanceTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/balance_transactions/${request.transaction}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CustomerBalanceTransaction.in),
      opts,
    });
  }
  /**
   * Create a customer balance transaction
   *
   * <p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>
   *
   * POST /v1/customers/{customer}/balance_transactions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerBalanceTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/balance_transactions`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerBalanceTransactionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          expand: true,
          metadata: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$CustomerBalanceTransaction.in),
      opts,
    });
  }
  /**
   * Update a customer credit balance transaction
   *
   * <p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>
   *
   * POST /v1/customers/{customer}/balance_transactions/{transaction}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerBalanceTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/balance_transactions/${request.transaction}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerBalanceTransactionUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: { description: true, expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$CustomerBalanceTransaction.in),
      opts,
    });
  }
}
