import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/billing/credit-balance-summary/request-types";
import { Schemas$BillingCreditBalanceSummary } from "@sideko-inc/stripe/types/billing-credit-balance-summary";
import { Schemas$BillingCreditBalanceSummaryGetFilter } from "@sideko-inc/stripe/types/billing-credit-balance-summary-get-filter";
import * as z from "zod";

export class CreditBalanceSummaryClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve the credit balance summary for a customer
   *
   * <p>Retrieves the credit balance summary for a customer.</p>
   *
   * GET /v1/billing/credit_balance_summary
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BillingCreditBalanceSummary> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/billing/credit_balance_summary",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "customer",
          value: z.string().parse(request.customer),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "filter",
          value: Schemas$BillingCreditBalanceSummaryGetFilter.out.parse(
            request.filter,
          ),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: z.lazy(() => Schemas$BillingCreditBalanceSummary.in),
      opts,
    });
  }
}
