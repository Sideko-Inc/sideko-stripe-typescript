import {
  CustomerSubscriptionCreateBodyInvoiceSettingsIssuer,
  External$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer,
  Schemas$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer,
} from "./customer-subscription-create-body-invoice-settings-issuer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * All invoices will be billed using the specified settings.
 */
export type CustomerSubscriptionCreateBodyInvoiceSettings = {
  accountTaxIds?: (string[] | string) | undefined;
  issuer?: CustomerSubscriptionCreateBodyInvoiceSettingsIssuer | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyInvoiceSettings = {
  account_tax_ids?: (string[] | string) | undefined;
  issuer?:
    | External$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyInvoiceSettings
 */
const SchemaIn$CustomerSubscriptionCreateBodyInvoiceSettings: z.ZodType<
  CustomerSubscriptionCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    issuer:
      Schemas$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      issuer: "issuer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyInvoiceSettings
 */
const SchemaOut$CustomerSubscriptionCreateBodyInvoiceSettings: z.ZodType<
  External$CustomerSubscriptionCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    issuer:
      Schemas$CustomerSubscriptionCreateBodyInvoiceSettingsIssuer.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      issuer: "issuer",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyInvoiceSettings = {
  in: SchemaIn$CustomerSubscriptionCreateBodyInvoiceSettings,
  out: SchemaOut$CustomerSubscriptionCreateBodyInvoiceSettings,
};
