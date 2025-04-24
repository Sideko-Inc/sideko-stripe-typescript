import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { RefundClient } from "@sideko-inc/stripe/resources/application-fee/refund";
import * as requests from "@sideko-inc/stripe/resources/application-fee/request-types";
import { Schemas$ApplicationFee } from "@sideko-inc/stripe/types/application-fee";
import { Schemas$ApplicationFeeListCreatedObj0 } from "@sideko-inc/stripe/types/application-fee-list-created-obj0";
import { Schemas$ApplicationFeeListResponse } from "@sideko-inc/stripe/types/application-fee-list-response";
import * as z from "zod";

export class ApplicationFeeClient extends CoreResourceClient {
  private _refundLazy?: RefundClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.refund;
    }
  }
  get refund(): RefundClient {
    return (
      this._refundLazy ??
      (this._refundLazy = new (require("./refund").RefundClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * List all application fees
   *
   * <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
   *
   * GET /v1/application_fees
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFeeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/application_fees",
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
              Schemas$ApplicationFeeListCreatedObj0.out,
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
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ApplicationFeeListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve an application fee
   *
   * <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
   *
   * GET /v1/application_fees/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFee> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/application_fees/${request.id}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$ApplicationFee.in),
      opts,
    });
  }
}
