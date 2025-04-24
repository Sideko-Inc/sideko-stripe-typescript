import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/product/feature/request-types";
import { Schemas$DeletedProductFeature } from "@sideko-inc/stripe/types/deleted-product-feature";
import { Schemas$ProductFeature } from "@sideko-inc/stripe/types/product-feature";
import { Schemas$ProductFeatureCreateBody } from "@sideko-inc/stripe/types/product-feature-create-body";
import { Schemas$ProductFeatureListResponse } from "@sideko-inc/stripe/types/product-feature-list-response";
import * as z from "zod";

export class FeatureClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Remove a feature from a product
   *
   * <p>Deletes the feature attachment to a product</p>
   *
   * DELETE /v1/products/{product}/features/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedProductFeature> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/products/${request.product}/features/${request.id}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedProductFeature.in,
      opts,
    });
  }
  /**
   * List all features attached to a product
   *
   * <p>Retrieve a list of features for a product</p>
   *
   * GET /v1/products/{product}/features
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProductFeatureListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/products/${request.product}/features`,
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
      responseSchema: Schemas$ProductFeatureListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a product_feature
   *
   * <p>Retrieves a product_feature, which represents a feature attachment to a product</p>
   *
   * GET /v1/products/{product}/features/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProductFeature> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/products/${request.product}/features/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ProductFeature.in,
      opts,
    });
  }
  /**
   * Attach a feature to a product
   *
   * <p>Creates a product_feature, which represents a feature attachment to a product</p>
   *
   * POST /v1/products/{product}/features
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProductFeature> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/products/${request.product}/features`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ProductFeatureCreateBody.out.parse(request),
      bodyEncoding: {
        style: { entitlement_feature: "form", expand: "deepObject" },
        explode: { entitlement_feature: true, expand: true },
      },
      responseSchema: Schemas$ProductFeature.in,
      opts,
    });
  }
}
