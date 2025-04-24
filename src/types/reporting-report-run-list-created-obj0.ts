import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ReportingReportRunListCreatedObj0
 */
export type ReportingReportRunListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ReportingReportRunListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReportingReportRunListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReportingReportRunListCreatedObj0
 */
const SchemaIn$ReportingReportRunListCreatedObj0: z.ZodType<
  ReportingReportRunListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReportingReportRunListCreatedObj0
 */
const SchemaOut$ReportingReportRunListCreatedObj0: z.ZodType<
  External$ReportingReportRunListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  ReportingReportRunListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$ReportingReportRunListCreatedObj0 = {
  in: SchemaIn$ReportingReportRunListCreatedObj0,
  out: SchemaOut$ReportingReportRunListCreatedObj0,
};
