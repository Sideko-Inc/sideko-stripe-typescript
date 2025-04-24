import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PayoutsTraceId = {
  /**
   * Possible values are `pending`, `supported`, and `unsupported`. When `payout.status` is `pending` or `in_transit`, this will be `pending`. When the payout transitions to `paid`, `failed`, or `canceled`, this status will become `supported` or `unsupported` shortly after in most cases. In some cases, this may appear as `pending` for up to 10 days after `arrival_date` until transitioning to `supported` or `unsupported`.
   */
  status: string;
  /**
   * The trace ID value if `trace_id.status` is `supported`, otherwise `nil`.
   */
  value?: string | null | undefined;
};

/**
 * @internal
 * PayoutsTraceId without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutsTraceId = {
  status: string;
  value?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutsTraceId
 */
const SchemaIn$PayoutsTraceId: z.ZodType<
  PayoutsTraceId, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.string(),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutsTraceId
 */
const SchemaOut$PayoutsTraceId: z.ZodType<
  External$PayoutsTraceId, // output type of this zod object
  z.ZodTypeDef,
  PayoutsTraceId // the object to be transformed
> = z
  .object({
    status: z.string(),
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      value: "value",
    });
  });

export const Schemas$PayoutsTraceId = {
  in: SchemaIn$PayoutsTraceId,
  out: SchemaOut$PayoutsTraceId,
};
