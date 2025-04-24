import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/credit-reversal/request-types";
import { Schemas$TreasuryCreditReversal } from "@sideko-inc/stripe/types/treasury-credit-reversal";
import { Schemas$TreasuryCreditReversalCreateBody } from "@sideko-inc/stripe/types/treasury-credit-reversal-create-body";
import { Schemas$TreasuryCreditReversalListResponse } from "@sideko-inc/stripe/types/treasury-credit-reversal-list-response";
import * as z from "zod";

export class CreditReversalClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all CreditReversals
   *
   * <p>Returns a list of CreditReversals.</p>
   *
   * GET /v1/treasury/credit_reversals
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryCreditReversalListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/credit_reversals",
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
          name: "received_credit",
          value: z.string().optional().parse(request.receivedCredit),
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
            .enum(["canceled", "posted", "processing"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryCreditReversalListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a CreditReversal
   *
   * <p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>
   *
   * GET /v1/treasury/credit_reversals/{credit_reversal}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryCreditReversal> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/credit_reversals/${request.creditReversal}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryCreditReversal.in),
      opts,
    });
  }
  /**
   * Create a CreditReversal
   *
   * <p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>
   *
   * POST /v1/treasury/credit_reversals
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryCreditReversal> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/credit_reversals",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryCreditReversalCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          metadata: "deepObject",
          received_credit: "form",
        },
        explode: { expand: true, metadata: true, received_credit: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryCreditReversal.in),
      opts,
    });
  }
}
