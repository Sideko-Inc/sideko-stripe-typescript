import {
  BillingAlertCreateBodyUsageThreshold,
  External$BillingAlertCreateBodyUsageThreshold,
  Schemas$BillingAlertCreateBodyUsageThreshold,
} from "./billing-alert-create-body-usage-threshold";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingAlertCreateBody
 */
export type BillingAlertCreateBody = {
  /**
   * The type of alert to create.
   */
  alertType: "usage_threshold";
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The title of the alert.
   */
  title: string;
  /**
   * The configuration of the usage threshold.
   */
  usageThreshold?: BillingAlertCreateBodyUsageThreshold | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | "usage_threshold"
    | (string[] | undefined)
    | string
    | (BillingAlertCreateBodyUsageThreshold | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingAlertCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingAlertCreateBody = {
  alert_type: "usage_threshold";
  expand?: string[] | undefined;
  title: string;
  usage_threshold?: External$BillingAlertCreateBodyUsageThreshold | undefined;

  [additionalProperty: string]:
    | "usage_threshold"
    | (string[] | undefined)
    | string
    | (External$BillingAlertCreateBodyUsageThreshold | undefined)
    | External$BillingAlertCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingAlertCreateBody
 */
const SchemaIn$BillingAlertCreateBody: z.ZodType<
  BillingAlertCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alert_type: z.enum(["usage_threshold"]),
    expand: z.array(z.string()).optional(),
    title: z.string(),
    usage_threshold: Schemas$BillingAlertCreateBodyUsageThreshold.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alert_type: "alertType",
      expand: "expand",
      title: "title",
      usage_threshold: "usageThreshold",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingAlertCreateBody
 */
const SchemaOut$BillingAlertCreateBody: z.ZodType<
  External$BillingAlertCreateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingAlertCreateBody // the object to be transformed
> = z
  .object({
    alertType: z.enum(["usage_threshold"]),
    expand: z.array(z.string()).optional(),
    title: z.string(),
    usageThreshold: Schemas$BillingAlertCreateBodyUsageThreshold.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alertType: "alert_type",
      expand: "expand",
      title: "title",
      usageThreshold: "usage_threshold",
    });
  });

export const Schemas$BillingAlertCreateBody = {
  in: SchemaIn$BillingAlertCreateBody,
  out: SchemaOut$BillingAlertCreateBody,
};
