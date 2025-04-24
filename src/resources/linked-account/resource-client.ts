import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { OwnersClient } from "@sideko-inc/stripe/resources/linked-account/owners";
import * as requests from "@sideko-inc/stripe/resources/linked-account/request-types";
import { Schemas$FinancialConnectionsAccount } from "@sideko-inc/stripe/types/financial-connections-account";
import { Schemas$LinkedAccountDisconnectBody } from "@sideko-inc/stripe/types/linked-account-disconnect-body";
import { Schemas$LinkedAccountListAccountHolder } from "@sideko-inc/stripe/types/linked-account-list-account-holder";
import { Schemas$LinkedAccountListResponse } from "@sideko-inc/stripe/types/linked-account-list-response";
import { Schemas$LinkedAccountRefreshBody } from "@sideko-inc/stripe/types/linked-account-refresh-body";
import * as z from "zod";

export class LinkedAccountClient extends CoreResourceClient {
  private _ownersLazy?: OwnersClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.owners;
    }
  }
  get owners(): OwnersClient {
    return (
      this._ownersLazy ??
      (this._ownersLazy = new (require("./owners").OwnersClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * List Accounts
   *
   * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
   *
   * GET /v1/linked_accounts
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.LinkedAccountListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/linked_accounts",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "account_holder",
          value: Schemas$LinkedAccountListAccountHolder.out
            .optional()
            .parse(request.accountHolder),
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
          name: "session",
          value: z.string().optional().parse(request.session),
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
      responseSchema: z.lazy(() => Schemas$LinkedAccountListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an Account
   *
   * <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
   *
   * GET /v1/linked_accounts/{account}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/linked_accounts/${request.account}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Disconnect an Account
   *
   * <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
   *
   * POST /v1/linked_accounts/{account}/disconnect
   */
  disconnect(
    request: requests.DisconnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/linked_accounts/${request.account}/disconnect`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$LinkedAccountDisconnectBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Refresh Account data
   *
   * <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
   *
   * POST /v1/linked_accounts/{account}/refresh
   */
  refresh(
    request: requests.RefreshRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/linked_accounts/${request.account}/refresh`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$LinkedAccountRefreshBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", features: "deepObject" },
        explode: { expand: true, features: true },
      },
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
}
