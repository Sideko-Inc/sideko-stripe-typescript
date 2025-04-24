import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/source/mandate-notifications/request-types";
import { Schemas$SourceMandateNotification } from "@sideko-inc/stripe/types/source-mandate-notification";
import * as z from "zod";

export class MandateNotificationsClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * Retrieve a Source MandateNotification
   *
   * <p>Retrieves a new Source MandateNotification.</p>
   *
   * GET /v1/sources/{source}/mandate_notifications/{mandate_notification}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SourceMandateNotification> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sources/${request.source}/mandate_notifications/${request.mandateNotification}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$SourceMandateNotification.in,
      opts,
    });
  }
}
