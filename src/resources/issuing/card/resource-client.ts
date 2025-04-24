import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/card/request-types";
import { Schemas$IssuingCard } from "@sideko-inc/stripe/types/issuing-card";
import { Schemas$IssuingCardCreateBody } from "@sideko-inc/stripe/types/issuing-card-create-body";
import { Schemas$IssuingCardListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-card-list-created-obj0";
import { Schemas$IssuingCardListResponse } from "@sideko-inc/stripe/types/issuing-card-list-response";
import { Schemas$IssuingCardUpdateBody } from "@sideko-inc/stripe/types/issuing-card-update-body";
import * as z from "zod";

export class CardClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all cards
   *
   * <p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/cards
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCardListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/cards",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "cardholder",
          value: z.string().optional().parse(request.cardholder),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$IssuingCardListCreatedObj0.out, z.number().int()])
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
          name: "exp_month",
          value: z.number().int().optional().parse(request.expMonth),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "exp_year",
          value: z.number().int().optional().parse(request.expYear),
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
          name: "last4",
          value: z.string().optional().parse(request.last4),
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
          name: "personalization_design",
          value: z.string().optional().parse(request.personalizationDesign),
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
            .enum(["active", "canceled", "inactive"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "type",
          value: z.enum(["physical", "virtual"]).optional().parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingCardListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a card
   *
   * <p>Retrieves an Issuing <code>Card</code> object.</p>
   *
   * GET /v1/issuing/cards/{card}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/cards/${request.card}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Create a card
   *
   * <p>Creates an Issuing <code>Card</code> object.</p>
   *
   * POST /v1/issuing/cards
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/issuing/cards",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$IssuingCardCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          cardholder: "form",
          currency: "form",
          expand: "deepObject",
          financial_account: "form",
          metadata: "deepObject",
          personalization_design: "form",
          pin: "deepObject",
          replacement_for: "form",
          replacement_reason: "form",
          second_line: "deepObject",
          shipping: "deepObject",
          spending_controls: "deepObject",
          status: "form",
          type: "form",
        },
        explode: {
          cardholder: true,
          currency: true,
          expand: true,
          financial_account: true,
          metadata: true,
          personalization_design: true,
          pin: true,
          replacement_for: true,
          replacement_reason: true,
          second_line: true,
          shipping: true,
          spending_controls: true,
          status: true,
          type: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
  /**
   * Update a card
   *
   * <p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/issuing/cards/{card}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingCard> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/cards/${request.card}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingCardUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          cancellation_reason: "form",
          expand: "deepObject",
          metadata: "deepObject",
          personalization_design: "form",
          pin: "deepObject",
          shipping: "deepObject",
          spending_controls: "deepObject",
          status: "form",
        },
        explode: {
          cancellation_reason: true,
          expand: true,
          metadata: true,
          personalization_design: true,
          pin: true,
          shipping: true,
          spending_controls: true,
          status: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingCard.in),
      opts,
    });
  }
}
