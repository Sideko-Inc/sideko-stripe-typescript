import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { DisputeClient } from "@sideko-inc/stripe/resources/charge/dispute";
import { RefundClient } from "@sideko-inc/stripe/resources/charge/refund";
import * as requests from "@sideko-inc/stripe/resources/charge/request-types";
import { Schemas$Charge } from "@sideko-inc/stripe/types/charge";
import { Schemas$ChargeCaptureBody } from "@sideko-inc/stripe/types/charge-capture-body";
import { Schemas$ChargeCreateBody } from "@sideko-inc/stripe/types/charge-create-body";
import { Schemas$ChargeListCreatedObj0 } from "@sideko-inc/stripe/types/charge-list-created-obj0";
import { Schemas$ChargeListResponse } from "@sideko-inc/stripe/types/charge-list-response";
import { Schemas$ChargeSearchResponse } from "@sideko-inc/stripe/types/charge-search-response";
import { Schemas$ChargeUpdateBody } from "@sideko-inc/stripe/types/charge-update-body";
import * as z from "zod";

export class ChargeClient extends CoreResourceClient {
  private _disputeLazy?: DisputeClient; // lazy-loading cache
  private _refundLazy?: RefundClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.dispute;
      this.refund;
    }
  }
  get dispute(): DisputeClient {
    return (
      this._disputeLazy ??
      (this._disputeLazy = new (require("./dispute").DisputeClient)(
        this._client,
        this._opts,
      ))
    );
  }
  get refund(): RefundClient {
    return (
      this._refundLazy ??
      (this._refundLazy = new (require("./refund").RefundClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * List all charges
   *
   * <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
   *
   * GET /v1/charges
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ChargeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/charges",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$ChargeListCreatedObj0.out, z.number().int()])
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
          name: "payment_intent",
          value: z.string().optional().parse(request.paymentIntent),
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
          name: "transfer_group",
          value: z.string().optional().parse(request.transferGroup),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ChargeListResponse.in),
      opts,
    });
  }
  /**
   * Search charges
   *
   * <p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/charges/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ChargeSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/charges/search",
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
      responseSchema: z.lazy(() => Schemas$ChargeSearchResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a charge
   *
   * <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
   *
   * GET /v1/charges/{charge}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/charges/${request.charge}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * <p>This method is no longer recommended—use the <a href="/docs/api/payment_intents">Payment Intents API</a>
   * to initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>
   * object used to request payment.</p>
   *
   * POST /v1/charges
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/charges",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          application_fee: "form",
          application_fee_amount: "form",
          capture: "form",
          card: "deepObject",
          currency: "form",
          customer: "form",
          description: "form",
          destination: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          on_behalf_of: "form",
          radar_options: "deepObject",
          receipt_email: "form",
          shipping: "deepObject",
          source: "form",
          statement_descriptor: "form",
          statement_descriptor_suffix: "form",
          transfer_data: "deepObject",
          transfer_group: "form",
        },
        explode: {
          amount: true,
          application_fee: true,
          application_fee_amount: true,
          capture: true,
          card: true,
          currency: true,
          customer: true,
          description: true,
          destination: true,
          expand: true,
          metadata: true,
          on_behalf_of: true,
          radar_options: true,
          receipt_email: true,
          shipping: true,
          source: true,
          statement_descriptor: true,
          statement_descriptor_suffix: true,
          transfer_data: true,
          transfer_group: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * Update a charge
   *
   * <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/charges/{charge}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          customer: "form",
          description: "form",
          expand: "deepObject",
          fraud_details: "deepObject",
          metadata: "deepObject",
          receipt_email: "form",
          shipping: "deepObject",
          transfer_group: "form",
        },
        explode: {
          customer: true,
          description: true,
          expand: true,
          fraud_details: true,
          metadata: true,
          receipt_email: true,
          shipping: true,
          transfer_group: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * Capture a payment
   *
   * <p>Capture the payment of an existing, uncaptured charge that was created with the <code>capture</code> option set to false.</p>
   *
   * <p>Uncaptured payments expire a set number of days after they are created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after which they are marked as refunded and capture attempts will fail.</p>
   *
   * <p>Don’t use this method to capture a PaymentIntent-initiated charge. Use <a href="/docs/api/payment_intents/capture">Capture a PaymentIntent</a>.</p>
   *
   * POST /v1/charges/{charge}/capture
   */
  capture(
    request: requests.CaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/capture`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeCaptureBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          application_fee: "form",
          application_fee_amount: "form",
          expand: "deepObject",
          receipt_email: "form",
          statement_descriptor: "form",
          statement_descriptor_suffix: "form",
          transfer_data: "deepObject",
          transfer_group: "form",
        },
        explode: {
          amount: true,
          application_fee: true,
          application_fee_amount: true,
          expand: true,
          receipt_email: true,
          statement_descriptor: true,
          statement_descriptor_suffix: true,
          transfer_data: true,
          transfer_group: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
}
