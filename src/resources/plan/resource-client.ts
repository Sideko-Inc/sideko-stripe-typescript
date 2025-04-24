import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/plan/request-types";
import { Schemas$DeletedPlan } from "@sideko-inc/stripe/types/deleted-plan";
import { Schemas$Plan } from "@sideko-inc/stripe/types/plan";
import { Schemas$PlanCreateBody } from "@sideko-inc/stripe/types/plan-create-body";
import { Schemas$PlanListCreatedObj0 } from "@sideko-inc/stripe/types/plan-list-created-obj0";
import { Schemas$PlanListResponse } from "@sideko-inc/stripe/types/plan-list-response";
import { Schemas$PlanUpdateBody } from "@sideko-inc/stripe/types/plan-update-body";
import * as z from "zod";

export class PlanClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a plan
   *
   * <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
   *
   * DELETE /v1/plans/{plan}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedPlan> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/plans/${request.plan}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedPlan.in,
      opts,
    });
  }
  /**
   * List all plans
   *
   * <p>Returns a list of your plans.</p>
   *
   * GET /v1/plans
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PlanListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/plans",
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
            .union([Schemas$PlanListCreatedObj0.out, z.number().int()])
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
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "product",
          value: z.string().optional().parse(request.product),
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
      responseSchema: z.lazy(() => Schemas$PlanListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a plan
   *
   * <p>Retrieves the plan with the given ID.</p>
   *
   * GET /v1/plans/{plan}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Plan> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/plans/${request.plan}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Plan.in),
      opts,
    });
  }
  /**
   * Create a plan
   *
   * <p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>
   *
   * POST /v1/plans
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Plan> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/plans",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PlanCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          active: "form",
          amount: "form",
          amount_decimal: "form",
          billing_scheme: "form",
          currency: "form",
          expand: "deepObject",
          id: "form",
          interval: "form",
          interval_count: "form",
          metadata: "deepObject",
          meter: "form",
          nickname: "form",
          product: "deepObject",
          tiers: "deepObject",
          tiers_mode: "form",
          transform_usage: "deepObject",
          trial_period_days: "form",
          usage_type: "form",
        },
        explode: {
          active: true,
          amount: true,
          amount_decimal: true,
          billing_scheme: true,
          currency: true,
          expand: true,
          id: true,
          interval: true,
          interval_count: true,
          metadata: true,
          meter: true,
          nickname: true,
          product: true,
          tiers: true,
          tiers_mode: true,
          transform_usage: true,
          trial_period_days: true,
          usage_type: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Plan.in),
      opts,
    });
  }
  /**
   * Update a plan
   *
   * <p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>
   *
   * POST /v1/plans/{plan}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Plan> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/plans/${request.plan}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PlanUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          expand: "deepObject",
          metadata: "deepObject",
          nickname: "form",
          product: "form",
          trial_period_days: "form",
        },
        explode: {
          active: true,
          expand: true,
          metadata: true,
          nickname: true,
          product: true,
          trial_period_days: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Plan.in),
      opts,
    });
  }
}
