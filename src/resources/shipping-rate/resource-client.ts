import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/shipping-rate/request-types";
import { Schemas$ShippingRate } from "@sideko-inc/stripe/types/shipping-rate";
import { Schemas$ShippingRateCreateBody } from "@sideko-inc/stripe/types/shipping-rate-create-body";
import { Schemas$ShippingRateListCreatedObj0 } from "@sideko-inc/stripe/types/shipping-rate-list-created-obj0";
import { Schemas$ShippingRateListResponse } from "@sideko-inc/stripe/types/shipping-rate-list-response";
import { Schemas$ShippingRateUpdateBody } from "@sideko-inc/stripe/types/shipping-rate-update-body";
import * as z from "zod";

export class ShippingRateClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all shipping rates
   *
   * <p>Returns a list of your shipping rates.</p>
   *
   * GET /v1/shipping_rates
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRateListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/shipping_rates",
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
            .union([Schemas$ShippingRateListCreatedObj0.out, z.number().int()])
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ShippingRateListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a shipping rate
   *
   * <p>Returns the shipping rate object with the given ID.</p>
   *
   * GET /v1/shipping_rates/{shipping_rate_token}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/shipping_rates/${request.shippingRateToken}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
  /**
   * Create a shipping rate
   *
   * <p>Creates a new shipping rate object.</p>
   *
   * POST /v1/shipping_rates
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/shipping_rates",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ShippingRateCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          delivery_estimate: "deepObject",
          display_name: "form",
          expand: "deepObject",
          fixed_amount: "deepObject",
          metadata: "deepObject",
          tax_behavior: "form",
          tax_code: "form",
          type: "form",
        },
        explode: {
          delivery_estimate: true,
          display_name: true,
          expand: true,
          fixed_amount: true,
          metadata: true,
          tax_behavior: true,
          tax_code: true,
          type: true,
        },
      },
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
  /**
   * Update a shipping rate
   *
   * <p>Updates an existing shipping rate object.</p>
   *
   * POST /v1/shipping_rates/{shipping_rate_token}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/shipping_rates/${request.shippingRateToken}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ShippingRateUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          expand: "deepObject",
          fixed_amount: "deepObject",
          metadata: "deepObject",
          tax_behavior: "form",
        },
        explode: {
          active: true,
          expand: true,
          fixed_amount: true,
          metadata: true,
          tax_behavior: true,
        },
      },
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
}
