import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/exchange-rate/request-types";
import { Schemas$ExchangeRate } from "@sideko-inc/stripe/types/exchange-rate";
import { Schemas$ExchangeRateListResponse } from "@sideko-inc/stripe/types/exchange-rate-list-response";
import * as z from "zod";

export class ExchangeRateClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all exchange rates
   *
   * <p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>
   *
   * GET /v1/exchange_rates
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ExchangeRateListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/exchange_rates",
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
      responseSchema: Schemas$ExchangeRateListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve an exchange rate
   *
   * <p>Retrieves the exchange rates from the given currency to every supported currency.</p>
   *
   * GET /v1/exchange_rates/{rate_id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ExchangeRate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/exchange_rates/${request.rateId}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ExchangeRate.in,
      opts,
    });
  }
}
