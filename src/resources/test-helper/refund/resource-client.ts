import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/refund/request-types";
import { Schemas$Refund } from "@sideko-inc/stripe/types/refund";
import { Schemas$TestHelperRefundExpireBody } from "@sideko-inc/stripe/types/test-helper-refund-expire-body";
import * as z from "zod";

export class RefundClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Expire a pending refund.
   *
   * <p>Expire a refund with a status of <code>requires_action</code>.</p>
   *
   * POST /v1/test_helpers/refunds/{refund}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Refund> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/refunds/${request.refund}/expire`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperRefundExpireBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Refund.in),
      opts,
    });
  }
}
