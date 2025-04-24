import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoIdNumberReportError = {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?:
    | (
        | "id_number_insufficient_document_data"
        | "id_number_mismatch"
        | "id_number_unverified_other"
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
 * GelatoIdNumberReportError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoIdNumberReportError = {
  code?:
    | (
        | "id_number_insufficient_document_data"
        | "id_number_mismatch"
        | "id_number_unverified_other"
      )
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoIdNumberReportError
 */
const SchemaIn$GelatoIdNumberReportError: z.ZodType<
  GelatoIdNumberReportError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum([
        "id_number_insufficient_document_data",
        "id_number_mismatch",
        "id_number_unverified_other",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoIdNumberReportError
 */
const SchemaOut$GelatoIdNumberReportError: z.ZodType<
  External$GelatoIdNumberReportError, // output type of this zod object
  z.ZodTypeDef,
  GelatoIdNumberReportError // the object to be transformed
> = z
  .object({
    code: z
      .enum([
        "id_number_insufficient_document_data",
        "id_number_mismatch",
        "id_number_unverified_other",
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

export const Schemas$GelatoIdNumberReportError = {
  in: SchemaIn$GelatoIdNumberReportError,
  out: SchemaOut$GelatoIdNumberReportError,
};
