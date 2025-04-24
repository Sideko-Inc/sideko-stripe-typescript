import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/application-fee/refund/request-types";
import { Schemas$ApplicationFee } from "@sideko-inc/stripe/types/application-fee";
import { Schemas$ApplicationFeeRefundCreateBody } from "@sideko-inc/stripe/types/application-fee-refund-create-body";
import { Schemas$ApplicationFeeRefundCreateManyBody } from "@sideko-inc/stripe/types/application-fee-refund-create-many-body";
import { Schemas$ApplicationFeeRefundListResponse } from "@sideko-inc/stripe/types/application-fee-refund-list-response";
import { Schemas$ApplicationFeeRefundUpdateBody } from "@sideko-inc/stripe/types/application-fee-refund-update-body";
import { Schemas$FeeRefund } from "@sideko-inc/stripe/types/fee-refund";
import * as z from "zod";

export class RefundClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve an application fee refund
   *
   * <p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>
   *
   * GET /v1/application_fees/{fee}/refunds/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FeeRefund> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/application_fees/${request.fee}/refunds/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$FeeRefund.in),
      opts,
    });
  }
  /**
   * List all application fee refunds
   *
   * <p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>
   *
   * GET /v1/application_fees/{id}/refunds
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFeeRefundListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/application_fees/${request.id}/refunds`,
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
      responseSchema: z.lazy(() => Schemas$ApplicationFeeRefundListResponse.in),
      opts,
    });
  }
  /**
   * Update an application fee refund
   *
   * <p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * <p>This request only accepts metadata as an argument.</p>
   *
   * POST /v1/application_fees/{fee}/refunds/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FeeRefund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/application_fees/${request.fee}/refunds/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ApplicationFeeRefundUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$FeeRefund.in),
      opts,
    });
  }
  /**
   *
   *
   * POST /v1/application_fees/{id}/refund
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFee> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/application_fees/${request.id}/refund`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ApplicationFeeRefundCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { amount: "form", directive: "form", expand: "deepObject" },
        explode: { amount: true, directive: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$ApplicationFee.in),
      opts,
    });
  }
  /**
   * Create an application fee refund
   *
   * <p>Refunds an application fee that has previously been collected but not yet refunded.
   * Funds will be refunded to the Stripe account from which the fee was originally collected.</p>
   *
   * <p>You can optionally refund only part of an application fee.
   * You can do so multiple times, until the entire fee has been refunded.</p>
   *
   * <p>Once entirely refunded, an application fee can’t be refunded again.
   * This method will raise an error when called on an already-refunded application fee,
   * or when trying to refund more money than is left on an application fee.</p>
   *
   * POST /v1/application_fees/{id}/refunds
   */
  createMany(
    request: requests.CreateManyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FeeRefund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/application_fees/${request.id}/refunds`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ApplicationFeeRefundCreateManyBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { amount: "form", expand: "deepObject", metadata: "deepObject" },
        explode: { amount: true, expand: true, metadata: true },
      },
      responseSchema: z.lazy(() => Schemas$FeeRefund.in),
      opts,
    });
  }
}
