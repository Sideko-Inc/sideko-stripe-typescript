import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/card/request-types";
import { Schemas$Account } from "@sideko-inc/stripe/types/account";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$CustomerCardCreateBody } from "@sideko-inc/stripe/types/customer-card-create-body";
import { Schemas$CustomerCardDeleteBody } from "@sideko-inc/stripe/types/customer-card-delete-body";
import { Schemas$CustomerCardListResponse } from "@sideko-inc/stripe/types/customer-card-list-response";
import { Schemas$CustomerCardUpdateBody } from "@sideko-inc/stripe/types/customer-card-update-body";
import { Schemas$DeletedBankAccount } from "@sideko-inc/stripe/types/deleted-bank-account";
import { Schemas$DeletedCard } from "@sideko-inc/stripe/types/deleted-card";
import { Schemas$Source } from "@sideko-inc/stripe/types/source";
import * as z from "zod";

export class CardClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * DELETE /v1/customers/{customer}/cards/{id}
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
      path: `/v1/customers/${request.customer}/cards/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerCardDeleteBody.out.parse(request.data)
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
   * List all cards
   *
   * <p>You can see a list of the cards belonging to a customer.
   * Note that the 10 most recent sources are always available on the <code>Customer</code> object.
   * If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>
   *
   * GET /v1/customers/{customer}/cards
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerCardListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/cards`,
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$CustomerCardListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a card
   *
   * <p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>
   *
   * GET /v1/customers/{customer}/cards/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Card> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/cards/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Card.in),
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
   * POST /v1/customers/{customer}/cards
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account | types.BankAccount | types.Card | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/cards`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerCardCreateBody.out.parse(request.data)
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
   * POST /v1/customers/{customer}/cards/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Card | types.BankAccount | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/cards/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerCardUpdateBody.out.parse(request.data)
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
}
