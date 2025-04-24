import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Point in Time
 */
export type GelatoDataDocumentReportIssuedDate = {
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
 * GelatoDataDocumentReportIssuedDate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoDataDocumentReportIssuedDate = {
  day?: number | null | undefined;
  month?: number | null | undefined;
  year?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoDataDocumentReportIssuedDate
 */
const SchemaIn$GelatoDataDocumentReportIssuedDate: z.ZodType<
  GelatoDataDocumentReportIssuedDate, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoDataDocumentReportIssuedDate
 */
const SchemaOut$GelatoDataDocumentReportIssuedDate: z.ZodType<
  External$GelatoDataDocumentReportIssuedDate, // output type of this zod object
  z.ZodTypeDef,
  GelatoDataDocumentReportIssuedDate // the object to be transformed
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

export const Schemas$GelatoDataDocumentReportIssuedDate = {
  in: SchemaIn$GelatoDataDocumentReportIssuedDate,
  out: SchemaOut$GelatoDataDocumentReportIssuedDate,
};
