import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceLinkAccountSessionFilters = {
  /**
   * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
   */
  accountSubcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | null
    | undefined;
  /**
   * List of countries from which to filter accounts.
   */
  countries?: string[] | null | undefined;
};

/**
 * @internal
 * BankConnectionsResourceLinkAccountSessionFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceLinkAccountSessionFilters = {
  account_subcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | null
    | undefined;
  countries?: string[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceLinkAccountSessionFilters
 */
const SchemaIn$BankConnectionsResourceLinkAccountSessionFilters: z.ZodType<
  BankConnectionsResourceLinkAccountSessionFilters, // output type of this zod object
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
      .nullable()
      .optional(),
    countries: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_subcategories: "accountSubcategories",
      countries: "countries",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceLinkAccountSessionFilters
 */
const SchemaOut$BankConnectionsResourceLinkAccountSessionFilters: z.ZodType<
  External$BankConnectionsResourceLinkAccountSessionFilters, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceLinkAccountSessionFilters // the object to be transformed
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
      .nullable()
      .optional(),
    countries: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
      countries: "countries",
    });
  });

export const Schemas$BankConnectionsResourceLinkAccountSessionFilters = {
  in: SchemaIn$BankConnectionsResourceLinkAccountSessionFilters,
  out: SchemaOut$BankConnectionsResourceLinkAccountSessionFilters,
};
