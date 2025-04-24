import {
  External$PortalResourceScheduleUpdateAtPeriodEndCondition,
  PortalResourceScheduleUpdateAtPeriodEndCondition,
  Schemas$PortalResourceScheduleUpdateAtPeriodEndCondition,
} from "./portal-resource-schedule-update-at-period-end-condition";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalResourceScheduleUpdateAtPeriodEnd = {
  /**
   * List of conditions. When any condition is true, an update will be scheduled at the end of the current period.
   */
  conditions: PortalResourceScheduleUpdateAtPeriodEndCondition[];
};

/**
 * @internal
 * PortalResourceScheduleUpdateAtPeriodEnd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalResourceScheduleUpdateAtPeriodEnd = {
  conditions: External$PortalResourceScheduleUpdateAtPeriodEndCondition[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalResourceScheduleUpdateAtPeriodEnd
 */
const SchemaIn$PortalResourceScheduleUpdateAtPeriodEnd: z.ZodType<
  PortalResourceScheduleUpdateAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    conditions: z.array(
      Schemas$PortalResourceScheduleUpdateAtPeriodEndCondition.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalResourceScheduleUpdateAtPeriodEnd
 */
const SchemaOut$PortalResourceScheduleUpdateAtPeriodEnd: z.ZodType<
  External$PortalResourceScheduleUpdateAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  PortalResourceScheduleUpdateAtPeriodEnd // the object to be transformed
> = z
  .object({
    conditions: z.array(
      Schemas$PortalResourceScheduleUpdateAtPeriodEndCondition.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

export const Schemas$PortalResourceScheduleUpdateAtPeriodEnd = {
  in: SchemaIn$PortalResourceScheduleUpdateAtPeriodEnd,
  out: SchemaOut$PortalResourceScheduleUpdateAtPeriodEnd,
};
