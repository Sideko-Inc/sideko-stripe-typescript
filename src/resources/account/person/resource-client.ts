import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account/person/request-types";
import { Schemas$AccountPersonCreateBody } from "@sideko-inc/stripe/types/account-person-create-body";
import { Schemas$AccountPersonListRelationship } from "@sideko-inc/stripe/types/account-person-list-relationship";
import { Schemas$AccountPersonListResponse } from "@sideko-inc/stripe/types/account-person-list-response";
import { Schemas$AccountPersonUpdateBody } from "@sideko-inc/stripe/types/account-person-update-body";
import { Schemas$DeletedPerson } from "@sideko-inc/stripe/types/deleted-person";
import { Schemas$Person } from "@sideko-inc/stripe/types/person";
import * as z from "zod";

export class PersonClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a person
   *
   * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
   *
   * DELETE /v1/accounts/{account}/persons/{person}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedPerson> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/accounts/${request.account}/persons/${request.person}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedPerson.in,
      opts,
    });
  }
  /**
   * List all persons
   *
   * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
   *
   * GET /v1/accounts/{account}/persons
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountPersonListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/persons`,
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
          name: "relationship",
          value: Schemas$AccountPersonListRelationship.out
            .optional()
            .parse(request.relationship),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$AccountPersonListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a person
   *
   * <p>Retrieves an existing person.</p>
   *
   * GET /v1/accounts/{account}/persons/{person}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/persons/${request.person}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
  /**
   * Create a person
   *
   * <p>Creates a new person.</p>
   *
   * POST /v1/accounts/{account}/persons
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/persons`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$AccountPersonCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          additional_tos_acceptances: "deepObject",
          address: "deepObject",
          address_kana: "deepObject",
          address_kanji: "deepObject",
          dob: "deepObject",
          documents: "deepObject",
          email: "form",
          expand: "deepObject",
          first_name: "form",
          first_name_kana: "form",
          first_name_kanji: "form",
          full_name_aliases: "deepObject",
          gender: "form",
          id_number: "form",
          id_number_secondary: "form",
          last_name: "form",
          last_name_kana: "form",
          last_name_kanji: "form",
          maiden_name: "form",
          metadata: "deepObject",
          nationality: "form",
          person_token: "form",
          phone: "form",
          political_exposure: "form",
          registered_address: "deepObject",
          relationship: "deepObject",
          ssn_last_4: "form",
          verification: "deepObject",
        },
        explode: {
          additional_tos_acceptances: true,
          address: true,
          address_kana: true,
          address_kanji: true,
          dob: true,
          documents: true,
          email: true,
          expand: true,
          first_name: true,
          first_name_kana: true,
          first_name_kanji: true,
          full_name_aliases: true,
          gender: true,
          id_number: true,
          id_number_secondary: true,
          last_name: true,
          last_name_kana: true,
          last_name_kanji: true,
          maiden_name: true,
          metadata: true,
          nationality: true,
          person_token: true,
          phone: true,
          political_exposure: true,
          registered_address: true,
          relationship: true,
          ssn_last_4: true,
          verification: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
  /**
   * Update a person
   *
   * <p>Updates an existing person.</p>
   *
   * POST /v1/accounts/{account}/persons/{person}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/persons/${request.person}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$AccountPersonUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          additional_tos_acceptances: "deepObject",
          address: "deepObject",
          address_kana: "deepObject",
          address_kanji: "deepObject",
          dob: "deepObject",
          documents: "deepObject",
          email: "form",
          expand: "deepObject",
          first_name: "form",
          first_name_kana: "form",
          first_name_kanji: "form",
          full_name_aliases: "deepObject",
          gender: "form",
          id_number: "form",
          id_number_secondary: "form",
          last_name: "form",
          last_name_kana: "form",
          last_name_kanji: "form",
          maiden_name: "form",
          metadata: "deepObject",
          nationality: "form",
          person_token: "form",
          phone: "form",
          political_exposure: "form",
          registered_address: "deepObject",
          relationship: "deepObject",
          ssn_last_4: "form",
          verification: "deepObject",
        },
        explode: {
          additional_tos_acceptances: true,
          address: true,
          address_kana: true,
          address_kanji: true,
          dob: true,
          documents: true,
          email: true,
          expand: true,
          first_name: true,
          first_name_kana: true,
          first_name_kanji: true,
          full_name_aliases: true,
          gender: true,
          id_number: true,
          id_number_secondary: true,
          last_name: true,
          last_name_kana: true,
          last_name_kanji: true,
          maiden_name: true,
          metadata: true,
          nationality: true,
          person_token: true,
          phone: true,
          political_exposure: true,
          registered_address: true,
          relationship: true,
          ssn_last_4: true,
          verification: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
}
