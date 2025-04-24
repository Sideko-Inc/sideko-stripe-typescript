import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalResourceScheduleUpdateAtPeriodEndCondition = {
  /**
   * The type of condition.
   */
  type: "decreasing_item_amount" | "shortening_interval";
};

/**
 * @internal
 * PortalResourceScheduleUpdateAtPeriodEndCondition without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalResourceScheduleUpdateAtPeriodEndCondition = {
  type: "decreasing_item_amount" | "shortening_interval";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalResourceScheduleUpdateAtPeriodEndCondition
 */
const SchemaIn$PortalResourceScheduleUpdateAtPeriodEndCondition: z.ZodType<
  PortalResourceScheduleUpdateAtPeriodEndCondition, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["decreasing_item_amount", "shortening_interval"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalResourceScheduleUpdateAtPeriodEndCondition
 */
const SchemaOut$PortalResourceScheduleUpdateAtPeriodEndCondition: z.ZodType<
  External$PortalResourceScheduleUpdateAtPeriodEndCondition, // output type of this zod object
  z.ZodTypeDef,
  PortalResourceScheduleUpdateAtPeriodEndCondition // the object to be transformed
> = z
  .object({
    type: z.enum(["decreasing_item_amount", "shortening_interval"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$PortalResourceScheduleUpdateAtPeriodEndCondition = {
  in: SchemaIn$PortalResourceScheduleUpdateAtPeriodEndCondition,
  out: SchemaOut$PortalResourceScheduleUpdateAtPeriodEndCondition,
};
