import {
  External$SubscriptionScheduleUpdateBodyDefaultSettings,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettings,
  SubscriptionScheduleUpdateBodyDefaultSettings,
} from "./subscription-schedule-update-body-default-settings";
import {
  External$SubscriptionScheduleUpdateBodyMetadataObj0,
  Schemas$SubscriptionScheduleUpdateBodyMetadataObj0,
  SubscriptionScheduleUpdateBodyMetadataObj0,
} from "./subscription-schedule-update-body-metadata-obj0";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItem,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItem,
  SubscriptionScheduleUpdateBodyPhasesItem,
} from "./subscription-schedule-update-body-phases-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBody
 */
export type SubscriptionScheduleUpdateBody = {
  /**
   * Object representing the subscription schedule's default settings.
   */
  defaultSettings?: SubscriptionScheduleUpdateBodyDefaultSettings | undefined;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SubscriptionScheduleUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
   */
  phases?: SubscriptionScheduleUpdateBodyPhasesItem[] | undefined;
  /**
   * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (SubscriptionScheduleUpdateBodyDefaultSettings | undefined)
    | (("cancel" | "none" | "release" | "renew") | undefined)
    | (string[] | undefined)
    | ((SubscriptionScheduleUpdateBodyMetadataObj0 | string) | undefined)
    | (SubscriptionScheduleUpdateBodyPhasesItem[] | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBody = {
  default_settings?:
    | External$SubscriptionScheduleUpdateBodyDefaultSettings
    | undefined;
  end_behavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$SubscriptionScheduleUpdateBodyMetadataObj0 | string)
    | undefined;
  phases?: External$SubscriptionScheduleUpdateBodyPhasesItem[] | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;

  [additionalProperty: string]:
    | (External$SubscriptionScheduleUpdateBodyDefaultSettings | undefined)
    | (("cancel" | "none" | "release" | "renew") | undefined)
    | (string[] | undefined)
    | (
        | (External$SubscriptionScheduleUpdateBodyMetadataObj0 | string)
        | undefined
      )
    | (External$SubscriptionScheduleUpdateBodyPhasesItem[] | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | External$SubscriptionScheduleUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBody
 */
const SchemaIn$SubscriptionScheduleUpdateBody: z.ZodType<
  SubscriptionScheduleUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_settings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettings.in.optional(),
    end_behavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleUpdateBodyPhasesItem.in)
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      default_settings: "defaultSettings",
      end_behavior: "endBehavior",
      expand: "expand",
      metadata: "metadata",
      phases: "phases",
      proration_behavior: "prorationBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBody
 */
const SchemaOut$SubscriptionScheduleUpdateBody: z.ZodType<
  External$SubscriptionScheduleUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBody // the object to be transformed
> = z
  .object({
    defaultSettings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettings.out.optional(),
    endBehavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleUpdateBodyPhasesItem.out)
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      defaultSettings: "default_settings",
      endBehavior: "end_behavior",
      expand: "expand",
      metadata: "metadata",
      phases: "phases",
      prorationBehavior: "proration_behavior",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBody = {
  in: SchemaIn$SubscriptionScheduleUpdateBody,
  out: SchemaOut$SubscriptionScheduleUpdateBody,
};
