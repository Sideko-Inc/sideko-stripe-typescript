import { External$File, File, Schemas$File } from "./file";
import {
  External$FinancialReportingFinanceReportRunRunParameters,
  FinancialReportingFinanceReportRunRunParameters,
  Schemas$FinancialReportingFinanceReportRunRunParameters,
} from "./financial-reporting-finance-report-run-run-parameters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The Report Run object represents an instance of a report type generated with
 * specific run parameters. Once the object is created, Stripe begins processing the report.
 * When the report has finished running, it will give you a reference to a file
 * where you can retrieve your results. For an overview, see
 * [API Access to Reports](https://stripe.com/docs/reporting/statements/api).
 *
 * Note that certain report types can only be run based on your live-mode data (not test-mode
 * data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export type ReportingReportRun = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * If something should go wrong during the run, a message about the failure (populated when
   *  `status=failed`).
   */
  error?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * `true` if the report is run on live mode data and `false` if it is run on test mode data.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "reporting.report_run";
  parameters: FinancialReportingFinanceReportRunRunParameters;
  /**
   * The ID of the [report type](https://stripe.com/docs/reports/report-types) to run, such as `"balance.summary.1"`.
   */
  reportType: string;
  /**
   * This object represents files hosted on Stripe's servers. You can upload
   * files with the [create file](https://stripe.com/docs/api#create_file) request
   * (for example, when uploading dispute evidence). Stripe also
   * creates files independently (for example, the results of a [Sigma scheduled
   * query](#scheduled_queries)).
   *
   * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
   */
  result?: File | undefined;
  /**
   * Status of this report run. This will be `pending` when the run is initially created.
   *  When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
   *  Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
   */
  status: string;
  /**
   * Timestamp at which this run successfully finished (populated when
   *  `status=succeeded`). Measured in seconds since the Unix epoch.
   */
  succeededAt?: number | null | undefined;
};

/**
 * @internal
 * ReportingReportRun without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReportingReportRun = {
  created: number;
  error?: string | null | undefined;
  id: string;
  livemode: boolean;
  object: "reporting.report_run";
  parameters: External$FinancialReportingFinanceReportRunRunParameters;
  report_type: string;
  result?: External$File | undefined;
  status: string;
  succeeded_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReportingReportRun
 */
const SchemaIn$ReportingReportRun: z.ZodType<
  ReportingReportRun, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    error: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["reporting.report_run"]),
    parameters: Schemas$FinancialReportingFinanceReportRunRunParameters.in,
    report_type: z.string(),
    result: z.lazy(() => Schemas$File.in.optional()),
    status: z.string(),
    succeeded_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      error: "error",
      id: "id",
      livemode: "livemode",
      object: "object",
      parameters: "parameters",
      report_type: "reportType",
      result: "result",
      status: "status",
      succeeded_at: "succeededAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReportingReportRun
 */
const SchemaOut$ReportingReportRun: z.ZodType<
  External$ReportingReportRun, // output type of this zod object
  z.ZodTypeDef,
  ReportingReportRun // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    error: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["reporting.report_run"]),
    parameters: Schemas$FinancialReportingFinanceReportRunRunParameters.out,
    reportType: z.string(),
    result: z.lazy(() => Schemas$File.out.optional()),
    status: z.string(),
    succeededAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      error: "error",
      id: "id",
      livemode: "livemode",
      object: "object",
      parameters: "parameters",
      reportType: "report_type",
      result: "result",
      status: "status",
      succeededAt: "succeeded_at",
    });
  });

export const Schemas$ReportingReportRun = {
  in: SchemaIn$ReportingReportRun,
  out: SchemaOut$ReportingReportRun,
};
