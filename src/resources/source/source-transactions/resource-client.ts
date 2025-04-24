import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/source/source-transactions/request-types";
import { Schemas$SourceSourceTransactionsListResponse } from "@sideko-inc/stripe/types/source-source-transactions-list-response";
import { Schemas$SourceTransaction } from "@sideko-inc/stripe/types/source-transaction";
import * as z from "zod";

export class SourceTransactionsClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * <p>List source transactions for a given source.</p>
   *
   * GET /v1/sources/{source}/source_transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SourceSourceTransactionsListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sources/${request.source}/source_transactions`,
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
      responseSchema: Schemas$SourceSourceTransactionsListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a source transaction
   *
   * <p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>
   *
   * GET /v1/sources/{source}/source_transactions/{source_transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SourceTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sources/${request.source}/source_transactions/${request.sourceTransaction}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$SourceTransaction.in,
      opts,
    });
  }
}
