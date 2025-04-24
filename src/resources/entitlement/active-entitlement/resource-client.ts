import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/entitlement/active-entitlement/request-types";
import { Schemas$EntitlementActiveEntitlementListResponse } from "@sideko-inc/stripe/types/entitlement-active-entitlement-list-response";
import { Schemas$EntitlementsActiveEntitlement } from "@sideko-inc/stripe/types/entitlements-active-entitlement";
import * as z from "zod";

export class ActiveEntitlementClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all active entitlements
   *
   * <p>Retrieve a list of active entitlements for a customer</p>
   *
   * GET /v1/entitlements/active_entitlements
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementActiveEntitlementListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/entitlements/active_entitlements",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "customer",
          value: z.string().parse(request.customer),
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
      responseSchema: Schemas$EntitlementActiveEntitlementListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve an active entitlement
   *
   * <p>Retrieve an active entitlement</p>
   *
   * GET /v1/entitlements/active_entitlements/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementsActiveEntitlement> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/entitlements/active_entitlements/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$EntitlementsActiveEntitlement.in,
      opts,
    });
  }
}
