import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit,
  SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit,
} from "./setup-intent-update-body-payment-method-options-acss-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit,
  SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit,
} from "./setup-intent-update-body-payment-method-options-bacs-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsCard,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCard,
  SetupIntentUpdateBodyPaymentMethodOptionsCard,
} from "./setup-intent-update-body-payment-method-options-card";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsPaypal,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsPaypal,
  SetupIntentUpdateBodyPaymentMethodOptionsPaypal,
} from "./setup-intent-update-body-payment-method-options-paypal";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit,
  SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit,
} from "./setup-intent-update-body-payment-method-options-sepa-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount,
} from "./setup-intent-update-body-payment-method-options-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment method-specific configuration for this SetupIntent.
 */
export type SetupIntentUpdateBodyPaymentMethodOptions = {
  acssDebit?: SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit | undefined;
  amazonPay?: Record<string, any> | undefined;
  bacsDebit?: SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit | undefined;
  card?: SetupIntentUpdateBodyPaymentMethodOptionsCard | undefined;
  cardPresent?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?: SetupIntentUpdateBodyPaymentMethodOptionsPaypal | undefined;
  sepaDebit?: SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit | undefined;
  usBankAccount?:
    | SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptions = {
  acss_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit
    | undefined;
  amazon_pay?: Record<string, any> | undefined;
  bacs_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit
    | undefined;
  card?: External$SetupIntentUpdateBodyPaymentMethodOptionsCard | undefined;
  card_present?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  paypal?: External$SetupIntentUpdateBodyPaymentMethodOptionsPaypal | undefined;
  sepa_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit
    | undefined;
  us_bank_account?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptions
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptions: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit.in.optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    bacs_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit.in.optional(),
    card: Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCard.in.optional(),
    card_present: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsPaypal.in.optional(),
    sepa_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit.in.optional(),
    us_bank_account:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptions
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptions: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsAcssDebit.out.optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    bacsDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsBacsDebit.out.optional(),
    card: Schemas$SetupIntentUpdateBodyPaymentMethodOptionsCard.out.optional(),
    cardPresent: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    paypal:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsPaypal.out.optional(),
    sepaDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsSepaDebit.out.optional(),
    usBankAccount:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount.out.optional(),
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptions = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptions,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptions,
};
