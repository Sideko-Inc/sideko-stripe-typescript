import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/terminal/connection-token/request-types";
import { Schemas$TerminalConnectionToken } from "@sideko-inc/stripe/types/terminal-connection-token";
import { Schemas$TerminalConnectionTokenCreateBody } from "@sideko-inc/stripe/types/terminal-connection-token-create-body";

export class ConnectionTokenClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a Connection Token
   *
   * <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>
   *
   * POST /v1/terminal/connection_tokens
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalConnectionToken> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/terminal/connection_tokens",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalConnectionTokenCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", location: "form" },
        explode: { expand: true, location: true },
      },
      responseSchema: Schemas$TerminalConnectionToken.in,
      opts,
    });
  }
}
