import { External$TaxId, Schemas$TaxId, TaxId } from "./tax-id";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountInvoicesSettings = {
  /**
   * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
   */
  defaultAccountTaxIds?: (string | TaxId)[] | null | undefined;
  /**
   * Whether payment methods should be saved when a payment is completed for a one-time invoices on a hosted invoice page.
   */
  hostedPaymentMethodSave?: ("always" | "never" | "offer") | null | undefined;
};

/**
 * @internal
 * AccountInvoicesSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountInvoicesSettings = {
  default_account_tax_ids?: (string | External$TaxId)[] | null | undefined;
  hosted_payment_method_save?:
    | ("always" | "never" | "offer")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountInvoicesSettings
 */
const SchemaIn$AccountInvoicesSettings: z.ZodType<
  AccountInvoicesSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_account_tax_ids: z
      .array(z.union([z.string(), z.lazy(() => Schemas$TaxId.in)]))
      .nullable()
      .optional(),
    hosted_payment_method_save: z
      .enum(["always", "never", "offer"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_account_tax_ids: "defaultAccountTaxIds",
      hosted_payment_method_save: "hostedPaymentMethodSave",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountInvoicesSettings
 */
const SchemaOut$AccountInvoicesSettings: z.ZodType<
  External$AccountInvoicesSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountInvoicesSettings // the object to be transformed
> = z
  .object({
    defaultAccountTaxIds: z
      .array(z.union([z.string(), z.lazy(() => Schemas$TaxId.out)]))
      .nullable()
      .optional(),
    hostedPaymentMethodSave: z
      .enum(["always", "never", "offer"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultAccountTaxIds: "default_account_tax_ids",
      hostedPaymentMethodSave: "hosted_payment_method_save",
    });
  });

export const Schemas$AccountInvoicesSettings = {
  in: SchemaIn$AccountInvoicesSettings,
  out: SchemaOut$AccountInvoicesSettings,
};
