import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/token/request-types";
import { Schemas$IssuingToken } from "@sideko-inc/stripe/types/issuing-token";
import { Schemas$IssuingTokenListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-token-list-created-obj0";
import { Schemas$IssuingTokenListResponse } from "@sideko-inc/stripe/types/issuing-token-list-response";
import { Schemas$IssuingTokenUpdateBody } from "@sideko-inc/stripe/types/issuing-token-update-body";
import * as z from "zod";

export class TokenClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all issuing tokens for card
   *
   * <p>Lists all Issuing <code>Token</code> objects for a given card.</p>
   *
   * GET /v1/issuing/tokens
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTokenListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/tokens",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "card",
          value: z.string().parse(request.card),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$IssuingTokenListCreatedObj0.out, z.number().int()])
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["active", "deleted", "requested", "suspended"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingTokenListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an issuing token
   *
   * <p>Retrieves an Issuing <code>Token</code> object.</p>
   *
   * GET /v1/issuing/tokens/{token}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingToken> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/tokens/${request.token}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingToken.in),
      opts,
    });
  }
  /**
   * Update a token status
   *
   * <p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>
   *
   * POST /v1/issuing/tokens/{token}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingToken> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/tokens/${request.token}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$IssuingTokenUpdateBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", status: "form" },
        explode: { expand: true, status: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingToken.in),
      opts,
    });
  }
}
