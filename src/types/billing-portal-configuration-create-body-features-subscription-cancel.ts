import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason,
} from "./billing-portal-configuration-create-body-features-subscription-cancel-cancellation-reason";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel = {
  cancellationReason?:
    | BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason
    | undefined;
  enabled: boolean;
  mode?: ("at_period_end" | "immediately") | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel =
  {
    cancellation_reason?:
      | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason
      | undefined;
    enabled: boolean;
    mode?: ("at_period_end" | "immediately") | undefined;
    proration_behavior?:
      | ("always_invoice" | "create_prorations" | "none")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_reason:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason.in.optional(),
    enabled: z.boolean(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel // the object to be transformed
> = z
  .object({
    cancellationReason:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason.out.optional(),
    enabled: z.boolean(),
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

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel,
  };
