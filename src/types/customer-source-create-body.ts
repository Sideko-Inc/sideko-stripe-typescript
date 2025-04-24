import {
  CustomerSourceCreateBodyBankAccountObj0,
  External$CustomerSourceCreateBodyBankAccountObj0,
  Schemas$CustomerSourceCreateBodyBankAccountObj0,
} from "./customer-source-create-body-bank-account-obj0";
import {
  CustomerSourceCreateBodyCardObj0,
  External$CustomerSourceCreateBodyCardObj0,
  Schemas$CustomerSourceCreateBodyCardObj0,
} from "./customer-source-create-body-card-obj0";
import {
  CustomerSourceCreateBodyMetadata,
  External$CustomerSourceCreateBodyMetadata,
  Schemas$CustomerSourceCreateBodyMetadata,
} from "./customer-source-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSourceCreateBody
 */
export type CustomerSourceCreateBody = {
  /**
   * A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.
   */
  alipayAccount?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (CustomerSourceCreateBodyBankAccountObj0 | string) | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerSourceCreateBodyCardObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CustomerSourceCreateBodyMetadata | undefined;
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | ((CustomerSourceCreateBodyBankAccountObj0 | string) | undefined)
    | ((CustomerSourceCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (CustomerSourceCreateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSourceCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSourceCreateBody = {
  alipay_account?: string | undefined;
  bank_account?:
    | (External$CustomerSourceCreateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerSourceCreateBodyCardObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: External$CustomerSourceCreateBodyMetadata | undefined;
  source?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | ((External$CustomerSourceCreateBodyBankAccountObj0 | string) | undefined)
    | ((External$CustomerSourceCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (External$CustomerSourceCreateBodyMetadata | undefined)
    | (string | undefined)
    | External$CustomerSourceCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSourceCreateBody
 */
const SchemaIn$CustomerSourceCreateBody: z.ZodType<
  CustomerSourceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alipay_account: z.string().optional(),
    bank_account: z
      .union([Schemas$CustomerSourceCreateBodyBankAccountObj0.in, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerSourceCreateBodyCardObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerSourceCreateBodyMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSourceCreateBody
 */
const SchemaOut$CustomerSourceCreateBody: z.ZodType<
  External$CustomerSourceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSourceCreateBody // the object to be transformed
> = z
  .object({
    alipayAccount: z.string().optional(),
    bankAccount: z
      .union([Schemas$CustomerSourceCreateBodyBankAccountObj0.out, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerSourceCreateBodyCardObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerSourceCreateBodyMetadata.out.optional(),
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

export const Schemas$CustomerSourceCreateBody = {
  in: SchemaIn$CustomerSourceCreateBody,
  out: SchemaOut$CustomerSourceCreateBody,
};
