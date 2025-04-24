import {
  External$LinkAccountSessionCreateBodyAccountHolder,
  LinkAccountSessionCreateBodyAccountHolder,
  Schemas$LinkAccountSessionCreateBodyAccountHolder,
} from "./link-account-session-create-body-account-holder";
import {
  External$LinkAccountSessionCreateBodyFilters,
  LinkAccountSessionCreateBodyFilters,
  Schemas$LinkAccountSessionCreateBodyFilters,
} from "./link-account-session-create-body-filters";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * LinkAccountSessionCreateBody
 */
export type LinkAccountSessionCreateBody = {
  /**
   * The account holder to link accounts for.
   */
  accountHolder: LinkAccountSessionCreateBodyAccountHolder;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Filters to restrict the kinds of accounts to collect.
   */
  filters?: LinkAccountSessionCreateBodyFilters | undefined;
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
    | LinkAccountSessionCreateBodyAccountHolder
    | (string[] | undefined)
    | (LinkAccountSessionCreateBodyFilters | undefined)
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | (("balances" | "ownership" | "transactions")[] | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * LinkAccountSessionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkAccountSessionCreateBody = {
  account_holder: External$LinkAccountSessionCreateBodyAccountHolder;
  expand?: string[] | undefined;
  filters?: External$LinkAccountSessionCreateBodyFilters | undefined;
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  return_url?: string | undefined;

  [additionalProperty: string]:
    | External$LinkAccountSessionCreateBodyAccountHolder
    | (string[] | undefined)
    | (External$LinkAccountSessionCreateBodyFilters | undefined)
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | (("balances" | "ownership" | "transactions")[] | undefined)
    | (string | undefined)
    | External$LinkAccountSessionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkAccountSessionCreateBody
 */
const SchemaIn$LinkAccountSessionCreateBody: z.ZodType<
  LinkAccountSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder: Schemas$LinkAccountSessionCreateBodyAccountHolder.in,
    expand: z.array(z.string()).optional(),
    filters: Schemas$LinkAccountSessionCreateBodyFilters.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkAccountSessionCreateBody
 */
const SchemaOut$LinkAccountSessionCreateBody: z.ZodType<
  External$LinkAccountSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  LinkAccountSessionCreateBody // the object to be transformed
> = z
  .object({
    accountHolder: Schemas$LinkAccountSessionCreateBodyAccountHolder.out,
    expand: z.array(z.string()).optional(),
    filters: Schemas$LinkAccountSessionCreateBodyFilters.out.optional(),
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

export const Schemas$LinkAccountSessionCreateBody = {
  in: SchemaIn$LinkAccountSessionCreateBody,
  out: SchemaOut$LinkAccountSessionCreateBody,
};
