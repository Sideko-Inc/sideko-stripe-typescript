import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-method/request-types";
import { Schemas$PaymentMethod } from "@sideko-inc/stripe/types/payment-method";
import { Schemas$PaymentMethodAttachBody } from "@sideko-inc/stripe/types/payment-method-attach-body";
import { Schemas$PaymentMethodCreateBody } from "@sideko-inc/stripe/types/payment-method-create-body";
import { Schemas$PaymentMethodDetachBody } from "@sideko-inc/stripe/types/payment-method-detach-body";
import { Schemas$PaymentMethodListResponse } from "@sideko-inc/stripe/types/payment-method-list-response";
import { Schemas$PaymentMethodUpdateBody } from "@sideko-inc/stripe/types/payment-method-update-body";
import * as z from "zod";

export class PaymentMethodClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List PaymentMethods
   *
   * <p>Returns a list of PaymentMethods for Treasury flows. If you want to list the PaymentMethods attached to a Customer for payments, you should use the <a href="/docs/api/payment_methods/customer_list">List a Customer’s PaymentMethods</a> API instead.</p>
   *
   * GET /v1/payment_methods
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_methods",
      auth: ["bearerAuth"],
      query: [
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
        encodeQueryParam({
          name: "type",
          value: z
            .enum([
              "acss_debit",
              "affirm",
              "afterpay_clearpay",
              "alipay",
              "alma",
              "amazon_pay",
              "au_becs_debit",
              "bacs_debit",
              "bancontact",
              "billie",
              "blik",
              "boleto",
              "card",
              "cashapp",
              "customer_balance",
              "eps",
              "fpx",
              "giropay",
              "grabpay",
              "ideal",
              "kakao_pay",
              "klarna",
              "konbini",
              "kr_card",
              "link",
              "mobilepay",
              "multibanco",
              "naver_pay",
              "nz_bank_account",
              "oxxo",
              "p24",
              "pay_by_bank",
              "payco",
              "paynow",
              "paypal",
              "pix",
              "promptpay",
              "revolut_pay",
              "samsung_pay",
              "satispay",
              "sepa_debit",
              "sofort",
              "swish",
              "twint",
              "us_bank_account",
              "wechat_pay",
              "zip",
            ])
            .optional()
            .parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PaymentMethodListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a PaymentMethod
   *
   * <p>Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use <a href="/docs/api/payment_methods/customer">Retrieve a Customer’s PaymentMethods</a></p>
   *
   * GET /v1/payment_methods/{payment_method}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_methods/${request.paymentMethod}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PaymentMethod.in),
      opts,
    });
  }
  /**
   * Shares a PaymentMethod
   *
   * <p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>
   *
   * <p>Instead of creating a PaymentMethod directly, we recommend using the <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect payment method details ahead of a future payment.</p>
   *
   * POST /v1/payment_methods
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_methods",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          acss_debit: "deepObject",
          affirm: "deepObject",
          afterpay_clearpay: "deepObject",
          alipay: "deepObject",
          allow_redisplay: "form",
          alma: "deepObject",
          amazon_pay: "deepObject",
          au_becs_debit: "deepObject",
          bacs_debit: "deepObject",
          bancontact: "deepObject",
          billie: "deepObject",
          billing_details: "deepObject",
          blik: "deepObject",
          boleto: "deepObject",
          card: "deepObject",
          cashapp: "deepObject",
          customer: "form",
          customer_balance: "deepObject",
          eps: "deepObject",
          expand: "deepObject",
          fpx: "deepObject",
          giropay: "deepObject",
          grabpay: "deepObject",
          ideal: "deepObject",
          interac_present: "deepObject",
          kakao_pay: "deepObject",
          klarna: "deepObject",
          konbini: "deepObject",
          kr_card: "deepObject",
          link: "deepObject",
          metadata: "deepObject",
          mobilepay: "deepObject",
          multibanco: "deepObject",
          naver_pay: "deepObject",
          nz_bank_account: "deepObject",
          oxxo: "deepObject",
          p24: "deepObject",
          pay_by_bank: "deepObject",
          payco: "deepObject",
          payment_method: "form",
          paynow: "deepObject",
          paypal: "deepObject",
          pix: "deepObject",
          promptpay: "deepObject",
          radar_options: "deepObject",
          revolut_pay: "deepObject",
          samsung_pay: "deepObject",
          satispay: "deepObject",
          sepa_debit: "deepObject",
          sofort: "deepObject",
          swish: "deepObject",
          twint: "deepObject",
          type: "form",
          us_bank_account: "deepObject",
          wechat_pay: "deepObject",
          zip: "deepObject",
        },
        explode: {
          acss_debit: true,
          affirm: true,
          afterpay_clearpay: true,
          alipay: true,
          allow_redisplay: true,
          alma: true,
          amazon_pay: true,
          au_becs_debit: true,
          bacs_debit: true,
          bancontact: true,
          billie: true,
          billing_details: true,
          blik: true,
          boleto: true,
          card: true,
          cashapp: true,
          customer: true,
          customer_balance: true,
          eps: true,
          expand: true,
          fpx: true,
          giropay: true,
          grabpay: true,
          ideal: true,
          interac_present: true,
          kakao_pay: true,
          klarna: true,
          konbini: true,
          kr_card: true,
          link: true,
          metadata: true,
          mobilepay: true,
          multibanco: true,
          naver_pay: true,
          nz_bank_account: true,
          oxxo: true,
          p24: true,
          pay_by_bank: true,
          payco: true,
          payment_method: true,
          paynow: true,
          paypal: true,
          pix: true,
          promptpay: true,
          radar_options: true,
          revolut_pay: true,
          samsung_pay: true,
          satispay: true,
          sepa_debit: true,
          sofort: true,
          swish: true,
          twint: true,
          type: true,
          us_bank_account: true,
          wechat_pay: true,
          zip: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentMethod.in),
      opts,
    });
  }
  /**
   * Update a PaymentMethod
   *
   * <p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p>
   *
   * POST /v1/payment_methods/{payment_method}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_methods/${request.paymentMethod}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          allow_redisplay: "form",
          billing_details: "deepObject",
          card: "deepObject",
          expand: "deepObject",
          link: "deepObject",
          metadata: "deepObject",
          pay_by_bank: "deepObject",
          us_bank_account: "deepObject",
        },
        explode: {
          allow_redisplay: true,
          billing_details: true,
          card: true,
          expand: true,
          link: true,
          metadata: true,
          pay_by_bank: true,
          us_bank_account: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentMethod.in),
      opts,
    });
  }
  /**
   * Attach a PaymentMethod to a Customer
   *
   * <p>Attaches a PaymentMethod object to a Customer.</p>
   *
   * <p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
   * or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
   * These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the <code>/v1/payment_methods/:id/attach</code>
   * endpoint without first using a SetupIntent or PaymentIntent with <code>setup_future_usage</code> does not optimize the PaymentMethod for
   * future use, which makes later declines and payment friction more likely.
   * See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up
   * future payments.</p>
   *
   * <p>To use this PaymentMethod as the default for invoice or subscription payments,
   * set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
   * on the Customer to the PaymentMethod’s ID.</p>
   *
   * POST /v1/payment_methods/{payment_method}/attach
   */
  attach(
    request: requests.AttachRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_methods/${request.paymentMethod}/attach`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodAttachBody.out.parse(request),
      bodyEncoding: {
        style: { customer: "form", expand: "deepObject" },
        explode: { customer: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$PaymentMethod.in),
      opts,
    });
  }
  /**
   * Detach a PaymentMethod from a Customer
   *
   * <p>Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.</p>
   *
   * POST /v1/payment_methods/{payment_method}/detach
   */
  detach(
    request: requests.DetachRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_methods/${request.paymentMethod}/detach`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodDetachBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$PaymentMethod.in),
      opts,
    });
  }
}
