import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/terminal/location/request-types";
import { Schemas$DeletedTerminalLocation } from "@sideko-inc/stripe/types/deleted-terminal-location";
import { Schemas$TerminalLocation } from "@sideko-inc/stripe/types/terminal-location";
import { Schemas$TerminalLocationCreateBody } from "@sideko-inc/stripe/types/terminal-location-create-body";
import { Schemas$TerminalLocationListResponse } from "@sideko-inc/stripe/types/terminal-location-list-response";
import { Schemas$TerminalLocationUpdateBody } from "@sideko-inc/stripe/types/terminal-location-update-body";
import * as z from "zod";

export class LocationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a Location
   *
   * <p>Deletes a <code>Location</code> object.</p>
   *
   * DELETE /v1/terminal/locations/{location}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTerminalLocation> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/terminal/locations/${request.location}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTerminalLocation.in,
      opts,
    });
  }
  /**
   * List all Locations
   *
   * <p>Returns a list of <code>Location</code> objects.</p>
   *
   * GET /v1/terminal/locations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalLocationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/terminal/locations",
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
      responseSchema: Schemas$TerminalLocationListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a Location
   *
   * <p>Retrieves a <code>Location</code> object.</p>
   *
   * GET /v1/terminal/locations/{location}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalLocation | types.DeletedTerminalLocation> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/terminal/locations/${request.location}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.union([
        Schemas$TerminalLocation.in,
        Schemas$DeletedTerminalLocation.in,
      ]),
      opts,
    });
  }
  /**
   * Create a Location
   *
   * <p>Creates a new <code>Location</code> object.
   * For further details, including which address fields are required in each country, see the <a href="/docs/terminal/fleet/locations">Manage locations</a> guide.</p>
   *
   * POST /v1/terminal/locations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalLocation> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/terminal/locations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TerminalLocationCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          address: "deepObject",
          configuration_overrides: "form",
          display_name: "form",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: {
          address: true,
          configuration_overrides: true,
          display_name: true,
          expand: true,
          metadata: true,
        },
      },
      responseSchema: Schemas$TerminalLocation.in,
      opts,
    });
  }
  /**
   * Update a Location
   *
   * <p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/terminal/locations/{location}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalLocation | types.DeletedTerminalLocation> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/locations/${request.location}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalLocationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          address: "deepObject",
          configuration_overrides: "deepObject",
          display_name: "form",
          expand: "deepObject",
          metadata: "deepObject",
        },
        explode: {
          address: true,
          configuration_overrides: true,
          display_name: true,
          expand: true,
          metadata: true,
        },
      },
      responseSchema: z.union([
        Schemas$TerminalLocation.in,
        Schemas$DeletedTerminalLocation.in,
      ]),
      opts,
    });
  }
}
