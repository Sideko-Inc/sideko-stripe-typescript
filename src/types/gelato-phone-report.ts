import {
  External$GelatoPhoneReportError,
  GelatoPhoneReportError,
  Schemas$GelatoPhoneReportError,
} from "./gelato-phone-report-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Result from a phone check
 */
export type GelatoPhoneReport = {
  error?: GelatoPhoneReportError | undefined;
  /**
   * Phone to be verified.
   */
  phone?: string | null | undefined;
  /**
   * Status of this `phone` check.
   */
  status: "unverified" | "verified";
};

/**
 * @internal
 * GelatoPhoneReport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoPhoneReport = {
  error?: External$GelatoPhoneReportError | undefined;
  phone?: string | null | undefined;
  status: "unverified" | "verified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoPhoneReport
 */
const SchemaIn$GelatoPhoneReport: z.ZodType<
  GelatoPhoneReport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    error: Schemas$GelatoPhoneReportError.in.optional(),
    phone: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      error: "error",
      phone: "phone",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoPhoneReport
 */
const SchemaOut$GelatoPhoneReport: z.ZodType<
  External$GelatoPhoneReport, // output type of this zod object
  z.ZodTypeDef,
  GelatoPhoneReport // the object to be transformed
> = z
  .object({
    error: Schemas$GelatoPhoneReportError.out.optional(),
    phone: z.string().nullable().optional(),
    status: z.enum(["unverified", "verified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      error: "error",
      phone: "phone",
      status: "status",
    });
  });

export const Schemas$GelatoPhoneReport = {
  in: SchemaIn$GelatoPhoneReport,
  out: SchemaOut$GelatoPhoneReport,
};
