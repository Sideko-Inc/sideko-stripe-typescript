import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/outbound-transfer/request-types";
import { Schemas$TreasuryOutboundTransfer } from "@sideko-inc/stripe/types/treasury-outbound-transfer";
import { Schemas$TreasuryOutboundTransferCancelBody } from "@sideko-inc/stripe/types/treasury-outbound-transfer-cancel-body";
import { Schemas$TreasuryOutboundTransferCreateBody } from "@sideko-inc/stripe/types/treasury-outbound-transfer-create-body";
import { Schemas$TreasuryOutboundTransferListResponse } from "@sideko-inc/stripe/types/treasury-outbound-transfer-list-response";
import * as z from "zod";

export class OutboundTransferClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all OutboundTransfers
   *
   * <p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>
   *
   * GET /v1/treasury/outbound_transfers
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransferListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/outbound_transfers",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
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
          name: "status",
          value: z
            .enum(["canceled", "failed", "posted", "processing", "returned"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryOutboundTransferListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve an OutboundTransfer
   *
   * <p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>
   *
   * GET /v1/treasury/outbound_transfers/{outbound_transfer}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/outbound_transfers/${request.outboundTransfer}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Create an OutboundTransfer
   *
   * <p>Creates an OutboundTransfer.</p>
   *
   * POST /v1/treasury/outbound_transfers
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/outbound_transfers",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryOutboundTransferCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          destination_payment_method: "form",
          destination_payment_method_data: "deepObject",
          destination_payment_method_options: "deepObject",
          expand: "deepObject",
          financial_account: "form",
          metadata: "deepObject",
          statement_descriptor: "form",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          destination_payment_method: true,
          destination_payment_method_data: true,
          destination_payment_method_options: true,
          expand: true,
          financial_account: true,
          metadata: true,
          statement_descriptor: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Cancel an OutboundTransfer
   *
   * <p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
   *
   * POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/outbound_transfers/${request.outboundTransfer}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TreasuryOutboundTransferCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
}
