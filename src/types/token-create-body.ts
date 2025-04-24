import {
  External$TokenCreateBodyAccount,
  Schemas$TokenCreateBodyAccount,
  TokenCreateBodyAccount,
} from "./token-create-body-account";
import {
  External$TokenCreateBodyBankAccount,
  Schemas$TokenCreateBodyBankAccount,
  TokenCreateBodyBankAccount,
} from "./token-create-body-bank-account";
import {
  External$TokenCreateBodyCardObj0,
  Schemas$TokenCreateBodyCardObj0,
  TokenCreateBodyCardObj0,
} from "./token-create-body-card-obj0";
import {
  External$TokenCreateBodyCvcUpdate,
  Schemas$TokenCreateBodyCvcUpdate,
  TokenCreateBodyCvcUpdate,
} from "./token-create-body-cvc-update";
import {
  External$TokenCreateBodyPerson,
  Schemas$TokenCreateBodyPerson,
  TokenCreateBodyPerson,
} from "./token-create-body-person";
import {
  External$TokenCreateBodyPii,
  Schemas$TokenCreateBodyPii,
  TokenCreateBodyPii,
} from "./token-create-body-pii";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBody
 */
export type TokenCreateBody = {
  /**
   * Information for the account this token represents.
   */
  account?: TokenCreateBodyAccount | undefined;
  /**
   * The bank account this token will represent.
   */
  bankAccount?: TokenCreateBodyBankAccount | undefined;
  /**
   * The card this token will represent. If you also pass in a customer, the card must be the ID of a card belonging to the customer. Otherwise, if you do not pass in a customer, this is a dictionary containing a user's credit card details, with the options described below.
   */
  card?: (TokenCreateBodyCardObj0 | string) | undefined;
  /**
   * Create a token for the customer, which is owned by the application's account. You can only use this with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). Learn more about [cloning saved payment methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
   */
  customer?: string | undefined;
  /**
   * The updated CVC value this token represents.
   */
  cvcUpdate?: TokenCreateBodyCvcUpdate | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information for the person this token represents.
   */
  person?: TokenCreateBodyPerson | undefined;
  /**
   * The PII this token represents.
   */
  pii?: TokenCreateBodyPii | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TokenCreateBodyAccount | undefined)
    | (TokenCreateBodyBankAccount | undefined)
    | ((TokenCreateBodyCardObj0 | string) | undefined)
    | (string | undefined)
    | (TokenCreateBodyCvcUpdate | undefined)
    | (string[] | undefined)
    | (TokenCreateBodyPerson | undefined)
    | (TokenCreateBodyPii | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TokenCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBody = {
  account?: External$TokenCreateBodyAccount | undefined;
  bank_account?: External$TokenCreateBodyBankAccount | undefined;
  card?: (External$TokenCreateBodyCardObj0 | string) | undefined;
  customer?: string | undefined;
  cvc_update?: External$TokenCreateBodyCvcUpdate | undefined;
  expand?: string[] | undefined;
  person?: External$TokenCreateBodyPerson | undefined;
  pii?: External$TokenCreateBodyPii | undefined;

  [additionalProperty: string]:
    | (External$TokenCreateBodyAccount | undefined)
    | (External$TokenCreateBodyBankAccount | undefined)
    | ((External$TokenCreateBodyCardObj0 | string) | undefined)
    | (string | undefined)
    | (External$TokenCreateBodyCvcUpdate | undefined)
    | (string[] | undefined)
    | (External$TokenCreateBodyPerson | undefined)
    | (External$TokenCreateBodyPii | undefined)
    | External$TokenCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBody
 */
const SchemaIn$TokenCreateBody: z.ZodType<
  TokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: Schemas$TokenCreateBodyAccount.in.optional(),
    bank_account: Schemas$TokenCreateBodyBankAccount.in.optional(),
    card: z.union([Schemas$TokenCreateBodyCardObj0.in, z.string()]).optional(),
    customer: z.string().optional(),
    cvc_update: Schemas$TokenCreateBodyCvcUpdate.in.optional(),
    expand: z.array(z.string()).optional(),
    person: Schemas$TokenCreateBodyPerson.in.optional(),
    pii: Schemas$TokenCreateBodyPii.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      bank_account: "bankAccount",
      card: "card",
      customer: "customer",
      cvc_update: "cvcUpdate",
      expand: "expand",
      person: "person",
      pii: "pii",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBody
 */
const SchemaOut$TokenCreateBody: z.ZodType<
  External$TokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBody // the object to be transformed
> = z
  .object({
    account: Schemas$TokenCreateBodyAccount.out.optional(),
    bankAccount: Schemas$TokenCreateBodyBankAccount.out.optional(),
    card: z.union([Schemas$TokenCreateBodyCardObj0.out, z.string()]).optional(),
    customer: z.string().optional(),
    cvcUpdate: Schemas$TokenCreateBodyCvcUpdate.out.optional(),
    expand: z.array(z.string()).optional(),
    person: Schemas$TokenCreateBodyPerson.out.optional(),
    pii: Schemas$TokenCreateBodyPii.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      bankAccount: "bank_account",
      card: "card",
      customer: "customer",
      cvcUpdate: "cvc_update",
      expand: "expand",
      person: "person",
      pii: "pii",
    });
  });

export const Schemas$TokenCreateBody = {
  in: SchemaIn$TokenCreateBody,
  out: SchemaOut$TokenCreateBody,
};
