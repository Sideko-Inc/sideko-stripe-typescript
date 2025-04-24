import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/registration/request-types";
import { Schemas$TaxRegistration } from "@sideko-inc/stripe/types/tax-registration";
import { Schemas$TaxRegistrationCreateBody } from "@sideko-inc/stripe/types/tax-registration-create-body";
import { Schemas$TaxRegistrationListResponse } from "@sideko-inc/stripe/types/tax-registration-list-response";
import { Schemas$TaxRegistrationUpdateBody } from "@sideko-inc/stripe/types/tax-registration-update-body";
import * as z from "zod";

export class RegistrationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List registrations
   *
   * <p>Returns a list of Tax <code>Registration</code> objects.</p>
   *
   * GET /v1/tax/registrations
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRegistrationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/tax/registrations",
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
            .enum(["active", "all", "expired", "scheduled"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxRegistrationListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a registration
   *
   * <p>Returns a Tax <code>Registration</code> object.</p>
   *
   * GET /v1/tax/registrations/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRegistration> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/registrations/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxRegistration.in,
      opts,
    });
  }
  /**
   * Create a registration
   *
   * <p>Creates a new Tax <code>Registration</code> object.</p>
   *
   * POST /v1/tax/registrations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRegistration> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/registrations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxRegistrationCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          active_from: "deepObject",
          country: "form",
          country_options: "deepObject",
          expand: "deepObject",
          expires_at: "form",
        },
        explode: {
          active_from: true,
          country: true,
          country_options: true,
          expand: true,
          expires_at: true,
        },
      },
      responseSchema: Schemas$TaxRegistration.in,
      opts,
    });
  }
  /**
   * Update a registration
   *
   * <p>Updates an existing Tax <code>Registration</code> object.</p>
   *
   * <p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>
   *
   * POST /v1/tax/registrations/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRegistration> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/tax/registrations/${request.id}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TaxRegistrationUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active_from: "deepObject",
          expand: "deepObject",
          expires_at: "deepObject",
        },
        explode: { active_from: true, expand: true, expires_at: true },
      },
      responseSchema: Schemas$TaxRegistration.in,
      opts,
    });
  }
}
