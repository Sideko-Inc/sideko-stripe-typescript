import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason
 */
export type BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    enabled: boolean;
    options:
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
      | string;
  };

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    enabled: boolean;
    options:
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
      | string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    options: z.union([
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
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    options: z.union([
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
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancelCancellationReason,
  };
