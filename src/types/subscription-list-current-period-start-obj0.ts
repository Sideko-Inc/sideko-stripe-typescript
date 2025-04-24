import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionListCurrentPeriodStartObj0
 */
export type SubscriptionListCurrentPeriodStartObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionListCurrentPeriodStartObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionListCurrentPeriodStartObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionListCurrentPeriodStartObj0
 */
const SchemaIn$SubscriptionListCurrentPeriodStartObj0: z.ZodType<
  SubscriptionListCurrentPeriodStartObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionListCurrentPeriodStartObj0
 */
const SchemaOut$SubscriptionListCurrentPeriodStartObj0: z.ZodType<
  External$SubscriptionListCurrentPeriodStartObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionListCurrentPeriodStartObj0 // the object to be transformed
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

export const Schemas$SubscriptionListCurrentPeriodStartObj0 = {
  in: SchemaIn$SubscriptionListCurrentPeriodStartObj0,
  out: SchemaOut$SubscriptionListCurrentPeriodStartObj0,
};
