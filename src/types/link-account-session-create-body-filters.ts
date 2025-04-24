import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Filters to restrict the kinds of accounts to collect.
 */
export type LinkAccountSessionCreateBodyFilters = {
  accountSubcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | undefined;
  countries?: string[] | undefined;
};

/**
 * @internal
 * LinkAccountSessionCreateBodyFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkAccountSessionCreateBodyFilters = {
  account_subcategories?:
    | ("checking" | "credit_card" | "line_of_credit" | "mortgage" | "savings")[]
    | undefined;
  countries?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkAccountSessionCreateBodyFilters
 */
const SchemaIn$LinkAccountSessionCreateBodyFilters: z.ZodType<
  LinkAccountSessionCreateBodyFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkAccountSessionCreateBodyFilters
 */
const SchemaOut$LinkAccountSessionCreateBodyFilters: z.ZodType<
  External$LinkAccountSessionCreateBodyFilters, // output type of this zod object
  z.ZodTypeDef,
  LinkAccountSessionCreateBodyFilters // the object to be transformed
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

export const Schemas$LinkAccountSessionCreateBodyFilters = {
  in: SchemaIn$LinkAccountSessionCreateBodyFilters,
  out: SchemaOut$LinkAccountSessionCreateBodyFilters,
};
