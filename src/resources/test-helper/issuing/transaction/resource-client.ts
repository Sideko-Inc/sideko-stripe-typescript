import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/transaction/request-types";
import { Schemas$IssuingTransaction } from "@sideko-inc/stripe/types/issuing-transaction";
import { Schemas$TestHelperIssuingTransactionCreateForceCaptureBody } from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-force-capture-body";
import { Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBody } from "@sideko-inc/stripe/types/test-helper-issuing-transaction-create-unlinked-refund-body";
import { Schemas$TestHelperIssuingTransactionRefundBody } from "@sideko-inc/stripe/types/test-helper-issuing-transaction-refund-body";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a test-mode force capture
   *
   * <p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>
   *
   * POST /v1/test_helpers/issuing/transactions/create_force_capture
   */
  createForceCapture(
    request: requests.CreateForceCaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/transactions/create_force_capture",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingTransactionCreateForceCaptureBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: {
          amount: "form",
          card: "form",
          currency: "form",
          expand: "deepObject",
          merchant_data: "deepObject",
          purchase_details: "deepObject",
        },
        explode: {
          amount: true,
          card: true,
          currency: true,
          expand: true,
          merchant_data: true,
          purchase_details: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingTransaction.in),
      opts,
    });
  }
  /**
   * Create a test-mode unlinked refund
   *
   * <p>Allows the user to refund an arbitrary amount, also known as a unlinked refund.</p>
   *
   * POST /v1/test_helpers/issuing/transactions/create_unlinked_refund
   */
  createUnlinkedRefund(
    request: requests.CreateUnlinkedRefundRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/transactions/create_unlinked_refund",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: {
          amount: "form",
          card: "form",
          currency: "form",
          expand: "deepObject",
          merchant_data: "deepObject",
          purchase_details: "deepObject",
        },
        explode: {
          amount: true,
          card: true,
          currency: true,
          expand: true,
          merchant_data: true,
          purchase_details: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingTransaction.in),
      opts,
    });
  }
  /**
   * Refund a test-mode transaction
   *
   * <p>Refund a test-mode Transaction.</p>
   *
   * POST /v1/test_helpers/issuing/transactions/{transaction}/refund
   */
  refund(
    request: requests.RefundRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/transactions/${request.transaction}/refund`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingTransactionRefundBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", refund_amount: "form" },
        explode: { expand: true, refund_amount: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingTransaction.in),
      opts,
    });
  }
}
