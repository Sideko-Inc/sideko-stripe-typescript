import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-payment/request-types";
import { Schemas$TestHelperTreasuryOutboundPaymentFailBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-fail-body";
import { Schemas$TestHelperTreasuryOutboundPaymentPostBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-post-body";
import { Schemas$TestHelperTreasuryOutboundPaymentReturnedBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-returned-body";
import { Schemas$TestHelperTreasuryOutboundPaymentUpdateBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-payment-update-body";
import { Schemas$TreasuryOutboundPayment } from "@sideko-inc/stripe/types/treasury-outbound-payment";
import * as z from "zod";

export class OutboundPaymentClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Test mode: Update an OutboundPayment
   *
   * <p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_payments/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_payments/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryOutboundPaymentUpdateBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: { expand: "deepObject", tracking_details: "deepObject" },
        explode: { expand: true, tracking_details: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * Test mode: Fail an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_payments/{id}/fail
   */
  fail(
    request: requests.FailRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_payments/${request.id}/fail`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundPaymentFailBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * Test mode: Post an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_payments/{id}/post
   */
  post(
    request: requests.PostRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_payments/${request.id}/post`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundPaymentPostBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * Test mode: Return an OutboundPayment
   *
   * <p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_payments/{id}/return
   */
  returned(
    request: requests.ReturnedRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_payments/${request.id}/return`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundPaymentReturnedBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", returned_details: "deepObject" },
        explode: { expand: true, returned_details: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
}
