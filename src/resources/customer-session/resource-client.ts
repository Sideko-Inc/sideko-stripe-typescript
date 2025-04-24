import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer-session/request-types";
import { Schemas$CustomerSession } from "@sideko-inc/stripe/types/customer-session";
import { Schemas$CustomerSessionCreateBody } from "@sideko-inc/stripe/types/customer-session-create-body";
import * as z from "zod";

export class CustomerSessionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a Customer Session
   *
   * <p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>
   *
   * POST /v1/customer_sessions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/customer_sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSessionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          components: "deepObject",
          customer: "form",
          expand: "deepObject",
        },
        explode: { components: true, customer: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$CustomerSession.in),
      opts,
    });
  }
}
