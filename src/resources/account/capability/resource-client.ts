import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account/capability/request-types";
import { Schemas$AccountCapabilityCreateBody } from "@sideko-inc/stripe/types/account-capability-create-body";
import { Schemas$AccountCapabilityListResponse } from "@sideko-inc/stripe/types/account-capability-list-response";
import { Schemas$Capability } from "@sideko-inc/stripe/types/capability";
import * as z from "zod";

export class CapabilityClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all account capabilities
   *
   * <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
   *
   * GET /v1/accounts/{account}/capabilities
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountCapabilityListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/capabilities`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$AccountCapabilityListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an Account Capability
   *
   * <p>Retrieves information about the specified Account Capability.</p>
   *
   * GET /v1/accounts/{account}/capabilities/{capability}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Capability> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/capabilities/${request.capability}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Capability.in),
      opts,
    });
  }
  /**
   * Update an Account Capability
   *
   * <p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>
   *
   * POST /v1/accounts/{account}/capabilities/{capability}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Capability> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/capabilities/${request.capability}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$AccountCapabilityCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", requested: "form" },
        explode: { expand: true, requested: true },
      },
      responseSchema: z.lazy(() => Schemas$Capability.in),
      opts,
    });
  }
}
