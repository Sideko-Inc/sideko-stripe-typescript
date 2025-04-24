import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoDocumentReportError = {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?:
    | (
        | "document_expired"
        | "document_type_not_supported"
        | "document_unverified_other"
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
 * GelatoDocumentReportError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoDocumentReportError = {
  code?:
    | (
        | "document_expired"
        | "document_type_not_supported"
        | "document_unverified_other"
      )
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoDocumentReportError
 */
const SchemaIn$GelatoDocumentReportError: z.ZodType<
  GelatoDocumentReportError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum([
        "document_expired",
        "document_type_not_supported",
        "document_unverified_other",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoDocumentReportError
 */
const SchemaOut$GelatoDocumentReportError: z.ZodType<
  External$GelatoDocumentReportError, // output type of this zod object
  z.ZodTypeDef,
  GelatoDocumentReportError // the object to be transformed
> = z
  .object({
    code: z
      .enum([
        "document_expired",
        "document_type_not_supported",
        "document_unverified_other",
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

export const Schemas$GelatoDocumentReportError = {
  in: SchemaIn$GelatoDocumentReportError,
  out: SchemaOut$GelatoDocumentReportError,
};
