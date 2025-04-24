import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/cash-balance/request-types";
import { Schemas$CashBalance } from "@sideko-inc/stripe/types/cash-balance";
import { Schemas$CustomerCashBalanceModifyBody } from "@sideko-inc/stripe/types/customer-cash-balance-modify-body";
import * as z from "zod";

export class CashBalanceClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a cash balance
   *
   * <p>Retrieves a customer’s cash balance.</p>
   *
   * GET /v1/customers/{customer}/cash_balance
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CashBalance> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/cash_balance`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$CashBalance.in,
      opts,
    });
  }
  /**
   * Update a cash balance's settings
   *
   * <p>Changes the settings on a customer’s cash balance.</p>
   *
   * POST /v1/customers/{customer}/cash_balance
   */
  modify(
    request: requests.ModifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CashBalance> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/cash_balance`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$CustomerCashBalanceModifyBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject", settings: "deepObject" },
        explode: { expand: true, settings: true },
      },
      responseSchema: Schemas$CashBalance.in,
      opts,
    });
  }
}
