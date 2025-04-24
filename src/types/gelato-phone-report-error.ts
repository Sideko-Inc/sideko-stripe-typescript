import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoPhoneReportError = {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?:
    | ("phone_unverified_other" | "phone_verification_declined")
    | null
    | undefined;
  /**
   * A human-readable message giving the reason for the failure. These messages can be shown to your users.
   */
  reason?: string | null | undefined;
};

/**
 * @internal
 * GelatoPhoneReportError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoPhoneReportError = {
  code?:
    | ("phone_unverified_other" | "phone_verification_declined")
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoPhoneReportError
 */
const SchemaIn$GelatoPhoneReportError: z.ZodType<
  GelatoPhoneReportError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum(["phone_unverified_other", "phone_verification_declined"])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoPhoneReportError
 */
const SchemaOut$GelatoPhoneReportError: z.ZodType<
  External$GelatoPhoneReportError, // output type of this zod object
  z.ZodTypeDef,
  GelatoPhoneReportError // the object to be transformed
> = z
  .object({
    code: z
      .enum(["phone_unverified_other", "phone_verification_declined"])
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

export const Schemas$GelatoPhoneReportError = {
  in: SchemaIn$GelatoPhoneReportError,
  out: SchemaOut$GelatoPhoneReportError,
};
