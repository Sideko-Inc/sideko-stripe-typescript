import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/financial-accounts/feature/request-types";
import { Schemas$TreasuryFinancialAccountFeatures } from "@sideko-inc/stripe/types/treasury-financial-account-features";
import { Schemas$TreasuryFinancialAccountsFeatureCreateBody } from "@sideko-inc/stripe/types/treasury-financial-accounts-feature-create-body";
import * as z from "zod";

export class FeatureClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve FinancialAccount Features
   *
   * <p>Retrieves Features information associated with the FinancialAccount.</p>
   *
   * GET /v1/treasury/financial_accounts/{financial_account}/features
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccountFeatures> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}/features`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TreasuryFinancialAccountFeatures.in,
      opts,
    });
  }
  /**
   * Update FinancialAccount Features
   *
   * <p>Updates the Features associated with a FinancialAccount.</p>
   *
   * POST /v1/treasury/financial_accounts/{financial_account}/features
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccountFeatures> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}/features`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TreasuryFinancialAccountsFeatureCreateBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: {
          card_issuing: "deepObject",
          deposit_insurance: "deepObject",
          expand: "deepObject",
          financial_addresses: "deepObject",
          inbound_transfers: "deepObject",
          intra_stripe_flows: "deepObject",
          outbound_payments: "deepObject",
          outbound_transfers: "deepObject",
        },
        explode: {
          card_issuing: true,
          deposit_insurance: true,
          expand: true,
          financial_addresses: true,
          inbound_transfers: true,
          intra_stripe_flows: true,
          outbound_payments: true,
          outbound_transfers: true,
        },
      },
      responseSchema: Schemas$TreasuryFinancialAccountFeatures.in,
      opts,
    });
  }
}
