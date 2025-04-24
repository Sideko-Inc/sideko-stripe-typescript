import {
  External$SubscriptionItem,
  Schemas$SubscriptionItem,
  SubscriptionItem,
} from "./subscription-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Pending Updates store the changes pending from a previous update that will be applied
 * to the Subscription upon successful payment.
 */
export type SubscriptionsResourcePendingUpdate = {
  /**
   * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
   */
  billingCycleAnchor?: number | null | undefined;
  /**
   * The point after which the changes reflected by this update will be discarded and no longer applied.
   */
  expiresAt: number;
  /**
   * List of subscription items, each with an attached plan, that will be set if the update is applied.
   */
  subscriptionItems?: SubscriptionItem[] | null | undefined;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
   */
  trialEnd?: number | null | undefined;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean | null | undefined;
};

/**
 * @internal
 * SubscriptionsResourcePendingUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsResourcePendingUpdate = {
  billing_cycle_anchor?: number | null | undefined;
  expires_at: number;
  subscription_items?: External$SubscriptionItem[] | null | undefined;
  trial_end?: number | null | undefined;
  trial_from_plan?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsResourcePendingUpdate
 */
const SchemaIn$SubscriptionsResourcePendingUpdate: z.ZodType<
  SubscriptionsResourcePendingUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_cycle_anchor: z.number().int().nullable().optional(),
    expires_at: z.number().int(),
    subscription_items: z
      .array(z.lazy(() => Schemas$SubscriptionItem.in))
      .nullable()
      .optional(),
    trial_end: z.number().int().nullable().optional(),
    trial_from_plan: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_cycle_anchor: "billingCycleAnchor",
      expires_at: "expiresAt",
      subscription_items: "subscriptionItems",
      trial_end: "trialEnd",
      trial_from_plan: "trialFromPlan",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsResourcePendingUpdate
 */
const SchemaOut$SubscriptionsResourcePendingUpdate: z.ZodType<
  External$SubscriptionsResourcePendingUpdate, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsResourcePendingUpdate // the object to be transformed
> = z
  .object({
    billingCycleAnchor: z.number().int().nullable().optional(),
    expiresAt: z.number().int(),
    subscriptionItems: z
      .array(z.lazy(() => Schemas$SubscriptionItem.out))
      .nullable()
      .optional(),
    trialEnd: z.number().int().nullable().optional(),
    trialFromPlan: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingCycleAnchor: "billing_cycle_anchor",
      expiresAt: "expires_at",
      subscriptionItems: "subscription_items",
      trialEnd: "trial_end",
      trialFromPlan: "trial_from_plan",
    });
  });

export const Schemas$SubscriptionsResourcePendingUpdate = {
  in: SchemaIn$SubscriptionsResourcePendingUpdate,
  out: SchemaOut$SubscriptionsResourcePendingUpdate,
};
