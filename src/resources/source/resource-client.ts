import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { MandateNotificationsClient } from "@sideko-inc/stripe/resources/source/mandate-notifications";
import * as requests from "@sideko-inc/stripe/resources/source/request-types";
import { SourceTransactionsClient } from "@sideko-inc/stripe/resources/source/source-transactions";
import { Schemas$Source } from "@sideko-inc/stripe/types/source";
import { Schemas$SourceCreateBody } from "@sideko-inc/stripe/types/source-create-body";
import { Schemas$SourceUpdateBody } from "@sideko-inc/stripe/types/source-update-body";
import { Schemas$SourceVerifyBody } from "@sideko-inc/stripe/types/source-verify-body";
import * as z from "zod";

export class SourceClient extends CoreResourceClient {
  private _mandateNotificationsLazy?: MandateNotificationsClient; // lazy-loading cache
  private _sourceTransactionsLazy?: SourceTransactionsClient; // lazy-loading cache

  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
    if (this._opts.lazyLoad === false) {
      this.mandateNotifications;
      this.sourceTransactions;
    }
  }
  get mandateNotifications(): MandateNotificationsClient {
    return (
      this._mandateNotificationsLazy ??
      (this._mandateNotificationsLazy =
        new (require("./mandate-notifications").MandateNotificationsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  get sourceTransactions(): SourceTransactionsClient {
    return (
      this._sourceTransactionsLazy ??
      (this._sourceTransactionsLazy =
        new (require("./source-transactions").SourceTransactionsClient)(
          this._client,
          this._opts,
        ))
    );
  }
  /**
   * Retrieve a source
   *
   * <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
   *
   * GET /v1/sources/{source}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sources/${request.source}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "client_secret",
          value: z.string().optional().parse(request.clientSecret),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * Shares a source
   *
   * <p>Creates a new source object.</p>
   *
   * POST /v1/sources
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/sources",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SourceCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          currency: "form",
          customer: "form",
          expand: "deepObject",
          flow: "form",
          mandate: "deepObject",
          metadata: "deepObject",
          original_source: "form",
          owner: "deepObject",
          receiver: "deepObject",
          redirect: "deepObject",
          source_order: "deepObject",
          statement_descriptor: "form",
          token: "form",
          type: "form",
          usage: "form",
        },
        explode: {
          amount: true,
          currency: true,
          customer: true,
          expand: true,
          flow: true,
          mandate: true,
          metadata: true,
          original_source: true,
          owner: true,
          receiver: true,
          redirect: true,
          source_order: true,
          statement_descriptor: true,
          token: true,
          type: true,
          usage: true,
        },
      },
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * Update a source
   *
   * <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
   *
   * POST /v1/sources/{source}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/sources/${request.source}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$SourceUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          amount: "form",
          expand: "deepObject",
          mandate: "deepObject",
          metadata: "deepObject",
          owner: "deepObject",
          source_order: "deepObject",
        },
        explode: {
          amount: true,
          expand: true,
          mandate: true,
          metadata: true,
          owner: true,
          source_order: true,
        },
      },
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * <p>Verify a given source.</p>
   *
   * POST /v1/sources/{source}/verify
   */
  verify(
    request: requests.VerifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/sources/${request.source}/verify`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SourceVerifyBody.out.parse(request),
      bodyEncoding: {
        style: { expand: "deepObject", values: "deepObject" },
        explode: { expand: true, values: true },
      },
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
}
