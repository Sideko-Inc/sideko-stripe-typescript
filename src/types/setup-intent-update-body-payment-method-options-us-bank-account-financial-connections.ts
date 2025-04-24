import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters,
} from "./setup-intent-update-body-payment-method-options-us-bank-account-financial-connections-filters";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    returnUrl?: string | undefined;
  };

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    filters?:
      | External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters
      | undefined;
    permissions?:
      | ("balances" | "ownership" | "payment_method" | "transactions")[]
      | undefined;
    prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
    return_url?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections // the object to be transformed
> = z
  .object({
    filters:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnectionsFilters.out.optional(),
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections =
  {
    in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
    out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  };
