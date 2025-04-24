import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/subscription/discount/request-types";
import { Schemas$DeletedDiscount } from "@sideko-inc/stripe/types/deleted-discount";
import { Schemas$Discount } from "@sideko-inc/stripe/types/discount";
import * as z from "zod";

export class DiscountClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a customer discount
   *
   * <p>Removes the currently applied discount on a customer.</p>
   *
   * DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedDiscount> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}/discount`,
      auth: ["bearerAuth"],
      responseSchema: z.lazy(() => Schemas$DeletedDiscount.in),
      opts,
    });
  }
  /**
   *
   *
   * GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Discount> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}/discount`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Discount.in),
      opts,
    });
  }
}
