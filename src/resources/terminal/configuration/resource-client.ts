import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/terminal/configuration/request-types";
import { Schemas$DeletedTerminalConfiguration } from "@sideko-inc/stripe/types/deleted-terminal-configuration";
import { Schemas$TerminalConfiguration } from "@sideko-inc/stripe/types/terminal-configuration";
import { Schemas$TerminalConfigurationCreateBody } from "@sideko-inc/stripe/types/terminal-configuration-create-body";
import { Schemas$TerminalConfigurationListResponse } from "@sideko-inc/stripe/types/terminal-configuration-list-response";
import { Schemas$TerminalConfigurationUpdateBody } from "@sideko-inc/stripe/types/terminal-configuration-update-body";
import * as z from "zod";

export class ConfigurationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a Configuration
   *
   * <p>Deletes a <code>Configuration</code> object.</p>
   *
   * DELETE /v1/terminal/configurations/{configuration}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTerminalConfiguration> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/terminal/configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTerminalConfiguration.in,
      opts,
    });
  }
  /**
   * List all Configurations
   *
   * <p>Returns a list of <code>Configuration</code> objects.</p>
   *
   * GET /v1/terminal/configurations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalConfigurationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/terminal/configurations",
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
          name: "is_account_default",
          value: z.boolean().optional().parse(request.isAccountDefault),
          style: "form",
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
      responseSchema: z.lazy(
        () => Schemas$TerminalConfigurationListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a Configuration
   *
   * <p>Retrieves a <code>Configuration</code> object.</p>
   *
   * GET /v1/terminal/configurations/{configuration}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    types.TerminalConfiguration | types.DeletedTerminalConfiguration
  > {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/terminal/configurations/${request.configuration}`,
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
        z.lazy(() => Schemas$TerminalConfiguration.in),
        Schemas$DeletedTerminalConfiguration.in,
      ]),
      opts,
    });
  }
  /**
   * Create a Configuration
   *
   * <p>Creates a new <code>Configuration</code> object.</p>
   *
   * POST /v1/terminal/configurations
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TerminalConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/terminal/configurations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalConfigurationCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          bbpos_wisepos_e: "deepObject",
          expand: "deepObject",
          name: "form",
          offline: "deepObject",
          reboot_window: "deepObject",
          stripe_s700: "deepObject",
          tipping: "deepObject",
          verifone_p400: "deepObject",
          wifi: "deepObject",
        },
        explode: {
          bbpos_wisepos_e: true,
          expand: true,
          name: true,
          offline: true,
          reboot_window: true,
          stripe_s700: true,
          tipping: true,
          verifone_p400: true,
          wifi: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$TerminalConfiguration.in),
      opts,
    });
  }
  /**
   * Update a Configuration
   *
   * <p>Updates a new <code>Configuration</code> object.</p>
   *
   * POST /v1/terminal/configurations/{configuration}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    types.TerminalConfiguration | types.DeletedTerminalConfiguration
  > {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/terminal/configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TerminalConfigurationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          bbpos_wisepos_e: "deepObject",
          expand: "deepObject",
          name: "form",
          offline: "deepObject",
          reboot_window: "deepObject",
          stripe_s700: "deepObject",
          tipping: "deepObject",
          verifone_p400: "deepObject",
          wifi: "deepObject",
        },
        explode: {
          bbpos_wisepos_e: true,
          expand: true,
          name: true,
          offline: true,
          reboot_window: true,
          stripe_s700: true,
          tipping: true,
          verifone_p400: true,
          wifi: true,
        },
      },
      responseSchema: z.union([
        z.lazy(() => Schemas$TerminalConfiguration.in),
        Schemas$DeletedTerminalConfiguration.in,
      ]),
      opts,
    });
  }
}
