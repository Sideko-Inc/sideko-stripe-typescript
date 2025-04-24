import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  };
