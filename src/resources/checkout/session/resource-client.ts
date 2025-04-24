import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { LineItemsClient } from "@sideko-inc/stripe/resources/checkout/session/line-items";
import * as requests from "@sideko-inc/stripe/resources/checkout/session/request-types";
import { Schemas$CheckoutSession } from "@sideko-inc/stripe/types/checkout-session";
import { Schemas$CheckoutSessionCreateBody } from "@sideko-inc/stripe/types/checkout-session-create-body";
import { Schemas$CheckoutSessionExpireBody } from "@sideko-inc/stripe/types/checkout-session-expire-body";
import { Schemas$CheckoutSessionListCreatedObj0 } from "@sideko-inc/stripe/types/checkout-session-list-created-obj0";
import { Schemas$CheckoutSessionListCustomerDetails } from "@sideko-inc/stripe/types/checkout-session-list-customer-details";
import { Schemas$CheckoutSessionListResponse } from "@sideko-inc/stripe/types/checkout-session-list-response";
import { Schemas$CheckoutSessionUpdateBody } from "@sideko-inc/stripe/types/checkout-session-update-body";
import * as z from "zod";

export class SessionClient extends CoreResourceClient {
  private _lineItemsLazy?: LineItemsClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.lineItems;
    }
  }
  get lineItems(): LineItemsClient {
    return (
      this._lineItemsLazy ??
      (this._lineItemsLazy = new (require("./line-items").LineItemsClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * List all Checkout Sessions
   *
   * <p>Returns a list of Checkout Sessions.</p>
   *
   * GET /v1/checkout/sessions
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSessionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/checkout/sessions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$CheckoutSessionListCreatedObj0.out,
              z.number().int(),
            ])
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
          name: "customer_details",
          value: Schemas$CheckoutSessionListCustomerDetails.out
            .optional()
            .parse(request.customerDetails),
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
          name: "payment_link",
          value: z.string().optional().parse(request.paymentLink),
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
          value: z
            .enum(["complete", "expired", "open"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "subscription",
          value: z.string().optional().parse(request.subscription),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CheckoutSessionListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a Checkout Session
   *
   * <p>Retrieves a Checkout Session object.</p>
   *
   * GET /v1/checkout/sessions/{session}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/checkout/sessions/${request.session}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Create a Checkout Session
   *
   * <p>Creates a Checkout Session object.</p>
   *
   * POST /v1/checkout/sessions
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/checkout/sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CheckoutSessionCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          adaptive_pricing: "deepObject",
          after_expiration: "deepObject",
          allow_promotion_codes: "form",
          automatic_tax: "deepObject",
          billing_address_collection: "form",
          cancel_url: "form",
          client_reference_id: "form",
          consent_collection: "deepObject",
          currency: "form",
          custom_fields: "deepObject",
          custom_text: "deepObject",
          customer: "form",
          customer_creation: "form",
          customer_email: "form",
          customer_update: "deepObject",
          discounts: "deepObject",
          expand: "deepObject",
          expires_at: "form",
          invoice_creation: "deepObject",
          line_items: "deepObject",
          locale: "form",
          metadata: "deepObject",
          mode: "form",
          optional_items: "deepObject",
          payment_intent_data: "deepObject",
          payment_method_collection: "form",
          payment_method_configuration: "form",
          payment_method_data: "deepObject",
          payment_method_options: "deepObject",
          payment_method_types: "deepObject",
          permissions: "deepObject",
          phone_number_collection: "deepObject",
          redirect_on_completion: "form",
          return_url: "form",
          saved_payment_method_options: "deepObject",
          setup_intent_data: "deepObject",
          shipping_address_collection: "deepObject",
          shipping_options: "deepObject",
          submit_type: "form",
          subscription_data: "deepObject",
          success_url: "form",
          tax_id_collection: "deepObject",
          ui_mode: "form",
        },
        explode: {
          adaptive_pricing: true,
          after_expiration: true,
          allow_promotion_codes: true,
          automatic_tax: true,
          billing_address_collection: true,
          cancel_url: true,
          client_reference_id: true,
          consent_collection: true,
          currency: true,
          custom_fields: true,
          custom_text: true,
          customer: true,
          customer_creation: true,
          customer_email: true,
          customer_update: true,
          discounts: true,
          expand: true,
          expires_at: true,
          invoice_creation: true,
          line_items: true,
          locale: true,
          metadata: true,
          mode: true,
          optional_items: true,
          payment_intent_data: true,
          payment_method_collection: true,
          payment_method_configuration: true,
          payment_method_data: true,
          payment_method_options: true,
          payment_method_types: true,
          permissions: true,
          phone_number_collection: true,
          redirect_on_completion: true,
          return_url: true,
          saved_payment_method_options: true,
          setup_intent_data: true,
          shipping_address_collection: true,
          shipping_options: true,
          submit_type: true,
          subscription_data: true,
          success_url: true,
          tax_id_collection: true,
          ui_mode: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Update a Checkout Session
   *
   * <p>Updates a Checkout Session object.</p>
   *
   * POST /v1/checkout/sessions/{session}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/checkout/sessions/${request.session}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CheckoutSessionUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          collected_information: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          shipping_options: "deepObject",
        },
        explode: {
          collected_information: true,
          expand: true,
          metadata: true,
          shipping_options: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Expire a Checkout Session
   *
   * <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>
   *
   * <p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
   *
   * POST /v1/checkout/sessions/{session}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/checkout/sessions/${request.session}/expire`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CheckoutSessionExpireBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
}
