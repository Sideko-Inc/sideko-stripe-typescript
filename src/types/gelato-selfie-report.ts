import {
  External$GelatoSelfieReportError,
  GelatoSelfieReportError,
  Schemas$GelatoSelfieReportError,
} from "./gelato-selfie-report-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Result from a selfie check
 */
export type GelatoSelfieReport = {
  /**
   * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
   */
  document?: string | null | undefined;
  error?: GelatoSelfieReportError | undefined;
  /**
   * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
   */
  selfie?: string | null | undefined;
  /**
   * Status of this `selfie` check.
   */
  status: "unverified" | "verified";
};

/**
 * @internal
 * GelatoSelfieReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoSelfieReport = {
  document?: string | null | undefined;
  error?: External$GelatoSelfieReportError | undefined;
  selfie?: string | null | undefined;
  status: "unverified" | "verified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoSelfieReport
 */
const SchemaIn$GelatoSelfieReport: z.ZodType<
  GelatoSelfieReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: z.string().nullable().optional(),
    error: Schemas$GelatoSelfieReportError.in.optional(),
    selfie: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      error: "error",
      selfie: "selfie",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoSelfieReport
 */
const SchemaOut$GelatoSelfieReport: z.ZodType<
  External$GelatoSelfieReport, // output type of this zod object
  z.ZodTypeDef,
  GelatoSelfieReport // the object to be transformed
> = z
  .object({
    document: z.string().nullable().optional(),
    error: Schemas$GelatoSelfieReportError.out.optional(),
    selfie: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      error: "error",
      selfie: "selfie",
      status: "status",
    });
  });

export const Schemas$GelatoSelfieReport = {
  in: SchemaIn$GelatoSelfieReport,
  out: SchemaOut$GelatoSelfieReport,
};
