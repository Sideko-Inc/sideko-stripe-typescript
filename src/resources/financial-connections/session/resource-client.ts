import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/financial-connections/session/request-types";
import { Schemas$FinancialConnectionsSession } from "@sideko-inc/stripe/types/financial-connections-session";
import { Schemas$FinancialConnectionsSessionCreateBody } from "@sideko-inc/stripe/types/financial-connections-session-create-body";
import * as z from "zod";

export class SessionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a Session
   *
   * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
   *
   * GET /v1/financial_connections/sessions/{session}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsSession> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/financial_connections/sessions/${request.session}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsSession.in),
      opts,
    });
  }
  /**
   * Create a Session
   *
   * <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
   *
   * POST /v1/financial_connections/sessions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/financial_connections/sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FinancialConnectionsSessionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          account_holder: "deepObject",
          expand: "deepObject",
          filters: "deepObject",
          permissions: "deepObject",
          prefetch: "deepObject",
          return_url: "form",
        },
        explode: {
          account_holder: true,
          expand: true,
          filters: true,
          permissions: true,
          prefetch: true,
          return_url: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsSession.in),
      opts,
    });
  }
}
