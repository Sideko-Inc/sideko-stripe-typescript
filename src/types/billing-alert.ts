import {
  External$ThresholdsResourceUsageThresholdConfig,
  Schemas$ThresholdsResourceUsageThresholdConfig,
  ThresholdsResourceUsageThresholdConfig,
} from "./thresholds-resource-usage-threshold-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
 */
export type BillingAlert = {
  /**
   * Defines the type of the alert.
   */
  alertType: "usage_threshold";
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.alert";
  /**
   * Status of the alert. This can be active, inactive or archived.
   */
  status?: ("active" | "archived" | "inactive") | null | undefined;
  /**
   * Title of the alert.
   */
  title: string;
  /**
   * The usage threshold alert configuration enables setting up alerts for when a certain usage threshold on a specific meter is crossed.
   */
  usageThreshold?: ThresholdsResourceUsageThresholdConfig | undefined;
};

/**
 * @internal
 * BillingAlert without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingAlert = {
  alert_type: "usage_threshold";
  id: string;
  livemode: boolean;
  object: "billing.alert";
  status?: ("active" | "archived" | "inactive") | null | undefined;
  title: string;
  usage_threshold?: External$ThresholdsResourceUsageThresholdConfig | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingAlert
 */
const SchemaIn$BillingAlert: z.ZodType<
  BillingAlert, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alert_type: z.enum(["usage_threshold"]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.alert"]),
    status: z.enum(["active", "archived", "inactive"]).nullable().optional(),
    title: z.string(),
    usage_threshold: z.lazy(() =>
      Schemas$ThresholdsResourceUsageThresholdConfig.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alert_type: "alertType",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      title: "title",
      usage_threshold: "usageThreshold",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingAlert
 */
const SchemaOut$BillingAlert: z.ZodType<
  External$BillingAlert, // output type of this zod object
  z.ZodTypeDef,
  BillingAlert // the object to be transformed
> = z
  .object({
    alertType: z.enum(["usage_threshold"]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.alert"]),
    status: z.enum(["active", "archived", "inactive"]).nullable().optional(),
    title: z.string(),
    usageThreshold: z.lazy(() =>
      Schemas$ThresholdsResourceUsageThresholdConfig.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alertType: "alert_type",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      title: "title",
      usageThreshold: "usage_threshold",
    });
  });

export const Schemas$BillingAlert = {
  in: SchemaIn$BillingAlert,
  out: SchemaOut$BillingAlert,
};
