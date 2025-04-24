import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/personalization-design/request-types";
import { Schemas$IssuingPersonalizationDesign } from "@sideko-inc/stripe/types/issuing-personalization-design";
import { Schemas$IssuingPersonalizationDesignCreateBody } from "@sideko-inc/stripe/types/issuing-personalization-design-create-body";
import { Schemas$IssuingPersonalizationDesignListPreferences } from "@sideko-inc/stripe/types/issuing-personalization-design-list-preferences";
import { Schemas$IssuingPersonalizationDesignListResponse } from "@sideko-inc/stripe/types/issuing-personalization-design-list-response";
import { Schemas$IssuingPersonalizationDesignUpdateBody } from "@sideko-inc/stripe/types/issuing-personalization-design-update-body";
import * as z from "zod";

export class PersonalizationDesignClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all personalization designs
   *
   * <p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/personalization_designs
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesignListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/personalization_designs",
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
          name: "lookup_keys",
          value: z.array(z.string()).optional().parse(request.lookupKeys),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "preferences",
          value: Schemas$IssuingPersonalizationDesignListPreferences.out
            .optional()
            .parse(request.preferences),
          style: "deepObject",
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
            .enum(["active", "inactive", "rejected", "review"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(
        () => Schemas$IssuingPersonalizationDesignListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a personalization design
   *
   * <p>Retrieves a personalization design object.</p>
   *
   * GET /v1/issuing/personalization_designs/{personalization_design}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/personalization_designs/${request.personalizationDesign}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
  /**
   * Create a personalization design
   *
   * <p>Creates a personalization design object.</p>
   *
   * POST /v1/issuing/personalization_designs
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/issuing/personalization_designs",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$IssuingPersonalizationDesignCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          card_logo: "form",
          carrier_text: "deepObject",
          expand: "deepObject",
          lookup_key: "form",
          metadata: "deepObject",
          name: "form",
          physical_bundle: "form",
          preferences: "deepObject",
          transfer_lookup_key: "form",
        },
        explode: {
          card_logo: true,
          carrier_text: true,
          expand: true,
          lookup_key: true,
          metadata: true,
          name: true,
          physical_bundle: true,
          preferences: true,
          transfer_lookup_key: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
  /**
   * Update a personalization design
   *
   * <p>Updates a card personalization object.</p>
   *
   * POST /v1/issuing/personalization_designs/{personalization_design}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/personalization_designs/${request.personalizationDesign}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IssuingPersonalizationDesignUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          card_logo: "deepObject",
          carrier_text: "deepObject",
          expand: "deepObject",
          lookup_key: "deepObject",
          metadata: "deepObject",
          name: "deepObject",
          physical_bundle: "form",
          preferences: "deepObject",
          transfer_lookup_key: "form",
        },
        explode: {
          card_logo: true,
          carrier_text: true,
          expand: true,
          lookup_key: true,
          metadata: true,
          name: true,
          physical_bundle: true,
          preferences: true,
          transfer_lookup_key: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
}
