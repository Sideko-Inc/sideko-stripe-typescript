import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Filter subscriptions by their automatic tax settings.
 */
export type SubscriptionListAutomaticTax = {
  enabled: boolean;
};

/**
 * @internal
 * SubscriptionListAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionListAutomaticTax = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionListAutomaticTax
 */
const SchemaIn$SubscriptionListAutomaticTax: z.ZodType<
  SubscriptionListAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionListAutomaticTax
 */
const SchemaOut$SubscriptionListAutomaticTax: z.ZodType<
  External$SubscriptionListAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionListAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$SubscriptionListAutomaticTax = {
  in: SchemaIn$SubscriptionListAutomaticTax,
  out: SchemaOut$SubscriptionListAutomaticTax,
};
