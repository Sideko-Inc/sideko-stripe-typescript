import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/credit-grant/request-types";
import { Schemas$BillingCreditGrant } from "@sideko-inc/stripe/types/billing-credit-grant";
import { Schemas$BillingCreditGrantCreateBody } from "@sideko-inc/stripe/types/billing-credit-grant-create-body";
import { Schemas$BillingCreditGrantExpireBody } from "@sideko-inc/stripe/types/billing-credit-grant-expire-body";
import { Schemas$BillingCreditGrantListResponse } from "@sideko-inc/stripe/types/billing-credit-grant-list-response";
import { Schemas$BillingCreditGrantUpdateBody } from "@sideko-inc/stripe/types/billing-credit-grant-update-body";
import { Schemas$BillingCreditGrantVoidBody } from "@sideko-inc/stripe/types/billing-credit-grant-void-body";
import * as z from "zod";

export class CreditGrantClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List credit grants
   *
   * <p>Retrieve a list of credit grants.</p>
   *
   * GET /v1/billing/credit_grants
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrantListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/credit_grants",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
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
      responseSchema: z.lazy(() => Schemas$BillingCreditGrantListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a credit grant
   *
   * <p>Retrieves a credit grant.</p>
   *
   * GET /v1/billing/credit_grants/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrant> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/credit_grants/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BillingCreditGrant.in),
      opts,
    });
  }
  /**
   * Create a credit grant
   *
   * <p>Creates a credit grant.</p>
   *
   * POST /v1/billing/credit_grants
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrant> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/credit_grants",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingCreditGrantCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "deepObject",
          applicability_config: "deepObject",
          category: "form",
          customer: "form",
          effective_at: "form",
          expand: "deepObject",
          expires_at: "form",
          metadata: "deepObject",
          name: "form",
          priority: "form",
        },
        explode: {
          amount: true,
          applicability_config: true,
          category: true,
          customer: true,
          effective_at: true,
          expand: true,
          expires_at: true,
          metadata: true,
          name: true,
          priority: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$BillingCreditGrant.in),
      opts,
    });
  }
  /**
   * Update a credit grant
   *
   * <p>Updates a credit grant.</p>
   *
   * POST /v1/billing/credit_grants/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrant> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/credit_grants/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingCreditGrantUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          expires_at: "deepObject",
          metadata: "deepObject",
        },
        explode: { expand: true, expires_at: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingCreditGrant.in),
      opts,
    });
  }
  /**
   * Expire a credit grant
   *
   * <p>Expires a credit grant.</p>
   *
   * POST /v1/billing/credit_grants/{id}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrant> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/credit_grants/${request.id}/expire`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingCreditGrantExpireBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingCreditGrant.in),
      opts,
    });
  }
  /**
   * Void a credit grant
   *
   * <p>Voids a credit grant.</p>
   *
   * POST /v1/billing/credit_grants/{id}/void
   */
  void_(
    request: requests.VoidRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditGrant> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/credit_grants/${request.id}/void`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingCreditGrantVoidBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingCreditGrant.in),
      opts,
    });
  }
}
