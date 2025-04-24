import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-link/request-types";
import { Schemas$PaymentLink } from "@sideko-inc/stripe/types/payment-link";
import { Schemas$PaymentLinkCreateBody } from "@sideko-inc/stripe/types/payment-link-create-body";
import { Schemas$PaymentLinkListResponse } from "@sideko-inc/stripe/types/payment-link-list-response";
import { Schemas$PaymentLinkUpdateBody } from "@sideko-inc/stripe/types/payment-link-update-body";
import * as z from "zod";

export class PaymentLinkClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all payment links
   *
   * <p>Returns a list of your payment links.</p>
   *
   * GET /v1/payment_links
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLinkListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_links",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
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
      responseSchema: z.lazy(() => Schemas$PaymentLinkListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve payment link
   *
   * <p>Retrieve a payment link.</p>
   *
   * GET /v1/payment_links/{payment_link}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_links/${request.paymentLink}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
  /**
   * Create a payment link
   *
   * <p>Creates a payment link.</p>
   *
   * POST /v1/payment_links
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_links",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentLinkCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          after_completion: "deepObject",
          allow_promotion_codes: "form",
          application_fee_amount: "form",
          application_fee_percent: "form",
          automatic_tax: "deepObject",
          billing_address_collection: "form",
          consent_collection: "deepObject",
          currency: "form",
          custom_fields: "deepObject",
          custom_text: "deepObject",
          customer_creation: "form",
          expand: "deepObject",
          inactive_message: "form",
          invoice_creation: "deepObject",
          line_items: "deepObject",
          metadata: "deepObject",
          on_behalf_of: "form",
          optional_items: "deepObject",
          payment_intent_data: "deepObject",
          payment_method_collection: "form",
          payment_method_types: "deepObject",
          phone_number_collection: "deepObject",
          restrictions: "deepObject",
          shipping_address_collection: "deepObject",
          shipping_options: "deepObject",
          submit_type: "form",
          subscription_data: "deepObject",
          tax_id_collection: "deepObject",
          transfer_data: "deepObject",
        },
        explode: {
          after_completion: true,
          allow_promotion_codes: true,
          application_fee_amount: true,
          application_fee_percent: true,
          automatic_tax: true,
          billing_address_collection: true,
          consent_collection: true,
          currency: true,
          custom_fields: true,
          custom_text: true,
          customer_creation: true,
          expand: true,
          inactive_message: true,
          invoice_creation: true,
          line_items: true,
          metadata: true,
          on_behalf_of: true,
          optional_items: true,
          payment_intent_data: true,
          payment_method_collection: true,
          payment_method_types: true,
          phone_number_collection: true,
          restrictions: true,
          shipping_address_collection: true,
          shipping_options: true,
          submit_type: true,
          subscription_data: true,
          tax_id_collection: true,
          transfer_data: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
  /**
   * Update a payment link
   *
   * <p>Updates a payment link.</p>
   *
   * POST /v1/payment_links/{payment_link}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_links/${request.paymentLink}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentLinkUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          after_completion: "deepObject",
          allow_promotion_codes: "form",
          automatic_tax: "deepObject",
          billing_address_collection: "form",
          custom_fields: "deepObject",
          custom_text: "deepObject",
          customer_creation: "form",
          expand: "deepObject",
          inactive_message: "deepObject",
          invoice_creation: "deepObject",
          line_items: "deepObject",
          metadata: "deepObject",
          payment_intent_data: "deepObject",
          payment_method_collection: "form",
          payment_method_types: "deepObject",
          phone_number_collection: "deepObject",
          restrictions: "deepObject",
          shipping_address_collection: "deepObject",
          submit_type: "form",
          subscription_data: "deepObject",
          tax_id_collection: "deepObject",
        },
        explode: {
          active: true,
          after_completion: true,
          allow_promotion_codes: true,
          automatic_tax: true,
          billing_address_collection: true,
          custom_fields: true,
          custom_text: true,
          customer_creation: true,
          expand: true,
          inactive_message: true,
          invoice_creation: true,
          line_items: true,
          metadata: true,
          payment_intent_data: true,
          payment_method_collection: true,
          payment_method_types: true,
          phone_number_collection: true,
          restrictions: true,
          shipping_address_collection: true,
          submit_type: true,
          subscription_data: true,
          tax_id_collection: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
}
