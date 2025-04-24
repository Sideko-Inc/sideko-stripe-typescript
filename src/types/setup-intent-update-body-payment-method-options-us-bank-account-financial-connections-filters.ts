import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  };
