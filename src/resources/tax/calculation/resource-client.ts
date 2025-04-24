import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/calculation/request-types";
import { Schemas$TaxCalculation } from "@sideko-inc/stripe/types/tax-calculation";
import { Schemas$TaxCalculationCreateBody } from "@sideko-inc/stripe/types/tax-calculation-create-body";
import * as z from "zod";

export class CalculationClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a Tax Calculation
   *
   * <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
   *
   * GET /v1/tax/calculations/{calculation}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxCalculation> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/calculations/${request.calculation}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$TaxCalculation.in,
      opts,
    });
  }
  /**
   * Create a Tax Calculation
   *
   * <p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
   *
   * POST /v1/tax/calculations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxCalculation> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/calculations",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxCalculationCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          currency: "form",
          customer: "form",
          customer_details: "deepObject",
          expand: "deepObject",
          line_items: "deepObject",
          ship_from_details: "deepObject",
          shipping_cost: "deepObject",
          tax_date: "form",
        },
        explode: {
          currency: true,
          customer: true,
          customer_details: true,
          expand: true,
          line_items: true,
          ship_from_details: true,
          shipping_cost: true,
          tax_date: true,
        },
      },
      responseSchema: Schemas$TaxCalculation.in,
      opts,
    });
  }
}
