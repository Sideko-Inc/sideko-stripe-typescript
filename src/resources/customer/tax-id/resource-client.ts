import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/tax-id/request-types";
import { Schemas$CustomerTaxIdCreateBody } from "@sideko-inc/stripe/types/customer-tax-id-create-body";
import { Schemas$CustomerTaxIdListResponse } from "@sideko-inc/stripe/types/customer-tax-id-list-response";
import { Schemas$DeletedTaxId } from "@sideko-inc/stripe/types/deleted-tax-id";
import { Schemas$TaxId } from "@sideko-inc/stripe/types/tax-id";
import * as z from "zod";

export class TaxIdClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a Customer tax ID
   *
   * <p>Deletes an existing <code>tax_id</code> object.</p>
   *
   * DELETE /v1/customers/{customer}/tax_ids/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTaxId> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/tax_ids/${request.id}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTaxId.in,
      opts,
    });
  }
  /**
   * List all Customer tax IDs
   *
   * <p>Returns a list of tax IDs for a customer.</p>
   *
   * GET /v1/customers/{customer}/tax_ids
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerTaxIdListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/tax_ids`,
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
      responseSchema: z.lazy(() => Schemas$CustomerTaxIdListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a Customer tax ID
   *
   * <p>Retrieves the <code>tax_id</code> object with the given identifier.</p>
   *
   * GET /v1/customers/{customer}/tax_ids/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxId> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/tax_ids/${request.id}`,
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
   * Create a Customer tax ID
   *
   * <p>Creates a new <code>tax_id</code> object for a customer.</p>
   *
   * POST /v1/customers/{customer}/tax_ids
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxId> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/tax_ids`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerTaxIdCreateBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", type: "form", value: "form" },
        explode: { expand: true, type: true, value: true },
      },
      responseSchema: z.lazy(() => Schemas$TaxId.in),
      opts,
    });
  }
}
