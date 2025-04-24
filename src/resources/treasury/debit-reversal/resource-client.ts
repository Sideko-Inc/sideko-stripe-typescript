import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/debit-reversal/request-types";
import { Schemas$TreasuryDebitReversal } from "@sideko-inc/stripe/types/treasury-debit-reversal";
import { Schemas$TreasuryDebitReversalCreateBody } from "@sideko-inc/stripe/types/treasury-debit-reversal-create-body";
import { Schemas$TreasuryDebitReversalListResponse } from "@sideko-inc/stripe/types/treasury-debit-reversal-list-response";
import * as z from "zod";

export class DebitReversalClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all DebitReversals
   *
   * <p>Returns a list of DebitReversals.</p>
   *
   * GET /v1/treasury/debit_reversals
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryDebitReversalListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/debit_reversals",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
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
          name: "received_debit",
          value: z.string().optional().parse(request.receivedDebit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "resolution",
          value: z.enum(["lost", "won"]).optional().parse(request.resolution),
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
            .enum(["canceled", "completed", "processing"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryDebitReversalListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a DebitReversal
   *
   * <p>Retrieves a DebitReversal object.</p>
   *
   * GET /v1/treasury/debit_reversals/{debit_reversal}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryDebitReversal> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/debit_reversals/${request.debitReversal}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryDebitReversal.in),
      opts,
    });
  }
  /**
   * Create a DebitReversal
   *
   * <p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
   *
   * POST /v1/treasury/debit_reversals
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryDebitReversal> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/debit_reversals",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryDebitReversalCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          metadata: "deepObject",
          received_debit: "form",
        },
        explode: { expand: true, metadata: true, received_debit: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryDebitReversal.in),
      opts,
    });
  }
}
