import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/event/request-types";
import { Schemas$Event } from "@sideko-inc/stripe/types/event";
import { Schemas$EventListCreatedObj0 } from "@sideko-inc/stripe/types/event-list-created-obj0";
import { Schemas$EventListResponse } from "@sideko-inc/stripe/types/event-list-response";
import * as z from "zod";

export class EventClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all events
   *
   * <p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="https://docs.stripe.com/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>
   *
   * GET /v1/events
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.EventListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/events",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$EventListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "delivery_success",
          value: z.boolean().optional().parse(request.deliverySuccess),
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
        encodeQueryParam({
          name: "type",
          value: z.string().optional().parse(request.type),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "types",
          value: z.array(z.string()).optional().parse(request.types),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$EventListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve an event
   *
   * <p>Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.</p>
   *
   * GET /v1/events/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Event> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/events/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$Event.in,
      opts,
    });
  }
}
