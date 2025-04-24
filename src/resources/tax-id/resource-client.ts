import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax-id/request-types";
import { Schemas$DeletedTaxId } from "@sideko-inc/stripe/types/deleted-tax-id";
import { Schemas$TaxId } from "@sideko-inc/stripe/types/tax-id";
import { Schemas$TaxIdCreateBody } from "@sideko-inc/stripe/types/tax-id-create-body";
import { Schemas$TaxIdListOwner } from "@sideko-inc/stripe/types/tax-id-list-owner";
import { Schemas$TaxIdListResponse } from "@sideko-inc/stripe/types/tax-id-list-response";
import * as z from "zod";

export class TaxIdClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a tax ID
   *
   * <p>Deletes an existing account or customer <code>tax_id</code> object.</p>
   *
   * DELETE /v1/tax_ids/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTaxId> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/tax_ids/${request.id}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTaxId.in,
      opts,
    });
  }
  /**
   * List all tax IDs
   *
   * <p>Returns a list of tax IDs.</p>
   *
   * GET /v1/tax_ids
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TaxIdListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/tax_ids",
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
          name: "owner",
          value: Schemas$TaxIdListOwner.out.optional().parse(request.owner),
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
      responseSchema: z.lazy(() => Schemas$TaxIdListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a tax ID
   *
   * <p>Retrieves an account or customer <code>tax_id</code> object.</p>
   *
   * GET /v1/tax_ids/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxId> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax_ids/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$TaxId.in),
      opts,
    });
  }
  /**
   * Create a tax ID
   *
   * <p>Creates a new account or customer <code>tax_id</code> object.</p>
   *
   * POST /v1/tax_ids
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxId> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax_ids",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxIdCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          owner: "deepObject",
          type: "form",
          value: "form",
        },
        explode: { expand: true, owner: true, type: true, value: true },
      },
      responseSchema: z.lazy(() => Schemas$TaxId.in),
      opts,
    });
  }
}
