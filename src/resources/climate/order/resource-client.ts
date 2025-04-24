import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/climate/order/request-types";
import { Schemas$ClimateOrder } from "@sideko-inc/stripe/types/climate-order";
import { Schemas$ClimateOrderCancelBody } from "@sideko-inc/stripe/types/climate-order-cancel-body";
import { Schemas$ClimateOrderCreateBody } from "@sideko-inc/stripe/types/climate-order-create-body";
import { Schemas$ClimateOrderListResponse } from "@sideko-inc/stripe/types/climate-order-list-response";
import { Schemas$ClimateOrderUpdateBody } from "@sideko-inc/stripe/types/climate-order-update-body";
import * as z from "zod";

export class OrderClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List orders
   *
   * <p>Lists all Climate order objects. The orders are returned sorted by creation date, with the
   * most recently created orders appearing first.</p>
   *
   * GET /v1/climate/orders
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateOrderListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/climate/orders",
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
      responseSchema: Schemas$ClimateOrderListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve an order
   *
   * <p>Retrieves the details of a Climate order object with the given ID.</p>
   *
   * GET /v1/climate/orders/{order}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateOrder> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/climate/orders/${request.order}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ClimateOrder.in,
      opts,
    });
  }
  /**
   * Create an order
   *
   * <p>Creates a Climate order object for a given Climate product. The order will be processed immediately
   * after creation and payment will be deducted your Stripe balance.</p>
   *
   * POST /v1/climate/orders
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateOrder> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/climate/orders",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ClimateOrderCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          beneficiary: "deepObject",
          currency: "form",
          expand: "deepObject",
          metadata: "deepObject",
          metric_tons: "form",
          product: "form",
        },
        explode: {
          amount: true,
          beneficiary: true,
          currency: true,
          expand: true,
          metadata: true,
          metric_tons: true,
          product: true,
        },
      },
      responseSchema: Schemas$ClimateOrder.in,
      opts,
    });
  }
  /**
   * Update an order
   *
   * <p>Updates the specified order by setting the values of the parameters passed.</p>
   *
   * POST /v1/climate/orders/{order}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateOrder> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/climate/orders/${request.order}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ClimateOrderUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          beneficiary: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: { beneficiary: true, expand: true, metadata: true },
      },
      responseSchema: Schemas$ClimateOrder.in,
      opts,
    });
  }
  /**
   * Cancel an order
   *
   * <p>Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
   * reservation <code>amount_subtotal</code>, but not the <code>amount_fees</code> for user-triggered cancellations. Frontier
   * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
   * provides 90 days advance notice and refunds the <code>amount_total</code>.</p>
   *
   * POST /v1/climate/orders/{order}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateOrder> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/climate/orders/${request.order}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ClimateOrderCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$ClimateOrder.in,
      opts,
    });
  }
}
