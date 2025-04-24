import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item,
} from "./billing-portal-configuration-update-body-features-subscription-update-schedule-at-period-end-conditions-arr0-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    conditions?:
      | (
          | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item[]
          | string
        )
      | undefined;
  };

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    conditions?:
      | (
          | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item[]
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    conditions: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd // the object to be transformed
> = z
  .object({
    conditions: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEndConditionsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      conditions: "conditions",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  };
