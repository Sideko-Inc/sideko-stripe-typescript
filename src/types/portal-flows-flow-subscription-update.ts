import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsFlowSubscriptionUpdate = {
  /**
   * The ID of the subscription to be updated.
   */
  subscription: string;
};

/**
 * @internal
 * PortalFlowsFlowSubscriptionUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsFlowSubscriptionUpdate = {
  subscription: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsFlowSubscriptionUpdate
 */
const SchemaIn$PortalFlowsFlowSubscriptionUpdate: z.ZodType<
  PortalFlowsFlowSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsFlowSubscriptionUpdate
 */
const SchemaOut$PortalFlowsFlowSubscriptionUpdate: z.ZodType<
  External$PortalFlowsFlowSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsFlowSubscriptionUpdate // the object to be transformed
> = z
  .object({
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
    });
  });

export const Schemas$PortalFlowsFlowSubscriptionUpdate = {
  in: SchemaIn$PortalFlowsFlowSubscriptionUpdate,
  out: SchemaOut$PortalFlowsFlowSubscriptionUpdate,
};
