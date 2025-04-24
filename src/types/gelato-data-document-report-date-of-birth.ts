import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Point in Time
 */
export type GelatoDataDocumentReportDateOfBirth = {
  /**
   * Numerical day between 1 and 31.
   */
  day?: number | null | undefined;
  /**
   * Numerical month between 1 and 12.
   */
  month?: number | null | undefined;
  /**
   * The four-digit year.
   */
  year?: number | null | undefined;
};

/**
 * @internal
 * GelatoDataDocumentReportDateOfBirth without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoDataDocumentReportDateOfBirth = {
  day?: number | null | undefined;
  month?: number | null | undefined;
  year?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoDataDocumentReportDateOfBirth
 */
const SchemaIn$GelatoDataDocumentReportDateOfBirth: z.ZodType<
  GelatoDataDocumentReportDateOfBirth, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoDataDocumentReportDateOfBirth
 */
const SchemaOut$GelatoDataDocumentReportDateOfBirth: z.ZodType<
  External$GelatoDataDocumentReportDateOfBirth, // output type of this zod object
  z.ZodTypeDef,
  GelatoDataDocumentReportDateOfBirth // the object to be transformed
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

export const Schemas$GelatoDataDocumentReportDateOfBirth = {
  in: SchemaIn$GelatoDataDocumentReportDateOfBirth,
  out: SchemaOut$GelatoDataDocumentReportDateOfBirth,
};
