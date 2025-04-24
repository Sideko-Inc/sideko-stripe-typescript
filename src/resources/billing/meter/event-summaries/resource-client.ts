import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/meter/event-summaries/request-types";
import { Schemas$BillingMeterEventSummariesListResponse } from "@sideko-inc/stripe/types/billing-meter-event-summaries-list-response";
import * as z from "zod";

export class EventSummariesClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List billing meter event summaries
   *
   * <p>Retrieve a list of billing meter event summaries.</p>
   *
   * GET /v1/billing/meters/{id}/event_summaries
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingMeterEventSummariesListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing/meters/${request.id}/event_summaries`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "customer",
          value: z.string().parse(request.customer),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "end_time",
          value: z.number().int().parse(request.endTime),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "start_time",
          value: z.number().int().parse(request.startTime),
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
          name: "value_grouping_window",
          value: z
            .enum(["day", "hour"])
            .optional()
            .parse(request.valueGroupingWindow),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$BillingMeterEventSummariesListResponse.in,
      opts,
    });
  }
}
