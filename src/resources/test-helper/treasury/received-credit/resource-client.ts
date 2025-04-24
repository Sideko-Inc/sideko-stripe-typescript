import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/treasury/received-credit/request-types";
import { Schemas$TestHelperTreasuryReceivedCreditCreateBody } from "@sideko-inc/stripe/types/test-helper-treasury-received-credit-create-body";
import { Schemas$TreasuryReceivedCredit } from "@sideko-inc/stripe/types/treasury-received-credit";
import * as z from "zod";

export class ReceivedCreditClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Test mode: Create a ReceivedCredit
   *
   * <p>Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can’t directly create ReceivedCredits initiated by third parties.</p>
   *
   * POST /v1/test_helpers/treasury/received_credits
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryReceivedCredit> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/treasury/received_credits",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTreasuryReceivedCreditCreateBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          description: "form",
          expand: "deepObject",
          financial_account: "form",
          initiating_payment_method_details: "deepObject",
          network: "form",
        },
        explode: {
          amount: true,
          currency: true,
          description: true,
          expand: true,
          financial_account: true,
          initiating_payment_method_details: true,
          network: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TreasuryReceivedCredit.in),
      opts,
    });
  }
}
