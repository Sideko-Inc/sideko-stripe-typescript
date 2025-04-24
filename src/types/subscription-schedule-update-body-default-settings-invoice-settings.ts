import {
  External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer,
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer,
} from "./subscription-schedule-update-body-default-settings-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings
 */
export type SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  daysUntilDue?: number | undefined;
  issuer?:
    | SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings =
  {
    account_tax_ids?: (string[] | string) | undefined;
    days_until_due?: number | undefined;
    issuer?:
      | External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    days_until_due: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    daysUntilDue: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings,
    out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings,
  };
