import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  };
