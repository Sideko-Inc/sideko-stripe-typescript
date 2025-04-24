import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/subscriptions/discount/request-types";
import { Schemas$DeletedDiscount } from "@sideko-inc/stripe/types/deleted-discount";
import * as z from "zod";

export class DiscountClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a subscription discount
   *
   * <p>Removes the currently applied discount on a subscription.</p>
   *
   * DELETE /v1/subscriptions/{subscription_exposed_id}/discount
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedDiscount> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/subscriptions/${request.subscriptionExposedId}/discount`,
      auth: ["bearerAuth"],
      responseSchema: z.lazy(() => Schemas$DeletedDiscount.in),
      opts,
    });
  }
}
