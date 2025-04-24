import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-method-configuration/request-types";
import { Schemas$PaymentMethodConfiguration } from "@sideko-inc/stripe/types/payment-method-configuration";
import { Schemas$PaymentMethodConfigurationCreateBody } from "@sideko-inc/stripe/types/payment-method-configuration-create-body";
import { Schemas$PaymentMethodConfigurationListResponse } from "@sideko-inc/stripe/types/payment-method-configuration-list-response";
import { Schemas$PaymentMethodConfigurationUpdateBody } from "@sideko-inc/stripe/types/payment-method-configuration-update-body";
import * as z from "zod";

export class PaymentMethodConfigurationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List payment method configurations
   *
   * <p>List payment method configurations</p>
   *
   * GET /v1/payment_method_configurations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfigurationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_method_configurations",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "application",
          value: z
            .union([z.string(), z.string()])
            .optional()
            .parse(request.application),
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
      responseSchema: Schemas$PaymentMethodConfigurationListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve payment method configuration
   *
   * <p>Retrieve payment method configuration</p>
   *
   * GET /v1/payment_method_configurations/{configuration}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_method_configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
  /**
   * Create a payment method configuration
   *
   * <p>Creates a payment method configuration</p>
   *
   * POST /v1/payment_method_configurations
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_method_configurations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodConfigurationCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          acss_debit: "deepObject",
          affirm: "deepObject",
          afterpay_clearpay: "deepObject",
          alipay: "deepObject",
          alma: "deepObject",
          amazon_pay: "deepObject",
          apple_pay: "deepObject",
          apple_pay_later: "deepObject",
          au_becs_debit: "deepObject",
          bacs_debit: "deepObject",
          bancontact: "deepObject",
          billie: "deepObject",
          blik: "deepObject",
          boleto: "deepObject",
          card: "deepObject",
          cartes_bancaires: "deepObject",
          cashapp: "deepObject",
          customer_balance: "deepObject",
          eps: "deepObject",
          expand: "deepObject",
          fpx: "deepObject",
          giropay: "deepObject",
          google_pay: "deepObject",
          grabpay: "deepObject",
          ideal: "deepObject",
          jcb: "deepObject",
          klarna: "deepObject",
          konbini: "deepObject",
          link: "deepObject",
          mobilepay: "deepObject",
          multibanco: "deepObject",
          name: "form",
          nz_bank_account: "deepObject",
          oxxo: "deepObject",
          p24: "deepObject",
          parent: "form",
          pay_by_bank: "deepObject",
          paynow: "deepObject",
          paypal: "deepObject",
          promptpay: "deepObject",
          revolut_pay: "deepObject",
          satispay: "deepObject",
          sepa_debit: "deepObject",
          sofort: "deepObject",
          swish: "deepObject",
          twint: "deepObject",
          us_bank_account: "deepObject",
          wechat_pay: "deepObject",
          zip: "deepObject",
        },
        explode: {
          acss_debit: true,
          affirm: true,
          afterpay_clearpay: true,
          alipay: true,
          alma: true,
          amazon_pay: true,
          apple_pay: true,
          apple_pay_later: true,
          au_becs_debit: true,
          bacs_debit: true,
          bancontact: true,
          billie: true,
          blik: true,
          boleto: true,
          card: true,
          cartes_bancaires: true,
          cashapp: true,
          customer_balance: true,
          eps: true,
          expand: true,
          fpx: true,
          giropay: true,
          google_pay: true,
          grabpay: true,
          ideal: true,
          jcb: true,
          klarna: true,
          konbini: true,
          link: true,
          mobilepay: true,
          multibanco: true,
          name: true,
          nz_bank_account: true,
          oxxo: true,
          p24: true,
          parent: true,
          pay_by_bank: true,
          paynow: true,
          paypal: true,
          promptpay: true,
          revolut_pay: true,
          satispay: true,
          sepa_debit: true,
          sofort: true,
          swish: true,
          twint: true,
          us_bank_account: true,
          wechat_pay: true,
          zip: true,
        },
      },
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
  /**
   * Update payment method configuration
   *
   * <p>Update payment method configuration</p>
   *
   * POST /v1/payment_method_configurations/{configuration}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodConfigurationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          acss_debit: "deepObject",
          active: "form",
          affirm: "deepObject",
          afterpay_clearpay: "deepObject",
          alipay: "deepObject",
          alma: "deepObject",
          amazon_pay: "deepObject",
          apple_pay: "deepObject",
          apple_pay_later: "deepObject",
          au_becs_debit: "deepObject",
          bacs_debit: "deepObject",
          bancontact: "deepObject",
          billie: "deepObject",
          blik: "deepObject",
          boleto: "deepObject",
          card: "deepObject",
          cartes_bancaires: "deepObject",
          cashapp: "deepObject",
          customer_balance: "deepObject",
          eps: "deepObject",
          expand: "deepObject",
          fpx: "deepObject",
          giropay: "deepObject",
          google_pay: "deepObject",
          grabpay: "deepObject",
          ideal: "deepObject",
          jcb: "deepObject",
          klarna: "deepObject",
          konbini: "deepObject",
          link: "deepObject",
          mobilepay: "deepObject",
          multibanco: "deepObject",
          name: "form",
          nz_bank_account: "deepObject",
          oxxo: "deepObject",
          p24: "deepObject",
          pay_by_bank: "deepObject",
          paynow: "deepObject",
          paypal: "deepObject",
          promptpay: "deepObject",
          revolut_pay: "deepObject",
          satispay: "deepObject",
          sepa_debit: "deepObject",
          sofort: "deepObject",
          swish: "deepObject",
          twint: "deepObject",
          us_bank_account: "deepObject",
          wechat_pay: "deepObject",
          zip: "deepObject",
        },
        explode: {
          acss_debit: true,
          active: true,
          affirm: true,
          afterpay_clearpay: true,
          alipay: true,
          alma: true,
          amazon_pay: true,
          apple_pay: true,
          apple_pay_later: true,
          au_becs_debit: true,
          bacs_debit: true,
          bancontact: true,
          billie: true,
          blik: true,
          boleto: true,
          card: true,
          cartes_bancaires: true,
          cashapp: true,
          customer_balance: true,
          eps: true,
          expand: true,
          fpx: true,
          giropay: true,
          google_pay: true,
          grabpay: true,
          ideal: true,
          jcb: true,
          klarna: true,
          konbini: true,
          link: true,
          mobilepay: true,
          multibanco: true,
          name: true,
          nz_bank_account: true,
          oxxo: true,
          p24: true,
          pay_by_bank: true,
          paynow: true,
          paypal: true,
          promptpay: true,
          revolut_pay: true,
          satispay: true,
          sepa_debit: true,
          sofort: true,
          swish: true,
          twint: true,
          us_bank_account: true,
          wechat_pay: true,
          zip: true,
        },
      },
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
}
