import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/radar/early-fraud-warning/request-types";
import { Schemas$RadarEarlyFraudWarning } from "@sideko-inc/stripe/types/radar-early-fraud-warning";
import { Schemas$RadarEarlyFraudWarningListCreatedObj0 } from "@sideko-inc/stripe/types/radar-early-fraud-warning-list-created-obj0";
import { Schemas$RadarEarlyFraudWarningListResponse } from "@sideko-inc/stripe/types/radar-early-fraud-warning-list-response";
import * as z from "zod";

export class EarlyFraudWarningClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List all early fraud warnings
   *
   * <p>Returns a list of early fraud warnings.</p>
   *
   * GET /v1/radar/early_fraud_warnings
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.RadarEarlyFraudWarningListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/radar/early_fraud_warnings",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "charge",
          value: z.string().optional().parse(request.charge),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$RadarEarlyFraudWarningListCreatedObj0.out,
              z.number().int(),
            ])
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
          name: "payment_intent",
          value: z.string().optional().parse(request.paymentIntent),
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
        () => Schemas$RadarEarlyFraudWarningListResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve an early fraud warning
   *
   * <p>Retrieves the details of an early fraud warning that has previously been created. </p>
   *
   * <p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>
   *
   * GET /v1/radar/early_fraud_warnings/{early_fraud_warning}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarEarlyFraudWarning> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/radar/early_fraud_warnings/${request.earlyFraudWarning}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$RadarEarlyFraudWarning.in),
      opts,
    });
  }
}
