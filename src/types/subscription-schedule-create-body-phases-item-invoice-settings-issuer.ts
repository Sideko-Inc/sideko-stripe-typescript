import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer
 */
export type SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer,
  };
