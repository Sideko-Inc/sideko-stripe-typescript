import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/apps/secret/request-types";
import { Schemas$AppsSecret } from "@sideko-inc/stripe/types/apps-secret";
import { Schemas$AppsSecretCreateBody } from "@sideko-inc/stripe/types/apps-secret-create-body";
import { Schemas$AppsSecretDeleteBody } from "@sideko-inc/stripe/types/apps-secret-delete-body";
import { Schemas$AppsSecretFindScope } from "@sideko-inc/stripe/types/apps-secret-find-scope";
import { Schemas$AppsSecretListResponse } from "@sideko-inc/stripe/types/apps-secret-list-response";
import { Schemas$AppsSecretListScope } from "@sideko-inc/stripe/types/apps-secret-list-scope";
import * as z from "zod";

export class SecretClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List secrets
   *
   * <p>List all secrets stored on the given scope.</p>
   *
   * GET /v1/apps/secrets
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AppsSecretListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/apps/secrets",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "scope",
          value: Schemas$AppsSecretListScope.out.parse(request.scope),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$AppsSecretListResponse.in,
      opts,
    });
  }
  /**
   * Find a Secret
   *
   * <p>Finds a secret in the secret store by name and scope.</p>
   *
   * GET /v1/apps/secrets/find
   */
  find(
    request: requests.FindRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AppsSecret> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/apps/secrets/find",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "name",
          value: z.string().parse(request.name),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "scope",
          value: Schemas$AppsSecretFindScope.out.parse(request.scope),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$AppsSecret.in,
      opts,
    });
  }
  /**
   * Set a Secret
   *
   * <p>Create or replace a secret in the secret store.</p>
   *
   * POST /v1/apps/secrets
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AppsSecret> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/apps/secrets",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AppsSecretCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          expires_at: "form",
          name: "form",
          payload: "form",
          scope: "deepObject",
        },
        explode: {
          expand: true,
          expires_at: true,
          name: true,
          payload: true,
          scope: true,
        },
      },
      responseSchema: Schemas$AppsSecret.in,
      opts,
    });
  }
  /**
   * Delete a Secret
   *
   * <p>Deletes a secret from the secret store by name and scope.</p>
   *
   * POST /v1/apps/secrets/delete
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AppsSecret> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/apps/secrets/delete",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AppsSecretDeleteBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", name: "form", scope: "deepObject" },
        explode: { expand: true, name: true, scope: true },
      },
      responseSchema: Schemas$AppsSecret.in,
      opts,
    });
  }
}
