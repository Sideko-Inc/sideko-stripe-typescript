import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/source/request-types";
import { Schemas$Account } from "@sideko-inc/stripe/types/account";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$CustomerSourceCreateBody } from "@sideko-inc/stripe/types/customer-source-create-body";
import { Schemas$CustomerSourceDeleteBody } from "@sideko-inc/stripe/types/customer-source-delete-body";
import { Schemas$CustomerSourceListResponse } from "@sideko-inc/stripe/types/customer-source-list-response";
import { Schemas$CustomerSourceUpdateBody } from "@sideko-inc/stripe/types/customer-source-update-body";
import { Schemas$CustomerSourceVerifyBody } from "@sideko-inc/stripe/types/customer-source-verify-body";
import { Schemas$DeletedBankAccount } from "@sideko-inc/stripe/types/deleted-bank-account";
import { Schemas$DeletedCard } from "@sideko-inc/stripe/types/deleted-card";
import { Schemas$Source } from "@sideko-inc/stripe/types/source";
import * as z from "zod";

export class SourceClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * DELETE /v1/customers/{customer}/sources/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | (types.Account | types.BankAccount | types.Card | types.Source)
    | (types.DeletedBankAccount | types.DeletedCard)
  > {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSourceDeleteBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.union([
        z.union([
          z.lazy(() => Schemas$Account.in),
          z.lazy(() => Schemas$BankAccount.in),
          z.lazy(() => Schemas$Card.in),
          Schemas$Source.in,
        ]),
        z.union([Schemas$DeletedBankAccount.in, Schemas$DeletedCard.in]),
      ]),
      opts,
    });
  }
  /**
   * <p>List sources for a specified customer.</p>
   *
   * GET /v1/customers/{customer}/sources
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSourceListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/sources`,
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
          value: z.string().optional().parse(request.object),
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
      responseSchema: z.lazy(() => Schemas$CustomerSourceListResponse.in),
      opts,
    });
  }
  /**
   * <p>Retrieve a specified source for a given customer.</p>
   *
   * GET /v1/customers/{customer}/sources/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account | types.BankAccount | types.Card | types.Source> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
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
        z.lazy(() => Schemas$Account.in),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * Create a card
   *
   * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
   *
   * <p>If the card’s owner has no default card, then the new card will become the default.
   * However, if the owner already has a default, then it will not change.
   * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
   *
   * POST /v1/customers/{customer}/sources
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account | types.BankAccount | types.Card | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSourceCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          alipay_account: "form",
          bank_account: "deepObject",
          card: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          source: "form",
        },
        explode: {
          alipay_account: true,
          bank_account: true,
          card: true,
          expand: true,
          metadata: true,
          source: true,
        },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$Account.in),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * <p>Update a specified source for a given customer.</p>
   *
   * POST /v1/customers/{customer}/sources/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Card | types.BankAccount | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSourceUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          account_holder_name: "form",
          account_holder_type: "form",
          address_city: "form",
          address_country: "form",
          address_line1: "form",
          address_line2: "form",
          address_state: "form",
          address_zip: "form",
          exp_month: "form",
          exp_year: "form",
          expand: "deepObject",
          metadata: "deepObject",
          name: "form",
          owner: "deepObject",
        },
        explode: {
          account_holder_name: true,
          account_holder_type: true,
          address_city: true,
          address_country: true,
          address_line1: true,
          address_line2: true,
          address_state: true,
          address_zip: true,
          exp_month: true,
          exp_year: true,
          expand: true,
          metadata: true,
          name: true,
          owner: true,
        },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$Card.in),
        z.lazy(() => Schemas$BankAccount.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * Verify a bank account
   *
   * <p>Verify a specified bank account for a given customer.</p>
   *
   * POST /v1/customers/{customer}/sources/{id}/verify
   */
  verify(
    request: requests.VerifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources/${request.id}/verify`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerSourceVerifyBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { amounts: "deepObject", expand: "deepObject" },
        explode: { amounts: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$BankAccount.in),
      opts,
    });
  }
}
