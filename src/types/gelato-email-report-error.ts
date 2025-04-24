import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoEmailReportError = {
  /**
   * A short machine-readable string giving the reason for the verification failure.
   */
  code?:
    | ("email_unverified_other" | "email_verification_declined")
    | null
    | undefined;
  /**
   * A human-readable message giving the reason for the failure. These messages can be shown to your users.
   */
  reason?: string | null | undefined;
};

/**
 * @internal
 * GelatoEmailReportError without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoEmailReportError = {
  code?:
    | ("email_unverified_other" | "email_verification_declined")
    | null
    | undefined;
  reason?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoEmailReportError
 */
const SchemaIn$GelatoEmailReportError: z.ZodType<
  GelatoEmailReportError, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z
      .enum(["email_unverified_other", "email_verification_declined"])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoEmailReportError
 */
const SchemaOut$GelatoEmailReportError: z.ZodType<
  External$GelatoEmailReportError, // output type of this zod object
  z.ZodTypeDef,
  GelatoEmailReportError // the object to be transformed
> = z
  .object({
    code: z
      .enum(["email_unverified_other", "email_verification_declined"])
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

export const Schemas$GelatoEmailReportError = {
  in: SchemaIn$GelatoEmailReportError,
  out: SchemaOut$GelatoEmailReportError,
};
