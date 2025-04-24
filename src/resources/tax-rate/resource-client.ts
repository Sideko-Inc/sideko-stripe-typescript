import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax-rate/request-types";
import { Schemas$TaxRate } from "@sideko-inc/stripe/types/tax-rate";
import { Schemas$TaxRateCreateBody } from "@sideko-inc/stripe/types/tax-rate-create-body";
import { Schemas$TaxRateListCreatedObj0 } from "@sideko-inc/stripe/types/tax-rate-list-created-obj0";
import { Schemas$TaxRateListResponse } from "@sideko-inc/stripe/types/tax-rate-list-response";
import { Schemas$TaxRateUpdateBody } from "@sideko-inc/stripe/types/tax-rate-update-body";
import * as z from "zod";

export class TaxRateClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all tax rates
   *
   * <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
   *
   * GET /v1/tax_rates
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRateListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/tax_rates",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$TaxRateListCreatedObj0.out, z.number().int()])
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
          name: "inclusive",
          value: z.boolean().optional().parse(request.inclusive),
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
      responseSchema: Schemas$TaxRateListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a tax rate
   *
   * <p>Retrieves a tax rate with the given ID</p>
   *
   * GET /v1/tax_rates/{tax_rate}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax_rates/${request.taxRate}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
  /**
   * Create a tax rate
   *
   * <p>Creates a new tax rate.</p>
   *
   * POST /v1/tax_rates
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax_rates",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxRateCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          active: "form",
          country: "form",
          description: "form",
          display_name: "form",
          expand: "deepObject",
          inclusive: "form",
          jurisdiction: "form",
          metadata: "deepObject",
          percentage: "form",
          state: "form",
          tax_type: "form",
        },
        explode: {
          active: true,
          country: true,
          description: true,
          display_name: true,
          expand: true,
          inclusive: true,
          jurisdiction: true,
          metadata: true,
          percentage: true,
          state: true,
          tax_type: true,
        },
      },
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
  /**
   * Update a tax rate
   *
   * <p>Updates an existing tax rate.</p>
   *
   * POST /v1/tax_rates/{tax_rate}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/tax_rates/${request.taxRate}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TaxRateUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          active: "form",
          country: "form",
          description: "form",
          display_name: "form",
          expand: "deepObject",
          jurisdiction: "form",
          metadata: "deepObject",
          state: "form",
          tax_type: "form",
        },
        explode: {
          active: true,
          country: true,
          description: true,
          display_name: true,
          expand: true,
          jurisdiction: true,
          metadata: true,
          state: true,
          tax_type: true,
        },
      },
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
}
