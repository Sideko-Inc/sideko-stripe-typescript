import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/subscription-item/request-types";
import { Schemas$DeletedSubscriptionItem } from "@sideko-inc/stripe/types/deleted-subscription-item";
import { Schemas$SubscriptionItem } from "@sideko-inc/stripe/types/subscription-item";
import { Schemas$SubscriptionItemCreateBody } from "@sideko-inc/stripe/types/subscription-item-create-body";
import { Schemas$SubscriptionItemDeleteBody } from "@sideko-inc/stripe/types/subscription-item-delete-body";
import { Schemas$SubscriptionItemListResponse } from "@sideko-inc/stripe/types/subscription-item-list-response";
import { Schemas$SubscriptionItemUpdateBody } from "@sideko-inc/stripe/types/subscription-item-update-body";
import * as z from "zod";

export class SubscriptionItemClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a subscription item
   *
   * <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
   *
   * DELETE /v1/subscription_items/{item}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedSubscriptionItem> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/subscription_items/${request.item}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionItemDeleteBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          clear_usage: "form",
          proration_behavior: "form",
          proration_date: "form",
        },
        explode: {
          clear_usage: true,
          proration_behavior: true,
          proration_date: true,
        },
      },
      responseSchema: Schemas$DeletedSubscriptionItem.in,
      opts,
    });
  }
  /**
   * List all subscription items
   *
   * <p>Returns a list of your subscription items for a given subscription.</p>
   *
   * GET /v1/subscription_items
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItemListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/subscription_items",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "subscription",
          value: z.string().parse(request.subscription),
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
      responseSchema: z.lazy(() => Schemas$SubscriptionItemListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a subscription item
   *
   * <p>Retrieves the subscription item with the given ID.</p>
   *
   * GET /v1/subscription_items/{item}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/subscription_items/${request.item}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
  /**
   * Create a subscription item
   *
   * <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
   *
   * POST /v1/subscription_items
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/subscription_items",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SubscriptionItemCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          discounts: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          payment_behavior: "form",
          price: "form",
          price_data: "deepObject",
          proration_behavior: "form",
          proration_date: "form",
          quantity: "form",
          subscription: "form",
          tax_rates: "deepObject",
        },
        explode: {
          discounts: true,
          expand: true,
          metadata: true,
          payment_behavior: true,
          price: true,
          price_data: true,
          proration_behavior: true,
          proration_date: true,
          quantity: true,
          subscription: true,
          tax_rates: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
  /**
   * Update a subscription item
   *
   * <p>Updates the plan or quantity of an item on a current subscription.</p>
   *
   * POST /v1/subscription_items/{item}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscription_items/${request.item}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionItemUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          discounts: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          off_session: "form",
          payment_behavior: "form",
          price: "form",
          price_data: "deepObject",
          proration_behavior: "form",
          proration_date: "form",
          quantity: "form",
          tax_rates: "deepObject",
        },
        explode: {
          discounts: true,
          expand: true,
          metadata: true,
          off_session: true,
          payment_behavior: true,
          price: true,
          price_data: true,
          proration_behavior: true,
          proration_date: true,
          quantity: true,
          tax_rates: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
}
