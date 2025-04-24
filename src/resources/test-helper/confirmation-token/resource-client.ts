import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/confirmation-token/request-types";
import { Schemas$ConfirmationToken } from "@sideko-inc/stripe/types/confirmation-token";
import { Schemas$TestHelperConfirmationTokenCreateBody } from "@sideko-inc/stripe/types/test-helper-confirmation-token-create-body";
import * as z from "zod";

export class ConfirmationTokenClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a test Confirmation Token
   *
   * <p>Creates a test mode Confirmation Token server side for your integration tests.</p>
   *
   * POST /v1/test_helpers/confirmation_tokens
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ConfirmationToken> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/confirmation_tokens",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperConfirmationTokenCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          payment_method: "form",
          payment_method_data: "deepObject",
          return_url: "form",
          setup_future_usage: "form",
          shipping: "deepObject",
        },
        explode: {
          expand: true,
          payment_method: true,
          payment_method_data: true,
          return_url: true,
          setup_future_usage: true,
          shipping: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$ConfirmationToken.in),
      opts,
    });
  }
}
