import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/transfer/request-types";
import { Schemas$Transfer } from "@sideko-inc/stripe/types/transfer";
import { Schemas$TransferCreateBody } from "@sideko-inc/stripe/types/transfer-create-body";
import { Schemas$TransferListCreatedObj0 } from "@sideko-inc/stripe/types/transfer-list-created-obj0";
import { Schemas$TransferListResponse } from "@sideko-inc/stripe/types/transfer-list-response";
import { Schemas$TransferUpdateBody } from "@sideko-inc/stripe/types/transfer-update-body";
import * as z from "zod";

export class TransferClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all transfers
   *
   * <p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>
   *
   * GET /v1/transfers
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TransferListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/transfers",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$TransferListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "destination",
          value: z.string().optional().parse(request.destination),
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
          name: "transfer_group",
          value: z.string().optional().parse(request.transferGroup),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TransferListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a transfer
   *
   * <p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>
   *
   * GET /v1/transfers/{transfer}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Transfer> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/transfers/${request.transfer}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Transfer.in),
      opts,
    });
  }
  /**
   * Create a transfer
   *
   * <p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>
   *
   * POST /v1/transfers
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Transfer> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/transfers",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TransferCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          destination: "form",
          expand: "deepObject",
          metadata: "deepObject",
          source_transaction: "form",
          source_type: "form",
          transfer_group: "form",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          destination: true,
          expand: true,
          metadata: true,
          source_transaction: true,
          source_type: true,
          transfer_group: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Transfer.in),
      opts,
    });
  }
  /**
   * Update a transfer
   *
   * <p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * <p>This request accepts only metadata as an argument.</p>
   *
   * POST /v1/transfers/{transfer}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Transfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/transfers/${request.transfer}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TransferUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: { description: true, expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$Transfer.in),
      opts,
    });
  }
}
