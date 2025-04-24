import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  ResourceClientOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/identity/verification-session/request-types";
import { Schemas$IdentityVerificationSession } from "@sideko-inc/stripe/types/identity-verification-session";
import { Schemas$IdentityVerificationSessionCancelBody } from "@sideko-inc/stripe/types/identity-verification-session-cancel-body";
import { Schemas$IdentityVerificationSessionCreateBody } from "@sideko-inc/stripe/types/identity-verification-session-create-body";
import { Schemas$IdentityVerificationSessionListCreatedObj0 } from "@sideko-inc/stripe/types/identity-verification-session-list-created-obj0";
import { Schemas$IdentityVerificationSessionListResponse } from "@sideko-inc/stripe/types/identity-verification-session-list-response";
import { Schemas$IdentityVerificationSessionRedactBody } from "@sideko-inc/stripe/types/identity-verification-session-redact-body";
import { Schemas$IdentityVerificationSessionUpdateBody } from "@sideko-inc/stripe/types/identity-verification-session-update-body";
import * as z from "zod";

export class VerificationSessionClient extends CoreResourceClient {
  constructor(coreClient: CoreClient, opts: ResourceClientOptions) {
    super(coreClient, opts);
  }
  /**
   * List VerificationSessions
   *
   * <p>Returns a list of VerificationSessions</p>
   *
   * GET /v1/identity/verification_sessions
   */
  list(
    request: requests.ListRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSessionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/identity/verification_sessions",
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "client_reference_id",
          value: z.string().optional().parse(request.clientReferenceId),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IdentityVerificationSessionListCreatedObj0.out,
              z.number().int(),
            ])
            .optional()
            .parse(request.created),
          style: "deepObject",
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
          name: "related_customer",
          value: z.string().optional().parse(request.relatedCustomer),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["canceled", "processing", "requires_input", "verified"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IdentityVerificationSessionListResponse.in,
      opts,
    });
  }
  /**
   * Retrieve a VerificationSession
   *
   * <p>Retrieves the details of a VerificationSession that was previously created.</p>
   *
   * <p>When the session status is <code>requires_input</code>, you can use this method to retrieve a valid
   * <code>client_secret</code> or <code>url</code> to allow re-submission.</p>
   *
   * GET /v1/identity/verification_sessions/{session}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSession> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/identity/verification_sessions/${request.session}`,
      auth: ["bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      responseSchema: Schemas$IdentityVerificationSession.in,
      opts,
    });
  }
  /**
   * Create a VerificationSession
   *
   * <p>Creates a VerificationSession object.</p>
   *
   * <p>After the VerificationSession is created, display a verification modal using the session <code>client_secret</code> or send your users to the session’s <code>url</code>.</p>
   *
   * <p>If your API key is in test mode, verification checks won’t actually process, though everything else will occur as if in live mode.</p>
   *
   * <p>Related guide: <a href="/docs/identity/verify-identity-documents">Verify your users’ identity documents</a></p>
   *
   * POST /v1/identity/verification_sessions
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/identity/verification_sessions",
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IdentityVerificationSessionCreateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          client_reference_id: "form",
          expand: "deepObject",
          metadata: "deepObject",
          options: "deepObject",
          provided_details: "deepObject",
          related_customer: "form",
          return_url: "form",
          type: "form",
          verification_flow: "form",
        },
        explode: {
          client_reference_id: true,
          expand: true,
          metadata: true,
          options: true,
          provided_details: true,
          related_customer: true,
          return_url: true,
          type: true,
          verification_flow: true,
        },
      },
      responseSchema: Schemas$IdentityVerificationSession.in,
      opts,
    });
  }
  /**
   * Update a VerificationSession
   *
   * <p>Updates a VerificationSession object.</p>
   *
   * <p>When the session status is <code>requires_input</code>, you can use this method to update the
   * verification check and options.</p>
   *
   * POST /v1/identity/verification_sessions/{session}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/identity/verification_sessions/${request.session}`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IdentityVerificationSessionUpdateBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: {
          expand: "deepObject",
          metadata: "deepObject",
          options: "deepObject",
          provided_details: "deepObject",
          type: "form",
        },
        explode: {
          expand: true,
          metadata: true,
          options: true,
          provided_details: true,
          type: true,
        },
      },
      responseSchema: Schemas$IdentityVerificationSession.in,
      opts,
    });
  }
  /**
   * Cancel a VerificationSession
   *
   * <p>A VerificationSession object can be canceled when it is in <code>requires_input</code> <a href="/docs/identity/how-sessions-work">status</a>.</p>
   *
   * <p>Once canceled, future submission attempts are disabled. This cannot be undone. <a href="/docs/identity/verification-sessions#cancel">Learn more</a>.</p>
   *
   * POST /v1/identity/verification_sessions/{session}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/identity/verification_sessions/${request.session}/cancel`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IdentityVerificationSessionCancelBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$IdentityVerificationSession.in,
      opts,
    });
  }
  /**
   * Redact a VerificationSession
   *
   * <p>Redact a VerificationSession to remove all collected information from Stripe. This will redact
   * the VerificationSession and all objects related to it, including VerificationReports, Events,
   * request logs, etc.</p>
   *
   * <p>A VerificationSession object can be redacted when it is in <code>requires_input</code> or <code>verified</code>
   * <a href="/docs/identity/how-sessions-work">status</a>. Redacting a VerificationSession in <code>requires_action</code>
   * state will automatically cancel it.</p>
   *
   * <p>The redaction process may take up to four days. When the redaction process is in progress, the
   * VerificationSession’s <code>redaction.status</code> field will be set to <code>processing</code>; when the process is
   * finished, it will change to <code>redacted</code> and an <code>identity.verification_session.redacted</code> event
   * will be emitted.</p>
   *
   * <p>Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
   * fields that contain personal data will be replaced by the string <code>[redacted]</code> or a similar
   * placeholder. The <code>metadata</code> field will also be erased. Redacted objects cannot be updated or
   * used for any purpose.</p>
   *
   * <p><a href="/docs/identity/verification-sessions#redact">Learn more</a>.</p>
   *
   * POST /v1/identity/verification_sessions/{session}/redact
   */
  redact(
    request: requests.RedactRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IdentityVerificationSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/identity/verification_sessions/${request.session}/redact`,
      auth: ["bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data
        ? Schemas$IdentityVerificationSessionRedactBody.out.parse(request.data)
        : undefined,
      bodyEncoding: {
        style: { expand: "deepObject" },
        explode: { expand: true },
      },
      responseSchema: Schemas$IdentityVerificationSession.in,
      opts,
    });
  }
}
