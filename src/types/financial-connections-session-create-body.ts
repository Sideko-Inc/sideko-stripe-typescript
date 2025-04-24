import {
  External$FinancialConnectionsSessionCreateBodyAccountHolder,
  FinancialConnectionsSessionCreateBodyAccountHolder,
  Schemas$FinancialConnectionsSessionCreateBodyAccountHolder,
} from "./financial-connections-session-create-body-account-holder";
import {
  External$FinancialConnectionsSessionCreateBodyFilters,
  FinancialConnectionsSessionCreateBodyFilters,
  Schemas$FinancialConnectionsSessionCreateBodyFilters,
} from "./financial-connections-session-create-body-filters";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialConnectionsSessionCreateBody
 */
export type FinancialConnectionsSessionCreateBody = {
  /**
   * The account holder to link accounts for.
   */
  accountHolder: FinancialConnectionsSessionCreateBodyAccountHolder;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Filters to restrict the kinds of accounts to collect.
   */
  filters?: FinancialConnectionsSessionCreateBodyFilters | undefined;
  /**
   * List of data features that you would like to request access to.
   *
   * Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
   */
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  /**
   * List of data features that you would like to retrieve upon account creation.
   */
  prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  returnUrl?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | FinancialConnectionsSessionCreateBodyAccountHolder
    | (string[] | undefined)
    | (FinancialConnectionsSessionCreateBodyFilters | undefined)
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | (("balances" | "ownership" | "transactions")[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * FinancialConnectionsSessionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsSessionCreateBody = {
  account_holder: External$FinancialConnectionsSessionCreateBodyAccountHolder;
  expand?: string[] | undefined;
  filters?: External$FinancialConnectionsSessionCreateBodyFilters | undefined;
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  return_url?: string | undefined;

  [additionalProperty: string]:
    | External$FinancialConnectionsSessionCreateBodyAccountHolder
    | (string[] | undefined)
    | (External$FinancialConnectionsSessionCreateBodyFilters | undefined)
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | (("balances" | "ownership" | "transactions")[] | undefined)
    | (string | undefined)
    | External$FinancialConnectionsSessionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsSessionCreateBody
 */
const SchemaIn$FinancialConnectionsSessionCreateBody: z.ZodType<
  FinancialConnectionsSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder:
      Schemas$FinancialConnectionsSessionCreateBodyAccountHolder.in,
    expand: z.array(z.string()).optional(),
    filters: Schemas$FinancialConnectionsSessionCreateBodyFilters.in.optional(),
    permissions: z.array(
      z.enum(["balances", "ownership", "payment_method", "transactions"]),
    ),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
    return_url: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder: "accountHolder",
      expand: "expand",
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
      return_url: "returnUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsSessionCreateBody
 */
const SchemaOut$FinancialConnectionsSessionCreateBody: z.ZodType<
  External$FinancialConnectionsSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsSessionCreateBody // the object to be transformed
> = z
  .object({
    accountHolder:
      Schemas$FinancialConnectionsSessionCreateBodyAccountHolder.out,
    expand: z.array(z.string()).optional(),
    filters:
      Schemas$FinancialConnectionsSessionCreateBodyFilters.out.optional(),
    permissions: z.array(
      z.enum(["balances", "ownership", "payment_method", "transactions"]),
    ),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .optional(),
    returnUrl: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolder: "account_holder",
      expand: "expand",
      filters: "filters",
      permissions: "permissions",
      prefetch: "prefetch",
      returnUrl: "return_url",
    });
  });

export const Schemas$FinancialConnectionsSessionCreateBody = {
  in: SchemaIn$FinancialConnectionsSessionCreateBody,
  out: SchemaOut$FinancialConnectionsSessionCreateBody,
};
