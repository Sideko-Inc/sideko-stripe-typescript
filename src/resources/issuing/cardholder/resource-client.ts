import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/cardholder/request-types";
import { Schemas$IssuingCardholder } from "@sideko-inc/stripe/types/issuing-cardholder";
import { Schemas$IssuingCardholderCreateBody } from "@sideko-inc/stripe/types/issuing-cardholder-create-body";
import { Schemas$IssuingCardholderListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-cardholder-list-created-obj0";
import { Schemas$IssuingCardholderListResponse } from "@sideko-inc/stripe/types/issuing-cardholder-list-response";
import { Schemas$IssuingCardholderUpdateBody } from "@sideko-inc/stripe/types/issuing-cardholder-update-body";
import * as z from "zod";

export class CardholderClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all cardholders
   *
   * <p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/cardholders
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCardholderListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/cardholders",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IssuingCardholderListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "email",
          value: z.string().optional().parse(request.email),
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
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "phone_number",
          value: z.string().optional().parse(request.phoneNumber),
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
            .enum(["active", "blocked", "inactive"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "type",
          value: z
            .enum(["company", "individual"])
            .optional()
            .parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingCardholderListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a cardholder
   *
   * <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
   *
   * GET /v1/issuing/cardholders/{cardholder}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCardholder> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/cardholders/${request.cardholder}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingCardholder.in),
      opts,
    });
  }
  /**
   * Create a cardholder
   *
   * <p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>
   *
   * POST /v1/issuing/cardholders
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCardholder> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/issuing/cardholders",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$IssuingCardholderCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          billing: "deepObject",
          company: "deepObject",
          email: "form",
          expand: "deepObject",
          individual: "deepObject",
          metadata: "deepObject",
          name: "form",
          phone_number: "form",
          preferred_locales: "deepObject",
          spending_controls: "deepObject",
          status: "form",
          type: "form",
        },
        explode: {
          billing: true,
          company: true,
          email: true,
          expand: true,
          individual: true,
          metadata: true,
          name: true,
          phone_number: true,
          preferred_locales: true,
          spending_controls: true,
          status: true,
          type: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCardholder.in),
      opts,
    });
  }
  /**
   * Update a cardholder
   *
   * <p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/issuing/cardholders/{cardholder}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCardholder> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/cardholders/${request.cardholder}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingCardholderUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          billing: "deepObject",
          company: "deepObject",
          email: "form",
          expand: "deepObject",
          individual: "deepObject",
          metadata: "deepObject",
          phone_number: "form",
          preferred_locales: "deepObject",
          spending_controls: "deepObject",
          status: "form",
        },
        explode: {
          billing: true,
          company: true,
          email: true,
          expand: true,
          individual: true,
          metadata: true,
          phone_number: true,
          preferred_locales: true,
          spending_controls: true,
          status: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCardholder.in),
      opts,
    });
  }
}
