import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./subscription-update-body-payment-settings-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
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

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
