import {
  BillingPortalSessionCreateBodyFlowDataAfterCompletion,
  External$BillingPortalSessionCreateBodyFlowDataAfterCompletion,
  Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletion,
} from "./billing-portal-session-create-body-flow-data-after-completion";
import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancel,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel,
} from "./billing-portal-session-create-body-flow-data-subscription-cancel";
import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate,
} from "./billing-portal-session-create-body-flow-data-subscription-update";
import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm,
} from "./billing-portal-session-create-body-flow-data-subscription-update-confirm";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
 */
export type BillingPortalSessionCreateBodyFlowData = {
  afterCompletion?:
    | BillingPortalSessionCreateBodyFlowDataAfterCompletion
    | undefined;
  subscriptionCancel?:
    | BillingPortalSessionCreateBodyFlowDataSubscriptionCancel
    | undefined;
  subscriptionUpdate?:
    | BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate
    | undefined;
  subscriptionUpdateConfirm?:
    | BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm
    | undefined;
  type:
    | "payment_method_update"
    | "subscription_cancel"
    | "subscription_update"
    | "subscription_update_confirm";
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowData = {
  after_completion?:
    | External$BillingPortalSessionCreateBodyFlowDataAfterCompletion
    | undefined;
  subscription_cancel?:
    | External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel
    | undefined;
  subscription_update?:
    | External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate
    | undefined;
  subscription_update_confirm?:
    | External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm
    | undefined;
  type:
    | "payment_method_update"
    | "subscription_cancel"
    | "subscription_update"
    | "subscription_update_confirm";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowData
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowData: z.ZodType<
  BillingPortalSessionCreateBodyFlowData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_completion:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletion.in.optional(),
    subscription_cancel:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel.in.optional(),
    subscription_update:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate.in.optional(),
    subscription_update_confirm:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowData
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowData: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowData, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowData // the object to be transformed
> = z
  .object({
    afterCompletion:
      Schemas$BillingPortalSessionCreateBodyFlowDataAfterCompletion.out.optional(),
    subscriptionCancel:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel.out.optional(),
    subscriptionUpdate:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate.out.optional(),
    subscriptionUpdateConfirm:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm.out.optional(),
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

export const Schemas$BillingPortalSessionCreateBodyFlowData = {
  in: SchemaIn$BillingPortalSessionCreateBodyFlowData,
  out: SchemaOut$BillingPortalSessionCreateBodyFlowData,
};
