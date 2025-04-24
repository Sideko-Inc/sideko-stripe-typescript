import {
  External$GelatoDocumentReport,
  GelatoDocumentReport,
  Schemas$GelatoDocumentReport,
} from "./gelato-document-report";
import {
  External$GelatoEmailReport,
  GelatoEmailReport,
  Schemas$GelatoEmailReport,
} from "./gelato-email-report";
import {
  External$GelatoIdNumberReport,
  GelatoIdNumberReport,
  Schemas$GelatoIdNumberReport,
} from "./gelato-id-number-report";
import {
  External$GelatoPhoneReport,
  GelatoPhoneReport,
  Schemas$GelatoPhoneReport,
} from "./gelato-phone-report";
import {
  External$GelatoSelfieReport,
  GelatoSelfieReport,
  Schemas$GelatoSelfieReport,
} from "./gelato-selfie-report";
import {
  External$GelatoVerificationReportOptions,
  GelatoVerificationReportOptions,
  Schemas$GelatoVerificationReportOptions,
} from "./gelato-verification-report-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A VerificationReport is the result of an attempt to collect and verify data from a user.
 * The collection of verification checks performed is determined from the `type` and `options`
 * parameters used. You can find the result of each verification check performed in the
 * appropriate sub-resource: `document`, `id_number`, `selfie`.
 *
 * Each VerificationReport contains a copy of any data collected by the user as well as
 * reference IDs which can be used to access collected images through the [FileUpload](https://stripe.com/docs/api/files)
 * API. To configure and create VerificationReports, use the
 * [VerificationSession](https://stripe.com/docs/api/identity/verification_sessions) API.
 *
 * Related guide: [Accessing verification results](https://stripe.com/docs/identity/verification-sessions#results).
 */
export type IdentityVerificationReport = {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Result from a document check
   */
  document?: GelatoDocumentReport | undefined;
  /**
   * Result from a email check
   */
  email?: GelatoEmailReport | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Result from an id_number check
   */
  idNumber?: GelatoIdNumberReport | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "identity.verification_report";
  options?: GelatoVerificationReportOptions | undefined;
  /**
   * Result from a phone check
   */
  phone?: GelatoPhoneReport | undefined;
  /**
   * Result from a selfie check
   */
  selfie?: GelatoSelfieReport | undefined;
  /**
   * Type of report.
   */
  type: "document" | "id_number" | "verification_flow";
  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verificationFlow?: string | undefined;
  /**
   * ID of the VerificationSession that created this report.
   */
  verificationSession?: string | null | undefined;
};

/**
 * @internal
 * IdentityVerificationReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationReport = {
  client_reference_id?: string | null | undefined;
  created: number;
  document?: External$GelatoDocumentReport | undefined;
  email?: External$GelatoEmailReport | undefined;
  id: string;
  id_number?: External$GelatoIdNumberReport | undefined;
  livemode: boolean;
  object: "identity.verification_report";
  options?: External$GelatoVerificationReportOptions | undefined;
  phone?: External$GelatoPhoneReport | undefined;
  selfie?: External$GelatoSelfieReport | undefined;
  type: "document" | "id_number" | "verification_flow";
  verification_flow?: string | undefined;
  verification_session?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationReport
 */
const SchemaIn$IdentityVerificationReport: z.ZodType<
  IdentityVerificationReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_reference_id: z.string().nullable().optional(),
    created: z.number().int(),
    document: Schemas$GelatoDocumentReport.in.optional(),
    email: Schemas$GelatoEmailReport.in.optional(),
    id: z.string(),
    id_number: Schemas$GelatoIdNumberReport.in.optional(),
    livemode: z.boolean(),
    object: z.enum(["identity.verification_report"]),
    options: Schemas$GelatoVerificationReportOptions.in.optional(),
    phone: Schemas$GelatoPhoneReport.in.optional(),
    selfie: Schemas$GelatoSelfieReport.in.optional(),
    type: z.enum(["document", "id_number", "verification_flow"]),
    verification_flow: z.string().optional(),
    verification_session: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      client_reference_id: "clientReferenceId",
      created: "created",
      document: "document",
      email: "email",
      id: "id",
      id_number: "idNumber",
      livemode: "livemode",
      object: "object",
      options: "options",
      phone: "phone",
      selfie: "selfie",
      type: "type",
      verification_flow: "verificationFlow",
      verification_session: "verificationSession",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationReport
 */
const SchemaOut$IdentityVerificationReport: z.ZodType<
  External$IdentityVerificationReport, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationReport // the object to be transformed
> = z
  .object({
    clientReferenceId: z.string().nullable().optional(),
    created: z.number().int(),
    document: Schemas$GelatoDocumentReport.out.optional(),
    email: Schemas$GelatoEmailReport.out.optional(),
    id: z.string(),
    idNumber: Schemas$GelatoIdNumberReport.out.optional(),
    livemode: z.boolean(),
    object: z.enum(["identity.verification_report"]),
    options: Schemas$GelatoVerificationReportOptions.out.optional(),
    phone: Schemas$GelatoPhoneReport.out.optional(),
    selfie: Schemas$GelatoSelfieReport.out.optional(),
    type: z.enum(["document", "id_number", "verification_flow"]),
    verificationFlow: z.string().optional(),
    verificationSession: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clientReferenceId: "client_reference_id",
      created: "created",
      document: "document",
      email: "email",
      id: "id",
      idNumber: "id_number",
      livemode: "livemode",
      object: "object",
      options: "options",
      phone: "phone",
      selfie: "selfie",
      type: "type",
      verificationFlow: "verification_flow",
      verificationSession: "verification_session",
    });
  });

export const Schemas$IdentityVerificationReport = {
  in: SchemaIn$IdentityVerificationReport,
  out: SchemaOut$IdentityVerificationReport,
};
