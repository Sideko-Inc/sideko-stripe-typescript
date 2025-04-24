import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  };
