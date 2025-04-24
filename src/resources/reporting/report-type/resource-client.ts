import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/reporting/report-type/request-types";
import { Schemas$ReportingReportType } from "@sideko-inc/stripe/types/reporting-report-type";
import { Schemas$ReportingReportTypeListResponse } from "@sideko-inc/stripe/types/reporting-report-type-list-response";
import * as z from "zod";

export class ReportTypeClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all Report Types
   *
   * <p>Returns a full list of Report Types.</p>
   *
   * GET /v1/reporting/report_types
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ReportingReportTypeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/reporting/report_types",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ReportingReportTypeListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a Report Type
   *
   * <p>Retrieves the details of a Report Type. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>
   *
   * GET /v1/reporting/report_types/{report_type}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ReportingReportType> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/reporting/report_types/${request.reportType}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ReportingReportType.in,
      opts,
    });
  }
}
