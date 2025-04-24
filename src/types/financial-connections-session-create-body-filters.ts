import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Filters to restrict the kinds of accounts to collect.
 */
export type FinancialConnectionsSessionCreateBodyFilters = {
  accountSubcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | undefined;
  countries?: string[] | undefined;
};

/**
 * @internal
 * FinancialConnectionsSessionCreateBodyFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsSessionCreateBodyFilters = {
  account_subcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | undefined;
  countries?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsSessionCreateBodyFilters
 */
const SchemaIn$FinancialConnectionsSessionCreateBodyFilters: z.ZodType<
  FinancialConnectionsSessionCreateBodyFilters, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_subcategories: z
      .array(
        z.enum([
          "checking",
          "credit_card",
          "line_of_credit",
          "mortgage",
          "savings",
        ]),
      )
      .optional(),
    countries: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_subcategories: "accountSubcategories",
      countries: "countries",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsSessionCreateBodyFilters
 */
const SchemaOut$FinancialConnectionsSessionCreateBodyFilters: z.ZodType<
  External$FinancialConnectionsSessionCreateBodyFilters, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsSessionCreateBodyFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z
      .array(
        z.enum([
          "checking",
          "credit_card",
          "line_of_credit",
          "mortgage",
          "savings",
        ]),
      )
      .optional(),
    countries: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
      countries: "countries",
    });
  });

export const Schemas$FinancialConnectionsSessionCreateBodyFilters = {
  in: SchemaIn$FinancialConnectionsSessionCreateBodyFilters,
  out: SchemaOut$FinancialConnectionsSessionCreateBodyFilters,
};
