import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/radar/value-list/request-types";
import { Schemas$DeletedRadarValueList } from "@sideko-inc/stripe/types/deleted-radar-value-list";
import { Schemas$RadarValueList } from "@sideko-inc/stripe/types/radar-value-list";
import { Schemas$RadarValueListCreateBody } from "@sideko-inc/stripe/types/radar-value-list-create-body";
import { Schemas$RadarValueListListCreatedObj0 } from "@sideko-inc/stripe/types/radar-value-list-list-created-obj0";
import { Schemas$RadarValueListListResponse } from "@sideko-inc/stripe/types/radar-value-list-list-response";
import { Schemas$RadarValueListUpdateBody } from "@sideko-inc/stripe/types/radar-value-list-update-body";
import * as z from "zod";

export class ValueListClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a value list
   *
   * <p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>
   *
   * DELETE /v1/radar/value_lists/{value_list}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedRadarValueList> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/radar/value_lists/${request.valueList}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedRadarValueList.in,
      opts,
    });
  }
  /**
   * List all value lists
   *
   * <p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/radar/value_lists
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueListListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/radar/value_lists",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "alias",
          value: z.string().optional().parse(request.alias),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "contains",
          value: z.string().optional().parse(request.contains),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$RadarValueListListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
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
      responseSchema: Schemas$RadarValueListListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a value list
   *
   * <p>Retrieves a <code>ValueList</code> object.</p>
   *
   * GET /v1/radar/value_lists/{value_list}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueList> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/radar/value_lists/${request.valueList}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$RadarValueList.in,
      opts,
    });
  }
  /**
   * Create a value list
   *
   * <p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>
   *
   * POST /v1/radar/value_lists
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueList> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/radar/value_lists",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$RadarValueListCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          alias: "form",
          expand: "deepObject",
          item_type: "form",
          metadata: "deepObject",
          name: "form",
        },
        explode: {
          alias: true,
          expand: true,
          item_type: true,
          metadata: true,
          name: true,
        },
      },
      responseSchema: Schemas$RadarValueList.in,
      opts,
    });
  }
  /**
   * Update a value list
   *
   * <p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>
   *
   * POST /v1/radar/value_lists/{value_list}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueList> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/radar/value_lists/${request.valueList}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$RadarValueListUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          alias: "form",
          expand: "deepObject",
          metadata: "deepObject",
          name: "form",
        },
        explode: { alias: true, expand: true, metadata: true, name: true },
      },
      responseSchema: Schemas$RadarValueList.in,
      opts,
    });
  }
}
