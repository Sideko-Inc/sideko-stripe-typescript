import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleListCanceledAtObj0
 */
export type SubscriptionScheduleListCanceledAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionScheduleListCanceledAtObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleListCanceledAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleListCanceledAtObj0
 */
const SchemaIn$SubscriptionScheduleListCanceledAtObj0: z.ZodType<
  SubscriptionScheduleListCanceledAtObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleListCanceledAtObj0
 */
const SchemaOut$SubscriptionScheduleListCanceledAtObj0: z.ZodType<
  External$SubscriptionScheduleListCanceledAtObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleListCanceledAtObj0 // the object to be transformed
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

export const Schemas$SubscriptionScheduleListCanceledAtObj0 = {
  in: SchemaIn$SubscriptionScheduleListCanceledAtObj0,
  out: SchemaOut$SubscriptionScheduleListCanceledAtObj0,
};
