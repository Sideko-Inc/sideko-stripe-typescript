import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters =
  {
    /**
     * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
     */
    accountSubcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters =
  {
    account_subcategories?: ("checking" | "savings")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters // the object to be transformed
> = z
  .object({
    accountSubcategories: z.array(z.enum(["checking", "savings"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountSubcategories: "account_subcategories",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters,
  };
