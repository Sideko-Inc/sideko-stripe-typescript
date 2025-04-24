import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/financial-account/request-types";
import { Schemas$TreasuryFinancialAccount } from "@sideko-inc/stripe/types/treasury-financial-account";
import { Schemas$TreasuryFinancialAccountCloseBody } from "@sideko-inc/stripe/types/treasury-financial-account-close-body";
import { Schemas$TreasuryFinancialAccountCreateBody } from "@sideko-inc/stripe/types/treasury-financial-account-create-body";
import { Schemas$TreasuryFinancialAccountListCreatedObj0 } from "@sideko-inc/stripe/types/treasury-financial-account-list-created-obj0";
import { Schemas$TreasuryFinancialAccountListResponse } from "@sideko-inc/stripe/types/treasury-financial-account-list-response";
import { Schemas$TreasuryFinancialAccountUpdateBody } from "@sideko-inc/stripe/types/treasury-financial-account-update-body";
import * as z from "zod";

export class FinancialAccountClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all FinancialAccounts
   *
   * <p>Returns a list of FinancialAccounts.</p>
   *
   * GET /v1/treasury/financial_accounts
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccountListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/financial_accounts",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$TreasuryFinancialAccountListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
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
      responseSchema: Schemas$TreasuryFinancialAccountListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a FinancialAccount
   *
   * <p>Retrieves the details of a FinancialAccount.</p>
   *
   * GET /v1/treasury/financial_accounts/{financial_account}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccount> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TreasuryFinancialAccount.in,
      opts,
    });
  }
  /**
   * Create a FinancialAccount
   *
   * <p>Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.</p>
   *
   * POST /v1/treasury/financial_accounts
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccount> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/financial_accounts",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryFinancialAccountCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          features: "deepObject",
          metadata: "deepObject",
          nickname: "deepObject",
          platform_restrictions: "deepObject",
          supported_currencies: "deepObject",
        },
        explode: {
          expand: true,
          features: true,
          metadata: true,
          nickname: true,
          platform_restrictions: true,
          supported_currencies: true,
        },
      },
      responseSchema: Schemas$TreasuryFinancialAccount.in,
      opts,
    });
  }
  /**
   * Update a FinancialAccount
   *
   * <p>Updates the details of a FinancialAccount.</p>
   *
   * POST /v1/treasury/financial_accounts/{financial_account}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TreasuryFinancialAccountUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          features: "deepObject",
          forwarding_settings: "deepObject",
          metadata: "deepObject",
          nickname: "deepObject",
          platform_restrictions: "deepObject",
        },
        explode: {
          expand: true,
          features: true,
          forwarding_settings: true,
          metadata: true,
          nickname: true,
          platform_restrictions: true,
        },
      },
      responseSchema: Schemas$TreasuryFinancialAccount.in,
      opts,
    });
  }
  /**
   * Close a FinancialAccount
   *
   * <p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
   *
   * POST /v1/treasury/financial_accounts/{financial_account}/close
   */
  close(
    request: requests.CloseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryFinancialAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/financial_accounts/${request.financialAccount}/close`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TreasuryFinancialAccountCloseBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", forwarding_settings: "deepObject" },
        explode: { expand: true, forwarding_settings: true },
      },
      responseSchema: Schemas$TreasuryFinancialAccount.in,
      opts,
    });
  }
}
