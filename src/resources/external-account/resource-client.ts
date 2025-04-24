import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/external-account/request-types";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$ExternalAccountCreateBody } from "@sideko-inc/stripe/types/external-account-create-body";
import * as z from "zod";

export class ExternalAccountClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
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
   * POST /v1/external_accounts/{id}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/external_accounts/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ExternalAccountCreateBody.out.parse(request.data)
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
