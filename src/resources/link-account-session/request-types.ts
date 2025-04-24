import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$LinkAccountSessionCreateBodyAccountHolder,
  LinkAccountSessionCreateBodyAccountHolder,
  Schemas$LinkAccountSessionCreateBodyAccountHolder,
} from "@sideko-inc/stripe/types/link-account-session-create-body-account-holder";
import {
  External$LinkAccountSessionCreateBodyFilters,
  LinkAccountSessionCreateBodyFilters,
  Schemas$LinkAccountSessionCreateBodyFilters,
} from "@sideko-inc/stripe/types/link-account-session-create-body-filters";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  session: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  session: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    session: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  account_holder: External$LinkAccountSessionCreateBodyAccountHolder;
  expand?: string[] | undefined;
  filters?: External$LinkAccountSessionCreateBodyFilters | undefined;
  permissions: ("balances" | "ownership" | "payment_method" | "transactions")[];
  prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
  return_url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
