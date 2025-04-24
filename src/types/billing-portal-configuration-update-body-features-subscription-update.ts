import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item,
} from "./billing-portal-configuration-update-body-features-subscription-update-products-arr0-item";
import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
} from "./billing-portal-configuration-update-body-features-subscription-update-schedule-at-period-end";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate = {
  defaultAllowedUpdates?:
    | (("price" | "promotion_code" | "quantity")[] | string)
    | undefined;
  enabled?: boolean | undefined;
  products?:
    | (
        | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item[]
        | string
      )
    | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  scheduleAtPeriodEnd?:
    | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate =
  {
    default_allowed_updates?:
      | (("price" | "promotion_code" | "quantity")[] | string)
      | undefined;
    enabled?: boolean | undefined;
    products?:
      | (
          | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item[]
          | string
        )
      | undefined;
    proration_behavior?:
      | ("always_invoice" | "create_prorations" | "none")
      | undefined;
    schedule_at_period_end?:
      | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_allowed_updates: z
      .union([
        z.array(z.enum(["price", "promotion_code", "quantity"])),
        z.string(),
      ])
      .optional(),
    enabled: z.boolean().optional(),
    products: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    schedule_at_period_end:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_allowed_updates: "defaultAllowedUpdates",
      enabled: "enabled",
      products: "products",
      proration_behavior: "prorationBehavior",
      schedule_at_period_end: "scheduleAtPeriodEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate // the object to be transformed
> = z
  .object({
    defaultAllowedUpdates: z
      .union([
        z.array(z.enum(["price", "promotion_code", "quantity"])),
        z.string(),
      ])
      .optional(),
    enabled: z.boolean().optional(),
    products: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateProductsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    scheduleAtPeriodEnd:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultAllowedUpdates: "default_allowed_updates",
      enabled: "enabled",
      products: "products",
      prorationBehavior: "proration_behavior",
      scheduleAtPeriodEnd: "schedule_at_period_end",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate,
  };
