import {
  AccountExternalAccountCreateBodyBankAccountObj0,
  External$AccountExternalAccountCreateBodyBankAccountObj0,
  Schemas$AccountExternalAccountCreateBodyBankAccountObj0,
} from "./account-external-account-create-body-bank-account-obj0";
import {
  AccountExternalAccountCreateBodyMetadata,
  External$AccountExternalAccountCreateBodyMetadata,
  Schemas$AccountExternalAccountCreateBodyMetadata,
} from "./account-external-account-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountCreateBody
 */
export type AccountExternalAccountCreateBody = {
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?:
    | (AccountExternalAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  /**
   * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.
   */
  externalAccount?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: AccountExternalAccountCreateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((AccountExternalAccountCreateBodyBankAccountObj0 | string) | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (AccountExternalAccountCreateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountExternalAccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountCreateBody = {
  bank_account?:
    | (External$AccountExternalAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  default_for_currency?: boolean | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  metadata?: External$AccountExternalAccountCreateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (
        | (External$AccountExternalAccountCreateBodyBankAccountObj0 | string)
        | undefined
      )
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$AccountExternalAccountCreateBodyMetadata | undefined)
    | External$AccountExternalAccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountCreateBody
 */
const SchemaIn$AccountExternalAccountCreateBody: z.ZodType<
  AccountExternalAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account: z
      .union([
        Schemas$AccountExternalAccountCreateBodyBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
    default_for_currency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    metadata: Schemas$AccountExternalAccountCreateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account: "bankAccount",
      default_for_currency: "defaultForCurrency",
      expand: "expand",
      external_account: "externalAccount",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountCreateBody
 */
const SchemaOut$AccountExternalAccountCreateBody: z.ZodType<
  External$AccountExternalAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountCreateBody // the object to be transformed
> = z
  .object({
    bankAccount: z
      .union([
        Schemas$AccountExternalAccountCreateBodyBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
    defaultForCurrency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    metadata: Schemas$AccountExternalAccountCreateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccount: "bank_account",
      defaultForCurrency: "default_for_currency",
      expand: "expand",
      externalAccount: "external_account",
      metadata: "metadata",
    });
  });

export const Schemas$AccountExternalAccountCreateBody = {
  in: SchemaIn$AccountExternalAccountCreateBody,
  out: SchemaOut$AccountExternalAccountCreateBody,
};
