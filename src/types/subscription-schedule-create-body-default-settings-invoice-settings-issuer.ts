import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer
 */
export type SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * @internal
 * SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer: z.ZodType<
  SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer,
    out: SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer,
  };
