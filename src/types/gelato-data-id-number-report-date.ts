import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Point in Time
 */
export type GelatoDataIdNumberReportDate = {
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
 * GelatoDataIdNumberReportDate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoDataIdNumberReportDate = {
  day?: number | null | undefined;
  month?: number | null | undefined;
  year?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoDataIdNumberReportDate
 */
const SchemaIn$GelatoDataIdNumberReportDate: z.ZodType<
  GelatoDataIdNumberReportDate, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoDataIdNumberReportDate
 */
const SchemaOut$GelatoDataIdNumberReportDate: z.ZodType<
  External$GelatoDataIdNumberReportDate, // output type of this zod object
  z.ZodTypeDef,
  GelatoDataIdNumberReportDate // the object to be transformed
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

export const Schemas$GelatoDataIdNumberReportDate = {
  in: SchemaIn$GelatoDataIdNumberReportDate,
  out: SchemaOut$GelatoDataIdNumberReportDate,
};
