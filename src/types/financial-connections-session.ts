import {
  BankConnectionsResourceAccountholder,
  External$BankConnectionsResourceAccountholder,
  Schemas$BankConnectionsResourceAccountholder,
} from "./bank-connections-resource-accountholder";
import {
  BankConnectionsResourceLinkAccountSessionFilters,
  External$BankConnectionsResourceLinkAccountSessionFilters,
  Schemas$BankConnectionsResourceLinkAccountSessionFilters,
} from "./bank-connections-resource-link-account-session-filters";
import {
  External$FinancialConnectionsSessionAccounts,
  FinancialConnectionsSessionAccounts,
  Schemas$FinancialConnectionsSessionAccounts,
} from "./financial-connections-session-accounts";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
 */
export type FinancialConnectionsSession = {
  accountHolder?: BankConnectionsResourceAccountholder | undefined;
  /**
   * The accounts that were collected as part of this Session.
   */
  accounts: FinancialConnectionsSessionAccounts;
  /**
   * A value that will be passed to the client to launch the authentication flow.
   */
  clientSecret: string;
  filters?: BankConnectionsResourceLinkAccountSessionFilters | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "financial_connections.session";
  /**
   * Permissions requested for accounts collected during this session.
   */
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
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
 * FinancialConnectionsSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsSession = {
  account_holder?: External$BankConnectionsResourceAccountholder | undefined;
  accounts: External$FinancialConnectionsSessionAccounts;
  client_secret: string;
  filters?:
    | External$BankConnectionsResourceLinkAccountSessionFilters
    | undefined;
  id: string;
  livemode: boolean;
  object: "financial_connections.session";
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  prefetch?: ("balances" | "ownership" | "transactions")[] | null | undefined;
  return_url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsSession
 */
const SchemaIn$FinancialConnectionsSession: z.ZodType<
  FinancialConnectionsSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder: z.lazy(() =>
      Schemas$BankConnectionsResourceAccountholder.in.optional(),
    ),
    accounts: z.lazy(() => Schemas$FinancialConnectionsSessionAccounts.in),
    client_secret: z.string(),
    filters:
      Schemas$BankConnectionsResourceLinkAccountSessionFilters.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.session"]),
    permissions: z.array(
      z.enum(["balances", "ownership", "payment_method", "transactions"]),
    ),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
    return_url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder: "accountHolder",
      accounts: "accounts",
      client_secret: "clientSecret",
      filters: "filters",
      id: "id",
      livemode: "livemode",
      object: "object",
      permissions: "permissions",
      prefetch: "prefetch",
      return_url: "returnUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsSession
 */
const SchemaOut$FinancialConnectionsSession: z.ZodType<
  External$FinancialConnectionsSession, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsSession // the object to be transformed
> = z
  .object({
    accountHolder: z.lazy(() =>
      Schemas$BankConnectionsResourceAccountholder.out.optional(),
    ),
    accounts: z.lazy(() => Schemas$FinancialConnectionsSessionAccounts.out),
    clientSecret: z.string(),
    filters:
      Schemas$BankConnectionsResourceLinkAccountSessionFilters.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.session"]),
    permissions: z.array(
      z.enum(["balances", "ownership", "payment_method", "transactions"]),
    ),
    prefetch: z
      .array(z.enum(["balances", "ownership", "transactions"]))
      .nullable()
      .optional(),
    returnUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolder: "account_holder",
      accounts: "accounts",
      clientSecret: "client_secret",
      filters: "filters",
      id: "id",
      livemode: "livemode",
      object: "object",
      permissions: "permissions",
      prefetch: "prefetch",
      returnUrl: "return_url",
    });
  });

export const Schemas$FinancialConnectionsSession = {
  in: SchemaIn$FinancialConnectionsSession,
  out: SchemaOut$FinancialConnectionsSession,
};
