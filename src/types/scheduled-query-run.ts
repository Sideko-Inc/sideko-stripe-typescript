import { External$File, File, Schemas$File } from "./file";
import {
  External$SigmaScheduledQueryRunError,
  Schemas$SigmaScheduledQueryRunError,
  SigmaScheduledQueryRunError,
} from "./sigma-scheduled-query-run-error";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If you have [scheduled a Sigma query](https://stripe.com/docs/sigma/scheduled-queries), you'll
 * receive a `sigma.scheduled_query_run.created` webhook each time the query
 * runs. The webhook contains a `ScheduledQueryRun` object, which you can use to
 * retrieve the query results.
 */
export type ScheduledQueryRun = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * When the query was run, Sigma contained a snapshot of your Stripe data at this time.
   */
  dataLoadTime: number;
  error?: SigmaScheduledQueryRunError | undefined;
  /**
   * This object represents files hosted on Stripe's servers. You can upload
   * files with the [create file](https://stripe.com/docs/api#create_file) request
   * (for example, when uploading dispute evidence). Stripe also
   * creates files independently (for example, the results of a [Sigma scheduled
   * query](#scheduled_queries)).
   *
   * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
   */
  file?: File | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "scheduled_query_run";
  /**
   * Time at which the result expires and is no longer available for download.
   */
  resultAvailableUntil: number;
  /**
   * SQL for the query.
   */
  sql: string;
  /**
   * The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
   */
  status: string;
  /**
   * Title of the query.
   */
  title: string;
};

/**
 * @internal
 * ScheduledQueryRun without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ScheduledQueryRun = {
  created: number;
  data_load_time: number;
  error?: External$SigmaScheduledQueryRunError | undefined;
  file?: External$File | undefined;
  id: string;
  livemode: boolean;
  object: "scheduled_query_run";
  result_available_until: number;
  sql: string;
  status: string;
  title: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ScheduledQueryRun
 */
const SchemaIn$ScheduledQueryRun: z.ZodType<
  ScheduledQueryRun, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    data_load_time: z.number().int(),
    error: Schemas$SigmaScheduledQueryRunError.in.optional(),
    file: z.lazy(() => Schemas$File.in.optional()),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["scheduled_query_run"]),
    result_available_until: z.number().int(),
    sql: z.string(),
    status: z.string(),
    title: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      data_load_time: "dataLoadTime",
      error: "error",
      file: "file",
      id: "id",
      livemode: "livemode",
      object: "object",
      result_available_until: "resultAvailableUntil",
      sql: "sql",
      status: "status",
      title: "title",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ScheduledQueryRun
 */
const SchemaOut$ScheduledQueryRun: z.ZodType<
  External$ScheduledQueryRun, // output type of this zod object
  z.ZodTypeDef,
  ScheduledQueryRun // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    dataLoadTime: z.number().int(),
    error: Schemas$SigmaScheduledQueryRunError.out.optional(),
    file: z.lazy(() => Schemas$File.out.optional()),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["scheduled_query_run"]),
    resultAvailableUntil: z.number().int(),
    sql: z.string(),
    status: z.string(),
    title: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      dataLoadTime: "data_load_time",
      error: "error",
      file: "file",
      id: "id",
      livemode: "livemode",
      object: "object",
      resultAvailableUntil: "result_available_until",
      sql: "sql",
      status: "status",
      title: "title",
    });
  });

export const Schemas$ScheduledQueryRun = {
  in: SchemaIn$ScheduledQueryRun,
  out: SchemaOut$ScheduledQueryRun,
};
