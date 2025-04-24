import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item,
} from "./billing-portal-configuration-create-body-features-subscription-update-products-arr0-item";
import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd,
} from "./billing-portal-configuration-create-body-features-subscription-update-schedule-at-period-end";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate = {
  defaultAllowedUpdates?:
    | (("price" | "promotion_code" | "quantity")[] | string)
    | undefined;
  enabled: boolean;
  products?:
    | (
        | BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item[]
        | string
      )
    | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  scheduleAtPeriodEnd?:
    | BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate =
  {
    default_allowed_updates?:
      | (("price" | "promotion_code" | "quantity")[] | string)
      | undefined;
    enabled: boolean;
    products?:
      | (
          | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item[]
          | string
        )
      | undefined;
    proration_behavior?:
      | ("always_invoice" | "create_prorations" | "none")
      | undefined;
    schedule_at_period_end?:
      | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate, // output type of this zod object
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
    enabled: z.boolean(),
    products: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    schedule_at_period_end:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate // the object to be transformed
> = z
  .object({
    defaultAllowedUpdates: z
      .union([
        z.array(z.enum(["price", "promotion_code", "quantity"])),
        z.string(),
      ])
      .optional(),
    enabled: z.boolean(),
    products: z
      .union([
        z.array(
          Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateProductsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    scheduleAtPeriodEnd:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdateScheduleAtPeriodEnd.out.optional(),
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

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate,
  };
