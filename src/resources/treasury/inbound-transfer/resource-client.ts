import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/inbound-transfer/request-types";
import { Schemas$TreasuryInboundTransfer } from "@sideko-inc/stripe/types/treasury-inbound-transfer";
import { Schemas$TreasuryInboundTransferCanceBody } from "@sideko-inc/stripe/types/treasury-inbound-transfer-cance-body";
import { Schemas$TreasuryInboundTransferCreateBody } from "@sideko-inc/stripe/types/treasury-inbound-transfer-create-body";
import { Schemas$TreasuryInboundTransferListResponse } from "@sideko-inc/stripe/types/treasury-inbound-transfer-list-response";
import * as z from "zod";

export class InboundTransferClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all InboundTransfers
   *
   * <p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>
   *
   * GET /v1/treasury/inbound_transfers
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransferListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/inbound_transfers",
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
            .enum(["canceled", "failed", "processing", "succeeded"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$TreasuryInboundTransferListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve an InboundTransfer
   *
   * <p>Retrieves the details of an existing InboundTransfer.</p>
   *
   * GET /v1/treasury/inbound_transfers/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/inbound_transfers/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
  /**
   * Create an InboundTransfer
   *
   * <p>Creates an InboundTransfer.</p>
   *
   * POST /v1/treasury/inbound_transfers
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/inbound_transfers",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryInboundTransferCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          expand: "deepObject",
          financial_account: "form",
          metadata: "deepObject",
          origin_payment_method: "form",
          statement_descriptor: "form",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          expand: true,
          financial_account: true,
          metadata: true,
          origin_payment_method: true,
          statement_descriptor: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
  /**
   * Cancel an InboundTransfer
   *
   * <p>Cancels an InboundTransfer.</p>
   *
   * POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel
   */
  cance(
    request: requests.CanceRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryInboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/inbound_transfers/${request.inboundTransfer}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TreasuryInboundTransferCanceBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryInboundTransfer.in),
      opts,
    });
  }
}
