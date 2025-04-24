import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type FinancialReportingFinanceReportRunRunParameters = {
  /**
   * The set of output columns requested for inclusion in the report run.
   */
  columns?: string[] | undefined;
  /**
   * Connected account ID by which to filter the report run.
   */
  connectedAccount?: string | undefined;
  /**
   * Currency of objects to be included in the report run.
   */
  currency?: string | undefined;
  /**
   * Ending timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after the user specified `interval_start` and 1 second before this report's last `data_available_end` value.
   */
  intervalEnd?: number | undefined;
  /**
   * Starting timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after this report's `data_available_start` and 1 second before the user specified `interval_end` value.
   */
  intervalStart?: number | undefined;
  /**
   * Payout ID by which to filter the report run.
   */
  payout?: string | undefined;
  /**
   * Category of balance transactions to be included in the report run.
   */
  reportingCategory?: string | undefined;
  /**
   * Defaults to `Etc/UTC`. The output timezone for all timestamps in the report. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones). Has no effect on `interval_start` or `interval_end`.
   */
  timezone?: string | undefined;
};

/**
 * @internal
 * FinancialReportingFinanceReportRunRunParameters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialReportingFinanceReportRunRunParameters = {
  columns?: string[] | undefined;
  connected_account?: string | undefined;
  currency?: string | undefined;
  interval_end?: number | undefined;
  interval_start?: number | undefined;
  payout?: string | undefined;
  reporting_category?: string | undefined;
  timezone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialReportingFinanceReportRunRunParameters
 */
const SchemaIn$FinancialReportingFinanceReportRunRunParameters: z.ZodType<
  FinancialReportingFinanceReportRunRunParameters, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    columns: z.array(z.string()).optional(),
    connected_account: z.string().optional(),
    currency: z.string().optional(),
    interval_end: z.number().int().optional(),
    interval_start: z.number().int().optional(),
    payout: z.string().optional(),
    reporting_category: z.string().optional(),
    timezone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      columns: "columns",
      connected_account: "connectedAccount",
      currency: "currency",
      interval_end: "intervalEnd",
      interval_start: "intervalStart",
      payout: "payout",
      reporting_category: "reportingCategory",
      timezone: "timezone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialReportingFinanceReportRunRunParameters
 */
const SchemaOut$FinancialReportingFinanceReportRunRunParameters: z.ZodType<
  External$FinancialReportingFinanceReportRunRunParameters, // output type of this zod object
  z.ZodTypeDef,
  FinancialReportingFinanceReportRunRunParameters // the object to be transformed
> = z
  .object({
    columns: z.array(z.string()).optional(),
    connectedAccount: z.string().optional(),
    currency: z.string().optional(),
    intervalEnd: z.number().int().optional(),
    intervalStart: z.number().int().optional(),
    payout: z.string().optional(),
    reportingCategory: z.string().optional(),
    timezone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      columns: "columns",
      connectedAccount: "connected_account",
      currency: "currency",
      intervalEnd: "interval_end",
      intervalStart: "interval_start",
      payout: "payout",
      reportingCategory: "reporting_category",
      timezone: "timezone",
    });
  });

export const Schemas$FinancialReportingFinanceReportRunRunParameters = {
  in: SchemaIn$FinancialReportingFinanceReportRunRunParameters,
  out: SchemaOut$FinancialReportingFinanceReportRunRunParameters,
};
