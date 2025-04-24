import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoSelfieReportError = {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?:
    | (
        | "selfie_document_missing_photo"
        | "selfie_face_mismatch"
        | "selfie_manipulated"
        | "selfie_unverified_other"
      )
    | null
    | undefined;
  /**
   * A human-readable message giving the reason for the failure. These messages can be shown to your users.
   */
  reason?: string | null | undefined;
};

/**
 * @internal
 * GelatoSelfieReportError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoSelfieReportError = {
  code?:
    | (
        | "selfie_document_missing_photo"
        | "selfie_face_mismatch"
        | "selfie_manipulated"
        | "selfie_unverified_other"
      )
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoSelfieReportError
 */
const SchemaIn$GelatoSelfieReportError: z.ZodType<
  GelatoSelfieReportError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum([
        "selfie_document_missing_photo",
        "selfie_face_mismatch",
        "selfie_manipulated",
        "selfie_unverified_other",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoSelfieReportError
 */
const SchemaOut$GelatoSelfieReportError: z.ZodType<
  External$GelatoSelfieReportError, // output type of this zod object
  z.ZodTypeDef,
  GelatoSelfieReportError // the object to be transformed
> = z
  .object({
    code: z
      .enum([
        "selfie_document_missing_photo",
        "selfie_face_mismatch",
        "selfie_manipulated",
        "selfie_unverified_other",
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

export const Schemas$GelatoSelfieReportError = {
  in: SchemaIn$GelatoSelfieReportError,
  out: SchemaOut$GelatoSelfieReportError,
};
