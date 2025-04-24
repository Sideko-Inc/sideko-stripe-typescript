import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./payment-intent-create-body-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
