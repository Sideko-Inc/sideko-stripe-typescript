import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account/external-account/request-types";
import { Schemas$AccountExternalAccountCreateBody } from "@sideko-inc/stripe/types/account-external-account-create-body";
import { Schemas$AccountExternalAccountListResponse } from "@sideko-inc/stripe/types/account-external-account-list-response";
import { Schemas$AccountExternalAccountUpdateBody } from "@sideko-inc/stripe/types/account-external-account-update-body";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$DeletedBankAccount } from "@sideko-inc/stripe/types/deleted-bank-account";
import { Schemas$DeletedCard } from "@sideko-inc/stripe/types/deleted-card";
import * as z from "zod";

export class ExternalAccountClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete an external account
   *
   * <p>Delete a specified external account for a given account.</p>
   *
   * DELETE /v1/accounts/{account}/external_accounts/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedBankAccount | types.DeletedCard> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/accounts/${request.account}/external_accounts/${request.id}`,
      auth: ["bearerAuth"],
      responseSchema: z.union([
        Schemas$DeletedBankAccount.in,
        Schemas$DeletedCard.in,
      ]),
      opts,
    });
  }
  /**
   * List all external accounts
   *
   * <p>List external accounts for an account.</p>
   *
   * GET /v1/accounts/{account}/external_accounts
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountExternalAccountListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/external_accounts`,
      auth: ["bearerAuth"],
      query: [
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
          name: "object",
          value: z
            .enum(["bank_account", "card"])
            .optional()
            .parse(request.object),
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
      responseSchema: z.lazy(
        () => Schemas$AccountExternalAccountListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve an external account
   *
   * <p>Retrieve a specified external account for a given account.</p>
   *
   * GET /v1/accounts/{account}/external_accounts/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/external_accounts/${request.id}`,
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
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
  /**
   * Create an external account
   *
   * <p>Create an external account for a given account.</p>
   *
   * POST /v1/accounts/{account}/external_accounts
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/external_accounts`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$AccountExternalAccountCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          bank_account: "deepObject",
          default_for_currency: "form",
          expand: "deepObject",
          external_account: "form",
          metadata: "deepObject",
        },
        explode: {
          bank_account: true,
          default_for_currency: true,
          expand: true,
          external_account: true,
          metadata: true,
        },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
  /**
   * <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
   * a connected account and optionally sets it as the default for its currency. Other bank account
   * details are not editable by design.</p>
   *
   * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
   *
   * <p>You can re-enable a disabled bank account by performing an update call without providing any
   * arguments or changes.</p>
   *
   * POST /v1/accounts/{account}/external_accounts/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/external_accounts/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$AccountExternalAccountUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          account_holder_name: "form",
          account_holder_type: "form",
          account_type: "form",
          address_city: "form",
          address_country: "form",
          address_line1: "form",
          address_line2: "form",
          address_state: "form",
          address_zip: "form",
          default_for_currency: "form",
          documents: "deepObject",
          exp_month: "form",
          exp_year: "form",
          expand: "deepObject",
          metadata: "deepObject",
          name: "form",
        },
        explode: {
          account_holder_name: true,
          account_holder_type: true,
          account_type: true,
          address_city: true,
          address_country: true,
          address_line1: true,
          address_line2: true,
          address_state: true,
          address_zip: true,
          default_for_currency: true,
          documents: true,
          exp_month: true,
          exp_year: true,
          expand: true,
          metadata: true,
          name: true,
        },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
}
