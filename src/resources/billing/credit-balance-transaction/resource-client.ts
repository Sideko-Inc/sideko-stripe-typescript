import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/credit-balance-transaction/request-types";
import { Schemas$BillingCreditBalanceTransaction } from "@sideko-inc/stripe/types/billing-credit-balance-transaction";
import { Schemas$BillingCreditBalanceTransactionListResponse } from "@sideko-inc/stripe/types/billing-credit-balance-transaction-list-response";
import * as z from "zod";

export class CreditBalanceTransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List credit balance transactions
   *
   * <p>Retrieve a list of credit balance transactions.</p>
   *
   * GET /v1/billing/credit_balance_transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditBalanceTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/credit_balance_transactions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "customer",
          value: z.string().parse(request.customer),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "credit_grant",
          value: z.string().optional().parse(request.creditGrant),
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
      ],
      responseSchema: z.lazy(
        () => Schemas$BillingCreditBalanceTransactionListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a credit balance transaction
   *
   * <p>Retrieves a credit balance transaction.</p>
   *
   * GET /v1/billing/credit_balance_transactions/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditBalanceTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/credit_balance_transactions/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BillingCreditBalanceTransaction.in),
      opts,
    });
  }
}
