import {
  External$SubscriptionUpdateBodyInvoiceSettingsIssuer,
  Schemas$SubscriptionUpdateBodyInvoiceSettingsIssuer,
  SubscriptionUpdateBodyInvoiceSettingsIssuer,
} from "./subscription-update-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type SubscriptionUpdateBodyInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  issuer?: SubscriptionUpdateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  issuer?: External$SubscriptionUpdateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyInvoiceSettings
 */
const SchemaIn$SubscriptionUpdateBodyInvoiceSettings: z.ZodType<
  SubscriptionUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    issuer: Schemas$SubscriptionUpdateBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyInvoiceSettings
 */
const SchemaOut$SubscriptionUpdateBodyInvoiceSettings: z.ZodType<
  External$SubscriptionUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    issuer: Schemas$SubscriptionUpdateBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionUpdateBodyInvoiceSettings = {
  in: SchemaIn$SubscriptionUpdateBodyInvoiceSettings,
  out: SchemaOut$SubscriptionUpdateBodyInvoiceSettings,
};
