import {
  External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit,
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebit,
} from "./setup-intent-create-body-payment-method-options-acss-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit,
  SetupIntentCreateBodyPaymentMethodOptionsBacsDebit,
} from "./setup-intent-create-body-payment-method-options-bacs-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsCard,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsCard,
  SetupIntentCreateBodyPaymentMethodOptionsCard,
} from "./setup-intent-create-body-payment-method-options-card";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsPaypal,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsPaypal,
  SetupIntentCreateBodyPaymentMethodOptionsPaypal,
} from "./setup-intent-create-body-payment-method-options-paypal";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit,
  SetupIntentCreateBodyPaymentMethodOptionsSepaDebit,
} from "./setup-intent-create-body-payment-method-options-sepa-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount,
} from "./setup-intent-create-body-payment-method-options-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment method-specific configuration for this SetupIntent.
 */
export type SetupIntentCreateBodyPaymentMethodOptions = {
  acssDebit?: SetupIntentCreateBodyPaymentMethodOptionsAcssDebit | undefined;
  amazonPay?: Record<string, any> | undefined;
  bacsDebit?: SetupIntentCreateBodyPaymentMethodOptionsBacsDebit | undefined;
  card?: SetupIntentCreateBodyPaymentMethodOptionsCard | undefined;
  cardPresent?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?: SetupIntentCreateBodyPaymentMethodOptionsPaypal | undefined;
  sepaDebit?: SetupIntentCreateBodyPaymentMethodOptionsSepaDebit | undefined;
  usBankAccount?:
    | SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptions = {
  acss_debit?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit
    | undefined;
  amazon_pay?: Record<string, any> | undefined;
  bacs_debit?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit
    | undefined;
  card?: External$SetupIntentCreateBodyPaymentMethodOptionsCard | undefined;
  card_present?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?: External$SetupIntentCreateBodyPaymentMethodOptionsPaypal | undefined;
  sepa_debit?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit
    | undefined;
  us_bank_account?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit.in.optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    bacs_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit.in.optional(),
    card: Schemas$SetupIntentCreateBodyPaymentMethodOptionsCard.in.optional(),
    card_present: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsPaypal.in.optional(),
    sepa_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit.in.optional(),
    us_bank_account:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      amazon_pay: "amazonPay",
      bacs_debit: "bacsDebit",
      card: "card",
      card_present: "cardPresent",
      link: "link",
      paypal: "paypal",
      sepa_debit: "sepaDebit",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebit.out.optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    bacsDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsBacsDebit.out.optional(),
    card: Schemas$SetupIntentCreateBodyPaymentMethodOptionsCard.out.optional(),
    cardPresent: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsPaypal.out.optional(),
    sepaDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsSepaDebit.out.optional(),
    usBankAccount:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      amazonPay: "amazon_pay",
      bacsDebit: "bacs_debit",
      card: "card",
      cardPresent: "card_present",
      link: "link",
      paypal: "paypal",
      sepaDebit: "sepa_debit",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptions = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptions,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptions,
};
