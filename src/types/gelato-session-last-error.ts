import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shows last VerificationSession error
 */
export type GelatoSessionLastError = {
  /**
   * A short machine-readable string giving the reason for the verification or user-session failure.
   */
  code?:
    | (
        | "abandoned"
        | "consent_declined"
        | "country_not_supported"
        | "device_not_supported"
        | "document_expired"
        | "document_type_not_supported"
        | "document_unverified_other"
        | "email_unverified_other"
        | "email_verification_declined"
        | "id_number_insufficient_document_data"
        | "id_number_mismatch"
        | "id_number_unverified_other"
        | "phone_unverified_other"
        | "phone_verification_declined"
        | "selfie_document_missing_photo"
        | "selfie_face_mismatch"
        | "selfie_manipulated"
        | "selfie_unverified_other"
        | "under_supported_age"
      )
    | null
    | undefined;
  /**
   * A message that explains the reason for verification or user-session failure.
   */
  reason?: string | null | undefined;
};

/**
 * @internal
 * GelatoSessionLastError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoSessionLastError = {
  code?:
    | (
        | "abandoned"
        | "consent_declined"
        | "country_not_supported"
        | "device_not_supported"
        | "document_expired"
        | "document_type_not_supported"
        | "document_unverified_other"
        | "email_unverified_other"
        | "email_verification_declined"
        | "id_number_insufficient_document_data"
        | "id_number_mismatch"
        | "id_number_unverified_other"
        | "phone_unverified_other"
        | "phone_verification_declined"
        | "selfie_document_missing_photo"
        | "selfie_face_mismatch"
        | "selfie_manipulated"
        | "selfie_unverified_other"
        | "under_supported_age"
      )
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoSessionLastError
 */
const SchemaIn$GelatoSessionLastError: z.ZodType<
  GelatoSessionLastError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum([
        "abandoned",
        "consent_declined",
        "country_not_supported",
        "device_not_supported",
        "document_expired",
        "document_type_not_supported",
        "document_unverified_other",
        "email_unverified_other",
        "email_verification_declined",
        "id_number_insufficient_document_data",
        "id_number_mismatch",
        "id_number_unverified_other",
        "phone_unverified_other",
        "phone_verification_declined",
        "selfie_document_missing_photo",
        "selfie_face_mismatch",
        "selfie_manipulated",
        "selfie_unverified_other",
        "under_supported_age",
      ])
      .nullable()
      .optional(),
    reason: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      reason: "reason",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoSessionLastError
 */
const SchemaOut$GelatoSessionLastError: z.ZodType<
  External$GelatoSessionLastError, // output type of this zod object
  z.ZodTypeDef,
  GelatoSessionLastError // the object to be transformed
> = z
  .object({
    code: z
      .enum([
        "abandoned",
        "consent_declined",
        "country_not_supported",
        "device_not_supported",
        "document_expired",
        "document_type_not_supported",
        "document_unverified_other",
        "email_unverified_other",
        "email_verification_declined",
        "id_number_insufficient_document_data",
        "id_number_mismatch",
        "id_number_unverified_other",
        "phone_unverified_other",
        "phone_verification_declined",
        "selfie_document_missing_photo",
        "selfie_face_mismatch",
        "selfie_manipulated",
        "selfie_unverified_other",
        "under_supported_age",
      ])
      .nullable()
      .optional(),
    reason: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      reason: "reason",
    });
  });

export const Schemas$GelatoSessionLastError = {
  in: SchemaIn$GelatoSessionLastError,
  out: SchemaOut$GelatoSessionLastError,
};
