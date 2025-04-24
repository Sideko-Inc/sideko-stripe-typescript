import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/terminal/reader/request-types";
import { Schemas$DeletedTerminalReader } from "@sideko-inc/stripe/types/deleted-terminal-reader";
import { Schemas$TerminalReader } from "@sideko-inc/stripe/types/terminal-reader";
import { Schemas$TerminalReaderCancelActionBody } from "@sideko-inc/stripe/types/terminal-reader-cancel-action-body";
import { Schemas$TerminalReaderCreateBody } from "@sideko-inc/stripe/types/terminal-reader-create-body";
import { Schemas$TerminalReaderListResponse } from "@sideko-inc/stripe/types/terminal-reader-list-response";
import { Schemas$TerminalReaderProcessPaymentIntentBody } from "@sideko-inc/stripe/types/terminal-reader-process-payment-intent-body";
import { Schemas$TerminalReaderProcessSetupIntentBody } from "@sideko-inc/stripe/types/terminal-reader-process-setup-intent-body";
import { Schemas$TerminalReaderRefundPaymentBody } from "@sideko-inc/stripe/types/terminal-reader-refund-payment-body";
import { Schemas$TerminalReaderSetReaderDisplayBody } from "@sideko-inc/stripe/types/terminal-reader-set-reader-display-body";
import { Schemas$TerminalReaderUpdateBody } from "@sideko-inc/stripe/types/terminal-reader-update-body";
import * as z from "zod";

export class ReaderClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a Reader
   *
   * <p>Deletes a <code>Reader</code> object.</p>
   *
   * DELETE /v1/terminal/readers/{reader}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTerminalReader> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/terminal/readers/${request.reader}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTerminalReader.in,
      opts,
    });
  }
  /**
   * List all Readers
   *
   * <p>Returns a list of <code>Reader</code> objects.</p>
   *
   * GET /v1/terminal/readers
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReaderListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/terminal/readers",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "device_type",
          value: z
            .enum([
              "bbpos_chipper2x",
              "bbpos_wisepad3",
              "bbpos_wisepos_e",
              "mobile_phone_reader",
              "simulated_wisepos_e",
              "stripe_m2",
              "stripe_s700",
              "verifone_P400",
            ])
            .optional()
            .parse(request.deviceType),
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
          name: "location",
          value: z.string().optional().parse(request.location),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "serial_number",
          value: z.string().optional().parse(request.serialNumber),
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
          value: z.enum(["offline", "online"]).optional().parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TerminalReaderListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a Reader
   *
   * <p>Retrieves a <code>Reader</code> object.</p>
   *
   * GET /v1/terminal/readers/{reader}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader | types.DeletedTerminalReader> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/terminal/readers/${request.reader}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.union([
        z.lazy(() => Schemas$TerminalReader.in),
        Schemas$DeletedTerminalReader.in,
      ]),
      opts,
    });
  }
  /**
   * Create a Reader
   *
   * <p>Creates a new <code>Reader</code> object.</p>
   *
   * POST /v1/terminal/readers
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/terminal/readers",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TerminalReaderCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          label: "form",
          location: "form",
          metadata: "deepObject",
          registration_code: "form",
        },
        explode: {
          expand: true,
          label: true,
          location: true,
          metadata: true,
          registration_code: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
  /**
   * Update a Reader
   *
   * <p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/terminal/readers/{reader}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader | types.DeletedTerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalReaderUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          label: "deepObject",
          metadata: "deepObject",
        },
        explode: { expand: true, label: true, metadata: true },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$TerminalReader.in),
        Schemas$DeletedTerminalReader.in,
      ]),
      opts,
    });
  }
  /**
   * Cancel the current reader action
   *
   * <p>Cancels the current reader action.</p>
   *
   * POST /v1/terminal/readers/{reader}/cancel_action
   */
  cancelAction(
    request: requests.CancelActionRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}/cancel_action`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalReaderCancelActionBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
  /**
   * Hand-off a PaymentIntent to a Reader
   *
   * <p>Initiates a payment flow on a Reader.</p>
   *
   * POST /v1/terminal/readers/{reader}/process_payment_intent
   */
  processPaymentIntent(
    request: requests.ProcessPaymentIntentRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}/process_payment_intent`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TerminalReaderProcessPaymentIntentBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          payment_intent: "form",
          process_config: "deepObject",
        },
        explode: { expand: true, payment_intent: true, process_config: true },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
  /**
   * Hand-off a SetupIntent to a Reader
   *
   * <p>Initiates a setup intent flow on a Reader.</p>
   *
   * POST /v1/terminal/readers/{reader}/process_setup_intent
   */
  processSetupIntent(
    request: requests.ProcessSetupIntentRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}/process_setup_intent`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TerminalReaderProcessSetupIntentBody.out.parse(request),
      bodyEncoding: {
        style: {
          allow_redisplay: "form",
          expand: "deepObject",
          process_config: "deepObject",
          setup_intent: "form",
        },
        explode: {
          allow_redisplay: true,
          expand: true,
          process_config: true,
          setup_intent: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
  /**
   * Refund a Charge or a PaymentIntent in-person
   *
   * <p>Initiates a refund on a Reader</p>
   *
   * POST /v1/terminal/readers/{reader}/refund_payment
   */
  refundPayment(
    request: requests.RefundPaymentRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}/refund_payment`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalReaderRefundPaymentBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          charge: "form",
          expand: "deepObject",
          metadata: "deepObject",
          payment_intent: "form",
          refund_application_fee: "form",
          refund_payment_config: "deepObject",
          reverse_transfer: "form",
        },
        explode: {
          amount: true,
          charge: true,
          expand: true,
          metadata: true,
          payment_intent: true,
          refund_application_fee: true,
          refund_payment_config: true,
          reverse_transfer: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
  /**
   * Set reader display
   *
   * <p>Sets reader display to show cart details.</p>
   *
   * POST /v1/terminal/readers/{reader}/set_reader_display
   */
  setReaderDisplay(
    request: requests.SetReaderDisplayRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalReader> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/readers/${request.reader}/set_reader_display`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TerminalReaderSetReaderDisplayBody.out.parse(request),
      bodyEncoding: {
        style: { cart: "deepObject", expand: "deepObject", type: "form" },
        explode: { cart: true, expand: true, type: true },
      },
      responseSchema: z.lazy(() => Schemas$TerminalReader.in),
      opts,
    });
  }
}
