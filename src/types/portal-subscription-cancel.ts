import {
  External$PortalSubscriptionCancellationReason,
  PortalSubscriptionCancellationReason,
  Schemas$PortalSubscriptionCancellationReason,
} from "./portal-subscription-cancellation-reason";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalSubscriptionCancel = {
  cancellationReason: PortalSubscriptionCancellationReason;
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * Whether to cancel subscriptions immediately or at the end of the billing period.
   */
  mode: "at_period_end" | "immediately";
  /**
   * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
   */
  prorationBehavior: "always_invoice" | "create_prorations" | "none";
};

/**
 * @internal
 * PortalSubscriptionCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalSubscriptionCancel = {
  cancellation_reason: External$PortalSubscriptionCancellationReason;
  enabled: boolean;
  mode: "at_period_end" | "immediately";
  proration_behavior: "always_invoice" | "create_prorations" | "none";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalSubscriptionCancel
 */
const SchemaIn$PortalSubscriptionCancel: z.ZodType<
  PortalSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_reason: Schemas$PortalSubscriptionCancellationReason.in,
    enabled: z.boolean(),
    mode: z.enum(["at_period_end", "immediately"]),
    proration_behavior: z.enum(["always_invoice", "create_prorations", "none"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancellation_reason: "cancellationReason",
      enabled: "enabled",
      mode: "mode",
      proration_behavior: "prorationBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalSubscriptionCancel
 */
const SchemaOut$PortalSubscriptionCancel: z.ZodType<
  External$PortalSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  PortalSubscriptionCancel // the object to be transformed
> = z
  .object({
    cancellationReason: Schemas$PortalSubscriptionCancellationReason.out,
    enabled: z.boolean(),
    mode: z.enum(["at_period_end", "immediately"]),
    prorationBehavior: z.enum(["always_invoice", "create_prorations", "none"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationReason: "cancellation_reason",
      enabled: "enabled",
      mode: "mode",
      prorationBehavior: "proration_behavior",
    });
  });

export const Schemas$PortalSubscriptionCancel = {
  in: SchemaIn$PortalSubscriptionCancel,
  out: SchemaOut$PortalSubscriptionCancel,
};
