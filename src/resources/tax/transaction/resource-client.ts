import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { LineItemsClient } from "@sideko-inc/stripe/resources/tax/transaction/line-items";
import * as requests from "@sideko-inc/stripe/resources/tax/transaction/request-types";
import { Schemas$TaxTransaction } from "@sideko-inc/stripe/types/tax-transaction";
import { Schemas$TaxTransactionCreateFromCalculationBody } from "@sideko-inc/stripe/types/tax-transaction-create-from-calculation-body";
import { Schemas$TaxTransactionCreateReversalBody } from "@sideko-inc/stripe/types/tax-transaction-create-reversal-body";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  private _lineItemsLazy?: LineItemsClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.lineItems;
    }
  }
  get lineItems(): LineItemsClient {
    return (
      this._lineItemsLazy ??
      (this._lineItemsLazy = new (require("./line-items").LineItemsClient)(
        this._client,
        this._opts,
      ))
    );
  }
  /**
   * Retrieve a transaction
   *
   * <p>Retrieves a Tax <code>Transaction</code> object.</p>
   *
   * GET /v1/tax/transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/transactions/${request.transaction}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
  /**
   * Create a transaction from a calculation
   *
   * <p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
   *
   * POST /v1/tax/transactions/create_from_calculation
   */
  createFromCalculation(
    request: requests.CreateFromCalculationRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/transactions/create_from_calculation",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxTransactionCreateFromCalculationBody.out.parse(request),
      bodyEncoding: {
        style: {
          calculation: "form",
          expand: "deepObject",
          metadata: "deepObject",
          posted_at: "form",
          reference: "form",
        },
        explode: {
          calculation: true,
          expand: true,
          metadata: true,
          posted_at: true,
          reference: true,
        },
      },
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
  /**
   * Create a reversal transaction
   *
   * <p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
   *
   * POST /v1/tax/transactions/create_reversal
   */
  createReversal(
    request: requests.CreateReversalRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/transactions/create_reversal",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxTransactionCreateReversalBody.out.parse(request),
      bodyEncoding: {
        style: {
          expand: "deepObject",
          flat_amount: "form",
          line_items: "deepObject",
          metadata: "deepObject",
          mode: "form",
          original_transaction: "form",
          reference: "form",
          shipping_cost: "deepObject",
        },
        explode: {
          expand: true,
          flat_amount: true,
          line_items: true,
          metadata: true,
          mode: true,
          original_transaction: true,
          reference: true,
          shipping_cost: true,
        },
      },
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
}
