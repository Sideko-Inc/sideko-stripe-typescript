import {
  External$GelatoEmailReportError,
  GelatoEmailReportError,
  Schemas$GelatoEmailReportError,
} from "./gelato-email-report-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Result from a email check
 */
export type GelatoEmailReport = {
  /**
   * Email to be verified.
   */
  email?: string | null | undefined;
  error?: GelatoEmailReportError | undefined;
  /**
   * Status of this `email` check.
   */
  status: "unverified" | "verified";
};

/**
 * @internal
 * GelatoEmailReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoEmailReport = {
  email?: string | null | undefined;
  error?: External$GelatoEmailReportError | undefined;
  status: "unverified" | "verified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoEmailReport
 */
const SchemaIn$GelatoEmailReport: z.ZodType<
  GelatoEmailReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string().nullable().optional(),
    error: Schemas$GelatoEmailReportError.in.optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      error: "error",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoEmailReport
 */
const SchemaOut$GelatoEmailReport: z.ZodType<
  External$GelatoEmailReport, // output type of this zod object
  z.ZodTypeDef,
  GelatoEmailReport // the object to be transformed
> = z
  .object({
    email: z.string().nullable().optional(),
    error: Schemas$GelatoEmailReportError.out.optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      error: "error",
      status: "status",
    });
  });

export const Schemas$GelatoEmailReport = {
  in: SchemaIn$GelatoEmailReport,
  out: SchemaOut$GelatoEmailReport,
};
