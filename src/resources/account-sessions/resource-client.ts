import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account-sessions/request-types";
import { Schemas$AccountSession } from "@sideko-inc/stripe/types/account-session";
import { Schemas$AccountSessionsCreateBody } from "@sideko-inc/stripe/types/account-sessions-create-body";

export class AccountSessionsClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create an Account Session
   *
   * <p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>
   *
   * POST /v1/account_sessions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/account_sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountSessionsCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          account: "form",
          components: "deepObject",
          expand: "deepObject",
        },
        explode: { account: true, components: true, expand: true },
      },
      responseSchema: Schemas$AccountSession.in,
      opts,
    });
  }
}
