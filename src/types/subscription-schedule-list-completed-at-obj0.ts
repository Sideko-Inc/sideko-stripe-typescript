import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleListCompletedAtObj0
 */
export type SubscriptionScheduleListCompletedAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionScheduleListCompletedAtObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleListCompletedAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleListCompletedAtObj0
 */
const SchemaIn$SubscriptionScheduleListCompletedAtObj0: z.ZodType<
  SubscriptionScheduleListCompletedAtObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleListCompletedAtObj0
 */
const SchemaOut$SubscriptionScheduleListCompletedAtObj0: z.ZodType<
  External$SubscriptionScheduleListCompletedAtObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleListCompletedAtObj0 // the object to be transformed
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

export const Schemas$SubscriptionScheduleListCompletedAtObj0 = {
  in: SchemaIn$SubscriptionScheduleListCompletedAtObj0,
  out: SchemaOut$SubscriptionScheduleListCompletedAtObj0,
};
