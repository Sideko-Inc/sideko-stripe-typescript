import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/linked-account/owners/request-types";
import { Schemas$LinkedAccountOwnersListResponse } from "@sideko-inc/stripe/types/linked-account-owners-list-response";
import * as z from "zod";

export class OwnersClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List Account Owners
   *
   * <p>Lists all owners for a given <code>Account</code></p>
   *
   * GET /v1/linked_accounts/{account}/owners
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.LinkedAccountOwnersListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/linked_accounts/${request.account}/owners`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "ownership",
          value: z.string().parse(request.ownership),
          style: "form",
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
      responseSchema: Schemas$LinkedAccountOwnersListResponse.in,
      opts,
    });
  }
}
