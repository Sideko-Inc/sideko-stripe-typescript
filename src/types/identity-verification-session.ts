import {
  External$GelatoProvidedDetails,
  GelatoProvidedDetails,
  Schemas$GelatoProvidedDetails,
} from "./gelato-provided-details";
import {
  External$GelatoSessionLastError,
  GelatoSessionLastError,
  Schemas$GelatoSessionLastError,
} from "./gelato-session-last-error";
import {
  External$GelatoVerificationSessionOptions,
  GelatoVerificationSessionOptions,
  Schemas$GelatoVerificationSessionOptions,
} from "./gelato-verification-session-options";
import {
  External$GelatoVerifiedOutputs,
  GelatoVerifiedOutputs,
  Schemas$GelatoVerifiedOutputs,
} from "./gelato-verified-outputs";
import {
  External$IdentityVerificationReport,
  IdentityVerificationReport,
  Schemas$IdentityVerificationReport,
} from "./identity-verification-report";
import {
  External$IdentityVerificationSessionMetadata,
  IdentityVerificationSessionMetadata,
  Schemas$IdentityVerificationSessionMetadata,
} from "./identity-verification-session-metadata";
import {
  External$VerificationSessionRedaction,
  Schemas$VerificationSessionRedaction,
  VerificationSessionRedaction,
} from "./verification-session-redaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A VerificationSession guides you through the process of collecting and verifying the identities
 * of your users. It contains details about the type of verification, such as what [verification
 * check](/docs/identity/verification-checks) to perform. Only create one VerificationSession for
 * each verification in your system.
 *
 * A VerificationSession transitions through [multiple
 * statuses](/docs/identity/how-sessions-work) throughout its lifetime as it progresses through
 * the verification flow. The VerificationSession contains the user's verified data after
 * verification checks are complete.
 *
 * Related guide: [The Verification Sessions API](https://stripe.com/docs/identity/verification-sessions)
 */
export type IdentityVerificationSession = {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | null | undefined;
  /**
   * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
   */
  clientSecret?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Shows last VerificationSession error
   */
  lastError?: GelatoSessionLastError | undefined;
  /**
   * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
   */
  lastVerificationReport?: (string | IdentityVerificationReport) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IdentityVerificationSessionMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "identity.verification_session";
  options?: GelatoVerificationSessionOptions | undefined;
  providedDetails?: GelatoProvidedDetails | undefined;
  redaction?: VerificationSessionRedaction | undefined;
  /**
   * Customer ID
   */
  relatedCustomer?: string | null | undefined;
  /**
   * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
   */
  status: "canceled" | "processing" | "requires_input" | "verified";
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
   */
  type: "document" | "id_number" | "verification_flow";
  /**
   * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 48 hours and can only be used once. Don’t store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
   */
  url?: string | null | undefined;
  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verificationFlow?: string | undefined;
  verifiedOutputs?: GelatoVerifiedOutputs | undefined;
};

/**
 * @internal
 * IdentityVerificationSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSession = {
  client_reference_id?: string | null | undefined;
  client_secret?: string | null | undefined;
  created: number;
  id: string;
  last_error?: External$GelatoSessionLastError | undefined;
  last_verification_report?:
    | (string | External$IdentityVerificationReport)
    | undefined;
  livemode: boolean;
  metadata: External$IdentityVerificationSessionMetadata;
  object: "identity.verification_session";
  options?: External$GelatoVerificationSessionOptions | undefined;
  provided_details?: External$GelatoProvidedDetails | undefined;
  redaction?: External$VerificationSessionRedaction | undefined;
  related_customer?: string | null | undefined;
  status: "canceled" | "processing" | "requires_input" | "verified";
  type: "document" | "id_number" | "verification_flow";
  url?: string | null | undefined;
  verification_flow?: string | undefined;
  verified_outputs?: External$GelatoVerifiedOutputs | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSession
 */
const SchemaIn$IdentityVerificationSession: z.ZodType<
  IdentityVerificationSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_reference_id: z.string().nullable().optional(),
    client_secret: z.string().nullable().optional(),
    created: z.number().int(),
    id: z.string(),
    last_error: Schemas$GelatoSessionLastError.in.optional(),
    last_verification_report: z
      .union([z.string(), Schemas$IdentityVerificationReport.in])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$IdentityVerificationSessionMetadata.in,
    object: z.enum(["identity.verification_session"]),
    options: Schemas$GelatoVerificationSessionOptions.in.optional(),
    provided_details: Schemas$GelatoProvidedDetails.in.optional(),
    redaction: Schemas$VerificationSessionRedaction.in.optional(),
    related_customer: z.string().nullable().optional(),
    status: z.enum(["canceled", "processing", "requires_input", "verified"]),
    type: z.enum(["document", "id_number", "verification_flow"]),
    url: z.string().nullable().optional(),
    verification_flow: z.string().optional(),
    verified_outputs: Schemas$GelatoVerifiedOutputs.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_reference_id: "clientReferenceId",
      client_secret: "clientSecret",
      created: "created",
      id: "id",
      last_error: "lastError",
      last_verification_report: "lastVerificationReport",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      options: "options",
      provided_details: "providedDetails",
      redaction: "redaction",
      related_customer: "relatedCustomer",
      status: "status",
      type: "type",
      url: "url",
      verification_flow: "verificationFlow",
      verified_outputs: "verifiedOutputs",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSession
 */
const SchemaOut$IdentityVerificationSession: z.ZodType<
  External$IdentityVerificationSession, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSession // the object to be transformed
> = z
  .object({
    clientReferenceId: z.string().nullable().optional(),
    clientSecret: z.string().nullable().optional(),
    created: z.number().int(),
    id: z.string(),
    lastError: Schemas$GelatoSessionLastError.out.optional(),
    lastVerificationReport: z
      .union([z.string(), Schemas$IdentityVerificationReport.out])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$IdentityVerificationSessionMetadata.out,
    object: z.enum(["identity.verification_session"]),
    options: Schemas$GelatoVerificationSessionOptions.out.optional(),
    providedDetails: Schemas$GelatoProvidedDetails.out.optional(),
    redaction: Schemas$VerificationSessionRedaction.out.optional(),
    relatedCustomer: z.string().nullable().optional(),
    status: z.enum(["canceled", "processing", "requires_input", "verified"]),
    type: z.enum(["document", "id_number", "verification_flow"]),
    url: z.string().nullable().optional(),
    verificationFlow: z.string().optional(),
    verifiedOutputs: Schemas$GelatoVerifiedOutputs.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientReferenceId: "client_reference_id",
      clientSecret: "client_secret",
      created: "created",
      id: "id",
      lastError: "last_error",
      lastVerificationReport: "last_verification_report",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      options: "options",
      providedDetails: "provided_details",
      redaction: "redaction",
      relatedCustomer: "related_customer",
      status: "status",
      type: "type",
      url: "url",
      verificationFlow: "verification_flow",
      verifiedOutputs: "verified_outputs",
    });
  });

export const Schemas$IdentityVerificationSession = {
  in: SchemaIn$IdentityVerificationSession,
  out: SchemaOut$IdentityVerificationSession,
};
