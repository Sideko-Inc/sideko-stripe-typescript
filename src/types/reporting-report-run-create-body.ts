import {
  External$ReportingReportRunCreateBodyParameters,
  ReportingReportRunCreateBodyParameters,
  Schemas$ReportingReportRunCreateBodyParameters,
} from "./reporting-report-run-create-body-parameters";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ReportingReportRunCreateBody
 */
export type ReportingReportRunCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
   */
  parameters?: ReportingReportRunCreateBodyParameters | undefined;
  /**
   * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
   */
  reportType: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (ReportingReportRunCreateBodyParameters | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ReportingReportRunCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReportingReportRunCreateBody = {
  expand?: string[] | undefined;
  parameters?: External$ReportingReportRunCreateBodyParameters | undefined;
  report_type: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$ReportingReportRunCreateBodyParameters | undefined)
    | string
    | External$ReportingReportRunCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReportingReportRunCreateBody
 */
const SchemaIn$ReportingReportRunCreateBody: z.ZodType<
  ReportingReportRunCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    parameters: Schemas$ReportingReportRunCreateBodyParameters.in.optional(),
    report_type: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      parameters: "parameters",
      report_type: "reportType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReportingReportRunCreateBody
 */
const SchemaOut$ReportingReportRunCreateBody: z.ZodType<
  External$ReportingReportRunCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ReportingReportRunCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    parameters: Schemas$ReportingReportRunCreateBodyParameters.out.optional(),
    reportType: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      parameters: "parameters",
      reportType: "report_type",
    });
  });

export const Schemas$ReportingReportRunCreateBody = {
  in: SchemaIn$ReportingReportRunCreateBody,
  out: SchemaOut$ReportingReportRunCreateBody,
};
