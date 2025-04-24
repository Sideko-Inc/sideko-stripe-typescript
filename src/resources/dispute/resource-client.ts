import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/dispute/request-types";
import { Schemas$Dispute } from "@sideko-inc/stripe/types/dispute";
import { Schemas$DisputeCloseBody } from "@sideko-inc/stripe/types/dispute-close-body";
import { Schemas$DisputeListCreatedObj0 } from "@sideko-inc/stripe/types/dispute-list-created-obj0";
import { Schemas$DisputeListResponse } from "@sideko-inc/stripe/types/dispute-list-response";
import { Schemas$DisputeUpdateBody } from "@sideko-inc/stripe/types/dispute-update-body";
import * as z from "zod";

export class DisputeClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all disputes
   *
   * <p>Returns a list of your disputes.</p>
   *
   * GET /v1/disputes
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.DisputeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/disputes",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "charge",
          value: z.string().optional().parse(request.charge),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$DisputeListCreatedObj0.out, z.number().int()])
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
          name: "payment_intent",
          value: z.string().optional().parse(request.paymentIntent),
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
      responseSchema: z.lazy(() => Schemas$DisputeListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a dispute
   *
   * <p>Retrieves the dispute with the given ID.</p>
   *
   * GET /v1/disputes/{dispute}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/disputes/${request.dispute}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
  /**
   * Update a dispute
   *
   * <p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>
   *
   * <p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>
   *
   * POST /v1/disputes/{dispute}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/disputes/${request.dispute}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$DisputeUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          evidence: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          submit: "form",
        },
        explode: { evidence: true, expand: true, metadata: true, submit: true },
      },
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
  /**
   * Close a dispute
   *
   * <p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>
   *
   * <p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>
   *
   * POST /v1/disputes/{dispute}/close
   */
  close(
    request: requests.CloseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/disputes/${request.dispute}/close`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$DisputeCloseBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
}
