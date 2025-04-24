import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/charge/refund/request-types";
import { Schemas$Charge } from "@sideko-inc/stripe/types/charge";
import { Schemas$ChargeRefundCreateBody } from "@sideko-inc/stripe/types/charge-refund-create-body";
import { Schemas$ChargeRefundCreate1Body } from "@sideko-inc/stripe/types/charge-refund-create1-body";
import { Schemas$ChargeRefundListResponse } from "@sideko-inc/stripe/types/charge-refund-list-response";
import { Schemas$ChargeRefundUpdateBody } from "@sideko-inc/stripe/types/charge-refund-update-body";
import { Schemas$Refund } from "@sideko-inc/stripe/types/refund";
import * as z from "zod";

export class RefundClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all refunds
   *
   * <p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
   *
   * GET /v1/charges/{charge}/refunds
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ChargeRefundListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/charges/${request.charge}/refunds`,
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
      responseSchema: z.lazy(() => Schemas$ChargeRefundListResponse.in),
      opts,
    });
  }
  /**
   * <p>Retrieves the details of an existing refund.</p>
   *
   * GET /v1/charges/{charge}/refunds/{refund}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/charges/${request.charge}/refunds/${request.refund}`,
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
   * Create a refund
   *
   * <p>When you create a new refund, you must specify either a Charge or a PaymentIntent object.</p>
   *
   * <p>This action refunds a previously created charge that’s not refunded yet.
   * Funds are refunded to the credit or debit card that’s originally charged.</p>
   *
   * <p>You can optionally refund only part of a charge.
   * You can repeat this until the entire charge is refunded.</p>
   *
   * <p>After you entirely refund a charge, you can’t refund it again.
   * This method raises an error when it’s called on an already-refunded charge,
   * or when you attempt to refund more money than is left on a charge.</p>
   *
   * POST /v1/charges/{charge}/refund
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/refund`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeRefundCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          expand: "deepObject",
          instructions_email: "form",
          metadata: "deepObject",
          payment_intent: "form",
          reason: "form",
          refund_application_fee: "form",
          reverse_transfer: "form",
        },
        explode: {
          amount: true,
          expand: true,
          instructions_email: true,
          metadata: true,
          payment_intent: true,
          reason: true,
          refund_application_fee: true,
          reverse_transfer: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Charge.in),
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
   * POST /v1/charges/{charge}/refunds
   */
  create1(
    request: requests.Create1Request,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/refunds`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeRefundCreate1Body.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
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
   * <p>Update a specified refund.</p>
   *
   * POST /v1/charges/{charge}/refunds/{refund}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/refunds/${request.refund}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeRefundUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
}
