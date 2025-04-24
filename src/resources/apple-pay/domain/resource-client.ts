import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/apple-pay/domain/request-types";
import { Schemas$ApplePayDomain } from "@sideko-inc/stripe/types/apple-pay-domain";
import { Schemas$ApplePayDomainCreateBody } from "@sideko-inc/stripe/types/apple-pay-domain-create-body";
import { Schemas$ApplePayDomainListResponse } from "@sideko-inc/stripe/types/apple-pay-domain-list-response";
import { Schemas$DeletedApplePayDomain } from "@sideko-inc/stripe/types/deleted-apple-pay-domain";
import * as z from "zod";

export class DomainClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * <p>Delete an apple pay domain.</p>
   *
   * DELETE /v1/apple_pay/domains/{domain}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedApplePayDomain> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/apple_pay/domains/${request.domain}`,
      auth: ["bearerAuth"],
      responseSchema: Schemas$DeletedApplePayDomain.in,
      opts,
    });
  }
  /**
   * <p>List apple pay domains.</p>
   *
   * GET /v1/apple_pay/domains
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ApplePayDomainListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/apple_pay/domains",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "domain_name",
          value: z.string().optional().parse(request.domainName),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ApplePayDomainListResponse.in,
      opts,
    });
  }
  /**
   * <p>Retrieve an apple pay domain.</p>
   *
   * GET /v1/apple_pay/domains/{domain}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplePayDomain> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/apple_pay/domains/${request.domain}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$ApplePayDomain.in,
      opts,
    });
  }
  /**
   * <p>Create an apple pay domain.</p>
   *
   * POST /v1/apple_pay/domains
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplePayDomain> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/apple_pay/domains",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ApplePayDomainCreateBody.out.parse(request),
      bodyEncoding: {
        style: { domain_name: "form", expand: "deepObject" },
        explode: { domain_name: true, expand: true },
      },
      responseSchema: Schemas$ApplePayDomain.in,
      opts,
    });
  }
}
