import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit,
  SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit,
} from "./setup-intent-confirm-body-payment-method-options-acss-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit,
  SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit,
} from "./setup-intent-confirm-body-payment-method-options-bacs-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsCard,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCard,
  SetupIntentConfirmBodyPaymentMethodOptionsCard,
} from "./setup-intent-confirm-body-payment-method-options-card";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsPaypal,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsPaypal,
  SetupIntentConfirmBodyPaymentMethodOptionsPaypal,
} from "./setup-intent-confirm-body-payment-method-options-paypal";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit,
  SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit,
} from "./setup-intent-confirm-body-payment-method-options-sepa-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount,
} from "./setup-intent-confirm-body-payment-method-options-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment method-specific configuration for this SetupIntent.
 */
export type SetupIntentConfirmBodyPaymentMethodOptions = {
  acssDebit?: SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit | undefined;
  amazonPay?: Record<string, any> | undefined;
  bacsDebit?: SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit | undefined;
  card?: SetupIntentConfirmBodyPaymentMethodOptionsCard | undefined;
  cardPresent?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?: SetupIntentConfirmBodyPaymentMethodOptionsPaypal | undefined;
  sepaDebit?: SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit | undefined;
  usBankAccount?:
    | SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptions = {
  acss_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit
    | undefined;
  amazon_pay?: Record<string, any> | undefined;
  bacs_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit
    | undefined;
  card?: External$SetupIntentConfirmBodyPaymentMethodOptionsCard | undefined;
  card_present?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsPaypal
    | undefined;
  sepa_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit
    | undefined;
  us_bank_account?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptions
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptions: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit.in.optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    bacs_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit.in.optional(),
    card: Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCard.in.optional(),
    card_present: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsPaypal.in.optional(),
    sepa_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit.in.optional(),
    us_bank_account:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptions
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptions: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsAcssDebit.out.optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    bacsDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsBacsDebit.out.optional(),
    card: Schemas$SetupIntentConfirmBodyPaymentMethodOptionsCard.out.optional(),
    cardPresent: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsPaypal.out.optional(),
    sepaDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsSepaDebit.out.optional(),
    usBankAccount:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount.out.optional(),
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptions = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptions,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptions,
};
