import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer
 */
export type SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer,
  };
