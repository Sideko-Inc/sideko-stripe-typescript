import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleListCreatedObj0
 */
export type SubscriptionScheduleListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionScheduleListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleListCreatedObj0
 */
const SchemaIn$SubscriptionScheduleListCreatedObj0: z.ZodType<
  SubscriptionScheduleListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleListCreatedObj0
 */
const SchemaOut$SubscriptionScheduleListCreatedObj0: z.ZodType<
  External$SubscriptionScheduleListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleListCreatedObj0 // the object to be transformed
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

export const Schemas$SubscriptionScheduleListCreatedObj0 = {
  in: SchemaIn$SubscriptionScheduleListCreatedObj0,
  out: SchemaOut$SubscriptionScheduleListCreatedObj0,
};
