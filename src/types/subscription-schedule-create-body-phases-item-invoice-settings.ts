import {
  External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer,
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer,
} from "./subscription-schedule-create-body-phases-item-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings
 */
export type SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  daysUntilDue?: number | undefined;
  issuer?:
    | SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  days_until_due?: number | undefined;
  issuer?:
    | External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    days_until_due: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      days_until_due: "daysUntilDue",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    daysUntilDue: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings,
};
