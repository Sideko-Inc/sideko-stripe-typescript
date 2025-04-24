import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/treasury/outbound-transfer/request-types";
import { Schemas$TestHelperTreasuryOutboundTransferFailBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-fail-body";
import { Schemas$TestHelperTreasuryOutboundTransferPostBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-post-body";
import { Schemas$TestHelperTreasuryOutboundTransferReturnedBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-returned-body";
import { Schemas$TestHelperTreasuryOutboundTransferUpdateBody } from "@sideko-inc/stripe/types/test-helper-treasury-outbound-transfer-update-body";
import { Schemas$TreasuryOutboundTransfer } from "@sideko-inc/stripe/types/treasury-outbound-transfer";
import * as z from "zod";

export class OutboundTransferClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Test mode: Update an OutboundTransfer
   *
   * <p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_transfers/${request.outboundTransfer}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryOutboundTransferUpdateBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: { expand: "deepObject", tracking_details: "deepObject" },
        explode: { expand: true, tracking_details: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Test mode: Fail an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>failed</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail
   */
  fail(
    request: requests.FailRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_transfers/${request.outboundTransfer}/fail`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundTransferFailBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Test mode: Post an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>posted</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post
   */
  post(
    request: requests.PostRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_transfers/${request.outboundTransfer}/post`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundTransferPostBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Test mode: Return an OutboundTransfer
   *
   * <p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>
   *
   * POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return
   */
  returned(
    request: requests.ReturnedRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/treasury/outbound_transfers/${request.outboundTransfer}/return`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperTreasuryOutboundTransferReturnedBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", returned_details: "deepObject" },
        explode: { expand: true, returned_details: true },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
}
