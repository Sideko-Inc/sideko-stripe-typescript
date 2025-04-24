import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer
 */
export type SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer,
    out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer,
  };
