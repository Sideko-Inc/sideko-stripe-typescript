import {
  CustomerCardCreateBodyBankAccountObj0,
  External$CustomerCardCreateBodyBankAccountObj0,
  Schemas$CustomerCardCreateBodyBankAccountObj0,
} from "./customer-card-create-body-bank-account-obj0";
import {
  CustomerCardCreateBodyCardObj0,
  External$CustomerCardCreateBodyCardObj0,
  Schemas$CustomerCardCreateBodyCardObj0,
} from "./customer-card-create-body-card-obj0";
import {
  CustomerCardCreateBodyMetadata,
  External$CustomerCardCreateBodyMetadata,
  Schemas$CustomerCardCreateBodyMetadata,
} from "./customer-card-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCardCreateBody
 */
export type CustomerCardCreateBody = {
  /**
   * A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.
   */
  alipayAccount?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (CustomerCardCreateBodyBankAccountObj0 | string) | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (CustomerCardCreateBodyCardObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CustomerCardCreateBodyMetadata | undefined;
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | ((CustomerCardCreateBodyBankAccountObj0 | string) | undefined)
    | ((CustomerCardCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (CustomerCardCreateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerCardCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardCreateBody = {
  alipay_account?: string | undefined;
  bank_account?:
    | (External$CustomerCardCreateBodyBankAccountObj0 | string)
    | undefined;
  card?: (External$CustomerCardCreateBodyCardObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: External$CustomerCardCreateBodyMetadata | undefined;
  source?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | ((External$CustomerCardCreateBodyBankAccountObj0 | string) | undefined)
    | ((External$CustomerCardCreateBodyCardObj0 | string) | undefined)
    | (string[] | undefined)
    | (External$CustomerCardCreateBodyMetadata | undefined)
    | (string | undefined)
    | External$CustomerCardCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardCreateBody
 */
const SchemaIn$CustomerCardCreateBody: z.ZodType<
  CustomerCardCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alipay_account: z.string().optional(),
    bank_account: z
      .union([Schemas$CustomerCardCreateBodyBankAccountObj0.in, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerCardCreateBodyCardObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerCardCreateBodyMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardCreateBody
 */
const SchemaOut$CustomerCardCreateBody: z.ZodType<
  External$CustomerCardCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardCreateBody // the object to be transformed
> = z
  .object({
    alipayAccount: z.string().optional(),
    bankAccount: z
      .union([Schemas$CustomerCardCreateBodyBankAccountObj0.out, z.string()])
      .optional(),
    card: z
      .union([Schemas$CustomerCardCreateBodyCardObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$CustomerCardCreateBodyMetadata.out.optional(),
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

export const Schemas$CustomerCardCreateBody = {
  in: SchemaIn$CustomerCardCreateBody,
  out: SchemaOut$CustomerCardCreateBody,
};
