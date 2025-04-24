import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionListCurrentPeriodEndObj0
 */
export type SubscriptionListCurrentPeriodEndObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionListCurrentPeriodEndObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionListCurrentPeriodEndObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionListCurrentPeriodEndObj0
 */
const SchemaIn$SubscriptionListCurrentPeriodEndObj0: z.ZodType<
  SubscriptionListCurrentPeriodEndObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionListCurrentPeriodEndObj0
 */
const SchemaOut$SubscriptionListCurrentPeriodEndObj0: z.ZodType<
  External$SubscriptionListCurrentPeriodEndObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionListCurrentPeriodEndObj0 // the object to be transformed
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

export const Schemas$SubscriptionListCurrentPeriodEndObj0 = {
  in: SchemaIn$SubscriptionListCurrentPeriodEndObj0,
  out: SchemaOut$SubscriptionListCurrentPeriodEndObj0,
};
