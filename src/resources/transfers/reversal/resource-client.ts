import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/transfers/reversal/request-types";
import { Schemas$TransferReversal } from "@sideko-inc/stripe/types/transfer-reversal";
import { Schemas$TransfersReversalCreateBody } from "@sideko-inc/stripe/types/transfers-reversal-create-body";
import { Schemas$TransfersReversalListResponse } from "@sideko-inc/stripe/types/transfers-reversal-list-response";
import { Schemas$TransfersReversalUpdateBody } from "@sideko-inc/stripe/types/transfers-reversal-update-body";
import * as z from "zod";

export class ReversalClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all reversals
   *
   * <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
   *
   * GET /v1/transfers/{id}/reversals
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TransfersReversalListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/transfers/${request.id}/reversals`,
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
      responseSchema: z.lazy(() => Schemas$TransfersReversalListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a reversal
   *
   * <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
   *
   * GET /v1/transfers/{transfer}/reversals/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TransferReversal> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/transfers/${request.transfer}/reversals/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TransferReversal.in),
      opts,
    });
  }
  /**
   * Create a transfer reversal
   *
   * <p>When you create a new reversal, you must specify a transfer to create it on.</p>
   *
   * <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>
   *
   * <p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
   *
   * POST /v1/transfers/{id}/reversals
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TransferReversal> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/transfers/${request.id}/reversals`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TransfersReversalCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
          refund_application_fee: "form",
        },
        explode: {
          amount: true,
          description: true,
          expand: true,
          metadata: true,
          refund_application_fee: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TransferReversal.in),
      opts,
    });
  }
  /**
   * Update a reversal
   *
   * <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * <p>This request only accepts metadata and description as arguments.</p>
   *
   * POST /v1/transfers/{transfer}/reversals/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TransferReversal> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/transfers/${request.transfer}/reversals/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TransfersReversalUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$TransferReversal.in),
      opts,
    });
  }
}
