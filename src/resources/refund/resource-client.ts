import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/refund/request-types";
import { Schemas$Refund } from "@sideko-inc/stripe/types/refund";
import { Schemas$RefundCancelBody } from "@sideko-inc/stripe/types/refund-cancel-body";
import { Schemas$RefundCreateBody } from "@sideko-inc/stripe/types/refund-create-body";
import { Schemas$RefundListCreatedObj0 } from "@sideko-inc/stripe/types/refund-list-created-obj0";
import { Schemas$RefundListResponse } from "@sideko-inc/stripe/types/refund-list-response";
import { Schemas$RefundUpdateBody } from "@sideko-inc/stripe/types/refund-update-body";
import * as z from "zod";

export class RefundClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all refunds
   *
   * <p>Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.</p>
   *
   * GET /v1/refunds
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.RefundListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/refunds",
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
            .union([Schemas$RefundListCreatedObj0.out, z.number().int()])
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
      responseSchema: z.lazy(() => Schemas$RefundListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a refund
   *
   * <p>Retrieves the details of an existing refund.</p>
   *
   * GET /v1/refunds/{refund}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/refunds/${request.refund}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
  /**
   * Create customer balance refund
   *
   * <p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>
   *
   * <p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
   * Funds will be refunded to the credit or debit card that was originally charged.</p>
   *
   * <p>You can optionally refund only part of a charge.
   * You can do so multiple times, until the entire charge has been refunded.</p>
   *
   * <p>Once entirely refunded, a charge can’t be refunded again.
   * This method will raise an error when called on an already-refunded charge,
   * or when trying to refund more money than is left on a charge.</p>
   *
   * POST /v1/refunds
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/refunds",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$RefundCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          charge: "form",
          currency: "form",
          customer: "form",
          expand: "deepObject",
          instructions_email: "form",
          metadata: "deepObject",
          origin: "form",
          payment_intent: "form",
          reason: "form",
          refund_application_fee: "form",
          reverse_transfer: "form",
        },
        explode: {
          amount: true,
          charge: true,
          currency: true,
          customer: true,
          expand: true,
          instructions_email: true,
          metadata: true,
          origin: true,
          payment_intent: true,
          reason: true,
          refund_application_fee: true,
          reverse_transfer: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
  /**
   * Update a refund
   *
   * <p>Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don’t provide remain unchanged.</p>
   *
   * <p>This request only accepts <code>metadata</code> as an argument.</p>
   *
   * POST /v1/refunds/{refund}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/refunds/${request.refund}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$RefundUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
  /**
   * Cancel a refund
   *
   * <p>Cancels a refund with a status of <code>requires_action</code>.</p>
   *
   * <p>You can’t cancel refunds in other states. Only refunds for payment methods that require customer action can enter the <code>requires_action</code> state.</p>
   *
   * POST /v1/refunds/{refund}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/refunds/${request.refund}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$RefundCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
}
