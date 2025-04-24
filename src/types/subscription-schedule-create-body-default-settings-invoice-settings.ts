import {
  External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer,
  Schemas$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer,
  SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer,
} from "./subscription-schedule-create-body-default-settings-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings
 */
export type SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  daysUntilDue?: number | undefined;
  issuer?:
    | SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings =
  {
    account_tax_ids?: (string[] | string) | undefined;
    days_until_due?: number | undefined;
    issuer?:
      | External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings
 */
const SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings: z.ZodType<
  SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    days_until_due: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings
 */
const SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings: z.ZodType<
  External$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    daysUntilDue: z.number().int().optional(),
    issuer:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings,
    out: SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsInvoiceSettings,
  };
