import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  };
