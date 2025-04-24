import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
export type SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  };
