import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemDeleteBody
 */
export type SubscriptionItemDeleteBody = {
  /**
   * Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
   */
  clearUsage?: boolean | undefined;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  /**
   * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
   */
  prorationDate?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionItemDeleteBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemDeleteBody = {
  clear_usage?: boolean | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | External$SubscriptionItemDeleteBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemDeleteBody
 */
const SchemaIn$SubscriptionItemDeleteBody: z.ZodType<
  SubscriptionItemDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clear_usage: z.boolean().optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      clear_usage: "clearUsage",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemDeleteBody
 */
const SchemaOut$SubscriptionItemDeleteBody: z.ZodType<
  External$SubscriptionItemDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemDeleteBody // the object to be transformed
> = z
  .object({
    clearUsage: z.boolean().optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      clearUsage: "clear_usage",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
    });
  });

export const Schemas$SubscriptionItemDeleteBody = {
  in: SchemaIn$SubscriptionItemDeleteBody,
  out: SchemaOut$SubscriptionItemDeleteBody,
};
