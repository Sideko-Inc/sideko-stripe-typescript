import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/payment-method/request-types";
import { Schemas$CustomerPaymentMethodListResponse } from "@sideko-inc/stripe/types/customer-payment-method-list-response";
import { Schemas$PaymentMethod } from "@sideko-inc/stripe/types/payment-method";
import * as z from "zod";

export class PaymentMethodClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List a Customer's PaymentMethods
   *
   * <p>Returns a list of PaymentMethods for a given Customer</p>
   *
   * GET /v1/customers/{customer}/payment_methods
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerPaymentMethodListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/payment_methods`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "allow_redisplay",
          value: z
            .enum(["always", "limited", "unspecified"])
            .optional()
            .parse(request.allowRedisplay),
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
      responseSchema: z.lazy(
        () => Schemas$CustomerPaymentMethodListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a Customer's PaymentMethod
   *
   * <p>Retrieves a PaymentMethod object for a given Customer.</p>
   *
   * GET /v1/customers/{customer}/payment_methods/{payment_method}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethod> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/payment_methods/${request.paymentMethod}`,
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
}
