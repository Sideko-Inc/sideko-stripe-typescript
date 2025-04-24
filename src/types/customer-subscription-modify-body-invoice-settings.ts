import {
  CustomerSubscriptionModifyBodyInvoiceSettingsIssuer,
  External$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer,
  Schemas$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer,
} from "./customer-subscription-modify-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type CustomerSubscriptionModifyBodyInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  issuer?: CustomerSubscriptionModifyBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  issuer?:
    | External$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyInvoiceSettings
 */
const SchemaIn$CustomerSubscriptionModifyBodyInvoiceSettings: z.ZodType<
  CustomerSubscriptionModifyBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    issuer:
      Schemas$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyInvoiceSettings
 */
const SchemaOut$CustomerSubscriptionModifyBodyInvoiceSettings: z.ZodType<
  External$CustomerSubscriptionModifyBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    issuer:
      Schemas$CustomerSubscriptionModifyBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      issuer: "issuer",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyInvoiceSettings = {
  in: SchemaIn$CustomerSubscriptionModifyBodyInvoiceSettings,
  out: SchemaOut$CustomerSubscriptionModifyBodyInvoiceSettings,
};
