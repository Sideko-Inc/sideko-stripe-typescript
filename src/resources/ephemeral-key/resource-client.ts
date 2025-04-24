import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/ephemeral-key/request-types";
import { Schemas$EphemeralKey } from "@sideko-inc/stripe/types/ephemeral-key";
import { Schemas$EphemeralKeyCreateBody } from "@sideko-inc/stripe/types/ephemeral-key-create-body";
import { Schemas$EphemeralKeyDeleteBody } from "@sideko-inc/stripe/types/ephemeral-key-delete-body";

export class EphemeralKeyClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Immediately invalidate an ephemeral key
   *
   * <p>Invalidates a short-lived API key for a given resource.</p>
   *
   * DELETE /v1/ephemeral_keys/{key}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EphemeralKey> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/ephemeral_keys/${request.key}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$EphemeralKeyDeleteBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$EphemeralKey.in,
      opts,
    });
  }
  /**
   * Create an ephemeral key
   *
   * <p>Creates a short-lived API key for a given resource.</p>
   *
   * POST /v1/ephemeral_keys
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.EphemeralKey> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/ephemeral_keys",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$EphemeralKeyCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          customer: "form",
          expand: "deepObject",
          issuing_card: "form",
          nonce: "form",
          verification_session: "form",
        },
        explode: {
          customer: true,
          expand: true,
          issuing_card: true,
          nonce: true,
          verification_session: true,
        },
      },
      responseSchema: Schemas$EphemeralKey.in,
      opts,
    });
  }
}
