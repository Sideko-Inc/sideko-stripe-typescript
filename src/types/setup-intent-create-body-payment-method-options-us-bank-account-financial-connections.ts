import {
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
} from "./setup-intent-create-body-payment-method-options-us-bank-account-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
export type SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.out.optional(),
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

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  };
