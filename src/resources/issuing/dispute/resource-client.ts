import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/dispute/request-types";
import { Schemas$IssuingDispute } from "@sideko-inc/stripe/types/issuing-dispute";
import { Schemas$IssuingDisputeCreateBody } from "@sideko-inc/stripe/types/issuing-dispute-create-body";
import { Schemas$IssuingDisputeListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-dispute-list-created-obj0";
import { Schemas$IssuingDisputeListResponse } from "@sideko-inc/stripe/types/issuing-dispute-list-response";
import { Schemas$IssuingDisputeSubmitBody } from "@sideko-inc/stripe/types/issuing-dispute-submit-body";
import { Schemas$IssuingDisputeUpdateBody } from "@sideko-inc/stripe/types/issuing-dispute-update-body";
import * as z from "zod";

export class DisputeClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all disputes
   *
   * <p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/disputes
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingDisputeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/disputes",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IssuingDisputeListCreatedObj0.out,
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
          name: "status",
          value: z
            .enum(["expired", "lost", "submitted", "unsubmitted", "won"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "transaction",
          value: z.string().optional().parse(request.transaction),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingDisputeListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a dispute
   *
   * <p>Retrieves an Issuing <code>Dispute</code> object.</p>
   *
   * GET /v1/issuing/disputes/{dispute}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingDispute> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/disputes/${request.dispute}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingDispute.in),
      opts,
    });
  }
  /**
   * Create a dispute
   *
   * <p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>
   *
   * POST /v1/issuing/disputes
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingDispute> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/issuing/disputes",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingDisputeCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          evidence: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          transaction: "form",
          treasury: "deepObject",
        },
        explode: {
          amount: true,
          evidence: true,
          expand: true,
          metadata: true,
          transaction: true,
          treasury: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingDispute.in),
      opts,
    });
  }
  /**
   * Update a dispute
   *
   * <p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>
   *
   * POST /v1/issuing/disputes/{dispute}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingDispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/disputes/${request.dispute}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingDisputeUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          evidence: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: { amount: true, evidence: true, expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingDispute.in),
      opts,
    });
  }
  /**
   * Submit a dispute
   *
   * <p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>
   *
   * POST /v1/issuing/disputes/{dispute}/submit
   */
  submit(
    request: requests.SubmitRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingDispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/disputes/${request.dispute}/submit`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingDisputeSubmitBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingDispute.in),
      opts,
    });
  }
}
