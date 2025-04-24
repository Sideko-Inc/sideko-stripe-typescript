import {
  AccountLinkCreateBodyCollectionOptions,
  External$AccountLinkCreateBodyCollectionOptions,
  Schemas$AccountLinkCreateBodyCollectionOptions,
} from "./account-link-create-body-collection-options";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountLinkCreateBody
 */
export type AccountLinkCreateBody = {
  /**
   * The identifier of the account to create an account link for.
   */
  account: string;
  /**
   * The collect parameter is deprecated. Use `collection_options` instead.
   */
  collect?: ("currently_due" | "eventually_due") | undefined;
  /**
   * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
   */
  collectionOptions?: AccountLinkCreateBodyCollectionOptions | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.
   */
  refreshUrl?: string | undefined;
  /**
   * The URL that the user will be redirected to upon leaving or completing the linked flow.
   */
  returnUrl?: string | undefined;
  /**
   * The type of account link the user is requesting. Possible values are `account_onboarding` or `account_update`.
   */
  type: "account_onboarding" | "account_update";

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | string
    | (("currently_due" | "eventually_due") | undefined)
    | (AccountLinkCreateBodyCollectionOptions | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | ("account_onboarding" | "account_update")
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountLinkCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountLinkCreateBody = {
  account: string;
  collect?: ("currently_due" | "eventually_due") | undefined;
  collection_options?:
    | External$AccountLinkCreateBodyCollectionOptions
    | undefined;
  expand?: string[] | undefined;
  refresh_url?: string | undefined;
  return_url?: string | undefined;
  type: "account_onboarding" | "account_update";

  [additionalProperty: string]:
    | string
    | (("currently_due" | "eventually_due") | undefined)
    | (External$AccountLinkCreateBodyCollectionOptions | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | ("account_onboarding" | "account_update")
    | External$AccountLinkCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountLinkCreateBody
 */
const SchemaIn$AccountLinkCreateBody: z.ZodType<
  AccountLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    collect: z.enum(["currently_due", "eventually_due"]).optional(),
    collection_options:
      Schemas$AccountLinkCreateBodyCollectionOptions.in.optional(),
    expand: z.array(z.string()).optional(),
    refresh_url: z.string().optional(),
    return_url: z.string().optional(),
    type: z.enum(["account_onboarding", "account_update"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      collect: "collect",
      collection_options: "collectionOptions",
      expand: "expand",
      refresh_url: "refreshUrl",
      return_url: "returnUrl",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountLinkCreateBody
 */
const SchemaOut$AccountLinkCreateBody: z.ZodType<
  External$AccountLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountLinkCreateBody // the object to be transformed
> = z
  .object({
    account: z.string(),
    collect: z.enum(["currently_due", "eventually_due"]).optional(),
    collectionOptions:
      Schemas$AccountLinkCreateBodyCollectionOptions.out.optional(),
    expand: z.array(z.string()).optional(),
    refreshUrl: z.string().optional(),
    returnUrl: z.string().optional(),
    type: z.enum(["account_onboarding", "account_update"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      collect: "collect",
      collectionOptions: "collection_options",
      expand: "expand",
      refreshUrl: "refresh_url",
      returnUrl: "return_url",
      type: "type",
    });
  });

export const Schemas$AccountLinkCreateBody = {
  in: SchemaIn$AccountLinkCreateBody,
  out: SchemaOut$AccountLinkCreateBody,
};
