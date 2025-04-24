import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/funding-instruction/request-types";
import { Schemas$CustomerFundingInstructionCreateBody } from "@sideko-inc/stripe/types/customer-funding-instruction-create-body";
import { Schemas$FundingInstructions } from "@sideko-inc/stripe/types/funding-instructions";

export class FundingInstructionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Create or retrieve funding instructions for a customer cash balance
   *
   * <p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
   * funding instructions will be created. If funding instructions have already been created for a given customer, the same
   * funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>
   *
   * POST /v1/customers/{customer}/funding_instructions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FundingInstructions> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/funding_instructions`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerFundingInstructionCreateBody.out.parse(request),
      bodyEncoding: {
        style: {
          bank_transfer: "deepObject",
          currency: "form",
          expand: "deepObject",
          funding_type: "form",
        },
        explode: {
          bank_transfer: true,
          currency: true,
          expand: true,
          funding_type: true,
        },
      },
      responseSchema: Schemas$FundingInstructions.in,
      opts,
    });
  }
}
