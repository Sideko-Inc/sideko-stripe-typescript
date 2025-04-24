import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/authorization/request-types";
import { Schemas$IssuingAuthorization } from "@sideko-inc/stripe/types/issuing-authorization";
import { Schemas$IssuingAuthorizationApproveBody } from "@sideko-inc/stripe/types/issuing-authorization-approve-body";
import { Schemas$IssuingAuthorizationDeclineBody } from "@sideko-inc/stripe/types/issuing-authorization-decline-body";
import { Schemas$IssuingAuthorizationListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-authorization-list-created-obj0";
import { Schemas$IssuingAuthorizationListResponse } from "@sideko-inc/stripe/types/issuing-authorization-list-response";
import { Schemas$IssuingAuthorizationUpdateBody } from "@sideko-inc/stripe/types/issuing-authorization-update-body";
import * as z from "zod";

export class AuthorizationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all authorizations
   *
   * <p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/authorizations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorizationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/authorizations",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "card",
          value: z.string().optional().parse(request.card),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "cardholder",
          value: z.string().optional().parse(request.cardholder),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IssuingAuthorizationListCreatedObj0.out,
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["closed", "expired", "pending", "reversed"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingAuthorizationListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an authorization
   *
   * <p>Retrieves an Issuing <code>Authorization</code> object.</p>
   *
   * GET /v1/issuing/authorizations/{authorization}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/authorizations/${request.authorization}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Update an authorization
   *
   * <p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/issuing/authorizations/{authorization}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/authorizations/${request.authorization}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingAuthorizationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Approve an authorization
   *
   * <p>[Deprecated] Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow.
   * This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to approve an authorization</a>.</p>
   *
   * POST /v1/issuing/authorizations/{authorization}/approve
   */
  approve(
    request: requests.ApproveRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/authorizations/${request.authorization}/approve`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingAuthorizationApproveBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { amount: "form", expand: "deepObject", metadata: "deepObject" },
        explode: { amount: true, expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Decline an authorization
   *
   * <p>[Deprecated] Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.
   * This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to decline an authorization</a>.</p>
   *
   * POST /v1/issuing/authorizations/{authorization}/decline
   */
  decline(
    request: requests.DeclineRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/authorizations/${request.authorization}/decline`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingAuthorizationDeclineBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
}
