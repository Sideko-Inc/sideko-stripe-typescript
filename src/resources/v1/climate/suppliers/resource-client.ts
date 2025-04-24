import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/v1/climate/suppliers/request-types";
import { Schemas$V1ClimateSuppliersListResponse } from "@sideko-inc/stripe/types/v1-climate-suppliers-list-response";
import * as z from "zod";

export class SuppliersClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List suppliers
   *
   * <p>Lists all available Climate supplier objects.</p>
   *
   * GET /v1/climate/suppliers
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.V1ClimateSuppliersListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/climate/suppliers",
      auth: ["bearerAuth"],
      query: [
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
      responseSchema: Schemas$V1ClimateSuppliersListResponse.in,
      opts,
    });
  }
}
