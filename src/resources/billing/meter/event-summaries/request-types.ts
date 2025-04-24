import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The customer for which to fetch event summaries.
   */
  customer: string;
  /**
   * The timestamp from when to stop aggregating meter events (exclusive). Must be aligned with minute boundaries.
   */
  endTime: number;
  /**
   * The timestamp from when to start aggregating meter events (inclusive). Must be aligned with minute boundaries.
   */
  startTime: number;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Specifies what granularity to use when generating event summaries. If not specified, a single event summary would be returned for the specified time range. For hourly granularity, start and end times must align with hour boundaries (e.g., 00:00, 01:00, ..., 23:00). For daily granularity, start and end times must align with UTC day boundaries (00:00 UTC).
   */
  valueGroupingWindow?: ("day" | "hour") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  id: string;
  customer: string;
  end_time: number;
  start_time: number;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  value_grouping_window?: ("day" | "hour") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    customer: z.string(),
    end_time: z.number().int(),
    start_time: z.number().int(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    value_grouping_window: z.enum(["day", "hour"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      customer: "customer",
      end_time: "endTime",
      start_time: "startTime",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      value_grouping_window: "valueGroupingWindow",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    id: z.string(),
    customer: z.string(),
    endTime: z.number().int(),
    startTime: z.number().int(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    valueGroupingWindow: z.enum(["day", "hour"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      customer: "customer",
      endTime: "end_time",
      startTime: "start_time",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      valueGroupingWindow: "value_grouping_window",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};
