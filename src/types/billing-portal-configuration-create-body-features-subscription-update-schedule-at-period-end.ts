import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem,
} from "./billing-portal-configuration-create-body-features-subscription-update-schedule-at-period-end-conditions-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    conditions?:
      | BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem[]
      | undefined;
  };

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    conditions?:
      | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem[]
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    conditions: z
      .array(
        Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem.in,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd // the object to be transformed
> = z
  .object({
    conditions: z
      .array(
        Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsItem.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  };
