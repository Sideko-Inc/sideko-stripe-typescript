import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/customer/request-types";
import { Schemas$CustomerCashBalanceTransaction } from "@sideko-inc/stripe/types/customer-cash-balance-transaction";
import { Schemas$TestHelperCustomerFundCashBalanceBody } from "@sideko-inc/stripe/types/test-helper-customer-fund-cash-balance-body";
import * as z from "zod";

export class CustomerClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Fund a test mode cash balance
   *
   * <p>Create an incoming testmode bank transfer</p>
   *
   * POST /v1/test_helpers/customers/{customer}/fund_cash_balance
   */
  fundCashBalance(
    request: requests.FundCashBalanceRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerCashBalanceTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/customers/${request.customer}/fund_cash_balance`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperCustomerFundCashBalanceBody.out.parse(request),
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          expand: "deepObject",
          reference: "form",
        },
        explode: {
          amount: true,
          currency: true,
          expand: true,
          reference: true,
        },
      },
      responseSchema: z.lazy(() => Schemas$CustomerCashBalanceTransaction.in),
      opts,
    });
  }
}
