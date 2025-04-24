import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason,
} from "./billing-portal-configuration-update-body-features-subscription-cancel-cancellation-reason";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel = {
  cancellationReason?:
    | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason
    | undefined;
  enabled?: boolean | undefined;
  mode?: ("at_period_end" | "immediately") | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel =
  {
    cancellation_reason?:
      | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason
      | undefined;
    enabled?: boolean | undefined;
    mode?: ("at_period_end" | "immediately") | undefined;
    proration_behavior?:
      | ("always_invoice" | "create_prorations" | "none")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_reason:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason.in.optional(),
    enabled: z.boolean().optional(),
    mode: z.enum(["at_period_end", "immediately"]).optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel // the object to be transformed
> = z
  .object({
    cancellationReason:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason.out.optional(),
    enabled: z.boolean().optional(),
    mode: z.enum(["at_period_end", "immediately"]).optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationReason: "cancellation_reason",
      enabled: "enabled",
      mode: "mode",
      prorationBehavior: "proration_behavior",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel,
  };
