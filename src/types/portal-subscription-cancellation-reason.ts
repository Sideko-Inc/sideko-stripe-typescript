import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalSubscriptionCancellationReason = {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * Which cancellation reasons will be given as options to the customer.
   */
  options: (
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "other"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
  )[];
};

/**
 * @internal
 * PortalSubscriptionCancellationReason without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalSubscriptionCancellationReason = {
  enabled: boolean;
  options: (
    | "customer_service"
    | "low_quality"
    | "missing_features"
    | "other"
    | "switched_service"
    | "too_complex"
    | "too_expensive"
    | "unused"
  )[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalSubscriptionCancellationReason
 */
const SchemaIn$PortalSubscriptionCancellationReason: z.ZodType<
  PortalSubscriptionCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    options: z.array(
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalSubscriptionCancellationReason
 */
const SchemaOut$PortalSubscriptionCancellationReason: z.ZodType<
  External$PortalSubscriptionCancellationReason, // output type of this zod object
  z.ZodTypeDef,
  PortalSubscriptionCancellationReason // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    options: z.array(
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      options: "options",
    });
  });

export const Schemas$PortalSubscriptionCancellationReason = {
  in: SchemaIn$PortalSubscriptionCancellationReason,
  out: SchemaOut$PortalSubscriptionCancellationReason,
};
