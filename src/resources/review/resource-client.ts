import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/review/request-types";
import { Schemas$Review } from "@sideko-inc/stripe/types/review";
import { Schemas$ReviewApproveBody } from "@sideko-inc/stripe/types/review-approve-body";
import { Schemas$ReviewListCreatedObj0 } from "@sideko-inc/stripe/types/review-list-created-obj0";
import { Schemas$ReviewListResponse } from "@sideko-inc/stripe/types/review-list-response";
import * as z from "zod";

export class ReviewClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all open reviews
   *
   * <p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/reviews
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ReviewListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/reviews",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$ReviewListCreatedObj0.out, z.number().int()])
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
      responseSchema: z.lazy(() => Schemas$ReviewListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve a review
   *
   * <p>Retrieves a <code>Review</code> object.</p>
   *
   * GET /v1/reviews/{review}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Review> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/reviews/${request.review}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Review.in),
      opts,
    });
  }
  /**
   * Approve a review
   *
   * <p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>
   *
   * POST /v1/reviews/{review}/approve
   */
  approve(
    request: requests.ApproveRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Review> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/reviews/${request.review}/approve`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ReviewApproveBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Review.in),
      opts,
    });
  }
}
