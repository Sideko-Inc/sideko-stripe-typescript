import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import { FraudChallengesClient } from "@sideko-inc/stripe/resources/test-helper/issuing/authorization/fraud-challenges";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/authorization/request-types";
import { Schemas$IssuingAuthorization } from "@sideko-inc/stripe/types/issuing-authorization";
import { Schemas$TestHelperIssuingAuthorizationCaptureBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-capture-body";
import { Schemas$TestHelperIssuingAuthorizationCreateBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-create-body";
import { Schemas$TestHelperIssuingAuthorizationExpireBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-expire-body";
import { Schemas$TestHelperIssuingAuthorizationFinalizeAmountBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-finalize-amount-body";
import { Schemas$TestHelperIssuingAuthorizationIncrementBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-increment-body";
import { Schemas$TestHelperIssuingAuthorizationReverseBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-reverse-body";
import * as z from "zod";

export class AuthorizationClient extends CoreResourceClient {
  private _fraudChallengesLazy?: FraudChallengesClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.fraudChallenges;
    }
  }
  get fraudChallenges(): FraudChallengesClient {
    return (
      this._fraudChallengesLazy ??
      (this._fraudChallengesLazy =
        new (require("./fraud-challenges").FraudChallengesClient)(
          this._client,
          this._opts,
        ))
    );
  }
  /**
   * Create a test-mode authorization
   *
   * <p>Create a test-mode authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/authorizations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          amount_details: "deepObject",
          authorization_method: "form",
          card: "form",
          currency: "form",
          expand: "deepObject",
          fleet: "deepObject",
          fuel: "deepObject",
          is_amount_controllable: "form",
          merchant_amount: "form",
          merchant_currency: "form",
          merchant_data: "deepObject",
          network_data: "deepObject",
          verification_data: "deepObject",
          wallet: "form",
        },
        explode: {
          amount: true,
          amount_details: true,
          authorization_method: true,
          card: true,
          currency: true,
          expand: true,
          fleet: true,
          fuel: true,
          is_amount_controllable: true,
          merchant_amount: true,
          merchant_currency: true,
          merchant_data: true,
          network_data: true,
          verification_data: true,
          wallet: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Capture a test-mode authorization
   *
   * <p>Capture a test-mode authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/capture
   */
  capture(
    request: requests.CaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/capture`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingAuthorizationCaptureBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: {
          capture_amount: "form",
          close_authorization: "form",
          expand: "deepObject",
          purchase_details: "deepObject",
        },
        explode: {
          capture_amount: true,
          close_authorization: true,
          expand: true,
          purchase_details: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Expire a test-mode authorization
   *
   * <p>Expire a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/expire`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingAuthorizationExpireBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Finalize a test-mode authorization's amount
   *
   * <p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount
   */
  finalizeAmount(
    request: requests.FinalizeAmountRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/finalize_amount`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          final_amount: "form",
          fleet: "deepObject",
          fuel: "deepObject",
        },
        explode: { expand: true, final_amount: true, fleet: true, fuel: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Increment a test-mode authorization
   *
   * <p>Increment a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/increment
   */
  increment(
    request: requests.IncrementRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/increment`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationIncrementBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          increment_amount: "form",
          is_amount_controllable: "form",
        },
        explode: {
          expand: true,
          increment_amount: true,
          is_amount_controllable: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
  /**
   * Reverse a test-mode authorization
   *
   * <p>Reverse a test-mode Authorization.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse
   */
  reverse(
    request: requests.ReverseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/reverse`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingAuthorizationReverseBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", reverse_amount: "form" },
        explode: { expand: true, reverse_amount: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
}
