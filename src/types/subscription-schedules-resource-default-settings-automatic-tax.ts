import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionSchedulesResourceDefaultSettingsAutomaticTax = {
  /**
   * If Stripe disabled automatic tax, this enum describes why.
   */
  disabledReason?: "requires_location_inputs" | null | undefined;
  /**
   * Whether Stripe automatically computes tax on invoices created during this phase.
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
};

/**
 * @internal
 * SubscriptionSchedulesResourceDefaultSettingsAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax =
  {
    disabled_reason?: "requires_location_inputs" | null | undefined;
    enabled: boolean;
    liability?: External$ConnectAccountReference | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionSchedulesResourceDefaultSettingsAutomaticTax
 */
const SchemaIn$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax: z.ZodType<
  SubscriptionSchedulesResourceDefaultSettingsAutomaticTax, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax
 */
const SchemaOut$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax: z.ZodType<
  External$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionSchedulesResourceDefaultSettingsAutomaticTax // the object to be transformed
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

export const Schemas$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax =
  {
    in: SchemaIn$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
    out: SchemaOut$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
  };
