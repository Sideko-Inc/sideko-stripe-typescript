import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionAutomaticTax = {
  /**
   * If Stripe disabled automatic tax, this enum describes why.
   */
  disabledReason?: "requires_location_inputs" | null | undefined;
  /**
   * Whether Stripe automatically computes tax on this subscription.
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
};

/**
 * @internal
 * SubscriptionAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionAutomaticTax = {
  disabled_reason?: "requires_location_inputs" | null | undefined;
  enabled: boolean;
  liability?: External$ConnectAccountReference | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionAutomaticTax
 */
const SchemaIn$SubscriptionAutomaticTax: z.ZodType<
  SubscriptionAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disabled_reason: z.enum(["requires_location_inputs"]).nullable().optional(),
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabled_reason: "disabledReason",
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionAutomaticTax
 */
const SchemaOut$SubscriptionAutomaticTax: z.ZodType<
  External$SubscriptionAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionAutomaticTax // the object to be transformed
> = z
  .object({
    disabledReason: z.enum(["requires_location_inputs"]).nullable().optional(),
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabledReason: "disabled_reason",
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionAutomaticTax = {
  in: SchemaIn$SubscriptionAutomaticTax,
  out: SchemaOut$SubscriptionAutomaticTax,
};
