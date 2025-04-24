import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/issuing/personalization-design/request-types";
import { Schemas$IssuingPersonalizationDesign } from "@sideko-inc/stripe/types/issuing-personalization-design";
import { Schemas$TestHelperIssuingPersonalizationDesignActivateBody } from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-activate-body";
import { Schemas$TestHelperIssuingPersonalizationDesignDeactivateBody } from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-deactivate-body";
import { Schemas$TestHelperIssuingPersonalizationDesignRejectBody } from "@sideko-inc/stripe/types/test-helper-issuing-personalization-design-reject-body";
import * as z from "zod";

export class PersonalizationDesignClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Activate a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>active</code>.</p>
   *
   * POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate
   */
  activate(
    request: requests.ActivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/personalization_designs/${request.personalizationDesign}/activate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingPersonalizationDesignActivateBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
  /**
   * Deactivate a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>
   *
   * POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate
   */
  deactivate(
    request: requests.DeactivateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/personalization_designs/${request.personalizationDesign}/deactivate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$TestHelperIssuingPersonalizationDesignDeactivateBody.out.parse(
            request.data,
          )
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
  /**
   * Reject a testmode personalization design
   *
   * <p>Updates the <code>status</code> of the specified testmode personalization design object to <code>rejected</code>.</p>
   *
   * POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject
   */
  reject(
    request: requests.RejectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingPersonalizationDesign> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/test_helpers/issuing/personalization_designs/${request.personalizationDesign}/reject`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperIssuingPersonalizationDesignRejectBody.out.parse(
        request,
      ),
      bodyEncoding: {
        style: { expand: "deepObject", rejection_reasons: "deepObject" },
        explode: { expand: true, rejection_reasons: true },
      },
      responseSchema: z.lazy(() => Schemas$IssuingPersonalizationDesign.in),
      opts,
    });
  }
}
