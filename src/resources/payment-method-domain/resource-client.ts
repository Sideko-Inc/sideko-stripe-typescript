import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-method-domain/request-types";
import { Schemas$PaymentMethodDomain } from "@sideko-inc/stripe/types/payment-method-domain";
import { Schemas$PaymentMethodDomainCreateBody } from "@sideko-inc/stripe/types/payment-method-domain-create-body";
import { Schemas$PaymentMethodDomainListResponse } from "@sideko-inc/stripe/types/payment-method-domain-list-response";
import { Schemas$PaymentMethodDomainUpdateBody } from "@sideko-inc/stripe/types/payment-method-domain-update-body";
import { Schemas$PaymentMethodDomainValidateBody } from "@sideko-inc/stripe/types/payment-method-domain-validate-body";
import * as z from "zod";

export class PaymentMethodDomainClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List payment method domains
   *
   * <p>Lists the details of existing payment method domains.</p>
   *
   * GET /v1/payment_method_domains
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomainListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_method_domains",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "domain_name",
          value: z.string().optional().parse(request.domainName),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "enabled",
          value: z.boolean().optional().parse(request.enabled),
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
      responseSchema: Schemas$PaymentMethodDomainListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a payment method domain
   *
   * <p>Retrieves the details of an existing payment method domain.</p>
   *
   * GET /v1/payment_method_domains/{payment_method_domain}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Create a payment method domain
   *
   * <p>Creates a payment method domain.</p>
   *
   * POST /v1/payment_method_domains
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_method_domains",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodDomainCreateBody.out.parse(request),
      bodyEncoding: {
        style: { domain_name: "form", enabled: "form", expand: "deepObject" },
        explode: { domain_name: true, enabled: true, expand: true },
      },
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Update a payment method domain
   *
   * <p>Updates an existing payment method domain.</p>
   *
   * POST /v1/payment_method_domains/{payment_method_domain}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodDomainUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { enabled: "form", expand: "deepObject" },
        explode: { enabled: true, expand: true },
      },
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
  /**
   * Validate an existing payment method domain
   *
   * <p>Some payment methods might require additional steps to register a domain. If the requirements weren’t satisfied when the domain was created, the payment method will be inactive on the domain.
   * The payment method doesn’t appear in Elements or Embedded Checkout for this domain until it is active.</p>
   *
   * <p>To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.</p>
   *
   * <p>Related guides: <a href="/docs/payments/payment-methods/pmd-registration">Payment method domains</a>.</p>
   *
   * POST /v1/payment_method_domains/{payment_method_domain}/validate
   */
  validate(
    request: requests.ValidateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodDomain> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_domains/${request.paymentMethodDomain}/validate`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$PaymentMethodDomainValidateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$PaymentMethodDomain.in,
      opts,
    });
  }
}
