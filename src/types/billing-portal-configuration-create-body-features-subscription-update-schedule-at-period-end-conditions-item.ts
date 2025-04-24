import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem =
  {
    type: "decreasing_item_amount" | "shortening_interval";
  };

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem =
  {
    type: "decreasing_item_amount" | "shortening_interval";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem // the object to be transformed
> = z
  .object({
    type: z.enum(["decreasing_item_amount", "shortening_interval"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem,
  };
