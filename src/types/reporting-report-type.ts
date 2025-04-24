import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The Report Type resource corresponds to a particular type of report, such as
 * the "Activity summary" or "Itemized payouts" reports. These objects are
 * identified by an ID belonging to a set of enumerated values. See
 * [API Access to Reports documentation](https://stripe.com/docs/reporting/statements/api)
 * for those Report Type IDs, along with required and optional parameters.
 *
 * Note that certain report types can only be run based on your live-mode data (not test-mode
 * data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export type ReportingReportType = {
  /**
   * Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  dataAvailableEnd: number;
  /**
   * Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  dataAvailableStart: number;
  /**
   * List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
   */
  defaultColumns?: string[] | null | undefined;
  /**
   * The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Human-readable name of the Report Type
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "reporting.report_type";
  /**
   * When this Report Type was latest updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.
   */
  version: number;
};

/**
 * @internal
 * ReportingReportType without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReportingReportType = {
  data_available_end: number;
  data_available_start: number;
  default_columns?: string[] | null | undefined;
  id: string;
  livemode: boolean;
  name: string;
  object: "reporting.report_type";
  updated: number;
  version: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReportingReportType
 */
const SchemaIn$ReportingReportType: z.ZodType<
  ReportingReportType, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data_available_end: z.number().int(),
    data_available_start: z.number().int(),
    default_columns: z.array(z.string()).nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["reporting.report_type"]),
    updated: z.number().int(),
    version: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data_available_end: "dataAvailableEnd",
      data_available_start: "dataAvailableStart",
      default_columns: "defaultColumns",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      updated: "updated",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReportingReportType
 */
const SchemaOut$ReportingReportType: z.ZodType<
  External$ReportingReportType, // output type of this zod object
  z.ZodTypeDef,
  ReportingReportType // the object to be transformed
> = z
  .object({
    dataAvailableEnd: z.number().int(),
    dataAvailableStart: z.number().int(),
    defaultColumns: z.array(z.string()).nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string(),
    object: z.enum(["reporting.report_type"]),
    updated: z.number().int(),
    version: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dataAvailableEnd: "data_available_end",
      dataAvailableStart: "data_available_start",
      defaultColumns: "default_columns",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      updated: "updated",
      version: "version",
    });
  });

export const Schemas$ReportingReportType = {
  in: SchemaIn$ReportingReportType,
  out: SchemaOut$ReportingReportType,
};
