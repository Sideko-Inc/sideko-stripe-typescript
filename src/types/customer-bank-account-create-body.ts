import {
  CustomerBankAccountCreateBodyBankAccountObj0,
  External$CustomerBankAccountCreateBodyBankAccountObj0,
  Schemas$CustomerBankAccountCreateBodyBankAccountObj0,
} from "./customer-bank-account-create-body-bank-account-obj0";
import {
  CustomerBankAccountCreateBodyCardObj0,
  External$CustomerBankAccountCreateBodyCardObj0,
  Schemas$CustomerBankAccountCreateBodyCardObj0,
} from "./customer-bank-account-create-body-card-obj0";
import {
  CustomerBankAccountCreateBodyMetadata,
  External$CustomerBankAccountCreateBodyMetadata,
  Schemas$CustomerBankAccountCreateBodyMetadata,
} from "./customer-bank-account-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountCreateBody
 */
export type CustomerBankAccountCreateBody = {
  /**
   * A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.
   */
  alipayAccount?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?:
    | (CustomerBankAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerBankAccountCreateBodyCardObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CustomerBankAccountCreateBodyMetadata | undefined;
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | ((CustomerBankAccountCreateBodyBankAccountObj0 | string) | undefined)
    | ((CustomerBankAccountCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (CustomerBankAccountCreateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerBankAccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountCreateBody = {
  alipay_account?: string | undefined;
  bank_account?:
    | (External$CustomerBankAccountCreateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerBankAccountCreateBodyCardObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: External$CustomerBankAccountCreateBodyMetadata | undefined;
  source?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (
        | (External$CustomerBankAccountCreateBodyBankAccountObj0 | string)
        | undefined
      )
    | ((External$CustomerBankAccountCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (External$CustomerBankAccountCreateBodyMetadata | undefined)
    | (string | undefined)
    | External$CustomerBankAccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountCreateBody
 */
const SchemaIn$CustomerBankAccountCreateBody: z.ZodType<
  CustomerBankAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alipay_account: z.string().optional(),
    bank_account: z
      .union([
        Schemas$CustomerBankAccountCreateBodyBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([Schemas$CustomerBankAccountCreateBodyCardObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerBankAccountCreateBodyMetadata.in.optional(),
    source: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alipay_account: "alipayAccount",
      bank_account: "bankAccount",
      card: "card",
      expand: "expand",
      metadata: "metadata",
      source: "source",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountCreateBody
 */
const SchemaOut$CustomerBankAccountCreateBody: z.ZodType<
  External$CustomerBankAccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountCreateBody // the object to be transformed
> = z
  .object({
    alipayAccount: z.string().optional(),
    bankAccount: z
      .union([
        Schemas$CustomerBankAccountCreateBodyBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([Schemas$CustomerBankAccountCreateBodyCardObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerBankAccountCreateBodyMetadata.out.optional(),
    source: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alipayAccount: "alipay_account",
      bankAccount: "bank_account",
      card: "card",
      expand: "expand",
      metadata: "metadata",
      source: "source",
    });
  });

export const Schemas$CustomerBankAccountCreateBody = {
  in: SchemaIn$CustomerBankAccountCreateBody,
  out: SchemaOut$CustomerBankAccountCreateBody,
};
