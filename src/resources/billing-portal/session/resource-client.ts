import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing-portal/session/request-types";
import { Schemas$BillingPortalSession } from "@sideko-inc/stripe/types/billing-portal-session";
import { Schemas$BillingPortalSessionCreateBody } from "@sideko-inc/stripe/types/billing-portal-session-create-body";

export class SessionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a portal session
   *
   * <p>Creates a session of the customer portal.</p>
   *
   * POST /v1/billing_portal/sessions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingPortalSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing_portal/sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingPortalSessionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          configuration: "form",
          customer: "form",
          expand: "deepObject",
          flow_data: "deepObject",
          locale: "form",
          on_behalf_of: "form",
          return_url: "form",
        },
        explode: {
          configuration: true,
          customer: true,
          expand: true,
          flow_data: true,
          locale: true,
          on_behalf_of: true,
          return_url: true,
        },
      },
      responseSchema: Schemas$BillingPortalSession.in,
      opts,
    });
  }
}
