import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason
 */
export type BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    enabled: boolean;
    options?:
      | (
          | (
              | "customer_service"
              | "low_quality"
              | "missing_features"
              | "other"
              | "switched_service"
              | "too_complex"
              | "too_expensive"
              | "unused"
            )[]
          | string
        )
      | undefined;
  };

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    enabled: boolean;
    options?:
      | (
          | (
              | "customer_service"
              | "low_quality"
              | "missing_features"
              | "other"
              | "switched_service"
              | "too_complex"
              | "too_expensive"
              | "unused"
            )[]
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    options: z
      .union([
        z.array(
          z.enum([
            "customer_service",
            "low_quality",
            "missing_features",
            "other",
            "switched_service",
            "too_complex",
            "too_expensive",
            "unused",
          ]),
        ),
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    options: z
      .union([
        z.array(
          z.enum([
            "customer_service",
            "low_quality",
            "missing_features",
            "other",
            "switched_service",
            "too_complex",
            "too_expensive",
            "unused",
          ]),
        ),
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancelCancellationReason,
  };
