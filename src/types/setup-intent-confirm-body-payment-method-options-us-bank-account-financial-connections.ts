import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
} from "./setup-intent-confirm-body-payment-method-options-us-bank-account-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.out.optional(),
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
    out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  };
