import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer,
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer,
} from "./invoice-preview-body-schedule-details-phases-item-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  daysUntilDue?: number | undefined;
  issuer?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer
    | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings =
  {
    account_tax_ids?: (string[] | string) | undefined;
    days_until_due?: number | undefined;
    issuer?:
      | External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    days_until_due: z.number().int().optional(),
    issuer:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    daysUntilDue: z.number().int().optional(),
    issuer:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      daysUntilDue: "days_until_due",
      issuer: "issuer",
    });
  });

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings,
  };
