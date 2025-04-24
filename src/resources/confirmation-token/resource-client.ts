import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/confirmation-token/request-types";
import { Schemas$ConfirmationToken } from "@sideko-inc/stripe/types/confirmation-token";
import * as z from "zod";

export class ConfirmationTokenClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a ConfirmationToken
   *
   * <p>Retrieves an existing ConfirmationToken object</p>
   *
   * GET /v1/confirmation_tokens/{confirmation_token}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ConfirmationToken> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/confirmation_tokens/${request.confirmationToken}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ConfirmationToken.in),
      opts,
    });
  }
}
