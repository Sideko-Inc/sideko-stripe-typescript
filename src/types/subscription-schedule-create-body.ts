import {
  External$SubscriptionScheduleCreateBodyDefaultSettings,
  Schemas$SubscriptionScheduleCreateBodyDefaultSettings,
  SubscriptionScheduleCreateBodyDefaultSettings,
} from "./subscription-schedule-create-body-default-settings";
import {
  External$SubscriptionScheduleCreateBodyMetadataObj0,
  Schemas$SubscriptionScheduleCreateBodyMetadataObj0,
  SubscriptionScheduleCreateBodyMetadataObj0,
} from "./subscription-schedule-create-body-metadata-obj0";
import {
  External$SubscriptionScheduleCreateBodyPhasesItem,
  Schemas$SubscriptionScheduleCreateBodyPhasesItem,
  SubscriptionScheduleCreateBodyPhasesItem,
} from "./subscription-schedule-create-body-phases-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBody
 */
export type SubscriptionScheduleCreateBody = {
  /**
   * The identifier of the customer to create the subscription schedule for.
   */
  customer?: string | undefined;
  /**
   * Object representing the subscription schedule's default settings.
   */
  defaultSettings?: SubscriptionScheduleCreateBodyDefaultSettings | undefined;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
   */
  fromSubscription?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SubscriptionScheduleCreateBodyMetadataObj0 | string) | undefined;
  /**
   * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
   */
  phases?: SubscriptionScheduleCreateBodyPhasesItem[] | undefined;
  /**
   * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
   */
  startDate?: (number | "now") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (SubscriptionScheduleCreateBodyDefaultSettings | undefined)
    | (("cancel" | "none" | "release" | "renew") | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((SubscriptionScheduleCreateBodyMetadataObj0 | string) | undefined)
    | (SubscriptionScheduleCreateBodyPhasesItem[] | undefined)
    | ((number | "now") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBody = {
  customer?: string | undefined;
  default_settings?:
    | External$SubscriptionScheduleCreateBodyDefaultSettings
    | undefined;
  end_behavior?: ("cancel" | "none" | "release" | "renew") | undefined;
  expand?: string[] | undefined;
  from_subscription?: string | undefined;
  metadata?:
    | (External$SubscriptionScheduleCreateBodyMetadataObj0 | string)
    | undefined;
  phases?: External$SubscriptionScheduleCreateBodyPhasesItem[] | undefined;
  start_date?: (number | "now") | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (External$SubscriptionScheduleCreateBodyDefaultSettings | undefined)
    | (("cancel" | "none" | "release" | "renew") | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (
        | (External$SubscriptionScheduleCreateBodyMetadataObj0 | string)
        | undefined
      )
    | (External$SubscriptionScheduleCreateBodyPhasesItem[] | undefined)
    | ((number | "now") | undefined)
    | External$SubscriptionScheduleCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBody
 */
const SchemaIn$SubscriptionScheduleCreateBody: z.ZodType<
  SubscriptionScheduleCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string().optional(),
    default_settings:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettings.in.optional(),
    end_behavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    from_subscription: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleCreateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleCreateBodyPhasesItem.in)
      .optional(),
    start_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      default_settings: "defaultSettings",
      end_behavior: "endBehavior",
      expand: "expand",
      from_subscription: "fromSubscription",
      metadata: "metadata",
      phases: "phases",
      start_date: "startDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBody
 */
const SchemaOut$SubscriptionScheduleCreateBody: z.ZodType<
  External$SubscriptionScheduleCreateBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBody // the object to be transformed
> = z
  .object({
    customer: z.string().optional(),
    defaultSettings:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettings.out.optional(),
    endBehavior: z.enum(["cancel", "none", "release", "renew"]).optional(),
    expand: z.array(z.string()).optional(),
    fromSubscription: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionScheduleCreateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    phases: z
      .array(Schemas$SubscriptionScheduleCreateBodyPhasesItem.out)
      .optional(),
    startDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      defaultSettings: "default_settings",
      endBehavior: "end_behavior",
      expand: "expand",
      fromSubscription: "from_subscription",
      metadata: "metadata",
      phases: "phases",
      startDate: "start_date",
    });
  });

export const Schemas$SubscriptionScheduleCreateBody = {
  in: SchemaIn$SubscriptionScheduleCreateBody,
  out: SchemaOut$SubscriptionScheduleCreateBody,
};
