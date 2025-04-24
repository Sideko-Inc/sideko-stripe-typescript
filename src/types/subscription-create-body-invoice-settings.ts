import {
  External$SubscriptionCreateBodyInvoiceSettingsIssuer,
  Schemas$SubscriptionCreateBodyInvoiceSettingsIssuer,
  SubscriptionCreateBodyInvoiceSettingsIssuer,
} from "./subscription-create-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type SubscriptionCreateBodyInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  issuer?: SubscriptionCreateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  issuer?: External$SubscriptionCreateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyInvoiceSettings
 */
const SchemaIn$SubscriptionCreateBodyInvoiceSettings: z.ZodType<
  SubscriptionCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    issuer: Schemas$SubscriptionCreateBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyInvoiceSettings
 */
const SchemaOut$SubscriptionCreateBodyInvoiceSettings: z.ZodType<
  External$SubscriptionCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    issuer: Schemas$SubscriptionCreateBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      issuer: "issuer",
    });
  });

export const Schemas$SubscriptionCreateBodyInvoiceSettings = {
  in: SchemaIn$SubscriptionCreateBodyInvoiceSettings,
  out: SchemaOut$SubscriptionCreateBodyInvoiceSettings,
};
