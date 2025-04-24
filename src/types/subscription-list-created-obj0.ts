import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionListCreatedObj0
 */
export type SubscriptionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * SubscriptionListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionListCreatedObj0
 */
const SchemaIn$SubscriptionListCreatedObj0: z.ZodType<
  SubscriptionListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionListCreatedObj0
 */
const SchemaOut$SubscriptionListCreatedObj0: z.ZodType<
  External$SubscriptionListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionListCreatedObj0 // the object to be transformed
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

export const Schemas$SubscriptionListCreatedObj0 = {
  in: SchemaIn$SubscriptionListCreatedObj0,
  out: SchemaOut$SubscriptionListCreatedObj0,
};
