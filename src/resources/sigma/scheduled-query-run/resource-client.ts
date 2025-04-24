import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/sigma/scheduled-query-run/request-types";
import { Schemas$ScheduledQueryRun } from "@sideko-inc/stripe/types/scheduled-query-run";
import { Schemas$SigmaScheduledQueryRunListResponse } from "@sideko-inc/stripe/types/sigma-scheduled-query-run-list-response";
import * as z from "zod";

export class ScheduledQueryRunClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all scheduled query runs
   *
   * <p>Returns a list of scheduled query runs.</p>
   *
   * GET /v1/sigma/scheduled_query_runs
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.SigmaScheduledQueryRunListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/sigma/scheduled_query_runs",
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
      responseSchema: z.lazy(
        () => Schemas$SigmaScheduledQueryRunListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a scheduled query run
   *
   * <p>Retrieves the details of an scheduled query run.</p>
   *
   * GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ScheduledQueryRun> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sigma/scheduled_query_runs/${request.scheduledQueryRun}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ScheduledQueryRun.in),
      opts,
    });
  }
}
