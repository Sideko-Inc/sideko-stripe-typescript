import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/authorization/fraud-challenges/request-types";
import { Schemas$IssuingAuthorization } from "@sideko-inc/stripe/types/issuing-authorization";
import { Schemas$TestHelperIssuingAuthorizationFraudChallengesRespondBody } from "@sideko-inc/stripe/types/test-helper-issuing-authorization-fraud-challenges-respond-body";
import * as z from "zod";

export class FraudChallengesClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Respond to fraud challenge
   *
   * <p>Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.</p>
   *
   * POST /v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond
   */
  respond(
    request: requests.RespondRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingAuthorization> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/authorizations/${request.authorization}/fraud_challenges/respond`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingAuthorizationFraudChallengesRespondBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: { confirmed: "form", expand: "deepObject" },
        explode: { confirmed: true, expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingAuthorization.in),
      opts,
    });
  }
}
