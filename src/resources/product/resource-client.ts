import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { FeatureClient } from "@sideko-inc/stripe/resources/product/feature";
import * as requests from "@sideko-inc/stripe/resources/product/request-types";
import { Schemas$DeletedProduct } from "@sideko-inc/stripe/types/deleted-product";
import { Schemas$Product } from "@sideko-inc/stripe/types/product";
import { Schemas$ProductCreateBody } from "@sideko-inc/stripe/types/product-create-body";
import { Schemas$ProductListCreatedObj0 } from "@sideko-inc/stripe/types/product-list-created-obj0";
import { Schemas$ProductListResponse } from "@sideko-inc/stripe/types/product-list-response";
import { Schemas$ProductSearchResponse } from "@sideko-inc/stripe/types/product-search-response";
import { Schemas$ProductUpdateBody } from "@sideko-inc/stripe/types/product-update-body";
import * as z from "zod";

export class ProductClient extends CoreResourceClient {
  private _featureLazy?: FeatureClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.feature;
    }
  }
  get feature(): FeatureClient {
    return (
      this._featureLazy ??
      (this._featureLazy = new (require("./feature").FeatureClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * Delete a product
   *
   * <p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>
   *
   * DELETE /v1/products/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedProduct> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/products/${request.id}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedProduct.in,
      opts,
    });
  }
  /**
   * List all products
   *
   * <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>
   *
   * GET /v1/products
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ProductListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/products",
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
            .union([Schemas$ProductListCreatedObj0.out, z.number().int()])
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
          name: "ids",
          value: z.array(z.string()).optional().parse(request.ids),
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
          name: "shippable",
          value: z.boolean().optional().parse(request.shippable),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "url",
          value: z.string().optional().parse(request.url),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ProductListResponse.in),
      opts,
    });
  }
  /**
   * Search products
   *
   * <p>Search for products you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/products/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ProductSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/products/search",
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
      responseSchema: z.lazy(() => Schemas$ProductSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a product
   *
   * <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>
   *
   * GET /v1/products/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Product> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/products/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Product.in),
      opts,
    });
  }
  /**
   * Create a product
   *
   * <p>Creates a new product object.</p>
   *
   * POST /v1/products
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Product> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/products",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ProductCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          active: "form",
          default_price_data: "deepObject",
          description: "form",
          expand: "deepObject",
          id: "form",
          images: "deepObject",
          marketing_features: "deepObject",
          metadata: "deepObject",
          name: "form",
          package_dimensions: "deepObject",
          shippable: "form",
          statement_descriptor: "form",
          tax_code: "form",
          unit_label: "form",
          url: "form",
        },
        explode: {
          active: true,
          default_price_data: true,
          description: true,
          expand: true,
          id: true,
          images: true,
          marketing_features: true,
          metadata: true,
          name: true,
          package_dimensions: true,
          shippable: true,
          statement_descriptor: true,
          tax_code: true,
          unit_label: true,
          url: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Product.in),
      opts,
    });
  }
  /**
   * Update a product
   *
   * <p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/products/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Product> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/products/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ProductUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          default_price: "form",
          description: "deepObject",
          expand: "deepObject",
          images: "deepObject",
          marketing_features: "deepObject",
          metadata: "deepObject",
          name: "form",
          package_dimensions: "deepObject",
          shippable: "form",
          statement_descriptor: "form",
          tax_code: "deepObject",
          unit_label: "deepObject",
          url: "deepObject",
        },
        explode: {
          active: true,
          default_price: true,
          description: true,
          expand: true,
          images: true,
          marketing_features: true,
          metadata: true,
          name: true,
          package_dimensions: true,
          shippable: true,
          statement_descriptor: true,
          tax_code: true,
          unit_label: true,
          url: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Product.in),
      opts,
    });
  }
}
