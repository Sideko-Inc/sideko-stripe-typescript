import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/physical-bundle/request-types";
import { Schemas$IssuingPhysicalBundle } from "@sideko-inc/stripe/types/issuing-physical-bundle";
import { Schemas$IssuingPhysicalBundleListResponse } from "@sideko-inc/stripe/types/issuing-physical-bundle-list-response";
import * as z from "zod";

export class PhysicalBundleClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all physical bundles
   *
   * <p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/physical_bundles
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPhysicalBundleListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/physical_bundles",
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
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["active", "inactive", "review"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "type",
          value: z.enum(["custom", "standard"]).optional().parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IssuingPhysicalBundleListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a physical bundle
   *
   * <p>Retrieves a physical bundle object.</p>
   *
   * GET /v1/issuing/physical_bundles/{physical_bundle}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPhysicalBundle> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/physical_bundles/${request.physicalBundle}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IssuingPhysicalBundle.in,
      opts,
    });
  }
}
