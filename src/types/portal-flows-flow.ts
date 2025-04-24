import {
  External$PortalFlowsFlowAfterCompletion,
  PortalFlowsFlowAfterCompletion,
  Schemas$PortalFlowsFlowAfterCompletion,
} from "./portal-flows-flow-after-completion";
import {
  External$PortalFlowsFlowSubscriptionCancel,
  PortalFlowsFlowSubscriptionCancel,
  Schemas$PortalFlowsFlowSubscriptionCancel,
} from "./portal-flows-flow-subscription-cancel";
import {
  External$PortalFlowsFlowSubscriptionUpdate,
  PortalFlowsFlowSubscriptionUpdate,
  Schemas$PortalFlowsFlowSubscriptionUpdate,
} from "./portal-flows-flow-subscription-update";
import {
  External$PortalFlowsFlowSubscriptionUpdateConfirm,
  PortalFlowsFlowSubscriptionUpdateConfirm,
  Schemas$PortalFlowsFlowSubscriptionUpdateConfirm,
} from "./portal-flows-flow-subscription-update-confirm";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsFlow = {
  afterCompletion: PortalFlowsFlowAfterCompletion;
  subscriptionCancel?: PortalFlowsFlowSubscriptionCancel | undefined;
  subscriptionUpdate?: PortalFlowsFlowSubscriptionUpdate | undefined;
  subscriptionUpdateConfirm?:
    | PortalFlowsFlowSubscriptionUpdateConfirm
    | undefined;
  /**
   * Type of flow that the customer will go through.
   */
  type:
    | "payment_method_update"
    | "subscription_cancel"
    | "subscription_update"
    | "subscription_update_confirm";
};

/**
 * @internal
 * PortalFlowsFlow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsFlow = {
  after_completion: External$PortalFlowsFlowAfterCompletion;
  subscription_cancel?: External$PortalFlowsFlowSubscriptionCancel | undefined;
  subscription_update?: External$PortalFlowsFlowSubscriptionUpdate | undefined;
  subscription_update_confirm?:
    | External$PortalFlowsFlowSubscriptionUpdateConfirm
    | undefined;
  type:
    | "payment_method_update"
    | "subscription_cancel"
    | "subscription_update"
    | "subscription_update_confirm";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsFlow
 */
const SchemaIn$PortalFlowsFlow: z.ZodType<
  PortalFlowsFlow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_completion: Schemas$PortalFlowsFlowAfterCompletion.in,
    subscription_cancel:
      Schemas$PortalFlowsFlowSubscriptionCancel.in.optional(),
    subscription_update:
      Schemas$PortalFlowsFlowSubscriptionUpdate.in.optional(),
    subscription_update_confirm:
      Schemas$PortalFlowsFlowSubscriptionUpdateConfirm.in.optional(),
    type: z.enum([
      "payment_method_update",
      "subscription_cancel",
      "subscription_update",
      "subscription_update_confirm",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      after_completion: "afterCompletion",
      subscription_cancel: "subscriptionCancel",
      subscription_update: "subscriptionUpdate",
      subscription_update_confirm: "subscriptionUpdateConfirm",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsFlow
 */
const SchemaOut$PortalFlowsFlow: z.ZodType<
  External$PortalFlowsFlow, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsFlow // the object to be transformed
> = z
  .object({
    afterCompletion: Schemas$PortalFlowsFlowAfterCompletion.out,
    subscriptionCancel:
      Schemas$PortalFlowsFlowSubscriptionCancel.out.optional(),
    subscriptionUpdate:
      Schemas$PortalFlowsFlowSubscriptionUpdate.out.optional(),
    subscriptionUpdateConfirm:
      Schemas$PortalFlowsFlowSubscriptionUpdateConfirm.out.optional(),
    type: z.enum([
      "payment_method_update",
      "subscription_cancel",
      "subscription_update",
      "subscription_update_confirm",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterCompletion: "after_completion",
      subscriptionCancel: "subscription_cancel",
      subscriptionUpdate: "subscription_update",
      subscriptionUpdateConfirm: "subscription_update_confirm",
      type: "type",
    });
  });

export const Schemas$PortalFlowsFlow = {
  in: SchemaIn$PortalFlowsFlow,
  out: SchemaOut$PortalFlowsFlow,
};
