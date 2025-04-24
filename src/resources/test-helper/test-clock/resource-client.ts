import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/test-clock/request-types";
import { Schemas$DeletedTestHelpersTestClock } from "@sideko-inc/stripe/types/deleted-test-helpers-test-clock";
import { Schemas$TestHelperTestClockAdvanceBody } from "@sideko-inc/stripe/types/test-helper-test-clock-advance-body";
import { Schemas$TestHelperTestClockCreateBody } from "@sideko-inc/stripe/types/test-helper-test-clock-create-body";
import { Schemas$TestHelperTestClockListResponse } from "@sideko-inc/stripe/types/test-helper-test-clock-list-response";
import { Schemas$TestHelpersTestClock } from "@sideko-inc/stripe/types/test-helpers-test-clock";
import * as z from "zod";

export class TestClockClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Delete a test clock
   *
   * <p>Deletes a test clock.</p>
   *
   * DELETE /v1/test_helpers/test_clocks/{test_clock}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedTestHelpersTestClock> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/test_helpers/test_clocks/${request.testClock}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedTestHelpersTestClock.in,
      opts,
    });
  }
  /**
   * List all test clocks
   *
   * <p>Returns a list of your test clocks.</p>
   *
   * GET /v1/test_helpers/test_clocks
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.TestHelperTestClockListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/test_helpers/test_clocks",
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
      responseSchema: Schemas$TestHelperTestClockListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a test clock
   *
   * <p>Retrieves a test clock.</p>
   *
   * GET /v1/test_helpers/test_clocks/{test_clock}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TestHelpersTestClock> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/test_helpers/test_clocks/${request.testClock}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TestHelpersTestClock.in,
      opts,
    });
  }
  /**
   * Create a test clock
   *
   * <p>Creates a new test clock that can be attached to new customers and quotes.</p>
   *
   * POST /v1/test_helpers/test_clocks
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TestHelpersTestClock> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/test_clocks",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTestClockCreateBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", frozen_time: "form", name: "form" },
        explode: { expand: true, frozen_time: true, name: true },
      },
      responseSchema: Schemas$TestHelpersTestClock.in,
      opts,
    });
  }
  /**
   * Advance a test clock
   *
   * <p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>
   *
   * POST /v1/test_helpers/test_clocks/{test_clock}/advance
   */
  advance(
    request: requests.AdvanceRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TestHelpersTestClock> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/test_clocks/${request.testClock}/advance`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperTestClockAdvanceBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", frozen_time: "form" },
        explode: { expand: true, frozen_time: true },
      },
      responseSchema: Schemas$TestHelpersTestClock.in,
      opts,
    });
  }
}
