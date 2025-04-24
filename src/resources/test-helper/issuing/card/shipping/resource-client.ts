import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/card/shipping/request-types";
import { Schemas$IssuingCard } from "@sideko-inc/stripe/types/issuing-card";
import { Schemas$TestHelperIssuingCardShippingDeliverBody } from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-deliver-body";
import { Schemas$TestHelperIssuingCardShippingFailBody } from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-fail-body";
import { Schemas$TestHelperIssuingCardShippingReturnedBody } from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-returned-body";
import { Schemas$TestHelperIssuingCardShippingShipBody } from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-ship-body";
import { Schemas$TestHelperIssuingCardShippingSubmitBody } from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-submit-body";
import * as z from "zod";

export class ShippingClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Deliver a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>delivered</code>.</p>
   *
   * POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver
   */
  deliver(
    request: requests.DeliverRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/cards/${request.card}/shipping/deliver`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingCardShippingDeliverBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Fail a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>failure</code>.</p>
   *
   * POST /v1/test_helpers/issuing/cards/{card}/shipping/fail
   */
  fail(
    request: requests.FailRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/cards/${request.card}/shipping/fail`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingCardShippingFailBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Return a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>returned</code>.</p>
   *
   * POST /v1/test_helpers/issuing/cards/{card}/shipping/return
   */
  returned(
    request: requests.ReturnedRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/cards/${request.card}/shipping/return`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingCardShippingReturnedBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Ship a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>
   *
   * POST /v1/test_helpers/issuing/cards/{card}/shipping/ship
   */
  ship(
    request: requests.ShipRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/cards/${request.card}/shipping/ship`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingCardShippingShipBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Submit a testmode card
   *
   * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>submitted</code>. This method requires Stripe Version ‘2024-09-30.acacia’ or later.</p>
   *
   * POST /v1/test_helpers/issuing/cards/{card}/shipping/submit
   */
  submit(
    request: requests.SubmitRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/cards/${request.card}/shipping/submit`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingCardShippingSubmitBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
}
