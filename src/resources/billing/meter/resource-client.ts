import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { EventSummariesClient } from "@sideko-inc/stripe/resources/billing/meter/event-summaries";
import * as requests from "@sideko-inc/stripe/resources/billing/meter/request-types";
import { Schemas$BillingMeter } from "@sideko-inc/stripe/types/billing-meter";
import { Schemas$BillingMeterCreateBody } from "@sideko-inc/stripe/types/billing-meter-create-body";
import { Schemas$BillingMeterDeactivateBody } from "@sideko-inc/stripe/types/billing-meter-deactivate-body";
import { Schemas$BillingMeterListResponse } from "@sideko-inc/stripe/types/billing-meter-list-response";
import { Schemas$BillingMeterReactivateBody } from "@sideko-inc/stripe/types/billing-meter-reactivate-body";
import { Schemas$BillingMeterUpdateBody } from "@sideko-inc/stripe/types/billing-meter-update-body";
import * as z from "zod";

export class MeterClient extends CoreResourceClient {
  private _eventSummariesLazy?: EventSummariesClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.eventSummaries;
    }
  }
  get eventSummaries(): EventSummariesClient {
    return (
      this._eventSummariesLazy ??
      (this._eventSummariesLazy =
        new (require("./event-summaries").EventSummariesClient)(
          this._client,
          this._opts,
        ))
    );
  }
  /**
   * List billing meters
   *
   * <p>Retrieve a list of billing meters.</p>
   *
   * GET /v1/billing/meters
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeterListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/meters",
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
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["active", "inactive"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$BillingMeterListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a billing meter
   *
   * <p>Retrieves a billing meter given an ID.</p>
   *
   * GET /v1/billing/meters/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/meters/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Create a billing meter
   *
   * <p>Creates a billing meter.</p>
   *
   * POST /v1/billing/meters
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/meters",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingMeterCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          customer_mapping: "deepObject",
          default_aggregation: "deepObject",
          display_name: "form",
          event_name: "form",
          event_time_window: "form",
          expand: "deepObject",
          value_settings: "deepObject",
        },
        explode: {
          customer_mapping: true,
          default_aggregation: true,
          display_name: true,
          event_name: true,
          event_time_window: true,
          expand: true,
          value_settings: true,
        },
      },
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Update a billing meter
   *
   * <p>Updates a billing meter.</p>
   *
   * POST /v1/billing/meters/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingMeterUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { display_name: "form", expand: "deepObject" },
        explode: { display_name: true, expand: true },
      },
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Deactivate a billing meter
   *
   * <p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>
   *
   * POST /v1/billing/meters/{id}/deactivate
   */
  deactivate(
    request: requests.DeactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}/deactivate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingMeterDeactivateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
  /**
   * Reactivate a billing meter
   *
   * <p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>
   *
   * POST /v1/billing/meters/{id}/reactivate
   */
  reactivate(
    request: requests.ReactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeter> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/meters/${request.id}/reactivate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingMeterReactivateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$BillingMeter.in,
      opts,
    });
  }
}
