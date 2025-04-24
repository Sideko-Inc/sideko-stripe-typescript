import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionResumeBody
 */
export type SubscriptionResumeBody = {
  /**
   * The billing cycle anchor that applies when the subscription is resumed. Either `now` or `unchanged`. The default is `now`. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: ("now" | "unchanged") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  /**
   * If set, the proration will be calculated as though the subscription was resumed at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
   */
  prorationDate?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("now" | "unchanged") | undefined)
    | (string[] | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionResumeBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionResumeBody = {
  billing_cycle_anchor?: ("now" | "unchanged") | undefined;
  expand?: string[] | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;

  [additionalProperty: string]:
    | (("now" | "unchanged") | undefined)
    | (string[] | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | External$SubscriptionResumeBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionResumeBody
 */
const SchemaIn$SubscriptionResumeBody: z.ZodType<
  SubscriptionResumeBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_cycle_anchor: z.enum(["now", "unchanged"]).optional(),
    expand: z.array(z.string()).optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      billing_cycle_anchor: "billingCycleAnchor",
      expand: "expand",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionResumeBody
 */
const SchemaOut$SubscriptionResumeBody: z.ZodType<
  External$SubscriptionResumeBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionResumeBody // the object to be transformed
> = z
  .object({
    billingCycleAnchor: z.enum(["now", "unchanged"]).optional(),
    expand: z.array(z.string()).optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      billingCycleAnchor: "billing_cycle_anchor",
      expand: "expand",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
    });
  });

export const Schemas$SubscriptionResumeBody = {
  in: SchemaIn$SubscriptionResumeBody,
  out: SchemaOut$SubscriptionResumeBody,
};
