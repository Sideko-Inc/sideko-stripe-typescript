import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/country-spec/request-types";
import { Schemas$CountrySpec } from "@sideko-inc/stripe/types/country-spec";
import { Schemas$CountrySpecListResponse } from "@sideko-inc/stripe/types/country-spec-list-response";
import * as z from "zod";

export class CountrySpecClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List Country Specs
   *
   * <p>Lists all Country Spec objects available in the API.</p>
   *
   * GET /v1/country_specs
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CountrySpecListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/country_specs",
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
      responseSchema: Schemas$CountrySpecListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a Country Spec
   *
   * <p>Returns a Country Spec for a given Country code.</p>
   *
   * GET /v1/country_specs/{country}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CountrySpec> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/country_specs/${request.country}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$CountrySpec.in,
      opts,
    });
  }
}
