import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/setup-attempt/request-types";
import { Schemas$SetupAttemptListCreatedObj0 } from "@sideko-inc/stripe/types/setup-attempt-list-created-obj0";
import { Schemas$SetupAttemptListResponse } from "@sideko-inc/stripe/types/setup-attempt-list-response";
import * as z from "zod";

export class SetupAttemptClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all SetupAttempts
   *
   * <p>Returns a list of SetupAttempts that associate with a provided SetupIntent.</p>
   *
   * GET /v1/setup_attempts
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupAttemptListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/setup_attempts",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "setup_intent",
          value: z.string().parse(request.setupIntent),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$SetupAttemptListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
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
      responseSchema: z.lazy(() => Schemas$SetupAttemptListResponse.in),
      opts,
    });
  }
}
