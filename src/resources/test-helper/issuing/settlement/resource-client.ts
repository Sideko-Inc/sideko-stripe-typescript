import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/settlement/request-types";
import { Schemas$IssuingSettlement } from "@sideko-inc/stripe/types/issuing-settlement";
import { Schemas$TestHelperIssuingSettlementCompleteBody } from "@sideko-inc/stripe/types/test-helper-issuing-settlement-complete-body";
import { Schemas$TestHelperIssuingSettlementCreateBody } from "@sideko-inc/stripe/types/test-helper-issuing-settlement-create-body";

export class SettlementClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create a test-mode settlement
   *
   * <p>Allows the user to create an Issuing settlement.</p>
   *
   * POST /v1/test_helpers/issuing/settlements
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/issuing/settlements",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingSettlementCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          bin: "form",
          clearing_date: "form",
          currency: "form",
          expand: "deepObject",
          interchange_fees_amount: "form",
          net_total_amount: "form",
          network: "form",
          network_settlement_identifier: "form",
          transaction_amount: "form",
          transaction_count: "form",
        },
        explode: {
          bin: true,
          clearing_date: true,
          currency: true,
          expand: true,
          interchange_fees_amount: true,
          net_total_amount: true,
          network: true,
          network_settlement_identifier: true,
          transaction_amount: true,
          transaction_count: true,
        },
      },
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
  /**
   * Complete a test-mode settlement
   *
   * <p>Allows the user to mark an Issuing settlement as complete.</p>
   *
   * POST /v1/test_helpers/issuing/settlements/{settlement}/complete
   */
  complete(
    request: requests.CompleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/settlements/${request.settlement}/complete`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingSettlementCompleteBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
}
