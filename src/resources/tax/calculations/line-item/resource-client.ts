import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/calculations/line-item/request-types";
import { Schemas$TaxCalculationsLineItemListResponse } from "@sideko-inc/stripe/types/tax-calculations-line-item-list-response";
import * as z from "zod";

export class LineItemClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a calculation's line items
   *
   * <p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>
   *
   * GET /v1/tax/calculations/{calculation}/line_items
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxCalculationsLineItemListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/calculations/${request.calculation}/line_items`,
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
      responseSchema: Schemas$TaxCalculationsLineItemListResponse.in,
      opts,
    });
  }
}
