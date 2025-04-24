import {
  External$PortalResourceScheduleUpdateAtPeriodEnd,
  PortalResourceScheduleUpdateAtPeriodEnd,
  Schemas$PortalResourceScheduleUpdateAtPeriodEnd,
} from "./portal-resource-schedule-update-at-period-end";
import {
  External$PortalSubscriptionUpdateProduct,
  PortalSubscriptionUpdateProduct,
  Schemas$PortalSubscriptionUpdateProduct,
} from "./portal-subscription-update-product";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalSubscriptionUpdate = {
  /**
   * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
   */
  defaultAllowedUpdates: ("price" | "promotion_code" | "quantity")[];
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * The list of up to 10 products that support subscription updates.
   */
  products?: PortalSubscriptionUpdateProduct[] | null | undefined;
  /**
   * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
   */
  prorationBehavior: "always_invoice" | "create_prorations" | "none";
  scheduleAtPeriodEnd: PortalResourceScheduleUpdateAtPeriodEnd;
};

/**
 * @internal
 * PortalSubscriptionUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalSubscriptionUpdate = {
  default_allowed_updates: ("price" | "promotion_code" | "quantity")[];
  enabled: boolean;
  products?: External$PortalSubscriptionUpdateProduct[] | null | undefined;
  proration_behavior: "always_invoice" | "create_prorations" | "none";
  schedule_at_period_end: External$PortalResourceScheduleUpdateAtPeriodEnd;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalSubscriptionUpdate
 */
const SchemaIn$PortalSubscriptionUpdate: z.ZodType<
  PortalSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_allowed_updates: z.array(
      z.enum(["price", "promotion_code", "quantity"]),
    ),
    enabled: z.boolean(),
    products: z
      .array(Schemas$PortalSubscriptionUpdateProduct.in)
      .nullable()
      .optional(),
    proration_behavior: z.enum(["always_invoice", "create_prorations", "none"]),
    schedule_at_period_end: Schemas$PortalResourceScheduleUpdateAtPeriodEnd.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalSubscriptionUpdate
 */
const SchemaOut$PortalSubscriptionUpdate: z.ZodType<
  External$PortalSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  PortalSubscriptionUpdate // the object to be transformed
> = z
  .object({
    defaultAllowedUpdates: z.array(
      z.enum(["price", "promotion_code", "quantity"]),
    ),
    enabled: z.boolean(),
    products: z
      .array(Schemas$PortalSubscriptionUpdateProduct.out)
      .nullable()
      .optional(),
    prorationBehavior: z.enum(["always_invoice", "create_prorations", "none"]),
    scheduleAtPeriodEnd: Schemas$PortalResourceScheduleUpdateAtPeriodEnd.out,
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

export const Schemas$PortalSubscriptionUpdate = {
  in: SchemaIn$PortalSubscriptionUpdate,
  out: SchemaOut$PortalSubscriptionUpdate,
};
