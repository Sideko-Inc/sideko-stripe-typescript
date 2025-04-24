import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsInvoices
 */
export type AccountUpdateBodySettingsInvoices = {
  defaultAccountTaxIds?: (string[] | string) | undefined;
  hostedPaymentMethodSave?: ("always" | "never" | "offer") | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsInvoices without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsInvoices = {
  default_account_tax_ids?: (string[] | string) | undefined;
  hosted_payment_method_save?: ("always" | "never" | "offer") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsInvoices
 */
const SchemaIn$AccountUpdateBodySettingsInvoices: z.ZodType<
  AccountUpdateBodySettingsInvoices, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_account_tax_ids: z
      .union([z.array(z.string()), z.string()])
      .optional(),
    hosted_payment_method_save: z.enum(["always", "never", "offer"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_account_tax_ids: "defaultAccountTaxIds",
      hosted_payment_method_save: "hostedPaymentMethodSave",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsInvoices
 */
const SchemaOut$AccountUpdateBodySettingsInvoices: z.ZodType<
  External$AccountUpdateBodySettingsInvoices, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsInvoices // the object to be transformed
> = z
  .object({
    defaultAccountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    hostedPaymentMethodSave: z.enum(["always", "never", "offer"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultAccountTaxIds: "default_account_tax_ids",
      hostedPaymentMethodSave: "hosted_payment_method_save",
    });
  });

export const Schemas$AccountUpdateBodySettingsInvoices = {
  in: SchemaIn$AccountUpdateBodySettingsInvoices,
  out: SchemaOut$AccountUpdateBodySettingsInvoices,
};
