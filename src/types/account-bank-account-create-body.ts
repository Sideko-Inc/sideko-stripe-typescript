import {
  AccountBankAccountCreateBodyBankAccountObj0,
  External$AccountBankAccountCreateBodyBankAccountObj0,
  Schemas$AccountBankAccountCreateBodyBankAccountObj0,
} from "./account-bank-account-create-body-bank-account-obj0";
import {
  AccountBankAccountCreateBodyMetadata,
  External$AccountBankAccountCreateBodyMetadata,
  Schemas$AccountBankAccountCreateBodyMetadata,
} from "./account-bank-account-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountBankAccountCreateBody
 */
export type AccountBankAccountCreateBody = {
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?:
    | (AccountBankAccountCreateBodyBankAccountObj0 | string)
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
  metadata?: AccountBankAccountCreateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((AccountBankAccountCreateBodyBankAccountObj0 | string) | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (AccountBankAccountCreateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountBankAccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountBankAccountCreateBody = {
  bank_account?:
    | (External$AccountBankAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  default_for_currency?: boolean | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  metadata?: External$AccountBankAccountCreateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (
        | (External$AccountBankAccountCreateBodyBankAccountObj0 | string)
        | undefined
      )
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$AccountBankAccountCreateBodyMetadata | undefined)
    | External$AccountBankAccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountBankAccountCreateBody
 */
const SchemaIn$AccountBankAccountCreateBody: z.ZodType<
  AccountBankAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account: z
      .union([
        Schemas$AccountBankAccountCreateBodyBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
    default_for_currency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    metadata: Schemas$AccountBankAccountCreateBodyMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountBankAccountCreateBody
 */
const SchemaOut$AccountBankAccountCreateBody: z.ZodType<
  External$AccountBankAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountBankAccountCreateBody // the object to be transformed
> = z
  .object({
    bankAccount: z
      .union([
        Schemas$AccountBankAccountCreateBodyBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
    defaultForCurrency: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    metadata: Schemas$AccountBankAccountCreateBodyMetadata.out.optional(),
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

export const Schemas$AccountBankAccountCreateBody = {
  in: SchemaIn$AccountBankAccountCreateBody,
  out: SchemaOut$AccountBankAccountCreateBody,
};
