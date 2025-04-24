import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/identity/verification-report/request-types";
import { Schemas$IdentityVerificationReport } from "@sideko-inc/stripe/types/identity-verification-report";
import { Schemas$IdentityVerificationReportListCreatedObj0 } from "@sideko-inc/stripe/types/identity-verification-report-list-created-obj0";
import { Schemas$IdentityVerificationReportListResponse } from "@sideko-inc/stripe/types/identity-verification-report-list-response";
import * as z from "zod";

export class VerificationReportClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List VerificationReports
   *
   * <p>List all verification reports.</p>
   *
   * GET /v1/identity/verification_reports
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationReportListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/identity/verification_reports",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "client_reference_id",
          value: z.string().optional().parse(request.clientReferenceId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IdentityVerificationReportListCreatedObj0.out,
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
        encodeQueryParam({
          name: "type",
          value: z
            .enum(["document", "id_number"])
            .optional()
            .parse(request.type),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "verification_session",
          value: z.string().optional().parse(request.verificationSession),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IdentityVerificationReportListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a VerificationReport
   *
   * <p>Retrieves an existing VerificationReport</p>
   *
   * GET /v1/identity/verification_reports/{report}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationReport> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/identity/verification_reports/${request.report}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IdentityVerificationReport.in,
      opts,
    });
  }
}
