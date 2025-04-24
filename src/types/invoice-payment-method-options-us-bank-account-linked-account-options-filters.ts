import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters =
  {
    /**
     * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
     */
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters
 */
const SchemaIn$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters: z.ZodType<
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters
 */
const SchemaOut$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters: z.ZodType<
  External$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters =
  {
    in: SchemaIn$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters,
    out: SchemaOut$InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters,
  };
