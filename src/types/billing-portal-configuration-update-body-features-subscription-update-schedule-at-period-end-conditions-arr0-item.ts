import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item =
  {
    type: "decreasing_item_amount" | "shortening_interval";
  };

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item =
  {
    type: "decreasing_item_amount" | "shortening_interval";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item // the object to be transformed
> = z
  .object({
    type: z.enum(["decreasing_item_amount", "shortening_interval"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item,
  };
