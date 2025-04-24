import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleReleaseBody
 */
export type SubscriptionScheduleReleaseBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Keep any cancellation on the subscription that the schedule has set
   */
  preserveCancelDate?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleReleaseBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleReleaseBody = {
  expand?: string[] | undefined;
  preserve_cancel_date?: boolean | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | External$SubscriptionScheduleReleaseBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleReleaseBody
 */
const SchemaIn$SubscriptionScheduleReleaseBody: z.ZodType<
  SubscriptionScheduleReleaseBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    preserve_cancel_date: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      preserve_cancel_date: "preserveCancelDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleReleaseBody
 */
const SchemaOut$SubscriptionScheduleReleaseBody: z.ZodType<
  External$SubscriptionScheduleReleaseBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleReleaseBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    preserveCancelDate: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      preserveCancelDate: "preserve_cancel_date",
    });
  });

export const Schemas$SubscriptionScheduleReleaseBody = {
  in: SchemaIn$SubscriptionScheduleReleaseBody,
  out: SchemaOut$SubscriptionScheduleReleaseBody,
};
