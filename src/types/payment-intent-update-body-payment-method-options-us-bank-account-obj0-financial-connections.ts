import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters,
} from "./payment-intent-update-body-payment-method-options-us-bank-account-obj0-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    filters?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnectionsFilters.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsUsBankAccountObj0FinancialConnections,
  };
