import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/subscription-schedule/request-types";
import { Schemas$SubscriptionScheduleCancelBody } from "@sideko-inc/stripe/types/subscription-schedule-cancel-body";
import { Schemas$SubscriptionScheduleCreateBody } from "@sideko-inc/stripe/types/subscription-schedule-create-body";
import { Schemas$SubscriptionScheduleListCanceledAtObj0 } from "@sideko-inc/stripe/types/subscription-schedule-list-canceled-at-obj0";
import { Schemas$SubscriptionScheduleListCompletedAtObj0 } from "@sideko-inc/stripe/types/subscription-schedule-list-completed-at-obj0";
import { Schemas$SubscriptionScheduleListCreatedObj0 } from "@sideko-inc/stripe/types/subscription-schedule-list-created-obj0";
import { Schemas$SubscriptionScheduleListReleasedAtObj0 } from "@sideko-inc/stripe/types/subscription-schedule-list-released-at-obj0";
import { Schemas$SubscriptionScheduleListResponse } from "@sideko-inc/stripe/types/subscription-schedule-list-response";
import { Schemas$SubscriptionScheduleReleaseBody } from "@sideko-inc/stripe/types/subscription-schedule-release-body";
import { Schemas$SubscriptionScheduleUpdateBody } from "@sideko-inc/stripe/types/subscription-schedule-update-body";
import { Schemas$SubscriptionSchedule1 } from "@sideko-inc/stripe/types/subscription-schedule1";
import * as z from "zod";

export class SubscriptionScheduleClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all schedules
   *
   * <p>Retrieves the list of your subscription schedules.</p>
   *
   * GET /v1/subscription_schedules
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionScheduleListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/subscription_schedules",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "canceled_at",
          value: z
            .union([
              Schemas$SubscriptionScheduleListCanceledAtObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.canceledAt),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "completed_at",
          value: z
            .union([
              Schemas$SubscriptionScheduleListCompletedAtObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.completedAt),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$SubscriptionScheduleListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
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
          name: "released_at",
          value: z
            .union([
              Schemas$SubscriptionScheduleListReleasedAtObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.releasedAt),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "scheduled",
          value: z.boolean().optional().parse(request.scheduled),
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
      responseSchema: z.lazy(() => Schemas$SubscriptionScheduleListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a schedule
   *
   * <p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>
   *
   * GET /v1/subscription_schedules/{schedule}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSchedule1> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/subscription_schedules/${request.schedule}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$SubscriptionSchedule1.in),
      opts,
    });
  }
  /**
   * Create a schedule
   *
   * <p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>
   *
   * POST /v1/subscription_schedules
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSchedule1> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/subscription_schedules",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionScheduleCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          customer: "form",
          default_settings: "deepObject",
          end_behavior: "form",
          expand: "deepObject",
          from_subscription: "form",
          metadata: "deepObject",
          phases: "deepObject",
          start_date: "deepObject",
        },
        explode: {
          customer: true,
          default_settings: true,
          end_behavior: true,
          expand: true,
          from_subscription: true,
          metadata: true,
          phases: true,
          start_date: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionSchedule1.in),
      opts,
    });
  }
  /**
   * Update a schedule
   *
   * <p>Updates an existing subscription schedule.</p>
   *
   * POST /v1/subscription_schedules/{schedule}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSchedule1> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscription_schedules/${request.schedule}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionScheduleUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          default_settings: "deepObject",
          end_behavior: "form",
          expand: "deepObject",
          metadata: "deepObject",
          phases: "deepObject",
          proration_behavior: "form",
        },
        explode: {
          default_settings: true,
          end_behavior: true,
          expand: true,
          metadata: true,
          phases: true,
          proration_behavior: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionSchedule1.in),
      opts,
    });
  }
  /**
   * Cancel a schedule
   *
   * <p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>
   *
   * POST /v1/subscription_schedules/{schedule}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSchedule1> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscription_schedules/${request.schedule}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionScheduleCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", invoice_now: "form", prorate: "form" },
        explode: { expand: true, invoice_now: true, prorate: true },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionSchedule1.in),
      opts,
    });
  }
  /**
   * Release a schedule
   *
   * <p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>
   *
   * POST /v1/subscription_schedules/{schedule}/release
   */
  release(
    request: requests.ReleaseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionSchedule1> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscription_schedules/${request.schedule}/release`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SubscriptionScheduleReleaseBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", preserve_cancel_date: "form" },
        explode: { expand: true, preserve_cancel_date: true },
      },
      responseSchema: z.lazy(() => Schemas$SubscriptionSchedule1.in),
      opts,
    });
  }
}
