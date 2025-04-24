import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate = {
  subscription: string;
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate =
  {
    subscription: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate // the object to be transformed
> = z
  .object({
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdate,
  };
