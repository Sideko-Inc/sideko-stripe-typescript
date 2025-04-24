import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/alert/request-types";
import { Schemas$BillingAlert } from "@sideko-inc/stripe/types/billing-alert";
import { Schemas$BillingAlertActivateBody } from "@sideko-inc/stripe/types/billing-alert-activate-body";
import { Schemas$BillingAlertArchiveBody } from "@sideko-inc/stripe/types/billing-alert-archive-body";
import { Schemas$BillingAlertCreateBody } from "@sideko-inc/stripe/types/billing-alert-create-body";
import { Schemas$BillingAlertDeactivateBody } from "@sideko-inc/stripe/types/billing-alert-deactivate-body";
import { Schemas$BillingAlertListResponse } from "@sideko-inc/stripe/types/billing-alert-list-response";
import * as z from "zod";

export class AlertClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List billing alerts
   *
   * <p>Lists billing active and inactive alerts</p>
   *
   * GET /v1/billing/alerts
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlertListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/alerts",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "alert_type",
          value: z
            .enum(["usage_threshold"])
            .optional()
            .parse(request.alertType),
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
          name: "meter",
          value: z.string().optional().parse(request.meter),
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
      responseSchema: z.lazy(() => Schemas$BillingAlertListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a billing alert
   *
   * <p>Retrieves a billing alert given an ID</p>
   *
   * GET /v1/billing/alerts/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlert> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/alerts/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BillingAlert.in),
      opts,
    });
  }
  /**
   * Create a billing alert
   *
   * <p>Creates a billing alert</p>
   *
   * POST /v1/billing/alerts
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlert> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing/alerts",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingAlertCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          alert_type: "form",
          expand: "deepObject",
          title: "form",
          usage_threshold: "deepObject",
        },
        explode: {
          alert_type: true,
          expand: true,
          title: true,
          usage_threshold: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$BillingAlert.in),
      opts,
    });
  }
  /**
   * Activate a billing alert
   *
   * <p>Reactivates this alert, allowing it to trigger again.</p>
   *
   * POST /v1/billing/alerts/{id}/activate
   */
  activate(
    request: requests.ActivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlert> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/alerts/${request.id}/activate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingAlertActivateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingAlert.in),
      opts,
    });
  }
  /**
   * Archive a billing alert
   *
   * <p>Archives this alert, removing it from the list view and APIs. This is non-reversible.</p>
   *
   * POST /v1/billing/alerts/{id}/archive
   */
  archive(
    request: requests.ArchiveRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlert> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/alerts/${request.id}/archive`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingAlertArchiveBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingAlert.in),
      opts,
    });
  }
  /**
   * Deactivate a billing alert
   *
   * <p>Deactivates this alert, preventing it from triggering.</p>
   *
   * POST /v1/billing/alerts/{id}/deactivate
   */
  deactivate(
    request: requests.DeactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingAlert> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing/alerts/${request.id}/deactivate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingAlertDeactivateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BillingAlert.in),
      opts,
    });
  }
}
