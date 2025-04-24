import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/transaction/request-types";
import { Schemas$TreasuryTransaction } from "@sideko-inc/stripe/types/treasury-transaction";
import { Schemas$TreasuryTransactionListCreatedObj0 } from "@sideko-inc/stripe/types/treasury-transaction-list-created-obj0";
import { Schemas$TreasuryTransactionListResponse } from "@sideko-inc/stripe/types/treasury-transaction-list-response";
import { Schemas$TreasuryTransactionListStatusTransitions } from "@sideko-inc/stripe/types/treasury-transaction-list-status-transitions";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all Transactions
   *
   * <p>Retrieves a list of Transaction objects.</p>
   *
   * GET /v1/treasury/transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/transactions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$TreasuryTransactionListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
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
          name: "order_by",
          value: z
            .enum(["created", "posted_at"])
            .optional()
            .parse(request.orderBy),
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
            .enum(["open", "posted", "void"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status_transitions",
          value: Schemas$TreasuryTransactionListStatusTransitions.out
            .optional()
            .parse(request.statusTransitions),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryTransactionListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a Transaction
   *
   * <p>Retrieves the details of an existing Transaction.</p>
   *
   * GET /v1/treasury/transactions/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/transactions/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryTransaction.in),
      opts,
    });
  }
}
