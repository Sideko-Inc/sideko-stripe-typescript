import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./payment-intent-confirm-body-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .optional(),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
