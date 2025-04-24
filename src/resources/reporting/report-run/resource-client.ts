import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/reporting/report-run/request-types";
import { Schemas$ReportingReportRun } from "@sideko-inc/stripe/types/reporting-report-run";
import { Schemas$ReportingReportRunCreateBody } from "@sideko-inc/stripe/types/reporting-report-run-create-body";
import { Schemas$ReportingReportRunListCreatedObj0 } from "@sideko-inc/stripe/types/reporting-report-run-list-created-obj0";
import { Schemas$ReportingReportRunListResponse } from "@sideko-inc/stripe/types/reporting-report-run-list-response";
import * as z from "zod";

export class ReportRunClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all Report Runs
   *
   * <p>Returns a list of Report Runs, with the most recent appearing first.</p>
   *
   * GET /v1/reporting/report_runs
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ReportingReportRunListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/reporting/report_runs",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$ReportingReportRunListCreatedObj0.out,
              z.number().int(),
            ])
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ReportingReportRunListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a Report Run
   *
   * <p>Retrieves the details of an existing Report Run.</p>
   *
   * GET /v1/reporting/report_runs/{report_run}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReportingReportRun> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/reporting/report_runs/${request.reportRun}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ReportingReportRun.in),
      opts,
    });
  }
  /**
   * Create a Report Run
   *
   * <p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
   *
   * POST /v1/reporting/report_runs
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReportingReportRun> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/reporting/report_runs",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ReportingReportRunCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          parameters: "deepObject",
          report_type: "form",
        },
        explode: { expand: true, parameters: true, report_type: true },
      },
      responseSchema: z.lazy(() => Schemas$ReportingReportRun.in),
      opts,
    });
  }
}
