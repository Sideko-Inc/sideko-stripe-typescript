import {
  External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer,
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer,
} from "./subscription-schedule-update-body-phases-item-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings
 */
export type SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  daysUntilDue?: number | undefined;
  issuer?:
    | SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  days_until_due?: number | undefined;
  issuer?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    days_until_due: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    daysUntilDue: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings,
};
