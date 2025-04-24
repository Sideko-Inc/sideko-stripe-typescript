import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/transaction-entry/request-types";
import { Schemas$TreasuryTransactionEntry } from "@sideko-inc/stripe/types/treasury-transaction-entry";
import { Schemas$TreasuryTransactionEntryListCreatedObj0 } from "@sideko-inc/stripe/types/treasury-transaction-entry-list-created-obj0";
import { Schemas$TreasuryTransactionEntryListEffectiveAtObj0 } from "@sideko-inc/stripe/types/treasury-transaction-entry-list-effective-at-obj0";
import { Schemas$TreasuryTransactionEntryListResponse } from "@sideko-inc/stripe/types/treasury-transaction-entry-list-response";
import * as z from "zod";

export class TransactionEntryClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all TransactionEntries
   *
   * <p>Retrieves a list of TransactionEntry objects.</p>
   *
   * GET /v1/treasury/transaction_entries
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryTransactionEntryListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/transaction_entries",
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
              Schemas$TreasuryTransactionEntryListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "effective_at",
          value: z
            .union([
              Schemas$TreasuryTransactionEntryListEffectiveAtObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.effectiveAt),
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
            .enum(["created", "effective_at"])
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
          name: "transaction",
          value: z.string().optional().parse(request.transaction),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryTransactionEntryListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a TransactionEntry
   *
   * <p>Retrieves a TransactionEntry object.</p>
   *
   * GET /v1/treasury/transaction_entries/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryTransactionEntry> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/transaction_entries/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryTransactionEntry.in),
      opts,
    });
  }
}
