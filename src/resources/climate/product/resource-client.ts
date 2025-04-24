import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/climate/product/request-types";
import { Schemas$ClimateProduct } from "@sideko-inc/stripe/types/climate-product";
import { Schemas$ClimateProductListResponse } from "@sideko-inc/stripe/types/climate-product-list-response";
import * as z from "zod";

export class ProductClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List products
   *
   * <p>Lists all available Climate product objects.</p>
   *
   * GET /v1/climate/products
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateProductListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/climate/products",
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
      responseSchema: Schemas$ClimateProductListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a product
   *
   * <p>Retrieves the details of a Climate product with the given ID.</p>
   *
   * GET /v1/climate/products/{product}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateProduct> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/climate/products/${request.product}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ClimateProduct.in,
      opts,
    });
  }
}
