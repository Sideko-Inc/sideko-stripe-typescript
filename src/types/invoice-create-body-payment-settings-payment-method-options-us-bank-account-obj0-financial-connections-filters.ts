import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  };
