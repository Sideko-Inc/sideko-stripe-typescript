import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
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

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
