import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionScheduleCurrentPhase = {
  /**
   * The end of this phase of the subscription schedule.
   */
  endDate: number;
  /**
   * The start of this phase of the subscription schedule.
   */
  startDate: number;
};

/**
 * @internal
 * SubscriptionScheduleCurrentPhase without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCurrentPhase = {
  end_date: number;
  start_date: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCurrentPhase
 */
const SchemaIn$SubscriptionScheduleCurrentPhase: z.ZodType<
  SubscriptionScheduleCurrentPhase, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_date: z.number().int(),
    start_date: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_date: "endDate",
      start_date: "startDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCurrentPhase
 */
const SchemaOut$SubscriptionScheduleCurrentPhase: z.ZodType<
  External$SubscriptionScheduleCurrentPhase, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCurrentPhase // the object to be transformed
> = z
  .object({
    endDate: z.number().int(),
    startDate: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endDate: "end_date",
      startDate: "start_date",
    });
  });

export const Schemas$SubscriptionScheduleCurrentPhase = {
  in: SchemaIn$SubscriptionScheduleCurrentPhase,
  out: SchemaOut$SubscriptionScheduleCurrentPhase,
};
