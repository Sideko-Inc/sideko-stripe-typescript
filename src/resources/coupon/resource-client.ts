import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/coupon/request-types";
import { Schemas$Coupon } from "@sideko-inc/stripe/types/coupon";
import { Schemas$CouponCreateBody } from "@sideko-inc/stripe/types/coupon-create-body";
import { Schemas$CouponListCreatedObj0 } from "@sideko-inc/stripe/types/coupon-list-created-obj0";
import { Schemas$CouponListResponse } from "@sideko-inc/stripe/types/coupon-list-response";
import { Schemas$CouponUpdateBody } from "@sideko-inc/stripe/types/coupon-update-body";
import { Schemas$DeletedCoupon } from "@sideko-inc/stripe/types/deleted-coupon";
import * as z from "zod";

export class CouponClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a coupon
   *
   * <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
   *
   * DELETE /v1/coupons/{coupon}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedCoupon> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/coupons/${request.coupon}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedCoupon.in,
      opts,
    });
  }
  /**
   * List all coupons
   *
   * <p>Returns a list of your coupons.</p>
   *
   * GET /v1/coupons
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CouponListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/coupons",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$CouponListCreatedObj0.out, z.number().int()])
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
      responseSchema: Schemas$CouponListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a coupon
   *
   * <p>Retrieves the coupon with the given ID.</p>
   *
   * GET /v1/coupons/{coupon}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/coupons/${request.coupon}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
  /**
   * Create a coupon
   *
   * <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
   *
   * <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
   *
   * POST /v1/coupons
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/coupons",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CouponCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount_off: "form",
          applies_to: "deepObject",
          currency: "form",
          currency_options: "deepObject",
          duration: "form",
          duration_in_months: "form",
          expand: "deepObject",
          id: "form",
          max_redemptions: "form",
          metadata: "deepObject",
          name: "form",
          percent_off: "form",
          redeem_by: "form",
        },
        explode: {
          amount_off: true,
          applies_to: true,
          currency: true,
          currency_options: true,
          duration: true,
          duration_in_months: true,
          expand: true,
          id: true,
          max_redemptions: true,
          metadata: true,
          name: true,
          percent_off: true,
          redeem_by: true,
        },
      },
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
  /**
   * Update a coupon
   *
   * <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
   *
   * POST /v1/coupons/{coupon}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/coupons/${request.coupon}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CouponUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          currency_options: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          name: "form",
        },
        explode: {
          currency_options: true,
          expand: true,
          metadata: true,
          name: true,
        },
      },
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
}
