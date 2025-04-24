import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./invoice-update-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
    });
  });

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
