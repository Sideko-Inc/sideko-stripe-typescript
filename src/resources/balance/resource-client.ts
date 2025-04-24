import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { HistoryClient } from "@sideko-inc/stripe/resources/balance/history";
import * as requests from "@sideko-inc/stripe/resources/balance/request-types";
import { Schemas$Balance } from "@sideko-inc/stripe/types/balance";
import * as z from "zod";

export class BalanceClient extends CoreResourceClient {
  private _historyLazy?: HistoryClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.history;
    }
  }
  get history(): HistoryClient {
    return (
      this._historyLazy ??
      (this._historyLazy = new (require("./history").HistoryClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * Retrieve balance
   *
   * <p>Retrieves the current account balance, based on the authentication that was used to make the request.
   *  For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
   *
   * GET /v1/balance
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Balance> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/balance",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$Balance.in,
      opts,
    });
  }
}
