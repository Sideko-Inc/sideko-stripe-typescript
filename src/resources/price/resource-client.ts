import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/price/request-types";
import { Schemas$Price } from "@sideko-inc/stripe/types/price";
import { Schemas$PriceCreateBody } from "@sideko-inc/stripe/types/price-create-body";
import { Schemas$PriceListCreatedObj0 } from "@sideko-inc/stripe/types/price-list-created-obj0";
import { Schemas$PriceListRecurring } from "@sideko-inc/stripe/types/price-list-recurring";
import { Schemas$PriceListResponse } from "@sideko-inc/stripe/types/price-list-response";
import { Schemas$PriceSearchResponse } from "@sideko-inc/stripe/types/price-search-response";
import { Schemas$PriceUpdateBody } from "@sideko-inc/stripe/types/price-update-body";
import * as z from "zod";

export class PriceClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all prices
   *
   * <p>Returns a list of your active prices, excluding <a href="/docs/products-prices/pricing-models#inline-pricing">inline prices</a>. For the list of inactive prices, set <code>active</code> to false.</p>
   *
   * GET /v1/prices
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PriceListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/prices",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$PriceListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "currency",
          value: z.string().optional().parse(request.currency),
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
          name: "lookup_keys",
          value: z.array(z.string()).optional().parse(request.lookupKeys),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "product",
          value: z.string().optional().parse(request.product),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "recurring",
          value: Schemas$PriceListRecurring.out
            .optional()
            .parse(request.recurring),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "type",
          value: z
            .enum(["one_time", "recurring"])
            .optional()
            .parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PriceListResponse.in),
      opts,
    });
  }
  /**
   * Search prices
   *
   * <p>Search for prices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/prices/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PriceSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/prices/search",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PriceSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a price
   *
   * <p>Retrieves the price with the given ID.</p>
   *
   * GET /v1/prices/{price}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Price> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/prices/${request.price}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Price.in),
      opts,
    });
  }
  /**
   * Create a price
   *
   * <p>Creates a new <a href="https://docs.stripe.com/api/prices">Price</a> for an existing <a href="https://docs.stripe.com/api/products">Product</a>. The Price can be recurring or one-time.</p>
   *
   * POST /v1/prices
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Price> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/prices",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PriceCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          active: "form",
          billing_scheme: "form",
          currency: "form",
          currency_options: "deepObject",
          custom_unit_amount: "deepObject",
          expand: "deepObject",
          lookup_key: "form",
          metadata: "deepObject",
          nickname: "form",
          product: "form",
          product_data: "deepObject",
          recurring: "deepObject",
          tax_behavior: "form",
          tiers: "deepObject",
          tiers_mode: "form",
          transfer_lookup_key: "form",
          transform_quantity: "deepObject",
          unit_amount: "form",
          unit_amount_decimal: "form",
        },
        explode: {
          active: true,
          billing_scheme: true,
          currency: true,
          currency_options: true,
          custom_unit_amount: true,
          expand: true,
          lookup_key: true,
          metadata: true,
          nickname: true,
          product: true,
          product_data: true,
          recurring: true,
          tax_behavior: true,
          tiers: true,
          tiers_mode: true,
          transfer_lookup_key: true,
          transform_quantity: true,
          unit_amount: true,
          unit_amount_decimal: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Price.in),
      opts,
    });
  }
  /**
   * Update a price
   *
   * <p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>
   *
   * POST /v1/prices/{price}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Price> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/prices/${request.price}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PriceUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          currency_options: "deepObject",
          expand: "deepObject",
          lookup_key: "form",
          metadata: "deepObject",
          nickname: "form",
          tax_behavior: "form",
          transfer_lookup_key: "form",
        },
        explode: {
          active: true,
          currency_options: true,
          expand: true,
          lookup_key: true,
          metadata: true,
          nickname: true,
          tax_behavior: true,
          transfer_lookup_key: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Price.in),
      opts,
    });
  }
}
