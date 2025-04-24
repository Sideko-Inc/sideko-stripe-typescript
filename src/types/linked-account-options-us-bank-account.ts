import {
  External$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters,
  PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters,
  Schemas$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters,
} from "./payment-flows-private-payment-methods-us-bank-account-linked-account-options-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LinkedAccountOptionsUsBankAccount = {
  filters?:
    | PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters
    | undefined;
  /**
   * The list of permissions to request. The `payment_method` permission must be included.
   */
  permissions?:
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | undefined;
  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch?: ("balances" | "ownership" | "transactions")[] | null | undefined;
  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  returnUrl?: string | undefined;
};

/**
 * @internal
 * LinkedAccountOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkedAccountOptionsUsBankAccount = {
  filters?:
    | External$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters
    | undefined;
  permissions?:
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | undefined;
  prefetch?: ("balances" | "ownership" | "transactions")[] | null | undefined;
  return_url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkedAccountOptionsUsBankAccount
 */
const SchemaIn$LinkedAccountOptionsUsBankAccount: z.ZodType<
  LinkedAccountOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters.in.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
    return_url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
      return_url: "returnUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkedAccountOptionsUsBankAccount
 */
const SchemaOut$LinkedAccountOptionsUsBankAccount: z.ZodType<
  External$LinkedAccountOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  LinkedAccountOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    filters:
      Schemas$PaymentFlowsPrivatePaymentMethodsUsBankAccountLinkedAccountOptionsFilters.out.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
    returnUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
      returnUrl: "return_url",
    });
  });

export const Schemas$LinkedAccountOptionsUsBankAccount = {
  in: SchemaIn$LinkedAccountOptionsUsBankAccount,
  out: SchemaOut$LinkedAccountOptionsUsBankAccount,
};
