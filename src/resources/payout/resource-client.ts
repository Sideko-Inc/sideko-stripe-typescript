import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payout/request-types";
import { Schemas$Payout } from "@sideko-inc/stripe/types/payout";
import { Schemas$PayoutCancelBody } from "@sideko-inc/stripe/types/payout-cancel-body";
import { Schemas$PayoutCreateBody } from "@sideko-inc/stripe/types/payout-create-body";
import { Schemas$PayoutListArrivalDateObj0 } from "@sideko-inc/stripe/types/payout-list-arrival-date-obj0";
import { Schemas$PayoutListCreatedObj0 } from "@sideko-inc/stripe/types/payout-list-created-obj0";
import { Schemas$PayoutListResponse } from "@sideko-inc/stripe/types/payout-list-response";
import { Schemas$PayoutReverseBody } from "@sideko-inc/stripe/types/payout-reverse-body";
import { Schemas$PayoutUpdateBody } from "@sideko-inc/stripe/types/payout-update-body";
import * as z from "zod";

export class PayoutClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all payouts
   *
   * <p>Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.</p>
   *
   * GET /v1/payouts
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PayoutListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payouts",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "arrival_date",
          value: z
            .union([Schemas$PayoutListArrivalDateObj0.out, z.number().int()])
            .optional()
            .parse(request.arrivalDate),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$PayoutListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "destination",
          value: z.string().optional().parse(request.destination),
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
          name: "status",
          value: z.string().optional().parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PayoutListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a payout
   *
   * <p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.</p>
   *
   * GET /v1/payouts/{payout}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Payout> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payouts/${request.payout}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Payout.in),
      opts,
    });
  }
  /**
   * Create a payout
   *
   * <p>To send funds to your own bank account, create a new payout object. Your <a href="#balance">Stripe balance</a> must cover the payout amount. If it doesn’t, you receive an “Insufficient Funds” error.</p>
   *
   * <p>If your API key is in test mode, money won’t actually be sent, though every other action occurs as if you’re in live mode.</p>
   *
   * <p>If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>
   *
   * POST /v1/payouts
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Payout> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payouts",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PayoutCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          destination: "form",
          expand: "deepObject",
          metadata: "deepObject",
          method: "form",
          source_type: "form",
          statement_descriptor: "form",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          destination: true,
          expand: true,
          metadata: true,
          method: true,
          source_type: true,
          statement_descriptor: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Payout.in),
      opts,
    });
  }
  /**
   * Update a payout
   *
   * <p>Updates the specified payout by setting the values of the parameters you pass. We don’t change parameters that you don’t provide. This request only accepts the metadata as arguments.</p>
   *
   * POST /v1/payouts/{payout}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Payout> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payouts/${request.payout}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PayoutUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$Payout.in),
      opts,
    });
  }
  /**
   * Cancel a payout
   *
   * <p>You can cancel a previously created payout if its status is <code>pending</code>. Stripe refunds the funds to your available balance. You can’t cancel automatic Stripe payouts.</p>
   *
   * POST /v1/payouts/{payout}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Payout> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payouts/${request.payout}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PayoutCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Payout.in),
      opts,
    });
  }
  /**
   * Reverse a payout
   *
   * <p>Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US bank accounts. If the payout is manual and in the <code>pending</code> status, use <code>/v1/payouts/:id/cancel</code> instead.</p>
   *
   * <p>By requesting a reversal through <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.</p>
   *
   * POST /v1/payouts/{payout}/reverse
   */
  reverse(
    request: requests.ReverseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Payout> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payouts/${request.payout}/reverse`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PayoutReverseBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$Payout.in),
      opts,
    });
  }
}
