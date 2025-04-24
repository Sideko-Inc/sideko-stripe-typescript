import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-intent/request-types";
import { Schemas$PaymentIntent } from "@sideko-inc/stripe/types/payment-intent";
import { Schemas$PaymentIntentApplyCustomerBalanceBody } from "@sideko-inc/stripe/types/payment-intent-apply-customer-balance-body";
import { Schemas$PaymentIntentCancelBody } from "@sideko-inc/stripe/types/payment-intent-cancel-body";
import { Schemas$PaymentIntentCaptureBody } from "@sideko-inc/stripe/types/payment-intent-capture-body";
import { Schemas$PaymentIntentConfirmBody } from "@sideko-inc/stripe/types/payment-intent-confirm-body";
import { Schemas$PaymentIntentCreateBody } from "@sideko-inc/stripe/types/payment-intent-create-body";
import { Schemas$PaymentIntentIncrementAuthorizationBody } from "@sideko-inc/stripe/types/payment-intent-increment-authorization-body";
import { Schemas$PaymentIntentListCreatedObj0 } from "@sideko-inc/stripe/types/payment-intent-list-created-obj0";
import { Schemas$PaymentIntentListResponse } from "@sideko-inc/stripe/types/payment-intent-list-response";
import { Schemas$PaymentIntentSearchResponse } from "@sideko-inc/stripe/types/payment-intent-search-response";
import { Schemas$PaymentIntentUpdateBody } from "@sideko-inc/stripe/types/payment-intent-update-body";
import { Schemas$PaymentIntentVerifyMicrodepositsBody } from "@sideko-inc/stripe/types/payment-intent-verify-microdeposits-body";
import * as z from "zod";

