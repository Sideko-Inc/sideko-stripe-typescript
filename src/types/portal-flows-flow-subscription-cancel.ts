import {
  External$PortalFlowsRetention,
  PortalFlowsRetention,
  Schemas$PortalFlowsRetention,
} from "./portal-flows-retention";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsFlowSubscriptionCancel = {
  retention?: PortalFlowsRetention | undefined;
  /**
   * The ID of the subscription to be canceled.
   */
  subscription: string;
};

/**
 * @internal
 * PortalFlowsFlowSubscriptionCancel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsFlowSubscriptionCancel = {
  retention?: External$PortalFlowsRetention | undefined;
  subscription: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsFlowSubscriptionCancel
 */
const SchemaIn$PortalFlowsFlowSubscriptionCancel: z.ZodType<
  PortalFlowsFlowSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    retention: Schemas$PortalFlowsRetention.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsFlowSubscriptionCancel
 */
const SchemaOut$PortalFlowsFlowSubscriptionCancel: z.ZodType<
  External$PortalFlowsFlowSubscriptionCancel, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsFlowSubscriptionCancel // the object to be transformed
> = z
  .object({
    retention: Schemas$PortalFlowsRetention.out.optional(),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      retention: "retention",
      subscription: "subscription",
    });
  });

export const Schemas$PortalFlowsFlowSubscriptionCancel = {
  in: SchemaIn$PortalFlowsFlowSubscriptionCancel,
  out: SchemaOut$PortalFlowsFlowSubscriptionCancel,
};
