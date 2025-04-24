import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedApplication,
  External$DeletedApplication,
  Schemas$DeletedApplication,
} from "./deleted-application";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$Subscription,
  Schemas$Subscription,
  Subscription,
} from "./subscription";
import {
  External$SubscriptionScheduleCurrentPhase,
  Schemas$SubscriptionScheduleCurrentPhase,
  SubscriptionScheduleCurrentPhase,
} from "./subscription-schedule-current-phase";
import {
  External$SubscriptionScheduleMetadata,
  Schemas$SubscriptionScheduleMetadata,
  SubscriptionScheduleMetadata,
} from "./subscription-schedule-metadata";
import {
  External$SubscriptionSchedulePhaseConfiguration,
  Schemas$SubscriptionSchedulePhaseConfiguration,
  SubscriptionSchedulePhaseConfiguration,
} from "./subscription-schedule-phase-configuration";
import {
  External$SubscriptionSchedulesResourceDefaultSettings,
  Schemas$SubscriptionSchedulesResourceDefaultSettings,
  SubscriptionSchedulesResourceDefaultSettings,
} from "./subscription-schedules-resource-default-settings";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
 *
 * Related guide: [Subscription schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules)
 */
export type SubscriptionSchedule1 = {
  /**
   * ID of the Connect Application that created the schedule.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  /**
   * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number | null | undefined;
  /**
   * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
   */
  completedAt?: number | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  currentPhase?: SubscriptionScheduleCurrentPhase | undefined;
  /**
   * ID of the customer who owns the subscription schedule.
   */
  customer: string | Customer | DeletedCustomer;
  defaultSettings: SubscriptionSchedulesResourceDefaultSettings;
  /**
   * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
   */
  endBehavior: "cancel" | "none" | "release" | "renew";
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: SubscriptionScheduleMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "subscription_schedule";
  /**
   * Configuration for the subscription schedule's phases.
   */
  phases: SubscriptionSchedulePhaseConfiguration[];
  /**
   * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
   */
  releasedAt?: number | null | undefined;
  /**
   * ID of the subscription once managed by the subscription schedule (if it is released).
   */
  releasedSubscription?: string | null | undefined;
  /**
   * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
   */
  status: "active" | "canceled" | "completed" | "not_started" | "released";
  /**
   * ID of the subscription managed by the subscription schedule.
   */
  subscription?: (string | Subscription) | undefined;
  /**
   * ID of the test clock this subscription schedule belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
};

/**
 * @internal
 * SubscriptionSchedule1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionSchedule1 = {
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  canceled_at?: number | null | undefined;
  completed_at?: number | null | undefined;
  created: number;
  current_phase?: External$SubscriptionScheduleCurrentPhase | undefined;
  customer: string | External$Customer | External$DeletedCustomer;
  default_settings: External$SubscriptionSchedulesResourceDefaultSettings;
  end_behavior: "cancel" | "none" | "release" | "renew";
  id: string;
  livemode: boolean;
  metadata?: External$SubscriptionScheduleMetadata | null | undefined;
  object: "subscription_schedule";
  phases: External$SubscriptionSchedulePhaseConfiguration[];
  released_at?: number | null | undefined;
  released_subscription?: string | null | undefined;
  status: "active" | "canceled" | "completed" | "not_started" | "released";
  subscription?: (string | External$Subscription) | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionSchedule1
 */
const SchemaIn$SubscriptionSchedule1: z.ZodType<
  SubscriptionSchedule1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    canceled_at: z.number().int().nullable().optional(),
    completed_at: z.number().int().nullable().optional(),
    created: z.number().int(),
    current_phase: Schemas$SubscriptionScheduleCurrentPhase.in.optional(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    default_settings: z.lazy(
      () => Schemas$SubscriptionSchedulesResourceDefaultSettings.in,
    ),
    end_behavior: z.enum(["cancel", "none", "release", "renew"]),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$SubscriptionScheduleMetadata.in.nullable().optional(),
    object: z.enum(["subscription_schedule"]),
    phases: z.array(
      z.lazy(() => Schemas$SubscriptionSchedulePhaseConfiguration.in),
    ),
    released_at: z.number().int().nullable().optional(),
    released_subscription: z.string().nullable().optional(),
    status: z.enum([
      "active",
      "canceled",
      "completed",
      "not_started",
      "released",
    ]),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.in)])
      .optional(),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      canceled_at: "canceledAt",
      completed_at: "completedAt",
      created: "created",
      current_phase: "currentPhase",
      customer: "customer",
      default_settings: "defaultSettings",
      end_behavior: "endBehavior",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      phases: "phases",
      released_at: "releasedAt",
      released_subscription: "releasedSubscription",
      status: "status",
      subscription: "subscription",
      test_clock: "testClock",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionSchedule1
 */
const SchemaOut$SubscriptionSchedule1: z.ZodType<
  External$SubscriptionSchedule1, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionSchedule1 // the object to be transformed
> = z
  .object({
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    canceledAt: z.number().int().nullable().optional(),
    completedAt: z.number().int().nullable().optional(),
    created: z.number().int(),
    currentPhase: Schemas$SubscriptionScheduleCurrentPhase.out.optional(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    defaultSettings: z.lazy(
      () => Schemas$SubscriptionSchedulesResourceDefaultSettings.out,
    ),
    endBehavior: z.enum(["cancel", "none", "release", "renew"]),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$SubscriptionScheduleMetadata.out.nullable().optional(),
    object: z.enum(["subscription_schedule"]),
    phases: z.array(
      z.lazy(() => Schemas$SubscriptionSchedulePhaseConfiguration.out),
    ),
    releasedAt: z.number().int().nullable().optional(),
    releasedSubscription: z.string().nullable().optional(),
    status: z.enum([
      "active",
      "canceled",
      "completed",
      "not_started",
      "released",
    ]),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.out)])
      .optional(),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      canceledAt: "canceled_at",
      completedAt: "completed_at",
      created: "created",
      currentPhase: "current_phase",
      customer: "customer",
      defaultSettings: "default_settings",
      endBehavior: "end_behavior",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      phases: "phases",
      releasedAt: "released_at",
      releasedSubscription: "released_subscription",
      status: "status",
      subscription: "subscription",
      testClock: "test_clock",
    });
  });

export const Schemas$SubscriptionSchedule1 = {
  in: SchemaIn$SubscriptionSchedule1,
  out: SchemaOut$SubscriptionSchedule1,
};
