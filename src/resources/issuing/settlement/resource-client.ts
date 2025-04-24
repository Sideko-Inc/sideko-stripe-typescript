import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/settlement/request-types";
import { Schemas$IssuingSettlement } from "@sideko-inc/stripe/types/issuing-settlement";
import { Schemas$IssuingSettlementUpdateBody } from "@sideko-inc/stripe/types/issuing-settlement-update-body";
import * as z from "zod";

export class SettlementClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a settlement
   *
   * <p>Retrieves an Issuing <code>Settlement</code> object.</p>
   *
   * GET /v1/issuing/settlements/{settlement}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/settlements/${request.settlement}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
  /**
   * Update a settlement
   *
   * <p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/issuing/settlements/{settlement}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingSettlement> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/settlements/${request.settlement}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingSettlementUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", metadata: "deepObject" },
        explode: { expand: true, metadata: true },
      },
      responseSchema: Schemas$IssuingSettlement.in,
      opts,
    });
  }
}
