import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_subcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_subcategories: "accountSubcategories",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  };