export class PaymentIntentClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all PaymentIntents
   *
   * <p>Returns a list of PaymentIntents.</p>
   *
   * GET /v1/payment_intents
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntentListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_intents",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$PaymentIntentListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
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
      ],
      responseSchema: z.lazy(() => Schemas$PaymentIntentListResponse.in),
      opts,
    });
  }
  /**
   * Search PaymentIntents
   *
   * <p>Search for PaymentIntents you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/payment_intents/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntentSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_intents/search",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PaymentIntentSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a PaymentIntent
   *
   * <p>Retrieves the details of a PaymentIntent that has previously been created. </p>
   *
   * <p>You can retrieve a PaymentIntent client-side using a publishable key when the <code>client_secret</code> is in the query string. </p>
   *
   * <p>If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>
   *
   * GET /v1/payment_intents/{intent}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_intents/${request.intent}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "client_secret",
          value: z.string().optional().parse(request.clientSecret),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Create a PaymentIntent
   *
   * <p>Creates a PaymentIntent object.</p>
   *
   * <p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
   * to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
   * with the Payment Intents API</a>.</p>
   *
   * <p>When you use <code>confirm=true</code> during creation, it’s equivalent to creating
   * and confirming the PaymentIntent in the same call. You can use any parameters
   * available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when you supply
   * <code>confirm=true</code>.</p>
   *
   * POST /v1/payment_intents
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_intents",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentIntentCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          application_fee_amount: "form",
          automatic_payment_methods: "deepObject",
          capture_method: "form",
          confirm: "form",
          confirmation_method: "form",
          confirmation_token: "form",
          currency: "form",
          customer: "form",
          description: "form",
          error_on_requires_action: "form",
          expand: "deepObject",
          mandate: "form",
          mandate_data: "deepObject",
          metadata: "deepObject",
          off_session: "deepObject",
          on_behalf_of: "form",
          payment_method: "form",
          payment_method_configuration: "form",
          payment_method_data: "deepObject",
          payment_method_options: "deepObject",
          payment_method_types: "deepObject",
          radar_options: "deepObject",
          receipt_email: "form",
          return_url: "form",
          setup_future_usage: "form",
          shipping: "deepObject",
          statement_descriptor: "form",
          statement_descriptor_suffix: "form",
          transfer_data: "deepObject",
          transfer_group: "form",
          use_stripe_sdk: "form",
        },
        explode: {
          amount: true,
          application_fee_amount: true,
          automatic_payment_methods: true,
          capture_method: true,
          confirm: true,
          confirmation_method: true,
          confirmation_token: true,
          currency: true,
          customer: true,
          description: true,
          error_on_requires_action: true,
          expand: true,
          mandate: true,
          mandate_data: true,
          metadata: true,
          off_session: true,
          on_behalf_of: true,
          payment_method: true,
          payment_method_configuration: true,
          payment_method_data: true,
          payment_method_options: true,
          payment_method_types: true,
          radar_options: true,
          receipt_email: true,
          return_url: true,
          setup_future_usage: true,
          shipping: true,
          statement_descriptor: true,
          statement_descriptor_suffix: true,
          transfer_data: true,
          transfer_group: true,
          use_stripe_sdk: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Update a PaymentIntent
   *
   * <p>Updates properties on a PaymentIntent object without confirming.</p>
   *
   * <p>Depending on which properties you update, you might need to confirm the
   * PaymentIntent again. For example, updating the <code>payment_method</code>
   * always requires you to confirm the PaymentIntent again. If you prefer to
   * update and confirm at the same time, we recommend updating properties through
   * the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>
   *
   * POST /v1/payment_intents/{intent}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          application_fee_amount: "deepObject",
          capture_method: "form",
          currency: "form",
          customer: "form",
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
          payment_method: "form",
          payment_method_configuration: "form",
          payment_method_data: "deepObject",
          payment_method_options: "deepObject",
          payment_method_types: "deepObject",
          receipt_email: "deepObject",
          setup_future_usage: "form",
          shipping: "deepObject",
          statement_descriptor: "form",
          statement_descriptor_suffix: "form",
          transfer_data: "deepObject",
          transfer_group: "form",
        },
        explode: {
          amount: true,
          application_fee_amount: true,
          capture_method: true,
          currency: true,
          customer: true,
          description: true,
          expand: true,
          metadata: true,
          payment_method: true,
          payment_method_configuration: true,
          payment_method_data: true,
          payment_method_options: true,
          payment_method_types: true,
          receipt_email: true,
          setup_future_usage: true,
          shipping: true,
          statement_descriptor: true,
          statement_descriptor_suffix: true,
          transfer_data: true,
          transfer_group: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Reconcile a customer_balance PaymentIntent
   *
   * <p>Manually reconcile the remaining amount for a <code>customer_balance</code> PaymentIntent.</p>
   *
   * POST /v1/payment_intents/{intent}/apply_customer_balance
   */
  applyCustomerBalance(
    request: requests.ApplyCustomerBalanceRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/apply_customer_balance`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentApplyCustomerBalanceBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { amount: "form", currency: "form", expand: "deepObject" },
        explode: { amount: true, currency: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Cancel a PaymentIntent
   *
   * <p>You can cancel a PaymentIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, <code>requires_action</code> or, <a href="/docs/payments/intents">in rare cases</a>, <code>processing</code>. </p>
   *
   * <p>After it’s canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a <code>status</code> of <code>requires_capture</code>, the remaining <code>amount_capturable</code> is automatically refunded. </p>
   *
   * <p>You can’t cancel the PaymentIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
   *
   * POST /v1/payment_intents/{intent}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { cancellation_reason: "form", expand: "deepObject" },
        explode: { cancellation_reason: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Capture a PaymentIntent
   *
   * <p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>
   *
   * <p>Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.</p>
   *
   * <p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>
   *
   * POST /v1/payment_intents/{intent}/capture
   */
  capture(
    request: requests.CaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/capture`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentCaptureBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount_to_capture: "form",
          application_fee_amount: "form",
          expand: "deepObject",
          final_capture: "form",
          metadata: "deepObject",
          statement_descriptor: "form",
          statement_descriptor_suffix: "form",
          transfer_data: "deepObject",
        },
        explode: {
          amount_to_capture: true,
          application_fee_amount: true,
          expand: true,
          final_capture: true,
          metadata: true,
          statement_descriptor: true,
          statement_descriptor_suffix: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Confirm a PaymentIntent
   *
   * <p>Confirm that your customer intends to pay with current or provided
   * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
   * a payment.
   * If the selected payment method requires additional authentication steps, the
   * PaymentIntent will transition to the <code>requires_action</code> status and
   * suggest additional actions via <code>next_action</code>. If payment fails,
   * the PaymentIntent transitions to the <code>requires_payment_method</code> status or the
   * <code>canceled</code> status if the confirmation limit is reached. If
   * payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
   * status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).
   * If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
   * using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
   * and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
   * After <code>next_action</code>s are handled by the client, no additional
   * confirmation is required to complete the payment.
   * If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
   * initiated using a secret key.
   * If any actions are required for the payment, the PaymentIntent will
   * return to the <code>requires_confirmation</code> state
   * after those actions are completed. Your server needs to then
   * explicitly re-confirm the PaymentIntent to initiate the next payment
   * attempt.
   * There is a variable upper limit on how many times a PaymentIntent can be confirmed.
   * After this limit is reached, any further calls to this endpoint will
   * transition the PaymentIntent to the <code>canceled</code> state.</p>
   *
   * POST /v1/payment_intents/{intent}/confirm
   */
  confirm(
    request: requests.ConfirmRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/confirm`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentConfirmBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          capture_method: "form",
          client_secret: "form",
          confirmation_token: "form",
          error_on_requires_action: "form",
          expand: "deepObject",
          mandate: "form",
          mandate_data: "deepObject",
          off_session: "deepObject",
          payment_method: "form",
          payment_method_data: "deepObject",
          payment_method_options: "deepObject",
          payment_method_types: "deepObject",
          radar_options: "deepObject",
          receipt_email: "deepObject",
          return_url: "form",
          setup_future_usage: "form",
          shipping: "deepObject",
          use_stripe_sdk: "form",
        },
        explode: {
          capture_method: true,
          client_secret: true,
          confirmation_token: true,
          error_on_requires_action: true,
          expand: true,
          mandate: true,
          mandate_data: true,
          off_session: true,
          payment_method: true,
          payment_method_data: true,
          payment_method_options: true,
          payment_method_types: true,
          radar_options: true,
          receipt_email: true,
          return_url: true,
          setup_future_usage: true,
          shipping: true,
          use_stripe_sdk: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Increment an authorization
   *
   * <p>Perform an incremental authorization on an eligible
   * <a href="/docs/api/payment_intents/object">PaymentIntent</a>. To be eligible, the
   * PaymentIntent’s status must be <code>requires_capture</code> and
   * <a href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>
   * must be <code>true</code>.</p>
   *
   * <p>Incremental authorizations attempt to increase the authorized amount on
   * your customer’s card to the new, higher <code>amount</code> provided. Similar to the
   * initial authorization, incremental authorizations can be declined. A
   * single PaymentIntent can call this endpoint multiple times to further
   * increase the authorized amount.</p>
   *
   * <p>If the incremental authorization succeeds, the PaymentIntent object
   * returns with the updated
   * <a href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.
   * If the incremental authorization fails, a
   * <a href="/docs/error-codes#card-declined">card_declined</a> error returns, and no other
   * fields on the PaymentIntent or Charge update. The PaymentIntent
   * object remains capturable for the previously authorized amount.</p>
   *
   * <p>Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
   * After it’s captured, a PaymentIntent can no longer be incremented.</p>
   *
   * <p>Learn more about <a href="/docs/terminal/features/incremental-authorizations">incremental authorizations</a>.</p>
   *
   * POST /v1/payment_intents/{intent}/increment_authorization
   */
  incrementAuthorization(
    request: requests.IncrementAuthorizationRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/increment_authorization`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentIntentIncrementAuthorizationBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          application_fee_amount: "form",
          description: "form",
          expand: "deepObject",
          metadata: "deepObject",
          statement_descriptor: "form",
          transfer_data: "deepObject",
        },
        explode: {
          amount: true,
          application_fee_amount: true,
          description: true,
          expand: true,
          metadata: true,
          statement_descriptor: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
  /**
   * Verify microdeposits on a PaymentIntent
   *
   * <p>Verifies microdeposits on a PaymentIntent object.</p>
   *
   * POST /v1/payment_intents/{intent}/verify_microdeposits
   */
  verifyMicrodeposits(
    request: requests.VerifyMicrodepositsRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_intents/${request.intent}/verify_microdeposits`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentIntentVerifyMicrodepositsBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amounts: "deepObject",
          client_secret: "form",
          descriptor_code: "form",
          expand: "deepObject",
        },
        explode: {
          amounts: true,
          client_secret: true,
          descriptor_code: true,
          expand: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentIntent.in),
      opts,
    });
  }
}
