import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/charge/dispute/request-types";
import { Schemas$ChargeDisputeCloseBody } from "@sideko-inc/stripe/types/charge-dispute-close-body";
import { Schemas$ChargeDisputeCreateBody } from "@sideko-inc/stripe/types/charge-dispute-create-body";
import { Schemas$Dispute } from "@sideko-inc/stripe/types/dispute";
import * as z from "zod";

export class DisputeClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * <p>Retrieve a dispute for a specified charge.</p>
   *
   * GET /v1/charges/{charge}/dispute
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/charges/${request.charge}/dispute`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
  /**
   *
   *
   * POST /v1/charges/{charge}/dispute
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/dispute`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeDisputeCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          evidence: "deepObject",
          expand: "deepObject",
          metadata: "deepObject",
          submit: "form",
        },
        explode: { evidence: true, expand: true, metadata: true, submit: true },
      },
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
  /**
   *
   *
   * POST /v1/charges/{charge}/dispute/close
   */
  close(
    request: requests.CloseRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Dispute> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/dispute/close`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$ChargeDisputeCloseBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$Dispute.in),
      opts,
    });
  }
}
