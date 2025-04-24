import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention,
} from "./billing-portal-session-create-body-flow-data-subscription-cancel-retention";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancel
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionCancel = {
  retention?:
    | BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention
    | undefined;
  subscription: string;
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel =
  {
    retention?:
      | External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention
      | undefined;
    subscription: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionCancel
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    retention:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention.in.optional(),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      retention: "retention",
      subscription: "subscription",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancel // the object to be transformed
> = z
  .object({
    retention:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention.out.optional(),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      retention: "retention",
      subscription: "subscription",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancel,
  };
