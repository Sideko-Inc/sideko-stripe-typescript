import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/climate/suppliers/request-types";
import { Schemas$ClimateSupplier } from "@sideko-inc/stripe/types/climate-supplier";
import * as z from "zod";

export class SuppliersClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a supplier
   *
   * <p>Retrieves a Climate supplier object.</p>
   *
   * GET /v1/climate/suppliers/{supplier}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ClimateSupplier> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/climate/suppliers/${request.supplier}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ClimateSupplier.in,
      opts,
    });
  }
}
