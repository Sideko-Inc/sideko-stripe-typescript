import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account-link/request-types";
import { Schemas$AccountLink } from "@sideko-inc/stripe/types/account-link";
import { Schemas$AccountLinkCreateBody } from "@sideko-inc/stripe/types/account-link-create-body";

export class AccountLinkClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create an account link
   *
   * <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
   *
   * POST /v1/account_links
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountLink> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/account_links",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountLinkCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          account: "form",
          collect: "form",
          collection_options: "deepObject",
          expand: "deepObject",
          refresh_url: "form",
          return_url: "form",
          type: "form",
        },
        explode: {
          account: true,
          collect: true,
          collection_options: true,
          expand: true,
          refresh_url: true,
          return_url: true,
          type: true,
        },
      },
      responseSchema: Schemas$AccountLink.in,
      opts,
    });
  }
}
