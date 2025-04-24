import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing-portal/configuration/request-types";
import { Schemas$BillingPortalConfiguration } from "@sideko-inc/stripe/types/billing-portal-configuration";
import { Schemas$BillingPortalConfigurationCreateBody } from "@sideko-inc/stripe/types/billing-portal-configuration-create-body";
import { Schemas$BillingPortalConfigurationListResponse } from "@sideko-inc/stripe/types/billing-portal-configuration-list-response";
import { Schemas$BillingPortalConfigurationUpdateBody } from "@sideko-inc/stripe/types/billing-portal-configuration-update-body";
import * as z from "zod";

export class ConfigurationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List portal configurations
   *
   * <p>Returns a list of configurations that describe the functionality of the customer portal.</p>
   *
   * GET /v1/billing_portal/configurations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.BillingPortalConfigurationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing_portal/configurations",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
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
          name: "is_default",
          value: z.boolean().optional().parse(request.isDefault),
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
      responseSchema: Schemas$BillingPortalConfigurationListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a portal configuration
   *
   * <p>Retrieves a configuration that describes the functionality of the customer portal.</p>
   *
   * GET /v1/billing_portal/configurations/{configuration}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingPortalConfiguration> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/billing_portal/configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$BillingPortalConfiguration.in,
      opts,
    });
  }
  /**
   * Create a portal configuration
   *
   * <p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>
   *
   * POST /v1/billing_portal/configurations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingPortalConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/billing_portal/configurations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$BillingPortalConfigurationCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          business_profile: "deepObject",
          default_return_url: "deepObject",
          expand: "deepObject",
          features: "deepObject",
          login_page: "deepObject",
          metadata: "deepObject",
        },
        explode: {
          business_profile: true,
          default_return_url: true,
          expand: true,
          features: true,
          login_page: true,
          metadata: true,
        },
      },
      responseSchema: Schemas$BillingPortalConfiguration.in,
      opts,
    });
  }
  /**
   * Update a portal configuration
   *
   * <p>Updates a configuration that describes the functionality of the customer portal.</p>
   *
   * POST /v1/billing_portal/configurations/{configuration}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingPortalConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/billing_portal/configurations/${request.configuration}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$BillingPortalConfigurationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          business_profile: "deepObject",
          default_return_url: "deepObject",
          expand: "deepObject",
          features: "deepObject",
          login_page: "deepObject",
          metadata: "deepObject",
        },
        explode: {
          active: true,
          business_profile: true,
          default_return_url: true,
          expand: true,
          features: true,
          login_page: true,
          metadata: true,
        },
      },
      responseSchema: Schemas$BillingPortalConfiguration.in,
      opts,
    });
  }
}
